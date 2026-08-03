import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Code, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  { icon: Search, title: "Discovery", description: "Understanding your goals" },
  { icon: Palette, title: "Design", description: "Creating the vision" },
  { icon: Code, title: "Development", description: "Building with precision" },
  { icon: Rocket, title: "Launch", description: "Delivering excellence" },
];

const ProcessPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-foreground/80 text-sm font-semibold tracking-wider uppercase">Our Process</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              From Vision to Reality
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Our proven methodology has been refined over hundreds of successful projects. 
              We combine strategic thinking with technical excellence to deliver results that exceed expectations.
            </p>
            
            <Button size="lg" variant="secondary" className="gap-2 group" asChild>
              <Link to="/process">
                Explore Our Process
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessPreview;
