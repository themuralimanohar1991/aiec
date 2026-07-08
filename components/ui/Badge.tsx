import { BADGE_CLASS, BADGE_LABEL, type BadgeKey } from "@/lib/members";
import styles from "./Badge.module.css";

export function Badge({ badge }: { badge: BadgeKey }) {
  return (
    <span className={`${styles.badge} ${styles[BADGE_CLASS[badge]]}`}>
      {BADGE_LABEL[badge]}
    </span>
  );
}

export function BadgeRow({ badges }: { badges: BadgeKey[] }) {
  return (
    <div className={styles.row}>
      {badges.map((b) => (
        <Badge key={b} badge={b} />
      ))}
    </div>
  );
}
