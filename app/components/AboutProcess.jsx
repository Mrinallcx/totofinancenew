import Image from "next/image";
import "./AboutProcess.css";

const STEPS = [
  {
    number: "01",
    title: "Consultation and Assessment",
    description:
      "We start by understanding your unique energy needs and thoroughly evaluating your specific site to recommend the best renewable solutions tailored to your goals.",
  },
  {
    number: "02",
    title: "Design and Implementation",
    description:
      "Our expert team carefully creates a customized plan, then installs and seamlessly integrates the systems efficiently, ensuring optimal performance and sustainability.",
  },
  {
    number: "03",
    title: "Support and Optimization",
    description:
      "After installation, we provide ongoing expert technical support, continuously monitor system performance, and offer timely upgrades to maximize energy savings over time.",
  },
];

export default function AboutProcess() {
  return (
    <section className="abtprocess" id="about-process">
      <div className="abtprocess__container">
        <div className="abtprocess__content">
          <div className="abtprocess__header">
            <h2 className="abtprocess__heading">
              Our Process
            </h2>
            <p className="abtprocess__desc">
              Our commitment to sustainability and cutting-edge technology
              ensures you&apos;ll enjoy energy that&apos;s not only reliable but
              also beneficial in multiple ways.
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
                <p className="abtprocess__step-desc">{step.description}</p>
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
