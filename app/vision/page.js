import Vision2030PageContent from "../components/Vision2030PageContent";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/vision",
  title: "Vision 2030 — Toto Finance",
  description:
    "By 2030, Toto Finance will run the global infrastructure for compliant, asset-backed tokenization and instant settlement of commodities, metals, energy, and strategic real world assets.",
});

export default function Vision2030Page() {
  return <Vision2030PageContent />;
}
