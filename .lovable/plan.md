# Fix GitHub Pages showing README instead of the website

## Root cause

Your domain `trikalnetra.com` is pointing to GitHub Pages, but GitHub Pages is serving the raw repository root. Because the project is a Lovable/TanStack Start app (not a plain HTML site), GitHub Pages needs a pre-built static output folder that contains `index.html`, assets, and a `CNAME` file. Right now it has none of those, so it falls back to displaying `README.md`.

## What we need to do

1. **Configure TanStack Start to build a static export** suitable for GitHub Pages (client-side routes, no SSR, base path set for the repo if needed).
2. **Add a GitHub Actions workflow** that checks out the repo, installs dependencies, builds the static site, and deploys it to GitHub Pages.
3. **Copy the `CNAME` file into the build output** so GitHub Pages keeps the custom domain mapping.
4. **Update GitHub Pages settings** in the repository to use the GitHub Actions source.
5. **Verify the custom domain DNS** still points to GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` for A records, or `trikalnetra.github.io` for CNAME).

## Technical notes

- The current project is `vite build` driven. TanStack Start normally targets SSR/edge functions; for GitHub Pages we will emit a static client bundle with `ssr: false` / prerendered routes.
- Routes will be served through the static router so `/about`, `/services`, etc. work on refresh.
- The workflow will live in `.github/workflows/deploy.yml` and use the official `actions/deploy-pages` action.
- `CNAME` must be copied to `dist/CNAME` before the deploy step.

## Verification

After the workflow runs successfully, `https://trikalnetra.com/` should load the actual website instead of the README. We will confirm by visiting the live URL and checking that the homepage, navigation, and other routes render correctly.