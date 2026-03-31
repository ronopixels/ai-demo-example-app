# Command: build-section

Use when adding or refactoring **one reusable page section** (not a full route).

## Instructions for the agent

1. Place the section under **`src/sections/<area>/`** using **kebab-case** filenames (e.g. `pricing-faq.tsx`). Export **PascalCase** components.
2. Compose from **`src/components/ui/`** and domain folders (`marketing/`, etc.). Do not duplicate UI primitives.
3. **Data**: import from `src/data/*.ts` or add a focused data module; avoid long literals in the section file.
4. Keep the section **prop-driven** when it may appear on multiple pages (e.g. optional `className`, `heading`).
5. Server Component by default; `"use client"` only for toggles, carousels, or forms.
6. **Icons**: **`@phosphor-icons/react`** only (see `.cursor/rules/25-phosphor-icons.mdc`).

## User prompt template (fill in)

```text
Build one section: [SECTION NAME].

Target:
- src/sections/[area]/[file-name].tsx
- Data: [src/data/xxx.ts] (or "create src/data/xxx.ts")

Constraints:
- Reuse: [existing components]
- Do not touch: [routes / folders]
- Tailwind v4, cn from @/lib/cn
- Icons: `@phosphor-icons/react` only
- No new npm packages unless approved

Output:
- Implement the section
- List changed files, props interface, assumptions
```

## Stop condition

Stop when the section composes cleanly into a page and lint passes for touched files.
