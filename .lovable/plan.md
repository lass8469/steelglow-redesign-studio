

# SEO Internal Linking Blueprint for Desiccant.com

---

## 1. Topic Cluster Map

The site naturally organizes into **3 pillar clusters** with supporting content:

```text
                         HOME (/)
                           |
          +----------------+----------------+
          |                |                |
     PRODUCTS          APPLICATIONS       ABOUT
     (pillar)           (pillar)         (pillar)
          |                |                |
    +-----+-----+         |          +-----+-----+
    |     |     |         |          |           |
  Desic- Cargo  Other   9 industry  Testimonials
  cants  Prot.  Prods   verticals     FAQ
    |     |     |                    Downloads
    |     |     |                    Blog (hub)
    |     |     |                       |
    v     v     v              14 technical articles
  [5pp] [4pp] [2pp]         (cluster content)
```

### Cluster A: Moisture Protection (Desiccants)
- **Pillar**: /products
- **Cluster pages**: /drybag-i, /drybag-iii, /silica, /molecular-sieve, /calcium-chloride, /retail
- **Supporting blog**: silica-gel-desiccant-guide, drybag-i-clay-desiccant-guide, chemistry-clay-mo-clay-vs-silica-gel, container-rain-dew-point-physics, vapor-pressure-wooden-pallets, mold-growth-timelines-80-rh, container-desiccant-stuffing-guide, dry-bag-retail-moisture-absorber-guide

### Cluster B: Cargo Protection
- **Pillar**: /products
- **Cluster pages**: /dunnage-bag, /dunnage-bags, /edge-protectors, /anti-slip, /stabustrap
- **Supporting blog**: dunnage-bags-container-loading-guide, anti-slip-sheets-pallet-load-stability, stabustrap-reusable-pallet-strapping

### Cluster C: Monitoring and Verification
- **Pillar**: /products (via datalogger)
- **Cluster pages**: /datalogger
- **Supporting blog**: data-loggers-vs-desiccants, data-logger-verification-guide, agriculture-feed-moisture-living-cargo

---

## 2. Current Internal Linking Audit -- Problems Found

### Critical Issues

| Issue | Severity | Pages Affected |
|---|---|---|
| **Product pages are dead ends** -- no cross-links to related products or blog articles | HIGH | All 11 product pages |
| **Blog articles have zero inline internal links** -- article body is plain text with no hyperlinks | HIGH | All 14 blog articles |
| **ApplicationsPage has no links to specific products** -- industry cards don't connect to relevant product pages | HIGH | /applications |
| **AboutPage has zero internal links** (except CTA to /contact) | MEDIUM | /about |
| **FAQPage has zero internal links** in answers (except CTA to /contact) | MEDIUM | /faq |
| **SocialProofPage CTA uses raw `<a>` tag** instead of LocalizedLink -- broken language prefix | HIGH | /testimonials |
| **BlogArticlePage has no "Related Articles" section** -- just a placeholder text | MEDIUM | All blog article pages |
| **DownloadsPage has no links to product pages** | MEDIUM | /downloads |
| **Homepage About section has no links** to /about, /products, or /applications | MEDIUM | / |

### Orphan/Semi-Orphan Pages
- **/faq** -- only accessible from mobile nav and footer, not from desktop main nav
- **/downloads** -- only in navbar as "Resources" button and footer
- **/testimonials** -- in nav but no contextual links from other pages
- **/privacy** -- only in footer (acceptable)

---

## 3. Internal Link Map -- Recommended Changes

### A. Product Pages (all 11 pages)

Each product page currently has: breadcrumb (Home > Products > [Product]) + CTA "View All Products" link. That's only 3 links total.

**Add to each product page -- "Related Products" section before the CTA:**

| Product Page | Related Products to Link | Related Blog to Link |
|---|---|---|
| /drybag-i | /drybag-iii, /calcium-chloride, /silica | drybag-i-clay-desiccant-guide, container-desiccant-stuffing-guide |
| /drybag-iii | /drybag-i, /calcium-chloride, /molecular-sieve | chemistry-clay-mo-clay-vs-silica-gel, container-rain-dew-point-physics |
| /silica | /molecular-sieve, /drybag-i, /retail | silica-gel-desiccant-guide, mold-growth-timelines-80-rh |
| /molecular-sieve | /silica, /calcium-chloride, /drybag-iii | chemistry-clay-mo-clay-vs-silica-gel |
| /calcium-chloride | /drybag-i, /drybag-iii, /molecular-sieve | container-rain-dew-point-physics, container-desiccant-stuffing-guide |
| /dunnage-bag | /edge-protectors, /anti-slip, /stabustrap | dunnage-bags-container-loading-guide |
| /edge-protectors | /anti-slip, /stabustrap, /dunnage-bag | anti-slip-sheets-pallet-load-stability |
| /anti-slip | /edge-protectors, /stabustrap, /dunnage-bag | anti-slip-sheets-pallet-load-stability |
| /stabustrap | /anti-slip, /edge-protectors, /dunnage-bag | stabustrap-reusable-pallet-strapping |
| /retail | /silica, /drybag-i | dry-bag-retail-moisture-absorber-guide |
| /datalogger | /drybag-i, /silica, /calcium-chloride | data-loggers-vs-desiccants, data-logger-verification-guide |

**Implementation**: Add a "Related Solutions" grid section with 3 product cards + 2 blog article cards before each product page's final CTA section. Also add an "Explore industry applications" link to /applications.

### B. Blog Articles -- Inline Links + Related Articles

**For each blog article, add:**
1. Inline contextual links within article body text (via a new "link" section type or by enriching existing text sections with JSX links)
2. A "Related Articles" grid at the bottom showing 3 related articles

**Article-to-article link map:**

| Article | Link to Products | Link to Sibling Articles |
|---|---|---|
| vapor-pressure-wooden-pallets | /drybag-i, /datalogger | container-rain-dew-point-physics, mold-growth-timelines-80-rh |
| container-rain-dew-point-physics | /drybag-i, /drybag-iii, /calcium-chloride | vapor-pressure-wooden-pallets, container-desiccant-stuffing-guide |
| chemistry-clay-mo-clay-vs-silica-gel | /drybag-i, /silica | silica-gel-desiccant-guide, drybag-i-clay-desiccant-guide |
| data-loggers-vs-desiccants | /datalogger, /drybag-i | data-logger-verification-guide, container-rain-dew-point-physics |
| agriculture-feed-moisture-living-cargo | /drybag-i, /datalogger | mold-growth-timelines-80-rh, vapor-pressure-wooden-pallets |
| mold-growth-timelines-80-rh | /drybag-i, /silica, /calcium-chloride | vapor-pressure-wooden-pallets, container-rain-dew-point-physics |
| silica-gel-desiccant-guide | /silica | chemistry-clay-mo-clay-vs-silica-gel, mold-growth-timelines-80-rh |
| drybag-i-clay-desiccant-guide | /drybag-i | chemistry-clay-mo-clay-vs-silica-gel, container-desiccant-stuffing-guide |
| dunnage-bags-container-loading-guide | /dunnage-bag, /edge-protectors | anti-slip-sheets-pallet-load-stability, stabustrap-reusable-pallet-strapping |
| data-logger-verification-guide | /datalogger | data-loggers-vs-desiccants, agriculture-feed-moisture-living-cargo |
| anti-slip-sheets-pallet-load-stability | /anti-slip, /edge-protectors | dunnage-bags-container-loading-guide, stabustrap-reusable-pallet-strapping |
| stabustrap-reusable-pallet-strapping | /stabustrap | anti-slip-sheets-pallet-load-stability, dunnage-bags-container-loading-guide |
| dry-bag-retail-moisture-absorber-guide | /retail, /silica | silica-gel-desiccant-guide, mold-growth-timelines-80-rh |
| container-desiccant-stuffing-guide | /drybag-i, /drybag-iii, /calcium-chloride | container-rain-dew-point-physics, drybag-i-clay-desiccant-guide |

### C. ApplicationsPage -- Add Product Links per Industry

Each industry card should link to 1-2 relevant products:

| Industry | Product Links |
|---|---|
| Pharmaceutical | /silica, /molecular-sieve |
| Electronics | /silica, /molecular-sieve |
| Food | /drybag-i, /calcium-chloride |
| Logistics | /dunnage-bag, /anti-slip |
| Automotive | /drybag-iii, /edge-protectors |
| Wind Energy | /drybag-i, /stabustrap |
| Chemical | /molecular-sieve, /calcium-chloride |
| Textile | /silica, /drybag-i |
| Metal | /drybag-iii, /calcium-chloride |

### D. AboutPage -- Add Contextual Links

Add links to: /products (in "What We Offer" section), /applications, /testimonials (in company description), /blog (in offerings section).

### E. FAQPage -- Add Inline Links in Answers

FAQ answers should contain contextual links to relevant product pages and blog articles where the answer references specific products or concepts.

### F. Homepage -- Add Links in About Section

The About component on the homepage should link "45+ years" to /about, feature icons should link to /applications, and the section should include a "View all products" link to /products.

### G. Fix SocialProofPage CTA Bug

Line 209-214 in SocialProofPage.tsx uses a raw `<a href="/contact">` instead of `<LocalizedLink to="/contact">`. This breaks the language prefix routing.

---

## 4. Anchor Text Strategy

### Anchor Mix Targets

| Type | Target % | Example |
|---|---|---|
| Exact match | 10% max | "silica gel desiccant", "container desiccants" |
| Partial match | 30% | "our silica gel range", "clay-based desiccant solutions" |
| Semantic variation | 25% | "moisture absorption products", "cargo securing solutions" |
| Natural sentence | 20% | "learn how dew point physics affects your shipments", "see what our customers say" |
| Branded | 15% | "DRY-BAG I", "DESICCANT Stabustrap", "Desiccant.com's range" |

### Anchor Examples by Product

| Product | Exact (10%) | Partial (30%) | Semantic (25%) | Natural (20%) | Branded (15%) |
|---|---|---|---|---|---|
| /drybag-i | "clay desiccant" | "clay-based container desiccant" | "moisture protection for ocean freight" | "discover how to prevent container rain" | "DRY-BAG I" |
| /silica | "silica gel" | "silica gel sachets" | "pharmaceutical-grade moisture absorber" | "explore small-format desiccant options" | "Desiccant.com Silica Gel" |
| /dunnage-bag | "dunnage bags" | "inflatable void fillers" | "prevent cargo shifting in transit" | "see how air bags stabilise your load" | "our Dunnage Bag range" |
| /anti-slip | "anti-slip sheets" | "pallet grip sheets" | "prevent load slippage" | "keep pallets from sliding during transport" | "DESICCANT Anti-Slip" |

### Over-Optimization Risks to Avoid
- Do NOT use "container desiccant" as anchor for both /drybag-i and /drybag-iii -- this causes cannibalization. Use "clay desiccant bags" for DRY-BAG I and "high-capacity calcium chloride desiccant" for DRY-BAG III.
- Do NOT link /silica and /molecular-sieve with the same "industrial desiccant" anchor. Differentiate: "silica gel beads" vs "molecular sieve pellets".
- The /dunnage-bag and /dunnage-bags routes serve the same component -- consolidate to one canonical URL to avoid duplicate content signals.

---

## 5. Link Frequency Guidelines

Based on 1 link per 120-180 words:

| Page Type | Estimated Word Count | Target Links | Pillar | Cluster | Commercial |
|---|---|---|---|---|---|
| Product page | ~400 words | 3-4 body links | 1 (/products) | 2 related products | 1 (/contact) |
| Blog article | ~1500-2500 words | 10-18 body links | 1 (/products) | 4-6 articles + 3-4 products | 1-2 (/contact, /downloads) |
| Applications | ~600 words | 4-5 body links | 1 (/products) | 2-3 product links | 1 (/contact) |
| About | ~500 words | 3-4 body links | 1 (/products) | 1 (/applications), 1 (/testimonials) | 1 (/contact) |
| FAQ | ~800 words | 5-6 inline links | 1 (/products) | 3-4 product/blog | 1 (/contact) |
| Homepage | ~300 words | 3-4 section links | N/A (is the pillar) | 2 (/products, /applications) | 1 (/contact) |

---

## 6. Missing Content Opportunities

| Gap | Suggested New Content | Cluster Fit |
|---|---|---|
| No calcium-chloride-specific blog article | "Calcium chloride vs clay desiccants: When to choose high-capacity absorption" | Cluster A |
| No molecular-sieve-specific blog article | "Molecular sieve desiccants: Why pore size matters for gas and moisture separation" | Cluster A |
| No edge-protectors-specific blog article | "Edge protectors and corner boards: Preventing crush damage in stacked pallets" | Cluster B |
| No DRY-BAG III-specific blog article | "DRY-BAG III: High-capacity calcium chloride desiccant for long ocean voyages" | Cluster A |
| No industry case study content | Case studies per industry vertical (pharma, automotive, wind) linking to /applications and products | Cross-cluster |
| No comparison/buying guide | "How to choose the right desiccant: A complete buyer's guide" -- links to all 5 desiccant products | Cluster A pillar |

---

## 7. Implementation Plan

### Phase 1: Quick Fixes (structural)
1. Fix SocialProofPage.tsx raw `<a>` tag to `<LocalizedLink>`
2. Add "Related Products" section component (reusable across all product pages)
3. Add "Related Articles" section to BlogArticlePage.tsx (replace placeholder)

### Phase 2: Product Page Cross-Links
4. Add related products + blog links to all 11 product pages
5. Add /applications link to product page CTAs

### Phase 3: Blog Internal Links
6. Add a new section type "rich-text" to the article framework that supports inline links (or convert key text sections to include JSX link components)
7. Build the related articles data mapping and render 3 related articles at article bottom

### Phase 4: Supporting Page Links
8. Add product links to ApplicationsPage industry cards
9. Add contextual links to AboutPage sections
10. Add inline links in FAQPage answers
11. Add product links to DownloadsPage
12. Add links in Homepage About component

### Phase 5: Content Gaps
13. Create 4-6 new blog articles to fill the content gaps identified above

---

## 8. Technical Implementation Details

### New Reusable Component: RelatedProducts
Create `src/components/RelatedProducts.tsx` -- a grid of 3 product cards + 2 blog article cards that accepts configuration props. Used on every product page.

### New Component: RelatedArticles
Create `src/components/RelatedArticles.tsx` -- a grid of 3 article cards for the blog article page. Add a `relatedSlugs` field to the Article type to define relationships.

### Article Type Extension
Add to the `Article` interface in `blog-articles.ts`:
- `relatedSlugs?: string[]` -- array of 3 related article slugs
- `productLinks?: { path: string; label: string }[]` -- products referenced in the article

### Rich Text in Articles
Add a new section type `"rich-text"` that accepts JSX-compatible content with inline links, or modify the `"text"` type to support markdown-style links that get parsed into `<LocalizedLink>` components during rendering.

