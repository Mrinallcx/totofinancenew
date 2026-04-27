"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./RareEarthRelax.css";

const CARDS = [
  {
    key: "asset-coverage",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777286561/Asset_coverage_h4bt00.png",
    label: "Asset Coverage",
    cta: "Explore Marketplace",
    href: "https://app.totofinance.co/",
    hoverText:
      "Tokenization of proven in-ground reserves, above-ground inventories, or offtake rights by asset type, stage, and geography.",
  },
  {
    key: "full-traceability",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777286752/Full_Tracebility_t75ftj.png",
    label: "Full Traceability",
    cta: "Explore Marketplace",
    href: "https://app.totofinance.co/",
    hoverText:
      "Chain linking of geological assessments, assay data, provenance, and audited custody from source to market.",
  },
  {
    key: "liquid-markets",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777287022/Liquid_Market_sar9z0.png",
    label: "Liquid Markets",
    cta: "Explore Marketplace",
    href: "https://app.totofinance.co/",
    hoverText:
      "Primary market issuance with secondary market trading between qualified counterparties, governed by regulatory requirements.",
  },
  {
    key: "programmable-compliance",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777287060/Programmable_compliance_ungm0l.png",
    label: "Programmable Compliance",
    cta: "Explore Marketplace",
    href: "https://app.totofinance.co/",
    hoverText:
      "KYC, AML, and jurisdiction-specific transfer rules enforced programmatically at the protocol level for every tokenized mineral asset.",
  },
  {
    key: "secure-custody",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777287141/Secure_Custody_xzsacf.png",
    label: "Secure Custody",
    cta: "Explore Marketplace",
    href: "https://app.totofinance.co/",
    hoverText:
      "Third-party insured vault storage with warehouse warrants, independent audits, and legally enforceable asset backing.",
  },
  {
    key: "on-chain-reporting",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777287195/On_chain_reporting_nuq1di.png",
    label: "On-Chain Reporting",
    cta: "Explore Marketplace",
    href: "https://app.totofinance.co/",
    hoverText:
      "On-chain proof of reserves, validation statements, and independent audit reports immutably anchored for complete transparency.",
  },
];

export default function RareEarthRelax() {
  const headerRef = useScrollReveal();

  return (
    <section className="remrelax" aria-labelledby="remrelax-heading">
      <div className="remrelax__inner">
        <header className="remrelax__header" ref={headerRef}>
          <h3 id="remrelax-heading" className="remrelax__title">
            <SplitWords text="Built for Strategic Mineral Resources" startDelay={0.1} stagger={0.04} />
          </h3>
          <p className="remrelax__desc">
            <SplitWords
              text="Toto Finance tokenizes strategic minerals end-to-end from proven reserves and inventories to offtake rights for traceable, asset-backed digital ownership from mine to market."
              startDelay={0.3}
              stagger={0.012}
            />
          </p>
        </header>

        <div className="remrelax__cards">
          {CARDS.map((card) => (
            <a
              key={card.key}
              href={card.href}
              className="remrelax__card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure className="remrelax__figure">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 899px) 100vw, 33vw"
                  className="remrelax__img"
                />
                <div className="remrelax__hover-overlay" aria-hidden />
                <p className="remrelax__hover-text">{card.hoverText}</p>
              </figure>

              <div className="remrelax__label">
                <span className="remrelax__label-text">{card.label}</span>
              </div>

              <div className="remrelax__action">
                <span className="remrelax__cta-text">{card.cta}</span>
                <svg className="remrelax__arrow" viewBox="0 0 256 256" width="16" height="16">
                  <path
                    d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
