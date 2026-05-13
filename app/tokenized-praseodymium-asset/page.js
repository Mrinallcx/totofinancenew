import TokenizedPraseodymiumAssetPageContent from "./TokenizedPraseodymiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-praseodymium-asset",
  title: "Tokenized Praseodymium Asset — Toto Finance",
  description:
    "Praseodymium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedPraseodymiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Praseodymium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedPraseodymiumAssetPageContent />
    </>
  );
}
