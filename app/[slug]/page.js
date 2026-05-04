import { notFound } from "next/navigation";
import PlaceholderPageContent from "../components/PlaceholderPageContent";
import {
  getFooterPlaceholderSlugs,
  getPlaceholderTitle,
  isFooterPlaceholderSlug,
} from "../../lib/footer-nav";

/** Only footer placeholder slugs are valid; other one-segment URLs stay 404. */
export const dynamicParams = false;

export async function generateStaticParams() {
  return getFooterPlaceholderSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!isFooterPlaceholderSlug(slug)) {
    return {};
  }
  const title = getPlaceholderTitle(slug);
  return {
    title: `${title} — Toto Finance`,
    description: `${title} — Toto Finance.`,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function FooterPlaceholderPage({ params }) {
  const { slug } = await params;
  if (!isFooterPlaceholderSlug(slug)) {
    notFound();
  }
  const title = getPlaceholderTitle(slug);
  return <PlaceholderPageContent title={title} />;
}
