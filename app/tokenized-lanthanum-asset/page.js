import TokenizedLanthanumAssetPageContent from "./TokenizedLanthanumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-lanthanum-asset",
  title: "Tokenized Lanthanum Asset — Toto Finance",
  description:
    "Lanthanum-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedLanthanumAssetPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Lanthanum Asset"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedLanthanumAssetPageContent />
    </>
  );
}
