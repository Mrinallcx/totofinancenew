import TokenizedScandiumAssetPageContent from "./TokenizedScandiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-scandium-asset",
  title: "Tokenized Scandium Asset — Toto Finance",
  description:
    "Scandium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedScandiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Scandium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedScandiumAssetPageContent />
    </>
  );
}
