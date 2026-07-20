import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealText } from "@/components/motion/RevealText";
import { Button } from "@/components/ui/Button";
import styles from "@/components/layout/InnerPage.module.css";

export const metadata: Metadata = {
  title: "The Annual Summit",
  description:
    "Where all AiEC tracks converge. A half-day executive symposium in Houston: the Advisory Council's only public fireside of the year and the launch of the Annual State of AI in Energy Report.",
};

const FORMAT = [
  { k: "Format", v: "Half-day symposium" },
  { k: "Scale", v: "200-300 leaders" },
  { k: "Location", v: "Houston, premium venue" },
  { k: "Timing", v: "February / March 2027" },
];

export default function SummitPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Annual Summit"
        title="Where all tracks converge."
        lead="Once a year, the full AI Energy Council community - Advisory Council members, functional track participants, ecosystem partners, academic collaborators, and invited guests - convenes at the Annual Summit."
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.cols2}>
            <FadeUp as="p" className="muted">
              The Summit is not a conference. It is the AiEC&rsquo;s most visible
              institutional moment. The Advisory Council holds its only public
              fireside conversation of the year.
            </FadeUp>
            <FadeUp as="p" className="muted" start="top 90%">
              All four quarterly track white papers are launched. The Annual
              State of AI in Energy Report is released under media embargo.
            </FadeUp>
          </div>
        </div>
      </section>

      <section className={styles.sectionTint}>
        <div className="wrap">
          <FadeUp as="span" className="eyebrow">
            Format
          </FadeUp>
          <RevealText
            as="h2"
            split="lines"
            stagger={0.09}
            className=""
          >
            First Annual Summit, Houston, 2027.
          </RevealText>

          <div className={styles.cells} style={{ marginTop: 30 }}>
            {FORMAT.map((f) => (
              <div key={f.k} className={styles.cell}>
                <span className={styles.k}>{f.k}</span>
                <span className={styles.v}>{f.v}</span>
              </div>
            ))}
          </div>

          <FadeUp
            as="p"
            className="muted"
            style={{ marginTop: 28, maxWidth: "70ch" }}
            start="top 92%"
          >
            A half-day executive symposium followed by a networking reception.
            Attendees include AiEC members, invited ecosystem practitioners,
            academic partners, and media partners (World Oil, Hart Energy, E&amp;P
            Magazine). Date and venue to be confirmed. Invitations go first to
            AiEC members and functional track participants.
          </FadeUp>

          <FadeUp className={styles.ctaRow} start="top 94%">
            <Button href="/contact" variant="primary" arrow>
              Express interest in the Summit
            </Button>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
