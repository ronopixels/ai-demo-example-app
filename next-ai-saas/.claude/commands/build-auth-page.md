# Command: build-auth-page

Use for **one** page under **`src/app/(auth)/`** (sign-in, sign-up, forgot password, etc.).

## Instructions for the agent

1. Confirm route group **`(auth)`** and final URL (check **`src/routes.ts`**).
2. Prefer **`src/components/auth/`** for forms and shells (`auth-shell`, `login-form` patterns). Use **`src/components/ui/`** for inputs and buttons.
3. Accessible forms: labels, `aria-*`, focus styles, clear error regions.
4. **No real auth backend** unless specified — use UI and placeholder handlers only for a template.
5. Keep layout minimal (centered card); avoid pulling marketing nav/footer unless the product brief says otherwise.
6. **Icons**: **`@phosphor-icons/react`** only (see `.cursor/rules/25-phosphor-icons.mdc`).
7. **Motion**: optional subtle transitions via **`motion/react`** in client components (`26-motion.mdc`).

## User prompt template (fill in)

```text
Build the auth page: [PAGE NAME] ([sign-in | sign-up | forgot-password | ...]).

Target:
- src/app/(auth)/[path]/page.tsx
- Components: src/components/auth/... (if new)

Constraints:
- Accessible form markup
- Icons: `@phosphor-icons/react` only
- Motion: `motion/react` if animating (`26-motion.mdc`)
- Match routes.ts paths
- Do not wire production secrets or real OAuth
- No new npm packages unless approved

Output:
- Implement page + components
- List changed files and assumptions
```

## Stop condition

Stop when the page matches the route, passes lint, and meets basic a11y for forms.
