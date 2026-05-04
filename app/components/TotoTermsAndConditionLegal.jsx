"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./DocImprintLegal.css";
import "./TotoPrivacyPolicyLegal.css";

export default function TotoTermsAndConditionLegal() {
  const sectionRef = useScrollReveal();

  return (
    <section className="doclegal privacylegal" aria-labelledby="terms-legal-heading" ref={sectionRef}>
      <div className="doclegal__inner">
        <h2 className="doclegal__heading sr-item" id="terms-legal-heading">
          Sales Terms &amp; Conditions - Toto Token &amp; Assets
        </h2>

        <div className="doclegal__section doclegal__section--full sr-item">
          <p className="doclegal__text">
            <strong>Effective Date: March 2025</strong>
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">1. Introduction</h3>
          <p className="doclegal__text">
            These Terms &amp; Conditions (the &quot;Terms&quot;) govern the sale, purchase, and use of the TOTO token
            (the &quot;Token&quot;) and your use of the Toto Finance platform and services.
          </p>
          <p className="doclegal__text privacylegal__highlight">
            By participating in the Token Sale, accessing our platform, or purchasing Tokens, you acknowledge that you
            have read, understood, and agree to be bound by these Terms. If you do not agree, do not participate in
            the Token Sale or use our services.
          </p>
          <p className="doclegal__text">
            These Terms constitute a legally binding agreement between you (&quot;you,&quot; &quot;your,&quot; or
            &quot;Purchaser&quot;) and the entities described below.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">2. Parties and Roles</h3>
          <p className="doclegal__text">
            <strong>Toto Finance Inc.</strong> (United States) is the principal operating entity for the Toto Finance
            platform and your primary counterparty for platform access and non-custodial digital services unless
            otherwise identified.
          </p>
          <p className="doclegal__text">
            <strong>TotoHolding AG</strong> (Herrengasse 6, 9490 Vaduz, Liechtenstein) holds physical custody in
            Liechtenstein of vaulted stones, gemstones, precious metals, commodities, and other tangible assets that
            back tokenized products.
          </p>
          <p className="doclegal__text">
            <strong>LCX AG</strong> (Herrengasse 6, 9490 Vaduz, Liechtenstein) is a regulated Virtual Asset Service
            Provider under TVTG (registration No. 288159), and serves as:
          </p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Official issuer of the TOTO Token</li>
            <li className="doclegal__text">Registered Physical Validator under the Liechtenstein Blockchain Act</li>
            <li className="doclegal__text">Trusted technology service provider for the Toto Finance platform</li>
          </ul>
          <p className="doclegal__text">LCX AG is registered for the following services under TVTG:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">TT Exchange Service Provider</li>
            <li className="doclegal__text">TT Token Depositary</li>
            <li className="doclegal__text">Token Generator</li>
            <li className="doclegal__text">TT Key Depositary</li>
            <li className="doclegal__text">TT Price Service Provider</li>
            <li className="doclegal__text">TT Identity Service Provider</li>
            <li className="doclegal__text">TT Token Issuer (for own account and third parties)</li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">3. No Public Offering</h3>
          <p className="doclegal__text privacylegal__highlight">
            IMPORTANT: The TOTO Token is NOT offered through a public token sale.
          </p>
          <p className="doclegal__text">
            TOTO Tokens are not distributed through an ICO, IEO, or any public sale by Toto Finance Inc. or LCX AG.
            Tokens may only be acquired through:
          </p>
          <ul className="doclegal__links">
            <li className="doclegal__text">LCX Exchange (LCX.com)</li>
            <li className="doclegal__text">Decentralized exchanges (e.g., Uniswap)</li>
            <li className="doclegal__text">Secondary market trading</li>
            <li className="doclegal__text">Token migration (TIA to TOTO at 1:1)</li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">4. Token Overview</h3>
          <div className="privacylegal__table-wrap">
            <table className="privacylegal__table" aria-label="Token overview">
              <tbody>
                <tr>
                  <th>Token Name</th>
                  <td>TOTO</td>
                </tr>
                <tr>
                  <th>Token Type</th>
                  <td>Utility Token</td>
                </tr>
                <tr>
                  <th>Token Standard</th>
                  <td>ERC-20</td>
                </tr>
                <tr>
                  <th>Blockchain</th>
                  <td>Ethereum (multi-chain integration planned)</td>
                </tr>
                <tr>
                  <th>Total Supply</th>
                  <td>1,000,000,000 TOTO</td>
                </tr>
                <tr>
                  <th>Smart Contract</th>
                  <td>0xC214A0B73Ce4c30594B4173219e885691254801b</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="doclegal__text">
            Smart contract audit:{" "}
            <a href="https://hacken.io/audits/toto-finance/" className="doclegal__link" target="_blank" rel="noopener noreferrer">
              https://hacken.io/audits/toto-finance/
            </a>
          </p>
          <p className="doclegal__text">Token utility includes:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Discounts on platform service fees</li>
            <li className="doclegal__text">Rewards for promotions and competitions</li>
            <li className="doclegal__text">Access to platform features and services</li>
            <li className="doclegal__text">Smart contract-enabled fee reductions and reward distribution</li>
          </ul>
          <p className="doclegal__text privacylegal__highlight">
            The TOTO Token does not represent equity, debt, ownership, profit-sharing rights, voting rights, or any
            claim to dividends.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">5. Eligibility and Restricted Jurisdictions</h3>
          <p className="doclegal__text">To participate, you must:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Be at least 18 years old (or legal majority in your jurisdiction)</li>
            <li className="doclegal__text">Have legal capacity to enter binding contracts</li>
            <li className="doclegal__text">Complete required KYC/AML verification</li>
            <li className="doclegal__text">Not appear on sanctions lists</li>
            <li className="doclegal__text">Not be a resident/citizen of restricted jurisdictions</li>
          </ul>
          <p className="doclegal__text">
            Restricted-jurisdiction status may change over time and is your responsibility to verify.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">6. Token Acquisition</h3>
          <p className="doclegal__text">
            Since there is no public token sale, TOTO may be acquired via LCX Exchange, decentralized exchanges,
            migration, and secondary markets.
          </p>
          <p className="doclegal__text">LCX Exchange flow:</p>
          <ol className="doclegal__links">
            <li className="doclegal__text">Create account at LCX.com</li>
            <li className="doclegal__text">Complete KYC/AML verification</li>
            <li className="doclegal__text">Deposit funds/crypto</li>
            <li className="doclegal__text">Purchase TOTO via available pairs</li>
          </ol>
          <p className="doclegal__text privacylegal__highlight">
            All token acquisitions are final. Blockchain transactions are irreversible.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">7. KYC/AML Compliance</h3>
          <p className="doclegal__text">You agree to provide required documents and ongoing due diligence support.</p>
          <p className="doclegal__text">We reserve the right to:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Refuse or cancel purchases at sole discretion</li>
            <li className="doclegal__text">Delay/withhold token delivery pending verification</li>
            <li className="doclegal__text">Report suspicious activity where legally required</li>
            <li className="doclegal__text">Terminate accounts where verification fails</li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">8. Physical Asset Validation and Redemption</h3>
          <ul className="doclegal__links">
            <li className="doclegal__text">LCX AG acts as registered Physical Validator</li>
            <li className="doclegal__text">Underlying physical assets are held in insured custody (TotoHolding AG)</li>
            <li className="doclegal__text">Redemption availability is product-specific and may include thresholds</li>
            <li className="doclegal__text">Fees may include processing, shipping, insurance, and taxes</li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">9. Risk Disclosures</h3>
          <p className="doclegal__text privacylegal__highlight">
            IMPORTANT: Acquiring and holding TOTO Tokens involves significant risks.
          </p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Tokens are non-refundable except where legally required</li>
            <li className="doclegal__text">Tokens are provided on an &quot;as is&quot; basis without warranties</li>
            <li className="doclegal__text">Market volatility may result in partial or total loss</li>
            <li className="doclegal__text">Smart contract/network failures may cause disruptions or loss</li>
            <li className="doclegal__text">Loss of private keys leads to permanent loss of access</li>
            <li className="doclegal__text">Transactions are generally irreversible</li>
            <li className="doclegal__text">Regulatory and tax changes may adversely impact token utility/value</li>
            <li className="doclegal__text">Operational downtime or third-party failures may occur</li>
          </ul>
          <p className="doclegal__text privacylegal__highlight">
            BY ACQUIRING TOKENS, YOU ACKNOWLEDGE THAT YOU UNDERSTAND AND ACCEPT THESE RISKS.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">10. User Responsibilities</h3>
          <p className="doclegal__text">You agree to:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Use platform and tokens only for lawful purposes</li>
            <li className="doclegal__text">Comply with all applicable laws and regulations</li>
            <li className="doclegal__text">Maintain wallet/account security</li>
            <li className="doclegal__text">Provide accurate, up-to-date information</li>
          </ul>
          <p className="doclegal__text">You shall not:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Engage in money laundering or illegal activity</li>
            <li className="doclegal__text">Circumvent restrictions or verification requirements</li>
            <li className="doclegal__text">Manipulate markets or interfere with platform security</li>
            <li className="doclegal__text">Misrepresent identity or eligibility</li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">11. No Investment Advice</h3>
          <p className="doclegal__text">
            Nothing in these Terms or communications constitutes financial, investment, legal, or tax advice or a
            solicitation to invest.
          </p>
          <p className="doclegal__text">You should:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Conduct independent due diligence</li>
            <li className="doclegal__text">Consult qualified advisors</li>
            <li className="doclegal__text">Only allocate what you can afford to lose</li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">12. Intellectual Property</h3>
          <p className="doclegal__text">
            Toto Finance Inc., LCX AG, and licensors retain all rights in platform technology, trademarks, content,
            and related materials.
          </p>
          <p className="doclegal__text">A limited license is granted solely for intended platform use.</p>
          <p className="doclegal__text">You may not:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Copy, modify, or reverse engineer platform software</li>
            <li className="doclegal__text">Use trademarks without written permission</li>
            <li className="doclegal__text">Remove proprietary notices</li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">13. Limitation of Liability</h3>
          <p className="doclegal__text privacylegal__highlight">
            THE PLATFORM, TOKENS, AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT
            WARRANTIES OF ANY KIND.
          </p>
          <p className="doclegal__text">To the maximum extent permitted by law:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">No liability for indirect/incidental/consequential/punitive damages</li>
            <li className="doclegal__text">
              Total liability capped at amounts paid for tokens in the 12 months preceding claim
            </li>
            <li className="doclegal__text">
              No liability for third-party actions, network issues, or events outside reasonable control
            </li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">14–24. Additional Legal Terms</h3>
          <p className="doclegal__text">
            The following sections apply in full as set out in the source terms document: Indemnification, Refunds and
            Cancellations, Privacy and Data Protection, Tax Obligations, Force Majeure, Amendments, Severability,
            Waiver, Assignment, Entire Agreement, and Governing Law &amp; Jurisdiction.
          </p>
          <p className="doclegal__text">
            Governing law is Liechtenstein, with disputes subject to Liechtenstein courts, and arbitration in Vaduz as
            optionally elected.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">25. Contact Information</h3>
          <p className="doclegal__text">
            <strong>Toto Finance Inc.</strong> (main operator)
            <br />
            Email:{" "}
            <a href="mailto:hello@totofinance.co" className="doclegal__link">
              hello@totofinance.co
            </a>
            <br />
            Website:{" "}
            <a href="https://totofinance.co" className="doclegal__link" target="_blank" rel="noopener noreferrer">
              totofinance.co
            </a>
          </p>
          <p className="doclegal__text">
            <strong>TotoHolding AG</strong> (Liechtenstein physical custody)
            <br />
            Herrengasse 6, 9490 Vaduz, Liechtenstein
          </p>
          <p className="doclegal__text">
            Legal inquiries:{" "}
            <a href="mailto:legal@totofinance.co" className="doclegal__link">
              legal@totofinance.co
            </a>
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">26. Acknowledgment</h3>
          <p className="doclegal__text">By acquiring TOTO Tokens, you acknowledge that:</p>
          <ol className="doclegal__links">
            <li className="doclegal__text">You have read, understood, and agree to these Terms in full</li>
            <li className="doclegal__text">You understand the risk disclosures</li>
            <li className="doclegal__text">You meet all eligibility requirements</li>
            <li className="doclegal__text">You are not relying on representations outside these Terms</li>
            <li className="doclegal__text">You had the opportunity to seek independent legal/financial advice</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
