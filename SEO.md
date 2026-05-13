# Toto Finance — SEO Status Report

A precise summary of the SEO posture of `https://totofinance.co` — what is implemented today, the standards we adhere to, and the optimization work currently in progress.

> Scope: public-facing marketing site. The application platform (`app.totofinance.co`) is treated as a separate property and is referenced via cross-property sitemap.

---

## 1. Executive Summary

The Toto Finance marketing site is built on a modern, SEO-first foundation:

- Server-rendered pages with per-route metadata, canonical URLs, and structured data
- A multi-sitemap architecture (marketing, blog, marketplace) discoverable via `robots.txt`
- Rich JSON-LD schema across the homepage, article pages, and 25 commodity / rare-earth product pages
- Optimized images, fonts, and Core Web Vitals signals
- Fully indexable URL structure with canonical 301 redirects from legacy paths
- Open Graph + Twitter Card support with a dedicated OG asset
- Accessible, semantic HTML structure with stable visible H1s

The site currently meets or exceeds the technical SEO baseline expected of an institutional-grade fintech product page.

---

## 2. Indexing & Crawlability

### 2.1 robots.txt

Available at `/robots.txt`. Key directives:

- `User-agent: *`
- `Allow: /`
- Lists multiple sitemaps for fast crawl discovery, including the cross-domain marketplace sitemap

### 2.2 Sitemaps

We publish a **sitemap index** at `/sitemap.xml` referencing three children:

| Sitemap | Path | Updates | Purpose |
| --- | --- | --- | --- |
| Sitemap index | `/sitemap.xml` | Hourly | Entry point listing all sitemaps |
| Main sitemap | `/sitemap-main.xml` | Hourly | Marketing routes (homepage, products, ecosystem, vision, rare-earth, contact, legal, etc.) |
| Blog sitemap | `/sitemap-blog.xml` | Every 5 minutes | All Insights posts with real `lastmod` from CMS |
| Marketplace sitemap | `app.totofinance.co/sitemap.xml` | Owned by app | Linked through `robots.txt` and the index for cross-property discovery |

All sitemaps:

- Use ISO-8601 `lastmod`
- Include `changefreq` and `priority` hints
- Are XML-escaped, statically rendered, and served with strong cache headers (`s-maxage` + `stale-while-revalidate`)

### 2.3 Canonical URLs

Every page exports a canonical via Next.js `metadata.alternates.canonical`. This includes:

- Homepage `/`
- Product, Vision, Ecosystem, Rare-earth, About, Contact, Docs, Legal pages
- All 25 tokenized commodity and rare-earth pages
- Blog index `/insights`
- Each blog post `/insights/[slug]`
- Footer placeholder pages (Solutions, Achievements, Careers, FAQ)

Canonicals are normalized: leading slash enforced, query strings and fragments stripped.

### 2.4 Redirects (SEO equity preservation)

Permanent (301) redirects are configured for all legacy / alternate URL patterns to consolidate ranking signals, including (but not limited to):

- `/products` → `/product`
- `/blog`, `/blogs` → `/insights` (with slug forwarding)
- `/ecosystem` → `/toto-ecosystem`
- `/vision-2030` → `/vision`
- `/rare-earth-mineral` → `/rare-earth`
- `/privacy-policy` → `/toto-privacy-policy`
- `/terms-and-condition[s]` → `/toto-terms-and-condition`
- All short commodity paths (e.g. `/tokenized-gold`, `/tokenized-copper`) → final canonical asset URLs

This avoids duplicate-content cannibalization and preserves backlink equity.

### 2.5 404 Handling

A custom 404 page is implemented with:

- Proper `404` HTTP status
- Title + description metadata
- Visible H1 (`Page not found`)
- Internal links to homepage and Insights to recover crawl flow

---

## 3. Page-Level Metadata

Every page declares its own `title`, `description`, and canonical. Highlights:

### 3.1 Homepage

- Dedicated title and description distinct from layout fallback
- Canonical set to `/`
- Open Graph image: dedicated `1200×630` Cloudinary OG asset

### 3.2 Marketing Pages

Each high-value route has unique, page-specific metadata:

- `/product`
- `/vision`
- `/toto-ecosystem`
- `/rare-earth`
- `/about-us`
- `/contact-us`
- `/docs`, `/toto-privacy-policy`, `/toto-terms-and-condition`
- `/insights` (blog index)

### 3.3 Tokenized Asset Pages (25 total)

Each tokenized commodity / rare-earth page has:

- Unique title (e.g. `Tokenized Gold Assets — Toto Finance`)
- Unique description tailored per asset
- Canonical URL
- Page-specific structured data (see §4)

### 3.4 Blog Posts

`/insights/[slug]` pages dynamically generate:

- Title from CMS post title
- Description derived from the CMS excerpt or content (HTML-stripped, length-aware)
- Canonical URL based on the post slug
- Article structured data + Breadcrumb schema

### 3.5 Footer Placeholder Pages

Pages such as `/solutions`, `/achievements`, `/open-careers`, `/faq` use a curated **per-slug** description map (no “title — Toto Finance.” repetition) to avoid thin / duplicate metadata signals. A non-repetitive fallback generator covers any future placeholder slug.

---

## 4. Structured Data (JSON-LD)

All structured data is server-rendered in JSON-LD format using `@context: https://schema.org`. Implemented schema types:

| Schema | Where | Purpose |
| --- | --- | --- |
| `WebSite` | Site-wide | Top-level entity, alternate names, publisher reference |
| `Organization` | Site-wide | Knowledge Panel signal: name, URL, **logo**, **sameAs**, **contactPoint** |
| `FinancialProduct` | All 25 tokenized asset pages | Product description, provider, fees specification |
| `BreadcrumbList` | Tokenized pages + blog posts | `Home → Products → Asset` and `Home → Insights → Post` |
| `Article` | All blog posts (`/insights/[slug]`) | Headline, description, image, datePublished, dateModified, author, publisher |

### 4.1 Organization Schema

Includes:

- `logo` as `ImageObject`
- `sameAs` array linking to verified profiles on X, LinkedIn, Instagram, YouTube
- `contactPoint` referencing `/contact-us`

### 4.2 Article Schema

Each Insights post emits:

- `headline`, `description`, `image`
- `datePublished` and `dateModified` from the CMS
- `author` and `publisher` as `Organization`
- Canonical `url`

### 4.3 FinancialProduct + Breadcrumbs

Each tokenized asset page emits a combined `@graph` containing:

- `FinancialProduct` (name, description, URL, provider, settlement specification)
- `BreadcrumbList` (Home → Products → Current asset)

### 4.4 Validation

JSON-LD payloads have been hand-checked for:

- Valid JSON shape
- Required field presence (`@context`, `@type`, identifying properties)
- Absolute URLs everywhere references are expected
- No mixed content

---

## 5. Open Graph & Twitter Cards

Implemented in the root layout and the homepage:

- `og:title`, `og:description`, `og:type=website`, `og:url`, `og:site_name`
- `og:image` set to a dedicated Cloudinary OG asset
- `twitter:card = summary_large_image`
- `twitter:title`, `twitter:description`, `twitter:image`

The homepage additionally provides a typed `images` entry with `width`, `height`, and `alt` metadata. All pages inherit the OG defaults from the layout while pages with custom needs override locally.

---

## 6. Performance & Core Web Vitals

The site is built on Next.js with App Router (server-rendered). Specific optimizations:

### 6.1 Image Optimization

- Next.js `<Image>` is used across hero, blog, ecosystem, services, and case-study sections
- Above-the-fold hero images on the Product page and the shared tokenized-asset hero use `priority` to improve LCP
- Responsive `sizes` attribute is defined for hero images
- Approved remote image sources are restricted to known hosts (Cloudinary, Framer user content, blog CMS) — reduces unknown image origins and improves cache reliability

### 6.2 Fonts

- Single brand font: **DM Sans**, loaded through `next/font/google` with `latin` subset and required weights only
- CSS variable + className pattern used to avoid layout shifts and FOUT
- Open-Type features enabled for refined letterforms

### 6.3 Resource Hints

Defined in the document head:

- `preconnect` to known media origins
- `preload` for the hero video and brand logo
- Manifest pre-declared for installable PWA behavior

### 6.4 Caching

Sitemaps and static routes are served with explicit cache headers (`s-maxage`, `stale-while-revalidate`) for fast re-crawls without origin pressure.

---

## 7. Accessibility & Semantic HTML

Modern SEO and accessibility overlap heavily; the site follows semantic conventions:

- Each page renders a single, **always-visible** `<h1>`
- Navigation, sections, articles, and lists use proper landmark / sectioning elements
- Images have meaningful `alt` text or are correctly marked decorative
- Buttons and links use proper element types
- Color contrast and focus styling are configured at the design-system level
- Animated headings have been refactored so heading text is **rendered as plain text**, not animation-hidden spans, ensuring crawler visibility

---

## 8. Web App Manifest

`/manifest.json` is fully populated for PWA + SEO signals:

- `name`, `short_name`
- **`description`** — describes the platform purpose
- **`start_url: /`**
- **`scope: /`**
- Maskable icons at 192×192 and 512×512
- `theme_color`, `background_color`, `display: standalone`

---

## 9. URL & Information Architecture

- Clean, hyphen-separated, lowercase URLs
- Stable canonical paths for all 25 tokenized asset pages
- Logical hierarchy reflected in breadcrumbs (Home → Products → Asset, Home → Insights → Post)
- No tracking parameters in canonical URLs
- Footer placeholder routes are gated to a known, finite list — unknown one-segment URLs return 404 (no crawl bloat from arbitrary slugs)

---

## 10. Content Pipeline

- The Insights blog is sourced from a managed CMS and rendered server-side
- Posts revalidate frequently (short TTLs) so fresh content appears in sitemaps and live pages quickly
- Each post inherits Article + Breadcrumb schema, canonical URL, and dynamic OG metadata derived from CMS fields

---

## 11. Recently Completed (Last Iteration)

The following SEO improvements have been deployed:

| Area | Improvement |
| --- | --- |
| Article rich results | `Article` schema on every blog post |
| Product rich results | `FinancialProduct` schema across 25 tokenized asset pages |
| Site hierarchy | `BreadcrumbList` on tokenized and blog detail pages |
| Knowledge Panel | Expanded `Organization` schema with `logo`, `sameAs`, `contactPoint` |
| Homepage SEO | Page-specific title, description, and Open Graph image |
| Placeholder pages | Unique per-slug descriptions to avoid thin/duplicate metadata |
| Manifest | Added `description`, `start_url`, `scope` for PWA compliance |
| LCP | Hero images converted to Next.js `<Image>` with `priority` and responsive `sizes` |
| H1 visibility | Hero H1s now render as plain text — guarantees crawler visibility |
| Social sharing | New brand OG image set as both Open Graph and Twitter image |

---

## 12. In Progress / Roadmap

These items are under active iteration. They take some additional time because they involve content authoring, design assets, or coordinated rollouts:

### 12.1 Content & On-Page SEO

- Author full long-form content for placeholder routes (`/solutions`, `/achievements`, `/faq`, `/open-careers`) so they move from placeholder to fully indexable pages
- Expand each tokenized asset page with deeper editorial content (FAQs, redemption flow, custodian disclosure) to support `FAQPage` and `HowTo` schema
- Internal linking pass: cross-link between commodities, vision, and insights to strengthen topical authority

### 12.2 Structured Data (Phase 2)

- `FAQPage` schema on Product and selected tokenized asset pages
- `BreadcrumbList` extended to remaining marketing routes
- `mainEntityOfPage` and richer `image` arrays on Article schema
- `BrandSchema` with verified logo positioning

### 12.3 Performance & Core Web Vitals (Phase 2)

- Continue auditing LCP / CLS across hero and CMS-driven sections
- Replace remaining oversized media with optimized derivatives
- Tune image `sizes` per breakpoint for sharper LCP signals
- Investigate route-level prefetch budgets and font display strategies

### 12.4 Localization

- Plan `hreflang` and locale-aware canonical strategy for future multi-language rollout

### 12.5 Analytics & Monitoring

- Continued monitoring through Google Search Console and Bing Webmaster Tools
- Periodic validation through Google Rich Results Test and Schema.org validator
- Lighthouse / PageSpeed Insights regression checks per release

---

## 13. SEO Quality Checklist (Current Status)

| Check | Status |
| --- | --- |
| Server-rendered HTML for every public route | ✅ |
| Unique `<title>` per route | ✅ |
| Unique meta description per route | ✅ |
| Canonical URL on every page | ✅ |
| `robots.txt` published and references all sitemaps | ✅ |
| XML sitemap index + per-section sitemaps | ✅ |
| Mobile-friendly responsive layout | ✅ |
| Single visible `<h1>` per page | ✅ |
| Open Graph + Twitter Card metadata | ✅ |
| Dedicated OG image (1200×630) | ✅ |
| `WebSite` + `Organization` schema | ✅ |
| `Article` schema on blog posts | ✅ |
| `FinancialProduct` schema on commodity pages | ✅ |
| `BreadcrumbList` schema on key 2nd-level pages | ✅ |
| Web App Manifest with `start_url` + `scope` | ✅ |
| Permanent 301 redirects for legacy URLs | ✅ |
| Modern image format support (Cloudinary `q_auto, f_auto`) | ✅ |
| Hero LCP images marked `priority` | ✅ |
| Single brand font, no layout shift | ✅ |
| 404 page with proper status + helpful UX | ✅ |

---

## 14. Summary

Toto Finance’s public site is technically robust from an SEO standpoint: it ships with strict canonical hygiene, multi-sitemap discovery, comprehensive structured data (Website, Organization, Article, FinancialProduct, Breadcrumbs), distinct per-page metadata, dedicated social sharing assets, and Core Web Vitals optimizations on hero media.

The remaining roadmap is content-led (deeper editorial coverage, additional schema types, localization preparation) rather than foundational. The platform is in a strong position to compete in commodity-finance and tokenization-related SERPs, and to qualify for rich result eligibility across product, article, breadcrumb, and organization entity types.

