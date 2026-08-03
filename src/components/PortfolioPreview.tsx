import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ShoppingCart, Building2, Cpu, HeartPulse, Briefcase, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "High-converting online stores",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Smart property platforms",
  },
  {
    icon: Cpu,
    title: "Technology",
    description: "SaaS & product launches",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Patient engagement solutions",
  },
  {
    icon: Briefcase,
    title: "Professional",
    description: "Authority & lead generation",
  },
  {
    icon: UtensilsCrossed,
    title: "Hospitality",
    description: "Reservation & local SEO",
  },
];

const CapabilitiesPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Capabilities</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
          </div>
          <Button variant="outline" className="gap-2 group w-fit" asChild>
            <Link to="/portfolio">
              View All Capabilities
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Capabilities Grid - 3 columns */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300 text-center group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                <capability.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-sm font-semibold mb-1">{capability.title}</h3>
              <p className="text-muted-foreground text-xs">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesPreview;
