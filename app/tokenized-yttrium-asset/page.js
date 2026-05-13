import TokenizedYttriumAssetPageContent from "./TokenizedYttriumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-yttrium-asset",
  title: "Tokenized Yttrium Asset — Toto Finance",
  description:
    "Yttrium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedYttriumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Yttrium Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedYttriumAssetPageContent />
    </>
  );
}
