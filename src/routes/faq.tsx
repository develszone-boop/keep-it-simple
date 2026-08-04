import { createFileRoute } from "@tanstack/react-router";
import FAQPage from "@/pages/FAQPage";
import { faqs } from "@/lib/faq-data";
import { breadcrumbJsonLd, faqJsonLd, pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/faq")({
  head: () =>
    pageSeo({
      path: "/faq",
      title: "FAQ | Answers About Working With trikalnetra",
      description:
        "Common questions about trikalnetra's services, engagement models, timelines, and pricing—answered.",
      jsonLd: [
        faqJsonLd(faqs),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]),
      ],
    }),
  component: FAQPage,
});
