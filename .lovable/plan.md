

# SEO and LLM Optimization Gap Analysis

## Current State Summary

The site already has solid foundations: per-page meta tags, hreflang alternates, JSON-LD for Organization/Product/FAQ/Article, canonical URLs, a comprehensive sitemap, Google Analytics, and prerendering for all routes. The recent internal linking work (RelatedProducts, RelatedArticles components) addresses crawl depth. Here is what is still missing to reach professional-grade SEO and LLM discoverability.

---

## Gap 1: No llms.txt File (Critical for LLM Optimization)

The emerging `llms.txt` standard (llmstxt.org) tells AI models what your site does, what content is available, and how to cite it. You have no `public/llms.txt` or `public/llms-full.txt`.

**Action:** Create `public/llms.txt` with a structured summary of the company, product catalog, blog topics, and preferred citation format. Optionally create `public/llms-full.txt` with expanded product descriptions.

---

## Gap 2: No BreadcrumbList JSON-LD Structured Data

Product pages render visual breadcrumbs (Home > Products > DRY-BAG I) but there is zero `BreadcrumbList` JSON-LD markup. Google uses this for rich breadcrumb display in SERPs, and LLMs use it to understand site hierarchy.

**Action:** Create a reusable `useBreadcrumbJsonLd` hook that injects BreadcrumbList schema. Apply to all 11 product pages, the blog hub, and all blog article pages.

---

## Gap 3: Product Schema Missing Key Properties

Current Product JSON-LD only has `name`, `description`, `brand`, `image`, `manufacturer`. Missing fields that Google explicitly supports:

- `sku` or `mpn` (product identifiers)
- `category` (e.g., "Industrial Desiccants")
- `offers` (even without a price, an `Offer` with `availability` and `priceCurrency` triggers rich results)
- `aggregateRating` (if testimonials exist per product)
- `additionalProperty` (for specs like absorption rate, shelf life)

**Action:** Enrich Product JSON-LD on all 11 product pages with `category`, `offers` (availability: InStock, priceOnRequest pattern), and `additionalProperty` for key specs.

---

## Gap 4: Article Schema Missing Key Properties

Current Article JSON-LD is missing:

- `dateModified` (Google uses this to show freshness)
- `mainEntityOfPage` (canonical URL reference)
- `publisher.logo` (required for Article rich results)
- `wordCount` (helps LLMs assess content depth)
- `articleSection` (maps to category)
- `inLanguage` (critical for multilingual sites)

**Action:** Extend Article JSON-LD with these properties across all 14 blog articles.

---

## Gap 5: No Speakable Structured Data

Google supports `speakable` markup on Article and WebPage schemas, which identifies sections suitable for text-to-speech and voice assistant answers. This is directly relevant for LLM and voice search optimization.

**Action:** Add `speakable` property to Article JSON-LD pointing to the article headline and first paragraph CSS selectors.

---

## Gap 6: Homepage Missing JSON-LD WebSite + SearchAction

The homepage has Organization schema in the static HTML, but no `WebSite` schema with `potentialAction: SearchAction`. This is what enables the Google sitelinks search box.

**Action:** Add WebSite JSON-LD with SearchAction to the homepage (even if search isn't implemented yet, it signals site structure to Google).

---

## Gap 7: Blog Hub Page Missing JSON-LD

The `/blog` page has zero structured data. It should have:
- `CollectionPage` or `Blog` schema listing all articles
- This helps search engines and LLMs understand the blog as a content hub

**Action:** Add Blog/CollectionPage JSON-LD to BlogPage.tsx.

---

## Gap 8: No Semantic HTML Landmarks

Blog articles render content inside a generic `<article>` tag but sections lack semantic structure:
- No `<header>` wrapping the article meta
- No `<main>` element on any page
- No `<aside>` for related content sections
- No `<time datetime="...">` for dates (currently just formatted text)

These landmarks help both search engines and LLMs parse page structure.

**Action:** Add `<main>` to all page layouts, wrap article dates in `<time datetime>` elements, add `<header>` and `<aside>` to article pages.

---

## Gap 9: No Open Graph Locale Tags

OG tags include title, description, image, URL, type, and site_name. Missing:
- `og:locale` (e.g., `en_US` or `da_DK`)
- `og:locale:alternate` (the other language)

These are important for multilingual social sharing and LLM language detection.

**Action:** Add `og:locale` and `og:locale:alternate` to the `usePageMeta` hook.

---

## Gap 10: Images Missing Dimensions in HTML

Product images and blog hero images use `<img>` tags without explicit `width` and `height` attributes. This causes CLS (Cumulative Layout Shift) which hurts Core Web Vitals scores.

**Action:** Add `width` and `height` attributes to key images (hero images, product images) to enable browser aspect ratio pre-calculation.

---

## Gap 11: No `<link rel="preconnect">` for External Origins

The site loads Google Analytics from `googletagmanager.com` and `google-analytics.com` but has no preconnect hints. This adds latency.

**Action:** Add `<link rel="preconnect">` and `<link rel="dns-prefetch">` to `index.html` for Google Analytics domains.

---

## Gap 12: Footer LinkedIn Link Points to Generic URL

The footer links to `https://linkedin.com` instead of the actual company LinkedIn page (`https://www.linkedin.com/company/dry-bag-denmark/` per the Organization JSON-LD).

**Action:** Fix the Footer LinkedIn URL to the real company page.

---

## Gap 13: No `lastmod` Dynamic Values in Sitemap

All sitemap entries have the same static `lastmod` date. While acceptable, having article-specific dates (matching the `date` field in blog-articles.ts) would improve freshness signals.

**Action:** This requires a build-time script enhancement. Lower priority, but note for future.

---

## Gap 14: Duplicate Route /dunnage-bag and /dunnage-bags

Both routes render the same `DunnageBagProduct` component. This creates duplicate content. Only one should be canonical; the other should redirect.

**Action:** Remove `/dunnage-bags` as a route and add a redirect to `/dunnage-bag`, or set a canonical URL on the duplicate.

---

## Gap 15: Homepage About Section Has No Internal Links

The `About.tsx` component (homepage section) renders text and feature cards with zero clickable links. It should link to `/about`, `/products`, and `/applications`.

**Action:** Make the "45+" stat link to `/about`, feature cards link to `/products` or `/applications`.

---

## Gap 16: FAQ Answers Have No Inline Links

FAQ answers are plain text strings from translations. They mention products and concepts but contain no links.

**Action:** Convert FAQ answers to support inline links (either via a simple markdown-to-JSX parser or by splitting answers into segments with link data).

---

## Implementation Priority

| Priority | Gap | Impact | Effort |
|---|---|---|---|
| 1 | llms.txt | High (LLM discoverability) | Low |
| 2 | BreadcrumbList JSON-LD | High (SERP rich results) | Low |
| 3 | Article schema enrichment | High (freshness signals) | Low |
| 4 | Product schema enrichment | High (rich results eligibility) | Medium |
| 5 | og:locale tags | Medium (multilingual SEO) | Low |
| 6 | Semantic HTML landmarks | Medium (crawl quality) | Medium |
| 7 | Footer LinkedIn fix | Low (trust signal) | Trivial |
| 8 | Preconnect hints | Medium (Core Web Vitals) | Trivial |
| 9 | Duplicate dunnage route | Medium (duplicate content) | Low |
| 10 | Homepage About links | Medium (internal linking) | Low |
| 11 | Image dimensions | Medium (CLS/Core Web Vitals) | Medium |
| 12 | WebSite + SearchAction schema | Medium (sitelinks) | Low |
| 13 | Blog hub JSON-LD | Medium (content hub signal) | Low |
| 14 | Speakable markup | Low-Medium (voice/LLM) | Low |
| 15 | FAQ inline links | Medium (internal linking) | Medium |
| 16 | Dynamic sitemap lastmod | Low (freshness) | High |

## Content Gaps (Requiring New Written Content)

These were identified in the previous blueprint and remain unaddressed:

| Missing Content | SEO Value |
|---|---|
| "Calcium chloride vs clay desiccants" article | Fills product-specific content gap |
| "Molecular sieve: Why pore size matters" article | No supporting content for this product |
| "Edge protectors: Preventing crush damage" article | No blog support for cargo cluster |
| "DRY-BAG III for long ocean voyages" article | High-value commercial keyword gap |
| "How to choose the right desiccant: Buyer's guide" | Pillar content opportunity, links all desiccant products |
| Industry case studies (wind, pharma, automotive) | Builds E-E-A-T signals, supports /applications |

## Technical Implementation Summary

The plan involves:
1. Creating `public/llms.txt` (new file)
2. Creating a `useBreadcrumbJsonLd` hook (new file)
3. Enriching existing `useJsonLd` calls across product and article pages
4. Adding `og:locale` support to `usePageMeta`
5. Adding `<main>`, `<time>`, `<header>`, `<aside>` semantic elements
6. Adding preconnect links to `index.html`
7. Fixing the Footer LinkedIn URL
8. Resolving the /dunnage-bags duplicate route
9. Adding links to Homepage About section and FAQ answers

