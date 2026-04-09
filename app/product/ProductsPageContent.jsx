"use client";

import NavBar from "../components/NavBar";
import ProductsHero from "../components/ProductsHero";
import ProductsCases from "../components/ProductsCases";
import ProductsBlog from "../components/ProductsBlog";
import CtaImage from "../components/CtaImage";
import Footer from "../components/Footer";

const PRODUCTS_LOCAL_LINKS = [
  { label: "Overview", href: "#products-overview" },
  { label: "Commodities", href: "#products-commodities" },
  { label: "How it works", href: "#products-how" },
];

export default function ProductsPageContent() {
  return (
    <main>
      <NavBar pageTitle="Products" localLinks={PRODUCTS_LOCAL_LINKS} />
      <ProductsHero />
      <ProductsCases />
      <ProductsBlog />
      <CtaImage />
      <Footer />
    </main>
  );
}
