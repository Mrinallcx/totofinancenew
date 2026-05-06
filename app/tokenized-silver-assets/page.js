import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Silver Assets — Toto Finance",
  description:
    "Silver-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-silver-assets" },
};

export default function TokenizedSilverAssetsPage() {
  return (
    <TokenizedCommodityPageContent
      commodityName="Silver"
      slugPrefix="tokenized-silver"
      categoryPath="silver"
      heroContent={{
        heroBgColor: "#E9EEF2",
        cardMediaType: "tradingview-mini-chart",
        tradingViewSymbol: "TVC:SILVER",
        tradingViewLineChartType: "Line",
        tradingViewShowTimeRange: true,
        tradingViewTimeFrame: "60M",
        tradingViewShowTimeScale: true,
        heroTitle: "Silver: Smart, Accessible, Secure",
        heroSubtext:
          "A proven asset for industry and investors, now digitized. Your complete guide to investing in silver, covering everything from fundamentals to tokenized ownership. Read More",
        ctaLabel: "Explore Assets",
        sideCardHeading: "Real Silver, Tokenized for the Modern Investor",
        unitsTokenizedValue: "$20K",
        marketAccessValue: "24/7",
      }}
      aboutStatsContent={{
        statement:
          "Silver bridges the worlds of investment and industry, offering both store of value strength and rising demand from technology, energy, and innovation.",
        statsRowLabel: "PROVEN ASSET CLASS",
        imageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778068870/finl_ioc481.png",
        imageAlt: "Silver trophy on a minimal backdrop",
        counters: [
          { value: "$1.3T", suffix: "+", label: "Global Silver Market Size" },
          { value: "1:1", suffix: "", label: "Physical Silver Backing" },
        ],
      }}
      whatWeDoContent={{
        overlineLabel: "BENEFITS OF TOKENIZED SILVER",
        heading: "Benefits of Tokenized Silver",
        cards: [
          {
            title: "True Ownership",
            body: "Each token is 1:1 backed by physical silver, legally enforceable, with verifiable ownership rights.",
          },
          {
            title: "Full Transparency",
            body: "On chain verification of origin, purity, and custody, with every detail recorded immutably on the blockchain.",
          },
          {
            title: "Global Access",
            body: "Invest from anywhere in the world, with no banking barriers, geographical restrictions, or import limits.",
          },
          {
            title: "Instant Transferability",
            body: "Trade peer to peer or via the Toto Finance marketplace 24/7, free from time zones or traditional market hours.",
          },
          {
            title: "No Storage Worries",
            body: "Fully insured third party vault custody, eliminating the risks and costs of storing physical silver yourself.",
          },
          {
            title: "Regulated Compliance",
            body: "KYC and AML checks combined with asset validation by LCX, ensuring every silver unit is verified, certified, and compliant.",
          },
        ],
      }}
      howItWorksContent={{
        overline: "HOW IT WORKS",
        heading: "Owning silver, made effortless",
        steps: [
          {
            title: "Sign Up and Verify",
            body: "Create your account on totofinance.co and complete a quick verification to access regulated tokenized silver assets.",
          },
          {
            title: "Browse and Select",
            body: "Explore tokenized silver listings backed by real vault held silver, and choose the asset that fits your investment goals.",
          },
          {
            title: "Trade or Hold",
            body: "Hold your tokenized silver as a long term asset, transfer it peer to peer, trade it on the marketplace, or redeem for physical delivery.",
          },
        ],
        subBlockOverline: "Silver Made Simple",
        subBlockHeading: "Smart Wealth, Built for Modern Investors",
        subBlockSubtext:
          "Toto Finance combines the everyday accessibility of silver with the freedom of blockchain, giving you ownership that is transparent, global, and easy to manage.",
        ctaLabel: "Explore Silver",
        featureImageSrc:
          "https://res.cloudinary.com/dusinlidl/image/upload/v1778069036/silver_footer_rmqcv3.webp",
        featureImageAlt: "Modern urban skyline with architectural bridge",
      }}
    />
  );
}
