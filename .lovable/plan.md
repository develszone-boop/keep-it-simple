# Fix GitHub Pages serving the README

## Verified cause

Two Pages deployments are running on every push:

- **Deploy to GitHub Pages** — the repository’s existing custom workflow, which builds and prerenders the application.
- **pages build and deployment** — GitHub’s built-in Jekyll branch workflow, which successfully publishes the repository README.

The live `/keep-it-simple/` URL is currently the Jekyll result. The latest custom workflow also stops at **Verify Pages artifact** after Build and Prerender succeed, so it skips Upload artifact and Deploy.

There is an additional verified mismatch: the only tracked domain file is `docs/CNAME`, but the prerender script only copies a root-level `CNAME`. Therefore the current output is not guaranteed to contain `dist/client/CNAME`, even though the workflow requires it.

## Changes to the existing pipeline

1. **Make the domain file part of the built artifact**
   - Move the existing `docs/CNAME` to `public/CNAME` so the normal build copies it into `dist/client`.
   - Keep the required value exactly `trikalnetra.com`.
   - Update the prerender script’s CNAME handling to use the source that actually exists and fail clearly if the final file is absent.

2. **Keep the current GitHub Actions workflow**
   - Do not add a new workflow or deployment system.
   - Continue building, prerendering, verifying, and uploading only `dist/client`.
   - Preserve checks for `index.html`, `404.html`, `CNAME`, and all seven prerendered routes.

3. **Stop the competing Jekyll deployment in GitHub settings**
   - In **Repository → Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
   - If it already displays GitHub Actions, toggle to branch deployment, save, then switch back to GitHub Actions and save to clear the stale branch configuration.
   - Cancel any queued `pages build and deployment` runs. Future pushes should create only the custom **Deploy to GitHub Pages** run.

4. **Verify the result**
   - Run the existing build and prerender locally and confirm `dist/client` contains:
     - `index.html`, `404.html`, and `CNAME`
     - `about/index.html`, `services/index.html`, `process/index.html`, `portfolio/index.html`, `faq/index.html`, and `contact/index.html`
   - Re-run the existing GitHub workflow and confirm Build, Prerender, Verify, Upload artifact, and Deploy all pass.
   - Check both `https://trikalnetra.com/` and `https://develszone-boop.github.io/keep-it-simple/` after deployment; the custom domain is the canonical root URL for this build.

## Your required GitHub step

The repository setting cannot be changed by project code. After the code correction is synchronized, you must complete step 3 in GitHub. Otherwise the built-in Jekyll workflow can continue overwriting the application with the README.