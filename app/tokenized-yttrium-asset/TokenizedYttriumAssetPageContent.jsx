"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Yttrium";
const SLUG_PREFIX = "tokenized-yttrium-asset";
const CATEGORY_PATH = "yttrium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedYttriumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#DFF4F7"
        heroTitle="Every White LED. Every Jet Engine. Every Laser. Now On-Chain."
        heroSubtext="95% of global yttrium supply comes from one country. Toto Finance makes ownership instant, borderless, and open to everyone."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Yttrium, Fractionalized for the Digital Economy"
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$2.9B+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Five independent industries chose yttrium independently. None found a substitute. All are growing. And 95% of supply answers to one country."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "3,600", suffix: " t", label: "Yttrium Deficit in 2025" },
          { value: "12,000", suffix: " t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED YTTRIUM"
        heading="Two Ways to Own Tokenized Yttrium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Yttrium Oxide Backing",
            body: "Every token backed 1:1 by refined yttrium oxide (99.999%+ Y2O3) in insured, audited vaults. Ready for five-industry end use. Always redeemable.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical yttrium on demand, ready for YAG laser crystals, LED phosphors, thermal barrier coatings, YBCO superconductors, or Y-90 therapy.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement in USDC, USDT, or USAT. No minimum tonnage. No Chinese export trader minimums.",
          },
          {
            title: "In Ground Yttrium",
            body: "Tokenized future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years) options.",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on the blockchain at any time.",
          },
          {
            title: "Direct from Source",
            body: "Sourced directly from rare earth separation facilities in China, North America, Australia, Southeast Asia, and Brazil. No trading intermediaries.",
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From rare earth separation to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized yttrium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Yttrium Oxide Token for refined, vaulted yttrium, or In-Ground Yttrium contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical yttrium delivery.",
          },
        ]}
        subBlockOverline="Built for Five Industries"
        subBlockHeading="Instant Settlement, No Chinese Export Traders"
        subBlockSubtext="Toto Finance connects yttrium sources with buyers directly on chain, replacing eight intermediaries with T+0 settlement in stablecoins."
        ctaLabel="Explore Yttrium"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
