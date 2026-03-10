

## Plan: Add "What is a Desiccant?" Blog Article

This is a comprehensive guide article with tables, bullet lists, numbered lists, callouts, and FAQ sections. The article exists in both English and Danish. The uploaded hero image (Desiccant.webp) will be used.

### Key challenge: Tables
The current `ArticleSection` type does **not** support tables. The Word documents contain comparison tables (e.g., desiccant types comparison). I need to add a `"table"` section type and render it.

### Changes

**1. Add `table` section type** (`src/lib/blog-articles.ts` + `src/pages/BlogArticlePage.tsx`)
- Extend `ArticleSection` union with: `{ type: "table"; headers: string[]; rows: string[][] }`
- Add table rendering in `renderSection` with a styled responsive table

**2. Copy hero image** (`user-uploads://Desiccant.webp` → `src/assets/blog-desiccant-guide.webp`)

**3. Add English article** (`src/lib/blog-articles.ts`)
- Slug: `what-is-a-desiccant-complete-guide`
- Full structured content from the English Word doc with ~25+ sections including:
  - Text paragraphs (absorption vs adsorption, RH, hygroscopic materials, etc.)
  - Bullet lists (moisture damage types, container condensation causes, etc.)
  - Numbered lists (6 factors for choosing desiccants)
  - **Comparison table** (4 desiccant types: silica gel, clay, molecular sieve, calcium chloride)
  - Callouts (practical calculation example, container sizing)
  - Subheadings for FAQ section (6 Q&As as heading+text pairs)
  - CTA linking to contact page

**4. Add Danish article** (`src/lib/blog-articles-da.ts`)
- Same slug, full Danish translation from the Danish Word doc

**5. Add blog listing entry** (`src/pages/BlogPage.tsx`)
- New post at position 1 (newest) in the `blogPosts` array
- Slug: `what-is-a-desiccant-complete-guide`
- Category: "Guide"
- Read time: ~20 min

**6. Add translation keys** (`src/contexts/LanguageContext.tsx`)
- English and Danish keys for `blogPage.post16.title` and `blogPage.post16.excerpt`

### Files to modify
1. `src/lib/blog-articles.ts` — Add table type + English article (~200 lines)
2. `src/lib/blog-articles-da.ts` — Danish article (~200 lines)
3. `src/pages/BlogArticlePage.tsx` — Add table renderer
4. `src/pages/BlogPage.tsx` — Add post 16 to listing
5. `src/contexts/LanguageContext.tsx` — Add EN+DA translation keys
6. Copy hero image to `src/assets/`

