# Command: create-demo

Use when adding a **new homepage demo** (alternate hero/section order via `demos.ts`).

## Instructions for the agent

1. Extend `src/data/demos.ts` with `slug`, `title`, `homepage`, `heroVariant`, `sectionOrder`.
2. Wire the marketing home (or a dedicated route) to read demo config and render sections in order.
3. Reuse existing section components; add new sections only if required.
4. Do not duplicate the entire homepage as unrelated copies unless explicitly requested.
5. **Icons** in any new UI: **`@phosphor-icons/react`** only (see `.cursor/rules/25-phosphor-icons.mdc`).

## User prompt template

```text
Add demo: [slug] — [short description].

Home route: [/ or /demos/xyz]
Section order: [list]

Output:
- Changed files
- Route
- Reused vs new components
- Assumptions
```
