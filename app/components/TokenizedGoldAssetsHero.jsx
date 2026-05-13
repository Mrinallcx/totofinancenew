"use client";

import Image from "next/image";
import Script from "next/script";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import { AssetBreadcrumbs } from "./InternalLinkingBlocks";
import "./ProductsHero.css";

/** Shared hero background image for tokenized commodity pages. */
const TOKENIZED_GOLD_HERO_BG_IMAGE =
  "https://res.cloudinary.com/dusinlidl/image/upload/v1777992934/gold_bg_banner_aim76i.webp";

function getPluralLabel(commodityName) {
  if (commodityName === "Diamond") return "Diamonds";
  return `${commodityName} Assets`;
}

export default function TokenizedGoldAssetsHero({
  commodityName = "Gold",
  sectionId = "tokenized-gold-overview",
  categoryPath = "gold",
  heroBgImage = TOKENIZED_GOLD_HERO_BG_IMAGE,
  heroBgFlip = false,
  heroBgColor,
  heroTitle,
  heroSubtext,
  heroReadMoreHref,
  heroReadMoreLabel = "Read More",
  heroCtaHref = "https://app.totofinance.co/",
  ctaLabel = "Explore Marketplace",
  sideCardHeading,
  sideCardHref,
  sideCardOpenInNewTab = false,
  cardMediaType = "image",
  cardMediaSrc = "https://res.cloudinary.com/dusinlidl/image/upload/v1777038609/toto_finance_corges.png",
  cardMediaAlt,
  cardMediaTitle,
  tradingViewSymbol,
  tradingViewLineChartType = "Line",
  tradingViewShowTimeRange = false,
  tradingViewTimeFrame,
  tradingViewShowTimeScale = false,
  unitsTokenizedLabel,
  unitsTokenizedValue = "45K+",
  marketAccessLabel = "Market Access",
  marketAccessValue = "24/7",
}) {
  const sectionRef = useScrollReveal(0.1);
  const pluralLabel = getPluralLabel(commodityName);
  const titleText = heroTitle ?? `Tokenized ${pluralLabel}, Built for Global Markets`;
  const subtext =
    heroSubtext ??
    `${commodityName}-backed digital assets with compliant ownership, transparent reserves, and instant access to global liquidity.`;
  const splitStartDelay = 0.7;
  const splitStagger = 0.015;
  const readMoreDelay =
    splitStartDelay + subtext.split(/\s+/).filter(Boolean).length * splitStagger;
  const cardHeading =
    sideCardHeading ?? `Physical ${commodityName}, Fractionalized for the Digital Economy`;
  const isFlatHero = Boolean(heroBgColor);
  const resolvedSideCardHref =
    sideCardHref === undefined
      ? `https://app.totofinance.co/category/${categoryPath}`
      : sideCardHref;
  const SideCardTag = resolvedSideCardHref ? "a" : "div";
  const sideCardProps = resolvedSideCardHref
    ? {
        href: resolvedSideCardHref,
        target: sideCardOpenInNewTab ? "_blank" : undefined,
        rel: sideCardOpenInNewTab ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <section className={`prodhero${isFlatHero ? " prodhero--flat" : ""}`} id={sectionId} ref={sectionRef}>
      <div className="prodhero__video-wrap" style={isFlatHero ? { backgroundColor: heroBgColor } : undefined}>
        {!isFlatHero ? (
          <img
            className={`prodhero__video${heroBgFlip ? " prodhero__video--flipped" : ""}`}
            src={heroBgImage}
            alt=""
            aria-hidden="true"
          />
        ) : null}
        <div className={`prodhero__overlay${isFlatHero ? " prodhero__overlay--flat" : ""}`} />
      </div>

      <div className="prodhero__container">
        <AssetBreadcrumbs commodityName={commodityName} />
        <div className="prodhero__content">
          <div className="prodhero__left">
            <div className="prodhero__text">
              <h1 className="prodhero__title">{titleText}</h1>
              <p className="prodhero__body">
                <SplitWords
                  text={subtext}
                  startDelay={splitStartDelay}
                  stagger={splitStagger}
                />
                {heroReadMoreHref ? (
                  <>
                    {" "}
                    <a
                      href={heroReadMoreHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="prodhero__readmore sr-word"
                      style={{ animationDelay: `${readMoreDelay}s` }}
                    >
                      {heroReadMoreLabel}
                    </a>
                  </>
                ) : null}
              </p>
            </div>
            <a
              href={heroCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="prodhero__cta sr-item"
              style={{ animationDelay: "1.1s" }}
            >
              <span>{ctaLabel}</span>
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

          <div className="prodhero__right">
            <SideCardTag className="prodhero__card" {...sideCardProps}>
              <div className="prodhero__card-top">
                <p className="prodhero__card-title">
                  {cardHeading}
                </p>
              </div>

              <div className="prodhero__card-middle">
                <div className="prodhero__card-image-wrap">
                  {cardMediaType === "tradingview-mini-chart" ? (
                    <>
                      <Script
                        type="module"
                        src="https://widgets.tradingview-widget.com/w/en/tv-mini-chart.js"
                        strategy="afterInteractive"
                      />
                      <div className="prodhero__tv-widget">
                        <tv-mini-chart
                          symbol={tradingViewSymbol || "TVC:GOLD"}
                          line-chart-type={tradingViewLineChartType}
                          {...(tradingViewShowTimeRange ? { "show-time-range": "" } : {})}
                          {...(tradingViewTimeFrame ? { "time-frame": tradingViewTimeFrame } : {})}
                          {...(tradingViewShowTimeScale ? { "show-time-scale": "" } : {})}
                        />
                      </div>
                    </>
                  ) : cardMediaType === "video" ? (
                    <video
                      className="prodhero__card-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      controls={false}
                      aria-label={cardMediaTitle || `${commodityName} media`}
                    >
                      <source src={cardMediaSrc} type="video/mp4" />
                    </video>
                  ) : cardMediaType === "iframe" ? (
                    <iframe
                      className="prodhero__card-iframe"
                      src={cardMediaSrc}
                      title={cardMediaTitle || `${commodityName} media`}
                      loading="lazy"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  ) : (
                    <Image
                      className="prodhero__card-image"
                      src={cardMediaSrc}
                      alt={cardMediaAlt || `Tokenized ${commodityName.toLowerCase()} and secure reserves`}
                      fill
                      sizes="(max-width: 479px) 90vw, (max-width: 991px) 360px, 400px"
                      priority
                    />
                  )}
                </div>
              </div>

              <div className="prodhero__card-bottom">
                <div className="prodhero__stat">
                  <p className="prodhero__stat-label">
                    {unitsTokenizedLabel ?? `${commodityName} Units Tokenized`}
                  </p>
                  <h2 className="prodhero__stat-value">{unitsTokenizedValue}</h2>
                </div>
                <div className="prodhero__stat-divider" />
                <div className="prodhero__stat">
                  <p className="prodhero__stat-label">
                    {marketAccessLabel}
                  </p>
                  <h2 className="prodhero__stat-value">{marketAccessValue}</h2>
                </div>
              </div>
            </SideCardTag>
            <div className="prodhero__shape prodhero__shape--1" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M18 0C18 9.941 9.941 18 0 18H18V0Z" fill="white" />
              </svg>
            </div>
            <div className="prodhero__shape prodhero__shape--2" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M0 0C0 9.941 8.059 18 18 18H0V0Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
