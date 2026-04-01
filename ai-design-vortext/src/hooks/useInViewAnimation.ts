import { useEffect, useRef, useState, type RefObject } from "react";

export type UseInViewAnimationResult = {
  ref: RefObject<HTMLElement | null>;
  isInView: boolean;
};

/**
 * IntersectionObserver: `isInView` flips to true once when the element enters the viewport (threshold 0.1). Never resets.
 */
export function useInViewAnimation(): UseInViewAnimationResult {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isInView };
}
