import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Target, Lightbulb, Users, Globe, Rocket } from "lucide-react";
import { Link } from "@tanstack/react-router";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

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
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as partners, ensuring their vision guides every step.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our solutions are designed for businesses of all sizes, from local startups to global enterprises.",
  },
  {
    icon: Rocket,
    title: "Growth Focus",
    description: "Everything we do is aimed at helping our clients achieve sustainable, measurable growth.",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "12+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];


const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Where Intelligence Meets Innovation"
        subtitle="About Us"
        description="At trikalnetra, we combine strategic thinking with technical excellence to deliver transformative digital solutions."
        breadcrumb="About"
        bannerImages={[
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&h=600&fit=crop",
        ]}
      />

      {/* Our Story Section */}
      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                Building Digital Excellence Since Day One
              </h2>
              <p className="text-muted-foreground mb-6">
                trikalnetra was founded with a simple yet powerful vision: to help businesses unlock 
                their full potential through intelligent digital solutions. What started as a small 
                team of passionate technologists has grown into a full-service digital agency serving 
                clients across industries.
              </p>
              <p className="text-muted-foreground mb-6">
                Our team of experts brings together decades of experience in analytics, development, 
                and digital marketing to help businesses thrive in an ever-evolving landscape. We 
                believe in building lasting partnerships with our clients, understanding their unique 
                challenges, and crafting tailored solutions that drive real results.
              </p>
              <p className="text-muted-foreground">
                Our approach is rooted in data, powered by creativity, and focused on sustainable growth. 
                We don't just build websites—we build digital ecosystems that transform businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-elevated w-full"
              />
              <div className="absolute -bottom-6 -left-6 p-6 rounded-xl bg-background border border-border shadow-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl">50+</p>
                    <p className="text-muted-foreground text-sm">Team Members</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-background border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with intelligent digital solutions that drive growth, enhance 
                efficiency, and create lasting competitive advantages. We strive to be the trusted 
                partner that helps our clients navigate the digital landscape with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-2xl bg-background border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading digital transformation partner for businesses worldwide, known for 
                our innovative solutions, exceptional client relationships, and measurable impact. 
                We envision a world where every business has access to world-class digital capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Core Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Core Values</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values shape everything we do—from how we work with clients to how we build our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop"
                alt="trikalnetra strategy team in a project planning meeting"
                loading="lazy"
                className="rounded-xl w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop"
                alt="trikalnetra office workspace in Hyderabad"
                loading="lazy"
                className="rounded-xl w-full mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop"
                alt="Developers collaborating on a client website build"
                loading="lazy"
                className="rounded-xl w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
                alt="Designers working on brand and SEO creative"
                loading="lazy"
                className="rounded-xl w-full mt-8"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">Team Culture</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4 mb-6">
                A Team That Cares About Your Success
              </h2>
              <p className="text-muted-foreground mb-6">
                Our diverse team brings together experts from various backgrounds—developers, designers, 
                marketers, and strategists—all united by a passion for creating exceptional digital experiences.
              </p>
              <p className="text-muted-foreground mb-8">
                We foster a culture of continuous learning, collaboration, and innovation. Every team 
                member is empowered to contribute ideas and take ownership of their work, ensuring that 
                our clients benefit from the collective expertise of our entire organization.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Join Our Team</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
