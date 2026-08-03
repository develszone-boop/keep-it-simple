# Fix prerender: `app.fetch is not a function`

## Verified cause

`vite.config.ts` sets the Nitro `node-server` preset. That preset's entry
(`node_modules/nitro/dist/presets/node/runtime/node-server.mjs`) does two things:

- it immediately starts an HTTP listener on port 3000 (this is what made the earlier
  prerender step hang), and
- it ends with `export default {}` — so `app.fetch` genuinely does not exist.

The build output currently present in the sandbox (`dist/server/index.mjs` plus
`dist/server/wrangler.json`) is a Cloudflare-preset build, whose default export
*does* expose `fetch(request, env, context)` — the exact shape `scripts/prerender.js`
was written against.

## Changes

1. **`vite.config.ts`** — remove the `preset: "node-server"` override and keep the
   default (Cloudflare-module) server build, keeping `output.dir: "dist"` so the
   workflow paths stay the same. Nothing is deployed to Cloudflare; the bundle is only
   imported locally by the prerender script to produce HTML.

2. **`scripts/prerender.js`** — resolve the handler defensively instead of assuming a
   shape: take `mod.default?.fetch ?? mod.fetch`, and if neither exists, fail with a
   clear message listing the module's exported keys. Keep the existing per-route
   timeout, `404.html` copy, CNAME copy, and clean `process.exit(0)`.

3. **No workflow change.** `.github/workflows/deploy.yml` stays as-is — same build step,
   same prerender step, same verification, same single `dist/client` artifact upload,
   same deploy job. No new pipeline.

## Verification before handing back

- Run the build, then `node scripts/prerender.js` in the sandbox on Node 24 (same major
  as the Actions runner) and confirm exit code 0.
- Confirm `dist/client/index.html`, `dist/client/404.html`, `dist/client/CNAME`
  (containing `trikalnetra.com`), and the `about/services/process/portfolio/faq/contact`
  index pages all exist, and that the HTML contains real page markup, not an empty shell.
- After you push, the run should proceed through Prerender, Upload artifact and Deploy.
  I can't read your Actions runs from here; send the run URL if any step fails.