# Clients, contact details, browser icon, and full SEO

## 1. Our Clients

In `src/components/Clients.tsx`:
- Remove Anika Farm and Sinine (and their unused logo imports).
- Add four clients, rendered as text logos (same style already used for the LootBig entries) since no logo images were supplied:
  - Gear Monkey — https://gearmonkey.in/
  - Monockle — https://www.monockle.com/
  - MindSportz — https://mindsportz.in/
  - Kyrosonics — https://kyrosonics.com/

Final list: DCS Tech Hub, AGR Foundation, Vedha Mantra, SAM LootBig, LootBig Corporate, Gear Monkey, Monockle, MindSportz, Kyrosonics.

## 2. Email and phone

A single phone number and email everywhere, replacing the two old numbers:
- Email: hello.trikalnetra@gmail.com
- Phone: +91 9063362994

Files touched: `src/components/Contact.tsx`, `src/pages/ContactPage.tsx`, and `src/components/WhatsAppButton.tsx` (WhatsApp chat number becomes 919063362994).

## 3. Browser icon

Use the uploaded Trikalnetra mark as the site favicon:
- Save it as `public/favicon.svg` and add a 180px `public/apple-touch-icon.png` version.
- Point the root route's icon links at the new files and remove the old `favicon.ico` reference.

## 4. Complete SEO

Site-wide (root route):
- Canonical URL per page based on `https://trikalnetra.com`.
- Open Graph and Twitter card tags including an `og:image` social preview (generated 1200x630 branded image) on each page.
- `theme-color`, `robots: index,follow`, and locale tags.
- Organization + LocalBusiness JSON-LD (name, logo, URL, new email/phone, Hyderabad address, client/social links) plus WebSite JSON-LD.

Per page (`/`, `/about`, `/services`, `/process`, `/portfolio`, `/faq`, `/contact`):
- Unique title (<60 chars) and description (<160 chars), matching og/twitter titles and descriptions, and a self-referencing canonical.
- FAQ page gets FAQPage JSON-LD built from the existing question list.
- Contact page gets ContactPage JSON-LD with the new email/phone.
- Service page gets Service JSON-LD; breadcrumb JSON-LD on inner pages.

Crawling and indexing files:
- `public/sitemap.xml` listing all seven routes with `lastmod`, `changefreq`, and priority, using absolute `https://trikalnetra.com` URLs.
- `public/robots.txt` extended with a `Sitemap: https://trikalnetra.com/sitemap.xml` line.

On-page hygiene:
- Verify each page renders exactly one `<h1>`, images carry descriptive `alt` text (including the client logos), and below-the-fold images use `loading="lazy"`.

No new build pipeline: the existing prerender script already emits static HTML per route, so these head tags and JSON-LD ship in the deployed HTML. `sitemap.xml` and `robots.txt` are copied from `public/` by the existing build.

## Verification

- Load each route in preview and confirm titles, canonicals, JSON-LD, and the favicon.
- Confirm the clients grid and the new email/phone appear correctly on home and contact.