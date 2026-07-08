"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { EASE } from "@/lib/easings";
import { MOTION } from "@/lib/motion-config";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type FadeUpProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** travel distance in px (default 16) */
  y?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  /** ScrollTrigger start; ignored when `onLoad` */
  start?: string;
  /** animate immediately on mount instead of on scroll (for above-the-fold) */
  onLoad?: boolean;
};

/**
 * The workhorse reveal: opacity 0→1 + translateY→0 when scrolled into view
 * (or on load). Degrades to instant final-state under reduced motion.
 */
export function FadeUp({
  children,
  as: Tag = "div",
  className,
  y = MOTION.y,
  duration = 0.6,
  delay = 0,
  ease = EASE.outSignature,
  start = MOTION.revealStart,
  onLoad = false,
}: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0, clearProps: "all" });
      return;
    }
    const ctx = gsap.context(() => {
      gsap.set(el, { opacity: 0, y });
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease,
        ...(onLoad
          ? {}
          : {
              scrollTrigger: { trigger: el, start, once: true },
            }),
      });
    }, ref);
    return () => ctx.revert();
  }, [reduced, y, duration, delay, ease, start, onLoad]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
