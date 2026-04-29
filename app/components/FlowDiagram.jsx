"use client";

import { useEffect, useRef, useCallback } from "react";
import "./FlowDiagram.css";

const TRIGGER = {
  icon: "⚡",
  title: "Tokenized Commodity",
  subtitle: "Asset Verified",
};

const TARGETS = [
  { icon: "🛒", title: "Purchase", subtitle: "Physical Asset" },
  { icon: "🔒", title: "Toto Clear", subtitle: "T+0 Settlement" },
  { icon: "📡", title: "Oracle", subtitle: "Live Price" },
  { icon: "✅", title: "LCX", subtitle: "Physical Validator" },
  { icon: "🛡️", title: "Lloyds", subtitle: "Insurance" },
  { icon: "📜", title: "Smart Contract", subtitle: "Compliance" },
  { icon: "🏦", title: "Custody", subtitle: "Secure Storage" },
  { icon: "🔗", title: "Blockchain", subtitle: "On-chain Record" },
  { icon: "🌐", title: "Marketplace", subtitle: "Global Trade" },
];

const SPLIT_RATIO = 0.15;
const PHASE1_MS = 400;
const PHASE2_MS = 1000;
const PAUSE_MS = 600;

export default function FlowDiagram({ className = "" }) {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const animRef = useRef(null);

  const buildPaths = useCallback(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    if (!container || !svg) return;

    const rect = container.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);

    const triggerEl = container.querySelector(".fd__trigger");
    const targetEls = container.querySelectorAll(".fd__target");
    if (!triggerEl || !targetEls.length) return;

    const triggerRect = triggerEl.getBoundingClientRect();
    const startX = triggerRect.right - rect.left;
    const startY = triggerRect.top + triggerRect.height / 2 - rect.top;

    const pathEls = svg.querySelectorAll(".fd__line");

    targetEls.forEach((target, i) => {
      const targetRect = target.getBoundingClientRect();
      const endX = targetRect.left - rect.left;
      const endY = targetRect.top + targetRect.height / 2 - rect.top;
      const cpOffset = (endX - startX) * 0.5;
      const d = `M ${startX} ${startY} C ${startX + cpOffset} ${startY}, ${endX - cpOffset} ${endY}, ${endX} ${endY}`;
      if (pathEls[i]) pathEls[i].setAttribute("d", d);
    });
  }, []);

  useEffect(() => {
    buildPaths();
    const t = setTimeout(buildPaths, 100);
    window.addEventListener("resize", buildPaths);

    const startAnimation = () => {
      const svg = svgRef.current;
      if (!svg) return;

      const pathEls = svg.querySelectorAll(".fd__line");
      const singleDot = svg.querySelector(".fd__single-dot");
      const splitDots = svg.querySelectorAll(".fd__split-dot");
      if (!pathEls.length || !singleDot || !splitDots.length) return;

      const lengths = Array.from(pathEls).map((p) => p.getTotalLength());
      const midIdx = Math.floor(pathEls.length / 2);
      const midPath = pathEls[midIdx];
      const midLen = lengths[midIdx];

      let start = null;
      const totalCycle = PHASE1_MS + PHASE2_MS + PAUSE_MS;

      const tick = (ts) => {
        if (!start) start = ts;
        const elapsed = (ts - start) % totalCycle;

        if (elapsed < PHASE1_MS) {
          const progress = elapsed / PHASE1_MS;
          const pt = midPath.getPointAtLength(progress * SPLIT_RATIO * midLen);
          singleDot.setAttribute("cx", pt.x);
          singleDot.setAttribute("cy", pt.y);
          singleDot.setAttribute("opacity", "1");
          splitDots.forEach((d) => d.setAttribute("opacity", "0"));
        } else if (elapsed < PHASE1_MS + PHASE2_MS) {
          singleDot.setAttribute("opacity", "0");
          const progress = (elapsed - PHASE1_MS) / PHASE2_MS;
          const ratio = SPLIT_RATIO + progress * (1 - SPLIT_RATIO);
          pathEls.forEach((p, i) => {
            const pt = p.getPointAtLength(ratio * lengths[i]);
            splitDots[i].setAttribute("cx", pt.x);
            splitDots[i].setAttribute("cy", pt.y);
            splitDots[i].setAttribute("opacity", "1");
          });
        } else {
          singleDot.setAttribute("opacity", "0");
          splitDots.forEach((d) => d.setAttribute("opacity", "0"));
        }

        animRef.current = requestAnimationFrame(tick);
      };

      animRef.current = requestAnimationFrame(tick);
    };

    const animTimer = setTimeout(startAnimation, 200);

    return () => {
      clearTimeout(t);
      clearTimeout(animTimer);
      window.removeEventListener("resize", buildPaths);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [buildPaths]);

  return (
    <div className={`fd ${className}`} ref={containerRef}>
      <div className="fd__grid-bg" />

      <svg ref={svgRef} className="fd__svg" preserveAspectRatio="none">
        {TARGETS.map((_, i) => (
          <path key={i} className="fd__line" fill="none" stroke="#e8dcc4" strokeWidth="1.5" />
        ))}

        <circle className="fd__single-dot" r="3" fill="var(--color-primary, #e6b026)" opacity="0" />

        {TARGETS.map((_, i) => (
          <circle key={i} className="fd__split-dot" r="3" fill="var(--color-primary, #e6b026)" opacity="0" />
        ))}
      </svg>

      <div className="fd__trigger">
        <div className="fd__node-text">
          <span className="fd__node-title">{TRIGGER.title}</span>
          <span className="fd__node-sub">{TRIGGER.subtitle}</span>
        </div>
      </div>

      <div className="fd__targets">
        {TARGETS.map((t, i) => (
          <div key={i} className="fd__target" style={{ animationDelay: `${0.5 + i * 0.2}s` }}>
            <div className="fd__node-text">
              <span className="fd__node-title">{t.title}</span>
              <span className="fd__node-sub">{t.subtitle}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
