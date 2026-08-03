import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const footerLinks = {
  services: [
    { name: "Analytics", href: "/services" },
    { name: "Web Development", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "Cybersecurity", href: "/services" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "/process" },
    { name: "Capabilities", href: "/portfolio" },
  ],
  more: [
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Services", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587345544535" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/official_trikalnetra?utm_source=qr&igsh=MW9oZGFzcDc3dzE3eg==" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/trikalnetra-techgiant-b150823aa/" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={logo} alt="trikalnetra" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Crafting elegant digital experiences that transform businesses and maximize 
              revenue through intentional design.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-white">More</h4>
            <ul className="space-y-3">
              {footerLinks.more.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 trikalnetra. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
