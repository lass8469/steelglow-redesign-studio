

# SEO Strategy for Static File Hosting (cPanel / Web File Manager)

## The Challenge

Your site is a client-side rendered SPA. When uploaded to a traditional web host via file manager, two problems arise:

1. **Routing breaks** -- Visiting `/en/products` directly returns a 404 because there's no physical file at that path
2. **Search engines see nothing** -- Crawlers get an empty `<div id="root"></div>` instead of your content

The solution combines **build-time pre-rendering** (already partially set up) with **Apache rewrite rules** and **enhanced structured data** so every page has real HTML that search engines can index.

---

## What Will Be Done

### 1. Add `.htaccess` for Apache SPA Routing

Create `public/.htaccess` that will be copied into `dist/` at build time. It will:

- Serve pre-rendered `index.html` files when they exist (e.g., `/en/products/index.html` for `/en/products`)
- Fall back to the root `index.html` for any route that doesn't have a pre-rendered file
- Set proper MIME types, caching headers for assets, and gzip compression
- Redirect bare `/` to `/en` for language detection

### 2. Fix `HrefLangTags` Domain Bug

Currently `HrefLangTags.tsx` uses `window.location.origin` to build hreflang URLs. During pre-rendering with Puppeteer this captures `http://localhost:4173` instead of `https://desiccant.com`. Will be changed to use the hardcoded production domain constant.

### 3. Add Per-Page JSON-LD Structured Data

Extend `usePageMeta` to accept an optional JSON-LD schema object. This enables rich snippets in Google results:

- **Product pages**: `Product` schema with name, description, brand, image
- **FAQ page**: `FAQPage` schema (eligible for FAQ rich results)
- **Blog articles**: `Article` schema with author, datePublished, image
- **Home page**: Already has `Organization` schema in `index.html`

### 4. Update Sitemap with Missing Blog Articles

The current `sitemap.xml` is missing all 6 blog article URLs. Will add them with proper hreflang alternates and `lastmod` dates.

### 5. Add Build + Prerender Script

Add an npm script `build:production` that chains `vite build` followed by the Puppeteer pre-render step, producing a ready-to-upload `dist/` folder in one command.

### 6. Add a `404.html` Fallback

Create a simple `public/404.html` that redirects to `/en` -- some hosts serve this automatically for missing files.

---

## Your Workflow After Implementation

```text
1. Make changes in Lovable (auto-pushes to GitHub)
2. Open repo in StackBlitz
3. Run: npm install && npm run build:production
4. Upload the entire contents of dist/ via your web file manager
5. Done -- all routes work, search engines see full content
```

---

## Technical Details

### `.htaccess` structure

```text
RewriteEngine On

# If the request matches a pre-rendered directory with index.html, serve it
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI}/index.html -f
RewriteRule ^(.*)$ /$1/index.html [L]

# If the file or directory exists, serve it directly (JS, CSS, images)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

# Otherwise fall back to root index.html (SPA catch-all)
RewriteRule . /index.html [L]

# Compression and caching headers
```

### JSON-LD injection approach

A new `useJsonLd` hook will inject/remove a `<script type="application/ld+json">` tag in the document head, tied to each page's lifecycle. Each page passes its schema data.

### Files to create
- `public/.htaccess` -- Apache rewrite rules, compression, caching
- `public/404.html` -- Fallback redirect page
- `src/hooks/useJsonLd.ts` -- JSON-LD structured data hook

### Files to modify
- `src/components/HrefLangTags.tsx` -- Use production domain instead of `window.location.origin`
- `src/hooks/usePageMeta.ts` -- Minor cleanup
- `public/sitemap.xml` -- Add blog article URLs
- `package.json` -- Add `build:production` script
- `scripts/prerender.mjs` -- Ensure puppeteer is optional (graceful skip if not installed)
- ~8 product pages, FAQ page, blog article page -- Add JSON-LD schema calls

