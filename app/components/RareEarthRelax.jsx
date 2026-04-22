"use client";

import Link from "next/link";
import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./RareEarthRelax.css";

const CARDS = [
  {
    key: "room",
    image: "/relax-room.png",
    label: "Your room",
    cta: "Explore rooms",
    href: "/contact-us",
    hoverText:
      "Your robe and slippers await beside the kingsize bed with its plush, inviting linens. Should you require a grand piano, we have the perfect suite in mind.",
  },
  {
    key: "golf",
    image: "/relax-golf.jpg",
    label: "A round of golf",
    cta: "Take a swing",
    href: "/contact-us",
    hoverText:
      "Walk in Tiger Woods' path at our 18-hole, championship-level golf course, which was the venue for the Robin Hood Tekkers in 2019.",
  },
  {
    key: "spa",
    image: "/relax-spa.png",
    label: "Sensua Spa",
    cta: "Discover Sensua",
    href: "/contact-us",
    hoverText:
      "And exhale… the jacuzi perpetually ready, the 22-meter pool boasts black mosaic tiles, and our exclusive Sensua therapies remain unparalleled.",
  },
  {
    key: "room-2",
    image: "/relax-room.png",
    label: "Your room",
    cta: "Explore rooms",
    href: "/contact-us",
    hoverText:
      "Your robe and slippers await beside the kingsize bed with its plush, inviting linens. Should you require a grand piano, we have the perfect suite in mind.",
  },
  {
    key: "golf-2",
    image: "/relax-golf.jpg",
    label: "A round of golf",
    cta: "Take a swing",
    href: "/contact-us",
    hoverText:
      "Walk in Tiger Woods' path at our 18-hole, championship-level golf course, which was the venue for the Robin Hood Tekkers in 2019.",
  },
  {
    key: "spa-2",
    image: "/relax-spa.png",
    label: "Sensua Spa",
    cta: "Discover Sensua",
    href: "/contact-us",
    hoverText:
      "And exhale… the jacuzi perpetually ready, the 22-meter pool boasts black mosaic tiles, and our exclusive Sensua therapies remain unparalleled.",
  },
];

export default function RareEarthRelax() {
  const headerRef = useScrollReveal();

  return (
    <section className="remrelax" aria-labelledby="remrelax-heading">
      <div className="remrelax__inner">
        <header className="remrelax__header" ref={headerRef}>
          <h3 id="remrelax-heading" className="remrelax__title">
            <SplitWords text="Relaxation awaits you" startDelay={0.1} stagger={0.04} />
          </h3>
          <p className="remrelax__desc">
            <SplitWords
              text="Rooms open onto a vista of greenery. Generous light from the riverfront seeps in through expansive picturesque windows and spacious patios, crafting the perfect location for recreation."
              startDelay={0.3}
              stagger={0.012}
            />
          </p>
        </header>

        <div className="remrelax__cards">
          {CARDS.map((card) => (
            <Link key={card.key} href={card.href} className="remrelax__card">
              <figure className="remrelax__figure">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  sizes="(max-width: 899px) 100vw, 33vw"
                  className="remrelax__img"
                />
                <div className="remrelax__hover-overlay" aria-hidden />
                <p className="remrelax__hover-text">{card.hoverText}</p>
              </figure>

              <div className="remrelax__label">
                <span className="remrelax__label-text">{card.label}</span>
              </div>

              <div className="remrelax__action">
                <span className="remrelax__cta-text">{card.cta}</span>
                <svg className="remrelax__arrow" viewBox="0 0 256 256" width="16" height="16">
                  <path
                    d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
