"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./TokenizedGoldWhatWeDo.css";

const CARDS = [
  {
    title: "Residential Rentals",
    body: "Luxury apartments, family homes, and countryside retreats handpicked to fit every lifestyle.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21V7.5L8 3h1.8V1h2.4v2H19l2 4.5V21h-6v-6H9v6H3Zm2.4-2.4h1.8v-1.8H5.4v1.8Zm0-4.2h1.8v-1.8H5.4v1.8Zm0-4.2h1.8V8.4H5.4v1.8Zm4.2 8.4h1.8v-1.8H9.6v1.8Zm0-4.2h1.8v-1.8H9.6v1.8Zm0-4.2h1.8V8.4H9.6v1.8Zm4.2 0h1.8V8.4h-1.8v1.8Zm0 4.2h1.8v-1.8h-1.8v1.8Z" />
      </svg>
    ),
  },
  {
    title: "Commercial Spaces",
    body: "Flexible offices, retail units, and corporate spaces in prime UK locations designed to help businesses grow.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 22V6l5-4 5 4v3h10v13H2Zm2.4-2.4h2.4v-2.4H4.4v2.4Zm0-4.8h2.4v-2.4H4.4v2.4Zm0-4.8h2.4V7.6H4.4V10Zm4.8 9.6h10.4v-8.2H9.2v8.2Zm2.4-4.8h2.4v-2.4h-2.4v2.4Zm4.2 0h2.4v-2.4h-2.4v2.4Z" />
      </svg>
    ),
  },
  {
    title: "Property Management",
    body: "Full-service management for landlords and investors, from tenant sourcing to maintenance and rent collection.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 20V9l4.8-4.8h1.2V2h2.4v2.2h8.8L22 9v11H2Zm2.4-2.4h4.8v-4.8h5.6v4.8h4.8V10l-2.2-2.2H6.6L4.4 10v7.6Z" />
      </svg>
    ),
  },
];

export default function TokenizedGoldWhatWeDo({ sectionId = "tokenized-gold-what-we-do" }) {
  const sectionRef = useScrollReveal(0.12);

  return (
    <section className="tgwwd" id={sectionId} ref={sectionRef}>
      <div className="tgwwd__container">
        <div className="tgwwd__line-wrap sr-item" style={{ animationDelay: "0.08s" }}>
          <div className="tgwwd__tag">
            <span className="tgwwd__dot" aria-hidden="true" />
            <p className="tgwwd__tag-label">What we do</p>
          </div>
        </div>

        <div className="tgwwd__card-list">
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className="tgwwd__card sr-item"
              style={{ animationDelay: `${0.14 + i * 0.08}s` }}
            >
              <span className="tgwwd__icon">{card.icon}</span>
              <div className="tgwwd__text-wrap">
                <h3 className="tgwwd__title">{card.title}</h3>
                <p className="tgwwd__body">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
