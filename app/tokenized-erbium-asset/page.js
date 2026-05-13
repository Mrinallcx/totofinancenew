import TokenizedErbiumAssetPageContent from "./TokenizedErbiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-erbium-asset",
  title: "Tokenized Erbium Asset — Toto Finance",
  description:
    "Erbium drives fiber optic amplification for global bandwidth. Tokenized erbium with compliant ownership, instant settlement, and 24/7 market access.",
});

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
