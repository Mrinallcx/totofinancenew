"use client";

import { useRef, useCallback } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./ProductsBlog.css";

const BLOGS = [
  {
    title: "How eco-supply helped retail giant cut 60% of emissions",
    category: "Technology",
    date: "Nov 13, 2025",
    image:
      "https://framerusercontent.com/images/5RQMgK5fHrtHqbZuV1TA0jYKD8g.jpg?width=800&height=850",
    href: "#",
  },
  {
    title: "The future of sustainable logistics: 5 trends to watch in 2025",
    category: "Packaging",
    date: "Nov 10, 2025",
    image:
      "https://framerusercontent.com/images/pQFkiyY4lQZycbwVGTrwZEOho.jpg?width=800&height=850",
    href: "#",
  },
  {
    title: "How green logistics are changing the game",
    category: "Green Technology",
    date: "Nov 8, 2025",
    image:
      "https://framerusercontent.com/images/JXVES8YVYLM8Me4gdUlv95EmN94.jpg?width=800&height=850",
    href: "#",
  },
  {
    title: "Rethinking sustainability through circular supply chains",
    category: "Circular Economy",
    date: "Nov 2, 2025",
    image:
      "https://framerusercontent.com/images/pRNq6celAW5r3IY0AFeXBUNZW0.jpg?width=800&height=850",
    href: "#",
  },
];

export default function ProductsBlog() {
  const wrapRef = useRef(null);

  const slide = useCallback((dir) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const card = wrap.querySelector(".prodblog__card");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(wrap.querySelector(".prodblog__track")).gap) || 30;
    const scrollAmount = card.offsetWidth + gap;
    wrap.scrollBy({ left: dir * scrollAmount, behavior: "smooth" });
  }, []);

  const sectionRef = useScrollReveal();

  return (
    <section className="prodblog" id="products-how" ref={sectionRef}>
      <div className="prodblog__container">
        <div className="prodblog__layout">
          <div className="prodblog__header">
            <span className="prodblog__badge sr-item" style={{ animationDelay: "0s" }}>OUR BLOG</span>
            <h2 className="prodblog__heading">
              <SplitWords text="Inspiring insights for a smarter," />
              <span className="prodblog__heading--muted">
                <SplitWords text="greener" startDelay={0.4} />
              </span>{" "}
              <SplitWords text="future" startDelay={0.45} />
            </h2>
          </div>

        <div className="prodblog__carousel">
          <div className="prodblog__track-wrap" ref={wrapRef}>
            <div className="prodblog__track">
              {BLOGS.map((blog) => (
                <a
                  key={blog.title}
                  href={blog.href}
                  className="prodblog__card"
                >
                  <div className="prodblog__card-image-wrap">
                    <img
                      className="prodblog__card-image"
                      src={blog.image}
                      alt={blog.title}
                      width={800}
                      height={850}
                    />
                    <div className="prodblog__card-overlay" />
                  </div>
                  <div className="prodblog__card-info">
                    <div className="prodblog__card-meta">
                      <span className="prodblog__card-category">
                        {blog.category}
                      </span>
                      <span className="prodblog__card-date">{blog.date}</span>
                    </div>
                    <h2 className="prodblog__card-title">{blog.title}</h2>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="prodblog__nav">
            <button
              className="prodblog__nav-btn"
              onClick={() => slide(-1)}
              aria-label="Previous"
              type="button"
            >
              <img
                src="https://framerusercontent.com/images/YUm9VDjo3MIL9zW4cbIsc6qmIjc.svg?width=70&height=70"
                alt="Back Arrow"
                width={70}
                height={70}
              />
            </button>
            <button
              className="prodblog__nav-btn"
              onClick={() => slide(1)}
              aria-label="Next"
              type="button"
            >
              <img
                src="https://framerusercontent.com/images/sEA40c62u88cnar34dhEqoRfUYk.svg?width=70&height=70"
                alt="Next Arrow"
                width={70}
                height={70}
              />
            </button>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
