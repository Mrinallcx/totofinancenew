import TokenizedCommodityPageContent from "../components/TokenizedCommodityPageContent";

export const metadata = {
  title: "Tokenized Diamond Assets — Toto Finance",
  description:
    "Diamond-backed tokenized assets with compliant ownership, instant settlement, and global market access.",
  alternates: { canonical: "/tokenized-diamond-assets" },
};

export default function TokenizedDiamondAssetsPage() {
  return (
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
          "Everything about diamonds, from A to Z. This handbook is your complete guide, from beginner basics to expert investment insights. Read More",
        ctaLabel: "Explore Assets",
        sideCardHeading: "Certified Diamonds, Tokenized for the World",
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
        cards: [
          {
            title: "Cut",
            body: "A diamond's cut determines its brilliance and light performance, from round brilliants to fancy shapes. Learn More",
          },
          {
            title: "Colour",
            body: "Graded on a D to Z scale, with D being perfectly colourless. The less colour present, the rarer and more valuable the stone.",
          },
          {
            title: "Clarity",
            body: "Natural inclusions make each diamond unique. Fewer inclusions mean more brilliance, graded from Flawless (FL) to Included (I3).",
          },
          {
            title: "Carat",
            body: "Carat measures weight, not size. One carat equals 0.2 grams. True worth is always determined by all four Cs together.",
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
            title: "Mining",
            body: "Rough diamonds are unearthed through carefully managed operations, beginning their journey from earth to gem. Read More",
          },
          {
            title: "Polishing",
            body: "Skilled artisans cut and polish each rough stone, unlocking its natural brilliance through precision craftsmanship. Read More",
          },
          {
            title: "Grading",
            body: "Trained gemologists assess every diamond on the 4Cs, assigning quality grades that determine its market value. Read More",
          },
          {
            title: "Certification",
            body: "GIA, IGI, and HRD issue formal certificates verifying each diamond's quality as permanent proof of authenticity. Read More",
          },
          {
            title: "Tokenization and Retailing",
            body: "Certified diamonds are stored, insured, and digitized as blockchain tokens, ready to purchase, trade, or redeem. Read More",
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
  );
}
