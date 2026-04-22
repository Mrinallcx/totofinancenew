"use client";

import NavBar from "./NavBar";
import Vision2030Hero from "./Vision2030Hero";
import Vision2030MethodsHeadline from "./Vision2030MethodsHeadline";
import Vision2030MethodsCards from "./Vision2030MethodsCards";
import Vision2030PromoCards from "./Vision2030PromoCards";
import Vision2030Timeline from "./Vision2030Timeline";
import Vision2030ContentCards from "./Vision2030ContentCards";
import CtaImage from "./CtaImage";
import Footer from "./Footer";

const VISION_LOCAL_LINKS = [
  { label: "Overview", href: "#visionhero-heading" },
  { label: "Methods", href: "#our-methods" },
  { label: "Timeline", href: "#v2030tl-heading" },
];

export default function Vision2030PageContent() {
  return (
    <main>
      <NavBar pageTitle="Vision 2030" localLinks={VISION_LOCAL_LINKS} />
      <Vision2030Hero />
      <Vision2030MethodsHeadline />
      <Vision2030MethodsCards />
      <Vision2030PromoCards />
      <Vision2030Timeline />
      <Vision2030ContentCards />
      <CtaImage />
      <Footer />
    </main>
  );
}
