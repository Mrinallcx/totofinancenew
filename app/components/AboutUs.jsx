"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./AboutUs.css";

const STATS = [
  {
    value: "92%",
    desc: "Of clients report measurable performance improvements within year.",
  },
  {
    value: "$50M",
    desc: "In revenue growth generated across client portfolios in the last 3 years.",
  },
  {
    value: "100+",
    desc: "Businesses advised across industries from tech startups to established enterprises.",
  },
  {
    value: "15+",
    desc: "Years of combined expertise guiding business strategy and execution.",
  },
];

const HEADING_PARTS = [
  { text: "Toto Finance " },
  { text: "tokenizes ", em: true },
  { text: "diamonds and " },
  { text: "global commodities", em: true },
  { text: ", unlocking transparent, " },
  { text: "compliant access ", em: true },
  { text: "to physical assets and " },
  { text: "inground reserves", em: true },
  { text: "." },
];

function SplitHeading({ parts, startDelay = 0.1, stagger = 0.05 }) {
  let wordIndex = 0;
  return parts.map((part, pi) => {
    const words = part.text.split(" ").filter(Boolean);
    const spans = words.map((word) => {
      const delay = startDelay + wordIndex * stagger;
      wordIndex++;
      return (
        <span key={`${pi}-${wordIndex}`} className="sr-word" style={{ animationDelay: `${delay}s` }}>
          {word}
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
