import AboutPageContent from "./AboutPageContent";
import { buildPageMetadata, getSiteUrl } from "../../lib/site-url";

export const metadata = buildPageMetadata({
  path: "/about-us",
  title: "About Us — Toto Finance",
  description:
    "Building Infrastructure for Global Digital Commodities. Learn about Toto Finance and our mission to tokenize global commodities.",
});

export default function AboutPage() {
  const siteUrl = getSiteUrl();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteUrl}/about-us`,
      },
    ],
  };

  const aboutPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: `${siteUrl}/about-us`,
    name: "About Toto Finance",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    mainEntity: {
      "@id": `${siteUrl}/#organization`,
      founder: [
        {
          "@type": "Person",
          name: "Monty Metzger",
          jobTitle: "Founder",
          description: "Founded LCX — $500M+ regulated crypto exchange",
          sameAs: ["https://www.linkedin.com/in/montymetzger/"],
          image:
            "https://res.cloudinary.com/dusinlidl/image/upload/v1777032441/monty_z1hq12.jpg",
        },
        {
          "@type": "Person",
          name: "Steven Gaertner",
          jobTitle: "President",
          description:
            "Built Fischler Diamonds' Asian operations — 100%+ monthly growth",
          sameAs: ["https://www.linkedin.com/in/steven-gaertner/"],
          image:
            "https://res.cloudinary.com/dusinlidl/image/upload/v1777032440/steven_nqzsof.jpg",
        },
      ],
      employee: [
        {
          "@type": "Person",
          name: "Priyanshu Rajput",
          jobTitle: "CTO",
          description:
            "Blockchain engineer — Smart contracts & Web3 infrastructure, driving RWA tokenization",
          sameAs: [
            "https://www.linkedin.com/in/priyanshu-rajput-037899189/",
          ],
          image:
            "https://res.cloudinary.com/dusinlidl/image/upload/v1777032440/priyanshu_vgdadw.jpg",
        },
        {
          "@type": "Person",
          name: "Danil Kerimi",
          jobTitle: "Non-Executive Board Member",
          description:
            "Former MD, World Economic Forum — Board Member SealSQ (Nasdaq)",
          sameAs: ["https://www.linkedin.com/in/danil-kerimi/"],
          image:
            "https://res.cloudinary.com/dusinlidl/image/upload/v1777032612/daneil_bobtsp.jpg",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <AboutPageContent />
    </>
  );
}
