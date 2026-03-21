"use client";

import { useEffect, useRef } from "react";
import "./TokenBlockSystem.css";

const OUTER_BLOCKS = [
  { label: "Settlement", icon: "⚡" },
  { label: "Tokenization", icon: "🔗" },
  { label: "Staking", icon: "📈" },
  { label: "Governance", icon: "🏛️" },
  { label: "Fees", icon: "💰" },
  { label: "Access", icon: "🌐" },
];

export default function TokenBlockSystem({ className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const outerBlocks = el.querySelectorAll(".tbs__outer");
    const lines = el.querySelectorAll(".tbs__line");

    const pulse = () => {
      outerBlocks.forEach((block, i) => {
        setTimeout(() => {
          block.classList.remove("tbs__outer--alive");
          void block.offsetWidth;
          block.classList.add("tbs__outer--alive");
        }, 300 + i * 120);
      });

      lines.forEach((line, i) => {
        setTimeout(() => {
          line.classList.remove("tbs__line--active");
          void line.offsetWidth;
          line.classList.add("tbs__line--active");
        }, 200 + i * 120);
      });
    };

    pulse();
    const interval = setInterval(pulse, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`tbs ${className}`} ref={containerRef}>
      <div className="tbs__grid-bg" />

      <svg className="tbs__svg" viewBox="0 0 480 480" preserveAspectRatio="xMidYMid meet">
        {OUTER_BLOCKS.map((_, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const cx = 240;
          const cy = 240;
          const r = 190;
          const x = cx + r * Math.cos(angle);
          const y = cy + r * Math.sin(angle);
          return (
            <line
              key={i}
              className="tbs__line"
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#e8dcc4"
              strokeWidth="1"
            />
          );
        })}
      </svg>

      <div className="tbs__center">
        <div className="tbs__pulse-ring tbs__pulse-ring--1" />
        <div className="tbs__pulse-ring tbs__pulse-ring--2" />
        <div className="tbs__core">
          <span className="tbs__core-label">$TOTO</span>
        </div>
      </div>

      {OUTER_BLOCKS.map((block, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const r = 190;
        const x = r * Math.cos(angle);
        const y = r * Math.sin(angle);
        return (
          <div
            key={i}
            className="tbs__outer"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <span className="tbs__outer-icon">{block.icon}</span>
            <span className="tbs__outer-label">{block.label}</span>
          </div>
        );
      })}
    </div>
  );
}
