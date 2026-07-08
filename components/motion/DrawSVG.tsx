"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { EASE } from "@/lib/easings";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type DrawSVGProps = {
  children: ReactNode;
  className?: string;
  /** CSS selector for the strokes to draw (default: all line/path/polyline) */
  strokeSelector?: string;
  duration?: number;
  stagger?: number;
  ease?: string;
  delay?: number;
  /** run on mount instead of on scroll */
  onLoad?: boolean;
  start?: string;
};

/**
 * Stroke draw-in without the paid GSAP DrawSVGPlugin. Computes each stroke's
 * length and animates stroke-dashoffset from full→0. Wrap an inline <svg>.
 * Degrades to instant-visible under reduced motion.
 */
export function DrawSVG({
  children,
  className,
  strokeSelector = "path, line, polyline, polygon",
  duration = 1.4,
  stagger = 0.04,
  ease = EASE.softOut,
  delay = 0.3,
  onLoad = true,
  start = "top 85%",
}: DrawSVGProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const strokes = Array.from(
      el.querySelectorAll<SVGGeometryElement>(strokeSelector),
    );
    if (strokes.length === 0) return;

    if (reduced) {
      strokes.forEach((s) => {
        s.style.strokeDasharray = "";
        s.style.strokeDashoffset = "";
      });
      return;
    }

    const ctx = gsap.context(() => {
      strokes.forEach((s) => {
        const len = s.getTotalLength();
        s.style.strokeDasharray = String(len);
        s.style.strokeDashoffset = String(len);
      });
      gsap.to(strokes, {
        strokeDashoffset: 0,
        duration,
        ease,
        stagger,
        delay,
        ...(onLoad ? {} : { scrollTrigger: { trigger: el, start, once: true } }),
      });
    }, ref);

    return () => ctx.revert();
  }, [reduced, strokeSelector, duration, stagger, ease, delay, onLoad, start]);

  return (
    <div ref={ref} className={className} aria-hidden="true">
      {children}
    </div>
  );
}
