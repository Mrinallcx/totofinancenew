"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./BlogSection.css";

const DEFAULT_AUTHOR = "Toto Finance";

const FALLBACK_POSTS = [
  {
    id: "fallback-1",
    title: "Innovative Marketing Strategies for Small Businesses",
    category: "Marketing",
    date: "Feb 21, 2024",
    author: DEFAULT_AUTHOR,
    image:
      "https://framerusercontent.com/images/PCn2lxatGu0lCFkc5DzeXtOrA.jpg?scale-down-to=1024",
    href: "/insights/innovative-marketing-strategies-for-small-businesses",
  },
  {
    id: "fallback-2",
    title: "The Importance of Diversity and Inclusion in Today's Workplace",
    category: "Business",
    date: "Feb 18, 2024",
    author: DEFAULT_AUTHOR,
    image:
      "https://framerusercontent.com/images/Pxt7kappD5aQmZ6ldK0odfmyrek.jpg?scale-down-to=1024",
    href: "/insights/the-importance-of-diversity-and-inclusion-in-today-s-workplace",
  },
  {
    id: "fallback-3",
    title: "Mastering Time Management: Tips for Busy Professionals",
    category: "Innovation",
    date: "Feb 15, 2024",
    author: DEFAULT_AUTHOR,
    image:
      "https://framerusercontent.com/images/lrMjuPqWh9sEXgomLqDy1Z4fsrk.jpg?scale-down-to=1024",
    href: "/insights/mastering-time-management-tips-for-busy-professionals",
  },
  {
    id: "fallback-4",
    title: "How AI is Reshaping Financial Advisory Services",
    category: "Technology",
    date: "Feb 12, 2024",
    author: DEFAULT_AUTHOR,
    image:
      "https://framerusercontent.com/images/6zzldyoWPmdGGaVoCWQRX6Qdbyw.jpg?scale-down-to=1024",
    href: "/insights/how-ai-is-reshaping-financial-advisory",
  },
  {
    id: "fallback-5",
    title: "Sustainable Investing: A Guide for Modern Portfolios",
    category: "Finance",
    date: "Feb 8, 2024",
    author: DEFAULT_AUTHOR,
    image:
      "https://framerusercontent.com/images/axh6uBVzfcWemJ09UA0Xht6Wv8.jpg?scale-down-to=1024",
    href: "/insights/sustainable-investing-modern-portfolios",
  },
  {
    id: "fallback-6",
    title: "Building Resilient Supply Chains in a Global Economy",
    category: "Strategy",
    date: "Feb 4, 2024",
    author: DEFAULT_AUTHOR,
    image:
      "https://framerusercontent.com/images/9alJ1fPyAmNHOCFspdaxUoOzlqk.jpg?scale-down-to=1024",
    href: "/insights/building-resilient-supply-chains",
  },
];

const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function formatPublishDate(value) {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return DATE_FORMATTER.format(d);
}

function adaptWordPressPost(post) {
  if (!post) return null;
  return {
    id: post.id ?? post.slug,
    title: post.title,
    category: post.categoryLabel || "Article",
    date: formatPublishDate(post.date),
    author: DEFAULT_AUTHOR,
    image: post.image || null,
    href: post.slug ? `/insights/${post.slug}` : "/insights",
  };
}

function BlogCard({ post }) {
  return (
    <a href={post.href} className="blog__card">
      <div
        className={`blog__card-image ${post.image ? "" : "blog__card-image--placeholder"}`}
      >
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            draggable={false}
            width={400}
            height={300}
            loading="lazy"
          />
        ) : null}
      </div>
      <div className="blog__card-details">
        <span className="blog__card-category">{post.category}</span>
        <h5 className="blog__card-title">{post.title}</h5>
        <div className="blog__card-meta">
          {post.date ? <span>{post.date}</span> : null}
          <span>{post.author}</span>
        </div>
      </div>
    </a>
  );
}

export default function BlogSection({ initialPosts = [] }) {
  const sectionRef = useScrollReveal();

  const adapted = Array.isArray(initialPosts)
    ? initialPosts.map(adaptWordPressPost).filter(Boolean)
    : [];
  const posts = adapted.length > 0 ? adapted.slice(0, 10) : FALLBACK_POSTS;

  return (
    <section className="blog" ref={sectionRef}>
      <div className="blog__header-wrap">
        <div className="blog__header">
          <h2 className="blog__title">
            <SplitWords text="Featured news and insights" />
          </h2>
          <a href="/insights" className="blog__cta sr-item" style={{ animationDelay: "0.4s" }}>
            <span>View all articles</span>
            <span className="cta__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="blog__scroll-wrap">
        <div className="blog__scroll-track">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          {posts.map((post) => (
            <BlogCard key={`dup-${post.id}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
