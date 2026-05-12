import TokenizedDysprosiumAssetPageContent from "./TokenizedDysprosiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-dysprosium-asset",
  title: "Tokenized Dysprosium Asset — Toto Finance",
  description:
    "Dysprosium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedDysprosiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Dysprosium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedDysprosiumAssetPageContent />
    </>
  );
}
