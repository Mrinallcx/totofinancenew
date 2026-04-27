"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./ProductsCases.css";

const CASES = [
  {
    title: "Toto Global Markets",
    stats: [
      { value: "30,000+", label: "Assets Live On-Chain" },
      { value: "5+", label: "Blockchains Supported" },
    ],
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777041621/global_marekt_jp5jto.jpg",
    href: "#",
  },
  {
    title: "Tokenized Assets: Institutional Platform",
    stats: [
      { value: "$25T+", label: "Addressable Commodity Market" },
      { value: "7+", label: "Commodity Asset Classes" },
    ],
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777041080/toto_institution_gb9fzg.png",
    href: "#",
  },
];

export default function ProductsCases() {
  const sectionRef = useScrollReveal();

  return (
    <section className="prodcases" id="products-commodities" ref={sectionRef}>
      <div className="prodcases__container">
        <div className="prodcases__header">
          <div className="prodcases__header-left">
            <span className="prodcases__badge sr-item" style={{ animationDelay: "0s" }}>OUR PLATFORM</span>
            <h2 className="prodcases__heading">
              <SplitWords
                text="Institutional grade infrastructure for tokenized global commodities."
                startDelay={0.1}
                stagger={0.025}
              />
            </h2>
          </div>
          <div className="prodcases__header-right">
            <a href="#" className="prodcases__cta">
              <span>See all case studies</span>
              <span className="cta__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="prodcases__grid">
          {CASES.map((caseItem) => (
            <a
              key={caseItem.title}
              href={caseItem.href}
              className="prodcases__card"
            >
              <div className="prodcases__card-left">
                <div className="prodcases__card-top">
                  <h2 className="prodcases__card-title">{caseItem.title}</h2>
                  <div className="prodcases__card-info">
                    {caseItem.stats.map((stat, i) => (
                      <div key={stat.value + i} className="prodcases__stat-row">
                        {i > 0 && <div className="prodcases__stat-divider" />}
                        <div className="prodcases__stat">
                          <span className="prodcases__stat-value">
                            {stat.value}
                          </span>
                          <span className="prodcases__stat-label">
                            {stat.label}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="prodcases__card-action">
                  <span>View case</span>
                </div>
              </div>
              <div className="prodcases__card-right">
                <div className="prodcases__card-image-wrap">
                  <img
                    className="prodcases__card-image"
                    src={caseItem.image}
                    alt={caseItem.title}
                    width={770}
                    height={950}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
