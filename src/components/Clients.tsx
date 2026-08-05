import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "@tanstack/react-router";

// Import client logos
import dcsLogo from "@/assets/clients/dcs-tech.svg";
import agrLogo from "@/assets/clients/agr-foundation.svg";
import vedhaMantraLogo from "@/assets/clients/vedha-mantra.svg";

interface Client {
  name: string;
  logo?: string;
  url: string;
  domain: string;
  services: string;
  isTextLogo?: boolean;
}

const clients: Client[] = [
  {
    name: "DCS Tech Hub",
    logo: dcsLogo,
    url: "https://www.dcstechhub.com/",
    domain: "dcstechhub.com",
    services: "Website Creation · SEO & Visibility",
  },
  {
    name: "AGR Foundation",
    logo: agrLogo,
    url: "https://www.agrfoundation.ngo/",
    domain: "agrfoundation.ngo",
    services: "Website Creation · SEO & Visibility",
  },
  {
    name: "Vedha Mantra",
    logo: vedhaMantraLogo,
    url: "https://vedhamantra.com/",
    domain: "vedhamantra.com",
    services: "Website Creation · SEO & Visibility",
  },
  {
    name: "For You Local",
    url: "https://foryoulocal.com/",
    domain: "foryoulocal.com",
    services: "Website Creation · SEO & Visibility",
    isTextLogo: true,
  },
  {
    name: "Gear Monkey",
    url: "https://gearmonkey.in/",
    domain: "gearmonkey.in",
    services: "Website Creation · SEO & Visibility",
    isTextLogo: true,
  },
  {
    name: "Monockle",
    url: "https://www.monockle.com/",
    domain: "monockle.com",
    services: "Website Creation · SEO & Visibility",
    isTextLogo: true,
  },
  {
    name: "MindSportz",
    url: "https://mindsportz.in/",
    domain: "mindsportz.in",
    services: "Website Creation · SEO & Visibility",
    isTextLogo: true,
  },
  {
    name: "Kyrosonics",
    url: "https://kyrosonics.com/",
    domain: "kyrosonics.com",
    services: "Website Creation · SEO & Visibility",
    isTextLogo: true,
  },
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-16 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Our Clients
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Trusted by <span className="gradient-text">Leading Businesses</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            End-to-end <strong className="text-foreground font-semibold">Website Creation</strong> and{" "}
            <strong className="text-foreground font-semibold">SEO &amp; Visibility</strong> delivered for every
            brand below. Visit their live sites to see the work.
          </p>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
            Both are core categories of trikalnetra&apos;s service stack — every client below was built,
            optimised and made searchable by our team.
          </p>
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col items-center justify-start gap-3 p-5 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              title={`${client.name} — Website Creation and SEO & Visibility by trikalnetra`}
            >
              <div className="flex h-16 items-center justify-center">
                {client.isTextLogo ? (
                  <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                    {client.name}
                  </span>
                ) : (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    className="max-h-14 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                )}
              </div>
              <span className="text-sm text-primary/90 group-hover:text-primary transition-colors duration-300 break-all text-center">
                {client.domain}
              </span>
              <span className="text-xs text-muted-foreground text-center leading-relaxed">
                {client.services}
              </span>
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                Visit site
                <ExternalLink className="w-3 h-3" />
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            View all client work and capabilities
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Clients;
