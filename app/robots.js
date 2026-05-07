import { getSiteUrl } from "../lib/site-url";

const MARKETPLACE_SITEMAP_URL = "https://app.totofinance.co/sitemap.xml";

/** @type {import('next').MetadataRoute.Robots} */
export default function robots() {
  const base = getSiteUrl();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      `${base}/sitemap.xml`,
      `${base}/sitemap-main.xml`,
      `${base}/sitemap-blog.xml`,
      MARKETPLACE_SITEMAP_URL,
    ],
  };
}
