import Image from "next/image";
import "./BlogSection.css";

const POSTS = [
  {
    title: "Innovative Marketing Strategies for Small Businesses",
    category: "Marketing",
    date: "Feb 21, 2024",
    author: "Reynald Martinez",
    image:
      "https://framerusercontent.com/images/PCn2lxatGu0lCFkc5DzeXtOrA.jpg?scale-down-to=1024",
    href: "/blog/innovative-marketing-strategies-for-small-businesses",
  },
  {
    title: "The Importance of Diversity and Inclusion in Today's Workplace",
    category: "Business",
    date: "Feb 18, 2024",
    author: "Reynald Martinez",
    image:
      "https://framerusercontent.com/images/Pxt7kappD5aQmZ6ldK0odfmyrek.jpg?scale-down-to=1024",
    href: "/blog/the-importance-of-diversity-and-inclusion-in-today-s-workplace",
  },
  {
    title: "Mastering Time Management: Tips for Busy Professionals",
    category: "Innovation",
    date: "Feb 15, 2024",
    author: "Reynald Martinez",
    image:
      "https://framerusercontent.com/images/lrMjuPqWh9sEXgomLqDy1Z4fsrk.jpg?scale-down-to=1024",
    href: "/blog/mastering-time-management-tips-for-busy-professionals",
  },
  {
    title: "How AI is Reshaping Financial Advisory Services",
    category: "Technology",
    date: "Feb 12, 2024",
    author: "Sarah Chen",
    image:
      "https://framerusercontent.com/images/6zzldyoWPmdGGaVoCWQRX6Qdbyw.jpg?scale-down-to=1024",
    href: "/blog/how-ai-is-reshaping-financial-advisory",
  },
  {
    title: "Sustainable Investing: A Guide for Modern Portfolios",
    category: "Finance",
    date: "Feb 8, 2024",
    author: "Emily Watson",
    image:
      "https://framerusercontent.com/images/axh6uBVzfcWemJ09UA0Xht6Wv8.jpg?scale-down-to=1024",
    href: "/blog/sustainable-investing-modern-portfolios",
  },
  {
    title: "Building Resilient Supply Chains in a Global Economy",
    category: "Strategy",
    date: "Feb 4, 2024",
    author: "Michael Tah",
    image:
      "https://framerusercontent.com/images/9alJ1fPyAmNHOCFspdaxUoOzlqk.jpg?scale-down-to=1024",
    href: "/blog/building-resilient-supply-chains",
  },
];

function BlogCard({ post }) {
  return (
    <a href={post.href} className="blog__card">
      <div className="blog__card-image">
        <Image src={post.image} alt={post.title} draggable={false} width={400} height={300} loading="lazy" />
      </div>
      <div className="blog__card-details">
        <span className="blog__card-category">{post.category}</span>
        <h5 className="blog__card-title">{post.title}</h5>
        <div className="blog__card-meta">
          <span>{post.date}</span>
          <span>{post.author}</span>
        </div>
      </div>
    </a>
  );
}

export default function BlogSection() {
  return (
    <section className="blog">
      <div className="blog__header-wrap">
        <div className="blog__header">
          <h2 className="blog__title">Featured news and insights</h2>
          <a href="/blog" className="blog__cta">
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
          {POSTS.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
          {POSTS.map((post) => (
            <BlogCard key={`dup-${post.title}`} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
