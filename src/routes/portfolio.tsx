import { createFileRoute } from "@tanstack/react-router";
import PortfolioPage from "@/pages/PortfolioPage";
import { breadcrumbJsonLd, pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageSeo({
      path: "/portfolio",
      title: "Capabilities | trikalnetra Work and Case Studies",
      description:
        "See the capabilities and client work behind trikalnetra's analytics, marketing, and technology engagements.",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Capabilities", path: "/portfolio" },
        ]),
      ],
    }),
  component: PortfolioPage,
});
