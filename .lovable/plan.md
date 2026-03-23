

## Update GA4 Script to Filter Bot Traffic

Replace the current GA4 snippet in `index.html` with your modified version that checks screen resolution against a blacklist before initializing tracking.

### Changes

**1. `index.html`** — Replace the existing GA4 `<script>` block (lines 28-33) with your bot-filtering version:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6VBQ7QYGD1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  var screenRes = window.screen.width + 'x' + window.screen.height;
  var botResolutions = ['1280x1200', '3840x2160', '800x600', '1920x890', '1024x1024', '1600x1600', '2000x2000', '1366x1366'];
  if (botResolutions.indexOf(screenRes) === -1) {
    gtag('js', new Date());
    gtag('config', 'G-6VBQ7QYGD1', {
      'traffic_type': 'external'
    });
  }
</script>
```

**2. `src/hooks/useGoogleAnalytics.ts`** — Guard the `page_view` event so it also respects the same filter (otherwise SPA navigations would fire unfiltered):

```typescript
const screenRes = `${window.screen.width}x${window.screen.height}`;
const botResolutions = ['1280x1200','3840x2160','800x600','1920x890','1024x1024','1600x1600','2000x2000','1366x1366'];
if (botResolutions.indexOf(screenRes) === -1 && typeof window.gtag === "function") {
  window.gtag("event", "page_view", { ... });
}
```

This ensures bot resolution filtering applies to both the initial page load and all subsequent SPA route changes.

