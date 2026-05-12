import TokenizedNeodymiumAssetPageContent from "./TokenizedNeodymiumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-neodymium-asset",
  title: "Tokenized Neodymium Asset — Toto Finance",
  description:
    "Neodymium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedNeodymiumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Neodymium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedNeodymiumAssetPageContent />
    </>
  );
}
