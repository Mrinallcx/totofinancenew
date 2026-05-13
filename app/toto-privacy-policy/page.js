import TotoPrivacyPolicyPageContent from "./TotoPrivacyPolicyPageContent";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/toto-privacy-policy",
  title: "Privacy Policy — Toto Finance",
  description:
    "Read Toto Finance privacy practices, including data collection, processing, retention, security, and user rights.",
});

export default function TotoPrivacyPolicyPage() {
  return <TotoPrivacyPolicyPageContent />;
}
