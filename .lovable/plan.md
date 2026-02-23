

## Force Lowercase Asset Filenames in Vite Build

### Problem
cPanel's file manager or zip extractor lowercases filenames during upload, breaking Vite's mixed-case asset references (e.g., `index-rQZQyNoB.js` becomes `index-rqzqynob.js`), causing 404 errors on the live site.

### Solution
Add Vite's `build.rollupOptions.output` configuration to force all generated asset filenames to lowercase. This ensures the filenames Vite writes into `index.html` and code-split imports match what ends up on the server after a cPanel upload.

### Technical Details

**File to modify:** `vite.config.ts`

Add a custom `hashManifestFileName` approach using Rollup's output options:

```ts
build: {
  rollupOptions: {
    output: {
      // Force all chunk/asset filenames to lowercase
      entryFileNames: (chunkInfo) =>
        `assets/${chunkInfo.name.toLowerCase()}-[hash].js`,
      chunkFileNames: (chunkInfo) =>
        `assets/${chunkInfo.name.toLowerCase()}-[hash].js`,
      assetFileNames: (assetInfo) =>
        `assets/${assetInfo.name?.toLowerCase() ?? 'asset'}-[hash][extname]`,
    },
  },
},
```

Rollup/Vite hashes are already lowercase hex, so only the human-readable portion (the chunk/asset name) needs lowercasing. This single change ensures every output file has a fully lowercase filename, eliminating all case-sensitivity issues on Linux servers after cPanel uploads.

### Scope
- One file changed: `vite.config.ts`
- No impact on development server (only affects `vite build` output)
- After this change, rebuild (`npm run build`) and re-upload the `dist/` folder

