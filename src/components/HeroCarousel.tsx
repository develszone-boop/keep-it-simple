import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";

import heroBg1 from "@/assets/hero-bg-1.jpg";
import heroBg2 from "@/assets/hero-bg-2.jpg";
import heroBg3 from "@/assets/hero-bg-3.jpg";
import heroBg4 from "@/assets/hero-bg-4.jpg";

const slides = [
  {
    headline: "Smarter Insights",
    subheadline: "Stronger Growth",
    description: "From analytics to marketing, websites to cybersecurity—we provide intelligent, end-to-end solutions that turn businesses into industry leaders.",
    image: heroBg1,
  },
  {
    headline: "Data-Driven",
    subheadline: "Digital Excellence",
    description: "Transform raw data into actionable intelligence with our advanced analytics and business intelligence solutions.",
    image: heroBg2,
  },
  {
    headline: "Transform Your",
    subheadline: "Business Online",
    description: "Modern, high-performance websites crafted to establish trust, engage users, and drive measurable growth.",
    image: heroBg3,
  },
  {
    headline: "Secure, Scalable",
    subheadline: "Successful",
    description: "Enterprise-grade cybersecurity and scalable infrastructure that protects and powers your digital success.",
    image: heroBg4,
  },
];

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    // Mark as initialized after first render
    setIsInitialized(true);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Auto-play
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [emblaApi, isPaused]);

  return (
    <section 
      id="home" 
      className={`relative min-h-screen overflow-hidden pt-20 transition-opacity duration-500 ${isInitialized ? 'opacity-100' : 'opacity-0'}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel */}
      <div className="absolute inset-0" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              {/* Overlay for text readability - Darkened by 30% */}
              <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-muted-foreground">Trusted by industry leaders</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
                  <span className="text-foreground">{slides[selectedIndex].headline}</span>
                  <br />
                  <span className="gradient-text">{slides[selectedIndex].subheadline}</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
                  {slides[selectedIndex].description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button size="lg" className="gap-2 group" asChild>
                    <Link to="/contact">
                      Start Your Project
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2" asChild>
                    <Link to="/portfolio">
                      <Play className="w-4 h-4" />
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Trusted By */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-20"
            >
              <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies</p>
              <div className="flex items-center gap-8 md:gap-16 flex-wrap opacity-60">
                {["Enterprise", "StartupCo", "TechGiant", "Innovate"].map((company) => (
                  <span key={company} className="font-display font-semibold text-lg text-muted-foreground">
                    {company}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              selectedIndex === index 
                ? "bg-primary w-8" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroCarousel;
