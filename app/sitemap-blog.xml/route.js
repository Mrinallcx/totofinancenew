import { fetchWordPressPostUrlsForSitemap } from "../../lib/wordpress";
import { canonicalPath, getSiteUrl } from "../../lib/site-url";

export const dynamic = "force-static";
export const revalidate = 300;

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const base = getSiteUrl();
  const now = new Date();
  const fallbackLastmod = now.toISOString();

  let posts = [];
  try {
    posts = await fetchWordPressPostUrlsForSitemap({ revalidate: 300 });
  } catch {
    posts = [];
  }

  const entries = posts.map((post) => {
    const url = `${base}${canonicalPath(`/insights/${post.slug}`)}`;
    const lastmod = post.modified
      ? new Date(post.modified).toISOString()
      : fallbackLastmod;
    return { url, lastmod };
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) =>
      `  <url>\n    <loc>${escapeXml(e.url)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=300, stale-while-revalidate=3600",
    },
  });
}
