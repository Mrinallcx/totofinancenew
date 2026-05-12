import TokenizedPromethiumAssetPageContent from "./TokenizedPromethiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-promethium-asset",
  title: "Tokenized Promethium Asset — Toto Finance",
  description:
    "Promethium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedPromethiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Promethium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedPromethiumAssetPageContent />
    </>
  );
}
