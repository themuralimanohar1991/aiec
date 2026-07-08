import { FadeUp } from "@/components/motion/FadeUp";
import { CharScrub } from "@/components/motion/CharScrub";
import styles from "./Mission.module.css";

/**
 * §3 MISSION — Nixtio's two-column statement. Big label word on the left, the
 * statement on the right revealing char-by-char on scroll (pattern H, NOT
 * pinned — avoids the scroll-up jank). The support paragraph flows normally
 * below in its own block so nothing overlaps.
 */
export function Mission() {
  return (
    <section id="about" className={styles.section}>
      <div className={`wrap ${styles.grid}`}>
        <FadeUp as="span" className={styles.label}>
          What it is
        </FadeUp>
        <div className={styles.right}>
          <CharScrub as="p" pin pinLength="+=90%" className={styles.statement}>
            Not a conference. Not a trade association. Not a vendor community.
          </CharScrub>
          <FadeUp as="p" className={`muted ${styles.support}`} start="top 90%">
            The AiEC is a peer-governed institution where senior energy leaders - CIOs, COOs, VPs of Production, VPs of Maintenance, and
            Operations leaders - meet monthly in small, closed-door
            sessions, under Chatham House rules, and publish under their own
            names.
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
