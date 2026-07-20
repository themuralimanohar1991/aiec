"use client";

import { useState } from "react";
import styles from "./EOIForm.module.css";

/**
 * Profile claim form. Members listed in the directory submit their bio,
 * headshot, LinkedIn, and a sentence for their profile page.
 *
 * `claimSlug` pre-fills the profile URL when a member arrives from the
 * "Claim this profile" link on their stub page (/contact?claim=their-slug).
 *
 * Submit is a mock until the destination is wired (see feedback #8).
 */
export function ClaimForm({ claimSlug }: { claimSlug?: string }) {
  const [sent, setSent] = useState(false);
  const prefilledUrl = claimSlug ? `aienergycouncil.com/members/${claimSlug}` : "";

  return (
    <>
      <form
        className={styles.form}
        style={{ gridTemplateColumns: "1fr" }}
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
          (e.target as HTMLFormElement).reset();
        }}
      >
        <div className={styles.field}>
          <label htmlFor="cnm">Your name</label>
          <input
            id="cnm"
            type="text"
            placeholder="To match your member record"
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cem">Your email address</label>
          <input id="cem" type="email" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="curl">Profile URL you are claiming</label>
          <input
            id="curl"
            type="text"
            defaultValue={prefilledUrl}
            placeholder="aienergycouncil.com/members/your-name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cbio">Preferred bio (2 to 4 sentences, third person)</label>
          <textarea id="cbio" rows={3} />
        </div>
        <div className={styles.field}>
          <label htmlFor="cli">LinkedIn profile URL</label>
          <input id="cli" type="text" />
        </div>
        <div className={styles.field}>
          <label htmlFor="cq">One sentence for your profile</label>
          <textarea
            id="cq"
            rows={2}
            placeholder="e.g. I joined the AiEC because operational AI is moving faster than the frameworks."
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="ch">Headshot (file link or Google Drive link)</label>
          <input
            id="ch"
            type="text"
            placeholder="Drive link, or note that a file will follow"
          />
        </div>
        <div className={styles.field}>
          <button type="submit" className="btn btn-cyan">
            Submit claim <span className="arr">&rarr;</span>
          </button>
        </div>
      </form>
      <p className={styles.note}>
        {sent
          ? "Claim received. The team updates profiles within 24 to 48 hours. (Design preview - no data is sent.)"
          : "The team updates your profile page within 24 to 48 hours of receiving your details."}
      </p>
    </>
  );
}
