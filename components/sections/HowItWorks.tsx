import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import styles from "./HowItWorks.module.css";

/**
 * §11 HOW MEMBERSHIP WORKS — the simplified, calm 3-step replacement for
 * Nixtio's heavy pinned "How to Enter" Lottie finale (executive tone).
 * Kicker + one-line statement per step.
 */
const STEPS = [
  { n: "01", kicker: "Step one", line: "Express interest, or receive an invitation from a member." },
  { n: "02", kicker: "Step two", line: "A short peer review confirms fit. Membership is by invitation only." },
  { n: "03", kicker: "Step three", line: "Join a functional track and your first closed-door session." },
];

export function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="wrap">
        <FadeUp as="span" className="eyebrow">
          How membership works
        </FadeUp>
        <RevealText as="h2" split="lines" stagger={0.09} className={styles.head}>
          One invitation. Three steps. No open registration.
        </RevealText>

        <StaggerGroup
          className={styles.grid}
          itemSelector="[data-stagger-item]"
          y={30}
          duration={0.7}
          stagger={0.12}
        >
          {STEPS.map((s) => (
            <div key={s.n} className={styles.step} data-stagger-item>
              <span className={styles.num}>{s.n}</span>
              <span className={styles.kicker}>{s.kicker}</span>
              <p className={styles.line}>{s.line}</p>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
