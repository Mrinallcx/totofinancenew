import Image from "next/image";
import "./CtaImage.css";

export default function CtaImage() {
  return (
    <section className="ctaimg">
      <div className="ctaimg__bg">
        <Image
          src="https://framerusercontent.com/images/I63aDOGkxJKmUUtuNtByyqTZAHU.jpg?scale-down-to=1024"
          alt=""
          className="ctaimg__bg-img"
          width={1300}
          height={600}
          loading="lazy"
        />
      </div>
      <div className="ctaimg__content">
        <h2 className="ctaimg__title">
          Ready to transform your financial future?
        </h2>
        <p className="ctaimg__desc">
          Join thousands of businesses and investors already leveraging our
          institutional-grade platform for tokenized commodities and sustainable growth.
        </p>
        <div className="ctaimg__actions">
          <a href="/contact" className="ctaimg__btn ctaimg__btn--primary">
            <span>Get started</span>
            <span className="cta__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
              </svg>
            </span>
          </a>
          <a href="/about" className="ctaimg__btn ctaimg__btn--outline">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
