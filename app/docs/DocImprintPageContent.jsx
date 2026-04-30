"use client";

import NavBar from "../components/NavBar";
import EcosystemHero from "../components/EcosystemHero";
import EcosystemCards from "../components/EcosystemCards";
import DocImprintLegal from "../components/DocImprintLegal";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const DOC_LOCAL_LINKS = [
  { label: "Overview", href: "#ecohero-heading" },
];

/* ── SVG icon helpers ─────────────────────────────── */

function IconReport() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216ZM168,144a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,144Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,176Z" fill="currentColor" />
    </svg>
  );
}

function IconShieldCheck() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M208,40H48A16,16,0,0,0,32,56v58.77c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" fill="currentColor" />
    </svg>
  );
}

function IconGlobe() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.56,87.56,0,0,1-3.33,24H174.16a157.44,157.44,0,0,0,0-48h38.51A87.56,87.56,0,0,1,216,128ZM40,128a87.56,87.56,0,0,1,3.33-24H81.84a157.44,157.44,0,0,0,0,48H43.33A87.56,87.56,0,0,1,40,128ZM154.36,56.64A87.8,87.8,0,0,1,196.81,88H160.64A143.15,143.15,0,0,0,154.36,56.64ZM128,40c1.74,0,13.67,9.2,22.52,48H105.48C114.33,49.2,126.26,40,128,40ZM101.64,56.64A143.15,143.15,0,0,0,95.36,88H59.19A87.8,87.8,0,0,1,101.64,56.64ZM59.19,168H95.36a143.15,143.15,0,0,0,6.28,31.36A87.8,87.8,0,0,1,59.19,168Zm46.29,0h45c-4.22,18.48-11.34,32.52-17,40.91C127.38,208.86,120.32,194.83,105.48,168Zm48.88,31.36A143.15,143.15,0,0,0,160.64,168h36.17A87.8,87.8,0,0,1,154.36,199.36ZM97.84,104h60.32a141.22,141.22,0,0,1,0,48H97.84a141.22,141.22,0,0,1,0-48Z" fill="currentColor" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31,40,179.31V200H224A8,8,0,0,1,232,208Z" fill="currentColor" />
    </svg>
  );
}

function IconCardano() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z" fill="currentColor" />
    </svg>
  );
}

function IconMedia() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z" fill="currentColor" />
    </svg>
  );
}

/* ── SLOT 1 — Publication tabs (6 cards) ─────────── */

const SECTION_1_CARDS = [
  {
    key: "tokenization-report",
    tag: "Tokenization Report",
    title: "Tokenization Report 2025-2030",
    body: "Independent research analyzing the impact of tokenization on commodities markets, capital markets, and real world value.",
    icon: <IconReport />,
    href: "https://toto-finance.s3.us-east-1.amazonaws.com/Updated%2BTokenization%2BReport.pdf",
  },
  {
    key: "mica-whitepaper",
    tag: "MiCA Whitepaper",
    title: "MiCA-Compliant Whitepaper",
    body: "The official regulatory whitepaper covering Toto Finance infrastructure, tokenization framework, and MiCA compliance.",
    icon: <IconShieldCheck />,
    href: "https://toto-finance.s3.us-east-1.amazonaws.com/Toto+Finance+-+TOTO+MiCAR+White+Paper+-+EU_EEA+Edition.pdf",
  },
  {
    key: "global-whitepaper",
    tag: "Global Whitepaper",
    title: "Total Tokenization: Global Vision and Architecture",
    body: "The international whitepaper covering platform architecture, asset coverage, settlement layers, and programmable real world assets.",
    icon: <IconGlobe />,
    href: "https://toto-finance.s3.us-east-1.amazonaws.com/Toto+Finance+-+TOTO+White+Paper+-+International+Edition.pdf",
  },
  {
    key: "dc-summit",
    tag: "DC Summit Report",
    title: "The Future of Asset Tokenization",
    body: "Strategic research from the first Crypto Summit in Washington D.C. analyzing blockchain infrastructure impact on global markets by 2030.",
    icon: <IconChart />,
    href: "https://toto-finance.s3.us-east-1.amazonaws.com/Tokenization%2BReport%2B2025-2030.pdf",
  },
  {
    key: "cardano-case-study",
    tag: "Cardano Case Study",
    title: "Cardano Foundation Case Study: Toto Finance",
    body: "An institutional case study analyzing Toto Finance's approach to real world asset tokenization, focusing on security and production-level implementation.",
    icon: <IconCardano />,
    href: "https://cardanofoundation.org/case-studies/toto-finance",
  },
  {
    key: "media-kit",
    tag: "Media Kit",
    title: "Media Kit",
    body: "Official Toto Finance logos, brand assets, and approved media resources for partners, media, and third-party use.",
    icon: <IconMedia />,
    href: "https://www.notion.so/Toto-Finance-Media-Kit-2d1797abde9e803fb0f0c0eed0d72f97",
  },
];

export default function DocImprintPageContent() {
  return (
    <main>
      <NavBar pageTitle="Doc & Imprint" localLinks={DOC_LOCAL_LINKS} />
      <EcosystemHero
        title="Official Publications and Resources"
        description="Access official publications, regulatory documents, and resources from Toto Finance."
        readMoreHref="https://totofinance.co/blog"
      />
      <EcosystemCards cards={SECTION_1_CARDS} columns={3} label="Publications and resources" />
      <DocImprintLegal />
      <CtaImage
        title="Questions or Legal Inquiries?"
        description="For compliance, legal, or partnership inquiries, reach out to the Toto Finance team directly."
        primaryLabel="Get started"
        primaryHref="https://app.totofinance.co/"
        secondaryLabel="Contact us"
        secondaryHref="mailto:hello@totofinance.co"
      />
      <Footer />
    </main>
  );
}
