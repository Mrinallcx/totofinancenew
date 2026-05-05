"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./TokenizedGoldWhatWeDo.css";

const DEFAULT_CARDS = [
  {
    title: "Seamless Portability",
    body: "Easily move your tokenized gold across borders. Your assets flow globally, seamlessly, and securely, just like any cryptocurrency asset.",
    cta: "Learn More",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21V7.5L8 3h1.8V1h2.4v2H19l2 4.5V21h-6v-6H9v6H3Zm2.4-2.4h1.8v-1.8H5.4v1.8Zm0-4.2h1.8v-1.8H5.4v1.8Zm0-4.2h1.8V8.4H5.4v1.8Zm4.2 8.4h1.8v-1.8H9.6v1.8Zm0-4.2h1.8v-1.8H9.6v1.8Zm0-4.2h1.8V8.4H9.6v1.8Zm4.2 0h1.8V8.4h-1.8v1.8Zm0 4.2h1.8v-1.8h-1.8v1.8Z" />
      </svg>
    ),
  },
  {
    title: "24/7 Global Trading",
    body: "Trade tokenized gold instantly, anytime and anywhere globally, free from limitations of time zones or traditional market hours.",
    cta: "Learn More",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 22V6l5-4 5 4v3h10v13H2Zm2.4-2.4h2.4v-2.4H4.4v2.4Zm0-4.8h2.4v-2.4H4.4v2.4Zm0-4.8h2.4V7.6H4.4V10Zm4.8 9.6h10.4v-8.2H9.2v8.2Zm2.4-4.8h2.4v-2.4h-2.4v2.4Zm4.2 0h2.4v-2.4h-2.4v2.4Z" />
      </svg>
    ),
  },
  {
    title: "Instant Redeemability",
    body: "Easily redeem your gold backed tokens anytime, and physical gold will be delivered directly and safely to your doorstep.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 20V9l4.8-4.8h1.2V2h2.4v2.2h8.8L22 9v11H2Zm2.4-2.4h4.8v-4.8h5.6v4.8h4.8V10l-2.2-2.2H6.6L4.4 10v7.6Z" />
      </svg>
    ),
  },
  {
    title: "Secure and Free Storage",
    body: "No more storage worries. Your gold backed assets are securely held on chain, reducing risks and storage costs efficiently.",
    cta: "Learn More",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 1.8 3.6 5.4v5.4c0 5.4 3.6 10.5 8.4 11.4 4.8-.9 8.4-6 8.4-11.4V5.4L12 1.8Zm0 2.6 6 2.6v3.8c0 4.2-2.6 8.4-6 9.2-3.4-.8-6-5-6-9.2V7l6-2.6Zm-1.2 5h2.4v6h-2.4v-6Zm0-2.8h2.4v2h-2.4v-2Z" />
      </svg>
    ),
  },
  {
    title: "Fully Insured",
    body: "Eliminate storage hassles. Assets are safely held like any other crypto.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2 5h20v14H2V5Zm2.4 2.4v9.2h15.2V7.4H4.4ZM7 9h4.8v1.8H7V9Zm0 3h7.4v1.8H7V12Zm10.2 1.6a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
      </svg>
    ),
  },
  {
    title: "Onchain Transparency",
    body: "Easily track and verify your allocated gold anytime using real time blockchain technology and fully transparent auditing and reporting processes.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.4a9.6 9.6 0 1 0 6.8 16.4l1.8 1.8 1.4-1.4-1.8-1.8A9.6 9.6 0 0 0 12 2.4Zm0 2.4a7.2 7.2 0 1 1 0 14.4 7.2 7.2 0 0 1 0-14.4Zm-1.2 2.4h2.4V12l3 1.8-1.2 2-4.2-2.6V7.2Z" />
      </svg>
    ),
  },
];

export default function TokenizedGoldWhatWeDo({
  sectionId = "tokenized-gold-what-we-do",
  overlineLabel = "What we do",
  heading = "Benefits of Tokenized Gold",
  cards = DEFAULT_CARDS,
  defaultCardHref,
}) {
  const sectionRef = useScrollReveal(0.12);
  const resolvedCards = cards.map((card, i) => {
    const fallbackCard = DEFAULT_CARDS[i % DEFAULT_CARDS.length];
    return {
      ...fallbackCard,
      ...card,
      icon: card.icon ?? fallbackCard.icon,
      href: card.href ?? defaultCardHref,
    };
  });

  return (
    <section className="tgwwd" id={sectionId} ref={sectionRef}>
      <div className="tgwwd__container">
        <div className="tgwwd__line-wrap sr-item" style={{ animationDelay: "0.08s" }}>
          <div className="tgwwd__tag">
            <span className="tgwwd__dot" aria-hidden="true" />
            <p className="tgwwd__tag-label">{overlineLabel}</p>
          </div>
        </div>
        <h2 className="tgwwd__heading sr-item" style={{ animationDelay: "0.12s" }}>
          {heading}
        </h2>

        <div className="tgwwd__card-list">
          {resolvedCards.map((card, i) => (
            <a
              key={card.title}
              className={`tgwwd__card tgwwd__card--link sr-item${card.fullWidth ? " tgwwd__card--full" : ""}`}
              style={{ animationDelay: `${0.14 + i * 0.08}s` }}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={card.title}
            >
              <span className="tgwwd__icon">{card.icon}</span>
              <span className="tgwwd__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </span>
              <div className="tgwwd__text-wrap">
                <h3 className="tgwwd__title">{card.title}</h3>
                <p className="tgwwd__body">{card.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
