

## Add LinkedIn Insight Tag (Partner ID: 8674345)

### Implementation

**1. `index.html` — base snippet**

Add LinkedIn's official partner script in `<head>` right after the GA block, with Partner ID `8674345` baked in. Place the `<noscript>` pixel fallback in `<body>` (HTML5 rule: `<noscript>` in `<head>` may only contain metadata, not `<img>`).

**2. `src/hooks/useLinkedInInsight.ts` — new SPA route hook**

Mirrors `useGoogleAnalytics`. On every React Router navigation, calls `window.lintrk('track')` to fire a synthetic PageView so client-side route changes are counted. Reuses the same bot-resolution filter (1280x1200, 3840x2160, 800x600, etc.) so LinkedIn data stays consistent with GA.

```ts
useEffect(() => {
  if (!isBotResolution() && typeof window.lintrk === "function") {
    window.lintrk("track");
  }
}, [location.pathname, location.search]);
```

**3. `src/components/LanguageLayout.tsx` — wire up the hook**

Add `useLinkedInInsight()` next to the existing `useGoogleAnalytics()` call so it runs on every routed page (both `/en/*` and `/da/*`).

**4. `scripts/prerender.mjs` — no change**

Tag lives in `index.html`, so every prerendered HTML file ships with it. The hook handles SPA navigations after hydration.

### Files

| File | Change |
|---|---|
| `index.html` | Insight Tag base script in `<head>`, `<noscript>` pixel in `<body>` |
| `src/hooks/useLinkedInInsight.ts` | New — fires `lintrk('track')` per route, with bot filter |
| `src/components/LanguageLayout.tsx` | Call `useLinkedInInsight()` alongside GA hook |

### Why this approach
- Initial pageviews captured via the base script (works even without JS via `<noscript>` pixel).
- SPA route changes captured via the hook — same proven pattern as `useGoogleAnalytics`.
- Bot filtering kept consistent across both analytics platforms.
- Survives prerender because it's in static `index.html`.

