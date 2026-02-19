/**
 * Pre-rendering Configuration — Single Source of Truth
 *
 * All static routes live here. Both `scripts/prerender.mjs` and
 * `vite.config.ts` import from this file so the list never drifts.
 *
 * HOW TO ADD A NEW ROUTE:
 *   1. Add the base path (without language prefix) to `basePaths`
 *   2. The script automatically generates /en and /da variants
 *   3. Update sitemap.xml if the page should be crawled
 */

/** Paths without language prefix — /en and /da are generated automatically */
const basePaths = [
  "",                  // home
  "/products",
  "/about",
  "/applications",
  "/blog",
  "/contact",
  "/downloads",
  "/faq",
  "/testimonials",
  "/privacy",
  // Product pages
  "/silica",
  "/drybag-i",
  "/drybag-iii",
  "/dunnage-bag",
  "/molecular-sieve",
  "/calcium-chloride",
  "/retail",
  "/edge-protectors",
  "/anti-slip",
  "/stabustrap",
  "/datalogger",
  "/dunnage-bags",
  // Blog articles
  "/blog/vapor-pressure-wooden-pallets",
  "/blog/container-rain-dew-point-physics",
  "/blog/chemistry-clay-mo-clay-vs-silica-gel",
  "/blog/data-loggers-vs-desiccants",
  "/blog/agriculture-feed-moisture-living-cargo",
  "/blog/mold-growth-timelines-80-rh",
  "/blog/silica-gel-desiccant-guide",
];

/** All routes with language prefixes — used by prerender & vite */
export const routes: string[] = basePaths.flatMap((p) => [`/en${p}`, `/da${p}`]);

/** Production domain */
export const BASE_URL = "https://desiccant.com";
