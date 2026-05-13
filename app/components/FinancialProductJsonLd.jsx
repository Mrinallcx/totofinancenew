import { getSiteUrl } from "../../lib/site-url";
import { getAssetByPath, getBreadcrumbItems } from "../../lib/internal-linking";

const siteUrl = getSiteUrl();

export default function FinancialProductJsonLd({ name, description, path }) {
  const normalizedPath = path?.startsWith("/") ? path : `/${path || ""}`;
  const url = `${siteUrl}${normalizedPath}`;
  const asset = getAssetByPath(normalizedPath);
  const breadcrumbItems = asset
    ? getBreadcrumbItems(asset.commodityName)
    : [
        { label: "Home", href: "/" },
        { label: "Products", href: "/product" },
        { label: name, href: null },
      ];

  const itemListElement = breadcrumbItems.map((item, index) => {
    const breadcrumb = {
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
    };

    if (item.href) {
      breadcrumb.item = `${siteUrl}${item.href}`;
    }

    return breadcrumb;
  });

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
              itemListElement,
            },
          ],
        }),
      }}
    />
  );
}
