"use client";

import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export default function TokenizedGoldAssetsPageContent() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Gold"
      slugPrefix="tokenized-gold"
      categoryPath="gold"
      heroContent={{
        heroBgColor: "#F8E7B5",
        heroTitle: "Gold: Timeless and Accessible",
        heroSubtext:
          "Gold has preserved wealth for centuries, now seamlessly accessible through tokenization. Your complete guide to gold from basics to expert insights.",
        heroReadMoreHref: "https://app.totofinance.co/category/gold",
        ctaLabel: "Explore Assets",
        heroCtaHref: "https://app.totofinance.co/category/gold",
        sideCardHeading: "Real Gold, Tokenized for the World",
        sideCardHref: "https://www.tradingview.com/symbols/TVC-GOLD/",
        sideCardOpenInNewTab: true,
        cardMediaType: "tradingview-mini-chart",
        tradingViewSymbol: "TVC:GOLD",
        tradingViewLineChartType: "Line",
        tradingViewShowTimeRange: true,
        tradingViewTimeFrame: "60M",
        tradingViewShowTimeScale: true,
        unitsTokenizedValue: "$20K",
        marketAccessValue: "24/7",
      }}
      aboutStatsContent={{
        imageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1777993808/gold_page_2nd_section_exrozb.webp",
        imageAlt: "Gold bar under spotlight",
      }}
      howItWorksContent={{
        overline: "HOW IT WORKS",
        heading: "Owning gold, made effortless",
        steps: [
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access regulated tokenized gold assets.",
          },
          {
            title: "Browse and Select",
            body: "Explore available tokenized gold assets, each backed by real, securely stored gold, and choose what fits your strategy.",
          },
          {
            title: "Trade or Hold",
            body: "Hold your tokenized gold as a long term asset, transfer it, trade it on secondary markets, or redeem for physical delivery.",
          },
        ],
        subBlockOverline: "Gold Made Simple",
        subBlockHeading: "Timeless Wealth, Now in Your Pocket",
        subBlockSubtext:
          "Toto Finance brings the stability of gold and the freedom of blockchain together, giving you ownership that is transparent, global, and easy to access.",
        ctaLabel: "Explore Gold",
        featureImageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1777994514/Gold_2_product_xqkrkn.webp",
        featureImageAlt: "Two gold bars under spotlight",
      }}
    />
  );
}
