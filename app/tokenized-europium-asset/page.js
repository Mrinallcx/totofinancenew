import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Europium Asset — Toto Finance",
  description:
    "Europium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-europium-asset" },
};

export default function TokenizedEuropiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Europium"
      slugPrefix="tokenized-europium-asset"
      categoryPath="europium"
    />
  );
}
