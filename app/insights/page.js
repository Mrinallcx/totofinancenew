import BlogPageContent from "./BlogPageContent";
import { fetchWordPressPosts } from "../../lib/wordpress";
import { buildPageMetadata, getSiteUrl } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/insights",
  title: "Insights — Toto Finance",
  description:
    "Stories, thoughts, and insights on tokenized commodities and building the open commodity economy.",
});

export const revalidate = 120;

export default async function InsightsPage() {
  let posts = [];
  try {
    posts = await fetchWordPressPosts({ revalidate: 120 });
  } catch {
    posts = [];
  }

  const siteUrl = getSiteUrl();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${siteUrl}/insights`,
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insights",
    url: `${siteUrl}/insights`,
    description:
      "Stories, thoughts, and insights on tokenized commodities and building the open commodity economy.",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.slice(0, 50).map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteUrl}/insights/${post.slug}`,
        name: post.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <BlogPageContent initialPosts={posts} />
    </>
  );
}
