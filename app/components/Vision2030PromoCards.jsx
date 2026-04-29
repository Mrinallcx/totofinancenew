"use client";

import Image from "next/image";
import Link from "next/link";
import "./Vision2030PromoCards.css";

const PROMO_CARDS = [
  {
    key: "transform",
    imageSrc:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777282342/toto_finance_vision_page_card_2_mpc2z4.webp",
    title: "Bridging Physical and Digital Markets",
    body:
      "Toto Finance brings physical commodities onto global digital markets with institutional custody and compliance built in. Gold, copper, in-ground reserves, all on-chain.",
    ctaLabel: "Explore Marketplace",
    ctaHref: "https://app.totofinance.co/",
  },
  {
    key: "partner",
    imageSrc:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777282341/toto_finance_vision_page_card_1_mh8ma7.webp",
    title: "A Smarter Way to Own Real Assets",
    body:
      "Tokenized commodities settle instantly, trade around the clock, and give producers and investors direct access, without the friction of traditional markets.",
    ctaLabel: "Get in Touch",
    ctaHref: "/contact-us",
  },
];

export default function Vision2030PromoCards() {
  return (
    <section className="v2030promo" aria-label="Featured">
      <div className="v2030promo__inner">
        <div className="v2030promo__grid">
          {PROMO_CARDS.map((card) => (
            <article key={card.key} className="v2030promo__card">
              <div className="v2030promo__media">
                <Image
                  src={card.imageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 899px) 100vw, 50vw"
                  className="v2030promo__img"
                  priority={false}
                />
              </div>
              <div className="v2030promo__content">
                <h3 className="v2030promo__title">{card.title}</h3>
                <p className="v2030promo__body">{card.body}</p>
                {card.ctaHref.startsWith("http") ? (
                  <a
                    href={card.ctaHref}
                    className="v2030promo__btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {card.ctaLabel}
                  </a>
                ) : (
                  <Link href={card.ctaHref} className="v2030promo__btn">
                    {card.ctaLabel}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
