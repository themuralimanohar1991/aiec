import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <div>
            <div className={styles.mark}>AI Energy Council</div>
            <div className={styles.tag}>
              Powered by Kissflow &nbsp;|&nbsp; Founding Chapter: Houston
            </div>
          </div>
          <div className={styles.col}>
            <h4>Institution</h4>
            <Link href="/about">About</Link>
            <Link href="/tracks">Tracks</Link>
            <Link href="/members">Members</Link>
          </div>
          <div className={styles.col}>
            <h4>Engage</h4>
            <Link href="/publications">Publications</Link>
            <Link href="/summit">Summit</Link>
            <Link href="/contact">Express Interest</Link>
            <Link href="/contact#claim">Claim your profile</Link>
          </div>
        </div>
        <div className={styles.bar}>
          <span className={styles.fine}>
            © 2026 AI Energy Council. Operational infrastructure by Kissflow.
          </span>
          <span className={styles.fine}>
            Invitation-only · Chatham House rules · No vendors in the room.
          </span>
        </div>
      </div>
    </footer>
  );
}
