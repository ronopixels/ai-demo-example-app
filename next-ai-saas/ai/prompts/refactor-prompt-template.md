# Refactor-after-review prompt template

Use after **`review-page`** or a manual QA pass. **Small scope** — approved fixes only.

```text
Apply ONLY these review fixes (no redesign):

Review notes:
- [bullet list from review]

Allowed files:
- [explicit list]

Constraints:
- Do not refactor unrelated code
- Do not add dependencies
- If UI icons are involved: keep `@phosphor-icons/react` only (no other icon libraries)
- Keep behavior the same except for listed fixes

Output:
- Diff summary
- Changed files list
```
