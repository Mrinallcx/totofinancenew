import TokenBlockSystem from "./TokenBlockSystem";
import "./CryptoAccess.css";

export default function CryptoAccess() {
  return (
    <section className="caccess" id="token">
      <div className="caccess__container">
        <div className="caccess__image-wrapper">
          <TokenBlockSystem />
        </div>

        <div className="caccess__content">
          <div className="caccess__text">
            <div className="caccess__badge">
              <span className="caccess__badge-dot" />
              <span className="caccess__badge-text">Toto Token</span>
            </div>
            <h2 className="caccess__title">
              The $TOTO Token
            </h2>
            <p className="caccess__desc">
              Powering the Open Commodity Economy. $TOTO token is the universal
              utility powering tokenization, settlement, fees, and access across
              the Toto Finance ecosystem.
            </p>
          </div>
          <a href="/marketplace" className="caccess__cta">
            <span>Explore Marketplace</span>
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
