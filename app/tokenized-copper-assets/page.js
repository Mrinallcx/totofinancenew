import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Copper Assets — Toto Finance",
  description:
    "Copper-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-copper-assets" },
};

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
          heroTitle: "The World Needs Copper. Everyone Deserves Access to It.",
          heroSubtext:
            "The metal powering every AI chip, every electric vehicle, and every watt of clean energy is entering a generation long shortage. Toto Finance makes copper ownership instant, borderless, and open to everyone.",
          ctaLabel: "Explore Our Products",
          sideCardHeading: "Real Copper, Tokenized for the AI Era",
          unitsTokenizedLabel: "Global Market",
          unitsTokenizedValue: "$350B+",
          marketAccessLabel: "Market Access",
          marketAccessValue: "24/7",
        }}
        aboutStatsContent={{
          statement:
            "Copper is the new oil, and the world is running out. Every AI breakthrough, every electric vehicle, every watt of clean energy depends on a single irreplaceable metal entering structural decline just as demand is exploding.",
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
              body: "Every token is backed 1:1 by refined copper cathodes (Grade A, LME quality) stored in insured, independently audited vaults. No synthetic exposure. No paper promises. Real copper.",
            },
            {
              title: "Always Redeemable",
              body: "Always redeemable for physical copper delivery on demand. Ready for industrial end use across data centers, energy, construction, and electronics.",
            },
            {
              title: "Fractional Ownership",
              body: "Fractional ownership starting from $1, tradeable 24/7 with instant stablecoin settlement. No minimum tonnage. No warehouse logistics.",
            },
            {
              title: "In Ground Copper",
              body: "Tokenized future delivery contracts backed by proven and probable reserves at certified mining operations. Pre production pricing with built in scarcity premium.",
            },
            {
              title: "On Chain Transparency",
              body: "On chain proof of reserves with real time oracle feeds and third party audits. Every token is verifiable on the blockchain at any time.",
            },
            {
              title: "Direct from Source",
              body: "Toto Finance works directly with publicly listed mining companies across Africa, MENA, North America, and Asia. No commodity brokers. No trading intermediaries.",
            },
          ],
        }}
        howItWorksContent={{
          overline: "HOW IT WORKS",
          heading: "Direct from mine to wallet, instantly",
          steps: [
            {
              title: "Sign Up and Verify",
              body: "Create your account on totofinance.co and complete a quick verification to access regulated tokenized copper products.",
            },
            {
              title: "Choose Your Product",
              body: "Select between the 1:1 Copper Cathode Token for refined, vaulted copper, or In Ground Copper future delivery contracts for pre production positions.",
            },
            {
              title: "Settle, Hold, or Redeem",
              body: "Settle instantly in USDC, USDT, or USAT stablecoins. Hold long term, trade peer to peer, deploy in DeFi for yield and loans, or redeem for physical copper delivery.",
            },
          ],
          subBlockOverline: "Built for the AI Era",
          subBlockHeading: "Instant Settlement, No Banks, No Brokers",
          subBlockSubtext:
            "The traditional commodity system was built for a world of paper contracts and correspondent banks. Toto Finance connects copper producers with buyers directly on chain, replacing seven intermediaries with one platform and T+0 settlement in stablecoins.",
          ctaLabel: "Explore Copper",
          featureImageSrc:
            "https://res.cloudinary.com/dusinlidl/image/upload/v1778069990/platinum_footer_bevvli.webp",
          featureImageAlt: "Skyscrapers viewed from below against a bright sky",
        }}
      />
    </>
  );
}
