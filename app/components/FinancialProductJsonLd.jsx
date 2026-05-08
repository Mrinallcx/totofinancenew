import { getSiteUrl } from "../../lib/site-url";

const siteUrl = getSiteUrl();

export default function FinancialProductJsonLd({ name, description, path }) {
  const normalizedPath = path?.startsWith("/") ? path : `/${path || ""}`;
  const url = `${siteUrl}${normalizedPath}`;
  const productListingUrl = `${siteUrl}/product`;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "FinancialProduct",
              name,
              description,
              url,
              provider: { "@type": "Organization", name: "Toto Finance" },
              feesAndCommissionsSpecification: "Compliant institutional-grade settlement",
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: siteUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Products",
                  item: productListingUrl,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name,
                },
              ],
            },
          ],
        }),
      }}
    />
  );
}
