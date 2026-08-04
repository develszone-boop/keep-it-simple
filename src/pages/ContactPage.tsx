import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@trikalnetra.com",
    href: "mailto:hello@trikalnetra.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9866137645, +91 9390595302",
    href: "tel:+919866137645",
  },
  {
    icon: MapPin,
    label: "Our Location",
    value: "Hyderabad, Telangana, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 9:00 AM - 6:00 PM IST",
    href: "#",
  },
];

const steps = [
  "We'll schedule a discovery call to understand your needs",
  "Our team will prepare a tailored proposal",
  "Once approved, we kick off with a detailed project plan",
];

const faqs = [
  { q: "How long does a typical project take?", a: "4-8 weeks for standard websites, 3-6 months for enterprise solutions." },
  { q: "What's your pricing model?", a: "We offer project-based and retainer pricing based on your needs." },
  { q: "Do you work with international clients?", a: "Yes! We serve clients globally with flexible communication schedules." },
];

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formMessage, setFormMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      otherRequirement: formData.get("otherRequirement") || "",
      budget: formData.get("budget") || "",
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
    };
    
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyF53_8QI84yryvVphde2BooV-9vT1IAWTlU20TODAj_3hflXOsiv4YMG2b6jF28tbkbg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(data),
        }
      );
      
      setFormMessage({
        type: 'success',
        text: 'Message sent successfully! We\'ll get back to you within 24 hours.'
      });
      
      setSelectedService("");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setFormMessage({
        type: 'error',
        text: 'Failed to send message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Start Your Transformation Today"
        subtitle="Contact Us"
        description="Ready to elevate your business with a website that drives real results? Let's discuss your vision."
        breadcrumb="Contact"
        bannerImages={[
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&h=600&fit=crop",
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&h=600&fit=crop",
        ]}
      />

      <section className="py-20" ref={ref}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{info.label}</h3>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* What Happens Next */}
              <div className="p-6 rounded-2xl bg-secondary/30 border border-border mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl font-semibold">What Happens Next</h3>
                </div>
                <ol className="space-y-4">
                  {steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-sm font-semibold text-primary shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> No commitment required</span>
                  <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Response within 24 hours</span>
                </div>
              </div>

              {/* Map/Location Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=300&fit=crop"
                  alt="Hyderabad, India"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-secondary/30 border border-t-0 border-border">
                  <p className="font-semibold">Hyderabad, Telangana, India</p>
                  <p className="text-sm text-muted-foreground">The City of Pearls - India's Technology Hub</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-secondary/30 border border-border">
                <h3 className="font-display text-2xl font-semibold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                    >
                      <option value="">Select a service</option>
                      <option value="analytics">Business Analytics</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="website">Website Creation</option>
                      <option value="rebranding">Website Rebranding</option>
                      <option value="seo">SEO & Visibility</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="mobile">Mobile Experience</option>
                      <option value="brand">Brand Integration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {selectedService === "other" && (
                    <div>
                      <label htmlFor="otherRequirement" className="block text-sm font-medium mb-2">Please specify your requirements *</label>
                      <Input
                        id="otherRequirement"
                        name="otherRequirement"
                        placeholder="Describe what you need..."
                        required
                        className="bg-background"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="bg-background"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </Button>

                  {formMessage && (
                    <div className={`p-4 rounded-lg ${
                      formMessage.type === 'success' 
                        ? 'bg-green-500/10 border border-green-500/50 text-green-400' 
                        : 'bg-red-500/10 border border-red-500/50 text-red-400'
                    }`}>
                      <div className="flex items-center gap-2">
                        {formMessage.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                        <span>{formMessage.text}</span>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold">Quick Answers</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
