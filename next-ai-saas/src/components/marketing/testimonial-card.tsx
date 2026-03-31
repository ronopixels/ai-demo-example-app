import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/cn";

export type TestimonialCardProps = {
  testimonial: Testimonial;
  className?: string;
};

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  const subtitle = [testimonial.role, testimonial.company].filter(Boolean).join(" · ");

  return (
    <Card className={cn("h-full", className)}>
      <CardContent className="flex flex-col gap-4 p-6">
        <blockquote className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {testimonial.quote}
        </blockquote>
        <div className="flex items-center gap-3">
          <Avatar src={testimonial.avatarSrc} alt={testimonial.author} />
          <div>
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{testimonial.author}</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">{subtitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
