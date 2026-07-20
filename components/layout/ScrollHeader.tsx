"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { scrollToTarget } from "@/lib/lenis";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { MobileNav } from "./MobileNav";
import styles from "./ScrollHeader.module.css";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tracks", label: "Tracks" },
  { href: "/members", label: "Members" },
  { href: "/publications", label: "Publications" },
  { href: "/summit", label: "Summit" },
];

/**
 * Sticky header. On load it slides down; on scroll it (a) gains a solid
 * backdrop past the hero and (b) flips to a light-on-dark palette while a
 * [data-theme="dark"] section sits under the header band (reference pattern C).
 */
export function ScrollHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduced = useReducedMotion();
  const pathname = usePathname();

  useIsomorphicLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      // (a) slide-down intro
      if (!reduced) {
        gsap.from(header, {
          yPercent: -100,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.1,
        });
      }

      // (b) solid background after scrolling past ~hero
      ScrollTrigger.create({
        start: "top -80",
        end: "max",
        onUpdate: (self) =>
          header.classList.toggle(styles.solid, self.scroll() > 80),
        onToggle: (self) =>
          header.classList.toggle(styles.solid, self.isActive),
      });

      // (c) light/dark context switch: dark while any dark section overlaps
      // the header band. Recompute onRefresh so it's correct on load, resize,
      // and after client sections mount.
      const darkSections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-theme="dark"]'),
      );
      const headerBand = 72; // px from top the switch pivots on

      const syncDark = () => {
        const y = window.scrollY;
        const overDark = darkSections.some((s) => {
          const top = s.offsetTop;
          const bottom = top + s.offsetHeight;
          return y + headerBand >= top && y + headerBand < bottom;
        });
        header.classList.toggle(styles.onDark, overDark);
      };

      const st = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: syncDark,
        onRefresh: syncDark,
      });
      syncDark();
      void st;
    }, headerRef);

    // ensure triggers measure correctly once sections have mounted/painted
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, [reduced]);

  // In-page anchors still route through Lenis; real routes navigate normally
  // and just close the mobile panel.
  const handleNav = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToTarget(href, { offset: -80 });
    }
    setMenuOpen(false);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header ref={headerRef} className={styles.header}>
      <div className={`wrap ${styles.nav}`}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="AI Energy Council - home"
        >
          <Image
            src="/logo.png"
            alt="AI Energy Council"
            width={512}
            height={189}
            priority
            className={styles.logo}
          />
        </Link>

        <nav className={styles.links}>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={isActive(l.href) ? styles.active : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.cta}>
            Express Interest
          </Link>
        </nav>

        <button
          className={styles.menuBtn}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.6">
            <line x1="3" y1="8" x2="23" y2="8" />
            <line x1="3" y1="18" x2="23" y2="18" />
          </svg>
        </button>
      </div>

      <MobileNav
        open={menuOpen}
        onNav={handleNav}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
}
