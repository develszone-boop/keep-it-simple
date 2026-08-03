import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { 
  Search, 
  Palette, 
  Code, 
  CheckCircle, 
  Rocket, 
  TrendingUp, 
  ArrowRight,
  Clock,
  FileText,
  MessageCircle,
  Target,
  Lightbulb,
  Shield
} from "lucide-react";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Strategy",
    duration: "1-2 Weeks",
    description: "We dive deep into understanding your business, goals, target audience, and competitive landscape to create a strategic roadmap for success.",
    deliverables: [
      "Business requirements document",
      "Competitor analysis report",
      "Project scope & timeline",
      "Strategic recommendations"
    ]
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Concept",
    duration: "2-3 Weeks",
    description: "Our design team creates innovative concepts focused on user experience, visual appeal, and conversion optimization.",
    deliverables: [
      "Wireframes & prototypes",
      "Visual design mockups",
      "Brand style guide",
      "Interactive prototypes"
    ]
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    duration: "3-6 Weeks",
    description: "We bring designs to life with clean, scalable, and efficient code, ensuring high performance across all devices.",
    deliverables: [
      "Responsive frontend development",
      "Backend integration",
      "Database setup",
      "API development"
    ]
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Testing & Refinement",
    duration: "1-2 Weeks",
    description: "Rigorous testing ensures everything works flawlessly across all browsers, devices, and user scenarios.",
    deliverables: [
      "Quality assurance testing",
      "Cross-browser compatibility",
      "Performance optimization",
      "Security audit"
    ]
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    duration: "1 Week",
    description: "We deploy your project with precision, monitor performance, and ensure a smooth transition to production.",
    deliverables: [
      "Production deployment",
      "DNS configuration",
      "Performance monitoring",
      "Launch support"
    ]
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Growth & Support",
    duration: "Ongoing",
    description: "Post-launch optimization and support to ensure continued success, scaling, and improvement.",
    deliverables: [
      "Monthly performance reports",
      "Ongoing maintenance",
      "Feature enhancements",
      "Priority support"
    ]
  },
];

const differentiators = [
  { 
    icon: MessageCircle,
    title: "Transparent Communication", 
    description: "Regular updates, weekly calls, and 24/7 access to your project dashboard. You're never in the dark." 
  },
  { 
    icon: Target,
    title: "Data-Driven Decisions", 
    description: "Every design and development choice is backed by research, analytics, and industry best practices." 
  },
  { 
    icon: Shield,
    title: "Long-Term Partnership", 
    description: "We don't disappear after launch. Our team stays with you to ensure continued growth and success." 
  },
];

const timelines = [
  { type: "Small Project", description: "Landing pages, simple websites", duration: "2-4 Weeks", icon: FileText },
  { type: "Medium Project", description: "Full websites, e-commerce", duration: "4-8 Weeks", icon: Lightbulb },
  { type: "Large Project", description: "Enterprise solutions, complex platforms", duration: "3-6 Months", icon: Rocket },
];

const faqs = [
  { 
    q: "How do you handle project communication?", 
    a: "We use a combination of weekly video calls, Slack for quick updates, and a shared project dashboard for transparency." 
  },
  { 
    q: "What if I need changes during development?", 
    a: "We follow an agile approach. Minor changes are absorbed within scope; larger changes are discussed and quoted separately." 
  },
  { 
    q: "Do you provide post-launch support?", 
    a: "Absolutely! We offer various support packages including maintenance, updates, and ongoing optimization." 
  },
  { 
    q: "How do you ensure project quality?", 
    a: "Every deliverable goes through our multi-stage QA process including code reviews, automated testing, and manual testing." 
  },
];

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="From Vision to Reality"
        subtitle="Our Process"
        description="A proven methodology refined over hundreds of successful projects, designed to deliver exceptional results with transparency and efficiency."
        breadcrumb="Process"
        bannerImages={[
          "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1920&h=600&fit=crop",
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
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">How We Work</h2>
            <p className="text-muted-foreground text-lg">
              Our six-phase process ensures every project is delivered on time, within budget, and exceeds expectations. 
              We maintain clear communication throughout, so you always know exactly where your project stands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            <div className="space-y-12 lg:space-y-16">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative lg:flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary items-center justify-center z-10">
                    <span className="font-display font-bold text-primary-foreground text-sm">{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`lg:w-[calc(50%-3rem)] ${index % 2 === 0 ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className="p-6 rounded-2xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="lg:hidden w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                          <span className="font-display font-bold text-primary-foreground text-sm">{step.number}</span>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                      <div className="pt-4 border-t border-border">
                        <p className="text-xs font-semibold text-primary mb-2">KEY DELIVERABLES</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {step.deliverables.map((deliverable, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our process isn't just about deliverables—it's about building lasting partnerships that drive success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {differentiators.map((item, index) => (
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

      {/* Project Timeline Expectations */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Project Timeline Expectations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every project is unique, but here's a general guide to help you plan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {timelines.map((timeline, index) => (
              <motion.div
                key={timeline.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-secondary/30 border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <timeline.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{timeline.type}</h3>
                <p className="text-muted-foreground text-sm mb-3">{timeline.description}</p>
                <p className="font-display text-2xl font-bold text-primary">{timeline.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Process FAQ</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let's discuss your project and see how our proven process can help you achieve your goals faster.
            </p>
            <Button size="lg" className="gap-2 group" asChild>
              <Link to="/contact">
                Let's Discuss Your Project
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

export default ProcessPage;
