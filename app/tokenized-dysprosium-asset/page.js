import TokenizedDysprosiumAssetPageContent from "./TokenizedDysprosiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Dysprosium Asset — Toto Finance",
  description:
    "Dysprosium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-dysprosium-asset" },
};

export default function TokenizedDysprosiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Dysprosium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedDysprosiumAssetPageContent />
    </>
  );
}
