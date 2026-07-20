import type { ReactNode } from "react";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealText } from "@/components/motion/RevealText";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
};

/**
 * Shared header for inner pages (About / Tracks / Publications / Summit /
 * Contact). Clears the fixed site header and gives every page the same
 * eyebrow -> H1 -> lead rhythm, with the home page's reveal motion.
 */
export function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <div className="wrap">
        <FadeUp as="span" className={`eyebrow ${styles.eyebrow}`}>
          {eyebrow}
        </FadeUp>
        <RevealText as="h1" split="lines" stagger={0.09} className={styles.title}>
          {title}
        </RevealText>
        {lead && (
          <FadeUp as="p" className={`lead muted ${styles.lead}`} start="top 92%">
            {lead}
          </FadeUp>
        )}
      </div>
    </section>
  );
}
