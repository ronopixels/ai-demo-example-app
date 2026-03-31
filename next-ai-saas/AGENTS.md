<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Nexsas repo context

- **Rules**: `.cursor/rules/` (and `.claude/rules/` for the same standards): App Router, Tailwind v4, components, data, folder structure. **Icons**: **`@phosphor-icons/react`** — **`25-phosphor-icons.mdc`**. **Motion** (interactive animation): **`motion/react`** in client components — **`26-motion.mdc`**.
- **Commands**: `.cursor/commands/` — scoped tasks (`build-page`, `build-section`, `build-dashboard-page`, `build-auth-page`, `plan-task`, `review-page`, `create-demo`, `sync-html`).
- **Skills**: `.claude/skills/` — `nexsas-workflow`, `themeforest-template`, `nextjs-page-architecture`, `html-export-alignment`.
- **Briefs & prompts**: `ai/briefs/` (page map, build order, checklists) and `ai/prompts/` (copy-paste templates).
