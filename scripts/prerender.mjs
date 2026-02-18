import Prerenderer from "@prerenderer/prerenderer";
import JSDOMRenderer from "@prerenderer/renderer-jsdom";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, "..", "dist");
const BASE_URL = "https://desiccant.com";

const routes = [
  "/en", "/da",
  "/en/products", "/da/products",
  "/en/about", "/da/about",
  "/en/applications", "/da/applications",
  "/en/blog", "/da/blog",
  "/en/contact", "/da/contact",
  "/en/downloads", "/da/downloads",
  "/en/faq", "/da/faq",
  "/en/testimonials", "/da/testimonials",
  "/en/privacy", "/da/privacy",
  "/en/silica", "/da/silica",
  "/en/drybag-i", "/da/drybag-i",
  "/en/drybag-iii", "/da/drybag-iii",
  "/en/dunnage-bag", "/da/dunnage-bag",
  "/en/molecular-sieve", "/da/molecular-sieve",
  "/en/calcium-chloride", "/da/calcium-chloride",
  "/en/retail", "/da/retail",
  "/en/edge-protectors", "/da/edge-protectors",
  "/en/anti-slip", "/da/anti-slip",
  "/en/stabustrap", "/da/stabustrap",
  "/en/datalogger", "/da/datalogger",
  "/en/dunnage-bags", "/da/dunnage-bags",
  "/en/blog/vapor-pressure-wooden-pallets", "/da/blog/vapor-pressure-wooden-pallets",
  "/en/blog/container-rain-dew-point-physics", "/da/blog/container-rain-dew-point-physics",
  "/en/blog/chemistry-clay-mo-clay-vs-silica-gel", "/da/blog/chemistry-clay-mo-clay-vs-silica-gel",
  "/en/blog/data-loggers-vs-desiccants", "/da/blog/data-loggers-vs-desiccants",
  "/en/blog/agriculture-feed-moisture-living-cargo", "/da/blog/agriculture-feed-moisture-living-cargo",
  "/en/blog/mold-growth-timelines-80-rh", "/da/blog/mold-growth-timelines-80-rh",
];

function postProcess(html, route) {
  const lang = route.startsWith("/da") ? "da" : "en";
  const canonicalUrl = `${BASE_URL}${route}`;
  const basePath = route.replace(/^\/(en|da)/, "") || "/";
  const enUrl = `${BASE_URL}/en${basePath === "/" ? "" : basePath}`;
  const daUrl = `${BASE_URL}/da${basePath === "/" ? "" : basePath}`;

  html = html.replace(/<html\s+lang="[^"]*"/, `<html lang="${lang}"`);

  if (!html.includes('rel="canonical"')) {
    html = html.replace("</head>", `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`);
  }

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
  console.log("🚀 Starting pre-render with JSDOM (no browser needed)...");
  console.log(`📄 Routes to pre-render: ${routes.length}\n`);

  const renderer = new JSDOMRenderer({ maxConcurrentRoutes: 4 });

  const prerenderer = new Prerenderer({
    staticDir: DIST_DIR,
    renderer,
  });

  await prerenderer.initialize();

  const renderedRoutes = await prerenderer.renderRoutes(routes);

  let success = 0;
  let failed = 0;

  for (const rendered of renderedRoutes) {
    try {
      let html = postProcess(rendered.html, rendered.route);
      const outputPath = join(DIST_DIR, rendered.route, "index.html");
      mkdirSync(dirname(outputPath), { recursive: true });
      writeFileSync(outputPath, html);
      console.log(`  ✅ ${rendered.route}`);
      success++;
    } catch (err) {
      console.log(`  ❌ ${rendered.route} — ${err.message}`);
      failed++;
    }
  }

  await prerenderer.destroy();

  console.log(`\n🏁 Pre-rendering complete!`);
  console.log(`   ✅ ${success} succeeded`);
  if (failed) console.log(`   ❌ ${failed} failed`);
}

prerender().catch(console.error);
