import TokenizedCeriumAssetPageContent from "./TokenizedCeriumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-cerium-asset",
  title: "Tokenized Cerium Asset — Toto Finance",
  description:
    "Cerium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedCeriumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Cerium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedCeriumAssetPageContent />
    </>
  );
}
