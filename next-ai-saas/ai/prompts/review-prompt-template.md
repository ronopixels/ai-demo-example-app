# Review prompt template

```text
Review these files: [list paths or "last change"].

Check:
- Route group and data placement
- Responsiveness and a11y
- Naming (kebab-case files, purposeful components)
- Repeated code / missing extractions
- ThemeForest-ready visual quality
- No unrelated edits
- Icons: `@phosphor-icons/react` only (flag other icon libraries)
- Motion: `motion/react` only for interactive animation; flag other libs or Motion in RSC

Output:
- Short summary
- Issues by severity
- Optional small fixes only if user approves
```
