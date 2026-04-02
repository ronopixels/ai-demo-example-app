import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IMAGES } from "@/data/site";
import { fadeUpProps } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Intent = "hi" | "quote";

export function ContactSection() {
  const reduced = useReducedMotion();
  const [intent, setIntent] = useState<Intent>("hi");

  return (
    <section className="py-12 lg:py-16" id="contact">
      <Container>
        <SectionHeading
          badge="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        <motion.div
          className="flex flex-col gap-10 overflow-hidden rounded-card bg-muted px-6 py-12 sm:px-12 sm:py-14 lg:flex-row lg:gap-6 lg:px-[100px] lg:py-16 lg:pb-20"
          {...fadeUpProps(reduced)}
        >
          <form
            className="flex w-full max-w-[556px] flex-col gap-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset className="flex flex-wrap gap-8 border-0 p-0">
              <legend className="sr-only">Reason for contact</legend>
              <label className="text-p flex cursor-pointer items-center gap-3">
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-black bg-white">
                  <input
                    type="radio"
                    name="intent"
                    checked={intent === "hi"}
                    onChange={() => setIntent("hi")}
                    className="peer sr-only"
                  />
                  <span className="h-4 w-4 rounded-full bg-primary opacity-0 peer-checked:opacity-100" />
                </span>
                Say Hi
              </label>
              <label className="text-p flex cursor-pointer items-center gap-3">
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-black bg-white">
                  <input
                    type="radio"
                    name="intent"
                    checked={intent === "quote"}
                    onChange={() => setIntent("quote")}
                    className="peer sr-only"
                  />
                  <span className="h-4 w-4 rounded-full bg-primary opacity-0 peer-checked:opacity-100" />
                </span>
                Get a Quote
              </label>
            </fieldset>
            <div className="flex flex-col gap-6">
              <label className="flex flex-col gap-1.5">
                <span className="text-label text-dark">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="text-p rounded-btn border border-black bg-white px-[30px] py-[18px] text-placeholder placeholder:text-placeholder"
                  autoComplete="name"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-label text-dark">Email*</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="text-p rounded-btn border border-black bg-white px-[30px] py-[18px] text-placeholder placeholder:text-placeholder"
                  autoComplete="email"
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-label text-dark">Message*</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Message"
                  className="text-p min-h-[190px] resize-y rounded-btn border border-black bg-white px-[30px] py-[18px] text-placeholder placeholder:text-placeholder"
                />
              </label>
            </div>
            <button
              type="submit"
              className="text-lead w-full rounded-btn bg-dark py-5 text-center font-normal text-white transition-transform hover:translate-y-[-2px]"
            >
              Send Message
            </button>
          </form>
          <div className="hidden min-h-[320px] flex-1 items-center justify-center lg:flex">
            <img
              src={SECTION_IMAGES.contact}
              alt=""
              width={692}
              height={648}
              className="max-h-[min(648px,75vh)] w-full max-w-full object-contain object-center"
              decoding="async"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
