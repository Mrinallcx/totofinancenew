import ProductsPageContent from "./ProductsPageContent";

export const metadata = {
  title: "Product — Toto Finance",
  description:
    "Asset-backed tokenized commodities with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/product" },
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}
