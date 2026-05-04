import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Samarium Asset — Toto Finance",
  description:
    "Samarium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-samarium-asset" },
};

export default function TokenizedSamariumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Samarium"
      slugPrefix="tokenized-samarium-asset"
      categoryPath="samarium"
    />
  );
}
