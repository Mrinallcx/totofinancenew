"use client";

import NavBar from "../components/NavBar";
import EcosystemHero from "../components/EcosystemHero";
import EcosystemCards from "../components/EcosystemCards";
import DocImprintLegal from "../components/DocImprintLegal";
import EcosystemCaseStudies from "../components/EcosystemCaseStudies";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const DOC_LOCAL_LINKS = [
  { label: "Overview", href: "#ecohero-heading" },
];

/* ── SVG icon helpers ─────────────────────────────── */

function IconDeFi() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M207.58,63.84C186.85,53.48,159.33,48,128,48S69.15,53.48,48.42,63.84,16,88.78,16,104v48c0,15.22,11.82,29.85,32.42,40.16S96.67,208,128,208s58.85-5.48,79.58-15.84S240,167.22,240,152V104C240,88.78,228.18,74.15,207.58,63.84ZM128,64c62.64,0,96,23.23,96,40s-33.36,40-96,40-96-23.23-96-40S65.36,64,128,64Zm-8,95.86v32c-19-.62-35-3.42-48-7.49V153.05A203.43,203.43,0,0,0,120,159.86Zm16,0a203.43,203.43,0,0,0,48-6.81v31.31c-13,4.07-29,6.87-48,7.49ZM32,152V133.53a82.88,82.88,0,0,0,16.42,10.63c2.43,1.21,5,2.35,7.58,3.43V178C40.17,170.16,32,160.29,32,152Zm168,26V147.59c2.61-1.08,5.15-2.22,7.58-3.43A82.88,82.88,0,0,0,224,133.53V152C224,160.29,215.83,170.16,200,178Z" fill="currentColor" />
    </svg>
  );
}

function IconInfra() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z" fill="currentColor" />
    </svg>
  );
}

function IconPartners() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M27.2,126.4a8,8,0,0,0,11.2-1.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,93.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,115.2,8,8,0,0,0,27.2,126.4ZM176,40a24,24,0,1,1-24,24A24,24,0,0,1,176,40ZM80,40A24,24,0,1,1,56,64,24,24,0,0,1,80,40ZM203,197.51a40,40,0,1,0-53.94,0,67.27,67.27,0,0,0-21,14.31,67.27,67.27,0,0,0-21-14.31,40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,25.6,219.2a8,8,0,1,0,12.8,9.6,52,52,0,0,1,83.2,0,8,8,0,0,0,11.2,1.59,7.73,7.73,0,0,0,1.59-1.59h0a52,52,0,0,1,83.2,0,8,8,0,0,0,12.8-9.61A67.85,67.85,0,0,0,203,197.51ZM80,144a24,24,0,1,1-24,24A24,24,0,0,1,80,144Zm96,0a24,24,0,1,1-24,24A24,24,0,0,1,176,144Z" fill="currentColor" />
    </svg>
  );
}

function IconShield() {
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

/* ── Section 1 — 5 cards ─────────────────────────── */

const SECTION_1_CARDS = [
  {
    key: "defi",
    tag: "DeFi",
    body: "We integrate with leading DeFi platforms to enable seamless lending, borrowing, and yield generation",
    icon: <IconDeFi />,
  },
  {
    key: "infrastructure",
    tag: "Infrastructure",
    body: "Enterprise-grade custody, settlement, and compliance tooling built for scale",
    icon: <IconInfra />,
  },
  {
    key: "partners",
    tag: "Partners",
    body: "We connect regulated financial services with blockchain-native ecosystems worldwide",
    icon: <IconPartners />,
  },
  {
    key: "security",
    tag: "Security",
    body: "Multi-layer security architecture with real-time threat detection and automated incident response",
    icon: <IconShield />,
  },
  {
    key: "global",
    tag: "Global Reach",
    body: "Operating across 40+ jurisdictions with region-specific compliance and localized settlement rails",
    icon: <IconGlobe />,
  },
  {
    key: "regulatory",
    tag: "Regulatory",
    body: "Comprehensive regulatory filings and disclosure documents ensuring full transparency and compliance",
    icon: <IconShield />,
  },
];

export default function DocImprintPageContent() {
  return (
    <main>
      <NavBar pageTitle="Doc & Imprint" localLinks={DOC_LOCAL_LINKS} />
      <EcosystemHero
        title="Official Publications & Resources"
        description="Access official publications, regulatory documents, and resources from Toto Finance."
      />
      <EcosystemCards cards={SECTION_1_CARDS} columns={3} label="Publications pillars" />
      <DocImprintLegal />
      <EcosystemCaseStudies />
      <CtaImage />
      <Footer />
    </main>
  );
}
