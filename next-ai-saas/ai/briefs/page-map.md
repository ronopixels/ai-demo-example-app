# Page map — Nexsas (marketing, auth, dashboard)

Use with **`src/routes.ts`**: add paths when you add pages. Route groups **do not** appear in URLs.

**Legend — Status column:** **✓** = route exists in the Next app (`src/app/…`). **Later** = not built yet. (Product MVP priorities can still differ; this column tracks **shipped routes**.)

---

## A. Marketing (public)

| Page                  | Route (example)        | Status |
| --------------------- | ---------------------- | ------ |
| Home v1               | `/`                    | ✓      |
| Home v2               | `/home-v2`             | ✓      |
| Home v3               | `/` (demo swap)        | Later  |
| About                 | `/about`               | ✓      |
| Features              | `/features`            | ✓      |
| Feature details       | `/features/[slug]`     | Later  |
| Integrations          | `/integrations`        | ✓      |
| Integration details   | `/integrations/[slug]` | Later  |
| Use cases             | `/use-cases`           | Later  |
| Use case details      | `/use-cases/[slug]`    | Later  |
| Pricing               | `/pricing`             | ✓      |
| Customers / success   | `/customers`           | Later  |
| Customer / case study | `/customers/[slug]`    | Later  |
| Blog listing          | `/blog`                | ✓      |
| Blog post             | `/blog/[slug]`         | ✓      |
| Contact               | `/contact`             | ✓      |
| FAQ                   | `/faq`                 | ✓      |
| Careers               | `/careers`             | Later  |
| Career detail         | `/careers/[slug]`      | Later  |
| Changelog             | `/changelog`           | Later  |
| Help center           | `/help`                | Later  |
| Help article          | `/help/[slug]`         | Later  |
| Terms                 | `/terms`               | ✓      |
| Privacy               | `/privacy`             | ✓      |
| Compare plans         | `/compare`             | Later  |
| Request demo          | `/request-demo`        | Later  |
| Referral              | `/referral`            | Later  |
| Testimonials          | `/testimonials`        | Later  |
| 404                   | `not-found`            | ✓      |

**Route group:** `(marketing)/…`

---

## B. Auth

| Page                   | Route (example)    | Status |
| ---------------------- | ------------------ | ------ |
| Sign in                | `/sign-in`         | ✓      |
| Sign up                | `/sign-up`         | ✓      |
| Forgot password        | `/forgot-password` | ✓      |
| Reset password         | `/reset-password`  | ✓      |
| Verify email           | `/verify-email`    | ✓      |
| Two-step verification  | `/2fa`             | ✓      |
| Coming soon / waitlist | `/coming-soon`     | ✓      |

**Route group:** `(auth)/…`

---

## C. Dashboard (app)

| Page                     | Route (example)                     | Status |
| ------------------------ | ----------------------------------- | ------ |
| Overview                 | `/dashboard`                        | ✓      |
| Analytics                | `/dashboard/analytics`              | Later  |
| Projects / workspace     | `/dashboard/projects`               | Later  |
| AI assistant             | `/dashboard/ai-assistant`           | Later  |
| AI chat detail           | `/dashboard/ai-assistant/[id]`      | Later  |
| Workflow automation      | `/dashboard/workflow-automation`    | Later  |
| Workflow builder detail  | `/dashboard/workflow/...`           | Later  |
| Prompt library           | `/dashboard/prompts`                | Later  |
| Prompt detail            | `/dashboard/prompts/[id]`           | Later  |
| Integrations             | `/dashboard/integrations`           | Later  |
| File manager / KB        | `/dashboard/files`                  | Later  |
| Reports                  | `/dashboard/reports`                | Later  |
| Team                     | `/dashboard/team`                   | Later  |
| Team member              | `/dashboard/team/[id]`              | Later  |
| Notifications            | `/dashboard/notifications`          | Later  |
| Billing                  | `/dashboard/billing`                | Later  |
| Invoice history          | `/dashboard/billing/invoices`       | Later  |
| API keys                 | `/dashboard/api-keys`               | Later  |
| Settings — profile       | `/dashboard/settings/profile`       | Later  |
| Settings — security      | `/dashboard/settings/security`      | Later  |
| Settings — appearance    | `/dashboard/settings/appearance`    | Later  |
| Settings — notifications | `/dashboard/settings/notifications` | Later  |

**Route group:** `(dashboard)/…`

---

## D. Utility / errors

| Page        | Notes                                    |
| ----------- | ---------------------------------------- |
| Maintenance | static route when needed                 |
| 500         | error UI / route as per Next.js patterns |

---

## Homepage section order (demos)

Reusable **section IDs** for `demos.ts` `sectionOrder`:

`announcement` → `hero` → `logo-strip` → `features` → `product-preview` → `integrations` → `analytics-preview` → `testimonials` → `pricing` → `faq` → `cta` → (footer via layout)

---

## Commands that map to work types

| Work                   | Cursor / Claude command |
| ---------------------- | ----------------------- |
| One public page        | `build-page`            |
| One dashboard page     | `build-dashboard-page`  |
| One auth page          | `build-auth-page`       |
| One section only       | `build-section`         |
| One reusable component | `build-component`       |
| Plan before code       | `plan-task`             |
| QA pass                | `review-page`           |
| New home demo          | `create-demo`           |
| HTML export            | `sync-html`             |
