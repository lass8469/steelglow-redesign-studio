/**
 * Pre-rendering Configuration for SEO
 * 
 * This script generates static HTML for all routes after building.
 * 
 * USAGE (after exporting from Lovable):
 * 1. npm install
 * 2. npm run build
 * 3. PRERENDER=true npx vite-plugin-prerender  (or use the prerender script below)
 * 
 * Alternatively, use the prerender.sh script.
 * 
 * HOW IT WORKS:
 * - Serves the built dist/ folder on a local server
 * - Uses Puppeteer to visit each route and capture the rendered HTML
 * - Saves the HTML as static files (e.g., dist/en/index.html, dist/en/about/index.html)
 * - Search engines can now crawl fully rendered content
 * 
 * REQUIREMENTS:
 * - Node.js 18+
 * - Puppeteer (npm install puppeteer --save-dev)
 */

export const routes = [
  "/en",
  "/da",
  "/en/products",
  "/da/products",
  "/en/about",
  "/da/about",
  "/en/applications",
  "/da/applications",
  "/en/blog",
  "/da/blog",
  "/en/contact",
  "/da/contact",
  "/en/downloads",
  "/da/downloads",
  "/en/faq",
  "/da/faq",
  "/en/testimonials",
  "/da/testimonials",
  "/en/privacy",
  "/da/privacy",
  "/en/silica",
  "/da/silica",
  "/en/drybag-i",
  "/da/drybag-i",
  "/en/drybag-iii",
  "/da/drybag-iii",
  "/en/dunnage-bag",
  "/da/dunnage-bag",
  "/en/molecular-sieve",
  "/da/molecular-sieve",
  "/en/calcium-chloride",
  "/da/calcium-chloride",
  "/en/retail",
  "/da/retail",
  "/en/edge-protectors",
  "/da/edge-protectors",
  "/en/anti-slip",
  "/da/anti-slip",
  "/en/stabustrap",
  "/da/stabustrap",
  "/en/datalogger",
  "/da/datalogger",
  "/en/dunnage-bags",
  "/da/dunnage-bags",
  "/en/blog/vapor-pressure-wooden-pallets",
  "/da/blog/vapor-pressure-wooden-pallets",
  "/en/blog/container-rain-dew-point-physics",
  "/da/blog/container-rain-dew-point-physics",
  "/en/blog/chemistry-clay-mo-clay-vs-silica-gel",
  "/da/blog/chemistry-clay-mo-clay-vs-silica-gel",
  "/en/blog/data-loggers-vs-desiccants",
  "/da/blog/data-loggers-vs-desiccants",
  "/en/blog/agriculture-feed-moisture-living-cargo",
  "/da/blog/agriculture-feed-moisture-living-cargo",
  "/en/blog/mold-growth-timelines-80-rh",
  "/da/blog/mold-growth-timelines-80-rh",
];
