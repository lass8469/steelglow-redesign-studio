

# Add Meta Descriptions and Document Titles to Every Page

## Overview
Currently the site has a single static meta description ("Lovable Generated Project") in `index.html` and no per-page document titles or meta descriptions. This plan adds dynamic, SEO-optimized meta titles and descriptions for every page -- in both English and Danish -- using a reusable hook that updates `document.head` on each route change.

## Pages Covered (19 total)
- **Home** (Index)
- **About**
- **Products** (catalog page)
- **Applications**
- **Blog** (listing)
- **Blog Article** (dynamic, per-article)
- **Contact**
- **Downloads**
- **FAQ**
- **Testimonials** (Social Proof)
- **Privacy Policy**
- **11 Product detail pages**: DRY-BAG I, DRY-BAG III, Silica Gel, Dunnage Bag, Molecular Sieve, Calcium Chloride, Retail, Edge Protectors, Anti-Slip Sheets, Stabustrap, Datalogger

## Proposed Meta Descriptions (English)

| Page | Title | Meta Description |
|------|-------|-----------------|
| Home | Desiccant.com - Industrial Desiccants & Cargo Protection | Industrial desiccants and cargo protection solutions from Denmark since 1979. Silica gel, clay desiccants, dunnage bags, and monitoring devices for global shipping. |
| About | About Dry-Bag - 45+ Years of Moisture Control Expertise | Danish manufacturer of high-quality desiccants since 1979. Custom-engineered moisture control solutions with eco-friendly production and global distribution. |
| Products | Desiccant & Cargo Protection Products - Desiccant.com | Browse our full range of industrial desiccants, dunnage bags, edge protectors, anti-slip sheets, and monitoring devices for shipping and storage. |
| Applications | Industry Applications - Moisture Protection Solutions | Discover how our desiccants protect cargo across pharmaceutical, electronics, food, automotive, wind energy, and logistics industries worldwide. |
| Blog | Cargo Intelligence - Technical Articles on Moisture Control | In-depth technical articles on desiccant science, container rain prevention, mold control, and cargo protection strategies backed by 45+ years of expertise. |
| Blog Article | (dynamic: article title) - Cargo Intelligence | (dynamic: article excerpt) |
| Contact | Contact Dry-Bag - Get a Quote for Desiccant Solutions | Reach out for quotes, technical support, or distributor inquiries. Danish manufacturer with global shipping and 24-hour response guarantee. |
| Downloads | Resources & Downloads - Desiccant.com | Download our CSR report, food safety certificates, and request product specification sheets and technical documentation. |
| FAQ | FAQ - Desiccant & Cargo Protection Questions Answered | Answers to common questions about desiccants, container rain, dosage calculations, food safety, regeneration, and custom solutions. |
| Testimonials | Customer Testimonials - Trusted by Industry Leaders | See why leading companies trust Dry-Bag for moisture control and cargo protection. Customer reviews and success stories. |
| Privacy | Privacy Policy - Desiccant.com | Learn how Dry-Bag A/S collects, uses, and protects your personal data in compliance with GDPR. |
| DRY-BAG I | DRY-BAG I - Clay-Based Ocean Freight Desiccant | Original clay-based desiccant for ocean freight containers. Absorbs 80% of its own weight with up to 90 days protection. REACH compliant. |
| DRY-BAG III | DRY-BAG III - Industrial Bentonite Clay Desiccant | Eco-friendly bentonite clay desiccant in 11 sizes. Up to 70% absorption capacity for heavy-duty industrial and container shipping applications. |
| Silica Gel | Silica Gel Packets - E-Commerce & In-Box Desiccant | Premium FDA-approved silica gel packets for electronics, pharmaceuticals, leather goods, and e-commerce moisture protection. |
| Dunnage Bag | Dunnage Bags - Cargo Stabilization Air Bags | AAR-approved kraft paper and PP woven dunnage bags for rail, truck, and ocean freight. Prevent load shifting and product damage. |
| Molecular Sieve | Molecular Sieve Desiccant - Pharmaceutical Grade | Ultra-low humidity desiccant (less than 0.1% RH) for pharmaceuticals, medical devices, and diagnostics. Available in 3A and 4A pore sizes. |
| Calcium Chloride | Calcium Chloride Desiccant - High Capacity Export Grade | Absorbs up to 350% of its weight. Industrial-strength moisture control for long-haul ocean freight and export packaging. |
| Retail | DRY BAG Retail - Regenerable Moisture Absorber | Handmade in Denmark. Regenerable clay desiccant with clear saturation window for boats, campers, basements, and home storage. |
| Edge Protectors | Edge Protectors - FSC Certified Cargo Corner Protection | FSC-certified cardboard edge protectors for palletized goods. Multiple thicknesses up to 500kg load capacity. Fully recyclable. |
| Anti-Slip Sheets | Anti-Slip Sheets - Pallet Load Stability | High-friction paper sheets preventing cargo sliding between stacked pallet layers. Eco-friendly and available in custom sizes. |
| Stabustrap | Stabustrap - Reusable Pallet Strapping System | Lightweight, 100% recyclable pallet strapping for internal logistics. A sustainable alternative to single-use plastic wrap. |
| Datalogger | Data Logger - USB Temperature & Humidity Monitor | Plug-and-play USB data loggers with automatic PDF/Excel report generation. Up to 120 days of temperature and humidity monitoring. |

Danish translations will follow the same pattern using existing Danish copy from the translation file.

## Technical Approach

### 1. Create a `usePageMeta` hook
A new hook (`src/hooks/usePageMeta.ts`) that accepts a title and description, and uses `useEffect` to:
- Set `document.title`
- Update or create the `<meta name="description">` tag
- Clean up on unmount (restore defaults)

### 2. Add translation keys
Add `meta.title` and `meta.description` keys for each page in both `en` and `da` sections of `src/contexts/LanguageContext.tsx`.

### 3. Call `usePageMeta` in every page component
Each of the 19+ page components will call:
```typescript
usePageMeta(t("pageName.meta.title"), t("pageName.meta.description"));
```

### 4. Update `index.html` defaults
Update the fallback `<meta name="description">` in `index.html` to the home page description instead of "Lovable Generated Project".

### Files Modified
- **New**: `src/hooks/usePageMeta.ts`
- **Modified**: `src/contexts/LanguageContext.tsx` (add ~80 translation keys)
- **Modified**: `index.html` (update default meta)
- **Modified**: All 19 page components (add one hook call each)

