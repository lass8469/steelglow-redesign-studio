import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// Pre-rendering is only used in production builds (not in Lovable preview).
// After exporting, run `npm run build` locally to generate static HTML for SEO.
const enablePrerender = process.env.PRERENDER === "true";

const staticRoutes = [
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
  // Product pages
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
  // Blog articles
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

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ViteImageOptimizer({
      jpg: { quality: 80 },
      png: { quality: 80 },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
