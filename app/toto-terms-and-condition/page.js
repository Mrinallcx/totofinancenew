import TotoTermsAndConditionPageContent from "./TotoTermsAndConditionPageContent";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/toto-terms-and-condition",
  title: "Terms and Conditions — Toto Finance",
  description:
    "Read Toto Finance sales terms and conditions governing token acquisition, platform usage, compliance, and legal obligations.",
});

export default function TotoTermsAndConditionPage() {
  return <TotoTermsAndConditionPageContent />;
}
