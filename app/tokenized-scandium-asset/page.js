import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Scandium Asset — Toto Finance",
  description:
    "Scandium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-scandium-asset" },
};

export default function TokenizedScandiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Scandium"
      slugPrefix="tokenized-scandium-asset"
      categoryPath="scandium"
    />
  );
}
