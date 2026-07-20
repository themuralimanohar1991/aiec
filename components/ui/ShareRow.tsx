"use client";

import { useState } from "react";
import styles from "./ShareRow.module.css";

type ShareRowProps = {
  /** absolute profile URL */
  url: string;
  name: string;
};

/**
 * Share row for member profile pages (both stub and claimed states).
 *
 * The profile URL is the AiEC's "digital hook" - the link a member puts in
 * their LinkedIn bio or email signature. Pre-written share text frames them
 * as a Founding Member so the language stays consistent everywhere.
 */
export function ShareRow({ url, name }: ShareRowProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `${name} - Founding Member, AI Energy Council`;
  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const x = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText} ${url}`)}`;
  const email = `mailto:?subject=${encodeURIComponent(
    `${name} - AI Energy Council`,
  )}&body=${encodeURIComponent(
    `${name} is a Founding Member of the AI Energy Council, Houston Chapter.\n\n${url}`,
  )}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable (insecure context / permissions) - stay silent
    }
  };

  return (
    <div className={styles.row}>
      <span className={styles.label}>Share this profile</span>

      <a
        className={styles.btn}
        href={linkedIn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
        LinkedIn
      </a>

      <a className={styles.btn} href={x} target="_blank" rel="noopener noreferrer">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.59l5.24 6.93zm-1.29 19.5h2.04L6.49 3.24H4.3z" />
        </svg>
        X
      </a>

      <a className={styles.btn} href={email}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
        Email
      </a>

      <span className={styles.copyWrap}>
        <button className={styles.btn} onClick={copy} type="button">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          Copy link
        </button>
        <span
          className={`${styles.tooltip} ${copied ? styles.tooltipVisible : ""}`}
          role="status"
          aria-live="polite"
        >
          {copied ? "Copied!" : ""}
        </span>
      </span>
    </div>
  );
}
