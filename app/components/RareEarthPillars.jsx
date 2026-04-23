"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./RareEarthPillars.css";

const PILLARS = [
  {
    key: "tokenized-cerium",
    tag: "Tokenized Cerium",
    title: "The Catalyst Metal",
    body: "Catalytic converters, glass polishing, and automotive emission control systems.",
    href: "https://totofinance.co/tokenized-cerium",
  },
  {
    key: "tokenized-dysprosium",
    tag: "Tokenized Dysprosium",
    title: "The EV Magnet Metal",
    body: "High-performance permanent magnets for electric vehicle motors and wind turbines.",
    href: "https://totofinance.co/tokenized-dysprosium",
  },
  {
    key: "tokenized-erbium",
    tag: "Tokenized Erbium",
    title: "The Fiber Optic Element",
    body: "Fiber optic amplifiers, laser technology, and telecommunication infrastructure.",
    href: "https://totofinance.co/tokenized-erbium",
  },
  {
    key: "tokenized-europium",
    tag: "Tokenized Europium",
    title: "The Display Phosphor",
    body: "LED phosphors, display technology, and anti-counterfeiting for banknotes.",
    href: "https://totofinance.co/tokenized-europium",
  },
  {
    key: "tokenized-gadolinium",
    tag: "Tokenized Gadolinium",
    title: "The MRI Element",
    body: "MRI contrast agents, nuclear reactor shielding, and magnetic refrigeration.",
    href: "https://totofinance.co/tokenized-gadolinium",
  },
  {
    key: "tokenized-holmium",
    tag: "Tokenized Holmium",
    title: "The Medical Laser Metal",
    body: "Medical lasers, magnetic flux concentrators, and nuclear control rods.",
    href: "https://totofinance.co/tokenized-holmium",
  },
  {
    key: "tokenized-lanthanum",
    tag: "Tokenized Lanthanum",
    title: "The Hybrid Battery Metal",
    body: "Hybrid vehicle batteries, petroleum refining catalysts, and optical lenses.",
    href: "https://totofinance.co/tokenized-lanthanum",
  },
  {
    key: "tokenized-lutetium",
    tag: "Tokenized Lutetium",
    title: "The Precision Scan Element",
    body: "PET scan detectors, high-density alloys, and geologic precision dating.",
    href: "https://totofinance.co/tokenized-lutetium",
  },
  {
    key: "tokenized-neodymium",
    tag: "Tokenized Neodymium",
    title: "The Permanent Magnet Metal",
    body: "Permanent magnets for electric vehicles, wind turbines, headphones, and hard drives.",
    href: "https://totofinance.co/tokenized-neodymium",
  },
  {
    key: "tokenized-praseodymium",
    tag: "Tokenized Praseodymium",
    title: "The Aerospace Alloy Metal",
    body: "Aircraft engines, welder goggles, and high-strength magnet alloys.",
    href: "https://totofinance.co/tokenized-praseodymium",
  },
  {
    key: "tokenized-promethium",
    tag: "Tokenized Promethium",
    title: "The Nuclear Battery Element",
    body: "Nuclear batteries, luminous paint, and portable X-ray equipment.",
    href: "https://totofinance.co/tokenized-promethium",
  },
  {
    key: "tokenized-samarium",
    tag: "Tokenized Samarium",
    title: "The Aerospace Magnet Metal",
    body: "Samarium cobalt magnets for aerospace, military, and high-temperature applications.",
    href: "https://totofinance.co/tokenized-samarium",
  },
  {
    key: "tokenized-scandium",
    tag: "Tokenized Scandium",
    title: "The Aerospace Lightweight Metal",
    body: "Aerospace aluminum alloys, solid oxide fuel cells, and sports equipment.",
    href: "https://totofinance.co/tokenized-scandium",
  },
  {
    key: "tokenized-terbium",
    tag: "Tokenized Terbium",
    title: "The Green Phosphor Element",
    body: "Green phosphors for displays, solid-state devices, and naval sonar systems.",
    href: "https://totofinance.co/tokenized-terbium",
  },
  {
    key: "tokenized-thulium",
    tag: "Tokenized Thulium",
    title: "The Portable X-Ray Element",
    body: "Portable X-ray devices, surgical lasers, and high-temperature superconductors.",
    href: "https://totofinance.co/tokenized-thulium",
  },
  {
    key: "tokenized-ytterbium",
    tag: "Tokenized Ytterbium",
    title: "The Fiber Laser Element",
    body: "Fiber lasers, atomic clocks, and stainless steel strengthening additives.",
    href: "https://totofinance.co/tokenized-ytterbium",
  },
  {
    key: "tokenized-yttrium",
    tag: "Tokenized Yttrium",
    title: "The LED Lighting Metal",
    body: "LED lighting, jet engine coatings, and microwave communication filters.",
    href: "https://totofinance.co/tokenized-yttrium",
  },
];

export default function RareEarthPillars() {
  const sectionRef = useScrollReveal();

  return (
    <section className="rempillars" aria-label="Tokenized minerals" ref={sectionRef}>
      <div className="rempillars__inner">
        <ul className="rempillars__grid">
          {PILLARS.map((p) => (
            <li key={p.key} className="rempillars__item">
              <a
                href={p.href}
                className="rempillars__card sr-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="rempillars__tag">{p.tag}</span>
                <h5 className="rempillars__title">{p.title}</h5>
                <p className="rempillars__body">{p.body}</p>
                <span className="rempillars__arrow" aria-hidden>
                  <svg viewBox="0 0 256 256" width="20" height="20">
                    <path
                      d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
