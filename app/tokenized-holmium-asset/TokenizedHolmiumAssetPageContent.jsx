"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Holmium";
const SLUG_PREFIX = "tokenized-holmium-asset";
const CATEGORY_PATH = "holmium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedHolmiumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#F2DDE3"
        heroTitle="Tokenized Holmium Assets, Built for Global Markets"
        heroSubtext="Holmium-backed digital assets powering surgical lasers, nuclear systems, and quantum magnets. 85% of processing in one country. Now on-chain."
        ctaLabel="Explore Our Products"
        heroCtaHref="https://totofinance.co/product"
        sideCardHeading="Real Holmium, Fractionalized for the Digital Economy"
        sideCardHref={null}
        unitsTokenizedLabel="Annual Production"
        unitsTokenizedValue="~10-20t"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Surgeons worldwide depend on holmium lasers. The world produces just 15-20 tonnes per year. Demand is growing. No mine can fix this."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "15-20", suffix: "t", label: "Global Annual Production (USGS / Spherical Insights)" },
          { value: "85", suffix: "%", label: "Processing Controlled by China" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED HOLMIUM"
        heading="Two Ways to Own Tokenized Holmium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Holmium Oxide Backing",
            body: "Every token backed 1:1 by refined holmium oxide (99.9%+ Ho2O3) in insured, audited vaults. Always redeemable.",
            href: null,
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical holmium on demand, ready for surgical laser crystals, nuclear control rods, or magnetic materials.",
            href: null,
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement in USDC, USDT, or USAT. No specialist dealer required.",
            href: null,
          },
          {
            title: "In Ground Holmium",
            body: "Future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
            href: null,
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on chain.",
            href: null,
          },
          {
            title: "Direct from Source",
            body: "Secured from heavy rare earth separation facilities in China, Australia, North America, and Southeast Asia. No middlemen.",
            href: null,
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From separation to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized holmium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Holmium Oxide Token for vaulted oxide, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for Surgical Supply Chains"
        subBlockHeading="Instant Settlement, No Specialist Dealers"
        subBlockSubtext="Toto Finance connects holmium sources with buyers directly on chain, replacing multiple intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Holmium"
        ctaHref="https://totofinance.co/product"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
