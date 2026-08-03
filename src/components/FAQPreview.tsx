import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A standard website typically takes 4-8 weeks, while larger enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our discovery phase.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We've successfully delivered projects across e-commerce, real estate, healthcare, hospitality, professional services, and SaaS industries. Our data-driven approach allows us to adapt our strategies to any business vertical.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely! We offer flexible support packages including maintenance, analytics monitoring, content updates, and continuous optimization. We believe in building long-term partnerships with our clients.",
  },
  {
    question: "What makes trikalnetra different from other agencies?",
    answer: "We combine business analytics with creative excellence. Every decision is backed by data, and every design is crafted for conversion. We don't just build websites—we build digital growth engines.",
  },
];

const FAQPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Got questions? We've got answers. Here are some of the most common questions 
              we receive from prospective clients.
            </p>
            <Button variant="outline" className="gap-2 group" asChild>
              <Link to="/faq">
                View All FAQs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;
