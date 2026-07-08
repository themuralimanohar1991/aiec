/**
 * Central motion tuning. Keep magic numbers here so the whole site's rhythm
 * can be adjusted in one place.
 */
export const MOTION = {
  /** desktop breakpoint at/above which Lenis smooth-scroll + pins are enabled */
  desktopMinWidth: 1024,
  /** default in-view trigger start (calmer than the reference's "top 95%") */
  revealStart: "top 85%",
  /** default reveal duration (seconds) */
  duration: 0.7,
  /** default stagger between grouped children (seconds) */
  stagger: 0.1,
  /** default fade-up travel (px) */
  y: 16,
} as const;

/** matchMedia query for "smooth scroll + heavy motion allowed" */
export const DESKTOP_MOTION_QUERY = `(min-width:${MOTION.desktopMinWidth}px) and (pointer:fine)`;
