"use client";

import Link from "next/link";
import "./EcosystemHero.css";

const DEFAULT_TITLE = "Toto Ecosystem";
const DEFAULT_DESC =
  "Join our network of leading onchain and traditional financial services providers to bring institutional-grade finance to everyone.";


export default function EcosystemHero({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
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
            <Link href="/blog" className="ecohero__link">Read More</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
