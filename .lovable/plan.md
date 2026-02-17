

# Add GA4 Analytics + JSON-LD Structured Data + Domain Fixes

## What This Plan Covers
Three things to get your site ready for Google Analytics and Search Console on desiccant.com:

1. **Google Analytics 4 (GA4)** -- tracking across the entire site, including page view events on every route change (important for single-page apps)
2. **JSON-LD Structured Data** -- the Organization schema from your old site, injected into every page for richer search results
3. **Domain corrections** -- update sitemap.xml and robots.txt from `drybag.dk` to `desiccant.com`

No additional API keys or accounts are needed -- you already have your GA4 measurement ID (`G-6VBQ7QYGD1`).

---

## Changes

### 1. Add GA4 script to `index.html`
Insert the Google Analytics gtag.js snippet into the `<head>` of `index.html` with your measurement ID `G-6VBQ7QYGD1`. This loads the tracker on every page.

### 2. Track SPA route changes
Since this is a single-page app, navigating between pages doesn't trigger a full page load. A small `useGoogleAnalytics` hook will be created that listens to React Router location changes and sends a `page_view` event to GA4 on each navigation. This hook will be called once in the `LanguageLayout` component so it covers all routes.

### 3. Add JSON-LD Organization schema to `index.html`
Insert the structured data block you provided (Organization type with contact point, social links, logo) directly into the `<head>` of `index.html`, updated with the `desiccant.com` domain.

### 4. Update `sitemap.xml` domain
Replace all `drybag.dk` references with `desiccant.com`.

### 5. Update `robots.txt` domain
Replace the sitemap URL from `drybag.dk` to `desiccant.com`.

### 6. Update OG image URLs in `index.html`
Replace the placeholder Lovable OG image URLs with `https://desiccant.com/og-image.png` (or remove them so they don't point to lovable.dev). You can upload a proper OG image later.

---

## Technical Details

### New file: `src/hooks/useGoogleAnalytics.ts`
```typescript
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window { gtag: (...args: any[]) => void; }
}

export const useGoogleAnalytics = () => {
  const location = useLocation();
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search]);
};
```

### Modified files
| File | Change |
|------|--------|
| `index.html` | Add gtag.js script, JSON-LD block, update OG image URLs, remove Lovable/Twitter references |
| `src/hooks/useGoogleAnalytics.ts` | New hook (see above) |
| `src/components/LanguageLayout.tsx` | Call `useGoogleAnalytics()` once |
| `public/sitemap.xml` | Replace `drybag.dk` with `desiccant.com` (all occurrences) |
| `public/robots.txt` | Replace sitemap URL domain |

### Search Console setup (after deploy)
Once deployed to desiccant.com, you can verify your site in Google Search Console by:
- Going to Search Console and adding `desiccant.com` as a property
- Verifying via the GA4 method (since gtag is already installed, verification is automatic)
- Submitting `https://desiccant.com/sitemap.xml`

