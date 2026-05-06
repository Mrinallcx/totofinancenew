"use client";

import NavBar from "../components/NavBar";
import TokenizedGoldAssetsHero from "../components/TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "../components/TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "../components/TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "../components/TokenizedGoldHowItWorks";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const SLUG_PREFIX = "tokenized-erbium-asset";
const CATEGORY_PATH = "erbium";

const LOCAL_LINKS = [
  { label: "Overview", href: `#${SLUG_PREFIX}-overview` },
  { label: "Highlights", href: `#${SLUG_PREFIX}-highlights` },
  { label: "What we do", href: `#${SLUG_PREFIX}-what-we-do` },
  { label: "How it works", href: `#${SLUG_PREFIX}-how-it-works` },
];

const RARE_EARTH_HIGHLIGHT_IMG =
  "https://res.cloudinary.com/dusinlidl/image/upload/v1777477603/rare%20earth%20control%20liquidity%20section.jpg";

export default function TokenizedErbiumAssetPageContent() {
  return (
    <main>
      <NavBar pageTitle="Erbium" localLinks={LOCAL_LINKS} />
      <TokenizedGoldAssetsHero
        commodityName="Erbium"
        sectionId={`${SLUG_PREFIX}-overview`}
        categoryPath={CATEGORY_PATH}
        heroBgColor="#F7E3EA"
        heroTitle="Every Internet Signal Traveling Through Fiber Depends on Erbium."
        heroSubtext="385 tonnes produced per year. 70% goes into fiber amplifiers. A 350 tonne deficit is arriving by 2030."
        ctaLabel="Explore Our Products"
        sideCardHeading="Real Erbium, Fractionalized for the Digital Economy"
        cardMediaSrc={RARE_EARTH_HIGHLIGHT_IMG}
        cardMediaAlt="Rare earth materials supporting advanced technology and connectivity"
        unitsTokenizedLabel="Global Market"
        unitsTokenizedValue="$320M+"
        marketAccessLabel="Market Access"
        marketAccessValue="24/7"
      />
      <TokenizedGoldAboutStats
        sectionId={`${SLUG_PREFIX}-highlights`}
        statement="No other element amplifies light at 1.55 micrometers, the exact wavelength where fiber has minimum signal loss. The global internet depends on it. Supply is in deficit."
        statsRowLabel="THE DEFICIT IS HERE"
        imageSrc={RARE_EARTH_HIGHLIGHT_IMG}
        imageAlt="Rare earth materials on display, representing critical supply for technology"
        counters={[
          { value: "95", suffix: " t", label: "Erbium Deficit in 2025" },
          { value: "350", suffix: " t", label: "Supply Gap by 2030" },
        ]}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${SLUG_PREFIX}-what-we-do`}
        overlineLabel="BENEFITS OF TOKENIZED ERBIUM"
        heading="Two Ways to Own Tokenized Erbium"
        defaultCardHref={`https://app.totofinance.co/category/${CATEGORY_PATH}`}
        cards={[
          {
            title: "1:1 Erbium Oxide Backing",
            body: "Every token backed 1:1 by refined erbium oxide (99.9%+ Er2O3) in insured, audited vaults. Always redeemable.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical erbium on demand, ready for fiber optic amplifiers, medical lasers, or nuclear applications.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum. No specialist dealer relationship required.",
          },
          {
            title: "In Ground Erbium",
            body: "Future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on chain.",
          },
          {
            title: "Direct from Source",
            body: "Secured from heavy rare earth separation facilities in China, North America, Australia, and Southeast Asia. No middlemen.",
          },
        ]}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${SLUG_PREFIX}-how-it-works`}
        commodityName="Erbium"
        categoryPath={CATEGORY_PATH}
        overline="HOW IT WORKS"
        heading="From rare earth separation to wallet, instantly"
        steps={[
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized erbium products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Erbium Oxide Token for vaulted oxide, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ]}
        subBlockOverline="Built for Internet Infrastructure Supply Chains"
        subBlockHeading="Instant Settlement, No Rare Earth Traders"
        subBlockSubtext="Toto Finance connects erbium sources with buyers directly on chain, replacing eight intermediaries with T+0 stablecoin settlement."
        ctaLabel="Explore Erbium"
        featureImageSrc="https://framerusercontent.com/images/t0Ze2dHrAtbW7dOFiDqa65YYes.png?width=1260&height=872"
        featureImageAlt="Property style showcase visual"
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
