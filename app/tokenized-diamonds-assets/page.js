import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Diamond Assets — Toto Finance",
  description:
    "Diamond-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-diamonds-assets" },
};

export default function TokenizedDiamondsAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Diamond"
      slugPrefix="tokenized-diamonds"
      categoryPath="diamonds"
    />
  );
}
