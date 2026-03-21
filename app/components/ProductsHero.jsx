import "./ProductsHero.css";

export default function ProductsHero() {
  return (
    <section className="prodhero" id="products-overview">
      <div className="prodhero__video-wrap">
        <video
          className="prodhero__video"
          src="https://framerusercontent.com/assets/7fXDqEHIBqWkfaAU7ddHgPqholw.mp4"
          loop
          preload="auto"
          poster="https://framerusercontent.com/images/w9K8ltdxMfkapZKUCjyk8m6Og.jpg?width=1280&height=720"
          muted
          playsInline
          autoPlay
        />
        <div className="prodhero__overlay" />
      </div>

      <div className="prodhero__container">
        <div className="prodhero__content">
          <div className="prodhero__left">
            <div className="prodhero__text">
              <h1 className="prodhero__title">
                Tokenized commodities, the future of global trade
              </h1>
              <p className="prodhero__body">
                Institutional-grade, asset-backed digital commodities that bring
                transparency, instant settlement, and borderless access to
                metals, energy, and real-world assets.
              </p>
            </div>
            <a href="/global-market" className="prodhero__cta">
              <span>Explore products</span>
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

          <div className="prodhero__right">
            <a href="#" className="prodhero__card">
              <div className="prodhero__card-top">
                <p className="prodhero__card-title">
                  How one city turned its zero-waste vision into reality
                </p>
              </div>

              <div className="prodhero__card-middle">
                <div className="prodhero__card-image-wrap">
                  <img
                    className="prodhero__card-image"
                    src="https://framerusercontent.com/images/8cUgs5U8JERfBz2wyLRNN4fmHw.jpg?width=770&height=950"
                    alt="Case study"
                    width={770}
                    height={950}
                  />
                </div>
              </div>

              <div className="prodhero__card-bottom">
                <div className="prodhero__stat">
                  <p className="prodhero__stat-label">
                    Planted trees to restore biodiversity
                  </p>
                  <h2 className="prodhero__stat-value">50K</h2>
                </div>
                <div className="prodhero__stat-divider" />
                <div className="prodhero__stat">
                  <p className="prodhero__stat-label">
                    Savings through smart logistics
                  </p>
                  <h2 className="prodhero__stat-value">200+</h2>
                </div>
              </div>

            </a>
            <div className="prodhero__shape prodhero__shape--1" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M18 0C18 9.941 9.941 18 0 18H18V0Z" fill="white" />
              </svg>
            </div>
            <div className="prodhero__shape prodhero__shape--2" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M0 0C0 9.941 8.059 18 18 18H0V0Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
