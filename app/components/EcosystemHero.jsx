"use client";

import "./EcosystemHero.css";

const DEFAULT_TITLE = "Toto Finance Ecosystem";
const DEFAULT_DESC =
  "An integrated worldwide network of blockchains, infrastructure providers, custodians, and data suppliers facilitating compliant, asset-backed tokenization of real world commodities.";

const DEFAULT_READ_MORE_HREF = "https://totofinance.co/blog";

export default function EcosystemHero({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  readMoreHref = DEFAULT_READ_MORE_HREF,
  readMoreLabel = "Read More",
}) {
  return (
    <section className="ecohero" aria-labelledby="ecohero-heading">
      <div className="ecohero__inner">
        <div className="ecohero__content">
          <h1 id="ecohero-heading" className="ecohero__title">
            {title}
          </h1>
          <p className="ecohero__desc">
            {description}{" "}
            {readMoreHref ?
              <a
                href={readMoreHref}
                className="ecohero__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {readMoreLabel}
              </a>
            : null}
          </p>
        </div>
      </div>
    </section>
  );
}
