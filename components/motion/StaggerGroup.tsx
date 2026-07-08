"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { EASE } from "@/lib/easings";
import { MOTION } from "@/lib/motion-config";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type StaggerGroupProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** selector for the items to animate (default: direct children marked [data-stagger-item], else all element children) */
  itemSelector?: string;
  y?: number;
  scaleFrom?: number;
  duration?: number;
  ease?: string;
  start?: string;
  /** number, or GSAP advanced stagger object (grid cascade, from center, etc.) */
  stagger?: number | gsap.StaggerVars;
  /** enable a subtle alternating-x "depth scatter" so items converge to center */
  scatter?: boolean;
  scatterX?: number;
};

/**
 * Animates a batch of children into place with a stagger when the group scrolls
 * into view. Used for card rows (scatter drop) and the roster grid (grid
 * cascade). Degrades to instant final-state under reduced motion.
 */
export function StaggerGroup({
  children,
  as: Tag = "div",
  className,
  itemSelector,
  y = 32,
  scaleFrom = 0.97,
  duration = 0.7,
  ease = EASE.inSignature,
  start = "top 80%",
  stagger = MOTION.stagger,
  scatter = false,
  scatterX = 16,
}: StaggerGroupProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = itemSelector
      ? Array.from(el.querySelectorAll<HTMLElement>(itemSelector))
      : Array.from(el.children).filter(
          (c): c is HTMLElement => c instanceof HTMLElement,
        );
    if (items.length === 0) return;

    if (reduced) {
      gsap.set(items, { opacity: 1, x: 0, y: 0, scale: 1, clearProps: "all" });
      return;
    }

    const ctx = gsap.context(() => {
      items.forEach((item, i) => {
        const from: gsap.TweenVars = { opacity: 0, y, scale: scaleFrom };
        if (scatter) {
          const mid = (items.length - 1) / 2;
          from.x = (i - mid) * (scatterX / Math.max(mid, 1));
        }
        gsap.set(item, from);
      });

      gsap.to(items, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        ease,
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, [reduced, itemSelector, y, scaleFrom, duration, ease, start, stagger, scatter, scatterX]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
