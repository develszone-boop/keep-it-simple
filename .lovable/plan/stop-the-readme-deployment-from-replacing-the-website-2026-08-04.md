# Stop the README deployment from replacing the website

## Verified cause

Two different GitHub Pages deployments are publishing to the same domain:

- **Deploy to GitHub Pages** completed successfully at 06:30 UTC and published the built application.
- **pages build and deployment** completed successfully at 06:31 UTC and then replaced it with the branch/Jekyll build, which renders `README.md`.

That one-minute sequence explains why the developed site appears briefly and then changes back to the page in the screenshot. The live domain currently serves the README content.

## Required GitHub settings correction

1. Open the repository’s **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions** and leave it selected.
   - Do not select **Deploy from a branch**, `main`, or `/ (root)`; that setting starts the competing Jekyll deployment.
3. Open the repository’s **Actions** tab.
4. Cancel any queued or running workflow named **pages build and deployment**.
5. Open **Deploy to GitHub Pages** and choose **Run workflow → main → Run workflow**.
6. Wait for its **build** and **deploy** jobs to complete successfully, then hard-refresh `https://trikalnetra.com/`.

## Verification

- Confirm a refresh and a direct visit both keep showing the developed website.
- Confirm no new **pages build and deployment** run is created.
- Confirm the live HTML no longer contains the README or the Jekyll-generated page.
- If GitHub creates the branch workflow again, recheck that **Source** still says **GitHub Actions**; no application-code or pipeline change is required.