import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Holmium Asset — Toto Finance",
  description:
    "Holmium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-holmium-asset" },
};

export default function TokenizedHolmiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Holmium"
      slugPrefix="tokenized-holmium-asset"
      categoryPath="holmium"
    />
  );
}
