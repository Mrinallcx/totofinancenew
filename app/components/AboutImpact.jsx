"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./AboutImpact.css";

const CARDS = [
  {
    value: "$25T+",
    title: "Global Commodity Market",
    description:
      "The total addressable market for physical commodities including metals, minerals, and energy traded globally each year.",
  },
  {
    value: "$16T+",
    title: "Tokenized Assets by 2030",
    descriptionRich: (
      <>
        The projected value of real world assets expected to be tokenized on
        blockchain infrastructure within this decade.{" "}
        <a
          href="https://reports.weforum.org/docs/WEF_Asset_Tokenization_in_Financial_Markets_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="abtimpact__card-link"
        >
          Read more
        </a>
      </>
    ),
  },
  {
    value: "45,000+",
    title: "Assets Live On-Chain",
    description:
      "Verified commodity assets already tokenized and live on-chain, starting with the world's largest tokenized diamond market.",
  },
  {
    value: "5+",
    title: "Blockchains Supported",
    description:
      "Multi-chain infrastructure supporting leading networks including Cardano & Ethereum.",
  },
];

export default function AboutImpact() {
  const sectionRef = useScrollReveal();

  return (
    <section className="abtimpact" ref={sectionRef}>
      <div className="abtimpact__container">
        <h2 className="abtimpact__heading">
          <SplitWords
            text="Institutional grade infrastructure for compliant tokenization, settlement, and global trading of real-world commodities."
            stagger={0.04}
          />
        </h2>

        <div className="abtimpact__grid">
          {CARDS.map((card) => (
            <div key={card.title} className="abtimpact__card">
              <span className="abtimpact__card-value">{card.value}</span>
              <div className="abtimpact__card-body">
                <h5 className="abtimpact__card-title">{card.title}</h5>
                <p className="abtimpact__card-desc">
                  {card.descriptionRich ?? card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
