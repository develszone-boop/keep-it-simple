# Fix the existing GitHub Pages workflow (no new pipeline)

## Verified state

- `.github/workflows/deploy.yml` is the only workflow file in the repo; there is no second pipeline to remove on our side.
- It already uses `actions/upload-pages-artifact@v3` with `path: dist/client` and `actions/deploy-pages@v4`, and already contains a verification step for `index.html` and `CNAME`.
- `scripts/prerender.js` renders the 7 routes, writes `404.html`, copies `CNAME`, and ends with `process.exit(0)`, with a 30s per-route render timeout.
- The reported annotation is `Canceling since a higher priority waiting request for pages exists` — a concurrency conflict, not a build failure.

## What is actually going wrong

Two separate problems are stacked:

1. **Prerender can stall.** The render timeout rejects, but the imported production server keeps live handles, so a failing/slow route leaves the step hanging until GitHub's 6-hour job limit rather than failing fast.
2. **The deploy is being cancelled.** GitHub's built-in `pages-build-deployment` run (created automatically while the Pages source was "Deploy from a branch") shares the same `pages` concurrency scope. When both queue, ours is cancelled and the old README build stays live.

## Changes

1. **Harden the prerender step**
   - Give the step a hard `timeout-minutes` cap so it can never hang the job.
   - Make the script fail loudly and immediately: unhandled rejection / uncaught exception handlers that log the route and exit non-zero, and clear the pending timers so a successful render never keeps the event loop alive.
   - Print each written file plus a final summary line so the log shows exactly where a stall happens.

2. **Stop the concurrency cancellation**
   - Keep one `pages` deployment at a time but let a newer run supersede a stale queued one, so a leftover queued request can no longer kill the real deployment.
   - Repository-side step for you: in **Settings → Pages**, confirm the source is **GitHub Actions**; if a `pages-build-deployment` run is still queued or in progress under Actions, cancel it once. After that only our workflow claims the Pages environment.

3. **Keep the verification step, tightened**
   - Fail if `dist/client/index.html` is missing.
   - Fail if `dist/client/CNAME` is missing or does not contain exactly `trikalnetra.com`.
   - Fail if any route directory (`about`, `services`, `process`, `portfolio`, `faq`, `contact`) or `404.html` is missing, before upload.

4. **Leave untouched**: the build job structure, the single artifact path `dist/client`, permissions, the deploy job, the app UI, and DNS.

## Verification

- Run the build and prerender locally in the sandbox and confirm a clean exit code 0 with all expected files under `dist/client`.
- After the change is synced to GitHub, the push triggers the workflow; check that Build, Prerender, Verify, Upload artifact, and Deploy all pass.
- Reload `https://trikalnetra.com/` and confirm the app renders instead of the README.

## Note on the run URL

I can change the workflow and verify the prerender locally, but the GitHub Actions run only exists after the commit reaches GitHub, and I cannot read your Actions runs. Once the run appears, send me its URL (or a screenshot of a failing step) and I'll act on the logs.
