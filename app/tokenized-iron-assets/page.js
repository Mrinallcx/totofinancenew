import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Iron Assets — Toto Finance",
  description:
    "Iron-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-iron-assets" },
};

export default function TokenizedIronAssetsPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Iron Assets"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedCommodityPageContent
      commodityName="Iron"
      slugPrefix="tokenized-iron"
      categoryPath="iron"
      heroContent={{
        heroBgColor: "#D8DDE3",
        cardMediaSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778066206/iron_final_hero_w0gagy.webp",
        cardMediaAlt: "Tokenized iron and secure reserves",
        heroTitle: "Iron Ore, Tokenized for the World",
        heroSubtext:
          "The most consumed industrial metal on earth, now accessible through tokenization. 1:1 backed, instantly redeemable, and open to everyone.",
        ctaLabel: "Explore Our Products",
        sideCardHeading: "Real Iron Ore, Tokenized for the World",
        unitsTokenizedLabel: "Global Market",
        unitsTokenizedValue: "$275B+",
        marketAccessLabel: "Market Access",
        marketAccessValue: "24/7",
      }}
      aboutStatsContent={{
        statement:
          "Nothing gets built without iron. Steel made from iron ore accounts for over 95% of all metal used in the world by weight. Construction, defense, automotive, energy, every major industry depends on it.",
        statsRowLabel: "THE IRON IMPERATIVE",
        counters: [
          { value: "$275B", suffix: "+", label: "Global Iron Ore Market" },
          { value: "2.5 Bt", suffix: "", label: "Iron Ore Mined Per Year" },
        ],
      }}
      whatWeDoContent={{
        overlineLabel: "BENEFITS OF TOKENIZED IRON",
        heading: "Two Ways to Own Tokenized Iron",
        cards: [
          {
            title: "1:1 Iron Ore Backing",
            body: "Every token is backed 1:1 by high grade iron ore pellets in insured, audited facilities. Real iron. No synthetic exposure.",
          },
          {
            title: "Always Redeemable",
            body: "Redeem for physical iron ore on demand, ready for industrial use across steelmaking, construction, and defense.",
          },
          {
            title: "Fractional Ownership",
            body: "Own from $1, tradeable 24/7 with instant stablecoin settlement. No minimum tonnage. No warehouse logistics.",
          },
          {
            title: "In Ground Iron",
            body: "Tokenized future delivery contracts backed by proven reserves. Short term (1 to 12 months) or long term (1 to 6 years) options.",
          },
          {
            title: "On Chain Transparency",
            body: "Real time proof of reserves with oracle feeds and third party audits. Every token verifiable on the blockchain.",
          },
          {
            title: "Direct from Source",
            body: "Sourced directly from publicly listed mining companies in Australia, Brazil, Africa, and North America. No middlemen.",
          },
        ],
      }}
      howItWorksContent={{
        overline: "HOW IT WORKS",
        heading: "From mine to wallet, instantly",
        steps: [
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access tokenized iron products.",
          },
          {
            title: "Choose Your Product",
            body: "Select the 1:1 Iron Ore Token for refined, vaulted ore, or In-Ground Iron contracts for pre-production positions.",
          },
          {
            title: "Settle, Hold, or Redeem",
            body: "Settle instantly in USDC, USDT, or USAT. Hold, trade on DeFi, earn yield, or redeem for physical delivery.",
          },
        ],
        subBlockOverline: "Built for Industry",
        subBlockHeading: "Instant Settlement, No Banks, No Brokers",
        subBlockSubtext:
          "Toto Finance connects iron ore producers with buyers directly on chain, replacing seven intermediaries with T+0 settlement in stablecoins.",
        ctaLabel: "Explore Iron",
      }}
      />
    </>
  );
}
