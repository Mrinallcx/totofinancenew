"use client";

import Link from "next/link";
import "./Vision2030Hero.css";

const VISION_HERO_VIDEO_SRC =
  "https://framerusercontent.com/assets/XWnzN2LkYQkgWYrpoQWvJt3VA.mp4";
const VISION_HERO_POSTER =
  "https://framerusercontent.com/images/K6MW1irIjygTSX9sWkGGuGnD0.webp?width=3840&height=2160";

const DESCRIPTION_WORDS =
  "Toto Finance partners with leadership teams to unlock tokenized real-world assets — from metals to energy — with institutional-grade settlement and regulatory clarity. We translate ambition into an actionable roadmap using on-chain infrastructure, transparent custody, and close collaboration with global partners.".split(
    " "
  );

/** Framer stat cards — bullets: true = white, false = rgb(34,38,49) */
const VISION_STAT_CARDS = [
  {
    stat: "32%",
    bullets: [true, false, false, false],
    caption: "average EBITDA growth in 12 months",
  },
  {
    stat: "12",
    bullets: [true, true, false, false],
    caption: "industries served",
  },
  {
    stat: "90%",
    bullets: [true, true, true, false],
    caption: "successful outcomes",
  },
  {
    stat: "40x",
    bullets: [true, true, true, true],
    caption: "increase in KPI achievement rate",
  },
];

export default function Vision2030Hero() {
  return (
    <section className="visionhero" aria-labelledby="visionhero-heading">
      <div className="visionhero__inner">
        <div className="visionhero__headline">
          <h1 id="visionhero-heading" className="visionhero__title">
            {"Empowering companies to grow smarter and faster".split(" ").map((word, i) => (
              <span key={i} className="visionhero__title-word" style={{ animationDelay: `${0.2 + i * 0.06}s` }}>
                {word}
              </span>
            ))}
          </h1>
        </div>

        <div className="visionhero__description-section">
          <div className="visionhero__richtext">
            <p className="visionhero__description">
              {DESCRIPTION_WORDS.map((word, i) => (
                <span key={`w-${i}`} className="visionhero__desc-word" style={{ animationDelay: `${0.7 + i * 0.015}s` }}>
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>

        <div className="visionhero__video-wrap">
          <video
            className="visionhero__video"
            src={VISION_HERO_VIDEO_SRC}
            poster={VISION_HERO_POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Vision 2030 highlight"
          />
        </div>

        <div className="visionhero__stats" role="list">
          {VISION_STAT_CARDS.map((card) => (
            <div key={card.caption} className="visionhero__stat-card" role="listitem">
              <div className="visionhero__stat-top">
                <p className="visionhero__stat-value">{card.stat}</p>
                <div className="visionhero__stat-bullets" aria-hidden>
                  {card.bullets.map((on, i) => (
                    <span
                      key={i}
                      className={
                        on
                          ? "visionhero__stat-bullet visionhero__stat-bullet--on"
                          : "visionhero__stat-bullet"
                      }
                    />
                  ))}
                </div>
              </div>
              <p className="visionhero__stat-caption">{card.caption}</p>
            </div>
          ))}
        </div>

        <div className="visionhero__actions">
          <Link href="/product" className="visionhero__btn visionhero__btn--primary">
            Explore products
          </Link>
          <Link href="/contact-us" className="visionhero__btn visionhero__btn--ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
