

## Add Contextual Internal Links to Blog Articles

### Problem
Blog article text sections are plain strings with no support for inline links. To implement SEO internal linking within article body content, the rendering system needs to support embedded links first, then each article needs contextual links added.

### Approach

This is a two-phase effort:

**Phase 1 — Enable inline links in article text**

Add a lightweight markdown-style link parser that converts `[anchor text](/path)` syntax inside text content strings into clickable `<LocalizedLink>` elements. This keeps the article data format simple (still plain strings) while enabling rich inline links.

- Create a utility function `parseInlineLinks(text: string)` in `src/lib/parse-inline-links.tsx` that:
  - Splits text on `[...](/...)` patterns
  - Returns an array of React nodes (strings and `<LocalizedLink>` elements)
  - Handles both internal paths (rendered as `<LocalizedLink>`) and external URLs (rendered as `<a target="_blank">`)

- Update `BlogArticlePage.tsx` to use this parser in the `renderSection` function for `text`, `callout`, `list`, and `numbered-list` section types

**Phase 2 — Insert contextual links into all 17 English articles + 17 Danish articles**

For each article, insert 4-7 inline links following the SEO strategy:
- At least 2-3 links to priority blog pages (high SEO value articles)
- Remaining links to commercial product pages
- Spread across first 25%, middle, and final 25% of article
- Natural anchor text (2-6 words, partial-match and semantic variations)
- Language-matched: English articles link to `/en/` paths, Danish to `/da/` paths

Since `LocalizedLink` auto-prefixes the language, links in article content will use bare paths like `/silica` or `/blog/container-rain-dew-point-physics`.

### Example

Before:
```typescript
{ type: "text", content: "Silica gel is one of the most widely used desiccants in packaging." }
```

After:
```typescript
{ type: "text", content: "Silica gel is one of the most widely used [desiccants in packaging](/blog/moisture-in-packaging)." }
```

### Files Changed

| File | Change |
|------|--------|
| `src/lib/parse-inline-links.tsx` | New utility — parses `[text](url)` into React nodes |
| `src/pages/BlogArticlePage.tsx` | Use parser in `renderSection` for text/list/callout sections |
| `src/lib/blog-articles.ts` | Add 4-7 inline links per article (17 articles) |
| `src/lib/blog-articles-da.ts` | Add 4-7 inline links per article (17 articles) |

### Technical Detail

The link syntax parser uses a regex like `/\[([^\]]+)\]\(([^)]+)\)/g` to find links. Internal paths (starting with `/`) use `LocalizedLink`; external URLs use standard `<a>` tags. This approach requires zero changes to the `ArticleSection` type definition — content remains a `string`, just with optional markdown-link syntax embedded.

