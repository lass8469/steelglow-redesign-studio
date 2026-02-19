

# Updated .htaccess for desiccant.com Migration

## What This Does

The new .htaccess will combine your old site's redirect rules with the new SPA architecture. Every old URL from your current site will be 301-redirected to its new equivalent under the `/en/` or `/da/` prefix, preserving SEO link juice. New visitors and search engines will be served pre-rendered static HTML where available, with a SPA fallback for everything else.

## Old URL to New URL Mapping

Here is the complete redirect map:

### English Pages
| Old URL | New URL |
|---|---|
| `/` (bare root) | `/en` |
| `/index.html` | `/en` |
| `/About-us` | `/en/about` |
| `/Applications` | `/en/applications` |
| `/Contact` | `/en/contact` |
| `/Downloads` | `/en/downloads` |
| `/Privacy` | `/en/privacy` |
| `/FAQ` | `/en/faq` |
| `/Cargo` | `/en/products` |
| `/Desiccants` | `/en/products` |

### English Products
| Old URL | New URL |
|---|---|
| `/Anti-slip` | `/en/anti-slip` |
| `/Calcium-chloride` | `/en/calcium-chloride` |
| `/Datalogger` | `/en/datalogger` |
| `/Drybag` | `/en/drybag-i` |
| `/DrybagIII` | `/en/drybag-iii` |
| `/Dunnage-bags` | `/en/dunnage-bags` |
| `/EdgeProtectors` | `/en/edge-protectors` |
| `/MolecularSieve` | `/en/molecular-sieve` |
| `/Retail` | `/en/retail` |
| `/Silica` | `/en/silica` |
| `/Stabustrap` | `/en/stabustrap` |

### Danish Pages
| Old URL | New URL |
|---|---|
| `/da/` (old Danish home) | `/da` |
| `/Om-os` | `/da/about` |
| `/Anvendelsesmuligheder` | `/da/applications` |
| `/Kontakt` | `/da/contact` |
| `/Ressourcer` | `/da/downloads` |
| `/Privatlivspolitik` | `/da/privacy` |
| `/Lastbeskyttelse` | `/da/products` |
| `/Fugtbeskyttelse` | `/da/products` |

### Danish Products
| Old URL | New URL |
|---|---|
| `/da/Anti-slip/` | `/da/anti-slip` |
| `/da/SuperAbsorber/` | `/da/calcium-chloride` |
| `/da/datalogger/` | `/da/datalogger` |
| `/da/DryBag1/` | `/da/drybag-i` |
| `/da/DryBagIII/` | `/da/drybag-iii` |
| `/Luftpuder/` | `/da/dunnage-bags` |
| `/Kantbeskyttere/` | `/da/edge-protectors` |
| `/da/MolecularSieve/` | `/da/molecular-sieve` |
| `/da/Retail/` | `/da/retail` |
| `/da/Silica/` | `/da/silica` |
| `/da/Stabustrap/` | `/da/stabustrap` |

### Old Physical File Paths (from the old multi-file site)
All old `.html` file paths (e.g. `/aboutus/about.html`, `/products/silica/silica.html`, `/da/products/db1.html`) will also 301 redirect to their new equivalents.

## .htaccess Structure

The new file will be organized in this order:

1. **HTTPS enforcement** -- redirect HTTP to HTTPS
2. **www to non-www** -- canonical domain redirect
3. **Strip index.html** -- clean URL enforcement
4. **301 redirects from old URLs** -- all old English and Danish URLs (both clean URLs and physical .html paths) redirect to their new `/en/` and `/da/` equivalents
5. **Root redirect** -- bare `/` goes to `/en`
6. **Pre-rendered file serving** -- serve static HTML from the pre-render output if it exists
7. **Static file passthrough** -- JS, CSS, images, fonts served directly
8. **SPA fallback** -- everything else falls through to `/index.html`
9. **Performance** -- GZIP compression, browser caching (1 year for hashed assets, 1 month for images/fonts, 10 minutes for HTML)
10. **Security headers** -- X-Frame-Options, X-Content-Type-Options, Referrer-Policy, X-XSS-Protection
11. **MIME types** -- correct content types for .webp, .svg, .woff2, etc.
12. **Options -Indexes** -- prevent directory listing

## Technical Details

- All 301 redirects use case-insensitive matching `[NC]` to catch variations
- The old "custom rewrite" rules (that internally mapped clean URLs to .html files) are replaced entirely -- those physical files no longer exist
- Trailing slash variations are handled
- The file will be written to `public/.htaccess` so it's included in the `dist` output during build

