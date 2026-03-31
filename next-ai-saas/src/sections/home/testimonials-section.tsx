import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { SectionHeading } from "@/components/common/section-heading";
import { demoTestimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

export type TestimonialsSectionProps = {
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

const DEFAULT_TESTIMONIALS_HEADING = {
  eyebrow: "Social proof",
  title: "Loved by builders",
  subtitle: "Placeholder quotes for your ThemeForest and product pages.",
} as const;

export function TestimonialsSection({
  className,
  eyebrow = DEFAULT_TESTIMONIALS_HEADING.eyebrow,
  title = DEFAULT_TESTIMONIALS_HEADING.title,
  subtitle = DEFAULT_TESTIMONIALS_HEADING.subtitle,
}: TestimonialsSectionProps) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-16 sm:px-6", className)}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} align="center" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {demoTestimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  );
}
