import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
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
];

const steps = [
  "We'll schedule a discovery call to understand your needs",
  "Our team will prepare a tailored proposal",
  "Once approved, we kick off with a detailed project plan",
];

const Contact = () => {
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
    <section id="contact" className="py-24 relative" ref={ref}>
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
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Contact Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Start Your <span className="gradient-text">Transformation Today</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready to elevate your business with a website that drives real results? Let's discuss your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.label}</h3>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* What Happens Next */}
            <div className="p-6 rounded-2xl card-gradient border border-border">
              <h3 className="font-display text-xl font-semibold mb-4">What Happens Next</h3>
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
                <span>✓ No commitment required</span>
                <span>✓ Response within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl card-gradient border border-border">
              <h3 className="font-display text-2xl font-semibold mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-secondary/50"
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
                      className="bg-secondary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company (Optional)</label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      className="bg-secondary/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-3 py-2 rounded-lg border border-border bg-secondary/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                    <label htmlFor="otherRequirement" className="block text-sm font-medium mb-2">Please specify your requirements</label>
                    <Input
                      id="otherRequirement"
                      name="otherRequirement"
                      placeholder="Describe what you need..."
                      required
                      className="bg-secondary/50"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                    className="bg-secondary/50"
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
  );
};

export default Contact;
