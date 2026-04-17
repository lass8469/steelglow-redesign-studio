

## Fix LinkedIn Insight Tag — `window.lintrk` undefined

### Root Cause

In `index.html`, the second LinkedIn `<script>` tag has an `async` attribute:

```html
<script type="text/javascript" async>
  (function(l) {
    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
    window.lintrk.q=[]}
    ...
  })(window.lintrk);
</script>
```

While `async` on inline scripts is technically a no-op per HTML spec, our prerender pipeline (puppeteer + post-processing in `scripts/prerender.mjs`) and Vite's HTML transform can mishandle it — and more importantly it signals "non-blocking" which some toolchains use to defer the inline IIFE. The result: by the time React hydrates and `useLinkedInInsight` calls `typeof window.lintrk === "function"`, the stub hasn't been initialized → check fails → no track event → and from the console, `window.lintrk` is `undefined`.

This matches LinkedIn's official snippet exactly EXCEPT for that stray `async` — which is not in their published version.

### Fix

**`index.html`** — remove the invalid `async` attribute from the inline LinkedIn IIFE script. Restores LinkedIn's canonical snippet verbatim. The stub `window.lintrk = function(a,b){...}` then runs synchronously in `<head>` before React mounts, guaranteeing the function exists by the time the hook fires.

Single-character-class change:
```diff
- <script type="text/javascript" async>
+ <script type="text/javascript">
    (function(l) { ... })(window.lintrk);
  </script>
```

### Files

| File | Change |
|---|---|
| `index.html` | Remove `async` attribute from inline LinkedIn IIFE `<script>` opening tag |

No changes to `useLinkedInInsight.ts` or `LanguageLayout.tsx` — they're correct; they just need the stub to actually exist on `window`.

### Verification

After the fix:
1. Reload preview → DevTools console → type `window.lintrk` → returns `function` (the stub or fully loaded script).
2. `window.lintrk.q` → array (queued calls before `insight.min.js` loads).
3. Network tab → navigate between routes → see requests to `px.ads.linkedin.com/collect` on each navigation.
4. LinkedIn Insight Tag browser extension → shows partner ID `8674345` active.

