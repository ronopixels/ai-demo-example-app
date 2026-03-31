# Command: build-component

Use this template for **one** reusable component (UI primitive, card, or section).

## Instructions for the agent

1. Place the file in the correct folder: `ui/`, `common/`, `layout/`, `marketing/`, `auth/`, `dashboard/`, or `sections/`.
2. **kebab-case** filename; **PascalCase** export; name by purpose.
3. Props should be explicit; avoid importing entire page datasets unless the component is a thin list renderer.
4. No new dependencies unless the user approves.
5. **Icons**: **`@phosphor-icons/react`** only for UI icons (see `.cursor/rules/25-phosphor-icons.mdc`).

## User prompt template

```text
Create [ComponentName] at [path, e.g. src/components/ui/button.tsx].

Requirements:
- [variants / sizes / behavior]
- Tailwind v4, TypeScript, cn() for class merging
- Icons: `@phosphor-icons/react` only
- Accessible focus and aria where needed

Output:
- Props type summary
- Changed files and assumptions
```

## Stop condition

Stop after the component is used in at least one place **or** exported for documented use, and lint passes.
