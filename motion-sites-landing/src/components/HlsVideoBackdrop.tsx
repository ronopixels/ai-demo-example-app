import { type ReactNode, useRef } from "react";

import { useHls } from "@/hooks/useHls";

type HlsVideoBackdropProps = {
  src: string;
  className?: string;
  videoClassName?: string;
  /** Apply CSS saturate(0) to the video element */
  desaturate?: boolean;
  children?: ReactNode;
};

/**
 * Full-bleed HLS background with 200px top/bottom black fades (per prompt).
 */
export function HlsVideoBackdrop({
  src,
  className = "",
  videoClassName = "",
  desaturate,
  children,
}: HlsVideoBackdropProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useHls(videoRef, src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className={`absolute inset-0 z-0 h-full w-full object-cover ${videoClassName}`}
        style={desaturate ? { filter: "saturate(0)" } : undefined}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[200px] bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[200px] bg-gradient-to-t from-black to-transparent" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
