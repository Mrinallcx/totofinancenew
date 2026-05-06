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
        heroTitle="Every Electric Motor Depends on Neodymium. Own It."
        heroSubtext="87% of neodymium processing is in one country. Demand grows 12% per year. A 45,000 tonne deficit is coming."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Neodymium, Fractionalized for the Digital Economy"
        unitsTokenizedLabel="NdFeB Magnet Market"
        unitsTokenizedValue="$12B+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="NdFeB magnets power every EV, every wind turbine, and every robot. There is no substitute. 87% of processing is in China. The deficit is structural."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "18,000", suffix: " t", label: "Neodymium Deficit in 2025" },
          { value: "45,000", suffix: " t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED NEODYMIUM"
        heading="Two Ways to Own Tokenized Neodymium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Neodymium Oxide Backing",
            body: "Every token backed 1:1 by refined neodymium oxide (99.9%+ Nd2O3) in insured, audited vaults. Always redeemable.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical neodymium on demand, ready for NdFeB magnet alloy, EV motors, or wind turbine generators.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum tonnage. No Chinese supply chain dependency.",
          },
          {
            title: "In Ground Neodymium",
            body: "Future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on chain.",
          },
          {
            title: "Direct from Source",
            body: "Secured from processing facilities in North America, Australia, Southeast Asia, and allied nations. No middlemen.",
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From rare earth processing to wallet, instantly"
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
        subBlockSubtext="Toto Finance connects neodymium sources with buyers directly on chain, replacing eight intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Neodymium"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
