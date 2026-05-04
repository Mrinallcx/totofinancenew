import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Diamond Assets — Toto Finance",
  description:
    "Diamond-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-diamond-assets" },
};

export default function TokenizedDiamondAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Diamond"
      slugPrefix="tokenized-diamond"
      categoryPath="diamonds"
    />
  );
}
