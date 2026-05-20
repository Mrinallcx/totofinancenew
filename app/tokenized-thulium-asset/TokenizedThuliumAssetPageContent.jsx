"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Thulium";
const SLUG_PREFIX = "tokenized-thulium-asset";
const CATEGORY_PATH = "thulium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedThuliumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#DDEAF5"
        heroTitle="Tokenized Thulium Assets, Built for Global Markets"
        heroSubtext="Thulium-backed digital assets powering surgical lasers and portable X-rays. Scarce supply, concentrated in one country. Now on-chain."
        ctaLabel="Explore Our Products"
        heroCtaHref="https://totofinance.co/product"
        sideCardHeading="Real Thulium, Fractionalized for the Digital Economy"
        sideCardHref={null}
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$28M+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Surgical suites worldwide are adopting thulium lasers at growing rates. Supply is scarce, concentrated in one country, and demand is outpacing what the market can deliver."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "$28M", suffix: "+", label: "Global Thulium Market" },
          { value: "6-8", suffix: "%", label: "Annual Demand Growth (Medical Lasers)" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED THULIUM"
        heading="Two Ways to Own Tokenized Thulium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Thulium Oxide Backing",
            body: "Every token backed 1:1 by refined thulium oxide (99.9%+ Tm2O3) in insured, audited vaults. Always redeemable.",
            href: null,
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical thulium on demand, ready for surgical laser doping, Tm-170 X-ray sources, or superconductor synthesis.",
            href: null,
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum. No specialty dealer relationships required.",
            href: null,
          },
          {
            title: "In Ground Thulium",
            body: "Tokenized future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
            href: null,
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on chain.",
            href: null,
          },
          {
            title: "Direct from Source",
            body: "Secured directly from heavy rare earth separation facilities in China, North America, Australia, and Southeast Asia.",
            href: null,
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From fractionation to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized thulium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Thulium Oxide Token for refined, vaulted thulium, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for Medical Supply Chains"
        subBlockHeading="Instant Settlement, No Specialty Dealers"
        subBlockSubtext="Toto Finance connects thulium sources with buyers directly on chain, replacing multiple intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Thulium"
        ctaHref="https://totofinance.co/product"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
