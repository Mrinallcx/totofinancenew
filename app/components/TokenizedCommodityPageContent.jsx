"use client";

import NavBar from "./NavBar";
import TokenizedGoldAssetsHero from "./TokenizedGoldAssetsHero";
import TokenizedGoldAboutStats from "./TokenizedGoldAboutStats";
import TokenizedGoldWhatWeDo from "./TokenizedGoldWhatWeDo";
import TokenizedGoldHowItWorks from "./TokenizedGoldHowItWorks";
import CtaImage from "./CtaImage";
import Footer from "./Footer";

export default function TokenizedCommodityPageContent({
  commodityName = "Gold",
  slugPrefix = "tokenized-gold",
  categoryPath = "gold",
}) {
  const localLinks = [
    { label: "Overview", href: `#${slugPrefix}-overview` },
    { label: "Highlights", href: `#${slugPrefix}-highlights` },
    { label: "What we do", href: `#${slugPrefix}-what-we-do` },
    { label: "How it works", href: `#${slugPrefix}-how-it-works` },
  ];

  return (
    <main>
      <NavBar pageTitle={`Tokenized ${commodityName} Assets`} localLinks={localLinks} />
      <TokenizedGoldAssetsHero
        commodityName={commodityName}
        sectionId={`${slugPrefix}-overview`}
        categoryPath={categoryPath}
      />
      <TokenizedGoldAboutStats sectionId={`${slugPrefix}-highlights`} />
      <TokenizedGoldWhatWeDo sectionId={`${slugPrefix}-what-we-do`} />
      <TokenizedGoldHowItWorks
        sectionId={`${slugPrefix}-how-it-works`}
        commodityName={commodityName}
        categoryPath={categoryPath}
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
