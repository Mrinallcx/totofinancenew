import TokenizedSamariumAssetPageContent from "./TokenizedSamariumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Samarium Asset — Toto Finance",
  description:
    "Samarium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-samarium-asset" },
};

export default function TokenizedSamariumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Samarium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedSamariumAssetPageContent />
    </>
  );
}
