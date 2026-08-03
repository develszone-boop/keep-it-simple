import { createFileRoute } from "@tanstack/react-router";
import ServicesPage from "@/pages/ServicesPage";

const title = "Services | Analytics, Marketing, Web and Security";
const description =
  "Explore trikalnetra's end-to-end services: analytics, digital marketing, websites, branding, SEO, mobile apps and cybersecurity.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ServicesPage,
});
