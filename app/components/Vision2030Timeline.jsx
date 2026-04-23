"use client";

import { useRef, useEffect, useCallback } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./Vision2030Timeline.css";

const MILESTONES = [
  {
    year: "2025",
    title: "Foundation and Global Expansion",
    body: "Launch scalable tokenization infrastructure, add more commodities, and develop compliant regulatory frameworks for global operation.",
  },
  {
    year: "2026",
    title: "Metals and In-Ground Resource Integration",
    body: "Enhance metals and in-ground resource tokenization, facilitating institutional access to strategic and critical commodities.",
  },
  {
    year: "2027",
    title: "Resource Layer Expansion",
    body: "Launch new token models, liquidity tools, and asset interoperability across commodity types.",
  },
  {
    year: "2028",
    title: "Market Infrastructure Convergence",
    body: "Synchronize digital commodities with global financial infrastructure for settlement, custody, compliance, and institutional trading.",
  },
  {
    year: "2029",
    title: "Interoperability and Global Access",
    body: "Launch cross-border value transfer infrastructure and enhance institutional partnerships for global liquidity access under regulated frameworks.",
  },
  {
    year: "2030",
    title: "Global Liquidity Network",
    body: "Run a fully interconnected global ecosystem where commodities, in-ground assets, and real world value flow transparently and compliantly.",
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
            <SplitWords text="Roadmap to Global Commodity Tokenization" startDelay={0.1} stagger={0.04} />
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
