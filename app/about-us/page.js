import AboutPageContent from "./AboutPageContent";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/about-us",
  title: "About Us — Toto Finance",
  description:
    "Building Infrastructure for Global Digital Commodities. Learn about Toto Finance and our mission to tokenize global commodities.",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
