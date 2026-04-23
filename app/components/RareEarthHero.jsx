"use client";

import "./RareEarthHero.css";

const TITLE_TEXT = "Tokenized Rare Earth Minerals";

const DESCRIPTION_WORDS =
  "Institutional grade access to critical minerals driving AI, energy transition, and global infrastructure, tokenized directly from verified in-ground reserves with compliant ownership, audited custody, and on-chain settlement.".split(
    " "
  );

export default function RareEarthHero() {
  return (
    <section className="remhero" aria-labelledby="remhero-heading">
      <div className="remhero__bg" aria-hidden>
        <img
          className="remhero__bg-img"
          src="/rare-earth-hero.jpg"
          alt=""
          loading="eager"
        />
        <div className="remhero__overlay" />
      </div>

      <div className="remhero__inner">
        <div className="remhero__headline">
          <h1 id="remhero-heading" className="remhero__title">
            {TITLE_TEXT.split(" ").map((word, i) => (
              <span
                key={i}
                className="remhero__title-word"
                style={{ animationDelay: `${0.2 + i * 0.06}s` }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>

        <div className="remhero__description-section">
          <p className="remhero__description">
            {DESCRIPTION_WORDS.map((word, i) => (
              <span
                key={`w-${i}`}
                className="remhero__desc-word"
                style={{ animationDelay: `${0.7 + i * 0.015}s` }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        <div className="remhero__actions">
          <a href="mailto:hello@totofinance.co" className="remhero__btn remhero__btn--primary">
            Contact Us
          </a>
          <a
            href="https://app.totofinance.co/"
            className="remhero__btn remhero__btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Marketplace
          </a>
        </div>
      </div>
    </section>
  );
}
