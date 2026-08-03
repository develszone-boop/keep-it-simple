# Port "Smart Growth Solutions" into this project

Bring the uploaded site over as-is: same pages, same components, same copy, same styling, same assets. No new features, no backend, no new pipelines.

## What gets copied verbatim

- All section components (Hero, HeroCarousel, Navbar, Services, Portfolio, Process, FAQ, Contact, Footer, Clients, Stats, Story, Philosophy, Testimonials, WhatsAppButton, the preview variants, PageHeader, NavLink)
- All pages: Home, About, Services, Process, Portfolio, FAQ, Contact, plus the 404 page
- All shadcn/ui components used by those pages
- All images: hero backgrounds, service images, client logos, logo.svg, favicon
- The design system (colors, fonts, animations) from the uploaded `index.css` / `tailwind.config.ts`, translated into this project's `src/styles.css` theme block so the visuals match exactly

## The one unavoidable adaptation

The upload is a plain Vite SPA using React Router (`App.tsx` + `BrowserRouter` + `<Routes>`). This project runs TanStack Start, where React Router cannot be installed. So routing is re-expressed 1:1, with no change to content or visuals:

| Uploaded | Here |
|---|---|
| `App.tsx` shell (Navbar, WhatsApp button, toasters, scroll-to-top) | `src/routes/__root.tsx` around `<Outlet />` |
| `pages/Index.tsx` | `src/routes/index.tsx` |
| `pages/AboutPage.tsx` | `src/routes/about.tsx` |
| `pages/ServicesPage.tsx` | `src/routes/services.tsx` |
| `pages/ProcessPage.tsx` | `src/routes/process.tsx` |
| `pages/PortfolioPage.tsx` | `src/routes/portfolio.tsx` |
| `pages/FAQPage.tsx` | `src/routes/faq.tsx` |
| `pages/ContactPage.tsx` | `src/routes/contact.tsx` |
| `pages/NotFound.tsx` | root `notFoundComponent` |

Inside components, `react-router-dom`'s `Link`/`useLocation`/`useNavigate` are swapped for the `@tanstack/react-router` equivalents; the paths and props stay identical. Everything else in each file is left untouched.

## Technical notes

- Install the dependencies the upload references that aren't here yet (carousel, form/validation, icon and animation libs), matching its `package.json`.
- Images are added under `src/assets` and imported with the same variable names, so markup is unchanged.
- `use-toast` / `toaster` from the upload are copied as-is so existing imports resolve.
- Per-page `head()` metadata is added using each page's existing title/description text (this stack has no `index.html` meta or helmet path).
- Not carried over: `.github/workflows/deploy.yml`, `CNAME`, `public/404.html`, `postcss.config.js`, `tailwind.config.ts`, `index.html`, `main.tsx`, lockfiles — Vite/GitHub-Pages build plumbing that this stack replaces.

## Verification

Load every route and compare against the uploaded source for layout, copy, images, and navigation.