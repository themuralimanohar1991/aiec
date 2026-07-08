"use client";

import {
  useRef,
  createElement,
  type ElementType,
  type ReactNode,
} from "react";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";
import { EASE } from "@/lib/easings";
import { DESKTOP_MOTION_QUERY } from "@/lib/motion-config";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type CharScrubProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** starting opacity of dimmed chars */
  from?: number;
  to?: number;
  /** pin the block while scrubbing (desktop only) */
  pin?: boolean;
  /** how far to pin, as a scroll distance */
  pinLength?: string;
};

/**
 * The signature move (reference pattern H): SplitType chars start dimmed
 * (opacity `from`) and brighten to `to` left-to-right, driven by a PINNED,
 * SCRUBBED ScrollTrigger. Reads as an "institution manifesto" reveal.
 *
 * Auto-degrades on mobile / reduced-motion to a simple line fade-up (no pin,
 * no scrub) so touch scrolling stays smooth.
 */
export function CharScrub({
  children,
  as = "p",
  className,
  from = 0.28,
  to = 1,
  pin = true,
  pinLength = "+=60%",
}: CharScrubProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const isDesktop = window.matchMedia(DESKTOP_MOTION_QUERY).matches;

    const ctx = gsap.context(() => {
      const splitter = new SplitType(el, { types: "lines,words,chars" });

      if (!isDesktop) {
        // Fallback: gentle line fade-up, no pin/scrub.
        const lines = splitter.lines;
        if (!lines?.length) return;
        gsap.set(lines, { opacity: 0, y: 20 });
        gsap.to(lines, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: EASE.inSignature,
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
        return;
      }

      const chars = splitter.chars;
      if (!chars?.length) return;
      gsap.set(chars, { opacity: from });

      if (!pin) {
        // non-pinned SCRUB: chars brighten left-to-right tied to scroll
        // progress as the block travels up through the viewport. Same
        // "text lights up as you scroll" feel as the pinned version, but no
        // pin spacer — so no overlap and no scroll-up jank.
        gsap.to(chars, {
          opacity: to,
          ease: "none",
          stagger: 0.5, // relative distribution across the scrub range
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 40%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
        return;
      }

      gsap.to(chars, {
        opacity: to,
        ease: "none",
        stagger: 0.5, // relative distribution across the scrub, not real seconds
        scrollTrigger: {
          // pin when the block reaches viewport center ("arrives and locks"),
          // then the reveal is driven purely by scroll while pinned.
          trigger: el,
          start: "center center",
          end: pinLength,
          scrub: true,
          pin: el,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [reduced, from, to, pin, pinLength]);

  return createElement(as, { ref, className }, children);
}
