import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive digital transformation project could span 3-6 months. We provide detailed timelines during our discovery phase.",
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing based on project scope and requirements. After our initial consultation, we provide a detailed proposal with transparent pricing. We offer both project-based and retainer arrangements depending on your needs.",
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Questions & Answers"
        subtitle="FAQ"
        description="Everything you need to know about working with trikalnetra."
        breadcrumb="FAQ"
        bannerImages={[
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?w=1920&h=600&fit=crop",
        ]}
      />

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-border rounded-xl px-6 bg-background"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're happy to discuss your specific needs and answer any questions you have. 
              Schedule a free consultation with our team.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;
