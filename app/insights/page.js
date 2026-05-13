import BlogPageContent from "./BlogPageContent";
import { fetchWordPressPosts } from "../../lib/wordpress";
import { buildPageMetadata } from "../../lib/site-url";

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

  return <BlogPageContent initialPosts={posts} />;
}
