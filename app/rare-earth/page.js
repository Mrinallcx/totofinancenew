import RareEarthPageContent from "./RareEarthPageContent";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/rare-earth",
  title: "Rare Earth Minerals — Toto Finance",
  description:
    "Tokenized rare earth minerals — fractional ownership, transparent provenance, and institutional-grade settlement for the materials powering the global energy transition.",
});

export default function RareEarthMineralPage() {
  return <RareEarthPageContent />;
}
