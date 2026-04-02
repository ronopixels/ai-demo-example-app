import { useRef } from "react";
import { motion } from "framer-motion";
import type { Swiper as SwiperType } from "swiper";
import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/data/site";
import { fadeUpProps } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex h-full flex-col gap-5 pt-2">
      <div className="relative rounded-card border border-primary p-1">
        <div className="relative rounded-card border-2 border-white bg-bubble px-8 pb-12 pt-10 sm:px-12">
          <p className="text-p font-normal text-white">{quote}</p>
          <div
            className="absolute -bottom-[2px] left-12 h-0 w-0 border-l-20 border-r-20 border-t-24 border-l-transparent border-r-transparent border-t-white"
            aria-hidden
          />
        </div>
      </div>
      <p className="text-h4 pl-2 font-medium text-primary">
        {name}
        <br />
        {role}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  const reduced = useReducedMotion();
  const swiperSpeed = reduced === true ? 0 : 500;
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);

  const bindNav = (swiper: SwiperType) => {
    window.setTimeout(() => {
      const nav = swiper.params.navigation;
      if (
        nav &&
        typeof nav !== "boolean" &&
        prevRef.current &&
        nextRef.current
      ) {
        nav.prevEl = prevRef.current;
        nav.nextEl = nextRef.current;
        if (swiper.navigation) {
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }
      }
      const pag = swiper.params.pagination;
      if (pag && typeof pag !== "boolean" && paginationRef.current) {
        pag.el = paginationRef.current;
        if (swiper.pagination) {
          swiper.pagination.destroy();
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        }
      }
    }, 0);
  };

  return (
    <section className="py-12 lg:py-16">
      <Container>
        <SectionHeading
          badge="Testimonials"
          description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
        />
        <motion.div
          className="rounded-card bg-dark px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
          {...fadeUpProps(reduced)}
        >
          <div className="testimonials-swiper">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              speed={swiperSpeed}
              spaceBetween={28}
              slidesPerView={1}
              loop
              breakpoints={{
                640: { slidesPerView: 1.05, spaceBetween: 32 },
                1024: { slidesPerView: 2, spaceBetween: 40 },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                el: paginationRef.current,
                clickable: true,
              }}
              onBeforeInit={(swiper) => {
                const nav = swiper.params.navigation;
                if (
                  nav &&
                  typeof nav !== "boolean" &&
                  prevRef.current &&
                  nextRef.current
                ) {
                  nav.prevEl = prevRef.current;
                  nav.nextEl = nextRef.current;
                }
                const pag = swiper.params.pagination;
                if (pag && typeof pag !== "boolean" && paginationRef.current) {
                  pag.el = paginationRef.current;
                }
              }}
              onSwiper={bindNav}
              className="pb-4!"
            >
              {TESTIMONIALS.map((t) => (
                <SwiperSlide key={t.name + t.role} className="h-auto!">
                  <TestimonialCard
                    quote={t.quote}
                    name={t.name}
                    role={t.role}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-nav-row">
              <button
                ref={prevRef}
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg text-white transition-colors hover:border-white"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div ref={paginationRef} className="flex flex-1 justify-center" />
              <button
                ref={nextRef}
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-lg text-white transition-colors hover:bg-white/10"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
