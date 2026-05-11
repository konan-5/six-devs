import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import {
  fadeUp,
  fadeIn,
  slideLeft,
  slideRight,
  noMotion,
  transition,
  slowTransition,
} from "@/lib/motion-variants";

export function useMotionConfig() {
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (prefersReduced) {
    return {
      fadeUp: noMotion,
      fadeIn: noMotion,
      slideLeft: noMotion,
      slideRight: noMotion,
      transition: { duration: 0 },
      slowTransition: { duration: 0 },
    };
  }

  if (isMobile) {
    return {
      fadeUp,
      fadeIn,
      slideLeft: fadeUp,
      slideRight: fadeUp,
      transition,
      slowTransition,
    };
  }

  return { fadeUp, fadeIn, slideLeft, slideRight, transition, slowTransition };
}
