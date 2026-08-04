import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/pages/ContactPage";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_NAME,
  SITE_URL,
  breadcrumbJsonLd,
  pageSeo,
} from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      path: "/contact",
      title: "Contact trikalnetra | Start Your Project",
      description:
        "Get in touch with trikalnetra to discuss your project, request a consultation, or ask about our services.",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE_URL}/contact`,
          mainEntity: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            email: CONTACT_EMAIL,
            telephone: CONTACT_PHONE,
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: CONTACT_EMAIL,
                telephone: CONTACT_PHONE,
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Telugu"],
              },
            ],
          },
        },
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]),
      ],
    }),
  component: ContactPage,
});
