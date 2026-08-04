import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/AboutPage";

const title = "About trikalnetra | Our Story and Values";
const description =
  "Learn about trikalnetra's story, values, and the team turning data-driven insight into stronger business growth.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});
