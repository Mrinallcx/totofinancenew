"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Lutetium";
const SLUG_PREFIX = "tokenized-lutetium-asset";
const CATEGORY_PATH = "lutetium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedLutetiumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#EAE6F2"
        heroTitle="Every PET Scanner Finds Cancer with Lutetium. Own It."
        heroSubtext="The rarest rare earth. 6.5 tonnes per year. $2.85M per tonne. 90% goes directly into cancer detection. Now on-chain."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Lutetium, Fractionalized for the Digital Economy"
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$48M+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Lutetium finds cancer and treats it. The world produces 6.5 tonnes per year. Demand will reach 28 tonnes by 2030. Physics sets the ceiling."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "2.8", suffix: " t", label: "Lutetium Deficit in 2025" },
          { value: "12", suffix: " t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED LUTETIUM"
        heading="Two Ways to Own Tokenized Lutetium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Lutetium Oxide Backing",
            body: "Every token backed 1:1 by refined lutetium oxide (99.99%+ Lu2O3) in insured, audited vaults. Always redeemable.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical lutetium on demand, ready for PET scintillator crystals, Lu-177 therapy production, or precision optics.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No specialist dealer access required. No minimum lot.",
          },
          {
            title: "In Ground Lutetium",
            body: "Future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on chain.",
          },
          {
            title: "Direct from Source",
            body: "Secured from ultra-purification facilities in China, Southeast Asia, North America, and Greenland. No intermediaries.",
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From ultra-purification cascade to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized lutetium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Lutetium Oxide Token for vaulted oxide, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for Oncology Supply Chains"
        subBlockHeading="Instant Settlement, No Specialist Dealers"
        subBlockSubtext="Toto Finance connects lutetium sources with buyers directly on chain, replacing eight intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Lutetium"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
