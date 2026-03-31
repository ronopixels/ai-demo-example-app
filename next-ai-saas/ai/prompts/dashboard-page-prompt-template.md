# Dashboard page prompt template

**One prompt = one `(dashboard)` page.**

```text
Build the dashboard page: [PAGE TITLE].

Target:
- src/app/(dashboard)/[path]/page.tsx
- New components only under src/components/dashboard/ (list if any)

Data:
- src/data/[analytics|dashboard-nav|...].ts (create or extend)

Requirements:
- Reuse existing dashboard layout (do not replace shell)
- ThemeForest-ready: realistic demo metrics, clean cards/tables
- Responsive: mobile, tablet, desktop
- Do not import marketing-only sections

Constraints:
- Tailwind v4, TypeScript, cn from @/lib/cn
- Icons: `@phosphor-icons/react` only
- Motion: `motion/react` if animating (`26-motion.mdc`)
- Do not change marketing or auth routes
- No new dependencies without approval

Output:
- Page + new components
- Changed files, data shape summary, assumptions
```
