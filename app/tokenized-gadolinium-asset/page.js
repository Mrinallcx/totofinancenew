import TokenizedGadoliniumAssetPageContent from "./TokenizedGadoliniumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Gadolinium Asset — Toto Finance",
  description:
    "Gadolinium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-gadolinium-asset" },
};

export default function TokenizedGadoliniumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Gadolinium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedGadoliniumAssetPageContent />
    </>
  );
}
