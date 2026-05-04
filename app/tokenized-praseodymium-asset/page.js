import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Praseodymium Asset — Toto Finance",
  description:
    "Praseodymium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-praseodymium-asset" },
};

export default function TokenizedPraseodymiumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Praseodymium"
      slugPrefix="tokenized-praseodymium-asset"
      categoryPath="praseodymium"
    />
  );
}
