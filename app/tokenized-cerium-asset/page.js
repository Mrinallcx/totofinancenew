import TokenizedCeriumAssetPageContent from "./TokenizedCeriumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Cerium Asset — Toto Finance",
  description:
    "Cerium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-cerium-asset" },
};

export default function TokenizedCeriumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Cerium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedCeriumAssetPageContent />
    </>
  );
}
