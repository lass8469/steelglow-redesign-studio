

# Route-Based Language Prefixes for SEO

## What This Does
Every page will be available at both `/en/...` and `/da/...` URLs (e.g., `/da/about`, `/en/products`). The language in the URL determines the page language. Search engines will be able to index both versions separately. The root `/` will default to English (or redirect to `/en/`).

## How It Works

1. **Add a language wrapper route** in `App.tsx` using React Router's `/:lang` parameter. All existing routes will be nested under `/:lang/*` so they work with both `/en/about` and `/da/about`.

2. **Keep bare routes working** by also keeping the existing routes without a prefix (defaulting to English), or redirecting `/about` to `/en/about`.

3. **Sync URL language with LanguageContext** -- update the `LanguageProvider` to read the language from the URL param (via `useParams`) instead of only from `localStorage`. When the URL says `/da/...`, the page renders in Danish automatically.

4. **Update all internal `<Link>` components** across the Navbar, Footer, and all pages to include the current language prefix (e.g., `/${lang}/about` instead of `/about`). A helper hook like `useLocalizedPath(path)` will make this easy.

5. **Update the language toggle** so switching language navigates to the same page but with the other language prefix (e.g., from `/en/about` to `/da/about`) instead of just updating context.

6. **Add `hreflang` meta tags** to `index.html` or dynamically via a `<Helmet>`-style approach, telling search engines about the alternate language version of each page.

---

## Technical Details

### Route Structure Change (App.tsx)
- Wrap all routes in a `/:lang` parent route with a layout component that reads the lang param and sets context
- Add a redirect from `/` to `/en/`
- Keep a catch-all `*` for 404

### New Helper: `useLocalizedPath` Hook
- Returns a function `localizedPath(path)` that prepends the current language prefix
- Used across all `<Link to={...}>` calls

### LanguageContext Update
- Read language from URL param first, fall back to `localStorage`
- `setLanguage` will navigate to the new lang prefix URL using `useNavigate`

### Components to Update
- `Navbar.tsx` -- all `<Link>` tags and the mobile menu links
- `Footer.tsx` -- all footer links
- `LanguageToggle.tsx` -- switch language via navigation
- All page components that have internal `<Link>` elements (CTAs, breadcrumbs, etc.)
- `productItems` array in Navbar needs dynamic href generation

### hreflang Tags
- Add a small component that injects `<link rel="alternate" hreflang="en" href="...">` and `<link rel="alternate" hreflang="da" href="...">` into the document head for the current page

### What Stays the Same
- All translation strings in `LanguageContext.tsx` remain unchanged
- All page components render identically -- only the URL and language source changes
- `localStorage` still used as a preference hint for the root `/` redirect

