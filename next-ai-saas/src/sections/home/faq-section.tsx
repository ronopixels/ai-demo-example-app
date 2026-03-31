import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/common/section-heading";
import { demoFaqItems } from "@/data/faq";
import { cn } from "@/lib/cn";

export function FaqSection({ className }: { className?: string }) {
  return (
    <section className={cn("mx-auto max-w-3xl px-4 py-16 sm:px-6", className)}>
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions"
        subtitle="Straight answers you can replace with real support copy."
        align="center"
      />
      <Accordion className="mt-10">
        {demoFaqItems.map((item, i) => (
          <AccordionItem key={item.id} defaultOpen={i === 0}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
