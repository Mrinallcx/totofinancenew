import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-tin-assets",
  title: "Tokenized Tin Assets — Toto Finance",
  description:
    "Tin-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedTinAssetsPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Tin Assets"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedCommodityPageContent
      commodityName="Tin"
      slugPrefix="tokenized-tin"
      categoryPath="tin"
      heroContent={{
        heroBgColor: "#DCE3E8",
        cardMediaSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778065926/tin_final_png_hero_u6vfdm.webp",
        cardMediaAlt: "Tokenized tin and secure reserves",
        heroTitle: "Tokenized Tin Assets, Built for Global Markets",
        heroSubtext:
          "Tin-backed digital assets with compliant ownership, transparent reserves, and instant access to global liquidity.",
        ctaLabel: "Explore Our Products",
        heroCtaHref: "https://totofinance.co/product",
        sideCardHeading: "Real Tin, Tokenized for the AI Era",
        sideCardHref: null,
        unitsTokenizedLabel: "All Time High",
        unitsTokenizedValue: "$56,800/t",
        marketAccessLabel: "Market Access",
        marketAccessValue: "24/7",
      }}
      aboutStatsContent={{
        statement:
          "Every circuit board, every solder joint, every AI server depends on tin. Supply from Myanmar and Indonesia is collapsing.",
        statsRowLabel: "THE DEFICIT IS HERE",
        counters: [
          { value: "40K t/year", suffix: "", label: "Projected Annual Deficit by 2030" },
          { value: "71%", suffix: "", label: "Supply Disruptions from Myanmar and Indonesia" },
        ],
      }}
      whatWeDoContent={{
        overlineLabel: "BENEFITS OF TOKENIZED TIN",
        heading: "Two Ways to Own Tokenized Tin",
        cards: [
          {
            title: "1:1 Tin Ingot Backing",
            body: "Every token backed 1:1 by refined tin ingots (Grade A, LME quality) in insured, audited vaults. No paper promises.",
            href: null,
          },
          {
            title: "Always Redeemable",
            body: "Redeemable for physical tin on demand, ready for electronics, semiconductors, solar panels, EV batteries, and packaging end use.",
            href: null,
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum tonnage. No warehouse logistics required.",
            href: null,
          },
          {
            title: "In Ground Tin",
            body: "Future delivery contracts backed by proven cassiterite reserves. Short term (1 to 12 months) or long term (1 to 6 years).",
            href: null,
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on the blockchain.",
            href: null,
          },
          {
            title: "Direct from Source",
            body: "Toto Finance works directly with tin mining and smelting companies across Southeast Asia, Africa, South America, and China",
            href: null,
          },
        ],
      }}
      howItWorksContent={{
        overline: "HOW IT WORKS",
        heading: "Direct from mine to wallet, instantly",
        steps: [
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized tin products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Tin Ingot Token for refined, vaulted tin, or In-Ground contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ],
        subBlockOverline: "Built for the AI Era",
        subBlockHeading: "Instant Settlement, No Banks, No Brokers",
        subBlockSubtext:
          "Toto Finance connects tin producers with buyers directly on chain, replacing seven intermediaries with T+0 stablecoin settlement.",
        ctaLabel: "Explore Tin",
        ctaHref: "https://totofinance.co/product",
      }}
      />
    </>
  );
}
