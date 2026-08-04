import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";
import { organizationJsonLd, pageSeo, websiteJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      path: "/",
      title: "trikalnetra | Smarter Insights, Stronger Growth",
      description:
        "From analytics to marketing, websites to cybersecurity—trikalnetra provides intelligent, end-to-end IT solutions that turn businesses into industry leaders.",
      jsonLd: [organizationJsonLd, websiteJsonLd],
    }),
  component: Index,
});
