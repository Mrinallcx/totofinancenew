"use client";

import NavBar from "../components/NavBar";
import ContactUsSection from "../components/ContactUsSection";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const CONTACT_LOCAL_LINKS = [
  { label: "Overview", href: "#contact-overview" },
  { label: "Get in touch", href: "#contact-form" },
];

export default function ContactUsPageContent() {
  return (
    <main>
      <NavBar pageTitle="Contact Us" localLinks={CONTACT_LOCAL_LINKS} />
      <ContactUsSection />
      <CtaImage
        title="Ready to Build With Toto?"
        description="Tell us what you are building and our team will reach out to help with the right tokenized commodity strategy."
        primaryLabel="Open Global Market"
        primaryHref="https://app.totofinance.co/"
        secondaryLabel="Email Team"
        secondaryHref="mailto:hello@totofinance.co"
      />
      <Footer />
    </main>
  );
}
