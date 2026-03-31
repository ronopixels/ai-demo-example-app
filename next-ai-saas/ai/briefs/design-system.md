# Design system direction

## Tone

Premium, modern SaaS: clear hierarchy, strong spacing, soft radii, readable type.

## Tech

- **Tailwind CSS v4** — utilities in components; tokens in `globals.css` via `@theme` when needed.
- **Typography**: Geist (default) via `layout.tsx`; swap at root if branding requires.
- **Icons**: **`@phosphor-icons/react`** for UI icons only (see `.cursor/rules/25-phosphor-icons.mdc`); static HTML uses inline SVG or images.
- **Components**: Primitives in `src/components/ui/`; marketing/dashboard pieces in named folders.

## Patterns

- Buttons: clear primary/secondary hierarchy.
- Cards: consistent padding and radius.
- Forms: labels, errors, focus rings.
- Dashboard + marketing should feel like **one product family**.

## Helpers

- `cn()` from `@/lib/cn` for conditional classes.

## Homepage section rhythm (reference)

When building home demos, common order: announcement → hero → **logo strip** → **features** → **product preview** → benefits → integrations → **analytics preview** → workflow → **testimonials** → **pricing** → **FAQ** → **CTA** → footer (layout).

## Commercial quality

- Strong spacing, soft radii, clear CTA hierarchy.
- Marketing and dashboard should feel like **one product family** (shared tokens, not cloned styles).
