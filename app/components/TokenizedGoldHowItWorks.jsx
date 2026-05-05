"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./TokenizedGoldHowItWorks.css";

const STEPS = [
  {
    title: "Tell Us What You're Looking For",
    body: "During our initial consultation, we align on your goals, risk profile, and preferred allocation before you select a gold asset.",
  },
  {
    title: "Explore Tailored Options",
    body: "Based on your preferences, we present curated tokenized gold options and guide you through each choice with full transparency.",
  },
  {
    title: "Secure the Right Fit",
    body: "Once you choose your position, we support onboarding and settlement so ownership is completed smoothly and confidently.",
  },
];

export default function TokenizedGoldHowItWorks({
  sectionId = "tokenized-gold-how-it-works",
  commodityName = "Gold",
  categoryPath = "gold",
  overline = "How It Works",
  heading = "Finding home should feel simple",
  steps = STEPS,
  marqueeSteps = false,
  subBlockOverline,
  subBlockHeading = "Find Clarity and Confidence in Every Decision",
  subBlockSubtext,
  ctaLabel,
  featureImageSrc = "https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872",
  featureImageAlt = "Property style showcase visual",
}) {
  const sectionRef = useScrollReveal(0.12);
  const featureOverline = subBlockOverline ?? `Tokenized ${commodityName} Service Built Around People`;
  const featureSubtext =
    subBlockSubtext ??
    "Toto Finance is built on a simple mission: make access to trusted gold ownership transparent, global, and easy to understand.";
  const buttonLabel = ctaLabel ?? `Explore ${commodityName}`;
  const marqueeSequence = marqueeSteps ? [...steps, ...steps] : steps;

  return (
    <section className="tghiw" id={sectionId} ref={sectionRef}>
      <div className="tghiw__container">
        <div className="tghiw__header sr-item" style={{ animationDelay: "0.08s" }}>
          <div className="tghiw__tag-wrap">
            <span className="tghiw__tag-dot" aria-hidden="true" />
            <p className="tghiw__tag-label">{overline}</p>
          </div>
          <h2 className="tghiw__title">{heading}</h2>
        </div>

        {marqueeSteps ? (
          <div
            className="tghiw__steps tghiw__steps--marquee sr-item"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="tghiw__marquee-track" style={{ "--tghiw-marquee-count": steps.length }}>
              {marqueeSequence.map((step, i) => (
                <article
                  key={`${step.title}-${i}`}
                  className="tghiw__step tghiw__step--marquee"
                  aria-hidden={i >= steps.length ? "true" : undefined}
                >
                  <div className="tghiw__step-text">
                    <h3 className="tghiw__step-title">{step.title}</h3>
                    <p className="tghiw__step-body">{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="tghiw__steps">
            {steps.map((step, i) => (
              <article key={step.title} className="tghiw__step sr-item" style={{ animationDelay: `${0.12 + i * 0.08}s` }}>
                <div className="tghiw__step-text">
                  <h3 className="tghiw__step-title">{step.title}</h3>
                  <p className="tghiw__step-body">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="tghiw__feature sr-item" style={{ animationDelay: "0.34s" }}>
          <div className="tghiw__feature-image-wrap">
            <img
              className="tghiw__feature-image"
              src={featureImageSrc}
              alt={featureImageAlt}
              loading="lazy"
            />
          </div>
          <div className="tghiw__feature-content">
            <p className="tghiw__eyebrow">{featureOverline}</p>
            <h3 className="tghiw__feature-title">{subBlockHeading}</h3>
            <p className="tghiw__feature-body">{featureSubtext}</p>
            <a
              href={`https://app.totofinance.co/category/${categoryPath}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tghiw__cta"
            >
              <span>{buttonLabel}</span>
              <span className="cta__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
