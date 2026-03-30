import BlogPageContent from "./BlogPageContent";
import { fetchWordPressPosts } from "../../lib/wordpress";

export const metadata = {
  title: "Blog — Toto Finance",
  description:
    "Stories, thoughts, and insights on tokenized commodities, design, and building the open commodity economy.",
};

export const revalidate = 120;

export default async function BlogPage() {
  let posts = [];
  try {
    posts = await fetchWordPressPosts({ revalidate: 120 });
  } catch {
    posts = [];
  }

  return <BlogPageContent initialPosts={posts} />;
}
