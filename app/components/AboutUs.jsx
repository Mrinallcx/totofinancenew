"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./AboutUs.css";

const STATS = [
  {
    value: "45,000+",
    desc: "Verified Diamonds On-Chain",
  },
  {
    value: "5+",
    desc: "Blockchains Supported",
  },
  {
    value: "$25T+",
    desc: "Addressable Commodity Market",
  },
  {
    value: "100%",
    desc: "Asset-Backed & Insured",
  },
];

const HEADING_PARTS = [
  { text: "Toto Finance " },
  { text: "tokenizes ", em: true },
  { text: "global commodities", em: true },
  { text: " unlocking " },
  { text: "compliant access ", em: true },
  { text: "to physical assets and " },
  { text: "in-ground reserves", em: true },
  { text: "." },
];

function SplitHeading({ parts, startDelay = 0.1, stagger = 0.05 }) {
  let wordIndex = 0;
  return parts.map((part, pi) => {
    const words = part.text.split(" ").filter(Boolean);
    const spans = words.map((word, wi) => {
      const delay = startDelay + wordIndex * stagger;
      wordIndex++;
      return (
        <span key={`${pi}-${wi}`}>
          <span className="sr-word" style={{ animationDelay: `${delay}s` }}>
            {word}
          </span>
          {wi < words.length - 1 ? " " : ""}
        </span>
      );
    });
    return part.em ? <em key={pi}>{spans}</em> : <span key={pi}>{spans}</span>;
  });
}

export default function AboutUs() {
  const sectionRef = useScrollReveal();

  return (
    <section className="aboutus" id="about" ref={sectionRef}>
      <div className="aboutus__container">
        <div className="aboutus__content">
          <div className="aboutus__tag sr-item" style={{ animationDelay: "0s" }}>
            <span className="aboutus__tag-dot" />
            <span className="aboutus__tag-text">About us</span>
          </div>
          <h2 className="aboutus__heading">
            <SplitHeading parts={HEADING_PARTS} />
          </h2>
        </div>

        <div className="aboutus__stats">
          {STATS.map((stat) => (
            <div key={stat.value} className="aboutus__stat-card">
              <span className="aboutus__stat-value">{stat.value}</span>
              <p className="aboutus__stat-desc">{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
