import TokenizedPraseodymiumAssetPageContent from "./TokenizedPraseodymiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Praseodymium Asset — Toto Finance",
  description:
    "Praseodymium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-praseodymium-asset" },
};

export default function TokenizedPraseodymiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Praseodymium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedPraseodymiumAssetPageContent />
    </>
  );
}
