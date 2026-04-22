"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./AboutProcess.css";

const STEPS = [
  {
    number: "01",
    title: "Registered and Regulated",
    description:
      "Toto Finance Inc. is incorporated in the United States (Reg. No. 10480139), headquartered at 447 Broadway, New York. TotoHolding AG is incorporated in Liechtenstein with LEI 5299005UXAQFO3US5C38, independently verifiable via GLEIF.",
  },
  {
    number: "02",
    title: "Audited and Secured",
    descriptionRich: (
      <>
        Independent third-party security audits ensure the integrity of smart contracts and platform infrastructure. Audit providers:{" "}
        <a href="https://hacken.io/audits/toto-finance/" target="_blank" rel="noopener noreferrer">
          Hacken (https://hacken.io/audits/toto-finance/)
        </a>{" "}
        and{" "}
        <a href="https://skynet.certik.com/projects/tiamonds" target="_blank" rel="noopener noreferrer">
          CertiK (https://skynet.certik.com/projects/tiamonds)
        </a>
        .
      </>
    ),
  },
  {
    number: "03",
    title: "Institutional Grade Credibility",
    description:
      "Compliance-first infrastructure with independent physical validation, proof of reserves, third-party custody, and registered legal entities in Liechtenstein and the United States.",
  },
];

export default function AboutProcess() {
  const sectionRef = useScrollReveal();

  return (
    <section className="abtprocess" id="about-process" ref={sectionRef}>
      <div className="abtprocess__container">
        <div className="abtprocess__content">
          <div className="abtprocess__header">
            <h2 className="abtprocess__heading">
              <SplitWords text="Compliance First" stagger={0.08} />
            </h2>
            <p className="abtprocess__desc">
              <SplitWords
                text="Toto Finance operates through legally registered entities in the United States and Liechtenstein, ensuring structural transparency and regulatory clarity."
                startDelay={0.3}
                stagger={0.02}
              />
            </p>
          </div>

          <div className="abtprocess__steps">
            {STEPS.map((step) => (
              <div key={step.number} className="abtprocess__step">
                <div className="abtprocess__step-head">
                  <span className="abtprocess__step-number">
                    {step.number}
                  </span>
                  <h5 className="abtprocess__step-title">{step.title}</h5>
                </div>
                <p className="abtprocess__step-desc">
                  {step.descriptionRich ?? step.description}
                </p>
              </div>
            ))}

            <a href="/how-we-work" className="abtprocess__cta">
              <span>View more</span>
              <span className="abtprocess__cta-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="abtprocess__image-wrap">
          <Image
            src="https://framerusercontent.com/images/1PBUhFCt9fIr7Az12qTFt92c4.jpg?scale-down-to=1024"
            alt="Process"
            fill
            sizes="(max-width: 991px) 100vw, 50vw"
            className="abtprocess__image"
          />
        </div>
      </div>
    </section>
  );
}
