import TokenizedTerbiumAssetPageContent from "./TokenizedTerbiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-terbium-asset",
  title: "Tokenized Terbium Asset — Toto Finance",
  description:
    "Terbium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedTerbiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Terbium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedTerbiumAssetPageContent />
    </>
  );
}
