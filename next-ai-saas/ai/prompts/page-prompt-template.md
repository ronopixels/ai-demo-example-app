# Page prompt template

Copy and fill in. **One prompt = one page (primary target).**

```text
Build the [PAGE NAME] page.

Target:
- src/app/[route-group]/[path]/page.tsx
- [optional: section/component files]

Constraints:
- Tailwind v4, TypeScript, existing layout for this route group
- Icons: `@phosphor-icons/react` only for UI icons
- Motion: `motion/react` in client components if animating (`26-motion.mdc`)
- Data from: [src/data/...]
- Do not modify: [paths]
- No new dependencies

Output:
- Implementation
- Changed files list
- Assumptions
```
