import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealText } from "@/components/motion/RevealText";
import { Button } from "@/components/ui/Button";
import styles from "@/components/layout/InnerPage.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why the AI Energy Council exists: a peer-governed, vendor-neutral institution for the moment AI became every function's problem in energy operations.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A peer-governed institution for the moment AI became every function's problem."
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.stack}>
            {/* Section 1 — What the AiEC is */}
            <div className={styles.blk}>
              <FadeUp as="p" className="muted">
                For most of the past decade, the AI conversation in energy
                belonged to the IT department. The CIO got the budget. The COO
                tolerated it. The VP Production ignored it.
              </FadeUp>
              <FadeUp as="p" className="muted" start="top 90%">
                That is not where we are in 2026. Every board in Houston is now
                asking its CEO directly: &ldquo;What is our AI strategy?&rdquo;
                Not &ldquo;what is IT doing with AI,&rdquo; but what is the
                company&rsquo;s strategy. That question lands in COO offices, VP
                Production offices, and VP Maintenance offices. Every function is
                being asked to have an answer. Most do not have one they are
                confident in.
              </FadeUp>
              <FadeUp as="p" className="muted" start="top 90%">
                No peer-governed, vendor-neutral institution existed to help them
                answer it together. The AI Energy Council is that institution.
              </FadeUp>
            </div>

            {/* Section 2 — How it works */}
            <div className={styles.blk}>
              <FadeUp as="span" className="eyebrow">
                How it works
              </FadeUp>
              <RevealText as="h2" split="lines" stagger={0.09}>
                One invitation. One session per month. No vendors in the room.
                Ever.
              </RevealText>
              <div className={styles.cols2}>
                <FadeUp as="p" className="muted" start="top 90%">
                  <strong>The Advisory Council</strong> is the institutional
                  anchor: 10 to 15 senior energy executives who lend their name,
                  their credibility, and their peer network to the institution.
                  They chair monthly sessions, participate in the Annual Summit,
                  and shape the AI-in-energy narrative from Houston.
                </FadeUp>
                <FadeUp as="p" className="muted" start="top 90%">
                  <strong>The Functional Tracks</strong> are the operational
                  intelligence engine: Director-level and VP-level professionals
                  organized by professional domain, IT, Maintenance and
                  Reliability, and Operations and Production. Each track runs one
                  closed-door session per month. Eight to twelve participants.
                  Chatham House rules. No presentations. No vendors. Both tracks
                  converge once a year at the Annual Summit.
                </FadeUp>
              </div>
            </div>

            {/* Section 3 — The published work */}
            <div className={styles.blk}>
              <FadeUp as="span" className="eyebrow">
                The published work
              </FadeUp>
              <RevealText as="h2" split="lines" stagger={0.09}>
                Every session produces intelligence. Every quarter, it publishes.
              </RevealText>
              <FadeUp as="p" className="muted" start="top 90%">
                Monthly sessions produce anonymized session summaries distributed
                only to participants. Every quarter, the sessions become track
                white papers: practitioner-sourced, peer-validated reports on what
                AI is actually doing in IT governance, maintenance operations, and
                production workflows. They are published under the members&rsquo;
                names, not under Kissflow&rsquo;s.
              </FadeUp>
              <FadeUp as="p" className="muted" start="top 90%">
                These are distributed through editorial relationships with World
                Oil, Hart Energy, and E&amp;P Magazine. When a VP Maintenance
                reads the quarterly Reliability AI Benchmarking Report cited in
                Hart Energy, that is not a vendor publication. That is
                peer-sourced intelligence from the community.
              </FadeUp>
            </div>

            {/* Section 4 — The long view */}
            <div className={styles.blk}>
              <FadeUp as="span" className="eyebrow">
                The long view
              </FadeUp>
              <RevealText as="h2" split="lines" stagger={0.09}>
                Houston is the proof of concept.
              </RevealText>
              <FadeUp as="p" className="muted" start="top 90%">
                The model is built to replicate. A successful Houston chapter
                creates the blueprint for other major energy geographies: Permian
                Basin, Calgary, Abu Dhabi, Singapore. We are building the
                institution, not the event.
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* Brand acknowledgment */}
      <section className={styles.sectionTint}>
        <div className="wrap">
          <FadeUp className={styles.callout}>
            <span className="eyebrow">Powered by Kissflow</span>
            <h3 style={{ margin: "14px 0" }}>
              Operationally backed by Kissflow. Institutionally independent.
            </h3>
            <p className="muted">
              Kissflow handles logistics, content production, and PR entirely
              behind the scenes. The council brand leads at all times.
            </p>
            <div className={styles.ctaRow}>
              <Button href="/contact" variant="ghost" arrow>
                Express Interest
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
