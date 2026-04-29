"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import developmentAnimation from "../../public/development-lottie.json";
import fileTransferAnimation from "../../public/file-transfer-lottie.json";
import fileSearchAnimation from "../../public/file-search-lottie.json";
import glassmorphingAnimation from "../../public/glassmorphing-lottie.json";
import planeEarthAnimation from "../../public/plane-earth-lottie.json";
import tradingLoaderAnimation from "../../public/trading-loader-lottie.json";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./Vision2030ContentCards.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const CARDS = [
  {
    key: "instant-settlement",
    useAnimation: true,
    animationData: fileTransferAnimation,
    title: "Instant Settlement",
    body: "Real-time atomic delivery versus payment for commodities, removing delay and counterparty risk.",
  },
  {
    key: "regulatory-integrity",
    useAnimation: true,
    animationData: fileSearchAnimation,
    title: "Regulatory Integrity",
    body: "Enforceable, jurisdiction-aware compliance frameworks enabling institutional participation globally.",
  },
  {
    key: "programmable-infrastructure",
    useAnimation: true,
    animationData: developmentAnimation,
    title: "Programmable Infrastructure",
    body: "Smart contracts automate ownership, settlement, and compliance throughout the asset life cycle.",
  },
  {
    key: "universal-market-access",
    useAnimation: true,
    animationData: tradingLoaderAnimation,
    title: "Universal Market Access",
    body: "Single infrastructure enabling market access regardless of region or participant type.",
  },
  {
    key: "sustainability-layer",
    useAnimation: true,
    animationData: glassmorphingAnimation,
    title: "Sustainability as a Layer",
    body: "Optional inclusion of sustainability factors and environmental attributes without affecting market neutrality.",
  },
  {
    key: "borderless-trading",
    useAnimation: true,
    animationData: planeEarthAnimation,
    animationClassName: "v2030cc__lottie--blend",
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
            <SplitWords text="Borderless Markets. Real-Time Settlement." startDelay={0.1} stagger={0.04} />
          </h2>
          <p className="v2030cc__section-desc">
            <SplitWords text="By 2030, Toto Finance powers a global, always-on commodity market where ownership, settlement, and delivery are digital, transparent, and instant." startDelay={0.3} stagger={0.015} />
          </p>
        </header>
        <ul className="v2030cc__grid">
          {CARDS.map((card) => (
            <li key={card.key} className="v2030cc__card">
              <div
                className={`v2030cc__media ${
                  card.useAnimation ? "v2030cc__media--animated" : ""
                }`}
              >
                {card.useAnimation ? (
                  <Lottie
                    animationData={card.animationData}
                    loop
                    autoplay
                    className={`v2030cc__lottie ${card.animationClassName ?? ""}`}
                  />
                ) : (
                  <Image
                    src={card.image}
                    alt=""
                    fill
                    sizes="(max-width: 899px) 100vw, 33vw"
                  />
                )}
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
