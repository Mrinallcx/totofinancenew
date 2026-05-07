import { getAllFooterHrefs } from "../../lib/footer-nav";
import { canonicalPath, getSiteUrl } from "../../lib/site-url";

export const dynamic = "force-static";
export const revalidate = 3600;

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
  const lastmod = new Date().toISOString();

  const rawPaths = [
    "/",
    "/about-us",
    "/product",
    "/insights",
    ...getAllFooterHrefs(),
  ];

  const paths = [...new Set(rawPaths.map((p) => canonicalPath(p)))];

  const entries = paths.map((path) => {
    const url = path === "/" ? base : `${base}${path}`;
    const priority = path === "/" ? "1.0" : "0.8";
    const changefreq = path === "/" ? "weekly" : "monthly";
    return { url, priority, changefreq };
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) =>
      `  <url>\n    <loc>${escapeXml(e.url)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
