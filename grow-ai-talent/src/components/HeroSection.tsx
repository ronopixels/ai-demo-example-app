import { Button } from "@/components/ui/button";

import { Navbar } from "./Navbar";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <Navbar />

      <div className="flex flex-col items-center px-4 pb-0 pt-20 text-center">
        <h1
          className="font-heading bg-clip-text text-transparent text-[clamp(4rem,18vw,230px)] font-normal leading-[1.02] tracking-[-0.024em] md:text-[clamp(6rem,20vw,230px)] xl:text-[230px]"
          style={{
            backgroundImage: "linear-gradient(223deg, #E8E8E9 0%, #3A7BBF 104.15%)",
          }}
        >
          Grow
        </h1>

        <p className="mt-4 max-w-md text-center text-lg leading-8 text-hero-sub opacity-80">
          The most powerful AI ever deployed
          <br />
          in talent acquisition
        </p>

        <div className="mb-[66px] mt-8">
          <Button variant="heroSecondary" className="px-[29px] py-[24px] text-base font-normal">
            Schedule a Consult
          </Button>
        </div>
      </div>
    </section>
  );
}
