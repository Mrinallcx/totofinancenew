import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Toto Finance — The Global Infrastructure for Tokenized Commodities",
  description:
    "Toto Finance is building the digital infrastructure for tokenized commodities - enabling asset-backed ownership, instant settlement, and compliant global trade across metals, energy, and real-world assets.",
  openGraph: {
    title: "Toto Finance — The Global Infrastructure for Tokenized Commodities",
    description:
      "Enabling asset-backed ownership, instant settlement, and compliant global trade across metals, energy, and real-world assets.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Toto" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          as="video"
          href="https://res.cloudinary.com/djsb5ye4c/video/upload/v1773754964/totofinance%20background%2001.mp4"
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
      <body className={`${dmSans.className} ${dmSans.variable}`}>{children}</body>
    </html>
  );
}
