"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./AboutMission.css";

const STATS = [
  { value: "27", suffix: "%", label: "Clients Satisfaction" },
  { value: "12", suffix: "+", label: "Years Of Experience" },
  { value: "16", suffix: "+", label: "Advanced Members" },
];

function MissionHeading() {
  const parts = [
    { text: "Toto Finance is building the digital infrastructure for tokenized commodities — enabling " },
    { icon: true },
    { text: " asset-backed ownership, instant settlement, and " },
    { icon: true },
    { text: " compliant global trade." },
  ];

  let wordIndex = 0;
  return parts.map((part, pi) => {
    if (part.icon) {
      wordIndex++;
      return (
        <span key={pi} className="abtmission__inline-icon sr-word" style={{ animationDelay: `${0.1 + wordIndex * 0.05}s` }}>
          <img src="/totofinance-dark.svg" alt="" width={48} height={48} />
        </span>
      );
    }
    const words = part.text.split(" ").filter(Boolean);
    return words.map((word) => {
      const delay = 0.1 + wordIndex * 0.05;
      wordIndex++;
      return (
        <span key={`${pi}-${wordIndex}`} className="sr-word" style={{ animationDelay: `${delay}s` }}>
          {word}
        </span>
      );
    });
  });
}

export default function AboutMission() {
  const sectionRef = useScrollReveal();

  return (
    <section className="abtmission" ref={sectionRef}>
      <div className="abtmission__container">
        <h2 className="abtmission__heading">
          <MissionHeading />
        </h2>

        <div className="abtmission__video-wrap">
          <video
            src="https://framerusercontent.com/assets/bk3cwqGy2n0qgkAsWNg2FWGm7jA.mp4"
            loop
            preload="auto"
            muted
            playsInline
            autoPlay
            className="abtmission__video"
          />
        </div>

        <div className="abtmission__stats">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="abtmission__stat">
              <div className="abtmission__stat-value">
                <span>{stat.value}</span>
                <span className="abtmission__stat-suffix">{stat.suffix}</span>
              </div>
              <div className="abtmission__stat-divider" />
              <h6 className="abtmission__stat-label">{stat.label}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
