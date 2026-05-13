import TokenizedGadoliniumAssetPageContent from "./TokenizedGadoliniumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-gadolinium-asset",
  title: "Tokenized Gadolinium Asset — Toto Finance",
  description:
    "Gadolinium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedGadoliniumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Gadolinium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedGadoliniumAssetPageContent />
    </>
  );
}
