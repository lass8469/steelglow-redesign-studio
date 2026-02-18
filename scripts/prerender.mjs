#!/usr/bin/env node
/**
 * SSG Pre-render Script
 *
 * Generates static HTML for every route so search engines and LLMs
 * see fully rendered content on a traditional static host.
 *
 * Usage:
 *   1. npm run build
 *   2. node scripts/prerender.mjs
 *
 * Requirements: puppeteer (npm i -D puppeteer)
 */

import { createServer } from "http";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const PORT = 4173;
const BASE_URL = "https://desiccant.com";

// ---------------------------------------------------------------------------
// Route list
// ---------------------------------------------------------------------------
async function loadRoutes() {
  try {
    const { routes } = await import("../prerender.config.ts");
    return routes;
  } catch {
    console.log("⚠  Could not import prerender.config.ts, using inline routes.");
    const basePaths = [
      "", "/products", "/about", "/applications", "/blog", "/contact",
      "/downloads", "/faq", "/testimonials", "/privacy",
      "/silica", "/drybag-i", "/drybag-iii", "/dunnage-bag",
      "/molecular-sieve", "/calcium-chloride", "/retail",
      "/edge-protectors", "/anti-slip", "/stabustrap", "/datalogger",
      "/dunnage-bags",
      "/blog/vapor-pressure-wooden-pallets",
      "/blog/container-rain-dew-point-physics",
      "/blog/chemistry-clay-mo-clay-vs-silica-gel",
      "/blog/data-loggers-vs-desiccants",
      "/blog/agriculture-feed-moisture-living-cargo",
      "/blog/mold-growth-timelines-80-rh",
    ];
    return basePaths.flatMap((p) => [`/en${p}`, `/da${p}`]);
  }
}

// ---------------------------------------------------------------------------
// Static file server for the dist folder
// ---------------------------------------------------------------------------
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
    ".pdf": "application/pdf",
  };

  return createServer((req, res) => {
    let filePath = join(DIST_DIR, req.url === "/" ? "index.html" : req.url);
    if (!existsSync(filePath) || !extname(filePath)) {
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

// ---------------------------------------------------------------------------
// Post-process: inject canonical, hreflang, lang, strip dev artifacts,
// force animation visibility for static HTML
// ---------------------------------------------------------------------------
function postProcess(html, route) {
  const lang = route.startsWith("/da") ? "da" : "en";
  const canonicalUrl = `${BASE_URL}${route}`;
  const basePath = route.replace(/^\/(en|da)/, "") || "/";
  const enUrl = `${BASE_URL}/en${basePath === "/" ? "" : basePath}`;
  const daUrl = `${BASE_URL}/da${basePath === "/" ? "" : basePath}`;

  // 1. Set lang attribute
  html = html.replace(/<html\s+lang="[^"]*"/, `<html lang="${lang}"`);

  // 2. Inject / fix canonical
  if (html.includes('rel="canonical"')) {
    html = html.replace(
      /<link[^>]*rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
  } else {
    html = html.replace(
      "</head>",
      `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
    );
  }

  // 3. Ensure hreflang alternates
  if (!html.includes('hreflang="en"')) {
    html = html.replace(
      "</head>",
      `  <link rel="alternate" hreflang="en" href="${enUrl}" />\n` +
        `  <link rel="alternate" hreflang="da" href="${daUrl}" />\n` +
        `  <link rel="alternate" hreflang="x-default" href="${enUrl}" />\n` +
        `  </head>`
    );
  }

  // 4. Remove any localhost references leaked from puppeteer
  html = html.replace(/http:\/\/localhost:\d+/g, BASE_URL);

  // 5. Strip Vite HMR / dev-only scripts
  html = html.replace(/<script[^>]*\/@vite\/client[^>]*><\/script>/g, "");
  html = html.replace(/<script[^>]*\/@react-refresh[^>]*><\/script>/g, "");

  // 6. Force all animated elements to be visible in static HTML
  //    This ensures crawlers/LLMs see the content even without JS
  html = html.replace(
    "</head>",
    `  <style>
    /* SSG: force all animated content visible for crawlers */
    .animate-fade-in-up, .animate-fade-in, .animate-slide-in-left,
    [class*="animate-fade"], [class*="animate-slide"] {
      opacity: 1 !important;
      transform: none !important;
      animation: none !important;
    }
  </style>\n  </head>`
  );

  return html;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function prerender() {
  let puppeteer;
  try {
    puppeteer = await import("puppeteer");
  } catch {
    console.error(
      "❌ Puppeteer is not installed.\n" +
        "   Run: npm install puppeteer --save-dev\n" +
        "   Then re-run this script."
    );
    process.exit(1);
  }

  const routes = await loadRoutes();

  console.log("🚀 SSG Pre-render starting...");
  console.log(`📁 Output: ${DIST_DIR}`);
  console.log(`📄 Routes: ${routes.length}\n`);

  const server = createStaticServer();
  server.listen(PORT);
  console.log(`🌐 Dev server → http://localhost:${PORT}\n`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  let success = 0;
  let failed = 0;
  let contentWarnings = 0;

  for (const route of routes) {
    const page = await browser.newPage();

    // Capture console errors from the React app
    const pageErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") pageErrors.push(msg.text());
    });
    page.on("pageerror", (err) => {
      pageErrors.push(err.message);
    });

    try {
      await page.setUserAgent(
        "Mozilla/5.0 (compatible; PrerendererBot/1.0; +https://desiccant.com)"
      );

      const url = `http://localhost:${PORT}${route}`;
      await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });

      // Wait for React to hydrate — look for actual content, not just children
      await page.waitForFunction(
        () => {
          const root = document.getElementById("root");
          if (!root || root.children.length === 0) return false;
          // Check for substantial text content (at least 100 chars = real page)
          const text = root.innerText || "";
          return text.length > 100;
        },
        { timeout: 15_000 }
      );

      // Extra buffer for meta-tag hooks (usePageMeta, useJsonLd, HrefLangTags)
      await page.evaluate(() => new Promise((r) => setTimeout(r, 3000)));

      let html = await page.content();

      // Verify content was actually captured
      const textLength = await page.evaluate(() => {
        const root = document.getElementById("root");
        return (root?.innerText || "").length;
      });

      if (textLength < 100) {
        console.log(`  ⚠️  ${route} — only ${textLength} chars of text (may be empty)`);
        contentWarnings++;
        if (pageErrors.length > 0) {
          console.log(`      Console errors: ${pageErrors.slice(0, 3).join(" | ")}`);
        }
      }

      html = postProcess(html, route);

      // Write to dist/<route>/index.html
      const outputPath = join(DIST_DIR, route, "index.html");
      mkdirSync(dirname(outputPath), { recursive: true });
      writeFileSync(outputPath, html, "utf-8");

      console.log(`  ✅ ${route} (${textLength} chars)`);
      success++;
    } catch (err) {
      console.log(`  ❌ ${route} — ${err.message}`);
      if (pageErrors.length > 0) {
        console.log(`      Console errors: ${pageErrors.slice(0, 3).join(" | ")}`);
      }
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log(`\n🏁 Pre-rendering complete`);
  console.log(`   ✅ ${success} succeeded`);
  if (contentWarnings) console.log(`   ⚠️  ${contentWarnings} with low content`);
  if (failed) console.log(`   ❌ ${failed} failed`);
  console.log(`\n📂 Static files in: ${DIST_DIR}`);
  console.log(
    `💡 Each file has: canonical URL, hreflang tags, correct lang, full rendered HTML, JSON-LD.\n`
  );
}

prerender().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
