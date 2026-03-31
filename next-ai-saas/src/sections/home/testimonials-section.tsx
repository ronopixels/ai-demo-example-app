import { TestimonialCard } from "@/components/marketing/testimonial-card";
import { SectionHeading } from "@/components/common/section-heading";
import { demoTestimonials } from "@/data/testimonials";
import { cn } from "@/lib/cn";

export function TestimonialsSection({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-16 sm:px-6", className)}>
      <SectionHeading
        eyebrow="Social proof"
        title="Loved by builders"
        subtitle="Placeholder quotes for your ThemeForest and product pages."
        align="center"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {demoTestimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  );
}
