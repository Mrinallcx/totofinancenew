"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Europium";
const SLUG_PREFIX = "tokenized-europium-asset";
const CATEGORY_PATH = "europium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedEuropiumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#EFE3FF"
        heroTitle="Tokenized Europium Assets, Built for Global Markets"
        heroSubtext="Europium-backed digital assets powering displays, lighting, and security printing. 85% from one country. Now on-chain."
        ctaLabel="Explore Our Products"
        heroCtaHref="https://totofinance.co/product"
        sideCardHeading="Real Europium, Fractionalized for the Digital Economy"
        sideCardHref={null}
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$260M+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Europium produces red and blue phosphors found in every screen, LED, and secure banknote. No substitute exists. Supply cannot follow demand."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "400-500", suffix: " t", label: "Global Annual Consumption" },
          { value: "85", suffix: "%", label: "Processing Controlled by China" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED EUROPIUM"
        heading="Two Ways to Own Tokenized Europium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Europium Oxide Backing",
            body: "Every token backed 1:1 by refined europium oxide (99.99%+ Eu₂O₃) in insured, audited vaults. Always redeemable.",
            href: null,
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical europium on demand, ready for OLED phosphors, LED lighting, security printing, or nuclear use.",
            href: null,
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum. No rare earth trader required.",
            href: null,
          },
          {
            title: "In Ground Europium",
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
            body: "Secured from separation facilities in China, North America, Australia, and Brazil. No trading intermediaries.",
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
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized europium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Europium Oxide Token for vaulted oxide, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for the Display Economy"
        subBlockHeading="Instant Settlement, No Rare Earth Traders"
        subBlockSubtext="Toto Finance connects europium sources with buyers directly on chain, replacing multiple intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Europium"
        ctaHref="https://totofinance.co/product"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
