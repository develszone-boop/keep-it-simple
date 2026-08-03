import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Building2, 
  Cpu, 
  HeartPulse, 
  Briefcase, 
  UtensilsCrossed,
  ArrowRight
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const capabilities = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Build high-converting online stores with analytics, marketing automation, and SEO that drive sales and customer loyalty.",
    features: ["Product Analytics", "Conversion Optimization", "Marketing Automation"],
  },
  {
    icon: Building2,
    title: "Property & Real Estate",
    description: "Smart property platforms with lead scoring, AI-driven search, and visibility tools that connect sellers with qualified buyers.",
    features: ["Lead Scoring", "Property Showcases", "Local SEO"],
  },
  {
    icon: Cpu,
    title: "Technology & SaaS",
    description: "Launch and scale tech products with conversion-focused platforms, analytics dashboards, and growth marketing.",
    features: ["Product Launches", "Growth Marketing", "Analytics Dashboards"],
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    description: "Digital solutions for healthcare providers including booking systems, patient engagement, and secure platforms.",
    features: ["Booking Systems", "Patient Engagement", "Secure Platforms"],
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    description: "Establish digital authority for law firms, consultancies, and agencies with content strategy and lead generation.",
    features: ["Authority Building", "Content Strategy", "Lead Generation"],
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality & Food",
    description: "Restaurant and hotel solutions with reservation systems, local SEO, and customer acquisition tracking.",
    features: ["Reservation Systems", "Local Search", "Customer Tracking"],
  },
];

const CapabilitiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="What We Can Do For You"
        subtitle="Our Capabilities"
        description="We deliver tailored digital solutions across industries. Here's how we can help your business grow."
        breadcrumb="Capabilities"
        bannerImages={[
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=600&fit=crop",
        ]}
      />

      {/* Capabilities Grid - 3 columns */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <capability.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{capability.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{capability.description}</p>
                <div className="flex flex-wrap gap-2">
                  {capability.features.map((feature) => (
                    <span 
                      key={feature} 
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              We work with businesses across all sectors. Let's discuss how we can help you achieve your goals.
            </p>
            <Button size="lg" variant="secondary" className="gap-2 group" asChild>
              <Link to="/contact">
                Let's Talk
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CapabilitiesPage;
