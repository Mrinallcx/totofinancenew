"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Neodymium";
const SLUG_PREFIX = "tokenized-neodymium-asset";
const CATEGORY_PATH = "neodymium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedNeodymiumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#E5D9FF"
        heroTitle="Tokenized Neodymium Assets, Built for Global Markets"
        heroSubtext="90% of neodymium processing is in one country. Demand grows every year. A structural deficit is coming."
        ctaLabel="Explore Our Products"
        heroCtaHref="https://totofinance.co/product"
        sideCardHeading="Real Neodymium, Fractionalized for the Digital Economy"
        sideCardHref={null}
        unitsTokenizedLabel="NdFeB Magnet Market"
        unitsTokenizedValue="$16B+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="NdFeB magnets power every EV, every wind turbine, and every robot. There is no substitute. 90% of processing is in China. The deficit is structural."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "18,000", suffix: "t", label: "Neodymium Deficit in 2025" },
          { value: "45,000", suffix: "t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED NEODYMIUM"
        heading="Two Ways to Own Tokenized Neodymium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Oxide Backing",
            body: "Every token backed 1:1 by refined neodymium oxide (99.9%+ Nd₂O₃) in insured, audited vaults. Always redeemable.",
            href: null,
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical neodymium on demand, ready for NdFeB magnet alloy, EV motors, or wind turbine generators.",
            href: null,
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum tonnage. No Chinese supply chain dependency.",
            href: null,
          },
          {
            title: "In Ground Neodymium",
            body: "Future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
            href: null,
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on chain at any time.",
            href: null,
          },
          {
            title: "Direct from Source",
            body: "Secured from processing facilities in North America, Australia, Southeast Asia, and allied nations. No middlemen.",
            href: null,
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From processing to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized neodymium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Neodymium Oxide Token for vaulted oxide, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for the Electrification Supply Chain"
        subBlockHeading="Instant Settlement, No Rare Earth Traders"
        subBlockSubtext="Toto Finance connects neodymium sources with buyers directly on chain, replacing multiple intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Neodymium"
        ctaHref="https://totofinance.co/product"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
