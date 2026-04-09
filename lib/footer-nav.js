/**
 * Footer columns + placeholder page slugs (single segment).
 * Slugs that already have app/<slug>/page.js are linked in the footer but omitted from placeholders.
 */

const EXISTING_PAGE_SLUGS = new Set(["about-us"]);

/** @type {{ title: string, links: { label: string, href: string }[] }[]} */
export const FOOTER_MENUS = [
  {
    title: "Platform",
    links: [
      { label: "Toto Token", href: "/toto-token" },
      { label: "Ecosystem Hub", href: "/ecosystem-hub" },
      { label: "Vision 2030 Plan", href: "/vision-2030-plan" },
    ],
  },
  {
    title: "Commodities",
    links: [
      { label: "Gold", href: "/tokenized-gold-assets" },
      { label: "Silver", href: "/tokenized-silver-assets" },
      { label: "Platinum", href: "/tokenized-platinum-assets" },
      { label: "Diamond", href: "/tokenized-diamond-assets" },
      { label: "Sapphire", href: "/tokenized-sapphire-assets" },
      { label: "Copper", href: "/tokenized-copper-assets" },
      { label: "Tin", href: "/tokenized-tin-assets" },
      { label: "Iron", href: "/tokenized-iron-assets" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Key achievements", href: "/key-achievements" },
      { label: "Careers", href: "/open-careers" },
      { label: "Insights blog", href: "/insights-blog" },
      { label: "Help & FAQ", href: "/help-faq" },
      { label: "Legal imprint", href: "/legal-imprint" },
    ],
  },
  {
    title: "Rare earth",
    links: [
      { label: "Cerium", href: "/tokenized-cerium-asset" },
      { label: "Dysprosium", href: "/tokenized-dysprosium-asset" },
      { label: "Erbium", href: "/tokenized-erbium-asset" },
      { label: "Europium", href: "/tokenized-europium-asset" },
      { label: "Gadolinium", href: "/tokenized-gadolinium-asset" },
      { label: "Holmium", href: "/tokenized-holmium-asset" },
      { label: "Lanthanum", href: "/tokenized-lanthanum-asset" },
      { label: "Lutetium", href: "/tokenized-lutetium-asset" },
      { label: "Neodymium", href: "/tokenized-neodymium-asset" },
    ],
  },
  {
    title: "Rare earth (continued)",
    links: [
      { label: "Praseodymium", href: "/tokenized-praseodymium-asset" },
      { label: "Promethium", href: "/tokenized-promethium-asset" },
      { label: "Samarium", href: "/tokenized-samarium-asset" },
      { label: "Scandium", href: "/tokenized-scandium-asset" },
      { label: "Terbium", href: "/tokenized-terbium-asset" },
      { label: "Thulium", href: "/tokenized-thulium-asset" },
      { label: "Ytterbium", href: "/tokenized-ytterbium-asset" },
      { label: "Yttrium", href: "/tokenized-yttrium-asset" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy-page" },
      { label: "Terms & conditions", href: "/terms-and-conditions" },
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
      if (!slug.includes("/")) map[slug] = label;
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
