"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { DESKTOP_MOTION_QUERY } from "@/lib/motion-config";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type ParallaxLayerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** fraction of the scroll range to drift, e.g. -0.15 drifts up as you scroll */
  speed?: number;
  axis?: "x" | "y";
};

/**
 * Scrub-driven translate for depth. Desktop + motion-allowed only (parallax on
 * mobile fights native scroll). No-op otherwise.
 */
export function ParallaxLayer({
  children,
  as: Tag = "div",
  className,
  speed = -0.15,
  axis = "y",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (!window.matchMedia(DESKTOP_MOTION_QUERY).matches) return;

    const ctx = gsap.context(() => {
      const distance = () =>
        (el.offsetHeight + window.innerHeight) * speed;
      gsap.fromTo(
        el,
        { [axis]: -distance() / 2 },
        {
          [axis]: distance() / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    }, ref);

    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, [reduced, speed, axis]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
