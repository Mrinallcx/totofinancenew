import TokenizedNeodymiumAssetPageContent from "./TokenizedNeodymiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Neodymium Asset — Toto Finance",
  description:
    "Neodymium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-neodymium-asset" },
};

export default function TokenizedNeodymiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Neodymium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedNeodymiumAssetPageContent />
    </>
  );
}
