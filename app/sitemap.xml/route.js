import { getSiteUrl } from "../../lib/site-url";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const base = getSiteUrl();
  const lastmod = new Date().toISOString();

  const sitemaps = [
    { loc: `${base}/sitemap-main.xml`, lastmod },
    { loc: `${base}/sitemap-blog.xml`, lastmod },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (s) =>
      `  <sitemap>\n    <loc>${s.loc}</loc>\n    <lastmod>${s.lastmod}</lastmod>\n  </sitemap>`
  )
  .join("\n")}
</sitemapindex>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
