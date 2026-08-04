export const SITE_URL = "https://trikalnetra.com";
export const SITE_NAME = "trikalnetra";
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const CONTACT_EMAIL = "hello.trikalnetra@gmail.com";
export const CONTACT_PHONE = "+919063362994";

type MetaTag = Record<string, string>;
type LinkTag = Record<string, string>;
type ScriptTag = { type: string; children: string };

export interface PageSeoOptions {
  path: string;
  title: string;
  description: string;
  type?: string;
  jsonLd?: Array<Record<string, unknown>>;
}

export function pageSeo({ path, title, description, type = "website", jsonLd = [] }: PageSeoOptions): {
  meta: MetaTag[];
  links: LinkTag[];
  scripts: ScriptTag[];
} {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: OG_IMAGE,
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  description:
    "trikalnetra delivers business analytics, digital marketing, web development, SEO and cybersecurity services for growing businesses.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61587345544535",
    "https://www.instagram.com/official_trikalnetra",
    "https://www.linkedin.com/in/trikalnetra-techgiant-b150823aa/",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-IN",
};

export function faqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}