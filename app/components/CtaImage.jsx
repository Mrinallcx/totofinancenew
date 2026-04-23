"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./CtaImage.css";

export default function CtaImage({
  title = "Ready to transform your financial future?",
  description = "Join thousands of businesses and investors already leveraging our institutional-grade platform for tokenized commodities and sustainable growth.",
  primaryLabel = "Get started",
  primaryHref = "/contact",
  secondaryLabel = "Learn more",
  secondaryHref = "/about-us",
}) {
  const sectionRef = useScrollReveal();

  const isExternal = (href) =>
    typeof href === "string" && (href.startsWith("http") || href.startsWith("mailto:"));

  return (
    <section className="ctaimg" ref={sectionRef}>
      <div className="ctaimg__bg">
        <Image
          src="https://framerusercontent.com/images/I63aDOGkxJKmUUtuNtByyqTZAHU.jpg?scale-down-to=1024"
          alt=""
          className="ctaimg__bg-img"
          width={1300}
          height={600}
          loading="lazy"
        />
      </div>
      <div className="ctaimg__content">
        <h2 className="ctaimg__title">
          <SplitWords text={title} />
        </h2>
        <p className="ctaimg__desc">
          <SplitWords text={description} startDelay={0.5} stagger={0.015} />
        </p>
        <div className="ctaimg__actions">
          <a
            href={primaryHref}
            className="ctaimg__btn ctaimg__btn--primary"
            {...(isExternal(primaryHref)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span>{primaryLabel}</span>
            <span className="cta__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </span>
          </a>
          <a
            href={secondaryHref}
            className="ctaimg__btn ctaimg__btn--outline"
            {...(isExternal(secondaryHref)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {secondaryLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
