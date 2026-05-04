import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Platinum Assets — Toto Finance",
  description:
    "Platinum-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-platinum-assets" },
};

export default function TokenizedPlatinumAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Platinum"
      slugPrefix="tokenized-platinum"
      categoryPath="platinum"
    />
  );
}
