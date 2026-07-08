"use client";

import { useRef } from "react";
import SplitType from "split-type";
import { gsap } from "@/lib/gsap";
import { EASE } from "@/lib/easings";
import { DESKTOP_MOTION_QUERY } from "@/lib/motion-config";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import styles from "./CharScrubSwap.module.css";

type CharScrubSwapProps = {
  first: string;
  /** optional second statement that swaps in past 50% scroll (pattern I) */
  second?: string;
  className?: string;
  from?: number;
};

/**
 * Reference patterns H + I: a pinned statement whose characters brighten
 * (opacity from→1) as you scroll (char-scrub), and — if `second` is given —
 * swaps to a second statement past the halfway point of the pin.
 *
 * Desktop only. On mobile / reduced motion it shows both statements as a
 * simple stacked line fade (no pin, no scrub).
 */
export function CharScrubSwap({
  first,
  second,
  className = "",
  from = 0.26,
}: CharScrubSwapProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || reduced) return;

    const isDesktop = window.matchMedia(DESKTOP_MOTION_QUERY).matches;
    const firstEl = wrap.querySelector<HTMLElement>("[data-scrub='first']");
    const secondEl = wrap.querySelector<HTMLElement>("[data-scrub='second']");
    if (!firstEl) return;

    const ctx = gsap.context(() => {
      if (!isDesktop) {
        // mobile fallback: simple line fade-up, both statements visible stacked
        [firstEl, secondEl].filter(Boolean).forEach((el) => {
          const s = new SplitType(el as HTMLElement, { types: "lines" });
          gsap.set(s.lines, { opacity: 0, y: 18 });
          gsap.to(s.lines, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.07,
            ease: EASE.inSignature,
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });
        return;
      }

      const s1 = new SplitType(firstEl, { types: "lines,words,chars" });
      const s2 = secondEl
        ? new SplitType(secondEl, { types: "lines,words,chars" })
        : null;

      gsap.set(s1.chars, { opacity: from });
      if (s2) gsap.set(secondEl, { autoAlpha: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "center 60%",
          end: second ? "+=120%" : "+=70%",
          scrub: true,
          pin: wrap,
          pinSpacing: true,
          invalidateOnRefresh: true,
        },
      });

      // phase 1: scrub first statement to full opacity
      tl.to(s1.chars, { opacity: 1, ease: "none", stagger: 0.4 }, 0);

      if (s2 && secondEl) {
        // phase 2 (past halfway): cross-fade to the second statement, then scrub it in
        tl.to(firstEl, { autoAlpha: 0, duration: 0.15 }, ">");
        tl.set(secondEl, { autoAlpha: 1 });
        gsap.set(s2.chars, { opacity: from });
        tl.to(s2.chars, { opacity: 1, ease: "none", stagger: 0.4 }, ">");
      }
    }, wrapRef);

    return () => ctx.revert();
  }, [reduced, first, second, from]);

  return (
    <div ref={wrapRef} className={`${styles.wrap} ${className}`}>
      <p data-scrub="first" className={styles.statement}>
        {first}
      </p>
      {second && (
        <p data-scrub="second" className={`${styles.statement} ${styles.second}`}>
          {second}
        </p>
      )}
    </div>
  );
}
