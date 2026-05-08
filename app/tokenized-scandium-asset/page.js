import TokenizedScandiumAssetPageContent from "./TokenizedScandiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Scandium Asset — Toto Finance",
  description:
    "Scandium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-scandium-asset" },
};

export default function TokenizedScandiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Scandium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedScandiumAssetPageContent />
    </>
  );
}
