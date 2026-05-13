"use client";

import {
  getBackToHubDetails,
  getBreadcrumbItems,
  getRelatedAssets,
  getTokenizedLabel,
} from "../../lib/internal-linking";
import "./TokenizedGoldWhatWeDo.css";
import "./InternalLinkingBlocks.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function AssetBreadcrumbs({ commodityName }) {
  const items = getBreadcrumbItems(commodityName);
  if (!items.length) return null;

  return (
    <nav className="asset-links-breadcrumbs" aria-label="Breadcrumb">
      <ol className="asset-links-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="asset-links-breadcrumbs__item">
              {item.href && !isLast ? (
                <a href={item.href} className="asset-links-breadcrumbs__link">
                  {item.label}
                </a>
              ) : (
                <span className="asset-links-breadcrumbs__current">{item.label}</span>
              )}
              {!isLast ? <span className="asset-links-breadcrumbs__sep" aria-hidden="true">{" > "}</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function RelatedTokenizedAssets({ commodityName }) {
  const relatedAssets = getRelatedAssets(commodityName);
  if (relatedAssets.length !== 4) return null;

  return (
    <section className="tgwwd asset-related" aria-label="Related tokenized assets">
      <div className="tgwwd__container">
        <div className="tgwwd__line-wrap">
          <div className="tgwwd__tag">
            <span className="tgwwd__dot" aria-hidden="true" />
            <p className="tgwwd__tag-label">Related Assets</p>
          </div>
        </div>
        <h2 className="tgwwd__heading">Related Tokenized Assets</h2>
        <div className="tgwwd__card-list asset-related__grid">
          {relatedAssets.map((asset) => (
            <a key={asset.key} className="tgwwd__card tgwwd__card--link asset-related__card" href={asset.href}>
              <span className="tgwwd__icon" aria-hidden="true">
                <ArrowIcon />
              </span>
              <span className="tgwwd__arrow" aria-hidden="true">
                <ArrowIcon />
              </span>
              <div className="tgwwd__text-wrap">
                <h3 className="tgwwd__title">{getTokenizedLabel(asset)}</h3>
                <p className="tgwwd__body">{asset.descriptor}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BackToHubLink({ commodityName }) {
  const backToHub = getBackToHubDetails(commodityName);
  if (!backToHub?.href) return null;

  return (
    <div className="asset-links-back">
      <a href={backToHub.href} className="asset-links-back__link">
        {backToHub.text}
      </a>
    </div>
  );
}
