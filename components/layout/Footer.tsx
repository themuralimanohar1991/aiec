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
            <a href="#about">About</a>
            <a href="#tracks">Tracks</a>
            <a href="#members">Members</a>
            <a href="#powered">Powered by Kissflow</a>
          </div>
          <div className={styles.col}>
            <h4>Engage</h4>
            <a href="#publications">Publications</a>
            <a href="#summit">Summit</a>
            <a href="#contact">Express Interest</a>
            <a href="#contact">Contact</a>
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
