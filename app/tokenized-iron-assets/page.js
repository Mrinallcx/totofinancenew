import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Iron Assets — Toto Finance",
  description:
    "Iron-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-iron-assets" },
};

export default function TokenizedIronAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Iron"
      slugPrefix="tokenized-iron"
      categoryPath="iron"
    />
  );
}
