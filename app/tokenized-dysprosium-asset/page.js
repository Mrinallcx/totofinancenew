import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Dysprosium Asset — Toto Finance",
  description:
    "Dysprosium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-dysprosium-asset" },
};

export default function TokenizedDysprosiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Dysprosium"
      slugPrefix="tokenized-dysprosium-asset"
      categoryPath="dysprosium"
    />
  );
}
