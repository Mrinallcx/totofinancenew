import TokenizedHolmiumAssetPageContent from "./TokenizedHolmiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-holmium-asset",
  title: "Tokenized Holmium Asset — Toto Finance",
  description:
    "Holmium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedHolmiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Holmium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedHolmiumAssetPageContent />
    </>
  );
}
