import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import ServicesGrid from "./components/ServicesGrid";
import CaseStudy from "./components/CaseStudy";
import MissionVision from "./components/MissionVision";
import CryptoAccess from "./components/CryptoAccess";
import AboutUs from "./components/AboutUs";
import BlogSection from "./components/BlogSection";
import CtaImage from "./components/CtaImage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatWeDo />
      <ServicesGrid />
      <CaseStudy />
      <MissionVision />
      <CryptoAccess />
      <AboutUs />
      <BlogSection />
      <CtaImage />
      <Footer />
    </main>
  );
}
