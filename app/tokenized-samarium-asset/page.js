import TokenizedSamariumAssetPageContent from "./TokenizedSamariumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-samarium-asset",
  title: "Tokenized Samarium Asset — Toto Finance",
  description:
    "Samarium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedSamariumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Samarium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedSamariumAssetPageContent />
    </>
  );
}
