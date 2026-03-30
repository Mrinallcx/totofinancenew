import { fetchWordPressPostUrlsForSitemap } from "../lib/wordpress";
import { getSiteUrl } from "../lib/site-url";

/** @type {import('next').MetadataRoute.Sitemap} */
export default async function sitemap() {
  const base = getSiteUrl();
  const now = new Date();

  const staticPaths = ["", "/about", "/products", "/blog"];

  const staticEntries = staticPaths.map((path) => ({
    url: path ? `${base}${path}` : base,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const wpPosts = await fetchWordPressPostUrlsForSitemap({ revalidate: 300 });

  const blogEntries = wpPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.modified ? new Date(post.modified) : now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
