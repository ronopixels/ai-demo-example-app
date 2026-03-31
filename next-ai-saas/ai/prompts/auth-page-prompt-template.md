# Auth page prompt template

**One prompt = one `(auth)` page** (sign-in, sign-up, forgot password, …).

```text
Build the auth page: [PAGE NAME].

Target:
- src/app/(auth)/[path]/page.tsx
- src/components/auth/... (only if new shared pieces needed)

Routing:
- Must match src/routes.ts entry: [path]

Requirements:
- Accessible forms: labels, ids, aria-describedby for errors, focus rings
- Template only: no real API keys or OAuth unless specified
- Consistent with auth layout (centered card pattern)

Constraints:
- Tailwind v4, TypeScript
- Icons: `@phosphor-icons/react` only
- No new npm packages unless approved

Output:
- Page (+ components)
- Changed files and a11y notes
```
