import TokenizedGoldAssetsPageContent from "./TokenizedGoldAssetsPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-gold-assets",
  title: "Tokenized Gold Assets — Toto Finance",
  description:
    "Gold-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedGoldAssetsPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Gold Assets"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedGoldAssetsPageContent />
    </>
  );
}
