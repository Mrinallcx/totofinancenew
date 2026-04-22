"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./ServicesGrid.css";

const SERVICES = [
  { name: "Gold", image: "/product card/Gold.webp", href: "/marketplace" },
  { name: "Silver", image: "/product card/Silver.webp", href: "/marketplace" },
  { name: "Platinum", image: "/product card/Platinum.webp", href: "/marketplace" },
  { name: "Diamond", image: "/product card/Diamond.webp", href: "/marketplace" },
  { name: "Sapphire", image: "/product card/Sapphire.webp", href: "/marketplace" },
  { name: "Carbon Credit", image: "/product card/carbon-credit.webp", href: "/marketplace" },
  { name: "Energy", image: "/product card/energy.webp", href: "/marketplace" },
];

function Card({ item }) {
  return (
    <a href={item.href} className="sgrid__card">
      <div className="sgrid__img-wrap">
        <div className="sgrid__img-inner">
          <img
            src={item.image}
            alt={item.name}
            className="sgrid__img"
            draggable="false"
          />
        </div>
      </div>
      <div className="sgrid__info">
        <div className="sgrid__name">{item.name}</div>
      </div>
    </a>
  );
}

export default function ServicesGrid() {
  const sectionRef = useScrollReveal();

  return (
    <section className="sgrid" id="services" ref={sectionRef}>
      <div className="sgrid__header">
        <h2 className="sgrid__title">
          <SplitWords text="Tokenized Commodities, Live on Global Markets" />
        </h2>
        <p className="sgrid__desc">
          <SplitWords
            text="Real-world commodities tokenized for instant settlement, transparent ownership, and compliant global trade."
            startDelay={0.5}
            stagger={0.015}
          />
        </p>
      </div>
      <div className="sgrid__track-wrap">
        <div className="sgrid__track">
          {SERVICES.map((item) => (
            <Card key={item.name} item={item} />
          ))}
          {SERVICES.map((item) => (
            <Card key={`dup-${item.name}`} item={item} />
          ))}
        </div>
      </div>
      <div className="sgrid__footer">
        <a href="/marketplace" className="sgrid__cta">
          <span>Explore Marketplace</span>
          <span className="cta__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
