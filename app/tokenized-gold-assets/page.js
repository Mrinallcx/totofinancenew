import TokenizedGoldAssetsPageContent from "./TokenizedGoldAssetsPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Gold Assets — Toto Finance",
  description:
    "Gold-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-gold-assets" },
};

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
