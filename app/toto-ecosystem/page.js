import EcosystemPageContent from "./EcosystemPageContent";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/toto-ecosystem",
  title: "Ecosystem — Toto Finance",
  description:
    "An integrated worldwide network of blockchains, infrastructure providers, custodians, and data suppliers facilitating compliant, asset-backed tokenization of real world commodities.",
});

export default function EcosystemPage() {
  return <EcosystemPageContent />;
}
