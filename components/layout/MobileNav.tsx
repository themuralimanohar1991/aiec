"use client";

import { NAV_LINKS } from "./ScrollHeader";
import styles from "./MobileNav.module.css";

type MobileNavProps = {
  open: boolean;
  onNav: (e: React.MouseEvent, href: string) => void;
  onClose: () => void;
};

export function MobileNav({ open, onNav, onClose }: MobileNavProps) {
  return (
    <>
      <div
        className={`${styles.scrim} ${open ? styles.scrimOpen : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={(e) => onNav(e, l.href)}>
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.cta}
          onClick={(e) => onNav(e, "#contact")}
        >
          Express Interest →
        </a>
      </nav>
    </>
  );
}
