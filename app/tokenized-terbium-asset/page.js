import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Terbium Asset — Toto Finance",
  description:
    "Terbium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-terbium-asset" },
};

export default function TokenizedTerbiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Terbium"
      slugPrefix="tokenized-terbium-asset"
      categoryPath="terbium"
    />
  );
}
