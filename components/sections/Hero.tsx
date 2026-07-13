import Image from "next/image";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import styles from "./Hero.module.css";

/**
 * §1 HERO — two-column: left content (headline word-stack reveal + paragraph
 * body + CTA), right image (client to supply). Body copy flows as a normal
 * paragraph (FadeUp), not line-split.
 */
export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.content}>
          <FadeUp as="span" className="eyebrow" onLoad y={12} delay={0.05}>
            Founding Chapter · Houston
          </FadeUp>

          <RevealText
            as="h1"
            split="words"
            mask
            onLoad
            stagger={0.08}
            duration={0.9}
            scaleFrom={1.04}
            className={styles.h1}
          >
            The AI Energy Council
          </RevealText>

          <FadeUp as="p" className={styles.subhead} onLoad delay={0.4}>
            Houston&rsquo;s first peer-governed executive community for AI
            transformation in energy operations.
          </FadeUp>

          <FadeUp as="p" className={styles.body} onLoad delay={0.55}>
            Invitation-only. Closed-door sessions. No vendors. The agenda
            belongs to the members. The published thought leadership goes out
            under their names.
          </FadeUp>

          <FadeUp className={styles.actions} onLoad delay={0.7}>
            <Button href="#contact" variant="primary" arrow>
              Express Interest
            </Button>
          </FadeUp>
        </div>

        <FadeUp className={styles.media} onLoad delay={0.3}>
          <Image
            src="/img/hero_aiec.webp"
            alt="Energy executives meeting with the Houston refinery skyline behind them"
            fill
            priority
            sizes="(max-width:900px) 100vw, 48vw"
            style={{ objectFit: "cover" }}
          />
        </FadeUp>
      </div>
    </section>
  );
}
