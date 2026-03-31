---
name: themeforest-template
description: >-
  Use when building any Nexsas UI, pages, or components. Enforces ThemeForest-ready
  template quality, architecture, and scoped changes.
---

# ThemeForest template builder (Nexsas)

**Icons in Next.js**: use **`@phosphor-icons/react`** for all UI icons unless the task is logos/illustrations only. No Lucide, Heroicons, or `react-icons`.

**Motion**: use the **`motion`** package (`import { motion } from "motion/react"`) for interactive animation in client components — tasteful, performant, accessible (`useReducedMotion`). Do not add GSAP or duplicate animation stacks. See `.cursor/rules/26-motion.mdc`.

## When to use

- New pages, sections, or components in this repo.
- Any task that affects marketing, auth, or dashboard UI.

## Product context

- **Nexsas** is a commercial **AI SaaS HTML/Next template** (this folder is **Next.js only**).
- Prioritize **polished, demo-ready** UI with **realistic placeholder data**, not a real backend.

## Architecture

- **Route groups**: `(marketing)`, `(auth)`, `(dashboard)` under `src/app/`.
- **Data** lives in `src/data/*.ts`; **sections** in `src/sections/`; **components** under `src/components/{ui,common,layout,marketing,auth,dashboard}/`.
- **Naming**: kebab-case files, PascalCase components, names by **purpose**.

## Constraints

- **Tailwind v4** + TypeScript; use `cn` from `@/lib/cn` for conditional classes.
- **No unrelated file edits**; **no new dependencies** unless the user explicitly allows.
- **Server Components** by default; `"use client"` when interactivity, Phosphor in client boundaries, or **`motion/react`** requires it.

## Output

At the end, list: **changed files**, **reused components**, **new components**, **assumptions**.
