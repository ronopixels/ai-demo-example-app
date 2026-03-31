import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/common/page-hero";
import { routes } from "@/routes";

export type HeroSectionProps = {
  title: string;
  description: string;
  className?: string;
};

export function HeroSection({ title, description, className }: HeroSectionProps) {
  return (
    <section className={className}>
      <PageHero title={title} description={description} size="lg">
        <Button href={routes.auth.signUp}>Get started</Button>
        <Button href={routes.marketing.pricing} variant="outline">
          View pricing
        </Button>
      </PageHero>
    </section>
  );
}
