"use client";

import { useRef, useEffect, useCallback } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./Vision2030Timeline.css";

const MILESTONES = [
  {
    year: "2021",
    title: "Foundation & Vision",
    body: "Toto Finance was founded with a clear mission — to bridge traditional finance with blockchain technology. Early research and concept validation laid the groundwork for everything ahead.",
  },
  {
    year: "2022",
    title: "Building the Core",
    body: "Assembled a world-class team of engineers, economists and compliance experts. Developed our proprietary tokenization framework and secured initial regulatory approvals.",
  },
  {
    year: "2023",
    title: "First Products Launch",
    body: "Launched our first suite of commodity-backed tokens, achieving full MiCA compliance. Onboarded institutional partners and crossed $50M in total value locked within the first quarter.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    body: "Expanded operations across Europe, the Middle East and Southeast Asia. Partnered with major exchanges and traditional finance institutions to widen market access.",
  },
  {
    year: "2025",
    title: "Scale & Innovation",
    body: "Introduced advanced DeFi instruments and cross-chain interoperability. Surpassed 100,000 active users and launched our institutional-grade custody solution.",
  },
  {
    year: "2030",
    title: "The Destination",
    body: "Our north star — becoming the global standard for commodity tokenization, making sustainable assets accessible to everyone, everywhere.",
    isFuture: true,
  },
];

export default function Vision2030Timeline() {
  const headerRef = useScrollReveal();
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const itemRefs = useRef([]);
  const rafId = useRef(0);

  const update = useCallback(() => {
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!track || !progress) return;

    const rect = track.getBoundingClientRect();
    const viewMid = window.innerHeight * 0.55;
    const trackTop = rect.top;
    const trackH = rect.height;

    let ratio = (viewMid - trackTop) / trackH;
    ratio = Math.max(0, Math.min(1, ratio));

    progress.style.height = `${ratio * 100}%`;

    const progressPx = ratio * trackH;

    itemRefs.current.forEach((el) => {
      if (!el) return;
      const dotTop = el.offsetTop + 6;
      el.classList.toggle("v2030tl__item--active", progressPx >= dotTop);
    });
  }, []);

  const onScroll = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(update);
  }, [update]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      if (progressRef.current) progressRef.current.style.height = "100%";
      itemRefs.current.forEach((el) => el?.classList.add("v2030tl__item--active"));
      return;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [onScroll, update]);

  return (
    <section className="v2030tl" aria-labelledby="v2030tl-heading">
      <div className="v2030tl__inner">
        <header className="v2030tl__header" ref={headerRef}>
          <h2 id="v2030tl-heading" className="v2030tl__title">
            <SplitWords text="Key milestones shaping our path to 2030" startDelay={0.1} stagger={0.04} />
          </h2>
        </header>

        <div className="v2030tl__track" role="list" ref={trackRef}>
          <div className="v2030tl__line" aria-hidden />
          <div className="v2030tl__progress" aria-hidden ref={progressRef} />

          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              ref={(el) => (itemRefs.current[i] = el)}
              className={`v2030tl__item ${i % 2 === 0 ? "v2030tl__item--left" : "v2030tl__item--right"} ${m.isFuture ? "v2030tl__item--future" : ""}`}
              role="listitem"
            >
              <div className="v2030tl__dot" aria-hidden>
                <span className="v2030tl__dot-ring" />
              </div>

              <div className="v2030tl__card">
                <span className="v2030tl__year">{m.year}</span>
                <h3 className="v2030tl__card-title">{m.title}</h3>
                <p className="v2030tl__card-body">{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
