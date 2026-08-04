# Fix GitHub Pages navigation and reload 404s

## Verified cause

The application routes and static build are working correctly, but the wrong artifact is live:

- The existing **Deploy to GitHub Pages** workflow completed successfully at 06:45:05 UTC. Its Build, Prerender, Verify, Upload artifact, and Deploy steps all passed.
- GitHub simultaneously started its legacy **pages build and deployment** workflow. That workflow built the repository with Jekyll and finished at 06:45:14 UTC—nine seconds after the application deployment.
- GitHub then marked the application deployment inactive and made the later Jekyll deployment active.
- The live homepage currently contains `generator: Jekyll v3.10.0` and the repository README, not the generated application.
- `/about`, `/services`, `/process`, `/portfolio`, `/faq`, `/contact`, and even `/404.html` currently return GitHub’s generic 404 because the active Jekyll artifact contains none of the generated route files.
- DNS, HTTPS, and the custom-domain redirect are working. This is not a DNS, TanStack Router, asset-base, or browser-cache problem.
- The repository still contains a leftover `docs/CNAME` from the earlier branch-deployment setup. The correct domain source is already `public/CNAME`, which the prerender script copies into the application artifact.

## Changes

1. **Remove the conflicting branch-deployment remnant**
   - Delete `docs/CNAME` and the now-empty `docs` directory.
   - Keep `public/CNAME` as the only domain file and preserve `trikalnetra.com` exactly.

2. **Harden the existing workflow—no new deployment pipeline**
   - Keep `.github/workflows/deploy.yml`, `actions/upload-pages-artifact`, `actions/deploy-pages`, and `dist/client`.
   - Make artifact verification fail-fast rather than continuing after shell errors.
   - Continue checking `index.html`, `404.html`, `CNAME`, and all six child-route `index.html` files.
   - Add content checks proving the generated homepage is the trikalnetra application, each prerendered route contains application HTML, asset references resolve from the custom-domain root, and the artifact is not Jekyll/README output.
   - Add a post-deployment smoke check against `https://trikalnetra.com/` and every public route so the workflow cannot report a healthy release if another Pages deployment replaces it with the README or GitHub 404 page.

3. **Correct the GitHub Pages source**
   - In **Repository → Settings → Pages → Build and deployment**, select **GitHub Actions** and leave it selected.
   - Do not select **Deploy from a branch**, `main`, `/ (root)`, or `/docs`.
   - Cancel any queued/running workflow named **pages build and deployment**.
   - Re-run only **Deploy to GitHub Pages** after the code changes reach `main`.
   - This settings step is required because project code and the workflow’s standard `GITHUB_TOKEN` cannot change the repository’s Pages build type from legacy to workflow mode.

4. **End-to-end verification**
   - Confirm a new push starts **Deploy to GitHub Pages** but does not start **pages build and deployment**.
   - Confirm the custom workflow passes Build, Prerender, artifact verification, Upload artifact, Deploy, and live smoke verification.
   - Verify direct loads, navigation, and hard reloads for `/`, `/about`, `/services`, `/process`, `/portfolio`, `/faq`, and `/contact`.
   - Confirm the live HTML has trikalnetra metadata and application assets, with no Jekyll generator or README content.

## Technical note

The current prerender implementation already writes the correct GitHub Pages structure:

```text
dist/client/
  index.html
  404.html
  CNAME
  about/index.html
  services/index.html
  process/index.html
  portfolio/index.html
  faq/index.html
  contact/index.html
  assets/...
```

The route links use TanStack Router correctly, and root-relative assets are correct for the apex custom domain. The fix therefore targets the competing publisher and deployment validation rather than replacing routing or introducing another pipeline.