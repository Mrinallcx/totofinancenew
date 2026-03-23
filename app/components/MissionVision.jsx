"use client";

import Image from "next/image";
import SpinCube from "./SpinCube";
import FlowDiagram from "./FlowDiagram";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./MissionVision.css";

function SplitHeading({ parts, startDelay = 0.1, stagger = 0.05 }) {
  let wordIndex = 0;
  return parts.map((part, pi) => {
    const words = part.text.split(" ").filter(Boolean);
    const spans = words.map((word) => {
      const delay = startDelay + wordIndex * stagger;
      wordIndex++;
      return (
        <span key={`${pi}-${wordIndex}`} className="sr-word" style={{ animationDelay: `${delay}s` }}>
          {word}
        </span>
      );
    });
    return part.em ? <em key={pi}>{spans}</em> : <span key={pi}>{spans}</span>;
  });
}

const SECTIONS = [
  {
    tag: "Why Toto Finance",
    headingParts: [
      { text: "Redefining ", em: true },
      { text: "How Commodities " },
      { text: "Trade", em: true },
    ],
    description:
      "Toto Finance introduces the infrastructure layer for tokenized commodities enabling T+0 settlement, 24/7 global markets, programmable ownership, and on-chain liquidity for assets traditionally constrained by manual processes, intermediaries, and settlement delays.",
    cta: { label: "Meet Our Team", href: "/about" },
    useSpinCube: true,
  },
  {
    tag: "How it works",
    headingParts: [
      { text: "End-to-End " },
      { text: "Commodity ", em: true },
      { text: "Tokenization" },
    ],
    description:
      "Settle and deliver with Toto Clear atomic delivery-versus-payment for tokenized commodities using stablecoins. Hold, redeem, or re-trade assets with settlement, custody, logistics, and regulatory compliance automated on-chain via oracle infrastructure.",
    cta: { label: "Learn More", href: "/how-it-works" },
    useFlowDiagram: true,
    reverse: true,
  },
];

function MvBlock({ item }) {
  const blockRef = useScrollReveal();

  return (
    <div
      ref={blockRef}
      className={`mv__block ${item.reverse ? "mv__block--reverse" : ""}`}
    >
      <div className="mv__content">
        <div className="mv__top">
          <div className="mv__tag sr-item" style={{ animationDelay: "0s" }}>
            <span className="mv__tag-dot" />
            <span className="mv__tag-text">{item.tag}</span>
          </div>
          <h2 className="mv__heading">
            <SplitHeading parts={item.headingParts} />
          </h2>
        </div>
        <p className="mv__desc">
          <SplitWords text={item.description} startDelay={0.5} stagger={0.015} />
        </p>
        <a href={item.cta.href} className="mv__cta sr-item" style={{ animationDelay: "0.9s" }}>
              <span>{item.cta.label}</span>
              <span className="mv__cta-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </span>
            </a>
      </div>
      <div className="mv__image-wrap">
        {item.useSpinCube ? (
          <SpinCube />
        ) : item.useFlowDiagram ? (
          <FlowDiagram />
        ) : (
          <Image src={item.image} alt={item.imageAlt} className="mv__image" width={960} height={820} loading="lazy" />
        )}
      </div>
    </div>
  );
}

export default function MissionVision() {
  return (
    <section className="mv">
      {SECTIONS.map((item) => (
        <MvBlock key={item.tag} item={item} />
      ))}
    </section>
  );
}
