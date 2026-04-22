"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./EcosystemCards.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 256 256" width="20" height="20">
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" fill="currentColor" />
    </svg>
  );
}

export default function EcosystemCards({ cards, columns = 3, label = "Ecosystem cards" }) {
  const sectionRef = useScrollReveal();
  const gridClass =
    columns === 2
      ? "ecocards__grid ecocards__grid--2"
      : "ecocards__grid";

  return (
    <section className="ecocards" aria-label={label} ref={sectionRef}>
      <div className="ecocards__inner">
        <ul className={gridClass}>
          {cards.map((c) => (
            <li key={c.key} className="ecocards__card sr-item">
              <div className="ecocards__top">
                <div className="ecocards__icon-wrap">{c.icon}</div>
                <span className="ecocards__tag">{c.tag}</span>
              </div>
              <p className="ecocards__body">{c.body}</p>
              <div className="ecocards__arrow" aria-hidden>
                <ArrowIcon />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
