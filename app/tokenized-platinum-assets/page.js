import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Platinum Assets — Toto Finance",
  description:
    "Platinum-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-platinum-assets" },
};

export default function TokenizedPlatinumAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Platinum"
      slugPrefix="tokenized-platinum"
      categoryPath="platinum"
      heroContent={{
        heroTitle: "Platinum: Rare, Refined, Yours",
        heroSubtext:
          "Platinum combines rarity, durability, and industrial importance, now tokenized. Your guide to platinum, from fundamentals to expert investment insights. Read More",
        ctaLabel: "Explore Assets",
        sideCardHeading: "Real Platinum, Tokenized for the Discerning Investor",
        unitsTokenizedValue: "$1M",
        marketAccessValue: "24/7",
      }}
      aboutStatsContent={{
        statement:
          "Platinum is one of the rarest and most strategically important metals on Earth, prized by institutions, industries, and investors for both its scarcity and its essential role in modern technology.",
        statsRowLabel: "PROVEN ASSET CLASS",
        counters: [
          { value: "$340B", suffix: "+", label: "Global Platinum Market Size" },
          { value: "1:1", suffix: "", label: "Physical Platinum Backing" },
        ],
      }}
      whatWeDoContent={{
        overlineLabel: "BENEFITS OF TOKENIZED PLATINUM",
        heading: "Benefits of Tokenized Platinum",
        cards: [
          {
            title: "Borderless Portability",
            body: "Move your tokenized platinum globally, securely, and instantly, just like any cryptocurrency asset.",
          },
          {
            title: "24/7 Global Trading",
            body: "Access platinum markets anytime, anywhere, free from market hours, intermediaries, or geographical restrictions.",
          },
          {
            title: "Easy Redeemability",
            body: "Redeem your tokens for real platinum and have it delivered directly to you, insured and securely.",
          },
          {
            title: "No Storage Worries",
            body: "Your platinum is stored in insured vaults, tracked on chain, and free from the limitations of traditional storage.",
          },
          {
            title: "On Chain Transparency",
            body: "Real time tracking and verification of your holdings via blockchain, fully audited and always verifiable.",
          },
          {
            title: "Regulated Compliance",
            body: "KYC and AML checks combined with asset validation by LCX, ensuring every platinum unit is verified, certified, and compliant.",
          },
        ],
      }}
      howItWorksContent={{
        overline: "HOW IT WORKS",
        heading: "Owning platinum, made effortless",
        steps: [
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access regulated tokenized platinum assets.",
          },
          {
            title: "Browse and Select",
            body: "Choose from available platinum backed tokens, each backed by real vault held metal, and select what fits your strategy.",
          },
          {
            title: "Hold, Trade, or Redeem",
            body: "Manage your platinum as you wish, hold it long term, transfer it peer to peer, trade on the marketplace, or redeem for physical delivery.",
          },
        ],
        subBlockOverline: "Platinum Made Simple",
        subBlockHeading: "Rare Wealth, Refined for the Modern Era",
        subBlockSubtext:
          "Toto Finance brings the rarity of platinum and the freedom of blockchain together, giving you ownership that is transparent, global, and effortlessly managed.",
        ctaLabel: "Explore Platinum",
      }}
    />
  );
}
