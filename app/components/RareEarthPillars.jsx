"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./RareEarthPillars.css";

const PILLARS = [
  {
    key: "strategy",
    tag: "Strategy",
    title: "Developing long-term plans that drive sustainable growth",
    body: "We help companies define clear goals and create actionable roadmaps for success",
  },
  {
    key: "operations",
    tag: "Operations",
    title: "Optimizing processes and improving efficiency",
    body: "We streamline workflows and structures to deliver measurable business results",
  },
  {
    key: "innovation",
    tag: "Innovation",
    title: "Creating new opportunities and scalable business models",
    body: "We design and implement innovative solutions to help companies stay ahead",
  },
  {
    key: "strategy-2",
    tag: "Strategy",
    title: "Developing long-term plans that drive sustainable growth",
    body: "We help companies define clear goals and create actionable roadmaps for success",
  },
  {
    key: "operations-2",
    tag: "Operations",
    title: "Optimizing processes and improving efficiency",
    body: "We streamline workflows and structures to deliver measurable business results",
  },
  {
    key: "innovation-2",
    tag: "Innovation",
    title: "Creating new opportunities and scalable business models",
    body: "We design and implement innovative solutions to help companies stay ahead",
  },
];

export default function RareEarthPillars() {
  const sectionRef = useScrollReveal();

  return (
    <section className="rempillars" aria-label="Pillars" ref={sectionRef}>
      <div className="rempillars__inner">
        <ul className="rempillars__grid">
          {PILLARS.map((p) => (
            <li key={p.key} className="rempillars__card sr-item">
              <span className="rempillars__tag">{p.tag}</span>
              <h5 className="rempillars__title">{p.title}</h5>
              <p className="rempillars__body">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
