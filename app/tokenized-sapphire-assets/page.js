import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Sapphire Assets — Toto Finance",
  description:
    "Sapphire-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-sapphire-assets" },
};

export default function TokenizedSapphireAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Sapphire"
      slugPrefix="tokenized-sapphire"
      categoryPath="sapphire"
    />
  );
}
