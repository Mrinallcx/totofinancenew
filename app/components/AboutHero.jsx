"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./AboutHero.css";

export default function AboutHero() {
  const sectionRef = useScrollReveal(0.1);

  return (
    <section className="abthero" id="about-overview" ref={sectionRef}>
      <div className="abthero__container">
        <div className="abthero__badge sr-item" style={{ animationDelay: "0s" }}>
          <span className="abthero__badge-dot" />
          <span className="abthero__badge-text">About us</span>
          <span className="abthero__badge-dot" />
        </div>
        <h1 className="abthero__heading">
          <SplitWords text="Building Infrastructure for Global Digital Commodities" startDelay={0.15} stagger={0.06} />
        </h1>
      </div>

      <div className="abthero__video-wrap">
        <video
          className="abthero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://framerusercontent.com/images/MG4kQb9JYjsjUVxKv8YbPohmP0I.png"
        >
          <source
            src="https://videos.pexels.com/video-files/9136349/9136349-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
}
