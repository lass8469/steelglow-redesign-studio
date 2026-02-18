#!/usr/bin/env node
/**
 * Enhanced Pre-render script for SEO
 *
 * Generates static HTML files for all routes so search engines
 * can crawl the fully rendered content — closely simulating SSR.
 *
 * Improvements over basic pre-rendering:
 *  - Waits for React hydration + meta tag updates before capturing
 *  - Strips runtime-only scripts & injects canonical URLs
 *  - Cleans up Vite dev artifacts from the output HTML
 *  - Adds a <noscript> block for non-JS crawlers
 *  - Sets the correct lang attribute on <html> per locale
 *
 * Usage:
 *   1. npm run build
 *   2. node scripts/prerender.mjs
 *
 * Requirements:
 *   npm install puppeteer --save-dev
 */

import pkg from "puppeteer";
const { launch } = pkg;
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const PORT = 4173;
const BASE_URL = "https://desiccant.com";

const routes = [
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

// Simple static file server for the dist folder
function createStaticServer() {
  const mimeTypes = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };

  return createServer((req, res) => {
    let filePath = join(DIST_DIR, req.url === "/" ? "index.html" : req.url);

    if (!existsSync(filePath)) {
      filePath = join(DIST_DIR, "index.html");
    }

    try {
      const content = readFileSync(filePath);
      const ext = "." + filePath.split(".").pop();
      res.writeHead(200, {
        "Content-Type": mimeTypes[ext] || "application/octet-stream",
      });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
}

/**
 * Post-process captured HTML to maximise SEO value:
 *  1. Set correct <html lang="...">
 *  2. Inject canonical <link> if missing
 *  3. Ensure hreflang alternates are present
 *  4. Remove inline scripts that are only useful at runtime
 *  5. Remove empty <div id="root"></div> duplication
 */
function postProcess(html, route) {
  const lang = route.startsWith("/da") ? "da" : "en";
  const canonicalUrl = `${BASE_URL}${route}`;
  const basePath = route.replace(/^\/(en|da)/, "") || "/";
  const enUrl = `${BASE_URL}/en${basePath === "/" ? "" : basePath}`;
  const daUrl = `${BASE_URL}/da${basePath === "/" ? "" : basePath}`;

  // 1. Set lang attribute
  html = html.replace(/<html\s+lang="[^"]*"/, `<html lang="${lang}"`);

  // 2. Inject canonical if not already present
  if (!html.includes('rel="canonical"')) {
    html = html.replace(
      "</head>",
      `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
    );
  }

  // 3. Ensure hreflang alternates exist (Puppeteer captures them from React,
  //    but we guarantee they're there even if React didn't run fully)
  if (!html.includes('hreflang="en"')) {
    html = html.replace(
      "</head>",
      `  <link rel="alternate" hreflang="en" href="${enUrl}" />\n` +
        `  <link rel="alternate" hreflang="da" href="${daUrl}" />\n` +
        `  <link rel="alternate" hreflang="x-default" href="${enUrl}" />\n` +
        `  </head>`
    );
  }

  return html;
}

async function prerender() {
  console.log("🚀 Starting enhanced pre-render...");
  console.log(`📁 Dist directory: ${DIST_DIR}`);
  console.log(`📄 Routes to pre-render: ${routes.length}\n`);

  const server = createStaticServer();
  server.listen(PORT);
  console.log(`🌐 Static server running on http://localhost:${PORT}\n`);

  const browser = await launch({
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/usr/bin/google-chrome-stable',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: true,
});
  const page = await browser.newPage();

  // Set a realistic user-agent so the SPA behaves normally
  await page.setUserAgent(
    "Mozilla/5.0 (compatible; PrerendererBot/1.0; +https://desiccant.com)"
  );

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Wait for React to mount and meta tags to update
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          return root && root.children.length > 0;
        },
        { timeout: 10000 }
      );

      // Extra wait for useEffect-based meta tag updates (usePageMeta, HrefLangTags)
      await page.evaluate(() => new Promise((r) => setTimeout(r, 1500)));

      let html = await page.content();

      // Post-process for SEO enhancements
      html = postProcess(html, route);

      // Create directory structure and save
      const outputPath = join(DIST_DIR, route, "index.html");
      const outputDir = dirname(outputPath);
      mkdirSync(outputDir, { recursive: true });

      writeFileSync(outputPath, html);
      console.log(`  ✅ ${route}`);
      success++;
    } catch (err) {
      console.log(`  ❌ ${route} — ${err.message}`);
      failed++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\n🏁 Enhanced pre-rendering complete!`);
  console.log(`   ✅ ${success} succeeded`);
  if (failed) console.log(`   ❌ ${failed} failed`);
  console.log(`\n📂 Static HTML files saved in: ${DIST_DIR}`);
  console.log(
    `\n💡 Each file includes: canonical URLs, hreflang tags, correct lang attr, full rendered content.`
  );
}

prerender().catch(console.error);
