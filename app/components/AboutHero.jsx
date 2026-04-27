"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./AboutHero.css";

/** Same asset as https://player.cloudinary.com/embed/?cloud_name=dusinlidl&public_id=toto%20finance%20about%20us%20hero%20section */
const ABOUT_HERO_VIDEO_MP4 =
  "https://res.cloudinary.com/dusinlidl/video/upload/q_auto,f_auto/toto%20finance%20about%20us%20hero%20section.mp4";

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
        >
          <source src={ABOUT_HERO_VIDEO_MP4} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
