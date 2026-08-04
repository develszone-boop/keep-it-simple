import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What exactly does trikalnetra do?",
    answer: "trikalnetra is a full-service digital agency specializing in business analytics, web development, digital marketing, and cybersecurity. We help businesses transform their digital presence and drive measurable growth through data-driven strategies and cutting-edge technology.",
  },
  {
    question: "Do you offer digital marketing or paid advertising services?",
    answer: "Yes! We offer comprehensive digital marketing services including social media marketing, performance marketing, email automation, SEO, and funnel optimization. Our strategies are data-driven and focused on delivering measurable ROI.",
  },
  {
    question: "Can you help if I already have a website?",
    answer: "Absolutely. We specialize in website rebranding and digital transformation. Whether you need a complete redesign, UX enhancement, or performance optimization, we can help transform your existing website into a high-impact digital asset.",
  },
  {
    question: "Do you provide domain and hosting services?",
    answer: "While our primary focus is on development and strategy, we can guide you through domain registration and recommend reliable hosting solutions that fit your needs. We ensure your website is deployed on infrastructure that supports optimal performance.",
  },
  {
    question: "Will my website be fast, mobile-friendly, and SEO-ready?",
    answer: "Yes! Every website we build is optimized for speed, fully responsive across all devices, and built with SEO best practices from the ground up. We ensure your site meets the highest standards for performance and search visibility.",
  },
  {
    question: "Can I manage or update the website myself after launch?",
    answer: "Definitely. We build websites with user-friendly content management systems that allow you to easily update content, add pages, and manage your site without technical expertise. We also provide training and documentation.",
  },
  {
    question: "What happens after the website is launched?",
    answer: "Launch is just the beginning. We offer ongoing support, maintenance, and optimization services. This includes regular updates, security monitoring, performance tracking, and continuous improvements based on analytics data.",
  },
  {
    question: "What makes trikalnetra different from other web agencies?",
    answer: "We combine strategic thinking with technical excellence. Unlike agencies that focus solely on design or development, we approach every project with a business-first mindset, using data and analytics to drive decisions and deliver measurable results.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Questions & <span className="gradient-text">Answers</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to know about working with trikalnetra.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 card-gradient"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 p-8 rounded-2xl card-gradient border border-border max-w-2xl mx-auto"
        >
          <h3 className="font-display text-2xl font-semibold mb-4">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6">
            We're happy to discuss your specific needs and answer any questions you have.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Schedule a Consultation</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
