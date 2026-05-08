import TokenizedThuliumAssetPageContent from "./TokenizedThuliumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Thulium Asset — Toto Finance",
  description:
    "Thulium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-thulium-asset" },
};

export default function TokenizedThuliumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Thulium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedThuliumAssetPageContent />
    </>
  );
}
