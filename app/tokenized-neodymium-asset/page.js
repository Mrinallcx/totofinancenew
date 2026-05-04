import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Neodymium Asset — Toto Finance",
  description:
    "Neodymium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-neodymium-asset" },
};

export default function TokenizedNeodymiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Neodymium"
      slugPrefix="tokenized-neodymium-asset"
      categoryPath="neodymium"
    />
  );
}
