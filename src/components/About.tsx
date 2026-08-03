import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards in every project, ensuring our clients receive nothing but the best.",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Every decision we make is driven by a clear purpose—to create meaningful impact for our clients.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative thinking to solve complex challenges.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Where Intelligence Meets <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            At trikalnetra, we combine strategic thinking with technical excellence to deliver 
            transformative digital solutions. Our team of experts brings together decades of 
            experience in analytics, development, and digital marketing to help businesses 
            thrive in an ever-evolving landscape.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-secondary/30 border border-border"
        >
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            We believe in building lasting partnerships with our clients, understanding their 
            unique challenges, and crafting tailored solutions that drive real results. Our 
            approach is rooted in data, powered by creativity, and focused on sustainable growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
