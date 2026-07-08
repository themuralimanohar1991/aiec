import type { ReactNode } from "react";
import styles from "./TrackCard.module.css";

type TrackCardProps = {
  variant: "it" | "mr" | "op";
  tag: string;
  heading: string;
  children: ReactNode;
};

export function TrackCard({ variant, tag, heading, children }: TrackCardProps) {
  return (
    <article className={`${styles.card} ${styles[variant]}`} data-stagger-item>
      <span className={styles.tk}>{tag}</span>
      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.copy}>{children}</p>
    </article>
  );
}
