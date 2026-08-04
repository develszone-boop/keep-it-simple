import { createFileRoute } from "@tanstack/react-router";
import ServicesPage from "@/pages/ServicesPage";
import { SITE_NAME, SITE_URL, breadcrumbJsonLd, pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageSeo({
      path: "/services",
      title: "Services | Analytics, Marketing, Web and Security",
      description:
        "Explore trikalnetra's end-to-end services: analytics, digital marketing, websites, branding, SEO, mobile apps and cybersecurity.",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Digital analytics, marketing, web development and cybersecurity",
          provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          areaServed: "Worldwide",
          url: `${SITE_URL}/services`,
        },
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]),
      ],
    }),
  component: ServicesPage,
});
