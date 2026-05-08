import TokenizedErbiumAssetPageContent from "./TokenizedErbiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Erbium Asset — Toto Finance",
  description:
    "Erbium drives fiber optic amplification for global bandwidth. Tokenized erbium with compliant ownership, instant settlement, and 24/7 market access.",
  alternates: { canonical: "/tokenized-erbium-asset" },
};

export default function TokenizedErbiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Erbium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedErbiumAssetPageContent />
    </>
  );
}
