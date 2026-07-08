"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { setLenis } from "@/lib/lenis";
import { DESKTOP_MOTION_QUERY } from "@/lib/motion-config";

/**
 * Mounts a single Lenis instance (desktop + fine pointer + motion allowed only)
 * and bridges it to GSAP's ticker so ScrollTrigger stays perfectly in sync.
 * This is the free replacement for the reference site's paid ScrollSmoother.
 *
 * On mobile / touch / reduced-motion: Lenis is NOT created — native momentum
 * scroll runs, and ScrollTrigger still works against the native scroller.
 * Adds `html.motion-ready` so CSS reveals only hide content once JS is live.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isDesktop = window.matchMedia(DESKTOP_MOTION_QUERY).matches;

    // No smooth scroll on mobile/touch or when reduced motion is requested.
    if (prefersReduced || !isDesktop) {
      setLenis(null);
      return () => {
        root.classList.remove("motion-ready");
      };
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    setLenis(lenis);

    // Drive Lenis from GSAP's ticker (single RAF loop) and keep ST in sync.
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // After first paint, refresh triggers now that layout is settled.
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
      root.classList.remove("motion-ready");
    };
  }, []);

  return <>{children}</>;
}
