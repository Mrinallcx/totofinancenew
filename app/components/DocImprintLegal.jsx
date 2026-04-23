"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./DocImprintLegal.css";

export default function DocImprintLegal() {
  const sectionRef = useScrollReveal();

  return (
    <section className="doclegal" aria-labelledby="doclegal-heading" ref={sectionRef}>
      <div className="doclegal__inner">
        <h2 className="doclegal__heading sr-item" id="doclegal-heading">
          Legal Information
        </h2>

        <div className="doclegal__grid">
          {/* Legal Entity */}
          <div className="doclegal__block sr-item">
            <h3 className="doclegal__title">Legal Entity</h3>
            <p className="doclegal__text">
              <strong>Toto Finance Inc.</strong>
              <br />
              A corporation incorporated in the United States of America.
            </p>
          </div>

          {/* Principal Business Address */}
          <div className="doclegal__block sr-item">
            <h3 className="doclegal__title">Principal Business Address</h3>
            <p className="doclegal__text">
              447 Broadway, 2nd Floor, Suite 3342
              <br />
              New York, NY 10013
              <br />
              United States
            </p>
          </div>

          {/* Registration Number */}
          <div className="doclegal__block sr-item">
            <h3 className="doclegal__title">Company Registration Number</h3>
            <p className="doclegal__text">10480139 (USA)</p>
          </div>

          {/* Copyright */}
          <div className="doclegal__block sr-item">
            <h3 className="doclegal__title">Copyright</h3>
            <p className="doclegal__text">
              &copy; 2026 Toto Finance Inc. All rights reserved.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__title">Disclaimer</h3>
          <p className="doclegal__text">
            Digital assets, such as tokenized commodities and other real-world
            assets, are associated with material risks, including price
            volatility, illiquidity, counterparty risk, and regulatory
            uncertainty. Digital asset markets may lack the same level of
            protections as traditional financial markets and are subject to
            changing regulatory environments.
          </p>
          <p className="doclegal__text">
            Toto Finance Inc. offers information and services related to
            blockchain tokenization and digital representations of real-world
            assets. Unless otherwise stated, products and services mentioned on
            this website have not been registered as securities under applicable
            laws and regulations and may not be offered or sold in certain
            jurisdictions without registration or exemption.
          </p>
          <p className="doclegal__text">
            Tokenized assets may represent direct or indirect economic interests
            in underlying assets and may or may not represent ownership rights or
            direct legal claims, depending on the applicable structure,
            documentation, and jurisdiction.
          </p>
          <p className="doclegal__text">
            Nothing on this website should be considered financial, investment,
            legal, or tax advice, or an offer or solicitation to purchase or sell
            any asset. It is the responsibility of the user to conduct their own
            due diligence and seek the advice of professional experts before
            participating in any product or service.
          </p>
          <p className="doclegal__text">
            Additional terms, conditions, and geographical restrictions may
            apply.
          </p>
        </div>

        {/* Asset Custody & Storage */}
        <div className="doclegal__section sr-item">
          <h3 className="doclegal__subtitle">Asset Custody &amp; Storage</h3>

          <h4 className="doclegal__title">Custody Service Provider</h4>
          <p className="doclegal__text">
            Physical asset custody for tokenized assets is offered by:
          </p>
          <p className="doclegal__text">
            <strong>TotoHolding AG</strong>
            <br />
            Herrengasse 6
            <br />
            9490 Vaduz
            <br />
            Liechtenstein
          </p>
          <p className="doclegal__text">
            Legal Entity Identifier (LEI): 5299005UXAQFO3US5C38
          </p>
        </div>

        {/* Secure Vault Storage — full width */}
        <div className="doclegal__section doclegal__section--full sr-item">
          <h4 className="doclegal__title">Secure Vault Storage</h4>
          <p className="doclegal__text">
            The physical assets that underlie Toto Finance tokens are stored in
            secure vault storage facilities in Liechtenstein. The vault storage
            facilities are located in the Swiss Alps, which is one of the most
            secure and politically neutral regions in the world for asset
            storage, with a history of wealth preservation and financial
            secrecy dating back centuries.
          </p>
        </div>

        {/* Insurance & Custody — 2 boxed cards */}
        <div className="doclegal__grid doclegal__grid--2col">
          <div className="doclegal__block sr-item">
            <h4 className="doclegal__title">Insurance &amp; Protection</h4>
            <p className="doclegal__text">
              The custody service is insured against loss, theft, or damage by
              Lloyd&apos;s of London.
            </p>
          </div>

          <div className="doclegal__block sr-item">
            <h4 className="doclegal__title">Custody Transparency</h4>
            <p className="doclegal__text">
              Token holders are provided with notarized evidence of ownership and
              real-time access to their asset&apos;s custody status.
            </p>
          </div>
        </div>

        {/* Purpose of This Website */}
        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Purpose of This Website</h3>
          <p className="doclegal__text">
            The purpose of this website is to offer general information about
            Toto Finance Inc., its technology, infrastructure, research
            publications, and services, as well as general educational content on
            blockchain technology, tokenization, real-world assets, and economic
            research.
          </p>
        </div>

        {/* Official Channels */}
        <div className="doclegal__section sr-item">
          <h3 className="doclegal__subtitle">Official Channels</h3>
          <ul className="doclegal__links">
            <li>
              <span className="doclegal__label">Website:</span>{" "}
              <a href="https://www.totofinance.co" className="doclegal__link" target="_blank" rel="noopener noreferrer">
                www.totofinance.co
              </a>
            </li>
            <li>
              <span className="doclegal__label">X (Twitter):</span>{" "}
              <a href="https://twitter.com/TotoFinance" className="doclegal__link" target="_blank" rel="noopener noreferrer">
                @TotoFinance
              </a>
            </li>
            <li>
              <span className="doclegal__label">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/company/totofinance/"
                className="doclegal__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Toto Finance
              </a>
            </li>
            <li>
              <span className="doclegal__label">Telegram:</span>{" "}
              <a
                href="https://t.me/totofinance"
                className="doclegal__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Toto Finance
              </a>
            </li>
          </ul>
        </div>

        {/* Compliance & Legal Inquiries */}
        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">
            Compliance &amp; Legal Inquiries
          </h3>
          <p className="doclegal__text">
            Toto Finance Inc. believes that regulatory compliance and legal
            clarity are critical to the future success of digital finance and
            real world asset tokenization.
          </p>
          <p className="doclegal__text">
            For legal or compliance-related inquiries, please contact:{" "}
            <a href="mailto:legal@totofinance.co" className="doclegal__link">
              legal@totofinance.co
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
