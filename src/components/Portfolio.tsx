import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Retail Analytics Upgrade",
    category: "E-Commerce",
    description: "A complete analytics and marketing overhaul for a fashion retailer—delivering a 240% increase in online conversions.",
    tags: ["Business Analytics", "Conversion Optimization", "Marketing Automation", "SEO & Traffic Growth"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
  },
  {
    title: "Real Estate Intelligence Platform",
    category: "Property / Corporate",
    description: "Developed a smart property showcase ecosystem featuring AI-driven search analytics, lead scoring, and SEO scaling.",
    tags: ["Secure CMS Development", "Data Intelligence System", "Lead Tracking & Analytics", "SEO & Visibility"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Wellness & Spa Center",
    category: "Lifestyle & Health",
    description: "Implemented a data-driven booking engine, CRM automation, and multi-channel marketing—leading to 180% increase in bookings.",
    tags: ["Marketing Automation", "Customer Behavior Tracking", "Mobile-Optimized Platform", "Analytics Dashboards"],
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
  },
  {
    title: "Hospitality Performance Engine",
    category: "Food & Hospitality",
    description: "Built a performance-focused digital ecosystem with reservation analytics, local SEO, and customer acquisition tracking.",
    tags: ["Local SEO", "Reservation System Integration", "Analytics Tracking", "Performance Marketing"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    title: "Law Firm Digital Authority",
    category: "Professional Services",
    description: "A data-backed digital transformation that boosted online authority, client engagement, and search visibility.",
    tags: ["Content & SEO Strategy", "Secure Corporate Website", "Performance Marketing"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
  },
  {
    title: "SaaS Startup Growth Architecture",
    category: "Technology / SaaS",
    description: "Developed a conversion-driven launch system with analytics, automation, and cybersecurity—helping secure Series A funding.",
    tags: ["Marketing Strategy", "Cybersecurity Setup", "Analytics & Performance Reports", "High-Performance Web Platform"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Work That Delivers <span className="gradient-text">Measurable Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every project showcases what's possible when business analytics, strategy, and 
            technology come together to solve real problems and drive scalable growth.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden card-gradient border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {project.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">Want to see more examples specific to your industry?</p>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Request a Custom Portfolio</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
