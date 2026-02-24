

## Improve LCP on Mobile Devices

After auditing the codebase, here are the key bottlenecks causing a large Largest Contentful Paint (LCP) on mobile, along with targeted fixes.

### Root Causes Identified

1. **Hero background image is invisible to the browser preload scanner** -- it's set via inline `style={{ backgroundImage: ... }}` in React, so the browser can't discover it until JavaScript has loaded, parsed, and rendered the component.

2. **Google Fonts loaded via CSS `@import`** -- this creates a render-blocking chain: CSS must load, then the `@import` triggers another network request for the font.

3. **No code splitting** -- all 20+ page components are eagerly imported in `App.tsx`, inflating the initial JS bundle even though the user only visits one page.

4. **Hero image is not preloaded** -- no `<link rel="preload">` hint exists, so the browser discovers the image late.

5. **Framer Motion loaded on the landing page** -- the `MoistureBackground` component (used on ProductsPage but not the homepage hero) pulls in the entire framer-motion library.

---

### Proposed Changes

#### 1. Preload the hero image in `index.html`
Add a `<link rel="preload">` tag so the browser fetches the hero image immediately, before JS even runs.

**File:** `index.html`
- Add `<link rel="preload" as="image" href="/src/assets/hero-bg.webp" type="image/webp">` in the `<head>`

#### 2. Move Google Fonts from CSS `@import` to `index.html` `<link>`
Replace the render-blocking `@import url(...)` in `src/index.css` with a `<link rel="preconnect">` + `<link rel="stylesheet">` in `index.html`. This allows the font to load in parallel with CSS rather than sequentially.

**File:** `index.html`
- Add `<link rel="preconnect" href="https://fonts.googleapis.com">` (already exists)
- Add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- Add `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap">`

**File:** `src/index.css`
- Remove line 10: `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');`

#### 3. Convert Hero background-image to an `<img>` tag with `fetchPriority="high"`
Using a CSS `background-image` means the browser can't prioritize it. Switching to an `<img>` element with `fetchPriority="high"` and `loading="eager"` tells the browser this is the most important image on the page.

**File:** `src/components/Hero.tsx`
- Replace the background `<div>` with an `<img>` tag using `fetchPriority="high"`, `loading="eager"`, absolute positioning, and `object-cover` to maintain the same visual effect.

#### 4. Lazy-load route components with `React.lazy()`
Split the JS bundle so only the landing page code is loaded initially. All other pages load on demand.

**File:** `src/App.tsx`
- Wrap all page imports (except `Index`) in `React.lazy(() => import(...))`
- Add a `<Suspense>` wrapper around `<Routes>`

#### 5. Add `font-display: swap` fallback
Ensure the Google Fonts URL includes `&display=swap` (it already does), so text renders immediately with a system font while the custom font loads.

---

### Technical Details

```text
Before (request chain for LCP):
  HTML -> JS bundle (all pages) -> React render -> CSS background-image -> hero-bg.webp
  HTML -> index.css -> @import -> Google Fonts CSS -> .woff2 font files

After (optimized):
  HTML -> preload hero-bg.webp (parallel with JS)
  HTML -> Google Fonts CSS (parallel, no @import chain)
  HTML -> JS bundle (only Index page) -> React render -> <img> already loaded
```

### Files Modified
- `index.html` -- add preload hint, move font link
- `src/index.css` -- remove `@import` for Google Fonts
- `src/components/Hero.tsx` -- use `<img>` instead of CSS background-image
- `src/App.tsx` -- add `React.lazy()` code splitting for non-homepage routes

### What This Does NOT Change
- No visual changes to any page
- No SEO impact (all content remains the same)
- No functionality changes
- Prerendered/static HTML remains identical

