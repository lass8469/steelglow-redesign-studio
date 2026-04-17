

## Add Meta Pixel (Facebook Pixel)

Same proven pattern as Google Analytics and LinkedIn Insight Tag: base snippet in `index.html` for prerendered/initial loads, plus a SPA hook for client-side route changes.

### What I need from you
Your **Meta Pixel ID** (a 15–16 digit number from Meta Events Manager → Data Sources → your pixel). I'll bake it into both the script and `<noscript>` fallback.

### Implementation

**1. `index.html` — base snippet**

Add Meta's official pixel snippet in `<head>` after the LinkedIn block, with `<noscript>` `<img>` fallback in `<body>` (HTML5 rule: no `<img>` in head `<noscript>`).

```html
<!-- Meta Pixel -->
<script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

`<noscript>` pixel goes in `<body>`:
```html
<noscript><img height="1" width="1" style="display:none" alt=""
  src="https://www.facebook.com/tr?id=PIXEL_ID&ev=PageView&noscript=1" /></noscript>
```

**2. `src/hooks/useMetaPixel.ts` — new SPA route hook**

Mirrors `useGoogleAnalytics` and `useLinkedInInsight`. On every React Router navigation, calls `window.fbq('track', 'PageView')`. Reuses the same bot-resolution filter for consistency.

```ts
useEffect(() => {
  if (!isBotResolution() && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
}, [location.pathname, location.search]);
```

**3. `src/components/LanguageLayout.tsx` — wire up the hook**

Add `useMetaPixel()` next to the existing GA + LinkedIn hooks so it runs on every routed page (`/en/*` and `/da/*`).

### Files

| File | Change |
|---|---|
| `index.html` | Pixel base snippet in `<head>`, `<noscript>` `<img>` in `<body>` |
| `src/hooks/useMetaPixel.ts` | New — fires `fbq('track','PageView')` per route, with bot filter |
| `src/components/LanguageLayout.tsx` | Call `useMetaPixel()` alongside GA + LinkedIn hooks |

### Why this approach
- Initial pageviews captured by base script + `<noscript>` fallback (works without JS).
- SPA route changes captured via the hook — same proven pattern already in use.
- Bot filtering kept consistent across GA, LinkedIn, and Meta.
- Survives prerender because tag lives in static `index.html`, so every prerendered HTML file ships with it.

**Reply with your Meta Pixel ID and I'll implement.**

