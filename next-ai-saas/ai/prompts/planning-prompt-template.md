# Planning prompt template (no code)

Use **before** a build prompt. Output is a **plan only**.

```text
Plan the following (do not write implementation code): [TASK].

Context:
- Route group: [marketing | auth | dashboard]
- Related briefs: ai/briefs/page-map.md, component-checklist.md

Answer in sections:
1. Goal (one sentence)
2. Sections/components to REUSE (file paths)
3. NEW files likely needed
4. src/data/* modules touched
5. Files/routes that must NOT change
6. Suggested order of work
7. Risks or open questions
8. If UI icons are in scope: `@phosphor-icons/react` only; HTML export uses SVG/images
9. If animation is in scope: `motion/react` in client components only (`26-motion.mdc`); HTML export uses CSS

Stop after the plan. I will send a follow-up build command.
```
