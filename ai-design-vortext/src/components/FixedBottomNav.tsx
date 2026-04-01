import { Button } from "@/components/Button";

export function FixedBottomNav() {
  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-zinc-200/90 bg-white/95 px-3 py-2.5 shadow-[0_8px_40px_rgba(5,26,36,0.15)] backdrop-blur-md md:gap-4 md:px-4 md:py-3">
      <div
        className="pointer-events-auto flex size-10 shrink-0 items-center justify-center rounded-full bg-[#051A24] text-lg font-semibold text-white md:size-11"
        style={{ fontFamily: "'PP Mondwest', serif" }}
        aria-hidden
      >
        V
      </div>
      <Button href="#partner" variant="primary" className="pointer-events-auto !px-5 !py-2.5 text-xs md:!px-7 md:!py-3 md:text-sm">
        Start a chat
      </Button>
    </div>
  );
}
