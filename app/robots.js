import { getSiteUrl } from "../lib/site-url";

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
    ],
  };
}
