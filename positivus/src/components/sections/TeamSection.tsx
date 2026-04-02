import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM } from "@/data/site";
import { fadeUpProps, staggerContainer, staggerItem } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function TeamSection() {
  const reduced = useReducedMotion();

  return (
    <section className="py-12 lg:py-16" id="blog">
      <Container>
        <SectionHeading
          badge="Team"
          description="Meet the skilled and experienced team behind our successful digital marketing strategies"
        />
        <motion.div
          className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: reduced === true ? 0 : 0.08 }}
        >
          {TEAM.map((member) => (
            <motion.article
              key={member.name}
              variants={staggerItem}
              className="flex flex-col gap-2 rounded-card border border-dark bg-white p-8 pb-10 shadow-[0_5px_0_0_#191A23] sm:p-9 sm:pb-10"
            >
              <div className="relative flex gap-5">
                <div className="relative h-[103px] w-[98px] shrink-0 overflow-hidden rounded-[20px] bg-primary">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0 flex-1 pt-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-h4 font-medium text-dark">
                        {member.name}
                      </h4>
                      <p className="text-p font-normal text-dark">
                        {member.role}
                      </p>
                    </div>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-black"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <img
                        src="/images/linkedin.svg"
                        alt=""
                        width={17}
                        height={17}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-black" />
              <p className="text-p font-normal text-dark">{member.bio}</p>
            </motion.article>
          ))}
        </motion.div>
        <motion.div
          className="mt-10 flex justify-end"
          {...fadeUpProps(reduced)}
        >
          <a
            href="#team"
            className="text-lead rounded-btn bg-dark px-[35px] py-5 text-center font-normal text-white transition-transform hover:translate-y-[-2px]"
          >
            See all team
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
