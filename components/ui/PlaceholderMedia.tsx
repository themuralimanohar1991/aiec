import styles from "./PlaceholderMedia.module.css";

/**
 * Branded gradient placeholder for photos the client will supply
 * (§4 boardroom, §7 Houston, §8 report covers, §9 community). Sized by its
 * parent; shows a small label so it's obvious it's a placeholder slot.
 */
export function PlaceholderMedia({
  label,
  variant = "navy",
}: {
  label: string;
  variant?: "navy" | "cyan" | "mist";
}) {
  return (
    <div className={`${styles.ph} ${styles[variant]}`} aria-hidden="true">
      <span className={styles.label}>{label}</span>
    </div>
  );
}
