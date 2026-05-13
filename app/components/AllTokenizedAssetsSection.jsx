"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import { getGroupedAssetsForHub, getTokenizedLabel } from "../../lib/internal-linking";
import "./TokenizedGoldWhatWeDo.css";
import "./AllTokenizedAssetsSection.css";

function CardArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function AllTokenizedAssetsSection() {
  const sectionRef = useScrollReveal(0.12);
  const groups = getGroupedAssetsForHub();

  return (
    <section className="tgwwd assethub" id="products-all-tokenized-assets" ref={sectionRef}>
      <div className="tgwwd__container">
        <div className="tgwwd__line-wrap sr-item" style={{ animationDelay: "0.08s" }}>
          <div className="tgwwd__tag">
            <span className="tgwwd__dot" aria-hidden="true" />
            <p className="tgwwd__tag-label">All Tokenized Assets</p>
          </div>
        </div>
        <h2 className="tgwwd__heading sr-item" style={{ animationDelay: "0.12s" }}>
          Explore Every Tokenized Asset in One Place
        </h2>

        <div className="assethub__groups">
          {groups.map((group, groupIndex) => (
            <div key={group.heading} className="assethub__group sr-item" style={{ animationDelay: `${0.14 + groupIndex * 0.06}s` }}>
              <h3 className="assethub__group-title">{group.heading}</h3>
              <div className="tgwwd__card-list assethub__card-list">
                {group.assets.map((asset) => (
                  <a key={asset.key} className="tgwwd__card tgwwd__card--link assethub__card" href={asset.href}>
                    <span className="tgwwd__icon" aria-hidden="true">
                      <CardArrowIcon />
                    </span>
                    <span className="tgwwd__arrow" aria-hidden="true">
                      <CardArrowIcon />
                    </span>
                    <div className="tgwwd__text-wrap">
                      <h4 className="tgwwd__title">{getTokenizedLabel(asset)}</h4>
                      <p className="tgwwd__body">{asset.descriptor}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
