/**
 * Canonical production host for metadata, sitemap, and OG URLs.
 * Override with NEXT_PUBLIC_SITE_URL (no trailing slash) if needed.
 */
export const CANONICAL_SITE_URL = "https://www.totofinance.xyz";

export function getSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return CANONICAL_SITE_URL;
}
