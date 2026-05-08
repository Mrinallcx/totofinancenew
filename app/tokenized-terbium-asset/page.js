import TokenizedTerbiumAssetPageContent from "./TokenizedTerbiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Terbium Asset — Toto Finance",
  description:
    "Terbium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-terbium-asset" },
};

export default function TokenizedTerbiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Terbium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedTerbiumAssetPageContent />
    </>
  );
}
