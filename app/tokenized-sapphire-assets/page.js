import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-sapphire-assets",
  title: "Tokenized Sapphire Assets — Toto Finance",
  description:
    "Sapphire-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedSapphireAssetsPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Sapphire Assets"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedCommodityPageContent
      commodityName="Sapphire"
      slugPrefix="tokenized-sapphire"
      categoryPath="sapphire"
      heroContent={{
        heroBgColor: "#DCE8FF",
        cardMediaType: "video",
        cardMediaSrc:
          "https://res.cloudinary.com/dusinlidl/video/upload/q_auto,f_auto/saphire_evfhyc.mp4",
        cardMediaTitle: "Sapphire video player",
        heroTitle: "Sapphire: Rare and Captivating",
        heroSubtext:
          "Sapphire, a symbol of wisdom and prosperity, now within reach through tokenization. Your essential guide to sapphire from its rich history to modern investment insights.",
        heroReadMoreHref: "https://totofinance.co/insights/introducing-the-sapphires-handbook",
        ctaLabel: "Explore Assets",
        heroCtaHref: "https://app.totofinance.co/category/sapphire",
        sideCardHeading: "Certified Sri Lankan Sapphires, Tokenized for the Modern Collector",
        sideCardHref: "https://www.tradingview.com/symbols/TVC-SAPPHIRE/",
        sideCardOpenInNewTab: true,
        unitsTokenizedLabel: "Sapphires Tokenized",
        unitsTokenizedValue: "$300K",
        marketAccessLabel: "Insurance",
        marketAccessValue: "Lloyd's",
      }}
      aboutStatsContent={{
        statement:
          "In partnership with Berr and Partners, every Toto Finance sapphire is unheated, GRS and CGL certified, and fully traceable from Sri Lanka's finest mines.",
        statsRowLabel: "RARE AND CERTIFIED",
        imageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778071048/sapphore_hyduls.png",
        imageAlt: "Raw sapphire gemstone close-up",
        counters: [
          { value: "<2%", suffix: "", label: "Unheated of Global Sapphire Supply" },
          { value: "100%", suffix: "", label: "GRS and CGL Certified" },
        ],
      }}
      whatWeDoContent={{
        overlineLabel: "BENEFITS OF TOKENIZED SAPPHIRE",
        heading: "Benefits of Tokenized Sapphire",
        cards: [
          {
            title: "Seamless Portability",
            body: "Move your tokenized sapphire across borders instantly. Assets flow globally, seamlessly, and securely, like any digital asset.",
            href: null,
          },
          {
            title: "24/7 Global Trading",
            body: "Trade tokenized sapphire anytime, anywhere, free from time zone restrictions or traditional market hours. Always open.",
            href: null,
          },
          {
            title: "Instant Redeemability",
            body: "Redeem your sapphire anytime on demand. The physical stone is delivered directly and safely to your doorstep.",
            href: null,
          },
          {
            title: "Affordable Storage",
            body: "Your sapphire is stored in a high-security vault at no cost. All custodial fees are covered by Toto Finance.",
            href: null,
          },
          {
            title: "Fully Insured",
            body: "Every sapphire is fully insured by Lloyd's of London against loss or damage in storage, from day one.",
            href: null,
          },
          {
            title: "Onchain Transparency",
            body: "Track and verify your allocated sapphire in real time using blockchain technology and fully transparent auditing processes.",
            href: null,
          },
        ],
      }}
      howItWorksContent={{
        overline: "HOW IT WORKS",
        heading: "Owning sapphire, made effortless",
        steps: [
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access regulated tokenized sapphire assets.",
          },
          {
            title: "Explore the Collection",
            body: "Browse our curated selection of certified, unheated sapphires sourced from Sri Lanka in partnership with Berr and Partners.",
          },
          {
            title: "Hold, Trade, or Redeem",
            body: "Keep your tokenized sapphire as an investment, trade it on secondary markets, or redeem it for the physical gemstone delivered to your doorstep.",
          },
        ],
        subBlockOverline: "Sapphire Made Simple",
        subBlockHeading: "Timeless Beauty, Reimagined for the Modern Era",
        subBlockSubtext:
          "Toto Finance brings the rarity of unheated sapphires and the freedom of blockchain together, giving you ownership that is transparent, global, and effortlessly managed.",
        ctaLabel: "Explore Sapphire",
        featureImageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778071149/sapphire_paage_footer_final_ogvw1n.webp",
        featureImageAlt: "Aerial city skyline at sunset",
      }}
      />
    </>
  );
}
