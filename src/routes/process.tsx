import { createFileRoute } from "@tanstack/react-router";
import ProcessPage from "@/pages/ProcessPage";

const title = "Our Process | How trikalnetra Delivers";
const description =
  "A clear, collaborative delivery process—from discovery and strategy to build, launch and continuous optimisation.";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProcessPage,
});
