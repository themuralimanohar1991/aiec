import { Marquee } from "@/components/motion/Marquee";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import { PortraitCard } from "@/components/ui/PortraitCard";
import { MEMBERS } from "@/lib/members";
import styles from "./AdvisoryMarquee.module.css";

/**
 * §2 ADVISORY COUNCIL — mapped onto Nixtio's mentor marquee.
 * Two rows of portrait cards drifting in opposite directions (pattern D).
 * The map-morph stage is intentionally simplified out (executive tone);
 * instead a "Founding Chapter: Houston → geographies" stat sits above.
 */
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
            The founding members who lend their name to the institution.
          </RevealText>
        </div>
        <FadeUp as="p" className={`muted ${styles.sub}`} start="top 88%">
          Senior energy leaders - CIOs, COOs, and VPs from Houston&rsquo;s
          largest operators. Membership is by invitation only.
        </FadeUp>
      </div>

      <div className={styles.rows}>
        <Marquee speed={38} direction={1} className={styles.row}>
          {MEMBERS.map((m) => (
            <PortraitCard key={m.id} member={m} />
          ))}
        </Marquee>
      </div>

      <div className={`wrap ${styles.footer}`}>
        <FadeUp as="p" className={styles.geo} start="top 88%">
          Founding Chapter: <strong>Houston</strong>. The replicable model for{" "}
          <strong>Permian Basin, Calgary, Abu Dhabi, and Singapore</strong>.
        </FadeUp>
        <FadeUp>
          <Button href="/members" variant="ghost" arrow>
            See the full council
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
