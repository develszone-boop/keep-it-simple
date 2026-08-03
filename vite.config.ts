// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    // Keep the default (Cloudflare module) server build: its default export exposes
    // fetch(request, env, context), which scripts/prerender.js imports directly to
    // generate static HTML. Nothing is deployed to Cloudflare — GitHub Pages only
    // serves the generated static files.
    // Put the production build under dist/ so it is easy to locate in GitHub Actions
    // and matches the sandbox environment used during development.
    output: {
      dir: "dist",
    },
  },
});
