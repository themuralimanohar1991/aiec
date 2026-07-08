import { FadeUp } from "@/components/motion/FadeUp";
import { CharScrub } from "@/components/motion/CharScrub";
import styles from "./IfYou.module.css";

/**
 * §6 THIS ROOM IS FOR YOU IF - Nixtio's centered "If you..." qualifier
 * checklist. The section PINS on arrival and the qualifier lines brighten
 * char-by-char as you scroll (pattern H). One pinned block reveals all lines
 * so there is a single, clean pin (not four).
 */
export function IfYou() {
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <FadeUp as="span" className={styles.label}>
          This room is for you if
        </FadeUp>
        <CharScrub as="div" pin pinLength="+=120%" className={styles.list}>
          <span className={styles.item}>
            You&rsquo;re a CIO, COO, or VP being asked &ldquo;what&rsquo;s our AI
            strategy?&rdquo;
          </span>
          <span className={styles.item}>
            You want peer data, not another vendor presentation.
          </span>
          <span className={styles.item}>
            You&rsquo;ve survived the Big Data and digitalization hype cycles.
          </span>
          <span className={styles.item}>
            You want what&rsquo;s working on the floor, under Chatham House rules.
          </span>
        </CharScrub>
      </div>
    </section>
  );
}
