import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Sapphire Assets — Toto Finance",
  description:
    "Sapphire-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-sapphire-assets" },
};

export default function TokenizedSapphireAssetsPage() {
  return (
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
          "Sapphire, a symbol of wisdom and prosperity, now within reach through tokenization. Your essential guide to sapphire from its rich history to modern investment insights. Read More",
        ctaLabel: "Explore Assets",
        sideCardHeading: "Certified Sri Lankan Sapphires, Tokenized for the Modern Collector",
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
            body: "Easily move your tokenized sapphire across borders. Your assets flow globally, seamlessly, and securely, just like any cryptocurrency asset.",
          },
          {
            title: "24/7 Global Trading",
            body: "Trade tokenized sapphire instantly, anytime and anywhere globally, free from limitations of time zones or traditional market hours.",
          },
          {
            title: "Instant Redeemability",
            body: "Easily redeem your sapphire anytime, and the physical sapphire will be delivered directly and safely to your doorstep.",
          },
          {
            title: "Affordable Storage",
            body: "Your sapphire is securely stored in a high security vault with no storage fees. We cover all custodial costs, giving you long term peace of mind at no extra charge.",
          },
          {
            title: "Fully Insured",
            body: "Each sapphire is fully insured by Lloyd's of London, ensuring protection against loss or damage while in storage. Your investment is safeguarded from day one.",
          },
          {
            title: "Onchain Transparency",
            body: "Easily track and verify your allocated sapphire anytime using real time blockchain technology and fully transparent auditing and reporting processes.",
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
  );
}
