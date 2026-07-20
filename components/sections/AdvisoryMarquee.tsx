import { Marquee } from "@/components/motion/Marquee";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { PortraitCard } from "@/components/ui/PortraitCard";
import { MEMBERS } from "@/lib/members";
import styles from "./AdvisoryMarquee.module.css";

/**
 * §2 ADVISORY COUNCIL — mapped onto Nixtio's mentor marquee.
 *
 * TEMPORARILY IN A HOLDING STATE. The portrait marquee is hidden because the
 * member records currently point at rotating stock photos (mentor-1..9.jpg)
 * across 15 real, named executives. Flip SHOW_ROSTER back to true once real
 * headshots land (or once the initials-only treatment is confirmed) — the
 * marquee markup below is preserved and needs no other change.
 */
const SHOW_ROSTER = false;

export function AdvisoryMarquee() {
  return (
    <section id="members" className={styles.section}>
      <div className={`wrap ${styles.head}`}>
        <div className={styles.headLeft}>
          <FadeUp as="span" className="eyebrow">
            The Advisory Council
          </FadeUp>
          <RevealText
            as="h2"
            split="lines"
            stagger={0.09}
            className={styles.title}
          >
            {SHOW_ROSTER
              ? "The founding members who lend their name to the institution."
              : "Founding members, announced soon."}
          </RevealText>
        </div>
        <FadeUp as="p" className={`muted ${styles.sub}`} start="top 88%">
          Senior energy leaders - CIOs, COOs, and VPs from Houston&rsquo;s
          largest operators. Membership is by invitation only.
        </FadeUp>
      </div>

      {SHOW_ROSTER ? (
        <>
          <div className={styles.rows}>
            <Marquee speed={38} direction={1} className={styles.row}>
              {MEMBERS.map((m) => (
                <PortraitCard key={m.id} member={m} />
              ))}
            </Marquee>
          </div>
          <div className={`wrap ${styles.footer}`}>
            <FadeUp>
              <Button href="/members" variant="ghost" arrow>
                See the full council
              </Button>
            </FadeUp>
          </div>
        </>
      ) : (
        <div className="wrap">
          <FadeUp className={styles.holding} start="top 88%">
            <span className={styles.holdingTag}>Coming soon</span>
            <p className={styles.holdingText}>
              The founding Advisory Council will be published here shortly.
            </p>
          </FadeUp>
        </div>
      )}
    </section>
  );
}
