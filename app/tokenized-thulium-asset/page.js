import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Thulium Asset — Toto Finance",
  description:
    "Thulium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-thulium-asset" },
};

export default function TokenizedThuliumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Thulium"
      slugPrefix="tokenized-thulium-asset"
      categoryPath="thulium"
    />
  );
}
