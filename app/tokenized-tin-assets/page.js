import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Tin Assets — Toto Finance",
  description:
    "Tin-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-tin-assets" },
};

export default function TokenizedTinAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Tin"
      slugPrefix="tokenized-tin"
      categoryPath="tin"
    />
  );
}
