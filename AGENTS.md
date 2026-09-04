# AGENTS.md

Context for AI agents working on this repository.

## What this is

A single-page portfolio site for Sahara Marie Kris Magcaling (Workflow and AI
Automation Specialist). It is a visual recreation of an existing portfolio
design: dark plum background, aurora wave hero, magenta gradient section
headings, and bordered translucent cards.

Built with TanStack Start (React 19 + TanStack Router), Tailwind CSS 4, and
deployed on Netlify.

## Architecture

There is exactly **one route** — `src/routes/index.tsx` — which stacks section
components in order:

```
Navbar → Hero → Services → Projects → Experience → Skills → Testimonials → Contact → Footer
```

Navigation is anchor-based (`#home`, `#services`, `#portfolio`, `#experience`,
`#skills`, `#testimonials`, `#contact`), not router navigation. Section `id`s
must stay in sync with `navLinks` in `src/data/portfolio.ts`.

### Key directories

| Path | Purpose |
| --- | --- |
| `src/data/portfolio.ts` | Single source of truth for all site copy |
| `src/components/` | One component per section, plus `Aurora`, `Reveal`, `SectionHeading` |
| `src/styles.css` | Tailwind `@theme` tokens, custom utilities, keyframes |
| `src/routes/__root.tsx` | HTML shell, SEO meta, Google Font link |
| `public/projects/` | Project card thumbnails |
| `public/__forms.html` | Netlify Forms detection skeleton (see below) |

## Conventions

- **Content is data, sections are presentation.** Copy changes belong in
  `src/data/portfolio.ts`. Don't inline new strings into section components.
- **Styling is Tailwind utility classes only** — no CSS modules, no styled
  components. Shared visual patterns live as `@utility` rules in `styles.css`
  (`container-x`, `heading-gradient`).
- **Colors come from theme tokens**, not raw hex: `bg-ink`, `bg-surface`,
  `bg-card`, `text-body`, `text-body-dim`, `text-accent`, `accent-bright`,
  `accent-deep`, `accent-soft`. Raw hex is only acceptable inside
  `Aurora.tsx`, where the gradients are hand-tuned.
- **Card recipe** used across Services / Projects / Experience / Testimonials /
  Contact: `rounded-xl border border-white/[0.07] bg-card/60`. Reuse it so the
  sections stay visually consistent.
- TypeScript runs with `strict`, `noUnusedLocals`, and `noUnusedParameters`.
  Unused imports or locals fail the build.

## Non-obvious decisions

- **`Reveal` casts its `as` prop to `'div'`** (`const Tag = as as 'div'`). This
  is deliberate: JSX over a union of intrinsic tag names does not type-check
  cleanly, so the cast narrows props to one concrete element while still
  rendering the requested tag at runtime.
- **`.reveal` starts at `opacity: 0`** and an `IntersectionObserver` adds
  `.is-visible`. A `<noscript>` block in `__root.tsx` force-shows the content
  if JS never runs, and `prefers-reduced-motion` disables the animation.
- **`public/__forms.html` is mandatory.** Netlify detects forms by scanning
  static HTML at build time, and React-rendered forms are invisible to that
  scan. The contact form POSTs to `/__forms.html` (not `/`, which would be
  swallowed by the SSR catch-all function) with
  `application/x-www-form-urlencoded` encoding. Any field added to
  `Contact.tsx` must also be added to `__forms.html`, and the hidden
  `form-name` input must stay as `contact`.
- **Aurora background is pure CSS + SVG** — layered radial gradients plus
  blurred, slowly drifting SVG stroke "ribbons". No images, no canvas. Particle
  positions are a fixed array rather than `Math.random()` to avoid SSR
  hydration mismatches.
- **`content-collections` was removed** from the scaffolded template (this site
  has no markdown content), but its packages remain listed in `package.json` so
  the committed `pnpm-lock.yaml` stays valid. Don't re-add the Vite plugin.
- Project thumbnails are modest-resolution JPEGs; cards render them at a fixed
  `aspect-[281/160]` so mismatched sizes never shift the grid.

## Things not to do

- Don't run `vite build`, `tsc`, or `pnpm dev` to validate — the Netlify build
  pipeline validates automatically.
- Don't test form submissions locally; they only work on a deploy.
- Don't add a second route unless the design genuinely needs one; this is a
  one-pager and the nav assumes anchors.
