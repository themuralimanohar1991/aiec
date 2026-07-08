import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import styles from "./PublishedWork.module.css";

/**
 * §8 THE PUBLISHED WORK — mapped onto Nixtio's "growth" floating-tile section.
 * A statement + the four quarterly report tiles. Corrected timeline per spec
 * (first editions Q4 2027 / Q1 2028).
 */
const REPORTS = [
  { track: "IT Track", title: "Enterprise AI Governance Report", note: "Frameworks, deployment benchmarks, and governance models from IT leaders who have implemented them." },
  { track: "Maintenance & Reliability", title: "Reliability AI Benchmarking Report", note: "Actual ROI figures, failure modes, and lessons learned from AI in maintenance operations." },
  { track: "Operations & Production", title: "Operational AI ROI Report", note: "Efficiency metrics and implementation realities from AI in production workflows." },
  { track: "Full Council · Annual", title: "State of AI in Energy Report", note: "The flagship publication, synthesizing the year's track intelligence. Released at the Annual Summit." },
];

export function PublishedWork() {
  return (
    <section id="publications" className={styles.section}>
      <div className="wrap">
        <FadeUp as="span" className="eyebrow">
          The published work
        </FadeUp>
        <RevealText as="h2" split="lines" stagger={0.09} className={styles.head}>
          Every session produces intelligence. Every quarter, it publishes.
        </RevealText>
        <FadeUp as="p" className={`muted ${styles.sub}`} start="top 86%">
          Published under the members&rsquo; names - not Kissflow&rsquo;s - and distributed through World Oil, Hart Energy, and E&amp;P
          Magazine. First editions Q4 2027 / Q1 2028.
        </FadeUp>

        <StaggerGroup
          className={styles.grid}
          itemSelector="[data-stagger-item]"
          y={34}
          scaleFrom={0.97}
          duration={0.7}
          stagger={0.1}
        >
          {REPORTS.map((r) => (
            <article key={r.title} className={styles.tile} data-stagger-item>
              <span className={styles.tag}>{r.track}</span>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.note}>{r.note}</p>
              <span className={styles.soon}>Coming soon</span>
            </article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
