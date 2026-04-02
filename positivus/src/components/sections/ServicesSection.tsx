import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LearnMoreLink } from "@/components/ui/LearnMoreLink";
import { SERVICES, type ServiceVariant } from "@/data/site";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function cardClasses(variant: ServiceVariant): string {
  const base =
    "flex min-h-[310px] w-full max-w-[600px] flex-col gap-8 rounded-[45px] border border-dark p-10 shadow-[0_5px_0_0_#191A23] sm:flex-row sm:items-center sm:justify-between sm:gap-[77px] lg:max-w-none lg:flex-1";
  if (variant === "grey") return `${base} bg-muted`;
  if (variant === "green") return `${base} bg-primary`;
  return `${base} bg-dark`;
}

function titleBadgeClass(variant: ServiceVariant): string {
  if (variant === "green" || variant === "dark") return "bg-white";
  return "bg-primary";
}

export function ServicesSection() {
  const reduced = useReducedMotion();

  return (
    <section className="py-12 lg:py-16" id="services">
      <Container>
        <SectionHeading
          badge="Services"
          description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
        />
        <div className="flex flex-col gap-10">
          {[0, 1, 2].map((row) => (
            <motion.div
              key={row}
              className="flex flex-col gap-10 lg:flex-row"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{ staggerChildren: reduced === true ? 0 : 0.1 }}
            >
              {SERVICES.slice(row * 2, row * 2 + 2).map((s, i) => (
                <motion.article
                  key={`${row}-${i}`}
                  variants={staggerItem}
                  className={cardClasses(s.variant)}
                >
                  <div className="flex flex-col gap-[93px]">
                    <div className="flex flex-col gap-1">
                      {s.title.map((line) => (
                        <span
                          key={line}
                          className={`text-h3 inline-flex w-fit rounded-label px-[7px] font-medium text-black ${titleBadgeClass(s.variant)}`}
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                    <LearnMoreLink
                      variant={s.variant === "dark" ? "dark" : "light"}
                      href="#contact"
                    />
                  </div>
                  <img
                    src={s.image}
                    alt=""
                    width={210}
                    height={210}
                    className={`h-auto max-h-[210px] w-full max-w-[210px] shrink-0 object-contain object-center ${s.flipX ? "scale-x-[-1]" : ""}`}
                    loading="lazy"
                    decoding="async"
                  />
                </motion.article>
              ))}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
