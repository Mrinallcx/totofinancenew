import TokenizedYtterbiumAssetPageContent from "./TokenizedYtterbiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-ytterbium-asset",
  title: "Tokenized Ytterbium Asset — Toto Finance",
  description:
    "Ytterbium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedYtterbiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Ytterbium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedYtterbiumAssetPageContent />
    </>
  );
}
