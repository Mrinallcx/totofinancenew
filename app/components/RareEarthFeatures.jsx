"use client";

import Image from "next/image";
import useScrollReveal from "../hooks/useScrollReveal";
import "./RareEarthFeatures.css";

const FEATURES = [
  {
    key: "security",
    title: "AAA-rated security",
    body: "Keep your money safe with our secure and trustworthy account setup.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="remfeat__svg">
        <path d="M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "currency",
    title: "Multi-currency",
    body: "Place deposits in EUR, GBP, USD and 190 more currencies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="remfeat__svg">
        <path d="M206.19,53.07,144.88,128H176a8,8,0,0,1,0,16H136v16h40a8,8,0,0,1,0,16H136v40a8,8,0,0,1-16,0V176H80a8,8,0,0,1,0-16h40V144H80a8,8,0,0,1,0-16h31.12L49.81,53.07A8,8,0,0,1,62.19,42.93L128,123.37l65.81-80.44a8,8,0,1,1,12.38,10.14Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "save",
    title: "Smart Save™",
    body: "Round up every purchase and automatically invest the difference.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="remfeat__svg">
        <path d="M184,89.57V84c0-25.08-37.83-44-88-44S8,58.92,8,84v40c0,20.89,26.25,37.49,64,42.46V172c0,25.08,37.83,44,88,44s88-18.92,88-44V132C248,111.3,222.58,94.68,184,89.57ZM232,132c0,13.22-30.79,28-72,28-3.73,0-7.43-.13-11.08-.37C170.49,151.77,184,139,184,124V105.74C213.87,110.19,232,122.27,232,132ZM72,150.25V126.46A183.74,183.74,0,0,0,96,128a183.74,183.74,0,0,0,24-1.54v23.79A163,163,0,0,1,96,152,163,163,0,0,1,72,150.25Zm96-40.32V124c0,8.39-12.41,17.4-32,22.87V123.5C148.91,120.37,159.84,115.71,168,109.93ZM96,56c41.21,0,72,14.78,72,28s-30.79,28-72,28S24,97.22,24,84,54.79,56,96,56ZM24,124V109.93c8.16,5.78,19.09,10.44,32,13.57v23.37C36.41,141.4,24,132.39,24,124Zm64,48v-4.17c2.63.1,5.29.17,8,.17,3.88,0,7.67-.13,11.39-.35A121.92,121.92,0,0,0,120,171.41v23.46C100.41,189.4,88,180.39,88,172Zm48,26.25V174.4a179.48,179.48,0,0,0,24,1.6,183.74,183.74,0,0,0,24-1.54v23.79a165.45,165.45,0,0,1-48,0Zm64-3.38V171.5c12.91-3.13,23.84-7.79,32-13.57V172C232,180.39,219.59,189.4,200,194.87Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "risk",
    title: "Risk mitigation",
    body: "Spread your risk and stay secure with our one-of-a-kind solution.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="remfeat__svg">
        <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function RareEarthFeatures() {
  const sectionRef = useScrollReveal();

  return (
    <section className="remfeat" aria-label="Features" ref={sectionRef}>
      <div className="remfeat__inner">
        <div className="remfeat__left">
          <ul className="remfeat__cards">
            {FEATURES.map((f) => (
              <li key={f.key} className="remfeat__card">
                <div className="remfeat__icon-wrap">
                  {f.icon}
                </div>
                <div className="remfeat__card-text">
                  <h6 className="remfeat__card-title">{f.title}</h6>
                  <p className="remfeat__card-body">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="remfeat__right">
          <Image
            src="/features-hero.jpg"
            alt=""
            fill
            sizes="(max-width: 899px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
