"use client";

import { useState } from "react";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import styles from "./EOIForm.module.css";

/**
 * §13 EXPRESSION OF INTEREST — Nixtio's application form, with the spec's EOI
 * fields. Submit is a mock for now (Phase 2 wires it to email
 * contact@aienergycouncil.com via a form service).
 */
export function EOIForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className={styles.section}>
      <div className="wrap">
        <FadeUp as="span" className="eyebrow">
          Express interest
        </FadeUp>
        <RevealText as="h2" split="lines" stagger={0.09} className={styles.head}>
          Start a conversation.
        </RevealText>
        <FadeUp as="p" className={`muted ${styles.sub}`} start="top 88%">
          The AiEC grows through peer invitation. If you&rsquo;ve been directed
          here by a member, use the form below.
        </FadeUp>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            (e.target as HTMLFormElement).reset();
          }}
        >
          <div className={styles.field}>
            <label htmlFor="fn">Full name *</label>
            <input id="fn" type="text" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="ti">Professional title *</label>
            <input id="ti" type="text" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="co">Company *</label>
            <input id="co" type="text" required />
          </div>
          <div className={styles.field}>
            <label htmlFor="em">Email address *</label>
            <input id="em" type="email" required />
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <label htmlFor="int">I am interested in</label>
            <select id="int">
              <option>Advisory Council membership</option>
              <option>IT Track participation</option>
              <option>Maintenance &amp; Reliability Track participation</option>
              <option>Operations &amp; Production Track participation</option>
              <option>Media partnership / editorial inquiry</option>
              <option>Annual Summit attendance</option>
              <option>General inquiry</option>
            </select>
          </div>
          <div className={`${styles.field} ${styles.full}`}>
            <button type="submit" className="btn btn-primary">
              Send <span className="arr">&rarr;</span>
            </button>
          </div>
        </form>
        <p className={styles.note}>
          {sent
            ? "Thank you. A member of the AiEC team will be in touch within 3 business days. (Design preview - no data is sent.)"
            : "This form does not register you for any program. A member of the AiEC team will be in touch within 3 business days."}
        </p>
      </div>
    </section>
  );
}
