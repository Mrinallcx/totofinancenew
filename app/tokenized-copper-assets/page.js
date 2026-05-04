import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Copper Assets — Toto Finance",
  description:
    "Copper-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-copper-assets" },
};

export default function TokenizedCopperAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Copper"
      slugPrefix="tokenized-copper"
      categoryPath="copper"
    />
  );
}
