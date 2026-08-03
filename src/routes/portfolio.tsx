import { createFileRoute } from "@tanstack/react-router";
import PortfolioPage from "@/pages/PortfolioPage";

const title = "Capabilities | trikalnetra Work and Case Studies";
const description =
  "See the capabilities and client work behind trikalnetra's analytics, marketing, and technology engagements.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PortfolioPage,
});
