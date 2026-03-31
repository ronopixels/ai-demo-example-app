# Component & section checklist

Track what exists vs planned. **Prefer reuse** before adding near-duplicates.

**Icons**: **`@phosphor-icons/react`** for UI icons (see `.cursor/rules/25-phosphor-icons.mdc`).

**Motion**: **`motion/react`** only for interactive animation — client components, accessible (`prefers-reduced-motion`); see `.cursor/rules/26-motion.mdc`.

## Level 1 — UI primitives (`src/components/ui/`)

- [x] button (`button.tsx` — `Button`, `ButtonNative`)
- [x] input
- [x] textarea
- [x] select
- [x] badge
- [x] card (`Card`, `CardHeader`, …)
- [x] avatar
- [x] tabs (`Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`)
- [x] accordion (`Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`)
- [x] modal (`Modal` — native `<dialog>`)
- [x] switch
- [x] tooltip

Barrel: `src/components/ui/index.ts`

## Level 2 — Common & layout (`src/components/common/`, `src/components/layout/`)

- [x] section-heading (`common/section-heading.tsx`)
- [x] page-hero (`common/page-hero.tsx`)
- [x] breadcrumb (`common/breadcrumb.tsx`)
- [x] theme-toggle (`common/theme-toggle.tsx`)
- [x] social-links (`common/social-links.tsx`)
- [x] pagination (`common/pagination.tsx`)
- [x] main-navbar (`layout/main-navbar.tsx`)
- [x] main-footer (`layout/main-footer.tsx`)
- [x] mobile-menu (`layout/mobile-menu.tsx`)
- [ ] empty-state

Barrels: `src/components/common/index.ts`, `src/components/layout/index.ts`

## Level 3 — Domain (`src/components/marketing/`, `auth/`, `dashboard/`)

**Marketing**

- [x] feature-card (`marketing/feature-card.tsx`)
- [ ] integration-card
- [x] pricing-card (`marketing/pricing-card.tsx` — used by `/pricing` + home `PricingSection`)
- [x] testimonial-card
- [x] blog-card
- [ ] use-case-card
- [ ] customer-story-card
- [ ] logo-marquee
- [ ] stats-strip

Barrel: `src/components/marketing/index.ts`

**Auth**

- [x] auth-shell (`auth/auth-shell.tsx`)
- [x] login-form (`auth/login-form.tsx` — demo; see `/sign-in`)
- [x] register-form (`auth/register-form.tsx` — `/sign-up`)
- [x] forgot-password-form (`auth/forgot-password-form.tsx`)
- [x] reset-password-form (`auth/reset-password-form.tsx`)
- [x] two-factor-form (`auth/two-factor-form.tsx` — `/2fa`)
- [x] verify-email-actions (`auth/verify-email-actions.tsx`)
- [x] waitlist-form (`auth/waitlist-form.tsx` — `/coming-soon`)

Barrel: `src/components/auth/index.ts`

**Dashboard**

- [x] dashboard-sidebar (Phosphor nav icons)
- [x] dashboard-topbar
- [x] dashboard-stat-card
- [x] dashboard-list-icon (`dashboard-list-icon.tsx` — Phosphor rows)
- [x] notification-prefs-form (`notification-prefs-form.tsx` — settings)
- [ ] analytics-chart-card
- [ ] activity-feed-card
- [x] billing-plan-card
- [ ] usage-progress-card
- [ ] integration-status-card
- [ ] prompt-card
- [x] workflow-card
- [ ] notification-item
- [ ] api-key-card
- [ ] team-member-card

Barrel: `src/components/dashboard/index.ts`

## Sections (`src/sections/<area>/`)

Home marketing blocks (`sections/home/`):

- [x] `HeroSection` → `hero-section.tsx`
- [x] `FeaturesSection` → `features-section.tsx`
- [x] `PricingSection` → `pricing-section.tsx`
- [x] `TestimonialsSection` → `testimonials-section.tsx`
- [x] `FaqSection` → `faq-section.tsx`
- [x] `CtaSection` → `cta-section.tsx`

Barrel: `src/sections/home/index.ts`

Pricing route also uses `sections/pricing/pricing-hero.tsx` + `pricing-plans.tsx` (uses `PricingCard`).

Still to build (examples from master guide):

- [ ] announcement-bar
- [ ] logo-strip
- [ ] product-preview
- [ ] integrations
- [ ] analytics-preview
- [ ] workflow-preview
- [ ] blog-preview
