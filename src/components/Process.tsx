import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into understanding your business, goals, and challenges.",
  },
  {
    number: "02",
    title: "Design & Concept",
    description: "Our team creates innovative concepts and designs tailored to your vision.",
  },
  {
    number: "03",
    title: "Development",
    description: "We bring designs to life with clean, scalable, and efficient code.",
  },
  {
    number: "04",
    title: "Testing & Refinement",
    description: "Rigorous testing ensures everything works flawlessly across all platforms.",
  },
  {
    number: "05",
    title: "Launch",
    description: "We deploy your project with precision and monitor for a smooth launch.",
  },
  {
    number: "06",
    title: "Growth & Support",
    description: "Ongoing optimization and support to ensure continued success.",
  },
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Process</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            From Vision to <span className="gradient-text">Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A proven methodology refined over hundreds of successful projects, designed to 
            deliver exceptional results every time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${index % 2 === 1 ? "lg:mt-24" : ""}`}
              >
                {/* Connector Dot */}
                <div className="hidden lg:block absolute top-8 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
                  style={{
                    left: index % 2 === 0 ? "calc(100% + 24px)" : "-28px",
                  }}
                />

                <div className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-4xl font-bold gradient-text">{step.number}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Ready to start your transformation?</p>
          <Button size="lg" asChild>
            <a href="#contact">Let's Discuss Your Project</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
