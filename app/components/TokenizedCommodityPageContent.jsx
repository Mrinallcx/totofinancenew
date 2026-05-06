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
  heroContent = {},
  aboutStatsContent = {},
  whatWeDoContent = {},
  howItWorksContent = {},
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
        heroBgImage={heroContent.heroBgImage}
        heroBgFlip={heroContent.heroBgFlip}
        heroBgColor={heroContent.heroBgColor}
        heroTitle={heroContent.heroTitle}
        heroSubtext={heroContent.heroSubtext}
        ctaLabel={heroContent.ctaLabel}
        sideCardHeading={heroContent.sideCardHeading}
        cardMediaType={heroContent.cardMediaType}
        cardMediaSrc={heroContent.cardMediaSrc}
        cardMediaAlt={heroContent.cardMediaAlt}
        tradingViewSymbol={heroContent.tradingViewSymbol}
        tradingViewLineChartType={heroContent.tradingViewLineChartType}
        tradingViewShowTimeRange={heroContent.tradingViewShowTimeRange}
        tradingViewTimeFrame={heroContent.tradingViewTimeFrame}
        tradingViewShowTimeScale={heroContent.tradingViewShowTimeScale}
        unitsTokenizedLabel={heroContent.unitsTokenizedLabel}
        unitsTokenizedValue={heroContent.unitsTokenizedValue}
        marketAccessLabel={heroContent.marketAccessLabel}
        marketAccessValue={heroContent.marketAccessValue}
      />
      <TokenizedGoldAboutStats
        sectionId={`${slugPrefix}-highlights`}
        statement={aboutStatsContent.statement}
        statsRowLabel={aboutStatsContent.statsRowLabel}
        counters={aboutStatsContent.counters}
        imageSrc={aboutStatsContent.imageSrc}
        imageAlt={aboutStatsContent.imageAlt}
      />
      <TokenizedGoldWhatWeDo
        sectionId={`${slugPrefix}-what-we-do`}
        overlineLabel={whatWeDoContent.overlineLabel}
        heading={whatWeDoContent.heading}
        cards={whatWeDoContent.cards}
        defaultCardHref={whatWeDoContent.defaultCardHref ?? `https://app.totofinance.co/category/${categoryPath}`}
      />
      <TokenizedGoldHowItWorks
        sectionId={`${slugPrefix}-how-it-works`}
        commodityName={commodityName}
        categoryPath={categoryPath}
        overline={howItWorksContent.overline}
        heading={howItWorksContent.heading}
        steps={howItWorksContent.steps}
        marqueeSteps={howItWorksContent.marqueeSteps}
        subBlockOverline={howItWorksContent.subBlockOverline}
        subBlockHeading={howItWorksContent.subBlockHeading}
        subBlockSubtext={howItWorksContent.subBlockSubtext}
        ctaLabel={howItWorksContent.ctaLabel}
        featureImageSrc={howItWorksContent.featureImageSrc}
        featureImageAlt={howItWorksContent.featureImageAlt}
      />
      <CtaImage />
      <Footer />
    </main>
  );
}
