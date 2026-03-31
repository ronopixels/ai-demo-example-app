# Product brief — Nexsas (Next.js)

## Positioning

Premium **ThemeForest-ready AI SaaS template** (Next.js): marketing, auth, dashboard, AI-oriented inner pages, reusable design system.

## Audience

AI SaaS, automation, agents, startups, analytics, support/helpdesk-style products.

## Principles

- Commercial template quality first; optional SaaS-starter evolution later.
- Data-driven content in `src/data/`; composable sections and components.
- **One prompt = one task = one target = one review.**

## This repo

- **Next.js only** (no bundled HTML export in this folder unless you add it).
- **Icons**: **`@phosphor-icons/react`** for UI icons; static HTML mirrors use SVG/images (see `.cursor/rules/25-phosphor-icons.mdc`).

## Architecture layers

1. **ThemeForest template** — sellable demos and pages.
2. **SaaS-ready** — route groups, `data/`, reusable components.
3. **AI-ready (future)** — assistant, workflows, integrations, KB.

See **`architecture-layers.md`** and repo-root **`master-guide-reference.md`** for the full narrative guide.

## AI workflow in repo

- **`.cursor/rules`** — standards.
- **`.cursor/commands` / `.claude/commands`** — scoped tasks (`build-page`, `build-section`, `plan-task`, …).
- **`ai/briefs`** + **`ai/prompts`** — maps and copy-paste templates.
