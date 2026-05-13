import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-diamond-assets",
  title: "Tokenized Diamond Assets — Toto Finance",
  description:
    "Diamond-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedDiamondAssetsPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Diamond Assets"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedCommodityPageContent
      commodityName="Diamond"
      slugPrefix="tokenized-diamond"
      categoryPath="diamonds"
      heroContent={{
        heroBgColor: "#EEF7FF",
        cardMediaType: "video",
        cardMediaSrc:
          "https://res.cloudinary.com/dusinlidl/video/upload/q_auto,f_auto/Diamonds_vwvuaz.mp4",
        cardMediaTitle: "Diamonds video player",
        heroTitle: "Largest Tokenized Diamonds Marketplace",
        heroSubtext:
          "Everything about diamonds, from A to Z. This handbook is your complete guide, from beginner basics to expert investment insights.",
        heroReadMoreHref: "https://totofinance.co/insights/diamond-handbook-index",
        ctaLabel: "Explore Assets",
        heroCtaHref: "https://app.totofinance.co/category/diamonds",
        sideCardHeading: "Certified Diamonds, Tokenized for the World",
        sideCardHref: "https://www.tradingview.com/symbols/TVC-DIAMOND/",
        sideCardOpenInNewTab: true,
        unitsTokenizedLabel: "Diamonds Tokenized",
        unitsTokenizedValue: "$5M",
        marketAccessLabel: "Insurance",
        marketAccessValue: "Lloyd's",
      }}
      aboutStatsContent={{
        statement:
          "Choose Diamonds: Shine Brighter, Ethically Sourced. Every Toto Finance diamond is conflict free, sustainably mined, GIA certified, and fully traceable from earth to blockchain.",
        statsRowLabel: "RARE AND CERTIFIED",
        imageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778070490/diamond_final_page_oscli2.png",
        counters: [
          { value: "100%", suffix: "", label: "GIA Certified" },
          { value: "24/7", suffix: "", label: "Market Accessible" },
        ],
      }}
      whatWeDoContent={{
        overlineLabel: "THE GLOBAL STANDARD",
        heading: "The 4Cs: The Global Standard of Diamond Quality",
        cards: [
          {
            title: "Cut",
            body: "A diamond's cut determines its brilliance, fire, and light performance, from round brilliants to fancy shapes with unique proportions.",
            href: "https://totofinance.co/insights/an-overview-on-diamond-cuts",
          },
          {
            title: "Colour",
            body: "Graded on a D to Z scale, with D being perfectly colourless. The less colour present, the rarer and more valuable the stone.",
            href: "https://totofinance.co/insights/guide-to-diamond-colors",
          },
          {
            title: "Clarity",
            body: "Natural inclusions make each diamond unique. Fewer inclusions mean greater brilliance, graded from Flawless (FL) to Included (I3).",
            href: "https://totofinance.co/insights/an-overview-of-diamond-clarity",
          },
          {
            title: "Carat",
            body: "Carat measures weight, not size. One carat equals 0.2 grams. True worth is always determined by all four Cs together.",
            href: "https://totofinance.co/insights/an-overview-of-diamond-carat",
            fullWidth: true,
          },
        ],
      }}
      howItWorksContent={{
        overline: "FROM EARTH TO BLOCKCHAIN",
        heading: "Journey of Diamonds: From Earth to Blockchain",
        marqueeSteps: true,
        steps: [
          {
            title: "1. Mining",
            body: "Rough diamonds are unearthed through carefully managed mining operations, beginning their journey from raw geological formation to finished gem.",
            readMoreHref: "https://blog.tiamonds.com/an-overview-of-diamond-mining",
          },
          {
            title: "2. Polishing",
            body: "Skilled artisans cut and polish each rough diamond to unlock its natural brilliance, requiring decades of expertise and precision craftsmanship.",
            readMoreHref: "https://blog.tiamonds.com/an-overview-on-diamond-cuts",
          },
          {
            title: "3. Grading",
            body: "Every diamond is assessed using the 4Cs framework by trained gemologists who assign objective quality grades determining the stone's market value.",
            readMoreHref: "https://blog.tiamonds.com/an-overview-of-diamond-grading-process/",
          },
          {
            title: "4. Certification",
            body: "GIA, IGI, and HRD issue formal certificates verifying each diamond's quality attributes, serving as its permanent proof of authenticity.",
            readMoreHref: "https://blog.tiamonds.com/an-overview-of-diamond-certification",
          },
          {
            title: "5. Tokenization and Retailing",
            body: "Certified diamonds are stored, insured, and digitized as blockchain tokens on Toto Finance, ready to purchase, trade, or redeem.",
            readMoreHref: "https://blog.tiamonds.com/classical-vs-tokenized-diamonds-a-comparative-insight",
          },
        ],
        subBlockOverline: "Diamonds Made Simple",
        subBlockHeading: "Timeless Brilliance, Effortlessly Owned",
        subBlockSubtext:
          "Toto Finance brings the rarity of certified diamonds and the freedom of blockchain together, giving you ownership that is transparent, global, and effortlessly managed.",
        ctaLabel: "Explore Diamonds",
        featureImageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778070819/diamonds_finael_isxpsv.webp",
      }}
      />
    </>
  );
}
