/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/product", permanent: true },
      { source: "/products/:path*", destination: "/product/:path*", permanent: true },
      { source: "/vision-2030", destination: "/vision", permanent: true },
      { source: "/ecosystem", destination: "/toto-ecosystem", permanent: true },
      { source: "/rare-earth-mineral", destination: "/rare-earth", permanent: true },
      { source: "/blog", destination: "/insights", permanent: true },
      { source: "/blog/:slug*", destination: "/insights/:slug*", permanent: true },
      { source: "/blogs", destination: "/insights", permanent: true },
      { source: "/blogs/:slug*", destination: "/insights/:slug*", permanent: true },
      { source: "/doc-imprint", destination: "/docs", permanent: true },
      { source: "/tokenized-gold", destination: "/tokenized-gold-assets", permanent: true },
      { source: "/tokenized-gold/:path*", destination: "/tokenized-gold-assets/:path*", permanent: true },
      { source: "/tokenized-silver", destination: "/tokenized-silver-assets", permanent: true },
      { source: "/tokenized-silver/:path*", destination: "/tokenized-silver-assets/:path*", permanent: true },
      { source: "/tokenized-platinum", destination: "/tokenized-platinum-assets", permanent: true },
      { source: "/tokenized-platinum/:path*", destination: "/tokenized-platinum-assets/:path*", permanent: true },
      { source: "/tokenized-diamonds", destination: "/tokenized-diamonds-assets", permanent: true },
      { source: "/tokenized-diamonds/:path*", destination: "/tokenized-diamonds-assets/:path*", permanent: true },
      { source: "/tokenized-sapphire", destination: "/tokenized-sapphire-assets", permanent: true },
      { source: "/tokenized-sapphire/:path*", destination: "/tokenized-sapphire-assets/:path*", permanent: true },
      { source: "/tokenized-copper", destination: "/tokenized-copper-assets", permanent: true },
      { source: "/tokenized-copper/:path*", destination: "/tokenized-copper-assets/:path*", permanent: true },
      { source: "/tokenized-tin", destination: "/tokenized-tin-assets", permanent: true },
      { source: "/tokenized-tin/:path*", destination: "/tokenized-tin-assets/:path*", permanent: true },
      { source: "/tokenized-iron", destination: "/tokenized-iron-assets", permanent: true },
      { source: "/tokenized-iron/:path*", destination: "/tokenized-iron-assets/:path*", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "blog.totofinance.co",
      },
    ],
  },
};

export default nextConfig;
