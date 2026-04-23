"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import "./EcosystemCaseStudies.css";

const CASES = [
  {
    key: "cardano",
    image: "/case-pluto.png",
    alt: "Cardano",
    brand: "/brand-pluto.png",
    year: "2023",
    name: "Cardano",
    category: "Blockchain",
    body: "Research-oriented blockchain providing secure and sustainable infrastructure for regulated, long-term digital asset issuance and settlement.",
    href: "https://cardano.org/",
  },
  {
    key: "lcx",
    image: "/case-vitahealth.png",
    alt: "LCX",
    brand: "/brand-vitahealth.png",
    year: "2023",
    name: "LCX",
    category: "Physical Validator",
    body: "Internationally respected Physical Validator under the Liechtenstein Blockchain Act, providing legally binding connection between physical assets and blockchain tokens.",
    href: "https://exchange.lcx.com/",
  },
  {
    key: "gia",
    image: "/case-boxmedia.png",
    alt: "GIA",
    brand: "/brand-boxmedia.png",
    year: "2023",
    name: "GIA",
    category: "Certification",
    body: "World's most trusted diamond grading and certification authority, ensuring standardized and verifiable origin and quality for tokenized diamonds.",
    href: "https://www.gia.edu/",
  },
  {
    key: "hacken",
    image: "/case-novatech.png",
    alt: "Hacken",
    brand: "/brand-novatech.png",
    year: "2023",
    name: "Hacken",
    category: "Security",
    body: "Specialized cybersecurity provider for smart contract audits, infrastructure security analysis, and ongoing risk monitoring on blockchain networks.",
    href: "https://hacken.io/audits/toto-finance/",
  },
];

export default function EcosystemCaseStudies({
  heading = "Our Ecosystem Partners",
  description = "Toto Finance connects blockchains, validators, auditors, and liquidity protocols to tokenize, trade, and settle real world assets compliantly.",
  cases = CASES,
  ctaLabel = "Read more",
  ctaHref = "#",
  showCta = true,
}) {
  const sectionRef = useScrollReveal();

  return (
    <section className="ecocase" aria-labelledby="ecocase-heading" ref={sectionRef}>
      <div className="ecocase__inner">
        <header className="ecocase__header sr-item">
          <h2 className="ecocase__title" id="ecocase-heading">{heading}</h2>
          {description ? (
            <p className="ecocase__desc">{description}</p>
          ) : null}
        </header>

        <div className="ecocase__grid">
          {cases.map((c) => (
            <a
              key={c.key}
              className="ecocase__card sr-item"
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="ecocase__image-area">
                <div className="ecocase__thumb">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1200px) calc((min(100vw,1200px) - 184px) / 2), (min-width: 810px) calc((min(100vw,1200px) - 152px) / 2), calc(100vw - 64px)"
                    className="ecocase__img"
                  />
                </div>
                <div className="ecocase__brand-row">
                  <div className="ecocase__brand">
                    <Image
                      src={c.brand}
                      alt=""
                      width={250}
                      height={55}
                      className="ecocase__brand-img"
                    />
                  </div>
                  <span className="ecocase__year">{c.year}</span>
                </div>
              </div>
              <div className="ecocase__content">
                {c.category ? (
                  <span className="ecocase__category">{c.category}</span>
                ) : null}
                <h5 className="ecocase__name">{c.name}</h5>
                <p className="ecocase__body">{c.body}</p>
              </div>
            </a>
          ))}
        </div>

        {showCta && ctaHref ? (
          <div className="ecocase__cta-wrap sr-item">
            <a
              href={ctaHref}
              className="ecocase__cta"
              {...(ctaHref.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {ctaLabel}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
