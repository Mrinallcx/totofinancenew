"use client";

import NavBar from "../components/NavBar";
import EcosystemHero from "../components/EcosystemHero";
import TotoPrivacyPolicyLegal from "../components/TotoPrivacyPolicyLegal";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const PRIVACY_LOCAL_LINKS = [
  { label: "Overview", href: "#ecohero-heading" },
];

export default function TotoPrivacyPolicyPageContent() {
  return (
    <main>
      <NavBar pageTitle="Privacy Policy" localLinks={PRIVACY_LOCAL_LINKS} />
      <EcosystemHero
        title="Toto Privacy Policy"
        description="This page outlines how Toto Finance collects, uses, protects, and governs personal data across our platform and services."
        readMoreHref={null}
      />
      <TotoPrivacyPolicyLegal />
      <CtaImage
        title="Need Privacy or Compliance Support?"
        description="For privacy-related requests, legal inquiries, or data access concerns, contact our compliance team."
        primaryLabel="Contact Legal"
        primaryHref="mailto:legal@totofinance.co"
        secondaryLabel="View Docs"
        secondaryHref="/docs"
      />
      <Footer />
    </main>
  );
}
