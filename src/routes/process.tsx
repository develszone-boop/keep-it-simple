import { createFileRoute } from "@tanstack/react-router";
import ProcessPage from "@/pages/ProcessPage";
import { breadcrumbJsonLd, pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/process")({
  head: () =>
    pageSeo({
      path: "/process",
      title: "Our Process | How trikalnetra Delivers",
      description:
        "A clear, collaborative delivery process—from discovery and strategy to build, launch and continuous optimisation.",
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ]),
      ],
    }),
  component: ProcessPage,
});
