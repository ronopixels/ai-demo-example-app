# Command: plan-task

Use **before** coding: produce a **plan only** (no implementation). Aligns with master guide “planning prompt” step.

## Instructions for the agent

1. Read **`ai/briefs/page-map.md`** and **`ai/briefs/component-checklist.md`**. Most routes are **already implemented** — use the map to see **what exists**, not as a blank backlog unless the user is filling gaps.
2. Output structured sections: **goal**, **sections/components to reuse**, **missing pieces**, **files likely to change**, **risks**, **order of work**.
3. **Do not** write production code in this step — planning only unless the user asks otherwise.
4. If the task includes UI icons, plan for **`@phosphor-icons/react` only** (see `.cursor/rules/25-phosphor-icons.mdc`); static HTML uses SVG/images, not the package.
5. If the task includes **interactive animation**, plan for **`motion/react`** in **`"use client"`** components (see `.cursor/rules/26-motion.mdc`): **`useReducedMotion`**, no extra animation libraries, static HTML → CSS only.

## User prompt template (fill in)

### A — Motion / interactivity pass (most pages already exist)

Use when you want **richer interaction** (hover, stagger, reveals, small transitions) on existing marketing, auth, or dashboard UI.

```text
Plan (no code yet) for: add Motion-driven interactivity to [SCOPE — e.g. marketing home + key inner pages, or dashboard overview only].

Assumptions:
- Routes in ai/briefs/page-map.md are largely built; this pass focuses on **motion and micro-interactions**, not new routes unless listed below.

Context:
- Target routes or sections: [e.g. /, /home-v2, /features, /dashboard]
- Route group: [marketing | auth | dashboard | cross-cutting]
- Motion goals: [e.g. hero + CTA emphasis, staggered section entrances, card hover/tap, list item reveals, subtle route-level transitions]

Constraints for the plan (must reflect in answers):
- Animation stack: **motion/react** only — see **26-motion.mdc** (client components, **prefers-reduced-motion**, prefer transform/opacity).
- Icons: **@phosphor-icons/react** only — **25-phosphor-icons.mdc**.
- No new animation libraries (GSAP, etc.) unless explicitly approved.
- Static HTML export (if used): replicate feel with **CSS**, not motion/react.

Questions to answer in the plan:
1. Which **existing** components or sections get a thin **client wrapper** (or new `*-animated.tsx`) vs inline `"use client"` boundaries?
2. What motion patterns per surface (e.g. `whileInView` for sections, `layout` for lists, spring presets)?
3. Implementation **order** (one page or one section type at a time to keep review small)?
4. **Risks**: bundle size, hydration, layout shift, accessibility — and how to mitigate?
5. What routes or files are **out of scope** for this pass?

Output:
- Bullet plan, **file list** (new + touched), and **assumptions** only.
```

### B — Gaps, new pages, or checklist (still needed)

Use when something from the map is **still missing** or the **component checklist** has unchecked items you want to ship.

```text
Plan (no code yet) for: [TASK — e.g. add /compare, or empty-state component].

Context:
- Route group: [marketing | auth | dashboard]
- Related pages: [list]
- Reference: ai/briefs/page-map.md, component-checklist.md

Questions to answer in the plan:
1. Which sections/components already exist that we can reuse?
2. What new files are probably needed?
3. Which src/data/* modules are involved?
4. What should we explicitly NOT change?
5. If adding UI icons or motion, follow 25-phosphor-icons.mdc and 26-motion.mdc.

Output:
- Bullet plan and file list only
```

## Stop condition

Stop after the plan is delivered. The user sends a follow-up **build-*** command or a **scoped implementation prompt** (e.g. “implement Motion plan for `/features` only”).
