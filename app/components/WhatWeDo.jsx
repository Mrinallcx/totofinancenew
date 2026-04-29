"use client";

import Image from "next/image";
import Globe from "./Globe";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./WhatWeDo.css";

const STATS = [
  { value: "45K+", label: "Assets Live" },
  { value: "5+", label: "Blockchains Supported" },
  { value: "$35T", label: "Global Commodity Trade (Annual)" },
  { value: "$16T", label: "Projected Tokenized Assets Market" },
  { value: "<0.1%", label: "Assets Tokenized Today" },
  { value: "24/7", label: "Trading" },
  { value: "T+0", label: "Settlement" },
];

const HEADING_TEXT = "Building the infrastructure layer for tokenized global commodities.";

export default function WhatWeDo() {
  const sectionRef = useScrollReveal();

  return (
    <section className="wwd" id="overview" ref={sectionRef}>
      <div className="wwd__container">
        <div className="wwd__top">
          <div className="wwd__left">
            <div className="wwd__label sr-item" style={{ animationDelay: "0s" }}>
              <span className="wwd__dot" />
              <span className="wwd__label-text">What we do</span>
              <span className="wwd__dot" />
            </div>

            <h2 className="wwd__heading">
              <SplitWords text={HEADING_TEXT} />
            </h2>

            <a href="/about-us" className="wwd__cta sr-item" style={{ animationDelay: "0.8s" }}>
              <span>About Us</span>
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

          <div className="wwd__right">
            <Globe
              baseColor="#e6b026"
              markerColor="#d4a020"
              glowColor="#f5e0a0"
              dark={0}
              scale={1.1}
              mapBrightness={8}
            />
          </div>
        </div>

        <div className="wwd__map">
          <Image
            src="https://framerusercontent.com/images/H9uRg9OcPpfpk6YCqCbyyTkAN14.png"
            alt="World map"
            className="wwd__map-img"
            width={1300}
            height={600}
            loading="lazy"
          />
        </div>

        <div className="wwd__stats-marquee">
          <div className="wwd__stats-track">
            {[...STATS, ...STATS].map((stat, i) => (
              <div key={i} className="wwd__stat">
                <div className="wwd__stat-value">{stat.value}</div>
                <div className="wwd__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
