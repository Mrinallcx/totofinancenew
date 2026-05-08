import TokenizedLanthanumAssetPageContent from "./TokenizedLanthanumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Lanthanum Asset — Toto Finance",
  description:
    "Lanthanum-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-lanthanum-asset" },
};

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
