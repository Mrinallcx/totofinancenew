"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./RareEarthBento.css";

function CompareSlider() {
  const containerRef = useRef(null);
  const clipRef = useRef(null);
  const handleRef = useRef(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(2, Math.min(98, pct));
    if (clipRef.current) clipRef.current.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
    if (handleRef.current) handleRef.current.style.left = `${pct}%`;
  }, []);

  const onPointerDown = useCallback((e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerMove = useCallback((e) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      className="rembento__slider"
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuenow={50}
      tabIndex={0}
    >
      <img src="/compare-before.png" alt="" className="rembento__slider-img" draggable={false} />
      <img
        src="/compare-after.png"
        alt=""
        className="rembento__slider-img rembento__slider-img--after"
        ref={clipRef}
        draggable={false}
      />
      <div className="rembento__slider-handle" ref={handleRef}>
        <div className="rembento__slider-line" />
        <div className="rembento__slider-knob">
          <svg width="24" height="24" viewBox="0 0 56 48" fill="none" aria-hidden>
            <polyline points="20,16 12,24 20,32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="36,16 44,24 36,32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function RareEarthBento() {
  const sectionRef = useScrollReveal();

  return (
    <section className="rembento" aria-label="Impact features" ref={sectionRef}>
      <div className="rembento__inner">
        <div className="rembento__grid">
          <div className="rembento__card rembento__card--text rembento__card--a">
            <h3 className="rembento__card-title">
              <SplitWords text="Verified Impact & Measurable Results" startDelay={0.1} stagger={0.04} />
            </h3>
            <p className="rembento__card-body">
              Access detailed reports that highlight tangible environmental achievements.
            </p>
          </div>

          <div className="rembento__card rembento__card--text rembento__card--b">
            <h3 className="rembento__card-title">
              <SplitWords text="Collaboration Tools for Every Organization" startDelay={0.2} stagger={0.04} />
            </h3>
            <p className="rembento__card-body">
              Plan, track, and share your progress with ease using integrated dashboards.
            </p>
          </div>

          <div className="rembento__card rembento__card--slider rembento__card--c">
            <CompareSlider />
          </div>

          <div className="rembento__card rembento__card--image rembento__card--d">
            <Image
              src="/insights-dashboard.png"
              alt="Data-Backed Environmental Insights"
              fill
              sizes="(max-width: 899px) 100vw, 66vw"
            />
            <div className="rembento__card-overlay">
              <h3 className="rembento__card-title rembento__card-title--light">
                Data-Backed Environmental Insights
              </h3>
              <p className="rembento__card-body rembento__card-body--light">
                Make informed decisions with analytics designed to measure real impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
