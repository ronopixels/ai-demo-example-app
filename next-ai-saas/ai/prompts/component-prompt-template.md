# Component prompt template

```text
Create [PascalCaseName] in [path, e.g. src/components/ui/button.tsx].

Requirements:
- [variants / sizes / behavior]
- Use cn() from @/lib/cn
- Icons: `@phosphor-icons/react` only for UI icons
- Motion: `motion/react` if animating (`26-motion.mdc`)
- Accessible focus and ARIA where needed
- No new dependencies

Output:
- Props interface summary
- Changed files
- Assumptions
```
