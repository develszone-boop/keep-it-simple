import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Import client logos
import dcsLogo from "@/assets/clients/dcs-tech.svg";
import agrLogo from "@/assets/clients/agr-foundation.svg";
import vedhaMantraLogo from "@/assets/clients/vedha-mantra.svg";
import anikaFarmLogo from "@/assets/clients/anika-farm.webp";
import sinineLogo from "@/assets/clients/sinine.png";

interface Client {
  name: string;
  logo?: string;
  url: string;
  isTextLogo?: boolean;
}

const clients: Client[] = [
  {
    name: "DCS Tech Hub",
    logo: dcsLogo,
    url: "https://www.dcstechhub.com/",
  },
  {
    name: "AGR Foundation",
    logo: agrLogo,
    url: "https://www.agrfoundation.ngo/",
  },
  {
    name: "Vedha Mantra",
    logo: vedhaMantraLogo,
    url: "https://vedhamantra.com/",
  },
  {
    name: "SAM LootBig",
    url: "https://sam.lootbig.com/",
    isTextLogo: true,
  },
  {
    name: "LootBig Corporate",
    url: "https://corporate.lootbig.com/",
    isTextLogo: true,
  },
  {
    name: "Anika Farm",
    logo: anikaFarmLogo,
    url: "https://anika.farm/",
  },
  {
    name: "Sinine",
    logo: sinineLogo,
    url: "https://sinine.in/",
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
        </motion.div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center justify-center p-4 h-24 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              title={client.name}
            >
              {client.isTextLogo ? (
                <span className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                  {client.name}
                </span>
              ) : (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-14 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
