// ============================================================
// INTERNAL LINK MAP - Centralized SEO cross-linking config
// ============================================================

export interface RelatedProductLink {
  path: string;
  labelKey: string; // translation key for the anchor text
}

export interface RelatedArticleLink {
  slug: string;
  labelKey: string; // translation key for the anchor text
}

export interface ProductLinkConfig {
  relatedProducts: RelatedProductLink[];
  relatedArticles: RelatedArticleLink[];
}

// Product page → related products + articles
export const productLinks: Record<string, ProductLinkConfig> = {
  "drybag-i": {
    relatedProducts: [
      { path: "/drybag-iii", labelKey: "relatedProducts.drybagIII" },
      { path: "/calcium-chloride", labelKey: "relatedProducts.calcium" },
      { path: "/silica", labelKey: "relatedProducts.silica" },
    ],
    relatedArticles: [
      { slug: "drybag-i-clay-desiccant-guide", labelKey: "relatedArticles.drybagGuide" },
      { slug: "container-desiccant-stuffing-guide", labelKey: "relatedArticles.stuffingGuide" },
    ],
  },
  "drybag-iii": {
    relatedProducts: [
      { path: "/drybag-i", labelKey: "relatedProducts.drybagI" },
      { path: "/calcium-chloride", labelKey: "relatedProducts.calcium" },
      { path: "/molecular-sieve", labelKey: "relatedProducts.molecular" },
    ],
    relatedArticles: [
      { slug: "chemistry-clay-mo-clay-vs-silica-gel", labelKey: "relatedArticles.chemistryGuide" },
      { slug: "container-rain-dew-point-physics", labelKey: "relatedArticles.containerRain" },
    ],
  },
  silica: {
    relatedProducts: [
      { path: "/molecular-sieve", labelKey: "relatedProducts.molecular" },
      { path: "/drybag-i", labelKey: "relatedProducts.drybagI" },
      { path: "/retail", labelKey: "relatedProducts.retail" },
    ],
    relatedArticles: [
      { slug: "silica-gel-desiccant-guide", labelKey: "relatedArticles.silicaGuide" },
      { slug: "mold-growth-timelines-80-rh", labelKey: "relatedArticles.moldGrowth" },
    ],
  },
  "molecular-sieve": {
    relatedProducts: [
      { path: "/silica", labelKey: "relatedProducts.silica" },
      { path: "/calcium-chloride", labelKey: "relatedProducts.calcium" },
      { path: "/drybag-iii", labelKey: "relatedProducts.drybagIII" },
    ],
    relatedArticles: [
      { slug: "molecular-sieve-pore-size-guide", labelKey: "relatedArticles.molecularSieveGuide" },
      { slug: "chemistry-clay-mo-clay-vs-silica-gel", labelKey: "relatedArticles.chemistryGuide" },
    ],
  },
  "calcium-chloride": {
    relatedProducts: [
      { path: "/drybag-i", labelKey: "relatedProducts.drybagI" },
      { path: "/drybag-iii", labelKey: "relatedProducts.drybagIII" },
      { path: "/molecular-sieve", labelKey: "relatedProducts.molecular" },
    ],
    relatedArticles: [
      { slug: "container-rain-dew-point-physics", labelKey: "relatedArticles.containerRain" },
      { slug: "container-desiccant-stuffing-guide", labelKey: "relatedArticles.stuffingGuide" },
    ],
  },
  "dunnage-bag": {
    relatedProducts: [
      { path: "/edge-protectors", labelKey: "relatedProducts.edge" },
      { path: "/anti-slip", labelKey: "relatedProducts.antiSlip" },
      { path: "/stabustrap", labelKey: "relatedProducts.stabustrap" },
    ],
    relatedArticles: [
      { slug: "dunnage-bags-container-loading-guide", labelKey: "relatedArticles.dunnageGuide" },
    ],
  },
  "edge-protectors": {
    relatedProducts: [
      { path: "/anti-slip", labelKey: "relatedProducts.antiSlip" },
      { path: "/stabustrap", labelKey: "relatedProducts.stabustrap" },
      { path: "/dunnage-bags", labelKey: "relatedProducts.dunnage" },
    ],
    relatedArticles: [
      { slug: "anti-slip-sheets-pallet-load-stability", labelKey: "relatedArticles.antiSlipGuide" },
    ],
  },
  "anti-slip": {
    relatedProducts: [
      { path: "/edge-protectors", labelKey: "relatedProducts.edge" },
      { path: "/stabustrap", labelKey: "relatedProducts.stabustrap" },
      { path: "/dunnage-bags", labelKey: "relatedProducts.dunnage" },
    ],
    relatedArticles: [
      { slug: "anti-slip-sheets-pallet-load-stability", labelKey: "relatedArticles.antiSlipGuide" },
    ],
  },
  stabustrap: {
    relatedProducts: [
      { path: "/anti-slip", labelKey: "relatedProducts.antiSlip" },
      { path: "/edge-protectors", labelKey: "relatedProducts.edge" },
      { path: "/dunnage-bags", labelKey: "relatedProducts.dunnage" },
    ],
    relatedArticles: [
      { slug: "stabustrap-reusable-pallet-strapping", labelKey: "relatedArticles.stabustrapGuide" },
    ],
  },
  retail: {
    relatedProducts: [
      { path: "/silica", labelKey: "relatedProducts.silica" },
      { path: "/drybag-i", labelKey: "relatedProducts.drybagI" },
    ],
    relatedArticles: [
      { slug: "dry-bag-retail-moisture-absorber-guide", labelKey: "relatedArticles.retailGuide" },
    ],
  },
  datalogger: {
    relatedProducts: [
      { path: "/drybag-i", labelKey: "relatedProducts.drybagI" },
      { path: "/silica", labelKey: "relatedProducts.silica" },
      { path: "/calcium-chloride", labelKey: "relatedProducts.calcium" },
    ],
    relatedArticles: [
      { slug: "data-loggers-vs-desiccants", labelKey: "relatedArticles.dataloggerVs" },
      { slug: "data-logger-verification-guide", labelKey: "relatedArticles.verificationGuide" },
    ],
  },
};

// Article → related articles mapping
export const articleRelatedSlugs: Record<string, string[]> = {
  "vapor-pressure-wooden-pallets": ["container-rain-dew-point-physics", "mold-growth-timelines-80-rh", "drybag-i-clay-desiccant-guide"],
  "container-rain-dew-point-physics": ["vapor-pressure-wooden-pallets", "container-desiccant-stuffing-guide", "mold-growth-timelines-80-rh"],
  "chemistry-clay-mo-clay-vs-silica-gel": ["silica-gel-desiccant-guide", "drybag-i-clay-desiccant-guide", "container-rain-dew-point-physics"],
  "data-loggers-vs-desiccants": ["data-logger-verification-guide", "container-rain-dew-point-physics", "agriculture-feed-moisture-living-cargo"],
  "agriculture-feed-moisture-living-cargo": ["mold-growth-timelines-80-rh", "vapor-pressure-wooden-pallets", "data-loggers-vs-desiccants"],
  "mold-growth-timelines-80-rh": ["vapor-pressure-wooden-pallets", "container-rain-dew-point-physics", "silica-gel-desiccant-guide"],
  "silica-gel-desiccant-guide": ["chemistry-clay-mo-clay-vs-silica-gel", "mold-growth-timelines-80-rh", "drybag-i-clay-desiccant-guide"],
  "drybag-i-clay-desiccant-guide": ["chemistry-clay-mo-clay-vs-silica-gel", "container-desiccant-stuffing-guide", "container-rain-dew-point-physics"],
  "dunnage-bags-container-loading-guide": ["anti-slip-sheets-pallet-load-stability", "stabustrap-reusable-pallet-strapping", "container-desiccant-stuffing-guide"],
  "data-logger-verification-guide": ["data-loggers-vs-desiccants", "agriculture-feed-moisture-living-cargo", "container-rain-dew-point-physics"],
  "anti-slip-sheets-pallet-load-stability": ["dunnage-bags-container-loading-guide", "stabustrap-reusable-pallet-strapping", "container-desiccant-stuffing-guide"],
  "stabustrap-reusable-pallet-strapping": ["anti-slip-sheets-pallet-load-stability", "dunnage-bags-container-loading-guide", "container-desiccant-stuffing-guide"],
  "dry-bag-retail-moisture-absorber-guide": ["silica-gel-desiccant-guide", "mold-growth-timelines-80-rh", "drybag-i-clay-desiccant-guide"],
  "container-desiccant-stuffing-guide": ["container-rain-dew-point-physics", "drybag-i-clay-desiccant-guide", "mold-growth-timelines-80-rh"],
  "molecular-sieve-pore-size-guide": ["chemistry-clay-mo-clay-vs-silica-gel", "silica-gel-desiccant-guide", "dry-bag-retail-moisture-absorber-guide"],
};

// Applications page → product links per industry
export const industryProductLinks: Record<string, RelatedProductLink[]> = {
  pharmaceutical: [
    { path: "/silica", labelKey: "relatedProducts.silica" },
    { path: "/molecular-sieve", labelKey: "relatedProducts.molecular" },
  ],
  electronics: [
    { path: "/silica", labelKey: "relatedProducts.silica" },
    { path: "/drybag-iii", labelKey: "relatedProducts.drybagIII" },
  ],
  food: [
    { path: "/drybag-i", labelKey: "relatedProducts.drybagI" },
    { path: "/calcium-chloride", labelKey: "relatedProducts.calcium" },
  ],
  logistics: [
    { path: "/drybag-i", labelKey: "relatedProducts.drybagI" },
    { path: "/dunnage-bags", labelKey: "relatedProducts.dunnage" },
  ],
  automotive: [
    { path: "/drybag-iii", labelKey: "relatedProducts.drybagIII" },
    { path: "/drybag-i", labelKey: "relatedProducts.drybagI" },
  ],
  wind: [
    { path: "/drybag-iii", labelKey: "relatedProducts.drybagIII" },
  ],
  chemical: [
    { path: "/molecular-sieve", labelKey: "relatedProducts.molecular" },
    { path: "/silica", labelKey: "relatedProducts.silica" },
  ],
  textile: [
    { path: "/drybag-iii", labelKey: "relatedProducts.drybagIII" },
    { path: "/silica", labelKey: "relatedProducts.silica" },
  ],
  metal: [
    { path: "/drybag-iii", labelKey: "relatedProducts.drybagIII" },
    { path: "/drybag-i", labelKey: "relatedProducts.drybagI" },
  ],
};
