import TokenizedYttriumAssetPageContent from "./TokenizedYttriumAssetPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";

export const metadata = {
  title: "Tokenized Yttrium Asset — Toto Finance",
  description:
    "Yttrium-backed tokenized asset with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-yttrium-asset" },
};

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
