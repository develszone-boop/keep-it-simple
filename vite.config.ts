// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    // Use a Node.js server preset so the app can be built and run locally for
    // static generation. GitHub Pages will only serve the generated static files;
    // the Node server is not deployed.
    preset: "node-server",
    // Put the production build under dist/ so it is easy to locate in GitHub Actions
    // and matches the sandbox environment used during development.
    output: {
      dir: "dist",
    },
  },
});
