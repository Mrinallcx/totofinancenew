import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Ytterbium Asset — Toto Finance",
  description:
    "Ytterbium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-ytterbium-asset" },
};

export default function TokenizedYtterbiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Ytterbium"
      slugPrefix="tokenized-ytterbium-asset"
      categoryPath="ytterbium"
    />
  );
}
