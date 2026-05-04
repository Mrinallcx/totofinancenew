import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Lutetium Asset — Toto Finance",
  description:
    "Lutetium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-lutetium-asset" },
};

export default function TokenizedLutetiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Lutetium"
      slugPrefix="tokenized-lutetium-asset"
      categoryPath="lutetium"
    />
  );
}
