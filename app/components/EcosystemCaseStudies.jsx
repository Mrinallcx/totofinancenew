"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import "./EcosystemCaseStudies.css";

const CASES = [
  {
    key: "pluto",
    image: "/case-pluto.png",
    alt: "Minimalist Note Card Composition",
    brand: "/brand-pluto.png",
    year: "2025",
    name: "Pluto",
    body: "Helped Pluto scale their product team and streamline onboarding as they expanded into new markets.",
  },
  {
    key: "vitahealth",
    image: "/case-vitahealth.png",
    alt: "Green Plant",
    brand: "/brand-vitahealth.png",
    year: "2024",
    name: "VitaHealth",
    body: "Partnered with VitaHealth to set up their first operations team from the ground up.",
  },
  {
    key: "boxmedia",
    image: "/case-boxmedia.png",
    alt: "Pink Radio",
    brand: "/brand-boxmedia.png",
    year: "2025",
    name: "BoxMedia",
    body: "Supported BoxMedia, a creative agency, in building their client success team and internal delivery process.",
  },
  {
    key: "novatech",
    image: "/case-novatech.png",
    alt: "Laptop and Plant",
    brand: "/brand-novatech.png",
    year: "2023",
    name: "NovaTech",
    body: "Helped NovaTech optimize cross-functional collaboration between marketing, product, and sales teams.",
  },
];

export default function EcosystemCaseStudies() {
  const sectionRef = useScrollReveal();

  return (
    <section className="ecocase" aria-labelledby="ecocase-heading" ref={sectionRef}>
      <div className="ecocase__inner">
        <header className="ecocase__header sr-item">
          <h2 className="ecocase__title" id="ecocase-heading">Success stories</h2>
          <p className="ecocase__desc">
            We have partnered with growing businesses to build foundations for
            sustainable success. Explore real stories of transformation.
          </p>
        </header>

        <div className="ecocase__grid">
          {CASES.map((c) => (
            <a key={c.key} className="ecocase__card sr-item" href="#">
              <div className="ecocase__image-area">
                <div className="ecocase__thumb">
                  <Image
                    src={c.image}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1200px) calc((min(100vw,1200px) - 184px) / 2), (min-width: 810px) calc((min(100vw,1200px) - 152px) / 2), calc(100vw - 64px)"
                    className="ecocase__img"
                  />
                </div>
                <div className="ecocase__brand-row">
                  <div className="ecocase__brand">
                    <Image
                      src={c.brand}
                      alt=""
                      width={250}
                      height={55}
                      className="ecocase__brand-img"
                    />
                  </div>
                  <span className="ecocase__year">{c.year}</span>
                </div>
              </div>
              <div className="ecocase__content">
                <h5 className="ecocase__name">{c.name}</h5>
                <p className="ecocase__body">{c.body}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="ecocase__cta-wrap sr-item">
          <a href="#" className="ecocase__cta">Read more</a>
        </div>
      </div>
    </section>
  );
}
