

## Fix: Force Lowercase Hashes in Vite Build

### Problem
The current config lowercases only the chunk/asset **name**, but Rollup's `[hash]` placeholder produces base64 hashes with uppercase letters (e.g., `index-BKyrR0PJ.js`). cPanel still lowercases these during upload, breaking references.

### Solution
Add `hashCharacters: "hex"` to the Rollup output config. This switches hash encoding from base64 (mixed-case) to hexadecimal (always lowercase `0-9a-f`).

### Technical Details

**File:** `vite.config.ts`

Add one line to `build.rollupOptions.output`:

```ts
output: {
  hashCharacters: "hex",   // <-- ADD THIS
  entryFileNames: ...      // existing
  chunkFileNames: ...      // existing
  assetFileNames: ...      // existing
}
```

This produces filenames like `index-a3f2b1c9e4.js` -- fully lowercase, immune to cPanel's lowercasing behavior.

### Scope
- One line added to `vite.config.ts`
- Rebuild required (`npm run build`) and re-upload `dist/`

