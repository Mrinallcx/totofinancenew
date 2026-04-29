"use client";

import { useRef, useEffect, useCallback } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./RareEarthSpaces.css";

function IconHotDesk() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="remspaces__svg">
      <path d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85ZM128,216a72.08,72.08,0,0,1-72-72c0-22,8.09-44.79,24.06-67.84l26.37,25.58a8,8,0,0,0,13.09-3l22.27-61.07C164.21,58.08,200,97.91,200,144A72.08,72.08,0,0,1,128,216Z" />
    </svg>
  );
}

function IconDedicatedDesk() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="remspaces__svg">
      <path d="M224,48H32A16,16,0,0,0,16,64V88a16,16,0,0,0,16,16v88a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM208,192H48V104H208ZM224,88H32V64H224V88ZM96,136a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,136Z" />
    </svg>
  );
}

function IconPrivateOffice() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="remspaces__svg">
      <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z" />
    </svg>
  );
}

function IconMeetingRoom() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="remspaces__svg">
      <path d="M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z" />
    </svg>
  );
}

const ICON_MAP = {
  "institutional-structure": IconHotDesk,
  "collateralized-liquidity": IconDedicatedDesk,
  "programmable-compliance": IconPrivateOffice,
  "transparent-supply": IconMeetingRoom,
};

const SPACES = [
  {
    key: "institutional-structure",
    title: "Institutional-Grade Structure",
    body: "Built for serious capital. Legal frameworks, audited custody, and verified reserve documentation, designed to meet institutional due diligence standards.",
  },
  {
    key: "collateralized-liquidity",
    title: "Liquidity Before Extraction",
    body: "Capital, years ahead of production. Tokenize in-ground reserves and unlock financing without waiting for the mining cycle. Tradeable, transferable, and settlement-ready from day one.",
  },
  {
    key: "programmable-compliance",
    title: "Compliance Built In",
    body: "KYC, AML, and jurisdictional rules at the protocol level. Transfer permissions and regulatory controls enforced automatically by the token itself, across every jurisdiction.",
  },
  {
    key: "transparent-supply",
    title: "Mine to Market,",
    body: "On-Chain Full transparency, end to end. From geological verification to custody, financing, and delivery, every step recorded on-chain and verifiable in real time.",
  },
];

const MAX_OFFSETS = [0, 50, 100, 130];

export default function RareEarthSpaces() {
  const sectionRef = useScrollReveal();
  const cardsRef = useRef(null);
  const cardRefs = useRef([]);
  const rafId = useRef(0);

  const update = useCallback(() => {
    const container = cardsRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const vh = window.innerHeight;
    const start = vh * 1.2;
    const end = vh * 0.15;
    let progress = (start - rect.top) / (start - end);
    progress = Math.max(0, Math.min(1, progress));

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const offset = MAX_OFFSETS[i] * (1 - progress);
      el.style.transform = `translateY(${offset}px)`;
    });
  }, []);

  const onScroll = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(update);
  }, [update]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      cardRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transform = "translateY(0)";
      });
      return;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [onScroll, update]);

  return (
    <section className="remspaces" id="spaces" aria-labelledby="remspaces-heading" ref={sectionRef}>
      <div className="remspaces__inner">
        <div className="remspaces__text">
          <div className="remspaces__text-content">
            <h2 id="remspaces-heading" className="remspaces__title">
              <SplitWords text="Critical Minerals, Built for Institutional Capital" startDelay={0.1} stagger={0.04} />
            </h2>
            <p className="remspaces__desc">
              <SplitWords text="Tokenized rare earth reserves with the structure, liquidity, and compliance institutions require." startDelay={0.3} stagger={0.015} />
            </p>
          </div>
          <a
            href="https://app.totofinance.co/"
            className="remspaces__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk to Our Team
          </a>
        </div>

        <ul className="remspaces__cards" ref={cardsRef}>
          {SPACES.map((space, i) => {
            const Icon = ICON_MAP[space.key];
            return (
              <li
                key={space.key}
                className="remspaces__card"
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <div className="remspaces__icon-wrap">
                  <Icon />
                </div>
                <div className="remspaces__card-text">
                  <div className="remspaces__card-header">
                    <h3 className="remspaces__card-title">{space.title}</h3>
                    {space.subtitle ? (
                      <p className="remspaces__card-subtitle">{space.subtitle}</p>
                    ) : null}
                  </div>
                  <p className="remspaces__card-body">{space.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
