"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./ProductsHero.css";

/** Reuse the same media treatment as the product hero. */
const TOKENIZED_GOLD_HERO_VIDEO_MP4 =
  "https://res.cloudinary.com/dusinlidl/video/upload/q_auto,f_auto/product_page_hero_video_epuhvw.mp4";

function getPluralLabel(commodityName) {
  if (commodityName === "Diamond") return "Diamonds";
  return `${commodityName} Assets`;
}

export default function TokenizedGoldAssetsHero({
  commodityName = "Gold",
  sectionId = "tokenized-gold-overview",
  categoryPath = "gold",
}) {
  const sectionRef = useScrollReveal(0.1);
  const pluralLabel = getPluralLabel(commodityName);

  return (
    <section className="prodhero" id={sectionId} ref={sectionRef}>
      <div className="prodhero__video-wrap">
        <video
          className="prodhero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={TOKENIZED_GOLD_HERO_VIDEO_MP4} type="video/mp4" />
        </video>
        <div className="prodhero__overlay" />
      </div>

      <div className="prodhero__container">
        <div className="prodhero__content">
          <div className="prodhero__left">
            <div className="prodhero__text">
              <h1 className="prodhero__title">
                <SplitWords text={`Tokenized ${pluralLabel}, Built for Global Markets`} startDelay={0.2} stagger={0.06} />
              </h1>
              <p className="prodhero__body">
                <SplitWords
                  text={`${commodityName}-backed digital assets with compliant ownership, transparent reserves, and instant access to global liquidity.`}
                  startDelay={0.7}
                  stagger={0.015}
                />
              </p>
            </div>
            <a
              href="https://app.totofinance.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="prodhero__cta sr-item"
              style={{ animationDelay: "1.1s" }}
            >
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

          <div className="prodhero__right">
            <a href={`https://app.totofinance.co/category/${categoryPath}`} className="prodhero__card">
              <div className="prodhero__card-top">
                <p className="prodhero__card-title">
                  Physical {commodityName}, Fractionalized for the Digital Economy
                </p>
              </div>

              <div className="prodhero__card-middle">
                <div className="prodhero__card-image-wrap">
                  <img
                    className="prodhero__card-image"
                    src="https://res.cloudinary.com/dusinlidl/image/upload/v1777038609/toto_finance_corges.png"
                    alt={`Tokenized ${commodityName.toLowerCase()} and secure reserves`}
                    width={800}
                    height={800}
                  />
                </div>
              </div>

              <div className="prodhero__card-bottom">
                <div className="prodhero__stat">
                  <p className="prodhero__stat-label">
                    {commodityName} Units Tokenized
                  </p>
                  <h2 className="prodhero__stat-value">45K+</h2>
                </div>
                <div className="prodhero__stat-divider" />
                <div className="prodhero__stat">
                  <p className="prodhero__stat-label">
                    Market Access
                  </p>
                  <h2 className="prodhero__stat-value">24/7</h2>
                </div>
              </div>
            </a>
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
