import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

const title = "trikalnetra | Smarter Insights, Stronger Growth";
const description =
  "From analytics to marketing, websites to cybersecurity—trikalnetra provides intelligent, end-to-end IT solutions that turn businesses into industry leaders.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});
