import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/pages/ContactPage";

const title = "Contact trikalnetra | Start Your Project";
const description =
  "Get in touch with trikalnetra to discuss your project, request a consultation, or ask about our services.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});
