"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import "./EcosystemCaseStudies.css";

const CASES = [
  {
    key: "cardano",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777292648/Cardano_cck2t4.png",
    alt: "Cardano",
    name: "Cardano",
    category: "Blockchain",
    body: "Research-oriented blockchain providing secure and sustainable infrastructure for regulated, long-term digital asset issuance and settlement.",
    href: "https://cardano.org/",
  },
  {
    key: "lcx",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777292671/LCX_xjs4uv.png",
    alt: "LCX",
    name: "LCX",
    category: "Physical Validator",
    body: "Internationally respected Physical Validator under the Liechtenstein Blockchain Act, providing legally binding connection between physical assets and blockchain tokens.",
    href: "https://exchange.lcx.com/",
  },
  {
    key: "gia",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777292669/GIA_rhxd48.png",
    alt: "GIA",
    name: "GIA",
    category: "Certification",
    body: "World's most trusted diamond grading and certification authority, ensuring standardized and verifiable origin and quality for tokenized diamonds.",
    href: "https://www.gia.edu/",
  },
  {
    key: "hacken",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777292672/Hacken_d5ybjl.png",
    alt: "Hacken",
    name: "Hacken",
    category: "Security",
    body: "Specialized cybersecurity provider for smart contract audits, infrastructure security analysis, and ongoing risk monitoring on blockchain networks.",
    href: "https://hacken.io/audits/toto-finance/",
  },
  {
    key: "ethereum",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777564461/Ethereum_acumky.png",
    alt: "Ethereum",
    name: "Ethereum",
    category: "Settlement Infrastructure",
    body: "The world's most popular programmable settlement infrastructure for smart contracts, decentralized apps, and extensive global liquidity for tokenized real-world assets.",
    href: "https://ethereum.org/",
  },
  {
    key: "polygon",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777564462/Polygon_ved8lx.png",
    alt: "Polygon",
    name: "Polygon",
    category: "Execution Layer",
    body: "A scalable execution layer complementing Ethereum's settlement infrastructure with lower costs and greater throughput for efficient on-chain commodity settlement.",
    href: "https://polygon.technology/",
  },
  {
    key: "solana",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777564461/Solana_liwfap.png",
    alt: "Solana",
    name: "Solana",
    category: "High-Performance Chain",
    body: "A high-performance blockchain enabling fast execution and scalable transaction processing for real-time digital commodity markets.",
    href: "https://solana.com/",
  },
  {
    key: "xrp-ledger",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777564468/XRP_bk0vit.png",
    alt: "XRP Ledger",
    name: "XRP Ledger",
    category: "Settlement Infrastructure",
    body: "Settlement infrastructure for fast, low-cost value transfer and digital asset trading in the XRP ecosystem.",
    href: "https://xrp.cafe/collection/tiamonds-rwa",
  },
  {
    key: "nmkr",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777564461/NMKR_mo17ni.png",
    alt: "NMKR",
    name: "NMKR",
    category: "Tokenization Infrastructure",
    body: "Compliant institutional tokenization infrastructure on the Cardano blockchain, supporting regulated digital assets with lifecycle management and programmable ownership.",
    href: "https://www.nmkr.io/drops/tiamonds-2023",
  },
  {
    key: "uniswap",
    image:
      "https://res.cloudinary.com/dusinlidl/image/upload/v1777564461/Uniswap_pu49be.png",
    alt: "Uniswap",
    name: "Uniswap",
    category: "Liquidity Protocol",
    body: "Decentralized liquidity protocol providing secondary market access, price discovery, and on-chain settlement for supported tokenized assets.",
    href: "https://app.uniswap.org/explore/pools/ethereum/0x2f65b1737a4cc3c7cc8ddbf969b9427c0f2be9ab19a5b117dcc7c07d2c008498",
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
  const [visibleCount, setVisibleCount] = useState(4);
  const sentinelRef = useRef(null);
  const visibleCases = cases.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(4);
  }, [cases]);

  useEffect(() => {
    if (visibleCount >= cases.length) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (isVisible) {
          setVisibleCount((prev) => Math.min(prev + 2, cases.length));
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visibleCount, cases.length]);

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
          {visibleCases.map((c) => (
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

        {visibleCount < cases.length ? (
          <div ref={sentinelRef} className="ecocase__load-sentinel" aria-hidden />
        ) : null}

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
