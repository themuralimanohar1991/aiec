import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { Button } from "@/components/ui/Button";
import styles from "./Kissflow.module.css";

/**
 * §12 POWERED BY KISSFLOW — mapped onto Nixtio's "app-promo card". A
 * standalone institutional card carrying the founding-donor analogy instead of
 * an app promo.
 */
export function Kissflow() {
  return (
    <section id="powered" className={styles.section}>
      <div className="wrap">
        <div className={styles.card}>
          <FadeUp as="span" className="eyebrow">
            Powered by Kissflow
          </FadeUp>
          <RevealText as="h2" split="lines" stagger={0.09} className={styles.head}>
            Operationally backed. Institutionally independent.
          </RevealText>
          <FadeUp as="p" className={styles.body}>
            Think of it like a university with a founding donor. The
            university&rsquo;s name is on the building. The donor&rsquo;s name is
            on a plaque inside. Both are acknowledged. Neither is confused for
            the other. Kissflow runs the logistics; the council is governed by
            its members, and the thought leadership belongs to them.
          </FadeUp>
          <FadeUp>
            <Button href="/powered-by" variant="ghost" arrow>
              Learn more about Kissflow&rsquo;s role
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
