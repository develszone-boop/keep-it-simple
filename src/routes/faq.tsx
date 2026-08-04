import { createFileRoute } from "@tanstack/react-router";
import FAQPage from "@/pages/FAQPage";

const title = "FAQ | Answers About Working With trikalnetra";
const description =
  "Common questions about trikalnetra's services, engagement models, timelines, and pricing—answered.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FAQPage,
});
