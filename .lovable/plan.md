# TanStack SSR vs. your current cPanel setup — trade-offs

You asked two things: can the project move to TanStack SSR, and would cPanel still work afterwards.

Short answers: **yes it can be moved**, and **no, cPanel would no longer be a good home for it**.

## Why cPanel and SSR don't mix

Your site today is a pile of finished HTML files. The build runs, a script visits every page and saves the fully written-out HTML, and you upload that folder. Your web host just hands files to visitors — it never runs your app.

Server rendering works the other way: your app has to be *running* on the server, awake, for every single visit, building each page on demand. Standard cPanel shared hosting doesn't offer that. Some cPanel plans have a "Node.js app" panel, but it's fragile for this, and everything in your `.htaccess` — the ~80 redirects from your old site, the trailing-slash rules, the caching headers — would have to be rebuilt inside the app instead.

## Option A — Stay as you are (recommended)

Keep the current setup, keep cPanel, keep your `.htaccess` exactly as it is.

- Crawlers already receive complete HTML with all text, links, meta tags and structured data.
- Google cannot tell the difference between your pre-written HTML and server-rendered HTML. There is no SEO gain waiting for you here.
- Cost: nothing. Risk: nothing.

What could actually be improved without changing frameworks:
- Verify every page in the build genuinely came out full (a page that silently rendered empty is the real risk with this approach).
- Fix the duplicate slash/no-slash indexing you flagged earlier — that one is worth real ranking points, far more than SSR would be.

## Option B — Move to TanStack, move hosting

Genuine server rendering, publishing through Lovable (or another host that runs apps) instead of cPanel.

Gains:
- Pages render on request, so content is always current without a rebuild.
- Faster first paint on slow connections.
- Cleaner setup long-term: redirects, page titles and language routing all live in one place instead of split between the app and `.htaccess`.

Costs:
- Your domain has to point at the new host. cPanel stops serving the site.
- All ~80 old-URL redirects get rebuilt as app rules. Any mistake there loses link value from your old site — this is the single biggest risk.
- The upgrade also modernises the styling engine underneath, so every page needs a visual once-over afterwards.
- Uses credits, and takes a working session to complete plus follow-up fixes.

## Option C — TanStack but still static on cPanel

Technically possible, but you'd end up where you already are: finished files on cPanel, no real server rendering. You'd pay the full migration cost for no benefit. Not recommended.

## My recommendation

Stay on Option A. Your SEO problem isn't rendering — the pages already deliver full HTML. It's the duplicate slash/no-slash URLs Google is indexing twice. Fixing that is a small, safe change with a real payoff.

Consider Option B only if you're separately unhappy with the upload-to-cPanel workflow and want the site managed in one place.

## If you want to proceed

Tell me which option, and I'll write a build plan for it. For Option B specifically, the migration is reversible from chat history, and the redirect rebuild would be verified route-by-route against your current `.htaccess` before publishing.

## Also requested: logo SVG export

You asked for the DESICCANT logo as an SVG. It already exists in the project as `public/logo-desiccant.svg` — in build mode I'll copy it to your Files so you can download it directly. Approve this plan (or skip it) and I'll do the export immediately.
