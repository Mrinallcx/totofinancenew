/**
 * Footer columns + placeholder page slugs (single segment).
 * Slugs that already have app/<slug>/page.js are linked in the footer but omitted from placeholders.
 */

const EXISTING_PAGE_SLUGS = new Set(["about-us", "vision", "docs", "toto-ecosystem", "insights"]);

/** @type {{ title: string, links: { label: string, href: string }[] }[]} */
export const FOOTER_MENUS = [
  {
    title: "Platform",
    links: [
      { label: "Products", href: "/products" },
      { label: "Solutions", href: "/solutions" },
      { label: "Ecosystem", href: "/toto-ecosystem" },
      { label: "Vision 2030", href: "/vision" },
    ],
  },
  {
    title: "Metals & Gems",
    links: [
      { label: "Gold", href: "/tokenized-gold-assets" },
      { label: "Silver", href: "/tokenized-silver-assets" },
      { label: "Platinum", href: "/tokenized-platinum-assets" },
      { label: "Diamonds", href: "/tokenized-diamond-assets" },
      { label: "Sapphire", href: "/tokenized-sapphire-assets" },
      { label: "Copper", href: "/tokenized-copper-assets" },
      { label: "Tin", href: "/tokenized-tin-assets" },
      { label: "Iron", href: "/tokenized-iron-assets" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Blog", href: "/insights" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Trust & Compliance", href: "/about#leadership" },
      { label: "Achievements", href: "/achievements" },
      { label: "Careers↗", href: "/open-careers" },
    ],
  },
];

/** Flat map slug (no leading slash) -> display title for metadata & placeholder */
function buildSlugTitleMap() {
  /** @type {Record<string, string>} */
  const map = {};
  for (const menu of FOOTER_MENUS) {
    for (const { label, href } of menu.links) {
      const slug = href.replace(/^\//, "");
      if (!slug.includes("/") && !slug.includes("#") && !slug.includes("?")) {
        map[slug] = label;
      }
    }
  }
  return map;
}

export const PLACEHOLDER_SLUG_TITLES = buildSlugTitleMap();

export function getFooterPlaceholderSlugs() {
  return Object.keys(PLACEHOLDER_SLUG_TITLES).filter(
    (slug) => !EXISTING_PAGE_SLUGS.has(slug)
  );
}

export function isFooterPlaceholderSlug(slug) {
  return (
    Object.prototype.hasOwnProperty.call(PLACEHOLDER_SLUG_TITLES, slug) &&
    !EXISTING_PAGE_SLUGS.has(slug)
  );
}

export function getPlaceholderTitle(slug) {
  return PLACEHOLDER_SLUG_TITLES[slug] ?? slug;
}

/** Unique hrefs from footer (for sitemap). */
export function getAllFooterHrefs() {
  const set = new Set();
  for (const menu of FOOTER_MENUS) {
    for (const { href } of menu.links) {
      set.add(href);
    }
  }
  return [...set];
}
