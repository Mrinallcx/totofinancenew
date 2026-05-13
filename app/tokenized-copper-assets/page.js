import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-copper-assets",
  title: "Tokenized Copper Assets — Toto Finance",
  description:
    "Copper-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedCopperAssetsPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Copper Assets"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedCommodityPageContent
        commodityName="Copper"
        slugPrefix="tokenized-copper"
        categoryPath="copper"
        heroContent={{
          heroBgColor: "#F4D2C2",
          cardMediaType: "tradingview-mini-chart",
          tradingViewSymbol: "CAPITALCOM:COPPER",
          tradingViewLineChartType: "Line",
          tradingViewShowTimeRange: true,
          tradingViewTimeFrame: "60M",
          tradingViewShowTimeScale: true,
          heroTitle: "Tokenized Copper Assets, Built for Global Markets",
          heroSubtext:
            "Copper-backed digital assets with compliant ownership, transparent reserves, and instant access to global liquidity.",
          ctaLabel: "Explore Our Products",
          heroCtaHref: "https://totofinance.co/product",
          sideCardHeading: "Real Copper, Tokenized for the AI Era",
          sideCardHref: "https://www.tradingview.com/symbols/CAPITALCOM-COPPER/",
          sideCardOpenInNewTab: true,
          unitsTokenizedLabel: "Global Market",
          unitsTokenizedValue: "$350B+",
          marketAccessLabel: "Market Access",
          marketAccessValue: "24/7",
        }}
        aboutStatsContent={{
          statement:
            "Every AI chip, every EV, every watt of clean energy runs on copper. Supply is in structural decline just as demand explodes.",
          imageSrc:
            "https://res.cloudinary.com/dusinlidl/image/upload/v1778071554/copper_chg31m.png",
          imageAlt: "Copper element cube on a periodic table background",
          statsRowLabel: "THE DEFICIT IS HERE",
          counters: [
            { value: "304K", suffix: " tonnes", label: "Refined Copper Deficit in 2025" },
            { value: "6M", suffix: " tonnes", label: "Supply Gap by 2035" },
          ],
        }}
        whatWeDoContent={{
          overlineLabel: "BENEFITS OF TOKENIZED COPPER",
          heading: "Two Ways to Own Tokenized Copper",
          cards: [
            {
              title: "1:1 Cathode Backing",
              body: "Every token backed 1:1 by refined copper cathodes (Grade A, LME quality) in insured, audited vaults. No paper promises.",
              href: null,
            },
            {
              title: "Always Redeemable",
              body: "Redeemable for physical copper on demand, ready for data centers, energy, construction, and electronics end use.",
              href: null,
            },
            {
              title: "Fractional Ownership",
              body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum tonnage. No warehouse logistics required.",
              href: null,
            },
            {
              title: "In Ground Copper",
              body: "Future delivery contracts backed by proven reserves at certified mining operations, with pre-production pricing and scarcity premium.",
              href: null,
            },
            {
              title: "On Chain Transparency",
              body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on the blockchain.",
              href: null,
            },
            {
              title: "Direct from Source",
              body: "Toto Finance works directly with listed mining companies across Africa, MENA, North America, and Asia. No brokers.",
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
              body: "Create your account on totofinance.co and complete a quick verification to access tokenized copper products.",
            },
            {
              title: "Choose Your Product",
              body: "Select the 1:1 Copper Cathode Token for refined, vaulted copper, or In-Ground contracts for pre-production positions.",
            },
            {
              title: "Settle, Hold, or Redeem",
              body: "Settle instantly in USDC, USDT, or USAT. Hold, trade peer to peer, earn yield, or redeem for physical delivery.",
            },
          ],
          subBlockOverline: "Built for the AI Era",
          subBlockHeading: "Instant Settlement, No Banks, No Brokers",
          subBlockSubtext:
            "Toto Finance connects copper producers with buyers directly on chain, replacing seven intermediaries with T+0 stablecoin settlement.",
          ctaLabel: "Explore Copper",
          ctaHref: "https://totofinance.co/product",
          featureImageSrc:
            "https://res.cloudinary.com/dusinlidl/image/upload/v1778069990/platinum_footer_bevvli.webp",
          featureImageAlt: "Skyscrapers viewed from below against a bright sky",
        }}
      />
    </>
  );
}
