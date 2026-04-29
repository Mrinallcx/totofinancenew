"use client";

import NavBar from "../components/NavBar";
import RareEarthHero from "../components/RareEarthHero";
import RareEarthSpaces from "../components/RareEarthSpaces";
import RareEarthRelax from "../components/RareEarthRelax";
import RareEarthBento from "../components/RareEarthBento";
import RareEarthFeatures from "../components/RareEarthFeatures";
import RareEarthPillars from "../components/RareEarthPillars";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const REM_LOCAL_LINKS = [
  { label: "Overview", href: "#remhero-heading" },
  { label: "Spaces", href: "#spaces" },
];

export default function RareEarthPageContent() {
  return (
    <main>
      <NavBar pageTitle="Rare Earth Minerals" localLinks={REM_LOCAL_LINKS} />
      <RareEarthHero />
      <RareEarthSpaces />
      <RareEarthRelax />
      <RareEarthBento />
      <RareEarthFeatures />
      <RareEarthPillars />
      <CtaImage />
      <Footer />
    </main>
  );
}
