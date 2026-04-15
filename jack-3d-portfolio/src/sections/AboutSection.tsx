import { ContactButton } from "@/components/ContactButton";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedText } from "@/components/AnimatedText";
import { ABOUT_DECOR, ABOUT_TEXT } from "@/data/content";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 sm:px-8 md:px-10"
    >
      <FadeIn
        delay={0.1}
        duration={0.9}
        x={-80}
        y={0}
        className="pointer-events-none absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] md:left-[4%] md:w-[210px] sm:w-[160px]"
      >
        <img src={ABOUT_DECOR.moon} alt="" className="w-full object-contain" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        duration={0.9}
        x={-80}
        y={0}
        className="pointer-events-none absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] md:left-[10%] md:w-[180px] sm:w-[140px]"
      >
        <img src={ABOUT_DECOR.object3d} alt="" className="w-full object-contain" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        duration={0.9}
        x={80}
        y={0}
        className="pointer-events-none absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] md:right-[4%] md:w-[210px] sm:w-[160px]"
      >
        <img src={ABOUT_DECOR.lego} alt="" className="w-full object-contain" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        duration={0.9}
        x={80}
        y={0}
        className="pointer-events-none absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] md:right-[10%] md:w-[220px] sm:w-[170px]"
      >
        <img src={ABOUT_DECOR.group} alt="" className="w-full object-contain" />
      </FadeIn>

      <FadeIn delay={0} y={40} className="flex flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
        <div className="flex max-w-[560px] flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text={ABOUT_TEXT}
            className="text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
          />
          <ContactButton href="#contact" />
        </div>
      </FadeIn>
    </section>
  );
}
