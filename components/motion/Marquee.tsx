"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import styles from "./Marquee.module.css";

type MarqueeProps = {
  children: ReactNode;
  /** px per second drift speed */
  speed?: number;
  /** direction: 1 = leftward, -1 = rightward */
  direction?: 1 | -1;
  className?: string;
};

/**
 * Infinite horizontal marquee (reference pattern D). Duplicates its children
 * once for a seamless loop and drifts the track with a GSAP timeline.
 * Under reduced motion it becomes a static, horizontally-scrollable row.
 */
export function Marquee({
  children,
  speed = 40,
  direction = 1,
  className = "",
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || reduced) return;

    const ctx = gsap.context(() => {
      // the track contains 2 copies; animate across exactly half its width
      const half = track.scrollWidth / 2;
      const duration = half / speed;
      const from = direction === 1 ? 0 : -half;
      const to = direction === 1 ? -half : 0;

      gsap.set(track, { x: from });
      gsap.to(track, {
        x: to,
        duration,
        ease: "none",
        repeat: -1,
      });
    }, trackRef);

    return () => ctx.revert();
  }, [reduced, speed, direction]);

  return (
    <div className={`${styles.viewport} ${className}`}>
      <div
        ref={trackRef}
        className={`${styles.track} ${reduced ? styles.trackStatic : ""}`}
      >
        {children}
        {!reduced && <span aria-hidden="true" className={styles.dupe}>{children}</span>}
      </div>
    </div>
  );
}
