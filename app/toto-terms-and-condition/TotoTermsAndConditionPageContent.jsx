"use client";

import NavBar from "../components/NavBar";
import EcosystemHero from "../components/EcosystemHero";
import TotoTermsAndConditionLegal from "../components/TotoTermsAndConditionLegal";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const TERMS_LOCAL_LINKS = [
  { label: "Overview", href: "#ecohero-heading" },
];

export default function TotoTermsAndConditionPageContent() {
  return (
    <main>
      <NavBar pageTitle="Terms and Conditions" localLinks={TERMS_LOCAL_LINKS} />
      <EcosystemHero
        title="Toto Terms and Conditions"
        description="These terms govern token acquisition, platform use, compliance obligations, and legal responsibilities across the Toto Finance ecosystem."
        readMoreHref={null}
      />
      <TotoTermsAndConditionLegal />
      <CtaImage
        title="Need Legal Clarification?"
        description="For legal, compliance, or token-sale-related questions, reach out to our legal team."
        primaryLabel="Contact Legal"
        primaryHref="mailto:legal@totofinance.co"
        secondaryLabel="View Privacy Policy"
        secondaryHref="/toto-privacy-policy"
      />
      <Footer />
    </main>
  );
}
