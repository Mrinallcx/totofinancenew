"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./Vision2030MethodsHeadline.css";

export default function Vision2030MethodsHeadline() {
  const sectionRef = useScrollReveal();

  return (
    <section className="v2030mh" id="our-methods" aria-labelledby="v2030mh-heading" ref={sectionRef}>
      <div className="v2030mh__inner">
        <div className="v2030mh__headline">
          <h2 id="v2030mh-heading" className="v2030mh__title">
            <SplitWords text="Bridging strategy, operations and delivering tangible business growth" startDelay={0.1} stagger={0.04} />
          </h2>
        </div>
      </div>
    </section>
  );
}
