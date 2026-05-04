import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Cerium Asset — Toto Finance",
  description:
    "Cerium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-cerium-asset" },
};

export default function TokenizedCeriumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Cerium"
      slugPrefix="tokenized-cerium-asset"
      categoryPath="cerium"
    />
  );
}
