"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./Vision2030ContentCards.css";

const CARDS = [
  {
    key: "quick-setup",
    image: "/content-card-1.png",
    title: "Quick setup",
    body: "Integrate quickly with minimal setup and existing systems.",
  },
  {
    key: "custom-models",
    image: "/content-card-2.png",
    title: "Custom models",
    body: "Build and deploy models tailored to your investment strategies.",
  },
  {
    key: "trusted-data",
    image: "/content-card-3.png",
    title: "Trusted data",
    body: "Access reliable, validated data across all financial workflows.",
  },
  {
    key: "quick-setup-2",
    image: "/content-card-1.png",
    title: "Quick setup",
    body: "Integrate quickly with minimal setup and existing systems.",
  },
  {
    key: "custom-models-2",
    image: "/content-card-2.png",
    title: "Custom models",
    body: "Build and deploy models tailored to your investment strategies.",
  },
  {
    key: "trusted-data-2",
    image: "/content-card-3.png",
    title: "Trusted data",
    body: "Access reliable, validated data across all financial workflows.",
  },
];

export default function Vision2030ContentCards() {
  const headerRef = useScrollReveal();

  return (
    <section className="v2030cc" aria-labelledby="v2030cc-heading">
      <div className="v2030cc__inner">
        <header className="v2030cc__header" ref={headerRef}>
          <h2 id="v2030cc-heading" className="v2030cc__section-title">
            <SplitWords text="Infrastructure that adapts to your workflow" startDelay={0.1} stagger={0.04} />
          </h2>
          <p className="v2030cc__section-desc">
            <SplitWords text="Configure the platform to your needs, scaling seamlessly from individual tasks to full team operations." startDelay={0.3} stagger={0.015} />
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
