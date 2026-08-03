import { motion } from "framer-motion";
import { 
  BarChart3, 
  Megaphone, 
  Globe, 
  RefreshCw, 
  TrendingUp, 
  Smartphone, 
  Search, 
  Shield,
  Palette,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Clock,
  Award
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Transform raw data into actionable insights that drive strategic decisions and measurable growth.",
    features: [
      "Custom dashboard development",
      "Data visualization & reporting",
      "Predictive analytics",
      "Performance tracking"
    ]
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic, data-driven campaigns that reach your ideal customers and maximize conversion rates.",
    features: [
      "Social media management",
      "PPC & paid advertising",
      "Email marketing automation",
      "Content strategy"
    ]
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "High-performance, conversion-focused websites that establish trust and drive business results.",
    features: [
      "Custom web development",
      "E-commerce solutions",
      "CMS integration",
      "Performance optimization"
    ]
  },
  {
    icon: RefreshCw,
    title: "Website Rebranding",
    description: "Transform outdated websites into modern, high-converting digital assets that reflect your brand.",
    features: [
      "UI/UX redesign",
      "Brand identity refresh",
      "Content migration",
      "SEO preservation"
    ]
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Maximize your ROI through comprehensive analytics, A/B testing, and conversion rate optimization.",
    features: [
      "Conversion rate optimization",
      "A/B testing & experimentation",
      "Funnel analysis",
      "Revenue attribution"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    description: "Responsive designs and PWAs that deliver seamless experiences across all devices and platforms.",
    features: [
      "Responsive design",
      "Progressive web apps",
      "Mobile-first development",
      "Cross-platform testing"
    ]
  },
  {
    icon: Search,
    title: "SEO & Visibility",
    description: "Rank higher in search results and attract high-intent traffic that converts into customers.",
    features: [
      "Technical SEO audits",
      "Keyword research & strategy",
      "On-page optimization",
      "Link building"
    ]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business and customer data with enterprise-grade security solutions.",
    features: [
      "Security audits",
      "SSL & encryption",
      "Vulnerability assessment",
      "Compliance consulting"
    ]
  },
  {
    icon: Palette,
    title: "Brand Integration",
    description: "Create cohesive brand experiences that resonate across all digital touchpoints.",
    features: [
      "Brand guidelines",
      "Visual identity design",
      "Marketing collateral",
      "Brand consistency audits"
    ]
  },
];

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated specialists with years of experience in their respective fields."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient processes that deliver quality results within your timeline."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance to ensure your business never stops."
  },
  {
    icon: Award,
    title: "Results Focus",
    description: "Every decision we make is driven by measurable outcomes."
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Comprehensive Digital Solutions"
        subtitle="Our Services"
        description="From analytics to marketing, development to cybersecurity—we provide the strategic and technical expertise your business needs to thrive in the digital age."
        breadcrumb="Services"
        bannerImages={[
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=600&fit=crop",
        ]}
      />

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
            <p className="text-muted-foreground text-lg">
              We combine strategic thinking with technical expertise to deliver solutions that drive real business growth. 
              Our team works closely with you to understand your unique challenges and craft tailored solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - 3 columns with expanded cards */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="font-display text-3xl font-bold text-primary/20">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Choose trikalnetra</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just service providers—we're your strategic partners in digital transformation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Every business is unique. Let's discuss your specific challenges and create a tailored solution that drives results.
            </p>
            <Button size="lg" variant="secondary" className="gap-2 group" asChild>
              <Link to="/contact">
                Schedule a Consultation
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

export default ServicesPage;
