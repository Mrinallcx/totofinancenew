"use client";

import useScrollReveal from "../hooks/useScrollReveal";
import "./DocImprintLegal.css";
import "./TotoPrivacyPolicyLegal.css";

export default function TotoPrivacyPolicyLegal() {
  const sectionRef = useScrollReveal();

  return (
    <section className="doclegal privacylegal" aria-labelledby="privacy-legal-heading" ref={sectionRef}>
      <div className="doclegal__inner">
        <h2 className="doclegal__heading sr-item" id="privacy-legal-heading">
          Privacy Policy
        </h2>

        <div className="doclegal__section doclegal__section--full sr-item">
          <p className="doclegal__text">
            <strong>Last updated: February 2026</strong>
          </p>
          <p className="doclegal__text">
            This Privacy Policy explains how Toto Finance Inc. collects, uses, stores, and protects personal data in
            connection with its platform and services.
          </p>
          <p className="doclegal__text">
            Toto Finance Inc. is a U.S.-based infrastructure company providing technology for the tokenization,
            settlement, and lifecycle management of real-world assets, including commodities, metals, energy-related
            assets, and in-ground reserves.
          </p>
          <p className="doclegal__text">This policy applies to:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Websites and digital platforms</li>
            <li className="doclegal__text">Investor, partner, and user onboarding</li>
            <li className="doclegal__text">Use of services and infrastructure</li>
            <li className="doclegal__text">Communications with Toto Finance</li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Data controller</h3>
          <p className="doclegal__text">
            Toto Finance Inc.
            <br />
            447 Broadway, 2nd Floor, 3342, New York, NY 10013, United States
          </p>
          <p className="doclegal__text">
            Local representatives or regulated partners may be appointed where required by law.
          </p>
          <p className="doclegal__text">
            Data Protection Officer:{" "}
            <a href="mailto:dpo@totofinance.co" className="doclegal__link">
              dpo@totofinance.co
            </a>
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Information we collect</h3>
          <p className="doclegal__text">
            <strong>Personal information:</strong> Name; email address; phone number; company name; role and
            professional information; identification documents where required for compliance.
          </p>
          <p className="doclegal__text">
            <strong>Account and transaction information:</strong> Wallet addresses; transaction identifiers; account
            credentials; access logs; asset ownership or participation records.
          </p>
          <p className="doclegal__text">
            <strong>Technical and usage information:</strong> IP address; browser type; device identifiers; log files;
            platform interaction data; security and access monitoring data.
          </p>
          <p className="doclegal__text">
            <strong>Communications:</strong> Emails; messages; meeting correspondence; investor or partner
            communications; support inquiries and responses.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">How we use information</h3>
          <p className="doclegal__text">
            <strong>Service provision:</strong> Operate, maintain, and improve the platform and services.
          </p>
          <p className="doclegal__text">
            <strong>Compliance and risk management:</strong> Meet legal, regulatory, KYC/AML, and sanctions
            obligations.
          </p>
          <p className="doclegal__text">
            <strong>Security and integrity:</strong> Prevent fraud, unauthorized access, and misuse of the platform.
          </p>
          <p className="doclegal__text">
            <strong>Business operations:</strong> Manage relationships with investors, partners, and asset owners.
          </p>
          <p className="doclegal__text">
            <strong>Communications:</strong> Provide updates, respond to inquiries, and manage contractual
            relationships.
          </p>
          <p className="doclegal__text privacylegal__highlight">Personal data is not sold.</p>
          <p className="doclegal__text privacylegal__highlight">
            <strong>Automated decision-making:</strong> Automated systems may be used for compliance screening such as
            sanctions checks and KYC verification. Users may request human review of automated decisions that
            significantly affect them.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Legal basis for processing</h3>
          <p className="doclegal__text">
            <strong>Contract performance:</strong> Account creation, transaction processing, and service delivery.
          </p>
          <p className="doclegal__text">
            <strong>Legal obligations:</strong> KYC/AML verification, sanctions screening, and regulatory reporting.
          </p>
          <p className="doclegal__text">
            <strong>Legitimate interests:</strong> Platform security, fraud prevention, and service improvement.
          </p>
          <p className="doclegal__text">
            <strong>Consent:</strong> Marketing communications and optional analytics.
          </p>
          <p className="doclegal__text">Legitimate interests are balanced against user rights and interests.</p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Sharing and disclosure</h3>
          <p className="doclegal__text">We may share data with service providers and partners, including:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Identity verification and KYC/AML providers</li>
            <li className="doclegal__text">Blockchain analytics providers</li>
            <li className="doclegal__text">Cloud infrastructure and hosting services</li>
            <li className="doclegal__text">Custody and settlement partners</li>
            <li className="doclegal__text">Legal and compliance advisors</li>
            <li className="doclegal__text">Audit and accounting firms</li>
          </ul>
          <p className="doclegal__text">
            Data may be disclosed to comply with applicable laws or lawful requests.
          </p>
          <p className="doclegal__text">
            Data may be shared during mergers, acquisitions, financing, or restructuring with appropriate safeguards.
          </p>
          <p className="doclegal__text">
            Non-identifiable data may be used for analytics, research, or reporting.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">International data transfers</h3>
          <p className="doclegal__text">
            Personal data may be transferred internationally, including to the United States and Europe.
          </p>
          <p className="doclegal__text">Transfer safeguards include:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Standard Contractual Clauses approved by the European Commission</li>
            <li className="doclegal__text">Binding Corporate Rules where applicable</li>
            <li className="doclegal__text">Explicit user consent for specific transfers</li>
          </ul>
          <p className="doclegal__text privacylegal__highlight">
            For details, contact{" "}
            <a href="mailto:privacy@totofinance.co" className="doclegal__link">
              privacy@totofinance.co
            </a>
            .
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Data security</h3>
          <p className="doclegal__text">We implement measures including:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Access controls and role-based permissions</li>
            <li className="doclegal__text">Encryption in transit and at rest</li>
            <li className="doclegal__text">Secure data storage and transmission</li>
            <li className="doclegal__text">Security monitoring and logging</li>
            <li className="doclegal__text">Regular security assessments and audits</li>
          </ul>
          <p className="doclegal__text">
            Absolute security cannot be guaranteed, but data protection practices are continuously reviewed.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Data retention</h3>
          <ul className="doclegal__links">
            <li className="doclegal__text">Account and identity information: Duration of account plus 7 years</li>
            <li className="doclegal__text">Off-chain transaction records: 7 years from transaction date</li>
            <li className="doclegal__text">On-chain transaction records: Permanent due to blockchain immutability</li>
            <li className="doclegal__text">KYC/AML documentation: 7 years after relationship ends</li>
            <li className="doclegal__text">Communications and support: 3 years from last contact</li>
            <li className="doclegal__text">Technical logs: 12 months</li>
            <li className="doclegal__text">Marketing preferences: Until consent is withdrawn</li>
          </ul>
          <p className="doclegal__text">
            Retention may be extended for legal, regulatory, or litigation reasons.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Your rights</h3>
          <p className="doclegal__text">You may have the right to:</p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Access: Request a copy of personal data</li>
            <li className="doclegal__text">Correction: Request correction of inaccurate or incomplete data</li>
            <li className="doclegal__text">Deletion: Request erasure of personal data</li>
            <li className="doclegal__text">Restriction: Request limitation of processing</li>
            <li className="doclegal__text">Portability: Receive data in a structured, machine-readable format</li>
            <li className="doclegal__text">Objection: Object to processing based on legitimate interests</li>
            <li className="doclegal__text">Withdraw consent: Where applicable</li>
            <li className="doclegal__text">Automated decisions: Request human review of automated decisions</li>
          </ul>
          <p className="doclegal__text privacylegal__highlight">
            <strong>How to exercise:</strong> Contact{" "}
            <a href="mailto:privacy@totofinance.co" className="doclegal__link">
              privacy@totofinance.co
            </a>
            . We aim to respond within 30 days or as required by law. Identity verification may be required before
            processing requests.
          </p>
          <p className="doclegal__text">
            You have the right to complain to a supervisory authority, including:
          </p>
          <ul className="doclegal__links">
            <li className="doclegal__text">Liechtenstein Data Protection Office</li>
            <li className="doclegal__text">EU/EEA national Data Protection Authority</li>
            <li className="doclegal__text">UK Information Commissioner&apos;s Office</li>
            <li className="doclegal__text">Swiss Federal Data Protection and Information Commissioner</li>
          </ul>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Cookies and tracking</h3>
          <ul className="doclegal__links">
            <li className="doclegal__text">
              Strictly necessary: Platform functionality, security, and authentication (Session)
            </li>
            <li className="doclegal__text">
              Analytics: Understand platform usage and performance (Up to 12 months)
            </li>
            <li className="doclegal__text">Preferences: Remember user settings and choices (Up to 12 months)</li>
          </ul>
          <p className="doclegal__text">No third-party advertising cookies are used.</p>
          <p className="doclegal__text">Cookie preferences can be managed through browser settings.</p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Children&apos;s data</h3>
          <p className="doclegal__text">Services are not intended for individuals under 18 years of age.</p>
          <p className="doclegal__text">Any personal data collected from minors will be deleted promptly.</p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Changes to this policy</h3>
          <p className="doclegal__text">
            This policy may be updated to reflect service, operational, or legal changes. Changes are effective upon
            posting.
          </p>
          <p className="doclegal__text">Material changes may be communicated via platform or email.</p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Regional provisions</h3>
          <h4 className="doclegal__title">California (CCPA / CPRA)</h4>
          <p className="doclegal__text">
            You may have the right to: know what personal information is collected, used, and shared; delete personal
            information; opt out of sale or sharing; and non-discrimination.
          </p>
          <p className="doclegal__text">
            Personal information is not sold or shared for cross-context behavioral advertising.
          </p>
          <h4 className="doclegal__title">EEA / UK (GDPR, UK GDPR)</h4>
          <p className="doclegal__text">
            See the user rights and legal bases sections above. Contact{" "}
            <a href="mailto:privacy@totofinance.co" className="doclegal__link">
              privacy@totofinance.co
            </a>
            .
          </p>
          <h4 className="doclegal__title">Switzerland</h4>
          <p className="doclegal__text">
            Processing may be subject to the Federal Act on Data Protection. You may contact the Federal Data
            Protection and Information Commissioner.
          </p>
        </div>

        <div className="doclegal__section doclegal__section--full sr-item">
          <h3 className="doclegal__subtitle">Contact information</h3>
          <ul className="doclegal__links">
            <li className="doclegal__text">
              General inquiries:{" "}
              <a href="mailto:hello@totofinance.co" className="doclegal__link">
                hello@totofinance.co
              </a>
            </li>
            <li className="doclegal__text">
              Privacy and data protection:{" "}
              <a href="mailto:privacy@totofinance.co" className="doclegal__link">
                privacy@totofinance.co
              </a>
            </li>
            <li className="doclegal__text">
              Data Protection Officer:{" "}
              <a href="mailto:dpo@totofinance.co" className="doclegal__link">
                dpo@totofinance.co
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
