import ProductsPageContent from "./ProductsPageContent";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/product",
  title: "Product — Toto Finance",
  description:
    "Asset-backed tokenized commodities with compliant ownership, instant settlement, and global market access.",
});

export default function ProductsPage() {
  return <ProductsPageContent />;
}
