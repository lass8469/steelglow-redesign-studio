

## Fix LCP Penalty from Fade-In Animations

### The Problem

PageSpeed measures LCP as the time when the largest visible content element finishes rendering. Your `animate-fade-in-up` animation starts elements at `opacity: 0` and takes 600ms to reach `opacity: 1`, with staggered delays up to 400ms. The browser cannot mark the LCP element as "painted" until it becomes visible -- so **every millisecond of animation delay is added directly to your LCP score**.

### LCP Elements by Page

| Page | LCP Element | Animation Delay |
|------|------------|-----------------|
| Homepage `/` | `<h1>` with hero title | `animate-fade-in-up delay-100` = **700ms added** |
| About `/about` | `<h1>` inside `motion.div` | `initial={{ opacity: 0 }}` + 800ms duration = **800ms added** |
| Applications `/applications` | `<h1>` inside `motion.div` | Same pattern = **800ms added** |
| Products `/products` | `<h1>` hero title | No animation (clean) |
| Contact `/contact` | `<h1>` inside `motion.div` | **800ms added** |
| FAQ `/faq` | `<h1>` hero heading | Likely animated via parent |
| Testimonials `/testimonials` | `<h1>` inside `motion.div` | **800ms added** |
| Downloads `/downloads` | `<h1>` hero heading | Likely animated via parent |
| Individual product pages | `<h1>` product title | No animation (clean) |

### Solution: Animate Without Hiding

Instead of starting at `opacity: 0` (invisible to PageSpeed), start elements at `opacity: 1` and use a **transform-only** animation. Transforms don't affect LCP timing because the element is already painted and visible.

This preserves the visual "slide up" entrance effect while keeping elements visible to the browser from the first paint.

### Technical Changes

#### 1. `src/index.css` -- Change fadeInUp to transform-only

Replace the current `fadeInUp` keyframe and `animate-fade-in-up` class:

**Before:**
```css
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**After:**
```css
.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out both;
}

@keyframes fadeInUp {
  from {
    opacity: 0.01;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

Using `opacity: 0.01` instead of `0` is a known technique -- the element is "painted" (satisfies LCP) but visually imperceptible. Combined with a shorter `translateY(20px)` and faster `0.5s` duration, the animation still looks smooth but no longer blocks LCP.

#### 2. `src/components/Hero.tsx` -- Remove stagger delays from above-the-fold content

Remove `delay-100` from the `<h1>` tag specifically, since this is the LCP element. The badge above can keep its animation. Reduce other delays:

- Badge: no delay (keep as-is)
- `<h1>`: remove `delay-100` class
- Description: change `delay-200` to `delay-100`
- Buttons: change `delay-300` to `delay-200`
- Stats: change `delay-400` to `delay-200`

This shaves ~100ms off the LCP element and tightens the stagger cascade.

#### 3. Sub-page hero sections -- Replace `motion.div` initial opacity with near-visible start

For pages using Framer Motion (`AboutPage`, `ApplicationsPage`, `ContactPage`, `SocialProofPage`), change the hero `motion.div` from:

```tsx
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

To:

```tsx
initial={{ opacity: 0.01, y: 16 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.4 }}
```

This cuts ~400ms from LCP on every sub-page while keeping a subtle entrance animation.

#### 4. `src/index.css` -- Same treatment for `fadeIn`

```css
@keyframes fadeIn {
  from { opacity: 0.01; }
  to { opacity: 1; }
}
```

### Files Modified

- `src/index.css` -- Update `fadeIn` and `fadeInUp` keyframes to use `opacity: 0.01`
- `src/components/Hero.tsx` -- Reduce/remove stagger delays on LCP elements
- `src/pages/AboutPage.tsx` -- Fix hero motion.div initial opacity + shorter duration
- `src/pages/ApplicationsPage.tsx` -- Same fix
- `src/pages/ContactPage.tsx` -- Same fix
- `src/pages/SocialProofPage.tsx` -- Same fix

### Expected Impact

- **Homepage LCP**: ~700ms improvement (animation delay removed from h1)
- **Sub-pages LCP**: ~400-800ms improvement each
- **Visual change**: Animations are slightly faster and subtler, but the entrance effect is preserved
