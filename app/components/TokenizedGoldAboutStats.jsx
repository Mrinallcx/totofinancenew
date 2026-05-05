"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./TokenizedGoldAboutStats.css";

const DEFAULT_COUNTERS = [
  { value: "$13T", suffix: "+", label: "Global Gold Market Size" },
  { value: "1:1", suffix: "", label: "Physical Gold Backing" },
];

export default function TokenizedGoldAboutStats({
  sectionId = "tokenized-gold-highlights",
  statement = "Gold has preserved wealth across generations, trusted by central banks, institutions, and investors as a foundation of long term financial security.",
  statsRowLabel = "PROVEN ASSET CLASS",
  counters = DEFAULT_COUNTERS,
  imageSrc = "https://framerusercontent.com/images/jOJvyX3KRy16klinmUYOQpPK9c.png?width=1600&height=1204",
  imageAlt = "Modern property development exterior",
}) {
  const sectionRef = useScrollReveal(0.1);

  return (
    <section className="tgas" id={sectionId} ref={sectionRef}>
      <div className="tgas__container">
        <div className="tgas__top">
          <div className="tgas__text-wrap">
            <p className="tgas__text sr-item" style={{ animationDelay: "0.1s" }}>
              {statement}
            </p>
          </div>

          <div className="tgas__image-wrap sr-item" style={{ animationDelay: "0.18s" }}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="tgas__image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="tgas__bottom">
          <div className="tgas__tag-wrap sr-item" style={{ animationDelay: "0.24s" }}>
            <span className="tgas__tag-dot" aria-hidden="true" />
            <p className="tgas__tag-label">{statsRowLabel}</p>
          </div>

          <div className="tgas__counter-list sr-item" style={{ animationDelay: "0.3s" }}>
            {counters.map((counter) => (
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
