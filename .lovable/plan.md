
## Add New Article: "The Chemistry of Clay"

A third article will be added to the Cargo Intelligence hub covering why Danish Mo-clay outperforms traditional silica gel.

### Changes

1. **`src/lib/blog-articles.ts`** -- Add a new article entry with slug `chemistry-clay-mo-clay-vs-silica-gel` containing all sections from the document (chemical structure, manufacturing processes, performance characteristics, regeneration, water footprint, chemical safety, end-of-life, geological quality, cost analysis, regulatory trends, application considerations, making the transition, and conclusion). Structured using the existing section types: `text`, `heading`, `callout`, and `list`.

2. **`src/pages/BlogPage.tsx`** -- Add a third entry to the `blogPosts` array referencing the new slug, with translation keys for title/excerpt, date `2025-02-10`, readTime `10`, and category `Technical`.

3. **`src/contexts/LanguageContext.tsx`** -- Add translation keys `blogPage.post3.title` and `blogPage.post3.excerpt` in both English and Danish.

### Technical Details

- Slug: `chemistry-clay-mo-clay-vs-silica-gel`
- Title (EN): "The chemistry of clay: why Danish Mo-clay outperforms traditional silica gel"
- Title (DA): "Lerets kemi: hvorfor dansk mo-ler overgaar traditionel silikagel"
- Read time: ~10 min (longest article so far)
- CTA: Links to `/contact` with messaging about selecting the right desiccant
- Article will appear as the newest entry in the blog listing grid
- Follows the exact same data-driven pattern as the two existing articles
