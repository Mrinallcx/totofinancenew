"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./CaseStudy.css";
import kycAnimation from "../../public/kyc-scanner.json";
import vaultAnimation from "../../public/secure-vault.json";
import lockAnimation from "../../public/lock-animation.json";
import calyptusAnimation from "../../public/calyptus.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const SLIDES = [
  {
    subtitle: "Compliant",
    heading:
      "Operating within compliant legal frameworks, supported by independent audits, licensed partners, and continuous regulatory oversight.",
    animation: kycAnimation,
    lottieSize: "xsmall",
  },
  {
    subtitle: "Redeemable Assets",
    heading:
      "All tokenized commodities are linked to insured vaults, warehouses, or custody providers, with physical redemption available on demand.",
    animation: vaultAnimation,
    lottieSize: "small",
  },
  {
    subtitle: "Transparent Reserves",
    heading:
      "On-chain proof-of-reserves, oracle verification, and third-party audits ensure continuous 1:1 asset backing.",
    animation: lockAnimation,
    lottieSize: "large",
  },
  {
    subtitle: "Programmable Compliance",
    heading:
      "Smart contracts enforce KYC/AML, transfer permissions, jurisdictional rules, and regulatory controls at protocol level.",
    animation: calyptusAnimation,
    lottieSize: "small",
  },
];

const AUTO_SCROLL_INTERVAL = 5000;

export default function CaseStudy() {
  const [current, setCurrent] = useState(0);
  const slide = SLIDES[current];
  const timerRef = useRef(null);

  const goNext = useCallback(() =>
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1)), []);
  const goPrev = useCallback(() =>
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1)), []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, AUTO_SCROLL_INTERVAL);
  }, [goNext]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handlePrev = () => { goPrev(); resetTimer(); };
  const handleNext = () => { goNext(); resetTimer(); };

  const sectionRef = useScrollReveal();

  return (
    <section className="cstudy" ref={sectionRef}>
      <div className="cstudy__header">
        <div className="cstudy__header-text">
          <h2 className="cstudy__title">
            <SplitWords text="Institutional-Grade Commodity Tokenization" />
          </h2>
          <p className="cstudy__desc">
            <SplitWords
              text="Trust, compliance, and transparency embedded at the protocol level."
              startDelay={0.4}
              stagger={0.03}
            />
          </p>
        </div>
        <a href="https://app.totofinance.co/" className="cstudy__header-cta sr-item" style={{ animationDelay: "0.7s" }}>
          <span>Explore Marketplace</span>
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
      <div className="cstudy__grid">
        {/* Row 1: Details + Image */}
        <div className="cstudy__details">
          <div className="cstudy__details-content">
            <h6 className="cstudy__subtitle">{slide.subtitle}</h6>
            <h4 className="cstudy__heading">{slide.heading}</h4>
          </div>
          <div className="cstudy__nav">
            <button
              className={`cstudy__nav-btn ${current === 0 ? "cstudy__nav-btn--dim" : ""}`}
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
              </svg>
            </button>
            <button
              className="cstudy__nav-btn"
              onClick={handleNext}
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="cstudy__visual">
          <div className="cstudy__image-section">
            {slide.animation && (
              <>
                <Image
                  src="https://framerusercontent.com/images/rJrwsVkOuDGKZdsl23LA9drM.png"
                  alt="Passport"
                  className="cstudy__passport cstudy__passport--left"
                  width={300}
                  height={170}
                  loading="lazy"
                />
                <Lottie
                  key={current}
                  animationData={slide.animation}
                  loop
                  autoplay
                  className={`cstudy__lottie cstudy__lottie--${slide.lottieSize || "small"}`}
                />
                <Image
                  src="https://framerusercontent.com/images/rJrwsVkOuDGKZdsl23LA9drM.png"
                  alt="Passport"
                  className="cstudy__passport cstudy__passport--right"
                  width={300}
                  height={170}
                  loading="lazy"
                />
              </>
            )}
          </div>
          <div className="cstudy__visual-cards">
            <div className="cstudy__stat-card">
              <div className="cstudy__stat-value">
                Real <span className="cstudy__stat-value-sub">Asset</span>
              </div>
              <div className="cstudy__stat-value">
                Real <span className="cstudy__stat-value-sub">compliance</span>
              </div>
              <div className="cstudy__stat-value">
                Real <span className="cstudy__stat-value-sub">time proof.</span>
              </div>
            </div>
            <div className="cstudy__quote-card">
              <p className="cstudy__quote-text">
                &ldquo;Toto Finance is building the institutional grade infrastructure that commodity markets have always needed. Compliant by design, backed by real assets, and built for regulated markets from day one.&rdquo;
              </p>
              <div className="cstudy__client">
                <Image
                  src="https://res.cloudinary.com/dusinlidl/image/upload/v1777032441/monty_z1hq12.jpg"
                  alt="Monty Metzger"
                  className="cstudy__avatar"
                  width={48}
                  height={48}
                  loading="lazy"
                />
                <div className="cstudy__client-info">
                  <span className="cstudy__client-name">Monty Metzger</span>
                  <span className="cstudy__client-role">CEO, Toto Finance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
}
