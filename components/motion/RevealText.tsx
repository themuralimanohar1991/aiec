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
import { MOTION } from "@/lib/motion-config";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealTextProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  split?: "lines" | "words" | "chars";
  /** mask each line/word in an overflow-hidden clip for the push-up look */
  mask?: boolean;
  stagger?: number;
  duration?: number;
  ease?: string;
  /** travel distance; for masked mode this is a % of line height */
  y?: number;
  scaleFrom?: number;
  start?: string;
  /** run on mount (above-the-fold hero) instead of on scroll */
  onLoad?: boolean;
  delay?: number;
};

/**
 * SplitType-based text reveal. Splits into lines/words/chars and staggers them
 * up into place. `mask` wraps each part in an overflow-hidden parent so parts
 * translate up from behind a clip (the "word-stack" push-up handoff).
 *
 * SplitType runs post-paint and is reverted on cleanup (restores original
 * markup for a11y + reflow safety). Under reduced motion it never splits —
 * the plain text renders at full opacity.
 */
export function RevealText({
  children,
  as = "p",
  className,
  split = "lines",
  mask = false,
  stagger = 0.09,
  duration = MOTION.duration,
  ease = EASE.inSignature,
  y = 24,
  scaleFrom,
  start = MOTION.revealStart,
  onLoad = false,
  delay = 0,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const ctx = gsap.context(() => {
      const splitter = new SplitType(el, {
        types:
          split === "chars"
            ? "words,chars"
            : split === "words"
              ? "words"
              : "lines",
      });

      const targets =
        split === "chars"
          ? splitter.chars
          : split === "words"
            ? splitter.words
            : splitter.lines;
      if (!targets || targets.length === 0) return;

      if (mask) {
        // wrap each part so it can translate up from behind a clip
        targets.forEach((node) => {
          const wrapper = document.createElement("span");
          wrapper.style.display = "inline-block";
          wrapper.style.overflow = "hidden";
          wrapper.style.verticalAlign = "top";
          node.parentNode?.insertBefore(wrapper, node);
          wrapper.appendChild(node);
          (node as HTMLElement).style.display = "inline-block";
        });
      }

      const fromVars: gsap.TweenVars = mask
        ? { yPercent: 110, opacity: 1 }
        : { y, opacity: 0 };
      if (scaleFrom != null) fromVars.scale = scaleFrom;

      const toVars: gsap.TweenVars = mask
        ? { yPercent: 0 }
        : { y: 0, opacity: 1 };
      if (scaleFrom != null) toVars.scale = 1;

      gsap.set(targets, fromVars);
      gsap.to(targets, {
        ...toVars,
        duration,
        ease,
        stagger,
        delay,
        ...(onLoad
          ? {}
          : { scrollTrigger: { trigger: el, start, once: true } }),
      });
    }, ref);

    return () => ctx.revert();
  }, [reduced, split, mask, stagger, duration, ease, y, scaleFrom, start, onLoad, delay]);

  return createElement(as, { ref, className }, children);
}
