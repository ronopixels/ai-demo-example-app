# Nexsas AI SaaS Template — AI Workflow Master Guide

This document consolidates the full strategy, architecture, prompting system, and AI-agent workflow discussed in this chat for future reuse.

---

## 1. Project Vision

### Product direction

Build a premium **ThemeForest-ready AI SaaS template** under the **Nexsas** brand with:

- HTML version
- Next.js version
- Multiple homepage demos
- Marketing pages
- Auth pages
- Dashboard pages
- AI/product-style inner pages
- Reusable design system
- Future SaaS-starter scalability

### Positioning

The template should work for:

- AI SaaS
- AI automation software
- AI agent products
- Startup software
- Workflow tools
- Analytics products
- Support/helpdesk SaaS

### Core product promise

A commercial template that includes:

- Conversion-focused marketing pages
- Premium dashboard UI
- Modern auth flows
- AI-oriented product pages
- Reusable components
- Clean architecture
- Easy customization
- ThemeForest-quality presentation

---

## 2. Product Architecture Strategy

Build in layers:

### Layer 1 — ThemeForest sellable template

This includes:

- homepage demos
- inner pages
- auth pages
- dashboard pages
- reusable sections

### Layer 2 — SaaS-ready architecture

This includes:

- app shell
- scalable file structure
- route separation
- data-driven content
- demo-ready modules

### Layer 3 — AI-ready product starter

This includes room for:

- AI assistant pages
- prompt library
- workflow automation
- integrations dashboard
- reporting
- knowledge base

The smart approach is:

> Build the ThemeForest product in a way that can later evolve into a SaaS starter or even your own product.

---

## 3. Product Structure

Recommended root structure:

```txt
nexsas-ai-saas/
├── html/
├── nextjs/
├── docs/
├── preview-assets/
├── licensing/
└── changelog/
```

---

## 4. Page Architecture

### A. Marketing pages

Recommended long-term page map:

- Home v1
- Home v2
- Home v3
- About
- Features
- Feature Details
- Integrations
- Integration Details
- Use Cases
- Use Case Details
- Pricing
- Customers / Success Stories
- Customer Details / Case Study
- Blog Listing
- Blog Details
- Contact
- FAQ
- Careers
- Career Details
- Changelog
- Help Center
- Help Center Details
- Terms & Conditions
- Privacy Policy
- 404 Page

### B. Auth pages

- Sign In
- Sign Up
- Forgot Password
- Reset Password
- Verify Email
- Two-Step Verification
- Coming Soon / Waitlist

### C. Dashboard pages

- Dashboard Overview
- Analytics
- Projects / Workspace
- AI Assistant
- AI Chat Details
- Workflow Automation
- Workflow Builder Details
- Prompt Library
- Prompt Details
- Integrations Dashboard
- File Manager / Knowledge Base
- Reports
- Team Members
- Team Details
- Notifications
- Billing & Subscription
- Invoice History
- API Keys
- Settings – Profile
- Settings – Security
- Settings – Appearance
- Settings – Notifications

### D. Utility / extra pages

- Testimonials
- Compare Plans
- Request Demo
- Affiliate / Referral Program
- Maintenance Page
- 500 Error Page

---

## 5. Best MVP for First Release

Recommended first commercial release should focus on a strong but manageable set:

### Marketing

- Home v1
- Home v2
- About
- Features
- Integrations
- Pricing
- Blog Listing
- Blog Details
- Contact
- FAQ
- Terms
- Privacy

### Auth

- Sign In
- Sign Up
- Forgot Password

### Dashboard

- Dashboard Overview
- Analytics
- AI Assistant
- Workflow Automation
- Billing
- Settings Profile

### Utility

- 404
- Coming Soon

This is strong enough for a first ThemeForest launch.

---

## 6. Next.js Folder Architecture

Recommended Next.js structure:

```txt
nextjs/
├── public/
│   ├── images/
│   ├── icons/
│   └── favicons/
│
├── src/
│   ├── app/
│   │   ├── (marketing)/
│   │   ├── (auth)/
│   │   ├── (dashboard)/
│   │   ├── api/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── marketing/
│   │   ├── auth/
│   │   └── dashboard/
│   │
│   ├── sections/
│   ├── features/
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── constants/
│   ├── types/
│   └── styles/
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md
```

### App route groups

Use route groups clearly:

- `(marketing)` for public pages
- `(auth)` for auth pages
- `(dashboard)` for app/product pages

This separation is important for code hygiene and commercial template quality.

---

## 7. HTML Folder Architecture

Recommended HTML structure:

```txt
html/
├── index.html
├── index-2.html
├── index-3.html
├── about.html
├── features.html
├── feature-details.html
├── integrations.html
├── integration-details.html
├── use-cases.html
├── use-case-details.html
├── pricing.html
├── customers.html
├── customer-details.html
├── blog.html
├── blog-details.html
├── contact.html
├── faq.html
├── careers.html
├── career-details.html
├── changelog.html
├── help-center.html
├── help-center-details.html
├── request-demo.html
├── compare-plans.html
├── referral-program.html
├── testimonials.html
├── sign-in.html
├── sign-up.html
├── forgot-password.html
├── reset-password.html
├── verify-email.html
├── two-step-verification.html
├── coming-soon.html
├── dashboard.html
├── analytics.html
├── projects.html
├── ai-assistant.html
├── ai-chat-details.html
├── workflow-automation.html
├── workflow-builder-details.html
├── prompt-library.html
├── prompt-details.html
├── integrations-dashboard.html
├── knowledge-base.html
├── reports.html
├── team.html
├── team-details.html
├── notifications.html
├── billing.html
├── invoice-history.html
├── api-keys.html
├── settings-profile.html
├── settings-security.html
├── settings-appearance.html
├── settings-notifications.html
├── privacy-policy.html
├── terms-and-conditions.html
├── error-404.html
├── error-500.html
│
└── assets/
    ├── css/
    ├── js/
    ├── images/
    ├── icons/
    ├── fonts/
    └── vendors/
```

---

## 8. Component Architecture

Use a three-level system.

### Level 1 — UI primitives

Folder:

```txt
src/components/ui/
```

Examples:

- button
- input
- textarea
- select
- badge
- card
- avatar
- tabs
- accordion
- modal
- switch
- tooltip

### Level 2 — shared/common components

Folder:

```txt
src/components/common/
src/components/layout/
```

Examples:

- section-heading
- page-hero
- breadcrumb
- theme-toggle
- social-links
- pagination
- main-navbar
- main-footer
- mobile-menu

### Level 3 — purpose-specific components

Folders:

- `src/components/marketing/`
- `src/components/auth/`
- `src/components/dashboard/`

Examples:

- pricing-card
- testimonial-card
- blog-card
- feature-card
- auth-shell
- login-form
- dashboard-sidebar
- dashboard-topbar
- dashboard-stat-card
- billing-plan-card
- workflow-card

### Section components

Folder:

```txt
src/sections/
```

Examples:

- HeroSection
- FeaturesSection
- PricingSection
- TestimonialsSection
- FAQSection
- CTASection

---

## 9. Naming Rules

### File naming

Use **kebab-case** for file names.

Examples:

- `pricing-card.tsx`
- `dashboard-sidebar.tsx`
- `workflow-preview-section.tsx`

### Component exports

Use **PascalCase** for component names.

Examples:

- `PricingCard`
- `DashboardSidebar`
- `WorkflowPreviewSection`

### Naming principle

Name by **purpose**, not by appearance.

Bad:

- BlueCard
- BigBox
- LeftSection

Good:

- FeatureCard
- PricingCard
- DashboardStatCard
- HeroSection

---

## 10. Data Architecture

Keep reusable content separate from page files.

Recommended `src/data/` files:

- demos.ts
- navigation.ts
- footer-links.ts
- features.ts
- pricing.ts
- testimonials.ts
- faq.ts
- integrations.ts
- use-cases.ts
- customers.ts
- blog.ts
- careers.ts
- prompts.ts
- workflows.ts
- analytics.ts
- dashboard-nav.ts

This is critical because:

- it makes demos easier to scale
- it keeps pages clean
- it improves documentation
- it makes AI-assisted coding much safer

---

## 11. Demo Strategy

Do not treat demos as unrelated websites.

Treat them as one product system with different content focus.

### Recommended demo lineup

- Demo 1 — AI SaaS
- Demo 2 — AI Automation
- Demo 3 — AI Agent / Assistant
- Demo 4 — AI Helpdesk / Support SaaS

### Example demo system

Store demo data in `src/data/demos.ts` and define:

- slug
- title
- homepage
- heroVariant
- sectionOrder

Example:

```ts
export const demos = [
  {
    slug: "ai-saas",
    title: "AI SaaS",
    homepage: "/",
    heroVariant: "product",
    sectionOrder: [
      "announcement",
      "hero",
      "logo-strip",
      "features",
      "product-preview",
      "integrations",
      "analytics-preview",
      "testimonials",
      "pricing",
      "faq",
      "cta",
    ],
  },
];
```

This allows:

- scalable demos
- faster updates
- better consistency

---

## 12. Homepage Section System

Recommended homepage structure:

1. Announcement bar
2. Hero
3. Trusted brands / logo strip
4. Product highlights / features
5. Product preview / screenshots
6. Benefits / use cases
7. Integrations
8. Dashboard analytics preview
9. Workflow / process section
10. Testimonials
11. Pricing
12. FAQ
13. CTA
14. Footer

Each demo should reuse the same system but swap content emphasis.

---

## 13. Design System Direction

### Core principles

- premium but flexible
- modern SaaS visual language
- clear readability
- strong spacing
- polished cards and widgets
- commercially reusable

### Visual expectations

- clean typography
- soft radius
- layered but not noisy backgrounds
- clear CTA hierarchy
- consistent containers
- dashboard and marketing should feel like one product family

### Component style guidance

- buttons: clear hierarchy, rounded, clean
- cards: soft radius, premium spacing
- inputs: simple, accessible, clean
- badges: readable, compact
- charts: realistic placeholder style
- tables: structured and polished

---

## 14. Build Order

Recommended implementation sequence:

### Phase 1 — Foundation

Build:

- design tokens
- global styles
- button
- input
- card
- badge
- tabs
- accordion
- navbar
- footer

### Phase 2 — Marketing sections

Build:

- hero
- logo strip
- features
- product preview
- integrations
- pricing
- testimonials
- FAQ
- CTA

### Phase 3 — Core pages

Build:

- Home v1
- Home v2
- About
- Features
- Pricing
- Blog
- Blog details
- Contact
- FAQ

### Phase 4 — Auth pages

Build:

- Sign in
- Sign up
- Forgot password
- Reset password

### Phase 5 — Dashboard shell

Build:

- dashboard layout
- sidebar
- topbar
- content area
- widgets

### Phase 6 — Dashboard pages

Build:

- dashboard overview
- analytics
- AI assistant
- workflow automation
- billing
- settings

### Phase 7 — More demos and extra pages

Build:

- Home v3
- helpdesk demo
- integrations pages
- use case pages
- testimonials
- compare plans

### Phase 8 — Packaging

Prepare:

- docs
- previews
- screenshots
- HTML sync
- changelog
- final cleanup

---

## 15. ThemeForest Packaging Checklist

### Product files

- HTML complete
- Next.js complete
- consistent assets
- no broken links
- no unused junk files
- clean folder structure

### Documentation

- getting started
- folder structure
- customization guide
- HTML guide
- Next.js guide
- FAQ
- changelog

### Code quality

- reusable components
- clean naming
- strong responsiveness
- no unnecessary dependencies
- no random mixed patterns
- clean TS/JS files

### Sales readiness

- polished thumbnail
- preview banner
- page list
- feature list
- screenshots
- item description
- support policy
- changelog

### Final testing

- mobile
- tablet
- desktop
- Chrome
- Safari
- Firefox
- Next.js build
- HTML preview
- menus
- forms
- layout consistency

---

## 16. AI-Agent Workflow Philosophy

The right way to use Cursor or Claude Agent is:

> Do not rely on one giant chat prompt.

Instead create a small **AI operating system inside the repo** using:

- rules
- skills
- command templates
- briefs
- prompt templates
- review loops

The agent should be treated like a fast but inconsistent junior/mid engineer.

So always give it:

- context
- file targets
- constraints
- expected output
- stop conditions
- review steps

---

## 17. Prompting Principles

### Best rule

**One prompt = one task = one target = one review**

### Avoid

Bad:

> Build my SaaS template

### Better

Good:

> Create `src/components/ui/button.tsx` using Tailwind v4, TypeScript, `cn`, size variants, intent variants, accessible focus states, no external UI library, and do not edit unrelated files. At the end, list changed files and assumptions.

---

## 18. Recommended Repo-Level AI File Setup

```txt
.cursor/
  rules/
    00-global.mdc
    10-nextjs-app-router.mdc
    20-tailwind-v4.mdc
    30-themeforest-constraints.mdc
    40-component-standards.mdc
    50-page-build-workflow.mdc
    60-html-sync.mdc

.claude/
  commands/
    build-page.md
    build-component.md
    review-page.md
    sync-html.md
    create-demo.md
  skills/
    themeforest-template/
      SKILL.md
    nextjs-page-architecture/
      SKILL.md
    html-export-alignment/
      SKILL.md

ai/
  briefs/
    product-brief.md
    page-map.md
    design-system.md
    component-checklist.md
  prompts/
    page-prompt-template.md
    component-prompt-template.md
    review-prompt-template.md
    demo-prompt-template.md
```

---

## 19. Purpose of Each AI Layer

### `.cursor/rules/`

Persistent repo rules so Cursor keeps following the same standards without repeating them every time.

### `.claude/skills/`

Persistent skill instructions for Claude Agent / Claude Code.

### `.claude/commands/`

Repeatable task command templates for:

- build page
- build component
- review
- sync HTML
- create demo

### `ai/briefs/`

Human-readable project documents:

- product brief
- page map
- design system
- component checklist

### `ai/prompts/`

Reusable prompt templates for consistent task execution.

---

## 20. Cursor Rule Strategy

Persistent rules should cover:

### Global engineering rules

- App Router
- TypeScript
- Tailwind v4
- kebab-case file names
- PascalCase exports
- no unrelated edits
- reusable data-driven code

### Next.js architecture rules

- route groups
- layout usage
- server components by default
- page composition over content dumping

### Tailwind rules

- Tailwind v4 only
- clean utilities
- visual consistency
- premium spacing and hierarchy

### ThemeForest constraints

- template-first mindset
- commercial quality
- realistic placeholder data
- avoid over-coupled backend logic

### Component standards

- correct folders
- naming by purpose
- section suffix
- prop-driven components

### Page build workflow

- read goal
- check data files
- reuse existing sections/components
- keep scope tight
- summarize changed files

### HTML sync rules

- Next.js page as structural source of truth
- preserve HTML conventions
- no framework code
- state what could not be mirrored exactly

---

## 21. Claude Skill Strategy

Recommended skills:

### ThemeForest Template Builder

Use when building anything in the repo. Covers:

- product purpose
- architecture rules
- ThemeForest constraints
- build workflow
- required output summary

### Next.js Page Architecture

Use for routes and pages. Covers:

- App Router principles
- layout usage
- page composition
- data-driven structure
- responsive requirements

### HTML Export Alignment

Use for syncing HTML to match Next.js. Covers:

- preserving structure
- no framework code
- alignment workflow
- difference summary

---

## 22. Claude Command Strategy

Recommended commands:

### `build-page.md`

Used to build one page
Returns:

- changed files
- reused components
- new components
- assumptions

### `build-component.md`

Used to build one reusable component
Returns:

- changed files
- props
- dependencies
- assumptions

### `review-page.md`

Used to review implementation
Checks:

- architecture
- responsiveness
- repeated code
- naming
- hardcoded data
- ThemeForest readiness

### `sync-html.md`

Used to sync HTML from Next.js page
Returns:

- changed files
- mirrored sections
- differences
- assumptions

### `create-demo.md`

Used to create a new homepage demo
Returns:

- changed files
- route
- section order
- reused components
- assumptions

---

## 23. Best Prompting Pattern for Teams

Use a four-step prompt flow.

### A. Planning prompt

Before coding, ask for:

1. sections to include
2. reusable components to use
3. missing components
4. files that should change

No code yet.

### B. Build prompt

Scoped coding task with:

- allowed files
- requirements
- constraints
- no unrelated edits

### C. Review prompt

Review changed files for:

- architecture
- responsiveness
- naming
- repeated code
- data placement
- commercial quality

### D. Refactor prompt

Apply only approved review fixes, not a full redesign.

---

## 24. Practical Prompt Formula

Use this structure for both Cursor and Claude:

### Formula

**Context + target files + constraints + expected output + stop conditions**

Example:

```text
Build the pricing page for the marketing route.

Target:
- src/app/(marketing)/pricing/page.tsx
- create any needed reusable section components only if necessary

Constraints:
- Use existing design system and Tailwind v4
- Keep sections reusable
- Include page hero, pricing cards, comparison table, FAQ, CTA
- Use data from src/data/pricing.ts and src/data/faq.ts
- Do not touch dashboard files
- Do not add dependencies

Output:
- Create the page
- If a new component is needed, create it in the correct folder
- At the end, list changed files and why
```

---

## 25. Build Tracker Components

Recommended core component checklist:

### Core UI

- button
- input
- textarea
- select
- badge
- card
- avatar
- tabs
- accordion
- modal
- switch
- tooltip

### Common

- section-heading
- page-hero
- empty-state
- pagination
- theme-toggle
- social-links

### Layout

- main-navbar
- main-footer
- mobile-menu
- dashboard-shell
- dashboard-sidebar
- dashboard-topbar

### Marketing

- feature-card
- integration-card
- pricing-card
- testimonial-card
- blog-card
- use-case-card
- customer-story-card
- logo-marquee
- stats-strip

### Dashboard

- dashboard-stat-card
- analytics-chart-card
- activity-feed-card
- billing-plan-card
- usage-progress-card
- integration-status-card
- prompt-card
- workflow-card
- notification-item
- api-key-card
- team-member-card

### Sections

- announcement-bar-section
- hero-section
- logo-strip-section
- features-section
- product-preview-section
- integrations-section
- analytics-preview-section
- workflow-preview-section
- testimonials-section
- pricing-section
- faq-section
- cta-section
- blog-preview-section

---

## 26. Immediate Next-Step Order

If starting from scratch, create these first:

1. `.cursor/rules/00-global.mdc`
2. `.cursor/rules/30-themeforest-constraints.mdc`
3. `.claude/skills/themeforest-template/SKILL.md`
4. `ai/briefs/product-brief.md`
5. `ai/briefs/page-map.md`
6. `ai/briefs/design-system.md`
7. project folder scaffold
8. `layout.tsx` files
9. `cn.ts`
10. `routes.ts`
11. `site-config.ts`
12. `button.tsx`
13. `card.tsx`
14. `main-navbar.tsx`
15. `main-footer.tsx`
16. `hero-section.tsx`

This gives you a stable foundation.

---

## 27. Best Release Strategy

### Version 1

Ship:

- 2 homepage demos
- 15–20 polished pages
- auth pages
- 6 core dashboard pages
- HTML + Next.js

### Version 1.1

Add:

- Demo 3
- more dashboard pages
- more auth pages

### Version 1.2

Add:

- helpdesk demo
- more use case pages
- more utility pages

This creates healthy update momentum for ThemeForest.

---

## 28. Example Task Prompts

### Build a page

```text
Build the dashboard overview page.

Target files:
- src/app/(dashboard)/dashboard/page.tsx
- src/components/dashboard/dashboard-stat-card.tsx
- src/components/dashboard/activity-feed-card.tsx
- src/components/dashboard/usage-progress-card.tsx
- src/data/analytics.ts

Requirements:
- Use existing dashboard layout
- Include page heading, stats row, analytics preview card, activity feed, usage/progress card
- Tailwind v4 only
- TypeScript only
- Do not modify marketing pages
- Use realistic demo data
- ThemeForest-ready visual quality
- Responsive for mobile, tablet, desktop

Output:
- implement the page
- list changed files
- mention assumptions
```

### Build a section

```text
Create a reusable pricing section component for marketing pages.

Target:
- src/sections/pricing/pricing-section.tsx
- use src/components/marketing/pricing-card.tsx
- consume src/data/pricing.ts

Requirements:
- section heading
- monthly/yearly toggle UI only
- 3 pricing cards
- feature list
- CTA row
- reusable props structure
- do not hardcode plan data inside the section
- no external UI library

At the end:
- explain props shape
- list changed files
```

### Sync HTML

```text
Use the existing Next.js pricing page as the source of truth.
Create or update html/pricing.html to match the same page structure and content style.

Constraints:
- maintain HTML template architecture
- keep CSS class naming aligned with product conventions
- no framework-specific code
- preserve commercial template quality
- do not change unrelated HTML files

Return:
- changed files
- any parts that could not be mirrored exactly
```

---

## 29. Common Failure Points to Avoid

Do not:

- use one huge prompt for the whole product
- let the agent edit unrelated files
- hardcode repeated data in page files
- mix dashboard and marketing components randomly
- skip the review stage
- let teammates invent their own architecture every time
- build pages before design foundations
- make HTML and Next.js versions drift too far apart

---

## 30. Final Core Rule

The most important operating rule from this whole system is:

> **One prompt = one task = one target = one review**

That rule alone will improve quality, consistency, and team collaboration.

---

## 31. Summary

This project should be built as:

- a commercial template system, not just a set of pages
- a reusable architecture, not a one-off design
- a ThemeForest-ready product now
- a possible SaaS starter later
- a repo with AI-friendly rules and workflow built in

Use:

- strong architecture
- strict naming
- data-driven structure
- reusable components
- scoped prompts
- review loops
- persistent rules and skills

That is the safest and strongest way to build Nexsas efficiently with Cursor, Claude Agent, or a teammate using AI-assisted workflows.
