---
name: nexsas-workflow
description: >-
  Use for Nexsas template strategy: ThemeForest layers, build order, page map,
  prompting formula (one task = one target), and avoiding common failures.
---

# Nexsas workflow (master guide digest)

## Product layers

1. **ThemeForest sellable template** — demos, inner pages, auth, dashboard, reusable sections.
2. **SaaS-ready architecture** — app shell, route groups, data-driven modules.
3. **AI-ready starter** — room for AI assistant, workflows, integrations, KB (future).

## Core rule

> **One prompt = one task = one target = one review.**

## Prompt formula

**Context + target files + constraints + expected output + stop conditions.**

## Build order (short)

1. Foundation: tokens, globals, `cn`, ui primitives, layout shell (navbar/footer).
2. Marketing sections (hero, features, pricing, FAQ, CTA, …).
3. Core marketing pages (home variants, about, features, pricing, blog, contact, FAQ, legal).
4. Auth (sign-in, sign-up, forgot password, …).
5. Dashboard shell + core dashboard pages.
6. More demos, utilities, HTML sync, packaging.

## Repo AI map

- **`.cursor/rules/`** — persistent engineering standards.
- **`.claude/skills/`** — deep skills (this file, ThemeForest, App Router, HTML sync).
- **`.cursor/commands/` / `.claude/commands/`** — repeatable task templates.
- **`ai/briefs/`** — product brief, page map, design system, checklists.
- **`ai/prompts/`** — copy-paste prompt templates by task type.

## Icons

- React UI icons: **`@phosphor-icons/react` only** (see `.cursor/rules/25-phosphor-icons.mdc`). Static HTML export: SVG/images, not this package.

## Failure modes to avoid

- One giant prompt for the whole product.
- Editing unrelated routes or mixing marketing/dashboard components randomly.
- Hardcoding large content in `page.tsx` instead of `src/data/`.
- Skipping review after a build task.

When unsure, read `ai/briefs/page-map.md` and `ai/briefs/build-order.md`.
