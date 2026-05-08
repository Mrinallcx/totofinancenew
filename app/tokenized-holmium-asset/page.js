import TokenizedHolmiumAssetPageContent from "./TokenizedHolmiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Holmium Asset — Toto Finance",
  description:
    "Holmium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-holmium-asset" },
};

export default function TokenizedHolmiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Holmium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedHolmiumAssetPageContent />
    </>
  );
}
