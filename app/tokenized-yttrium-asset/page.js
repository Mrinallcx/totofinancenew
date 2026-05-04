import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Yttrium Asset — Toto Finance",
  description:
    "Yttrium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-yttrium-asset" },
};

export default function TokenizedYttriumAssetPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Yttrium"
      slugPrefix="tokenized-yttrium-asset"
      categoryPath="yttrium"
    />
  );
}
