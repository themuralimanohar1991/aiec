/**
 * Lenis smooth-scroll singleton + a getter used by hooks/components to reach
 * the shared instance (for anchor scrollTo, etc.). The instance is created and
 * torn down by SmoothScrollProvider; this module just holds the reference.
 */
import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

/** Smoothly scroll to a target (element, selector, or offset). No-ops without Lenis (native anchor scroll takes over). */
export function scrollToTarget(
  target: string | HTMLElement | number,
  options?: { offset?: number; duration?: number },
) {
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, options);
  } else if (typeof window !== "undefined" && typeof target === "string") {
    // Fallback for mobile / reduced-motion (Lenis not mounted): native scroll.
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
