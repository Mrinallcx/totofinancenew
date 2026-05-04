import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Lanthanum Asset — Toto Finance",
  description:
    "Lanthanum-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-lanthanum-asset" },
};

export default function TokenizedLanthanumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Lanthanum"
      slugPrefix="tokenized-lanthanum-asset"
      categoryPath="lanthanum"
    />
  );
}
