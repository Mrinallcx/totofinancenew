import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Gadolinium Asset — Toto Finance",
  description:
    "Gadolinium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-gadolinium-asset" },
};

export default function TokenizedGadoliniumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Gadolinium"
      slugPrefix="tokenized-gadolinium-asset"
      categoryPath="gadolinium"
    />
  );
}
