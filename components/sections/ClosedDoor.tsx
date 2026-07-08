import { FullBleedReveal } from "@/components/motion/FullBleedReveal";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import styles from "./ClosedDoor.module.css";

/**
 * §4 THE CLOSED-DOOR SESSION — mapped onto Nixtio's full-bleed "about video"
 * panel. Full-bleed environmental media (boardroom photo — client to supply)
 * that scale-settles, with an overlaid statement. No video → image.
 */
export function ClosedDoor() {
  return (
    <section className={styles.section} data-theme="dark">
      <FullBleedReveal
        media={<PlaceholderMedia label="Boardroom photo - to supply" variant="navy" />}
      >
        <RevealText as="h2" split="lines" stagger={0.08} className={styles.head}>
          One invitation. One session per month. No vendors in the room. Ever.
        </RevealText>
        <FadeUp as="p" className={styles.sub}>
          Eight to twelve peers. Chatham House rules. No presentations. Just what
          is actually working, from the people who have deployed it.
        </FadeUp>
      </FullBleedReveal>
    </section>
  );
}
