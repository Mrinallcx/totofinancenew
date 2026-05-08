import TokenizedYtterbiumAssetPageContent from "./TokenizedYtterbiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Ytterbium Asset — Toto Finance",
  description:
    "Ytterbium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-ytterbium-asset" },
};

export default function TokenizedYtterbiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Ytterbium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedYtterbiumAssetPageContent />
    </>
  );
}
