import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Compass, Zap, Users } from "lucide-react";

const principles = [
  {
    icon: Heart,
    title: "Passion-Driven",
    description: "We pour our hearts into every project, treating your business as if it were our own.",
  },
  {
    icon: Compass,
    title: "Strategic Direction",
    description: "Every design decision is guided by your business goals and user needs.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We stay ahead of trends to ensure your website remains cutting-edge.",
  },
  {
    icon: Users,
    title: "User-Centric",
    description: "Beautiful design means nothing if it doesn't serve your audience perfectly.",
  },
];

const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Philosophy</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Crafted With <span className="gradient-text">Intention</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every line of code, every pixel, every interaction is deliberate. We don't believe 
            in accidents—only in purposeful design that drives measurable results.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <blockquote className="relative p-8 rounded-2xl card-gradient border border-border">
            <div className="text-4xl text-primary/30 absolute top-4 left-6">"</div>
            <p className="text-xl md:text-2xl font-display text-center italic text-foreground/90 px-8">
              Great design is not just what it looks like and feels like. Great design is how 
              it works—and how it transforms your business.
            </p>
            <footer className="text-center mt-6 text-primary font-semibold">
              — trikalnetra Philosophy
            </footer>
          </blockquote>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <principle.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{principle.title}</h3>
              <p className="text-muted-foreground text-sm">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
