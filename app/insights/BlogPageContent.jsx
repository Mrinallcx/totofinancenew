"use client";

import { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import BlogPageHero from "../components/BlogPageHero";
import BlogPageWork from "../components/BlogPageWork";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";
import "./BlogPageContent.css";

const BLOG_LOCAL_LINKS = [
  { label: "Stories", href: "#blog-hero" },
  { label: "Articles", href: "#blog-posts" },
];

export default function BlogPageContent({ initialPosts = [] }) {
  const pinStackRef = useRef(null);
  const spacerRef = useRef(null);
  const heroLayerRef = useRef(null);

  useEffect(() => {
    const pinStack = pinStackRef.current;
    const spacer = spacerRef.current;
    const heroLayer = heroLayerRef.current;
    if (!pinStack || !spacer || !heroLayer) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      heroLayer.style.transform = "";
      heroLayer.style.opacity = "";
      return;
    }

    let raf = 0;

    const update = () => {
      raf = 0;
      const spacerH = Math.max(spacer.offsetHeight, 1);
      const top = pinStack.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, -top / spacerH));

      const scale = 1 - 0.01261 * p;
      const rot = 3.15249 * p;
      const opacity = 1 - 0.06305 * p;

      heroLayer.style.transform = `perspective(1200px) scale(${scale}) rotateX(${rot}deg) rotateY(${-rot}deg)`;
      heroLayer.style.opacity = String(opacity);
    };

    const onScrollOrResize = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main className="blogpage">
      <NavBar pageTitle="Insights" localLinks={BLOG_LOCAL_LINKS} />
      <div ref={pinStackRef} className="blogpage__pin-stack">
        <div ref={heroLayerRef} className="blogpage__hero-layer">
          <BlogPageHero />
        </div>
        <div ref={spacerRef} className="blogpage__hero-spacer" aria-hidden />
      </div>
      <div className="blogpage__cards-shell">
        <BlogPageWork posts={initialPosts} />
      </div>
      <CtaImage />
      <Footer />
    </main>
  );
}
