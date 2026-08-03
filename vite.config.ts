// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Build the site as a static export: every route is rendered to HTML at build time.
    // This is required for GitHub Pages, which cannot run a Node/edge server.
    prerender: {
      enabled: true,
    },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/services" },
      { path: "/process" },
      { path: "/portfolio" },
      { path: "/faq" },
      { path: "/contact" },
    ],
  },
  nitro: {
    // Use a Node.js server preset during the prerender build so TanStack Start can
    // preview the app locally and generate the static HTML files. GitHub Pages will
    // only serve the resulting static files, not the server itself.
    preset: "node-server",
  },
});
