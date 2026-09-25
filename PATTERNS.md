# Pattern library

A library of working, awwwards-tier building blocks on top of the Tailwind +
shadcn/ui starter. Read this file before building any marketing/landing page
in this repo (or before copying patterns into another project) — it's the
index of what already exists so nothing gets reinvented as a generic
Tailwind card.

Live showcase: run `npm run dev` and open `/patterns`.

## Principles

- **One animation engine.** [`motion`](https://motion.dev) (the Framer
  Motion successor) handles every JS-driven animation — springs, scroll
  transforms, stagger reveals, `AnimatePresence`. Don't add GSAP or
  react-spring on top; it creates two competing animation systems for no
  benefit. If a project genuinely needs GSAP timelines or a Three.js/shader
  hero, add it per-project rather than baking it into the shared starter.
- **`lenis`** ([`lib/smooth-scroll.tsx`](lib/smooth-scroll.tsx)) drives
  buttery scroll site-wide. Mount `<SmoothScrollProvider>` once near the
  root of whichever route tree needs it (see `app/patterns/layout.tsx`) —
  don't mount it twice in the same tree.
- **`data-cursor="hover"`** on any interactive element makes
  `CustomCursor` grow over it. Add this attribute to every clickable
  element in a hero/CTA-heavy layout.
- Placeholder imagery is CSS gradients (`from-x to-y`). Swap for real
  photography/`next/image` — the parallax/hover/reveal wrappers around
  them don't need to change.
- Dutch copy in the demo data is just placeholder — replace per project.
- **`prefers-reduced-motion` is handled globally** — a CSS kill-switch in
  `globals.css` collapses all CSS animations/transitions to ~0ms, and every
  JS-driven pattern (`custom-cursor`, `magnetic-button`, `text-reveal`,
  `gallery-cursor-follow`, `smooth-scroll`) checks `useReducedMotion()` from
  `motion/react` and degrades to a static, fully-usable state rather than
  just running slower. Don't add a new JS-animated pattern without the same
  check — copy the pattern from `custom-cursor.tsx` or `text-reveal.tsx`.
- `CustomCursor` sets `cursor: none` (via a `.custom-cursor-active` class on
  `<html>`) only once mounted, and only on fine-pointer/hover-capable
  devices — never at the CSS level alone, so there's no dead-cursor flash
  before JS runs and touch devices are untouched.

## Infra / primitives (`components/patterns/interactions/`)

| File | What it does | When to use |
|---|---|---|
| `custom-cursor.tsx` | Mix-blend-difference dot that grows on `data-cursor="hover"` targets | Any site going for a crafted, non-default feel. Desktop only. |
| `grain-overlay.tsx` | Fixed SVG `feTurbulence` noise overlay, ~5% opacity | Flat gradients/dark sections that feel too clean/digital |
| `scroll-progress-bar.tsx` | 2px bar at top tracking scroll progress | Long-form pages, editorial/blog layouts |
| `magnetic-button.tsx` | Button that pulls toward the cursor within its bounds | Primary CTAs — don't use on every button, it loses impact |
| `text-reveal.tsx` | Word-by-word clip-in reveal, triggers on scroll into view | Headlines — the single highest-impact/lowest-effort pattern here |
| `marquee.tsx` | Infinite duplicated-track marquee, pauses on hover | Logos, testimonials, giant background type |

## Hero (`components/patterns/hero/`)

| File | What it does | Best for |
|---|---|---|
| `hero-gradient-mesh.tsx` | Centered headline over slow-drifting blurred gradient blobs | No photography available; product/SaaS |
| `hero-split-parallax.tsx` | Text left, scroll-parallaxed image right | Product shots, portfolios |
| `hero-marquee-bg.tsx` | Giant looping type behind pitch, dimmed to texture | Agency/studio sites |
| `hero-spotlight.tsx` | Dark hero, cursor-tracked radial glow, faint grid | Dev tools, AI products, technical brands |

## Navigation (`components/patterns/nav/`)

| File | What it does | Best for |
|---|---|---|
| `nav-glass.tsx` | Floating pill nav, condenses + blurs on scroll | Default choice — works over any hero |
| `nav-magnetic.tsx` | Bare nav, every link individually magnetic | Minimal/editorial sites with lots of whitespace |

Only mount one nav `fixed` at the page root at a time. To preview a second
one inline (as `/patterns` does), wrap it in a container with
`[transform:translateZ(0)]` — that makes the container the containing
block for the nav's `fixed` positioning instead of the viewport.

## Sections (`components/patterns/sections/`)

| File | What it does | Best for |
|---|---|---|
| `stats-counter.tsx` | Numbers count up once, on scroll into view | Social proof rows |
| `logo-wall.tsx` | Grayscale wordmarks → color + opacity on hover | Client/partner logos |
| `gallery-hover-reveal.tsx` | Grid tiles, image zooms + caption slides up on hover | Case studies, portfolio grids |
| `gallery-cursor-follow.tsx` | List rows; a floating preview image tracks the cursor while hovering | Agency project lists — this is the single most "expensive-looking" pattern in the set |
| `testimonial-marquee.tsx` | Testimonial cards on the shared `Marquee` | Always looks "full" regardless of quote count |
| `pricing-toggle.tsx` | Monthly/annual toggle, price digit animates on switch | SaaS pricing |
| `cta-gradient-glow.tsx` | Closing CTA with a drifting glow blob behind the button | Page-end conversion push |
| `footer-mega.tsx` | Link columns + huge outlined wordmark bleeding off the bottom edge | Default footer |

## Wiring a new route

```tsx
// app/(marketing)/layout.tsx
import { SmoothScrollProvider } from "@/lib/smooth-scroll"
import { CustomCursor } from "@/components/patterns/interactions/custom-cursor"
import { GrainOverlay } from "@/components/patterns/interactions/grain-overlay"
import { ScrollProgressBar } from "@/components/patterns/interactions/scroll-progress-bar"

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ScrollProgressBar />
      <GrainOverlay />
      <CustomCursor />
      {children}
    </SmoothScrollProvider>
  )
}
```

Then compose sections directly in `page.tsx` — every component here takes
sane defaults and optional props for copy overrides.

## Adding a new pattern

1. Build it in the matching subfolder of `components/patterns/`.
2. Add it to `app/patterns/page.tsx` so it's visible in the live showcase.
3. Add a row to the relevant table above — one line: what it does, when to
   reach for it. That line is what future sessions read instead of opening
   the file.
