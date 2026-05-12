import TokenizedThuliumAssetPageContent from "./TokenizedThuliumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-thulium-asset",
  title: "Tokenized Thulium Asset — Toto Finance",
  description:
    "Thulium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedThuliumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Thulium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedThuliumAssetPageContent />
    </>
  );
}
