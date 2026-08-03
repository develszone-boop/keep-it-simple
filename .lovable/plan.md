# Align the build output directory so Pages uploads the real site

## Verified state

- Local build output: `dist/client` (static assets) + `dist/server`, and `dist/nitro.json` reports `"preset": "cloudflare-module"` with `"publicDir": "client"`.
- `dist/client` already contains `index.html`, `404.html`, `CNAME`, `assets/`, and the `about`, `services`, `process`, `portfolio`, `faq`, `contact` folders.
- `vite.config.ts` sets only `nitro.output.dir: "dist"` — the preset is left to auto-detection.
- `nitro` is pinned to an exact version in `package.json`, so the CI/local difference is not a version drift.

## Cause

The server preset is auto-detected. In the sandbox it resolves to `cloudflare-module`, whose public dir is `client`. Inside GitHub Actions, Nitro detects the CI provider and resolves to a different preset, whose public dir is `public` — hence `dist/public` on the runner and `dist/client` locally. The workflow and prerender script hard-code `dist/client`, so the verify step fails.

## Changes

1. **`vite.config.ts`** — stop relying on auto-detection: pin `preset: "cloudflare-module"` (the one the prerender script's `fetch(request, env, context)` handler shape depends on) and pin the output paths explicitly:
   - `output.dir: "dist"`
   - `output.publicDir: "dist/client"`
   
   This makes the runner produce the same layout as the sandbox.

2. **`scripts/prerender.js`** — remove the guesswork: read `dist/nitro.json` and use its `publicDir`/`serverEntry` values as the source of truth, falling back to `dist/client` only if that file is absent. Print the resolved directory at the start so the CI log states which folder is being written.

3. **`.github/workflows/deploy.yml`** — keep the existing single pipeline and the existing `actions/upload-pages-artifact@v3` step; keep `dist/client` as the uploaded path (now guaranteed by change 1), and have the verify step print the resolved directory from `dist/nitro.json` and fail with a clear message if it disagrees with the upload path.

No new pipeline, no change to the app, routes, or DNS.

## Verification before handing back

Run a clean build plus `node scripts/prerender.js` in the sandbox and confirm:
- `dist/nitro.json` reports `publicDir: client`
- `dist/client/index.html`, `dist/client/404.html`, `dist/client/CNAME` (containing `trikalnetra.com`)
- `dist/client/about|services|process|portfolio|faq|contact/index.html`
- prerender exits 0

The directory uploaded to Pages stays **`dist/client`**.
