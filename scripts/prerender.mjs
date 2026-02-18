#!/usr/bin/env node
/**
 * Pre-render script for SEO
 * 
 * Generates static HTML files for all routes so search engines
 * can crawl the fully rendered content.
 * 
 * Usage:
 *   1. npm run build        (build the SPA first)
 *   2. node scripts/prerender.mjs   (generate static HTML)
 * 
 * Requirements:
 *   npm install puppeteer --save-dev
 */

import { launch } from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const PORT = 4173;

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

    // If file doesn't exist, serve index.html (SPA fallback)
    if (!existsSync(filePath)) {
      filePath = join(DIST_DIR, "index.html");
    }

    try {
      const content = readFileSync(filePath);
      const ext = "." + filePath.split(".").pop();
      res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
}

async function prerender() {
  console.log("🚀 Starting pre-render...");
  console.log(`📁 Dist directory: ${DIST_DIR}`);
  console.log(`📄 Routes to pre-render: ${routes.length}\n`);

  // Start local server
  const server = createStaticServer();
  server.listen(PORT);
  console.log(`🌐 Static server running on http://localhost:${PORT}\n`);

  // Launch headless browser
  const browser = await launch({ headless: true });
  const page = await browser.newPage();

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

      // Wait a bit for any lazy-loaded content
      await page.evaluate(() => new Promise((r) => setTimeout(r, 1000)));

      const html = await page.content();

      // Create directory structure
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

  console.log(`\n🏁 Pre-rendering complete!`);
  console.log(`   ✅ ${success} succeeded`);
  if (failed) console.log(`   ❌ ${failed} failed`);
  console.log(`\n📂 Static HTML files saved in: ${DIST_DIR}`);
}

prerender().catch(console.error);
