import Image from "next/image";
import SpinCube from "./SpinCube";
import FlowDiagram from "./FlowDiagram";
import "./MissionVision.css";

const SECTIONS = [
  {
    tag: "Why Toto Finance",
    heading: (
      <>
        <em>Redefining</em> How Commodities <em>Trade</em>
      </>
    ),
    description:
      "Toto Finance introduces the infrastructure layer for tokenized commodities enabling T+0 settlement, 24/7 global markets, programmable ownership, and on-chain liquidity for assets traditionally constrained by manual processes, intermediaries, and settlement delays.",
    cta: { label: "Meet Our Team", href: "/about" },
    useSpinCube: true,
  },
  {
    tag: "How it works",
    heading: (
      <>
        End-to-End <em>Commodity</em> Tokenization
      </>
    ),
    description:
      "Settle and deliver with Toto Clear atomic delivery-versus-payment for tokenized commodities using stablecoins. Hold, redeem, or re-trade assets with settlement, custody, logistics, and regulatory compliance automated on-chain via oracle infrastructure.",
    cta: { label: "Learn More", href: "/how-it-works" },
    useFlowDiagram: true,
    reverse: true,
  },
];

export default function MissionVision() {
  return (
    <section className="mv">
      {SECTIONS.map((item) => (
        <div
          key={item.tag}
          className={`mv__block ${item.reverse ? "mv__block--reverse" : ""}`}
        >
          <div className="mv__content">
            <div className="mv__top">
              <div className="mv__tag">
                <span className="mv__tag-dot" />
                <span className="mv__tag-text">{item.tag}</span>
              </div>
              <h2 className="mv__heading">{item.heading}</h2>
            </div>
            <p className="mv__desc">{item.description}</p>
            <a href={item.cta.href} className="mv__cta">
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
      ))}
    </section>
  );
}
