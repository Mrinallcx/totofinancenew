"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Cerium";
const SLUG_PREFIX = "tokenized-cerium-asset";
const CATEGORY_PATH = "cerium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedCeriumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#F7EFD8"
        heroTitle="Every Catalytic Converter Depends on Cerium. Everyone Deserves Access to It."
        heroSubtext="88% of global cerium supply comes from one country, yet every catalytic converter and every polished screen depends on it. Toto Finance makes cerium ownership instant, borderless, and open to everyone."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Cerium, Tokenized for the World"
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$2.4B+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Cerium is inside every catalytic converter, every polished screen, and every diesel engine meeting emission standards. Yet 88% of global supply comes from China, and demand is accelerating faster than supply can follow."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "18,500", suffix: " t", label: "Cerium Deficit in 2025" },
          { value: "65,000", suffix: " t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED CERIUM"
        heading="Two Ways to Own Tokenized Cerium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Cerium Oxide Backing",
            body: "Every token backed 1:1 by refined cerium oxide (99.5%+ CeO2) in insured, audited vaults. Ready for industrial use. Always redeemable.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical cerium on demand, ready for catalytic converter production, glass polishing, and diesel fuel additives.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement in USDC, USDT, or USAT. No minimum tonnage. No logistics.",
          },
          {
            title: "In Ground Cerium",
            body: "Tokenized future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years) options.",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on the blockchain at any time.",
          },
          {
            title: "Direct from Source",
            body: "Sourced directly from rare earth mining companies in China, North America, Australia, Southeast Asia, and Brazil. No middlemen.",
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From rare earth mine to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized cerium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Cerium Oxide Token for refined, vaulted cerium, or In-Ground Cerium contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical cerium delivery.",
          },
        ]}
        subBlockOverline="Built for the Clean Energy Era"
        subBlockHeading="Instant Settlement, No Banks, No Brokers"
        subBlockSubtext="Toto Finance connects cerium producers with buyers directly on chain, replacing eight intermediaries with T+0 settlement in stablecoins."
        ctaLabel="Explore Cerium"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
