# Command: build-dashboard-page

Use for **one** page under **`src/app/(dashboard)/`** (logged-in app shell).

## Instructions for the agent

1. Confirm path: `src/app/(dashboard)/.../page.tsx`. Reuse **`(dashboard)/layout.tsx`** — do not rebuild the shell unless asked.
2. Prefer widgets from **`src/components/dashboard/`** and data from **`src/data/`** (e.g. `analytics.ts`, `dashboard-nav.ts` when present).
3. Match dashboard visual language: cards, stats, tables — consistent with other dashboard routes.
4. **Do not** import marketing-only sections into dashboard routes.
5. Server Components by default; client only where charts or live UI require it.
6. **Icons**: **`@phosphor-icons/react`** only (see `.cursor/rules/25-phosphor-icons.mdc`).
7. **Motion**: **`motion/react`** for dashboard micro-interactions in client components (`26-motion.mdc`).

## User prompt template (fill in)

```text
Build the dashboard page: [PAGE NAME].

Target:
- src/app/(dashboard)/[path]/page.tsx
- New components under src/components/dashboard/ (list if any)
- Data: [src/data/...]

Constraints:
- Use existing dashboard layout
- Icons: `@phosphor-icons/react` only
- Motion: `motion/react` if adding animation (`26-motion.mdc`)
- Realistic demo data; ThemeForest-ready polish
- Do not modify marketing or auth routes
- No new dependencies without approval

Output:
- Implement page + any new components
- List changed files, data sources, assumptions
```

## Stop condition

Stop when the page renders inside the dashboard layout and lint passes for touched files.
