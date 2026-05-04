import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Erbium Asset — Toto Finance",
  description:
    "Erbium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-erbium-asset" },
};

export default function TokenizedErbiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Erbium"
      slugPrefix="tokenized-erbium-asset"
      categoryPath="erbium"
    />
  );
}
