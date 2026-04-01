import Hls from "hls.js";
import { type RefObject, useEffect } from "react";

const HLS_URL =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

export { HLS_URL };

export function useHls(videoRef: RefObject<HTMLVideoElement | null>, src: string = HLS_URL) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    return () => {
      hls?.destroy();
    };
  }, [src, videoRef]);
}
