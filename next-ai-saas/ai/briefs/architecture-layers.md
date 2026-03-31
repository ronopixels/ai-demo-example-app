# Architecture layers — Nexsas

Three layers (same codebase; increasing depth):

## Layer 1 — ThemeForest sellable template

- Multiple homepage demos, inner pages, auth, dashboard, reusable sections.
- Polish, responsiveness, consistent design system.
- Demo data in `src/data/`, not fake backends.

## Layer 2 — SaaS-ready structure

- App Router route groups: `(marketing)`, `(auth)`, `(dashboard)`.
- Central `routes.ts`, `site-config`, scalable folders (`components/`, `sections/`, `data/`).
- Clear separation: marketing UI ≠ dashboard widgets.

## Layer 3 — AI-ready product starter (future)

- AI assistant, prompt library, workflow automation, integrations hub, KB, reporting.
- Same patterns: new routes + data modules + dashboard sections.

**Implication:** Build Layer 1–2 first; leave extension points (routes, `data/`, nav) so Layer 3 does not require rewrites.
