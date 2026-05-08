import TokenizedLutetiumAssetPageContent from "./TokenizedLutetiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Lutetium Asset — Toto Finance",
  description:
    "Lutetium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-lutetium-asset" },
};

export default function TokenizedLutetiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Lutetium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedLutetiumAssetPageContent />
    </>
  );
}
