/**
 * Single, SSR-safe GSAP + ScrollTrigger registration point.
 * Every motion primitive imports gsap / ScrollTrigger FROM HERE — nothing
 * else registers plugins. Registration is guarded so it never runs on the
 * server (where `window` is undefined).
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
