import { DM_Sans } from "next/font/google";
import BharatXWidgetScripts from "./components/BharatXWidget";
import GTM from "./components/GTM";
import { DEFAULT_OG_IMAGE, SITE_NAME, getSiteUrl } from "../lib/site-url";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const siteUrl = getSiteUrl();
const siteUrlTrailing = `${siteUrl.replace(/\/$/, "")}/`;
const OG_IMAGE_URL = DEFAULT_OG_IMAGE;
const organizationLogoUrl = `${siteUrl}/totofinance-white.svg`;
const organizationContactUrl = `${siteUrl}/contact-us`;
const organizationSameAs = [
  "https://x.com/totofinance",
  "https://www.linkedin.com/company/totofinance/",
  "https://www.instagram.com/totofinance.co",
  "https://www.youtube.com/@Toto-Finance",
];

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
      logo: {
        "@type": "ImageObject",
        url: organizationLogoUrl,
      },
      sameAs: organizationSameAs,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: organizationContactUrl,
      },
    },
  ],
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: SITE_NAME,
  title: "Toto Finance — The Global Infrastructure for Tokenized Commodities",
  description:
    "Toto Finance is building the digital infrastructure for tokenized commodities - enabling asset-backed ownership, instant settlement, and compliant global trade across metals, energy, and real-world assets.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
    images: [OG_IMAGE_URL],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE_URL],
  },
  verification: {
    google: "PU5ePrpoHebS2k5_nj7bPg6af_2QfIIB2kKdlkhoT_E",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
        <meta name="apple-mobile-web-app-title" content={SITE_NAME} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
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
        <GTM />
        {children}
        <BharatXWidgetScripts />
      </body>
    </html>
  );
}
