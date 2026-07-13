import Image from "next/image";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { FullBleedReveal } from "@/components/motion/FullBleedReveal";
import styles from "./Together.module.css";

/**
 * §9 TOGETHER - Nixtio's centered statement followed by a full-bleed image
 * that scale-settles (pattern N). "The AiEC grows through peer invitation."
 */
export function Together() {
  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.statement}`}>
        <RevealText as="h2" split="lines" stagger={0.1} className={styles.head}>
          The AiEC grows through peer invitation.
        </RevealText>
        <FadeUp as="p" className={`muted ${styles.sub}`} start="top 86%">
          The most valuable connections are between people who don&rsquo;t see
          each other every day. Once a year, the full community converges at the
          Annual Summit.
        </FadeUp>
      </div>

      <FullBleedReveal
        media={
          <Image
            src="/img/aiec_community.webp"
            alt="The AiEC community convening at the Annual Summit"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        }
        overlay={false}
        className={styles.image}
      />
    </section>
  );
}
