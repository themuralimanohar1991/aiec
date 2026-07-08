"use client";

import type { ReactNode } from "react";
import { scrollToTarget } from "@/lib/lenis";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "cyan" | "ghost";
  arrow?: boolean;
  className?: string;
};

/**
 * Anchor-style CTA. In-page hrefs (#id) route through Lenis for smooth scroll;
 * everything else behaves as a normal link. Arrow slides on hover (CSS .arr).
 */
export function Button({
  children,
  href,
  variant = "primary",
  arrow = false,
  className = "",
}: ButtonProps) {
  const isAnchor = href.startsWith("#");

  const handleClick = (e: React.MouseEvent) => {
    if (isAnchor) {
      e.preventDefault();
      scrollToTarget(href, { offset: -80 });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`btn btn-${variant} ${className}`.trim()}
    >
      {children}
      {arrow && <span className="arr">→</span>}
    </a>
  );
}
