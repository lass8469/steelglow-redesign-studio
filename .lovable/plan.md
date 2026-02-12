
# Image Optimization Plan

## Problem
The site has 30 images in `src/assets/` (JPG and PNG files) that are served uncompressed and without modern format support, hurting page load speed.

## Approach

This plan covers three complementary optimizations:

### 1. Build-time image compression via Vite plugin
Install `vite-plugin-image-optimizer` to automatically compress all images during the production build. This handles JPG, PNG, and can convert to WebP where beneficial -- all without manually re-exporting images.

**Changes:**
- `package.json` -- add `vite-plugin-image-optimizer` dependency
- `vite.config.ts` -- import and configure the plugin with quality settings (e.g. JPEG quality 80, PNG quality 80, enable WebP output)

### 2. Lazy loading for off-screen images
Add `loading="lazy"` to all `<img>` tags that are below the fold. The hero background image (loaded via CSS `background-image`) stays eager. This prevents the browser from downloading images the user hasn't scrolled to yet.

**Files affected (adding `loading="lazy"`):**
- `src/components/Industries.tsx` (4 industry images)
- `src/components/Products.tsx` (product grid images)
- `src/pages/ProductsPage.tsx` (product listing images)
- All 11 individual product pages (product hero images)
- `src/pages/AboutPage.tsx` (hero image -- convert to `<img>` with lazy)
- `src/pages/FAQPage.tsx` (hero image)
- `src/pages/BlogPage.tsx` / `src/pages/BlogArticlePage.tsx` (article hero images)
- `src/pages/ContactPage.tsx` (hero image)
- `src/pages/ApplicationsPage.tsx` (if it has images)

### 3. Add explicit width/height or aspect-ratio to prevent layout shift
Where possible, add `width` and `height` attributes to `<img>` tags so the browser can reserve space before the image loads, improving Cumulative Layout Shift (CLS) scores.

---

## Technical Details

**Vite plugin configuration:**
```ts
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

plugins: [
  react(),
  ViteImageOptimizer({
    jpg: { quality: 80 },
    png: { quality: 80 },
  }),
]
```

**Lazy loading pattern:**
```tsx
// Before
<img src={productImage} alt="..." className="..." />

// After
<img src={productImage} alt="..." className="..." loading="lazy" />
```

## Summary of file changes

| File | Change |
|------|--------|
| `package.json` | Add `vite-plugin-image-optimizer` |
| `vite.config.ts` | Configure image optimizer plugin |
| ~20 component/page files | Add `loading="lazy"` to `<img>` tags |
