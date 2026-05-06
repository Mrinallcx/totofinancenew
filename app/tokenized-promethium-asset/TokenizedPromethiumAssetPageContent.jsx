"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const COMMODITY_NAME = "Promethium";
const SLUG_PREFIX = "tokenized-promethium-asset";
const CATEGORY_PATH = "promethium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

export default function TokenizedPromethiumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle={`Tokenized ${COMMODITY_NAME} Assets`} localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName={COMMODITY_NAME}
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#DDF7FF"
        heroTitle="No Mine Produces It. Every Gram Is Born in a Reactor."
        heroSubtext="Promethium is the only radioactive rare earth. The world produces under 100 grams per year. Now it is on-chain."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Promethium, Fractionalized for the Digital Economy"
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$8M+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="Promethium is the only rare earth with zero stable isotopes. It cannot be mined. It decays from the moment it is created. Supply is governed by physics, not economics."
        statsRowLabel="PHYSICS-ENFORCED SCARCITY"
        counters={[
          { value: "<100", suffix: "g", label: "Global Annual Production" },
          { value: "2.6", suffix: " years", label: "Half-Life of Pm-147" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED PROMETHIUM"
        heading="Two Ways to Own Tokenized Promethium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Pm-147 Isotope Backing",
            body: "Every token backed 1:1 by refined promethium-147 (99.9%+) in secure, audited nuclear material storage. Always redeemable.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical Pm-147 on demand, ready for nuclear battery fabrication, betavoltaic devices, or spacecraft power systems.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No government allocation queue. No classified access required.",
          },
          {
            title: "In Ground Promethium",
            body: "Future delivery contracts backed by proven Pm-147 recovery capacity at nuclear reprocessing facilities. Short or long term options.",
          },
          {
            title: "Decay-Adjusted Transparency",
            body: "Real time proof of reserves with decay-adjusted inventory reporting. Every token traceable to its isotope source.",
          },
          {
            title: "Direct from Source",
            body: "Secured from nuclear reprocessing facilities in the US, Europe, and allied nations. No intermediary allocation queues.",
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName={COMMODITY_NAME}
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From reactor to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized promethium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Pm-147 Isotope Token for secured promethium, or In-Ground contracts for future reactor production.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for the Space Economy"
        subBlockHeading="Instant Settlement, No Government Allocation Queues"
        subBlockSubtext="Toto Finance connects promethium sources with buyers directly on chain, replacing months of regulatory queues with T+0 settlement."
        ctaLabel="Explore Promethium"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
