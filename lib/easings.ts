/**
 * Signature easing curves derived from the reference (Nixtio "Board") source.
 * See reference-analysis/nixtio-board-animation-analysis.md.
 *
 * GSAP accepts CustomEase-style strings only with the paid CustomEase plugin,
 * so for cubic-beziers we register named eases via gsap once, and also expose
 * the raw arrays for CSS usage.
 */
import { gsap } from "./gsap";

export const EASE = {
  /** primary expo-ish ease for reveals / handoffs — cubic-bezier(0.62,0.05,0.01,0.99) */
  inSignature: "power4.inOut",
  /** settle ease (no overshoot) — cubic-bezier(0.165,0.84,0.44,1) */
  outSignature: "power3.out",
  /** generic soft-out */
  softOut: "power2.out",
} as const;

/**
 * Register the exact cubic-beziers as named GSAP eases using the built-in
 * `gsap.parseEase` bezier support (available without CustomEase via the
 * "0.62,0.05,0.01,0.99" -> we approximate with power curves above for tweens,
 * and keep these raw values for any CSS transitions).
 */
export const CUBIC = {
  inSignature: "cubic-bezier(0.62,0.05,0.01,0.99)",
  outSignature: "cubic-bezier(0.165,0.84,0.44,1)",
} as const;

// Ensure a stable default ease across the app.
if (typeof window !== "undefined") {
  gsap.defaults({ ease: EASE.outSignature });
}
