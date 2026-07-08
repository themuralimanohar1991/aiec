"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { DESKTOP_MOTION_QUERY } from "@/lib/motion-config";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import styles from "./FullBleedReveal.module.css";

type FullBleedRevealProps = {
  /** the media layer (image/placeholder) that scale-settles */
  media: ReactNode;
  /** overlaid content that rises into place */
  children?: ReactNode;
  /** darkening scrim for text legibility over the media */
  overlay?: boolean;
  className?: string;
};

/**
 * Reference patterns N + M: a full-bleed media panel whose image scale-settles
 * (from slightly zoomed to fit) as it enters, an optional darkening overlay
 * that fades in, and overlaid content that rises. Used for the "closed-door
 * session" panel (§4) and the "Why Houston" CTA band (§7).
 * Degrades to a static panel under reduced motion.
 */
export function FullBleedReveal({
  media,
  children,
  overlay = true,
  className = "",
}: FullBleedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (!window.matchMedia(DESKTOP_MOTION_QUERY).matches) return;

    const mediaEl = el.querySelector<HTMLElement>("[data-fb='media']");
    const scrimEl = el.querySelector<HTMLElement>("[data-fb='scrim']");
    const contentEl = el.querySelector<HTMLElement>("[data-fb='content']");

    const ctx = gsap.context(() => {
      if (mediaEl) {
        gsap.fromTo(
          mediaEl,
          { scale: 1.18 },
          {
            scale: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 20%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          },
        );
      }
      if (scrimEl) {
        gsap.fromTo(
          scrimEl,
          { opacity: 0 },
          {
            opacity: 1,
            scrollTrigger: { trigger: el, start: "top 80%", end: "top 40%", scrub: true },
          },
        );
      }
      if (contentEl) {
        gsap.from(contentEl, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 62%", once: true },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={ref} className={`${styles.panel} ${className}`}>
      <div data-fb="media" className={styles.media}>
        {media}
      </div>
      {overlay && <div data-fb="scrim" className={styles.scrim} />}
      {children && (
        <div data-fb="content" className={`wrap ${styles.content}`}>
          {children}
        </div>
      )}
    </div>
  );
}
