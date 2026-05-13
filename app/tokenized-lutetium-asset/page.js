import TokenizedLutetiumAssetPageContent from "./TokenizedLutetiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-lutetium-asset",
  title: "Tokenized Lutetium Asset — Toto Finance",
  description:
    "Lutetium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedLutetiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Lutetium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedLutetiumAssetPageContent />
    </>
  );
}
