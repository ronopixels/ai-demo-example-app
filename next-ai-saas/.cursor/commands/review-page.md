# Command: review-page

Use after a page or feature slice is implemented.

## Instructions for the agent

Review **only** the files the user names (or the last feature’s diff). Check:

1. **Architecture**: Correct route group; thin `page.tsx`; data in `src/data`.
2. **UI**: Responsive layout; consistent spacing; focus states.
3. **DRY**: No obvious duplicate blocks that should be a component.
4. **Naming**: kebab-case files; purposeful component names.
5. **Template readiness**: Realistic placeholders; no broken links; ThemeForest-quality polish.
6. **Scope**: No unrelated edits or unnecessary deps.
7. **Icons**: UI icons should be **`@phosphor-icons/react`** only (flag other icon libraries).

## Output format

- **Summary** (short)
- **Issues** (ordered by severity)
- **Suggested fixes** (concrete; optional patch scope)

Do **not** rewrite the whole page unless asked.
