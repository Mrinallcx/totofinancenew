"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Lanthanum";
const SLUG_PREFIX = "tokenized-lanthanum-asset";
const CATEGORY_PATH = "lanthanum";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedLanthanumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#F5EFE4"
        heroTitle="Every Barrel of Gasoline Is Refined Through Lanthanum."
        heroSubtext="85% of supply is in one country. Every refinery, lens, and hybrid battery depends on it. Now on-chain."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Lanthanum, Fractionalized for the Digital Economy"
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$1.8B+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Lanthanum is the most abundant rare earth yet 85% of supply comes from one country. Four independent industries depend on it. The deficit is widening."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "12,500", suffix: " t", label: "Lanthanum Deficit in 2025" },
          { value: "48,000", suffix: " t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED LANTHANUM"
        heading="Two Ways to Own Tokenized Lanthanum"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Lanthanum Oxide Backing",
            body: "Every token backed 1:1 by refined lanthanum oxide (99.9%+ La2O3) in insured, audited vaults. Always redeemable.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical lanthanum on demand, ready for FCC catalysts, optical glass, NiMH batteries, or LED phosphors.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum. No industrial procurement channel required.",
          },
          {
            title: "In Ground Lanthanum",
            body: "Future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on chain.",
          },
          {
            title: "Direct from Source",
            body: "Secured from processing facilities in China, Australia, North America, and Southeast Asia. No trading intermediaries.",
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
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized lanthanum products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Lanthanum Oxide Token for vaulted oxide, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for Industrial Supply Chains"
        subBlockHeading="Instant Settlement, No Rare Earth Traders"
        subBlockSubtext="Toto Finance connects lanthanum sources with buyers directly on chain, replacing eight intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Lanthanum"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
