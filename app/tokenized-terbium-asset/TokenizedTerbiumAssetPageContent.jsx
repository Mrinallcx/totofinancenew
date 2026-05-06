"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Terbium";
const SLUG_PREFIX = "tokenized-terbium-asset";
const CATEGORY_PATH = "terbium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedTerbiumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#DDF1E8"
        heroTitle="The Magnet Stabilizer. 90% from One Country. Now On-Chain."
        heroSubtext="Without terbium, every EV motor and wind turbine magnet demagnetizes at operating temperature. Toto Finance opens access for everyone."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Terbium, Fractionalized for the Digital Economy"
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$1.8B+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Terbium is ten times scarcer than neodymium in every ore body on earth. Four industries depend on it. China controls 90% of supply. The deficit is structural."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "340", suffix: " t", label: "Global Terbium Demand Today" },
          { value: "120", suffix: " t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED TERBIUM"
        heading="Two Ways to Own Tokenized Terbium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Terbium Oxide Backing",
            body: "Every token backed 1:1 by refined terbium oxide (99.9%+ Tb4O7) in insured, audited vaults. Always redeemable.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical terbium on demand, ready for magnet diffusion, green phosphor synthesis, or Terfenol-D production.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum tonnage. No Chinese export trader access required.",
          },
          {
            title: "In Ground Terbium",
            body: "Future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on chain.",
          },
          {
            title: "Direct from Source",
            body: "Secured from heavy rare earth separation facilities in China, Myanmar, Australia, and North America. No middlemen.",
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From heavy rare earth separation to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized terbium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Terbium Oxide Token for vaulted terbium, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for Magnet Supply Chains"
        subBlockHeading="Instant Settlement, No Chinese Export Traders"
        subBlockSubtext="Toto Finance connects terbium sources with buyers directly on chain, replacing eight intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Terbium"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
