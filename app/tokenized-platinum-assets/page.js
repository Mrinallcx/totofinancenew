import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";
import FinancialProductJsonLd from "../components/FinancialProductJsonLd";
import { buildPageMetadata } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/tokenized-platinum-assets",
  title: "Tokenized Platinum Assets — Toto Finance",
  description:
    "Platinum-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
});

export default function TokenizedPlatinumAssetsPage() {
  return (
    <>
      <FinancialProductJsonLd
        name="Tokenized Platinum Assets"
        description={metadata.description}
        path={metadata.alternates.canonical}
      />
      <TokenizedCommodityPageContent
      commodityName="Platinum"
      slugPrefix="tokenized-platinum"
      categoryPath="platinum"
      heroContent={{
        heroBgColor: "#E5E4E2",
        cardMediaType: "tradingview-mini-chart",
        tradingViewSymbol: "TVC:PLATINUM",
        tradingViewLineChartType: "Line",
        tradingViewShowTimeRange: true,
        tradingViewTimeFrame: "60M",
        tradingViewShowTimeScale: true,
        heroTitle: "Platinum: Rare, Refined, Yours",
        heroSubtext:
          "Platinum combines rarity, durability, and industrial importance, now tokenized. Your guide to platinum, from fundamentals to expert investment insights.",
        heroReadMoreHref: "https://totofinance.co/insights/platinum-handbook",
        ctaLabel: "Explore Assets",
        heroCtaHref: "https://app.totofinance.co/category/platinum",
        sideCardHeading: "Real Platinum, Tokenized for the Discerning Investor",
        sideCardHref: "https://www.tradingview.com/symbols/TVC-PLATINUM/",
        sideCardOpenInNewTab: true,
        unitsTokenizedValue: "$1M",
        marketAccessValue: "24/7",
      }}
      aboutStatsContent={{
        statement:
          "Platinum is one of the rarest and most strategically important metals on Earth, prized by institutions, industries, and investors for both its scarcity and its essential role in modern technology.",
        imageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778069758/platinum_m9l5w8.png",
        statsRowLabel: "PROVEN ASSET CLASS",
        counters: [
          { value: "$340B", suffix: "+", label: "Global Platinum Market Size" },
          { value: "1:1", suffix: "", label: "Physical Platinum Backing" },
        ],
      }}
      whatWeDoContent={{
        overlineLabel: "BENEFITS OF TOKENIZED PLATINUM",
        heading: "Benefits of Tokenized Platinum",
        cards: [
          {
            title: "Borderless Portability",
            body: "Move your tokenized platinum globally, securely, and instantly, free from borders or geographical restrictions of any kind.",
            href: null,
          },
          {
            title: "24/7 Global Trading",
            body: "Access platinum markets anytime, anywhere, free from market hours, intermediaries, or geographical restrictions worldwide.",
            href: null,
          },
          {
            title: "Easy Redeemability",
            body: "Redeem your tokens for real platinum anytime on demand. Delivery is insured, direct, and fully secure.",
            href: null,
          },
          {
            title: "No Storage Worries",
            body: "Your platinum is stored in insured vaults, tracked on-chain, and free from the costs of traditional storage.",
            href: null,
          },
          {
            title: "On Chain Transparency",
            body: "Real time tracking and verification of your holdings via blockchain, fully audited and always verifiable on-chain.",
            href: null,
          },
          {
            title: "Regulated Compliance",
            body: "KYC and AML checks combined with LCX asset validation ensure every platinum unit is verified, certified, and compliant.",
            href: null,
          },
        ],
      }}
      howItWorksContent={{
        overline: "HOW IT WORKS",
        heading: "Owning platinum, made effortless",
        featureImageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778069990/platinum_footer_bevvli.webp",
        steps: [
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access regulated tokenized platinum assets.",
          },
          {
            title: "Browse and Select",
            body: "Choose from available platinum backed tokens, each backed by real vault held metal, and select what fits your strategy.",
          },
          {
            title: "Hold, Trade, or Redeem",
            body: "Manage your platinum as you wish, hold it long term, transfer it peer to peer, trade on the marketplace, or redeem for physical delivery.",
          },
        ],
        subBlockOverline: "Platinum Made Simple",
        subBlockHeading: "Rare Wealth, Refined for the Modern Era",
        subBlockSubtext:
          "Toto Finance brings the rarity of platinum and the freedom of blockchain together, giving you ownership that is transparent, global, and effortlessly managed.",
        ctaLabel: "Explore Platinum",
      }}
      />
    </>
  );
}
