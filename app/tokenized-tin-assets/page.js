import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Tin Assets — Toto Finance",
  description:
    "Tin-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-tin-assets" },
};

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
        heroTitle: "Every AI Server Depends on Tin. Everyone Deserves Access to It.",
        heroSubtext:
          "Every solder joint in every AI server depends on tin. The world's most essential electronics metal hit an all-time high of $56,800 per tonne as supply collapses in Myanmar and Indonesia. Toto Finance exists to change it, making tin ownership instant, borderless, and open to everyone.",
        ctaLabel: "Explore Our Products",
        sideCardHeading: "Real Tin, Tokenized for the AI Era",
        unitsTokenizedLabel: "All Time High",
        unitsTokenizedValue: "$56,800/t",
        marketAccessLabel: "Market Access",
        marketAccessValue: "24/7",
      }}
      aboutStatsContent={{
        statement:
          "Tin is the silent metal powering AI, and the world is running out. Every circuit board, every solder joint, every semiconductor package in every AI server depends on tin, while supply from Myanmar and Indonesia continues to collapse.",
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
            body: "Every token is backed 1:1 by refined tin ingots (Grade A, LME quality) stored in insured, independently audited vaults. No synthetic exposure. No paper promises. Real tin.",
          },
          {
            title: "Always Redeemable",
            body: "Always redeemable for physical tin delivery on demand. Ready for industrial end use across electronics, semiconductors, solar panels, EV batteries, and packaging.",
          },
          {
            title: "Fractional Ownership",
            body: "Fractional ownership from $1, tradeable 24/7 with instant stablecoin settlement in USDC, USDT, or USAT. No minimum tonnage. No warehouse logistics.",
          },
          {
            title: "In Ground Tin",
            body: "Tokenized future delivery contracts backed by proven and probable cassiterite reserves at certified mining operations. Pre production pricing with built in scarcity premium. Short term (1 to 12 months) and long term (1 to 6 years) options.",
          },
          {
            title: "On Chain Transparency",
            body: "On chain proof of reserves with real time oracle feeds and third party audits. Every token is verifiable on the blockchain at any time.",
          },
          {
            title: "Direct from Source",
            body: "Toto Finance works directly with major tin mining and smelting companies in Southeast Asia, Africa, South America, and China. No commodity brokers. No trading intermediaries.",
          },
        ],
      }}
      howItWorksContent={{
        overline: "HOW IT WORKS",
        heading: "Direct from mine to wallet, instantly",
        steps: [
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access regulated tokenized tin products.",
          },
          {
            title: "Choose Your Product",
            body: "Select between the 1:1 Tin Ingot Token for refined, vaulted tin, or In Ground Tin future delivery contracts for pre production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold long term, trade on decentralized exchanges, deploy in DeFi for yield and collateral loans, or redeem for physical tin delivery.",
          },
        ],
        subBlockOverline: "Built for the AI Era",
        subBlockHeading: "Instant Settlement, No Banks, No Brokers",
        subBlockSubtext:
          "The traditional commodity system was built for a world of paper contracts and correspondent banks. Toto Finance connects tin producers with buyers directly on chain, replacing seven intermediaries with one platform and T+0 settlement in stablecoins.",
        ctaLabel: "Explore Tin",
      }}
      />
    </>
  );
}
