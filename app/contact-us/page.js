import ContactUsPageContent from "./ContactUsPageContent";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/contact-us",
  title: "Contact Us — Toto Finance",
  description:
    "Get in touch with Toto Finance for partnerships, product guidance, and support for tokenized commodity solutions.",
});

export default function ContactUsPage() {
  return <ContactUsPageContent />;
}
