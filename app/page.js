import HeroSection from "./components/HeroSection";
import WhatWeDo from "./components/WhatWeDo";
import ServicesGrid from "./components/ServicesGrid";
import CaseStudy from "./components/CaseStudy";
import MissionVision from "./components/MissionVision";
import CryptoAccess from "./components/CryptoAccess";
import AboutUs from "./components/AboutUs";
import BlogSection from "./components/BlogSection";
import AskAI from "./components/AskAI";
import CtaImage from "./components/CtaImage";
import Footer from "./components/Footer";
import { fetchWordPressPosts } from "../lib/wordpress";

export const metadata = {
  title: "Toto Finance — The Global Infrastructure for Tokenized Commodities",
  description:
    "Build asset-backed ownership with compliant tokenization, instant settlement, and transparent access to metals, gems, and rare-earth commodities.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Toto Finance — The Global Infrastructure for Tokenized Commodities",
    description:
      "Build asset-backed ownership with compliant tokenization, instant settlement, and transparent access to metals, gems, and rare-earth commodities.",
    images: [
      {
        url: "/totofinance-white.svg",
        width: 1200,
        height: 630,
        alt: "Toto Finance",
      },
    ],
  },
};

export const revalidate = 120;

export default async function Home() {
  let featuredPosts = [];
  try {
    const all = await fetchWordPressPosts({ revalidate: 120 });
    featuredPosts = all.slice(0, 10);
  } catch {
    featuredPosts = [];
  }

  return (
    <main>
      <HeroSection />
      <WhatWeDo />
      <ServicesGrid />
      <CaseStudy />
      <MissionVision />
      <CryptoAccess />
      <AboutUs />
      <BlogSection initialPosts={featuredPosts} />
      <AskAI />
      <CtaImage />
      <Footer />
    </main>
  );
}
