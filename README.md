# Marie Magcaling — Automation Portfolio

A single-page personal portfolio for **Sahara Marie Kris Magcaling**, a Workflow
and AI Automation Specialist. The page walks a visitor from an aurora-lit hero
through services, project highlights, work history, technical skills, client
testimonials, and a contact form.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, TanStack Router) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (CSS-first `@theme` tokens) |
| Icons | `lucide-react` |
| Forms | Netlify Forms (AJAX submission) |
| Hosting | Netlify |
| Language | TypeScript 5.9 (strict) |

## Running locally

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

To exercise the site the way Netlify serves it (redirects, functions, form
handling), use the Netlify CLI instead:

```bash
netlify dev
```

Note that **form submissions only work on a deployed site** — Netlify's form
processing runs at the CDN edge, so local submissions will not appear in the
Netlify UI. Test the contact form on a deploy preview.

## Project layout

```
public/
  __forms.html          Hidden form skeleton so Netlify registers "contact" at build time
  profile.jpg           Hero avatar
  projects/*.jpg        Project card thumbnails
src/
  components/           One component per page section, plus Aurora / Reveal helpers
  data/portfolio.ts     All site copy (nav, services, projects, experience, skills, etc.)
  routes/__root.tsx     HTML shell, meta tags, web font
  routes/index.tsx      Assembles the sections into the single page
  styles.css            Theme tokens, gradient/reveal utilities, aurora keyframes
```

## Editing content

Nearly all text lives in `src/data/portfolio.ts` — headline, services, project
list, experience entries, skill groups, testimonials, and contact channels.
Editing that one file updates the page; the section components are purely
presentational.

If you add or rename a contact form field, update **both**
`src/components/Contact.tsx` and `public/__forms.html` — Netlify validates
submitted field names against the ones it detected at build time.

## Deploying

Pushing to the connected branch is enough; Netlify runs `vite build` and
publishes `dist/client` (see `netlify.toml`). Submissions land under
**Forms → contact** in the Netlify dashboard.
