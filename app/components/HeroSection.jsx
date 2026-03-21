"use client";

import dynamic from "next/dynamic";
import "./HeroSection.css";
import NavBar from "./NavBar";
import scrollAnimation from "../../public/scrollanimation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const HOME_LOCAL_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Services", href: "#services" },
  { label: "Token", href: "#token" },
  { label: "About", href: "#about" },
];

export default function HeroSection() {
  return (
    <>
      <NavBar pageTitle="Toto Finance" localLinks={HOME_LOCAL_LINKS} />

      <section className="hero">
        {/* Video background */}
        <div className="hero__video-wrap">
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            fetchPriority="high"
            poster="https://framerusercontent.com/images/KUY43qTaTIwPFzOc0fNZn3tcfE.png"
          >
            <source
              src="https://res.cloudinary.com/djsb5ye4c/video/upload/v1773754964/totofinance%20background%2001.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Color overlay */}
        <div className="hero__overlay" />
        {/* Bottom gradient */}
        <div className="hero__gradient" />
        {/* Top gradient */}
        <div className="hero__gradient-top" />

        {/* Content */}
        <div className="hero__content">
          <div className="hero__text-wrap">
            <h1 className="hero__title">
              <span className="hero__title--white">Toto Finance</span>
              <br />
              <span className="hero__title--green">The Global Infrastructure for Tokenized Commodities</span>
            </h1>

            <p className="hero__subtitle">
              Toto Finance is building the digital infrastructure for tokenized
              commodities - enabling asset-backed ownership, instant settlement,
              and compliant global trade across metals, energy, and real-world
              assets.
            </p>
          </div>

          <a href="/contact-us" className="hero__btn">
            <span>Get started</span>
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

        {/* Scroll indicator */}
        <div className="hero__scroll-indicator">
          <Lottie animationData={scrollAnimation} loop autoplay />
        </div>
      </section>
    </>
  );
}
