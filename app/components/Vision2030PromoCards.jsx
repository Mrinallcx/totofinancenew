"use client";

import Image from "next/image";
import Link from "next/link";
import "./Vision2030PromoCards.css";

const PROMO_CARDS = [
  {
    key: "transform",
    imageSrc:
      "https://framerusercontent.com/images/K3p4vDOZMx9XlZYJBJzTGqsjIts.webp?width=6571&height=4381",
    title: "Transform your business today",
    body:
      "Toto Finance combines strategy, tokenized infrastructure, and disciplined execution to help institutions grow faster and more efficiently. Explore how our approach can unlock new opportunities for your organization.",
    ctaLabel: "Learn More",
    ctaHref: "/about-us#about-process",
  },
  {
    key: "partner",
    imageSrc:
      "https://framerusercontent.com/images/7rykZ1X19HC6ibxzXY7RVL6VQo.webp?width=5760&height=3840",
    title: "Partner with experts you can trust",
    body:
      "Our team works closely with clients to deliver measurable outcomes while maintaining the highest standards of integrity, custody, and confidentiality. Discover the value Toto Finance brings to every engagement.",
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
                <Link href={card.ctaHref} className="v2030promo__btn">
                  {card.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
