import DocImprintPageContent from "./DocImprintPageContent";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/docs",
  title: "Official Publications & Resources — Toto Finance",
  description:
    "Access official publications, regulatory documents, and resources from Toto Finance.",
});

export default function DocImprintPage() {
  return <DocImprintPageContent />;
}
