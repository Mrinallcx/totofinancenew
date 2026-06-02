import Image from "next/image";
import { notFound } from "next/navigation";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import {
  fetchWordPressPostBySlug,
  fetchWordPressPostUrlsForSitemap,
  fetchWordPressPosts,
  stripForMetaDescription,
} from "../../../lib/wordpress";
import { buildPageMetadata, getSiteUrl } from "../../../lib/site-url";
import "./BlogPostArticle.css";

const INSIGHTS_LOCAL_LINKS = [
  { label: "Stories", href: "/insights#blog-hero" },
  { label: "Articles", href: "/insights#blog-posts" },
];

export const revalidate = 120;
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    const posts = await fetchWordPressPostUrlsForSitemap({ revalidate: 300 });
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = null;
  try {
    post = await fetchWordPressPostBySlug(slug, { revalidate: 120 });
  } catch {
    post = null;
  }

  if (!post) {
    return { title: "Article — Toto Finance" };
  }

  // Prefer the full article body so the truncator can cut at a word
  // boundary within the 160-char budget. The WP auto-excerpt is itself a
  // mid-sentence pre-truncation (e.g. "By 2030, the") and would be passed
  // through as-is because it's already under 160 chars.
  const description =
    stripForMetaDescription(post.contentHtml || post.excerpt || "") ||
    `Read "${post.title}" on the Toto Finance insights page.`;

  return buildPageMetadata({
    path: `/insights/${slug}`,
    title: `${post.title} — Toto Finance`,
    description,
    ogType: "article",
    ogImage: post.image || undefined,
  });
}

export default async function InsightsPostPage({ params }) {
  const { slug } = await params;
  const siteUrl = getSiteUrl();

  let post = null;
  try {
    post = await fetchWordPressPostBySlug(slug, { revalidate: 120 });
  } catch {
    post = null;
  }

  if (!post) {
    notFound();
  }

  const description =
    stripForMetaDescription(post.contentHtml || post.excerpt || "") ||
    `Read "${post.title}" on the Toto Finance insights page.`;

  let suggestedPosts = [];
  try {
    const candidates = await fetchWordPressPosts({ perPage: 50, revalidate: 120 });
    suggestedPosts = candidates
      .filter((candidate) => candidate.slug !== post.slug)
      .slice(0, 10);
  } catch {
    suggestedPosts = [];
  }

  return (
    <main>
      <NavBar pageTitle="Insights" localLinks={INSIGHTS_LOCAL_LINKS} />
      <article className="blogpost">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${siteUrl}/insights/${slug}`,
              },
              headline: post.title,
              description: description,
              image: post.image
                ? [post.image]
                : undefined,
              datePublished: post.date
                ? post.date.includes("+") || post.date.includes("Z")
                  ? post.date
                  : `${post.date}+00:00`
                : undefined,
              dateModified: post.modified
                ? post.modified.includes("+") || post.modified.includes("Z")
                  ? post.modified
                  : `${post.modified}+00:00`
                : undefined,
              author: post.author?.name
                ? {
                    "@type": "Person",
                    name: post.author.name,
                    url: post.author.url || undefined,
                  }
                : { "@id": `${siteUrl}/#organization` },
              publisher: { "@id": `${siteUrl}/#organization` },
              articleSection: post.categoryLabel || "Tokenization",
              inLanguage: "en",
              url: `${siteUrl}/insights/${slug}`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Insights",
                  item: `${siteUrl}/insights`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: post.title,
                },
              ],
            }),
          }}
        />
        <header className="blogpost__hero">
          <h1 className="blogpost__title">{post.title}</h1>
          {post.excerpt ? <p className="blogpost__lead">{post.excerpt}</p> : null}
          <div className="blogpost__meta" aria-label="Post details">
            <span className="blogpost__meta-badge">{post.categoryLabel}</span>
            <span className="blogpost__meta-badge">{post.readTimeLabel}</span>
          </div>
        </header>

        {post.image ? (
          <div className="blogpost__thumbnail" aria-hidden>
            <Image
              src={post.image}
              alt=""
              fill
              className="blogpost__featured"
              sizes="(max-width: 768px) 100vw, 720px"
              priority
            />
          </div>
        ) : null}

        <section className="blogpost__inner" aria-label="Article content">
          <div className="blogpost__info">
            <div
              className="blogpost__content wp-content"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            {post.tags && post.tags.length > 0 ? (
              <div className="blogpost__tags-wrap" aria-label="Article tags">
                <p className="blogpost__tags-title">Tags</p>
                <div className="blogpost__tags blogpost__tags--footer">
                  {post.tags.map((tag) => (
                    <span key={tag.slug} className="blogpost__tag">
                      {tag.name}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        {suggestedPosts.length > 0 ? (
          <section className="blogpost__suggested" aria-label="Suggested articles">
            <div className="blogpost__suggested-inner">
              <div className="blogpost__suggested-track" aria-hidden="false">
                {[...suggestedPosts, ...suggestedPosts].map((item, i) => (
                  <a
                    key={`${item.slug}-${i}`}
                    href={`/insights/${item.slug}`}
                    className="blogpost__suggested-link"
                    tabIndex={i >= suggestedPosts.length ? -1 : undefined}
                    aria-hidden={i >= suggestedPosts.length ? true : undefined}
                  >
                    <article className="blogpost__suggested-card">
                      <div
                        className={`blogpost__suggested-image-wrap ${item.image ? "" : "blogpost__suggested-image-wrap--placeholder"}`}
                      >
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="blogpost__suggested-image"
                            sizes="240px"
                          />
                        ) : null}
                      </div>
                      <div className="blogpost__suggested-body">
                        <h3 className="blogpost__suggested-card-title">
                          {item.title}
                        </h3>
                        <p className="blogpost__suggested-meta">
                          <span>{item.readTimeLabel}</span>
                        </p>
                      </div>
                    </article>
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>
      <Footer />
    </main>
  );
}
