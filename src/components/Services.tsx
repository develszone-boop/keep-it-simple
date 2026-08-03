import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  BarChart3, 
  Megaphone, 
  Globe, 
  RefreshCw, 
  TrendingUp, 
  Smartphone, 
  Search, 
  Shield,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Import service images
import analyticsImg from "@/assets/services/analytics.jpg";
import marketingImg from "@/assets/services/marketing.jpg";
import websiteImg from "@/assets/services/website.jpg";
import rebrandingImg from "@/assets/services/rebranding.jpg";
import revenueImg from "@/assets/services/revenue.jpg";
import mobileImg from "@/assets/services/mobile.jpg";
import seoImg from "@/assets/services/seo.jpg";
import securityImg from "@/assets/services/security.jpg";
import brandingImg from "@/assets/services/branding.jpg";

const services = [
  {
    icon: BarChart3,
    title: "Business Analytics & Data Intelligence",
    tagline: "Turn insights into action",
    description: "We analyze your data to help you make smarter decisions, optimize performance, and uncover new growth opportunities.",
    features: ["Data Insights & Reporting", "Business Intelligence Dashboards", "Market Research & Competitor Analysis", "Predictive & Trend Analysis"],
    image: analyticsImg,
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Growth Strategy",
    tagline: "Accelerate your brand's reach",
    description: "Targeted, measurable marketing strategies designed to attract, convert, and retain customers.",
    features: ["Social Media Marketing", "Performance Marketing", "Email Automation", "Funnel Optimization"],
    image: marketingImg,
  },
  {
    icon: Globe,
    title: "Website Creation",
    tagline: "For first-time businesses",
    description: "Launch with impact. We build strategic, high-performance websites crafted to establish trust and drive growth.",
    features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Performance"],
    image: websiteImg,
  },
  {
    icon: RefreshCw,
    title: "Website Rebranding",
    tagline: "Digital transformation",
    description: "Transform your outdated website into a modern, high-impact digital asset aligned with your evolved goals.",
    features: ["Modern Redesign", "UX Enhancement", "Brand Alignment", "Conversion Focus"],
    image: rebrandingImg,
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    tagline: "Growth strategy",
    description: "Enhance your digital performance using advanced analytics and optimization techniques that maximize ROI.",
    features: ["A/B Testing", "Analytics Setup", "CRO Strategy", "Performance Tracking"],
    image: revenueImg,
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    tagline: "Design & development",
    description: "Deliver flawless mobile experiences that feel intuitive, fast, and app-like on every device.",
    features: ["Mobile-First Design", "Touch Optimized", "Fast Loading", "App-Like Experience"],
    image: mobileImg,
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    tagline: "Search optimization",
    description: "Rank higher, increase visibility, and attract high-intent traffic with our full-spectrum SEO solutions.",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
    image: seoImg,
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    tagline: "Digital protection",
    description: "Safeguard your digital assets with enterprise-grade security solutions that protect your business from modern threats.",
    features: ["Security Audits", "Website Protection", "Vulnerability Scanning", "Malware Removal & Prevention"],
    image: securityImg,
  },
  {
    icon: Palette,
    title: "Brand Integration",
    tagline: "Visual identity",
    description: "Build a powerful and cohesive brand experience across every digital touchpoint.",
    features: ["Logo Integration", "Color System", "Typography", "Brand Guidelines"],
    image: brandingImg,
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 relative" ref={ref}>
      {/* Background with vector pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 vector-lines opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive Business & <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From analytics to marketing, development to cybersecurity—we provide the strategic 
            and technical expertise your business needs to grow with confidence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Service Image */}
              <div className="h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-tight">{service.title}</h3>
                    <span className="text-primary text-sm">{service.tagline}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Need a custom solution?</p>
          <Button size="lg" asChild>
            <a href="#contact">Discuss Your Project</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
