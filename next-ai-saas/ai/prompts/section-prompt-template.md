# Section prompt template

**One prompt = one section file** (not a full route).

```text
Build a reusable section: [SECTION NAME].

Target:
- src/sections/[area]/[kebab-name].tsx

Compose from:
- src/components/ui/ [...]
- src/components/[marketing|dashboard]/ [...] (if any)

Data:
- Import from src/data/[file].ts OR add fields to existing module

Constraints:
- PascalCase export name: [Name]
- Icons: `@phosphor-icons/react` only
- Props: [list or "minimal, prop-driven for reuse"]
- Server Component unless [interaction] requires "use client"
- Do not edit unrelated pages
- No new npm packages

Output:
- Section implementation
- Props type / interface
- Changed files and assumptions
```
