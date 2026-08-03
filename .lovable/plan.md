# Fix the GitHub Pages deployment

## Verified state

- `trikalnetra.com` resolves successfully to GitHub Pages and HTTPS is enabled.
- The provided **Settings → Pages** screenshot confirms the deployment source is **GitHub Actions** and the custom-domain DNS check succeeds.
- The public site still returns the README-generated page (`Keep It Simple | keep-it-simple`).
- The custom **Deploy to GitHub Pages** workflow exists and its build step succeeds.
- The latest custom workflow is stalled at **Prerender static pages**; **Upload artifact** and the deploy job have not run.
- The workflow is configured to upload `dist/client`, and the prerender script is configured to create `dist/client/index.html`, route HTML files, `404.html`, and `dist/client/CNAME`.

## Changes

1. Make the prerender command terminate cleanly after all static files are written, without changing the application UI or adding another deployment pipeline.
2. Add explicit verification in the existing workflow before upload:
   - confirm `dist/client/index.html` exists;
   - confirm `dist/client/CNAME` exists and contains `trikalnetra.com`;
   - print a concise build-output listing for future diagnosis.
3. Keep the official Pages artifact upload pointed only at `dist/client`.
4. Preserve the existing build and deploy jobs, permissions, custom domain, and routes.

## Verification

- Confirm the local prerender command exits successfully and produces `index.html`, assets, route pages, `404.html`, and `CNAME` under `dist/client`.
- After the synchronized commit triggers GitHub Actions, verify the build, prerender, artifact upload, and deploy jobs all complete successfully.
- Recheck `https://trikalnetra.com/` and confirm it serves the application title/content rather than the README page.
- Use the workflow run URL as the deployment/log evidence; if GitHub reports a failure, inspect the failing step logs before making any further change.
