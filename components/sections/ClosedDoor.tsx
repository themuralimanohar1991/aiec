import Image from "next/image";
import { FullBleedReveal } from "@/components/motion/FullBleedReveal";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import styles from "./ClosedDoor.module.css";

/**
 * §4 THE CLOSED-DOOR SESSION - mapped onto Nixtio's full-bleed "about video"
 * panel. Full-bleed boardroom photo that scale-settles, with an overlaid
 * statement. No video, image instead.
 */
export function ClosedDoor() {
  return (
    <section className={styles.section} data-theme="dark">
      <FullBleedReveal
        media={
          <Image
            src="/img/boardroom.webp"
            alt="A closed-door executive session"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        }
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
