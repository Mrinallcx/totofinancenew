"use client";

import { useRef, useCallback } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./ProductsBlog.css";

const BLOGS = [
  {
    title: "Gold, Silver and Platinum",
    category: "Precious Metals",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777471266/vault_gb1kyu.png",
    href: "/tokenized-gold",
  },
  {
    title: "Diamonds and Sapphire",
    category: "Gemstones",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777471794/gems_xrzphn.png",
    href: "/tokenized-diamonds",
  },
  {
    title: "Copper, Tin and Iron",
    category: "Industrial Metals",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777471267/copper_wire_usbqn7.png",
    href: "/tokenized-copper",
  },
  {
    title: "Rare Earth Elements",
    category: "Critical Minerals",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777471267/mine_product_vrzs8b.png",
    href: "/rare-earth",
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
            <span className="prodblog__badge sr-item" style={{ animationDelay: "0s" }}>OUR PRODUCTS</span>
            <h2 className="prodblog__heading">
              <SplitWords text="Tokenized Commodities for Global Markets" />
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
