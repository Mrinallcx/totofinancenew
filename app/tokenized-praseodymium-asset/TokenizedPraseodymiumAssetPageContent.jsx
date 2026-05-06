"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Praseodymium";
const SLUG_PREFIX = "tokenized-praseodymium-asset";
const CATEGORY_PATH = "praseodymium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedPraseodymiumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#DDF3DF"
        heroTitle="No Permanent Magnet Works Without Praseodymium. Own It."
        heroSubtext="The overlooked half of every NdPr magnet. 90% from one country. An 11,500 tonne deficit by 2030. Now on-chain."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Praseodymium, Fractionalized for the Digital Economy"
        unitsTokenizedLabel="NdPr Magnet Market"
        unitsTokenizedValue="$12B+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Every neodymium magnet contains praseodymium. Same supply concentration. Same deficit. Same demand drivers. But far less market attention, and a structurally identical shortage."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "8,200", suffix: " t", label: "Praseodymium Deficit in 2025" },
          { value: "11,500", suffix: " t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED PRASEODYMIUM"
        heading="Two Ways to Own Tokenized Praseodymium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Praseodymium Oxide Backing",
            body: "Every token backed 1:1 by refined praseodymium oxide (99.5%+ Pr6O11) in insured, audited vaults. Always redeemable.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical praseodymium on demand, ready for NdPr magnet alloy, aerospace components, or specialty industrial use.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum. No bundled NdPr procurement required.",
          },
          {
            title: "In Ground Praseodymium",
            body: "Future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on chain.",
          },
          {
            title: "Direct from Source",
            body: "Secured from NdPr separation facilities in North America, Australia, Southeast Asia, and Africa. No middlemen.",
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From NdPr separation to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized praseodymium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Praseodymium Oxide Token for vaulted oxide, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for the Electrification Supply Chain"
        subBlockHeading="Instant Settlement, No Rare Earth Traders"
        subBlockSubtext="Toto Finance connects praseodymium sources with buyers directly on chain, replacing eight intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Praseodymium"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
