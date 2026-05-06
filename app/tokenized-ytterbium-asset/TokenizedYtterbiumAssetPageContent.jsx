"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Ytterbium";
const SLUG_PREFIX = "tokenized-ytterbium-asset";
const CATEGORY_PATH = "ytterbium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedYtterbiumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#ECECEC"
        heroTitle="Every Factory Laser. Every Atomic Clock. Every Quantum Qubit. Now On-Chain."
        heroSubtext="87% of global ytterbium comes from one country. Three industries depend on it. Toto Finance makes ownership instant, borderless, and open to everyone."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Ytterbium, Fractionalized for the Digital Economy"
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$185M+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Three independent industries chose ytterbium independently. None found a substitute. All are growing. And the entire supply is a byproduct of someone else's mining economics."
        statsRowLabel="THE DEFICIT IS HERE"
        counters={[
          { value: "125", suffix: " t", label: "Ytterbium Deficit in 2025" },
          { value: "480", suffix: " t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED YTTERBIUM"
        heading="Two Ways to Own Tokenized Ytterbium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Ytterbium Oxide Backing",
            body: "Every token backed 1:1 by refined ytterbium oxide (99.9%+ Yb2O3) in insured, audited vaults. Ready for fiber lasers, atomic clocks, and quantum computing.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical ytterbium on demand, ready for fiber laser preform doping, Yb:YAG crystals, atomic clocks, or Yb-171 ion trap loading.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement in USDC, USDT, or USAT. No minimum tonnage. No heavy rare earth trader minimums.",
          },
          {
            title: "In Ground Ytterbium",
            body: "Tokenized future delivery contracts backed by proven heavy rare earth reserves. Short term (1 to 12 months) or long term (1 to 6 years) options.",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on the blockchain at any time.",
          },
          {
            title: "Direct from Source",
            body: "Sourced directly from heavy rare earth separation facilities in China, North America, Australia, Southeast Asia, and Brazil. No trading intermediaries.",
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From rare earth fractionation to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized ytterbium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Ytterbium Oxide Token for refined, vaulted ytterbium, or In-Ground Ytterbium contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical ytterbium delivery.",
          },
        ]}
        subBlockOverline="Built for the Quantum Era"
        subBlockHeading="Instant Settlement, No Heavy Rare Earth Traders"
        subBlockSubtext="Toto Finance connects ytterbium sources with buyers directly on chain, replacing eight intermediaries with T+0 settlement in stablecoins."
        ctaLabel="Explore Ytterbium"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
