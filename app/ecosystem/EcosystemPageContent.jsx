"use client";

import NavBar from "../components/NavBar";
import EcosystemHero from "../components/EcosystemHero";
import EcosystemCards from "../components/EcosystemCards";
import EcosystemCaseStudies from "../components/EcosystemCaseStudies";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const ECO_LOCAL_LINKS = [
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

function IconLightning() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,12.95l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z" fill="currentColor" />
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

function IconWallet() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M216,72H56a8,8,0,0,1,0-16H192a8,8,0,0,0,0-16H56A24,24,0,0,0,32,64V192a24,24,0,0,0,24,24H216a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72Zm0,128H56a8,8,0,0,1-8-8V86.63A23.84,23.84,0,0,0,56,88H216Zm-36-56a12,12,0,1,1,12-12A12,12,0,0,1,180,144Z" fill="currentColor" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,41.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40.12q-2.16-.06-4.32,0L107.2,25.2a8,8,0,0,0-7.06-1.49A107.71,107.71,0,0,0,73.89,34.58a8,8,0,0,0-3.94,6L67.31,64.3q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.93,107.21,107.21,0,0,0-10.88,26.25,8,8,0,0,0,1.48,7.06L40.12,125.84q-.06,2.16,0,4.32L25.2,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,214.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49l18.64-14.92q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.49,107.71,107.71,0,0,0,26.25-10.87,8,8,0,0,0,3.94-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.93,107.21,107.21,0,0,0,10.88-26.25,8,8,0,0,0-1.48-7.06ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" fill="currentColor" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="ecocards__svg">
      <path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z" fill="currentColor" />
    </svg>
  );
}

/* ── Section 1 — 3 cards + 2 cards (5 total) ─────── */

const SECTION_1_CARDS = [
  {
    key: "blockchains",
    tag: "Blockchains",
    title: "Blockchain and Settlement Layers",
    body: "Multi-chain infrastructure across Cardano, Ethereum, Polygon, Solana, and XRP Ledger for global commodity settlement and interoperability.",
    icon: <IconDeFi />,
  },
  {
    key: "validation",
    tag: "Validation",
    title: "Physical Validation",
    body: "LCX serves as Physical Validator under the Liechtenstein Blockchain Act, providing legally binding connection between physical assets and on-chain tokens.",
    icon: <IconInfra />,
  },
  {
    key: "certification",
    tag: "Certification",
    title: "Diamond Certification",
    body: "GIA, the world's most trusted diamond grading authority, ensures standardized and verifiable origin and quality for all tokenized diamonds.",
    icon: <IconPartners />,
  },
  {
    key: "security",
    tag: "Security",
    title: "Smart Contract Audits",
    body: "Hacken provides specialized cybersecurity services including smart contract audits, infrastructure security analysis, and ongoing risk monitoring.",
    icon: <IconShield />,
  },
  {
    key: "tokenization",
    tag: "Tokenization",
    title: "Compliant Token Issuance",
    body: "NMKR provides compliant institutional tokenization infrastructure on Cardano, supporting regulated digital assets with lifecycle management and programmable ownership.",
    icon: <IconGlobe />,
  },
];

/* ── Section 2 — 3 cards ─────────────────────────── */

const SECTION_2_CARDS = [
  {
    key: "liquidity",
    tag: "Liquidity",
    title: "Decentralized Liquidity",
    body: "Uniswap provides secondary market access, price discovery, and on-chain settlement for supported tokenized assets.",
    icon: <IconLightning />,
  },
  {
    key: "compliance",
    tag: "Compliance",
    title: "Programmable Compliance",
    body: "KYC, AML, and jurisdiction-specific transfer rules enforced programmatically at the protocol level across all tokenized assets.",
    icon: <IconChart />,
  },
  {
    key: "custody",
    tag: "Custody",
    title: "Institutional Custody",
    body: "Third-party insured vaults with warehouse warrants, independent audits, and legally enforceable asset backing for all physical commodities.",
    icon: <IconWallet />,
  },
];

/* ── Section 3 — 2 cards ─────────────────────────── */

const SECTION_3_CARDS = [
  {
    key: "data",
    tag: "Data",
    title: "On-Chain Data and Reserves",
    body: "Proof of reserves, oracle validation, and immutable on-chain audit reports providing complete transparency for every listed asset.",
    icon: <IconGear />,
  },
  {
    key: "settlement",
    tag: "Settlement",
    title: "Atomic Settlement",
    body: "Delivery versus payment settlement with stablecoin integration, wallet whitelisting, and permissioned transfers removing counterparty risk.",
    icon: <IconLock />,
  },
];

export default function EcosystemPageContent() {
  return (
    <main>
      <NavBar pageTitle="Ecosystem" localLinks={ECO_LOCAL_LINKS} />
      <EcosystemHero />
      <EcosystemCards cards={SECTION_1_CARDS} columns={3} label="Ecosystem pillars" />
      <EcosystemCards cards={SECTION_2_CARDS} columns={3} label="Ecosystem capabilities" />
      <EcosystemCards cards={SECTION_3_CARDS} columns={2} label="Ecosystem governance" />
      <EcosystemCaseStudies />
      <CtaImage />
      <Footer />
    </main>
  );
}
