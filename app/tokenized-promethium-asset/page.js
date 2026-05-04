import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Promethium Asset — Toto Finance",
  description:
    "Promethium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-promethium-asset" },
};

export default function TokenizedPromethiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Promethium"
      slugPrefix="tokenized-promethium-asset"
      categoryPath="promethium"
    />
  );
}
