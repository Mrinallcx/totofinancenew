"use client";

import "./EcosystemHero.css";

const DEFAULT_TITLE = "Toto Finance Ecosystem";
const DEFAULT_DESC =
  "An integrated worldwide network of blockchains, infrastructure providers, custodians, and data suppliers facilitating compliant, asset-backed tokenization of real world commodities.";

const DEFAULT_READ_MORE_HREF = "https://totofinance.co/blog";
const PILL_STACK_COUNT = 7;
const PILL_HEIGHTS = [20, 40, 60, 80];

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
        <div className="ecohero__pill-grid" aria-hidden="true">
          {Array.from({ length: PILL_STACK_COUNT }).map((_, stackIndex) => (
            <div key={`pill-stack-${stackIndex}`} className="ecohero__pill-stack">
              {PILL_HEIGHTS.map((height, barIndex) => (
                <span
                  key={`pill-${stackIndex}-${barIndex}`}
                  className={`ecohero__pill ecohero__pill--${barIndex + 1}`}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
