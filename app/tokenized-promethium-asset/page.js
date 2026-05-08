import TokenizedPromethiumAssetPageContent from "./TokenizedPromethiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Promethium Asset — Toto Finance",
  description:
    "Promethium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-promethium-asset" },
};

export default function TokenizedPromethiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Promethium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedPromethiumAssetPageContent />
    </>
  );
}
