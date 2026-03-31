---
name: nextjs-page-architecture
description: >-
  Use when adding or restructuring App Router routes, layouts, metadata, or
  composing pages from sections and data.
---

# Next.js page architecture (App Router)

## Principles

- **One page = one `page.tsx`** in the correct route group.
- **Layouts** provide shared chrome (nav, footer, dashboard shell); avoid repeating wrappers on every page.
- **Compose** from `src/sections/*` and `src/components/*`; keep `page.tsx` thin.

## Data

- Import content from `src/data/*` (navigation, pricing, faq, demos, etc.).
- Central paths: `src/routes.ts`, branding: `src/constants/site-config.ts`.

## Routing

- Route groups **do not** appear in the URL: `(marketing)/pricing/page.tsx` → `/pricing`.
- Add **metadata** via `metadata` or `generateMetadata` for SEO where appropriate.

## Quality

- Responsive: mobile, tablet, desktop.
- Accessible: focus states, semantic headings, labels on forms.
- **Icons** in composed UI: **`@phosphor-icons/react`** only (see `.cursor/rules/25-phosphor-icons.mdc`).
- **Motion**: page-level animation belongs in small **client** components using **`motion/react`**; keep `page.tsx` as a Server Component shell when possible (see `.cursor/rules/26-motion.mdc`).

## Output

List **changed files**, **routes affected**, and **assumptions**.
