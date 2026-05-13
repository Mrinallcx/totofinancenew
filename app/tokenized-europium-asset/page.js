import TokenizedEuropiumAssetPageContent from "./TokenizedEuropiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-europium-asset",
  title: "Tokenized Europium Asset — Toto Finance",
  description:
    "Europium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedEuropiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Europium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedEuropiumAssetPageContent />
    </>
  );
}
