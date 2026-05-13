/**
 * Canonical production host for metadata, sitemap, and OG URLs.
 * Override with NEXT_PUBLIC_SITE_URL (no trailing slash) if needed.
 */
export const CANONICAL_SITE_URL = "https://totofinance.co";

export const SITE_NAME = "Toto Finance";

export const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/dusinlidl/image/upload/v1778234309/OG_image_2_mcoaco.webp";

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return CANONICAL_SITE_URL;
}

/**
 * Normalize a path into a canonical-safe relative URL:
 *  - strips query strings and hash fragments
 *  - ensures a single leading slash
 *  - preserves "/" for the homepage
 * Use with Next.js metadata: `alternates: { canonical: canonicalPath("/foo") }`.
 * Resolves against `metadataBase` automatically.
 */
export function canonicalPath(path = "/") {
  if (!path || path === "/") return "/";
  const clean = String(path).split("?")[0].split("#")[0];
  if (!clean || clean === "/") return "/";
  return clean.startsWith("/") ? clean : `/${clean}`;
}

/**
 * Build a complete Next.js metadata object with canonical and openGraph.url
 * always paired and in agreement. Use this on every page so og:url cannot
 * silently inherit the homepage URL from the root layout.
 *
 * Returns:
 *  - title, description
 *  - alternates.canonical (page path)
 *  - openGraph: { title, description, url, type, siteName, images }
 *  - twitter: { card, title, description, images }
 */
export function buildPageMetadata({
  path = "/",
  title,
  description,
  ogType = "website",
  ogImage,
  twitterImage,
} = {}) {
  const canonical = canonicalPath(path);
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const tImage = twitterImage ?? image;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: ogType,
      siteName: SITE_NAME,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [tImage],
    },
  };
}
