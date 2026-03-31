---
name: html-export-alignment
description: >-
  Use when syncing or creating a parallel static HTML version of a Next.js page
  (optional). Next.js remains the source of truth.
---

# HTML export alignment (optional)

## When to use

- The user maintains a separate `html/` or static export alongside this Next app.
- Not needed for pure Next.js-only workflows.

## Rules

- **Source of truth**: The Next.js page (structure, section order, copy intent).
- **No framework code** in HTML: no React hooks, no `next/image` — use plain HTML/CSS/JS patterns consistent with the template.
- **Icons**: the Next app uses `@phosphor-icons/react`; in static HTML use **inline SVG or images** that visually match (same metaphor/weight), not the npm package.
- **Match sections** and hierarchy; note any asset path differences (`public/` vs relative `assets/`).
- **Document gaps**: If something cannot be mirrored (e.g. dynamic MDX), say so in the summary.

## Output

Return **changed files**, **mirrored sections**, **differences**, **assumptions**.
