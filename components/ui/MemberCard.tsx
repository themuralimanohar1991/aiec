import { initials, type Member } from "@/lib/members";
import { BadgeRow } from "./Badge";
import styles from "./MemberCard.module.css";

/**
 * Member directory card. Server-rendered (initials avatar computed at build,
 * no CLS). Links to the future /members/[slug] profile route (stub for now).
 */
export function MemberCard({ member }: { member: Member }) {
  return (
    <a
      href={`/members/${member.id}`}
      className={styles.card}
      data-stagger-item
    >
      <span className={styles.mono} aria-hidden="true">
        {initials(member.name)}
      </span>
      <span className={styles.body}>
        <span className={styles.name}>{member.name}</span>
        <span className={styles.title}>{member.title}</span>
        <span className={styles.company}>{member.company}</span>
      </span>
      <BadgeRow badges={member.badges} />
    </a>
  );
}
