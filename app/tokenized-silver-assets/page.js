import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Silver Assets — Toto Finance",
  description:
    "Silver-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-silver-assets" },
};

export default function TokenizedSilverAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Silver"
      slugPrefix="tokenized-silver"
      categoryPath="silver"
    />
  );
}
