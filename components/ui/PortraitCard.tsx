import Image from "next/image";
import { initials, type Member } from "@/lib/members";
import styles from "./PortraitCard.module.css";

/**
 * Nixtio "mentor card" component: full-bleed vertical portrait photo, an
 * accent role-tag top-left, and a bottom gradient scrim carrying name +
 * title/company. Links to the member profile route. If no headshot, falls
 * back to a branded initials-monogram in the same card shape.
 */
export function PortraitCard({
  member,
  tag = "Advisory Council",
}: {
  member: Member;
  tag?: string;
}) {
  return (
    <a href={`/members/${member.id}`} className={styles.card} data-stagger-item>
      <span className={styles.tag}>{tag}</span>

      {member.headshot ? (
        <Image
          src={`/img/members/${member.headshot}`}
          alt={member.name}
          fill
          sizes="(max-width:768px) 60vw, 300px"
          className={styles.photo}
        />
      ) : (
        <span className={styles.monogram} aria-hidden="true">
          {initials(member.name)}
        </span>
      )}

      <span className={styles.scrim}>
        <span className={styles.name}>{member.name}</span>
        <span className={styles.role}>
          {member.title} · {member.company}
        </span>
      </span>
    </a>
  );
}
