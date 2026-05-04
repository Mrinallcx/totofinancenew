"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./TokenizedGoldAboutStats.css";

const COUNTERS = [
  { value: "370", suffix: "+", label: "Residences Across London" },
  { value: "100", suffix: "+", label: "Commercial Spaces Nationwide" },
];

export default function TokenizedGoldAboutStats({ sectionId = "tokenized-gold-highlights" }) {
  const sectionRef = useScrollReveal(0.1);

  return (
    <section className="tgas" id={sectionId} ref={sectionRef}>
      <div className="tgas__container">
        <div className="tgas__top">
          <div className="tgas__text-wrap">
            <p className="tgas__text sr-item" style={{ animationDelay: "0.1s" }}>
              Slateon, we <span className="tgas__badge" aria-hidden="true">🪙</span> redefine real estate through
              luxury, trust, and lifestyle, delivering curated homes and offices with a world-class client
              experience.
            </p>
          </div>

          <div className="tgas__image-wrap sr-item" style={{ animationDelay: "0.18s" }}>
            <img
              src="https://framerusercontent.com/images/jOJvyX3KRy16klinmUYOQpPK9c.png?width=1600&height=1204"
              alt="Modern property development exterior"
              className="tgas__image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="tgas__bottom">
          <div className="tgas__tag-wrap sr-item" style={{ animationDelay: "0.24s" }}>
            <span className="tgas__tag-dot" aria-hidden="true" />
            <p className="tgas__tag-label">Projects Completed</p>
          </div>

          <div className="tgas__counter-list sr-item" style={{ animationDelay: "0.3s" }}>
            {COUNTERS.map((counter) => (
              <article key={counter.label} className="tgas__counter">
                <p className="tgas__counter-value">
                  <span>{counter.value}</span>
                  <span className="tgas__counter-suffix">{counter.suffix}</span>
                </p>
                <div className="tgas__counter-line" aria-hidden="true" />
                <p className="tgas__counter-label">{counter.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
