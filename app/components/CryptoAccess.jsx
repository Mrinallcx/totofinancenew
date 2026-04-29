"use client";

import dynamic from "next/dynamic";
import bitcoinAnimation from "../../public/icon-stack.json";
import useScrollReveal from "../hooks/useScrollReveal";
import SplitWords from "../hooks/SplitWords";
import "./CryptoAccess.css";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function CryptoAccess() {
  const sectionRef = useScrollReveal();

  return (
    <section className="caccess" id="token" ref={sectionRef}>
      <div className="caccess__container">
        <div className="caccess__image-wrapper">
          <div className="caccess__lottie-wrap">
            <Lottie
              animationData={bitcoinAnimation}
              loop
              autoplay
              className="caccess__lottie"
            />
          </div>
        </div>

        <div className="caccess__content">
          <div className="caccess__text">
            <div className="caccess__badge sr-item" style={{ animationDelay: "0s" }}>
              <span className="caccess__badge-dot" />
              <span className="caccess__badge-text">Toto Token</span>
            </div>
            <h2 className="caccess__title">
              <SplitWords text="The $TOTO Token" stagger={0.08} />
            </h2>
            <p className="caccess__desc">
              <SplitWords
                text="$TOTO is the token that powers the Toto Finance ecosystem - used for tokenization, settlement, fees, and access."
                startDelay={0.4}
                stagger={0.015}
              />
            </p>
          </div>
          <a href="https://toto.xyz" target="_blank" rel="noopener noreferrer" className="caccess__cta sr-item" style={{ animationDelay: "0.8s" }}>
            <span>Learn More</span>
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
    </section>
  );
}
