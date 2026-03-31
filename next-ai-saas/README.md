# Nexsas — Next.js AI SaaS template

Commercial ThemeForest-style **Next.js** scaffold (marketing, auth, dashboard route groups). Strategy and page map live in `ai/briefs/`; the repo-level master guide is `../nexsas-ai-saas-master-guide.md`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The home page is `src/app/(marketing)/page.tsx`.

## AI agent workflow (Cursor + Claude Code)

| What | Where |
|------|--------|
| **Cursor rules** (always-on + scoped) | `.cursor/rules/*.mdc` |
| **Cursor skills** (project) | `.cursor/skills/*/SKILL.md` |
| **Claude Code skills** | `.claude/skills/*/SKILL.md` (same content as `.cursor/skills/`) |
| **Command templates** (build page, component, review, sync HTML, demo) | `.claude/commands/` and `.cursor/commands/` |
| **Human briefs** | `ai/briefs/` |
| **Reusable prompt shells** | `ai/prompts/` |

**Operating rule**: one prompt = one task = one primary target = one review. Prefer scoped prompts that list allowed files and exclusions.

## Project layout (high level)

- `src/app/(marketing)` — public marketing pages
- `src/app/(auth)` — sign-in, sign-up, etc.
- `src/app/(dashboard)` — app shell and dashboard routes
- `src/data/` — demo and navigation data
- `src/lib/cn.ts` — `clsx` + `tailwind-merge` for class names

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
