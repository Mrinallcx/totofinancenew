"use client";

import { useRef, useEffect, useCallback } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./Vision2030Timeline.css";

const MILESTONES = [
  {
    year: "2026",
    title: "Copper and Critical Minerals Launch",
    body: "COPTT, our flagship $5B+ copper tokenization mandate. Onboard institutional investors and expand into rare earth and critical mineral mandates.",
  },
  {
    year: "2027",
    title: "Energy and Industrial Metals",
    body: "Bring oil, gas, and industrial metals on-chain. Open the platform to commodity producers across South America, MENA, and Southeast Asia.",
  },
  {
    year: "2028",
    title: "Institutional Integration",
    body: "Connect to traditional finance through banking partners, custodians, and exchanges. Tokenized commodities trade alongside bonds, equities, and stablecoins in institutional portfolios.",
  },
  {
    year: "2029",
    title: "Global Liquidity",
    body: "Launch deep secondary markets across major exchanges and DeFi protocols. Cross-border settlement infrastructure live across all major jurisdictions.",
  },
  {
    year: "2030",
    title: "The Standard for Real-World Assets",
    body: "Toto Finance is the global infrastructure layer for tokenized commodities. Hundreds of billions in real-world assets settling, trading, and redeeming on-chain, every day.",
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
          <p className="v2030tl__eyebrow">Roadmap</p>
          <h2 id="v2030tl-heading" className="v2030tl__title">
            <SplitWords
              text="The Path to 2030 Building the global infrastructure for tokenized commodities."
              startDelay={0.1}
              stagger={0.04}
            />
          </h2>
        </header>

        <p className="v2030tl__callout">
          <strong>Live Today</strong> 45,000+ assets tokenized · Operating across the EU and US · Lloyd's of London insured · Regulated under MiCA and TVTG
        </p>

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
