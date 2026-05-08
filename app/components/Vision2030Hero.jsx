"use client";

import Link from "next/link";
import "./Vision2030Hero.css";

const VISION_HERO_VIDEO_EMBED =
  "https://player.cloudinary.com/embed/?cloud_name=dusinlidl&public_id=vision%202030%20hero%20section%20page&autoplay=true&muted=true&loop=true&controls=false&playsinline=true";

const DESCRIPTION_WORDS =
  "By 2030, Toto Finance powers how the world tokenizes, trades, and settles physical commodities.".split(
    " "
  );

/** Framer stat cards — bullets: true = white, false = rgb(34,38,49) */
const VISION_STAT_CARDS = [
  {
    stat: "2030",
    bullets: [true, false, false, false],
    caption: "Target Year for Global Infrastructure",
  },
  {
    stat: "$46T+",
    bullets: [true, true, false, false],
    caption: "Combined Market Size",
  },
  {
    stat: "$16T+",
    bullets: [true, true, true, false],
    caption: "Tokenization Market by 2030",
  },
  {
    stat: "24/7",
    bullets: [true, true, true, true],
    caption: "Always-on Settlement",
  },
];

export default function Vision2030Hero() {
  return (
    <section className="visionhero" aria-labelledby="visionhero-heading">
      <div className="visionhero__inner">
        <div className="visionhero__headline">
          <h1 id="visionhero-heading" className="visionhero__title">
            Vision 2030: Infrastructure for the World's Commodities
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
          <iframe
            className="visionhero__video"
            src={VISION_HERO_VIDEO_EMBED}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            title="Vision 2030 highlight"
            style={{ border: "none" }}
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
          <a
            href="https://app.totofinance.co/"
            className="visionhero__btn visionhero__btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Marketplace
          </a>
          <Link href="/contact-us" className="visionhero__btn visionhero__btn--ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
