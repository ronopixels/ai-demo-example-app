import { useEffect, useRef } from "react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260308_114720_3dabeb9e-2c39-4907-b747-bc3544e2d5b7.mp4";

const BRANDS = ["Vortex", "Nimbus", "Prysma", "Cirrus", "Kynder", "Halcyn"] as const;

export function SocialProofSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const fadeIn = 0.5;
    const fadeOut = 0.5;
    let raf = 0;
    let active = true;

    const updateOpacity = () => {
      if (!active) return;
      const t = video.currentTime;
      const d = video.duration;

      if (!Number.isFinite(d) || d <= 0) {
        raf = requestAnimationFrame(updateOpacity);
        return;
      }

      let opacity = 1;
      if (d < fadeIn + fadeOut) {
        const inPart = t < fadeIn ? t / fadeIn : 1;
        const outPart = t > d - fadeOut ? (d - t) / fadeOut : 1;
        opacity = Math.min(inPart, outPart);
      } else if (t < fadeIn) {
        opacity = t / fadeIn;
      } else if (t > d - fadeOut) {
        opacity = (d - t) / fadeOut;
      }

      video.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      raf = requestAnimationFrame(updateOpacity);
    };

    const onEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        video.currentTime = 0;
        void video.play();
      }, 100);
    };

    const onLoaded = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateOpacity);
    };

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("ended", onEnded);
    raf = requestAnimationFrame(updateOpacity);

    return () => {
      active = false;
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  const loopBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="relative w-full overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: 0 }}
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative z-10 flex flex-col items-center gap-20 px-4 pb-24 pt-16">
        <div className="h-40 w-full shrink-0" aria-hidden />

        <div className="flex w-full max-w-5xl flex-col items-stretch gap-10 md:flex-row md:items-center md:gap-12">
          <p className="shrink-0 whitespace-nowrap text-sm text-foreground/50">
            Relied on by brands
            <br />
            across the globe
          </p>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-16">
              {loopBrands.map((name, i) => (
                <div key={`${name}-${i}`} className="flex shrink-0 items-center gap-3">
                  <div className="liquid-glass relative flex size-6 shrink-0 items-center justify-center rounded-lg text-xs font-semibold text-foreground">
                    <span className="relative z-10">{name.slice(0, 1)}</span>
                  </div>
                  <span className="text-base font-semibold text-foreground">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
