

## Add Per-Page JSON-LD Schema with Full Language Support

### Current State

- **`index.html`** has a hardcoded Organization JSON-LD that appears on **every page in both languages** -- this is the "Organization on all pages" issue.
- **7 pages have NO schema at all**: AboutPage, ApplicationsPage, ContactPage, DownloadsPage, SocialProofPage, ProductsPage, PrivacyPage.
- **Pages that DO have schema** (product pages, FAQ, blog) already use `language` for URLs and `t()` for some descriptions, so they partially support both languages.
- **Issue**: Some product schemas have hardcoded English strings (e.g. `name: "Silica Gel Desiccant"`, `category: "Industrial Desiccants"`) that don't change for `/da/` routes.

### What Changes

#### 1. Remove hardcoded Organization from `index.html`
Delete the JSON-LD block (lines 47-68). Move it into `Index.tsx` via `useJsonLd`.

#### 2. `Index.tsx` -- Add Organization schema dynamically
Add Organization + existing WebSite schema. Use `language` to set `inLanguage` and localized URL.

#### 3. Add schema to 7 missing pages (both languages)
Each page will use `t()` for translatable fields and `language` for URLs:

| Page | Schema Type | Language-aware fields |
|------|-----------|----------------------|
| **ProductsPage** | `CollectionPage` + `ItemList` | `name`, `description` via `t()`, product URLs via `/${language}/...` |
| **AboutPage** | `AboutPage` | `name`, `description` via `t()`, `inLanguage` |
| **ContactPage** | `ContactPage` + `LocalBusiness` | `name`, `description` via `t()`, `inLanguage` |
| **ApplicationsPage** | `WebPage` | `name`, `description` via `t()`, `inLanguage` |
| **DownloadsPage** | `WebPage` | `name`, `description` via `t()`, `inLanguage` |
| **SocialProofPage** | `WebPage` | `name`, `description` via `t()`, `inLanguage` |
| **PrivacyPage** | `WebPage` | `name`, `description` via `t()`, `inLanguage` |

All will also get `useBreadcrumbJsonLd` with localized breadcrumb names and paths.

#### 4. Fix existing product schemas for language support
Product pages currently have hardcoded English `name` values (e.g. `"Silica Gel Desiccant"`). Update these to use `t()` where translations exist, and add `inLanguage: language` to each schema.

#### 5. How SSG captures per-language schema
The prerender script visits both `/en/about` and `/da/about` separately. Each visit triggers `useJsonLd` with the correct language context, so the pre-rendered HTML for `/da/about` will contain Danish schema and `/en/about` will contain English schema. No additional SSG changes needed.

### Files Modified
- `index.html` -- remove hardcoded Organization JSON-LD
- `src/pages/Index.tsx` -- add Organization schema
- `src/pages/AboutPage.tsx` -- add AboutPage schema + breadcrumb
- `src/pages/ApplicationsPage.tsx` -- add WebPage schema + breadcrumb
- `src/pages/ContactPage.tsx` -- add ContactPage + LocalBusiness schema + breadcrumb
- `src/pages/DownloadsPage.tsx` -- add WebPage schema + breadcrumb
- `src/pages/SocialProofPage.tsx` -- add WebPage schema + breadcrumb
- `src/pages/ProductsPage.tsx` -- add CollectionPage + ItemList schema + breadcrumb
- `src/pages/PrivacyPage.tsx` -- add WebPage schema + breadcrumb
- All 11 product pages -- add `inLanguage` property to existing Product schema

