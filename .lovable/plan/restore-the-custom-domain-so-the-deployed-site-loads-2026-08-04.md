# Restore the custom domain so the deployed site loads

## Verified state

- The build and deploy now work: `https://develszone-boop.github.io/keep-it-simple/` serves the real application HTML (not the README).
- Every asset in that HTML is referenced from the site root, e.g. `href="/assets/index-DntyXFUT.js"`, `"/assets/styles-Vfu8T8-6.css"`.
- The project URL serves the site from the subpath `/keep-it-simple/`, so all those root paths resolve to `develszone-boop.github.io/assets/...`, which does not exist. That is exactly the 404 list in the console, and why only the bare carousel arrows render.
- `https://trikalnetra.com/` currently returns GitHub's **404 Site not found** page. The custom domain is no longer attached to this repository's Pages site.

So there is no remaining code or pipeline problem. The site is built and published correctly for a root domain; it is simply not being served from a root domain right now.

## What needs to happen (GitHub settings only, no code changes)

1. Re-attach the custom domain
   - Repository → **Settings → Pages → Custom domain**
   - Enter `trikalnetra.com`, click **Save**
   - Wait for the DNS check to pass, then tick **Enforce HTTPS** once it becomes available (certificate issuance can take a few minutes)
2. Keep **Source** set to **GitHub Actions**.
3. Re-run the **Deploy to GitHub Pages** workflow after saving the domain, so the published artifact is served under the new domain binding.
4. Verify at `https://trikalnetra.com/` — the full site should load with styling, images and navigation.

## Note on the github.io URL

`https://develszone-boop.github.io/keep-it-simple/` will keep showing an unstyled page even after this, because the app is built for a root path. Once the custom domain is attached, GitHub redirects the project URL to `trikalnetra.com`, so this stops mattering. `trikalnetra.com` is the canonical URL for this build (it is also what `sitemap.xml`, canonical tags and the `CNAME` file declare).

If you would rather have the `github.io/keep-it-simple/` URL work standalone instead, that requires rebuilding the app with a `/keep-it-simple/` base path — which would then break the root custom domain. Only one of the two can be the target.
