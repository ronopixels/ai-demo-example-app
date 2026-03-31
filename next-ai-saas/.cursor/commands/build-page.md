# Command: build-page

Use this template when asking the agent to implement **one** page.

## Instructions for the agent

1. Confirm the **route group** (marketing / auth / dashboard) and **file path** for `page.tsx`.
2. Check `src/data/*` for existing content; extend data files instead of hardcoding duplicate lists.
3. Reuse sections and components from `src/sections` and `src/components`.
4. Use Tailwind v4 and `cn` from `@/lib/cn`; Server Components unless client state is required.
5. Do not edit unrelated routes or add dependencies without explicit approval.
6. **Icons**: UI icons use **`@phosphor-icons/react`** only (see `.cursor/rules/25-phosphor-icons.mdc`).

## User prompt template (fill in)

```text
Build the [PAGE NAME] page.

Target:
- src/app/[ROUTE_GROUP]/[path]/page.tsx
- [list any new section/component files]

Constraints:
- Use existing design tokens and layout patterns
- Icons: `@phosphor-icons/react` only for UI icons
- Data from: [e.g. src/data/pricing.ts]
- Do not touch: [folders to exclude]
- No new npm packages

Output:
- Implement the page
- List changed files, reused vs new components, assumptions
```

## Stop condition

Stop after this page renders correctly and passes lint for touched files.
