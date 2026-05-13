import { notFound } from "next/navigation";
import PlaceholderPageContent from "../components/PlaceholderPageContent";
import {
  getFooterPlaceholderSlugs,
  getPlaceholderTitle,
  isFooterPlaceholderSlug,
} from "../../lib/footer-nav";
import { buildPageMetadata } from "../../lib/site-url";

/** Only footer placeholder slugs are valid; other one-segment URLs stay 404. */
export const dynamicParams = false;

const SLUG_DESCRIPTIONS = {
  solutions:
    "Explore Toto Finance solutions for tokenizing real-world commodities — from custody and compliance to settlement and global market access.",
  achievements:
    "Milestones, partnerships, and industry recognition earned by Toto Finance as we build the digital infrastructure for tokenized commodities.",
  "open-careers":
    "Join Toto Finance and help build the future of tokenized commodities. Explore open roles across engineering, product, compliance, and operations.",
  faq:
    "Answers to common questions about Toto Finance — tokenized commodities, custody, compliance, settlement, and how to get started.",
};

function buildPlaceholderDescription(slug, title) {
  const specificDescription = SLUG_DESCRIPTIONS[slug];
  if (specificDescription) return specificDescription;

  const readableSlug = slug
    .split("-")
    .filter(Boolean)
    .join(" ");

  return `Explore upcoming ${title} resources on Toto Finance, including practical guidance, platform updates, and details related to ${readableSlug}.`;
}
export async function generateStaticParams() {
  return getFooterPlaceholderSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (!isFooterPlaceholderSlug(slug)) {
    return {};
  }
  const title = getPlaceholderTitle(slug);
  return buildPageMetadata({
    path: `/${slug}`,
    title: `${title} — Toto Finance`,
    description: buildPlaceholderDescription(slug, title),
  });
}

export default async function FooterPlaceholderPage({ params }) {
  const { slug } = await params;
  if (!isFooterPlaceholderSlug(slug)) {
    notFound();
  }
  const title = getPlaceholderTitle(slug);
  return <PlaceholderPageContent title={title} />;
}
