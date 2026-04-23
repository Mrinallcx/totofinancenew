"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./Vision2030ContentCards.css";

const CARDS = [
  {
    key: "instant-settlement",
    image: "/content-card-1.png",
    title: "Instant Settlement",
    body: "Real-time atomic delivery versus payment for commodities, removing delay and counterparty risk.",
  },
  {
    key: "regulatory-integrity",
    image: "/content-card-2.png",
    title: "Regulatory Integrity",
    body: "Enforceable, jurisdiction-aware compliance frameworks enabling institutional participation globally.",
  },
  {
    key: "programmable-infrastructure",
    image: "/content-card-3.png",
    title: "Programmable Infrastructure",
    body: "Smart contracts automate ownership, settlement, and compliance throughout the asset life cycle.",
  },
  {
    key: "universal-market-access",
    image: "/content-card-1.png",
    title: "Universal Market Access",
    body: "Single infrastructure enabling market access regardless of region or participant type.",
  },
  {
    key: "sustainability-layer",
    image: "/content-card-2.png",
    title: "Sustainability as a Layer",
    body: "Optional inclusion of sustainability factors and environmental attributes without affecting market neutrality.",
  },
  {
    key: "borderless-trading",
    image: "/content-card-3.png",
    title: "Borderless Trading",
    body: "A global marketplace operating 24/7, irrespective of geography, time zones, and existing limitations.",
  },
];

export default function Vision2030ContentCards() {
  const headerRef = useScrollReveal();

  return (
    <section className="v2030cc" aria-labelledby="v2030cc-heading">
      <div className="v2030cc__inner">
        <header className="v2030cc__header" ref={headerRef}>
          <h2 id="v2030cc-heading" className="v2030cc__section-title">
            <SplitWords text="Borderless Commodity Markets, Real Time" startDelay={0.1} stagger={0.04} />
          </h2>
          <p className="v2030cc__section-desc">
            <SplitWords text="Toto Finance will enable a global, always-on commodity market by 2030 where ownership, settlement, and delivery are digital, transparent, and frictionless." startDelay={0.3} stagger={0.015} />
          </p>
        </header>
        <ul className="v2030cc__grid">
          {CARDS.map((card) => (
            <li key={card.key} className="v2030cc__card">
              <div className="v2030cc__media">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 899px) 100vw, 33vw"
                />
              </div>
              <div className="v2030cc__content">
                <div className="v2030cc__heading">
                  <span className="v2030cc__indicator" aria-hidden />
                  <h4 className="v2030cc__title">{card.title}</h4>
                </div>
                <p className="v2030cc__body">{card.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
