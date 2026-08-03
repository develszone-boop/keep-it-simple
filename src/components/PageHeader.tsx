import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumb: string;
  bannerImage?: string;
  bannerImages?: string[];
}

const PageHeader = ({ 
  title, 
  subtitle, 
  description, 
  breadcrumb, 
  bannerImage,
  bannerImages
}: PageHeaderProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  // Use bannerImages array if provided, otherwise use single bannerImage
  const images = bannerImages || (bannerImage ? [bannerImage] : []);
  const hasCarousel = images.length > 1;
  const hasImages = images.length > 0;

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    hasCarousel ? [Autoplay({ delay: 4000, stopOnInteraction: false })] : []
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="flex items-center gap-1 hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">{breadcrumb}</span>
            </div>

            {/* Subtitle */}
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              {subtitle}
            </span>

            {/* Title */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              {title}
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
              {description}
            </p>
          </motion.div>

          {/* Right Column - Image Carousel */}
          {hasImages && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div ref={emblaRef} className="overflow-hidden rounded-2xl shadow-xl">
                <div className="flex">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="flex-[0_0_100%] min-w-0"
                    >
                      <div className="aspect-[16/10]">
                        <img 
                          src={image} 
                          alt={`${title} banner ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Dots - Below image */}
              {hasCarousel && (
                <div className="flex justify-center gap-2 mt-4">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === selectedIndex 
                          ? "bg-primary w-6" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      onClick={() => emblaApi?.scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
