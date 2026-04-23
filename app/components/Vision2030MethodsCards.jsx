"use client";

import "./Vision2030MethodsCards.css";

const CARDS = [
  {
    key: "data",
    tag: "Data Driven",
    title: "We base every decision on verifiable on-chain data and reserves",
    body:
      "Toto Finance uses proof of reserves, oracle validation, and independent audits to ensure every tokenized asset is fully backed and transparently reported.",
  },
  {
    key: "hands",
    tag: "Hands On",
    title: "We work directly with producers, custodians, and institutions",
    body:
      "We collaborate with physical commodity owners, vaults, and regulators to ensure the infrastructure is practical, compliant, and ready for real world use.",
  },
  {
    key: "future",
    tag: "Future Focused",
    title: "We help organizations access the next generation of commodity markets",
    body:
      "We design infrastructure that adapts to evolving regulation and market structures while enabling institutions to tokenize, settle, and trade at global scale.",
  },
];

function IconData({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      role="presentation"
      {...props}
    >
      <path
        d="M4 20V10M10 20V4M16 20v-6M22 20V8"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHands({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      role="presentation"
      {...props}
    >
      <path
        d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFuture({ className, ...props }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      role="presentation"
      {...props}
    >
      <path
        d="M23 6l-9.5 9.5-5-5L1 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 6h6v6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const ICONS = { data: IconData, hands: IconHands, future: IconFuture };

export default function Vision2030MethodsCards() {
  return (
    <section className="v2030mc" aria-label="Our methods">
      <div className="v2030mc__inner">
        <ul className="v2030mc__grid">
          {CARDS.map((card) => {
            const Icon = ICONS[card.key];
            return (
              <li key={card.key} className="v2030mc__card">
                {Icon ? (
                  <Icon className="v2030mc__icon" aria-hidden />
                ) : null}
                <div className="v2030mc__content">
                  <div className="v2030mc__pill">{card.tag}</div>
                  <h3 className="v2030mc__card-title">{card.title}</h3>
                  <p className="v2030mc__card-body">{card.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
