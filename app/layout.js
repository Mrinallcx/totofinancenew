import { DM_Sans } from "next/font/google";
import BharatXWidgetScripts from "./components/BharatXWidget";
import { getSiteUrl } from "../lib/site-url";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const SITE_NAME = "Toto Finance";
const siteUrl = getSiteUrl();
const siteUrlTrailing = `${siteUrl.replace(/\/$/, "")}/`;

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrlTrailing}#website`,
      url: siteUrlTrailing,
      name: SITE_NAME,
      alternateName: ["Toto Finance", "totofinance.co", "totofinance.xyz"],
      publisher: { "@id": `${siteUrlTrailing}#organization` },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrlTrailing}#organization`,
      name: SITE_NAME,
      url: siteUrlTrailing,
    },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: SITE_NAME,
  title: "Toto Finance — The Global Infrastructure for Tokenized Commodities",
  description:
    "Toto Finance is building the digital infrastructure for tokenized commodities - enabling asset-backed ownership, instant settlement, and compliant global trade across metals, energy, and real-world assets.",
  openGraph: {
    siteName: SITE_NAME,
    title: "Toto Finance — The Global Infrastructure for Tokenized Commodities",
    description:
      "Enabling asset-backed ownership, instant settlement, and compliant global trade across metals, energy, and real-world assets.",
    type: "website",
    url: siteUrlTrailing,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          as="video"
          href="https://framerusercontent.com/assets/3TnIHiADX1QoCypro3Mc3TsFLKk.mp4"
          type="video/mp4"
        />
        <link
          rel="preload"
          as="image"
          href="/totofinance-white.svg"
        />
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
        />
        <link
          rel="preconnect"
          href="https://framerusercontent.com"
        />
      </head>
      <body className={`${dmSans.className} ${dmSans.variable}`}>
        {children}
        <BharatXWidgetScripts />
      </body>
    </html>
  );
}
