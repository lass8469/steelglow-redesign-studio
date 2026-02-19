

## SEO Keyword Optimization Plan

### Target Keywords

**English:** Silica, Silica Gel, Desiccant, Desiccant bag, desiccant pack, desiccant bags, desiccants, moisture control, Dunnage bags, Datalogger, Molecular Sieve, absorption, adsorption, industrial desiccant

**Danish:** Torremiddel, Fugtfjerner, Fugtbeskyttelse, Fragtskade, Lastsikring, Luftpuder, fugtkontrol, fugtpose, fugtposer, industri torremiddel, industrielle torremidler

### Strategy

Natural integration of keywords into existing translation strings, meta tags, headings, and body copy -- no new pages or structural changes needed. Every edit will read naturally and avoid repetitive stuffing.

### Keyword-to-Page Mapping

| Keyword cluster | Primary page(s) | Placement |
|---|---|---|
| Silica, Silica Gel | /silica, Homepage, Products | Meta title/desc, H1, product descriptions |
| Desiccant, desiccants, industrial desiccant | Homepage, /products, /about | Meta title/desc, H1, hero copy, about copy |
| Desiccant bag/pack/bags | /drybag-i, /drybag-iii, /products, FAQ | Product descriptions, FAQ answers |
| Moisture control, fugtkontrol | Homepage, /applications, /about | Hero, about section, industry descriptions |
| Fugtfjerner, fugtpose, fugtposer | DA: Homepage, /products, product pages | Danish meta, H2s, product descriptions |
| Fugtbeskyttelse | DA: /products, /applications | Section headings, meta descriptions |
| Fragtskade, Lastsikring | DA: /dunnage-bag, /applications | Danish product copy, application descriptions |
| Luftpuder, Dunnage bags | /dunnage-bag, Homepage | Product titles, meta, descriptions |
| Datalogger | /datalogger | Meta, H1, descriptions |
| Molecular Sieve | /molecular-sieve | Meta, H1, descriptions |
| Absorption, adsorption | /silica, /drybag-i, /drybag-iii, FAQ, Blog | Technical specs, FAQ answers, body copy |

---

### Changes by File

#### 1. `src/contexts/LanguageContext.tsx` (primary file -- all translation strings)

**English meta tags (lines ~865-907):**
- `meta.home.title`: "Industrial Desiccants & Moisture Control Solutions | Desiccant.com"
- `meta.home.description`: Add "desiccant bags", "desiccant packs", "moisture control" naturally
- `meta.products.title`: "Industrial Desiccant Bags, Silica Gel & Cargo Protection | Desiccant.com"
- `meta.products.description`: Weave in "desiccant packs", "moisture control", "industrial desiccant"
- `meta.silica.title`: "Silica Gel Desiccant Packets | Moisture Control for E-Commerce & Industry"
- `meta.silica.description`: Add "silica gel desiccant bags", "absorption", "moisture control"
- `meta.dunnage.title`: Add "dunnage bags" more prominently
- `meta.molecular.title`: Ensure "molecular sieve desiccant" appears
- `meta.applications.title`: Add "moisture control" / "industrial desiccant"

**Danish meta tags (lines ~1763-1805):**
- `meta.home.title`: Include "torremiddel", "fugtkontrol", "fugtbeskyttelse"
- `meta.home.description`: Add "fugtpose", "fugtfjerner", "industrielle torremidler"
- `meta.products.title`: "Industrielle Torremidler, Silica Gel & Fugtbeskyttelse | Desiccant.com"
- `meta.products.description`: Weave in "fugtposer", "fugtkontrol", "industri torremiddel"
- `meta.silica.title`: "Silica Gel Torremiddel - Fugtfjerner til E-handel & Industri"
- `meta.silica.description`: Add "fugtpose", "fugtbeskyttelse"
- `meta.applications.title`: Add "fugtkontrol", "fugtbeskyttelse", "fragtskade"
- `meta.dunnage.title`: "Luftpuder (Dunnage Bags) - Lastsikring til Transport"
- `meta.dunnage.description`: Include "lastsikring", "fragtskade"

**English body copy refinements:**
- `hero.description`: Naturally include "moisture control" and "desiccant bags"
- `about.description`: Weave in "industrial desiccant", "moisture control", "desiccant packs"
- `about.title2`: "high-quality industrial desiccants"
- `products.description`: Include "desiccant bags", "moisture control"
- `productsPage.desiccantsDesc`: Add "desiccant bags and desiccant packs" naturally
- `silica.description`: Include "silica gel desiccant", "absorption", "moisture control"
- `dunnage.description`: Ensure "dunnage bags" appears in context
- `faqPage.a1`: Expand to include "desiccant bag", "desiccant pack", "adsorption vs absorption"
- `faqPage.a2`: Include "silica gel", "molecular sieve", "industrial desiccant" terms
- `industries.description`: Include "moisture control" and "desiccants"

**Danish body copy refinements:**
- `hero.description`: Include "torremidler", "fugtkontrol", "fugtbeskyttelse"
- `about.description`: Add "industrielle torremidler", "fugtkontrol", "fugtfjerner"
- `about.title2`: "industrielle torremidler af hojeste kvalitet"
- `products.description`: Add "fugtposer", "fugtkontrol"
- `productsPage.desiccantsDesc`: Include "fugtposer", "industri torremiddel"
- `productsPage.cargoDesc`: Include "lastsikring", "fragtskade"
- Silica Danish strings: Add "fugtfjerner", "fugtpose"
- Dunnage Danish strings: Add "luftpuder", "lastsikring", "fragtskade"
- FAQ Danish answers: Include "torremiddel", "fugtpose", "fugtfjerner", "adsorption/absorption"

#### 2. `index.html`
- Update the static fallback `<meta name="description">` to include "desiccant bags", "moisture control", "industrial desiccant"
- Update `og:description` to match
- Update the JSON-LD Organization `description` to include target keywords naturally
- Update `<noscript>` content to include keyword-rich anchor text (e.g., "Silica Gel Desiccant", "Industrial Desiccant Bags")

#### 3. `public/sitemap.xml`
- Add `<lastmod>` dates to all URLs (signals freshness to Google)
- Add `<changefreq>` tags for key pages

#### 4. Image alt text in product pages
- **SilicaProduct.tsx**: Change alt from "Silica Gel Packets" to "Silica gel desiccant packets for moisture control"
- **DunnageBagProduct.tsx**: Include "dunnage bags" in alt text
- **DryBagIProduct.tsx / DryBagIIIProduct.tsx**: Include "desiccant bag" in alt text
- **MolecularSieveProduct.tsx**: Include "molecular sieve desiccant" in alt text
- **ProductsPage.tsx**: Localize alt text using `t()` function for Danish equivalents

#### 5. `src/components/Products.tsx` (homepage products section)
- Ensure product card alt text includes target keywords

### Principles Applied
- **No keyword stuffing**: Each keyword appears max 2-3 times per page in different contexts (title, description, body)
- **Semantic variation**: Using "desiccant bags", "desiccant packs", "desiccant packets" interchangeably
- **Danish-first for DK terms**: Danish keywords only in Danish locale strings
- **Long-tail integration**: Phrases like "industrial desiccant bags for shipping" read naturally
- **Existing structure preserved**: No new components, routes, or structural changes

### Estimated Scope
- ~80 translation string edits in `LanguageContext.tsx`
- ~5 static text edits in `index.html`
- ~10 alt-text updates across product page components
- Sitemap metadata additions

