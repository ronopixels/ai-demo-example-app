# Nexsas — Next.js AI SaaS template

Commercial ThemeForest-style **Next.js** scaffold (marketing, auth, dashboard route groups). Strategy and page map live in `ai/briefs/`; the repo-level master guide is `../nexsas-ai-saas-master-guide.md`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home page is `src/app/(marketing)/page.tsx`.

## AI agent workflow (Cursor + Claude Code)

**Operating rule**: one prompt = one task = one primary target = one review. Prefer scoped prompts that list allowed files and exclusions.

### Rules (`.cursor/rules/*.mdc` and `.claude/rules/*.mdc`)

- **Cursor** loads `.cursor/rules/*.mdc` using each file’s frontmatter (`alwaysApply`, `globs`, `description`). Scoped rules apply when you edit matching paths.
- **Claude Code** can use `.claude/rules/` for the same standards where you mirror files (e.g. Phosphor icons, HTML sync).
- **Source of truth for stack**: see `00-global.mdc`, `25-phosphor-icons.mdc`, `26-motion.mdc`, and the rest of the numbered rules.

### Commands (`.cursor/commands/*.md` and `.claude/commands/*.md`)

These are **markdown playbooks**, not executables. Same filenames in both folders (keep them in sync).

| Command file | Purpose |
|--------------|--------|
| `build-page.md` | One App Router page |
| `build-section.md` | One reusable section under `src/sections/` |
| `build-component.md` | One component |
| `build-dashboard-page.md` | One `(dashboard)` page |
| `build-auth-page.md` | One `(auth)` page |
| `plan-task.md` | Plan only, no code |
| `review-page.md` | Review a slice |
| `create-demo.md` | Homepage demo via `demos.ts` |
| `sync-html.md` | Optional static HTML parity |

**How to use**

- **Cursor**: Open the file in chat with **`@`** (e.g. `@.cursor/commands/build-page.md`) and fill in the template, or use the **MCP server prompts** listed below (same names, often shown in the **`/`** prompt picker when the server is enabled).
- **Claude Code**: Reference `@.claude/commands/...` the same way, per your client’s attach rules.

### Skills (`.cursor/skills/*/SKILL.md` and `.claude/skills/*/SKILL.md`)

Longer guidance the agent should follow for whole classes of work. **Mirror** the same skill folders under `.cursor/skills` and `.claude/skills`.

| Skill folder | Role |
|--------------|------|
| `nexsas-workflow` | Build order, page map, one-task prompting |
| `themeforest-template` | Template quality and scoped edits |
| `nextjs-page-architecture` | App Router, layouts, composition |
| `html-export-alignment` | Optional static HTML sync |

**How to use**: Rely on the agent picking skills from descriptions, **`get_skill_context`** / **`get_context_for_task`** (MCP tools), or attach **`next-ai-saas://skill/<folder-name>`** (MCP resource).

### Briefs (`ai/briefs/`)

Human-oriented maps and checklists (`page-map.md`, `build-order.md`, `design-system.md`, `component-checklist.md`, …). Attach files with **`@`** in chat or pull the combined brief via MCP resource **`next-ai-saas://docs/ai-briefs`**.

### Prompts (`ai/prompts/`)

Copy-paste **prompt shells** (page, section, dashboard, auth, demo, review, refactor, …). Attach with **`@`** or use MCP resource **`next-ai-saas://docs/ai-prompts`**.

Repo overview for agents: **`AGENTS.md`**.

---

## MCP server: `next-ai-saas-skills`

Local **Model Context Protocol** server defined in `mcp-server/src/index.js` (server id **`next-ai-saas-skills`**). Cursor’s MCP panel may list **tools**, **prompts**, and **resources** together; this project splits them as follows.

### Setup

1. Install server dependencies (Node **≥ 20**):

   ```bash
   cd mcp-server && npm install
   ```

2. Register the server in **Cursor** → Settings → MCP, for example:

   ```json
   "next-ai-saas-skills": {
     "command": "node",
     "args": ["/absolute/path/to/next-ai-saas/mcp-server/src/index.js"]
   }
   ```

   Use the real absolute path to this repo on your machine.

### MCP tools (callable actions)

| Tool | What it does |
|------|----------------|
| `get_skill_context` | Full text of one skill by folder name |
| `get_context_for_task` | Picks relevant skills + `CLAUDE.md` / `AGENTS.md` for a task string |
| `get_prompt_template` | Scaffold for `create-page`, `create-component`, `sync-html`, `review-page`, `code-review`, `update-component`, `plan-task` |
| `refresh_skills_cache` | Reload skills and docs from disk |
| `get_project_info` | Tech stack, `src/app` tree, `src/data` listing (`section`: `all` \| `tech-stack` \| `structure` \| `routes` \| `data`) |
| `get_file_pattern` | Snippets for `page`, `component`, `layout`, `hook`, `util`, `api-route` |
| `get_component_example` | Component locations and conventions |
| `get_page_example` | Route-group examples |
| `get_route_structure` | Lists segments under `src/app` |
| `list_cursor_rules` | Summaries of `.cursor/rules/*.mdc` |
| `create_file` / `update_file` / `delete_file` | File CRUD under project root |
| `create_directory` / `delete_directory` | Directory operations |

### MCP prompts (slash / `GetPrompt` — often shown beside “tools” in Cursor)

Each **prompt name** matches a **filename without `.md`** under `.cursor/commands/`, plus skill and context prompts:

- **Commands**: `build-page`, `build-section`, `build-component`, `build-dashboard-page`, `build-auth-page`, `plan-task`, `review-page`, `create-demo`, `sync-html`
- **Skills**: `skill-nexsas-workflow`, `skill-themeforest-template`, `skill-nextjs-page-architecture`, `skill-html-export-alignment`
- **Full bundle**: `context-all` (`CLAUDE.md` + `AGENTS.md` + all skills)

### MCP resources (attach with `@` + URI in Cursor)

| URI | Contents |
|-----|----------|
| `next-ai-saas://index` | Index of resources and how to cite them |
| `next-ai-saas://tools/list` | Tool names for agents |
| `next-ai-saas://commands/suggestions` | Command usage hints |
| `next-ai-saas://config` | `CLAUDE.md` + `AGENTS.md` |
| `next-ai-saas://context/all` | Config + all skills |
| `next-ai-saas://docs/agents` | `AGENTS.md` |
| `next-ai-saas://docs/ai-briefs` | Concatenated `ai/briefs/*.md` |
| `next-ai-saas://docs/ai-prompts` | Concatenated `ai/prompts/*.md` |
| `next-ai-saas://cursor/rules-summary` | Summaries of Cursor rules |
| `next-ai-saas://docs/file-operations` | Guide for MCP file tools |
| `next-ai-saas://docs/file-operations-quick` | Short file-op examples |
| `next-ai-saas://skill/<folder>` | One skill, e.g. `next-ai-saas://skill/nexsas-workflow` |

---

## Project layout (high level)

- `src/app/(marketing)` — public marketing pages
- `src/app/(auth)` — sign-in, sign-up, etc.
- `src/app/(dashboard)` — app shell and dashboard routes
- `src/data/` — demo and navigation data
- `src/lib/cn.ts` — `clsx` + `tailwind-merge` for class names
- `mcp-server/` — MCP entrypoint `src/index.js`

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

## Deploy on Vercel

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
