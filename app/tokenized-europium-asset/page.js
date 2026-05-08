import TokenizedEuropiumAssetPageContent from "./TokenizedEuropiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Europium Asset — Toto Finance",
  description:
    "Europium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-europium-asset" },
};

export default function TokenizedEuropiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Europium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedEuropiumAssetPageContent />
    </>
  );
}
