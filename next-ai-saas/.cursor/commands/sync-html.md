# Command: sync-html

Use when a **static HTML** file must mirror an existing Next.js page (optional workflow).

## Instructions for the agent

1. Identify the **Next.js source** (`page.tsx` + imported sections/components).
2. Produce or update the **HTML file** with the same section order and equivalent content.
3. No React/Next syntax in HTML; adjust asset paths to the HTML project’s conventions.
4. List anything that cannot be mirrored exactly.
5. **Icons**: Next uses `@phosphor-icons/react`; in HTML use **inline SVG or images** that match — not the npm package.
6. **Motion**: Next may use `motion/react`; in HTML use **CSS** transitions/keyframes or omit — not React Motion.

## User prompt template

```text
Sync [html/path.html] from Next.js [src/app/.../page.tsx].

Constraints:
- No framework-specific code in HTML
- Match sections and class naming where applicable
- Do not change unrelated HTML files

Output:
- Changed files
- Mirrored sections
- Differences and assumptions
```
