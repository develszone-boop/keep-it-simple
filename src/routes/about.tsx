import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "@/pages/AboutPage";
import { breadcrumbJsonLd, pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageSeo({
      path: "/about",
      title: "About trikalnetra | Our Story and Values",
      description:
        "Learn about trikalnetra's story, values, and the team turning data-driven insight into stronger business growth.",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]),
      ],
    }),
  component: AboutPage,
});
