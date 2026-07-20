import Image from "next/image";
import { FullBleedReveal } from "@/components/motion/FullBleedReveal";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import styles from "./WhyHoustonBand.module.css";

/**
 * §7 WHY HOUSTON - mapped onto Nixtio's full-bleed CTA-band. A Houston /
 * energy-infrastructure photo parallax-settles under a darkening overlay;
 * the headline + CTA rise into place (pattern M).
 */
export function WhyHoustonBand() {
  return (
    <section className={styles.section} data-theme="dark">
      <FullBleedReveal
        media={
          <Image
            src="/img/houston.webp"
            alt="Houston energy infrastructure"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        }
      >
        <FadeUp as="span" className="eyebrow">
          Why Houston
        </FadeUp>
        <RevealText as="h2" split="lines" stagger={0.09} className={styles.head}>
          Founding Chapter: Houston
        </RevealText>
        <FadeUp as="p" className={styles.body}>
          The world&rsquo;s largest concentration of energy companies - supermajors, independents, midstream operators, oilfield services. In
          2026, every board is asking its CEO: &ldquo;What is our AI
          strategy?&rdquo; The AiEC is where they answer it together.
        </FadeUp>
        <FadeUp className={styles.cta}>
          <Button href="/contact" variant="cyan" arrow>
            Express Interest
          </Button>
        </FadeUp>
      </FullBleedReveal>
    </section>
  );
}
