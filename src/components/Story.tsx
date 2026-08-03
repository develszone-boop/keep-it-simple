import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
              Building <span className="gradient-text">Tomorrow's Leaders</span>
            </h2>
          </div>

          {/* Story Content */}
          <div className="prose prose-lg prose-invert mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed mb-6"
            >
              trikalnetra was founded with a simple yet powerful vision: to bridge the gap between 
              complex technology and real business value. What started as a small team of passionate 
              technologists has grown into a full-service digital agency serving clients across 
              industries and continents.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Our journey has been defined by a relentless pursuit of excellence and a deep 
              commitment to our clients' success. We've helped startups scale into industry leaders, 
              transformed legacy systems into modern digital platforms, and delivered solutions that 
              have generated millions in value for our partners. Today, we continue to push boundaries, 
              embrace new technologies, and craft digital experiences that make a lasting impact.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
