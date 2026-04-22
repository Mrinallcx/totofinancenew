"use client";

import Link from "next/link";
import "./RareEarthHero.css";

const TITLE_TEXT = "Your next workspace starts here.";

const DESCRIPTION_WORDS =
  "A flexible coworking space built for freelancers, remote teams, and creative minds. From hot desks to private offices — everything you need to do your best work.".split(
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
          <Link href="/product" className="remhero__btn remhero__btn--primary">
            Explore products
          </Link>
          <Link href="/contact-us" className="remhero__btn remhero__btn--ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
