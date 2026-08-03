import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "340%",
    label: "Average ROI",
    description: "Return on investment for our clients' digital initiatives",
  },
  {
    value: "2.8X",
    label: "Revenue Growth",
    description: "Average revenue increase within the first year",
  },
  {
    value: "$4.2M",
    label: "Cost Savings",
    description: "Total operational costs saved across all client projects",
  },
  {
    value: "65%",
    label: "Efficiency Gain",
    description: "Improvement in business process efficiency",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Real Results</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Data-Driven Impact <span className="gradient-text">That Matters</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our track record speaks for itself. Here's the measurable impact we've delivered for our clients.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl card-gradient border border-border"
            >
              <div className="font-display text-5xl md:text-6xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{stat.label}</h3>
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
