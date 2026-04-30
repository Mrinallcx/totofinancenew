/**
 * Canonical production host for metadata, sitemap, and OG URLs.
 * Override with NEXT_PUBLIC_SITE_URL (no trailing slash) if needed.
 */
export const CANONICAL_SITE_URL = "https://totofinance.co";

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
