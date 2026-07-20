import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealText } from "@/components/motion/RevealText";
import { Badge } from "@/components/ui/Badge";
import type { BadgeKey } from "@/lib/members";
import styles from "@/components/layout/InnerPage.module.css";

export const metadata: Metadata = {
  title: "Tracks",
  description:
    "Three functional tracks for energy leaders: IT, Maintenance & Reliability, and Operations & Production. Invitation-only, closed-door, Chatham House rules.",
};

type Track = {
  badge: BadgeKey;
  heading: string;
  attends: string;
  face: string;
  gives: string;
  valueProp: string;
  output: string;
};

const TRACKS: Track[] = [
  {
    badge: "it-track",
    heading: "IT Track. For energy technology leaders.",
    attends:
      "CIOs, IT Directors, Chief Digital Officers, VP Digital Transformation. Senior technology leaders from Houston-area energy operators.",
    face: "They are being asked to govern AI adoption across their enterprises, often without clear frameworks, with limited peer data on what actually scales, and in the middle of a vendor landscape making impossible promises. They need trusted peer comparison, not more vendor presentations.",
    gives:
      "A closed, peer-governed forum where no one is selling anything. Where the collective intelligence of ten to twelve peers who have already deployed and tested AI is the entire agenda. Where the white papers produced carry their name, not a vendor's or a conference brand's.",
    valueProp:
      "The only room in Houston where CIOs govern the agenda, own the published output under their name, and are never sold to.",
    output:
      "Enterprise AI Governance Report. Peer-sourced frameworks, deployment benchmarks, and governance models from IT leaders who have actually implemented them. Distributed to World Oil, Hart Energy, E&P Magazine, and the full AiEC member community.",
  },
  {
    badge: "maintenance-track",
    heading:
      "Maintenance & Reliability Track. For the leaders responsible for keeping operations running.",
    attends:
      "VPs of Maintenance, Reliability Engineers, Plant Managers, Asset Integrity leaders from energy operators.",
    face: "Every vendor has sold them predictive maintenance AI. Almost none of the enterprise deployments have delivered what was promised. They are deeply skeptical and starved for honest peer data: what actually worked, what failed, at what scale, and what it cost.",
    gives:
      "Actual war stories from peers who have deployed, failed, and tried again, not from vendors. Benchmarking data on where AI budget in maintenance is actually producing ROI versus where it is producing slide decks. The only forum organized specifically around AI in maintenance and reliability operations.",
    valueProp:
      "The only community where you find out what predictive maintenance AI actually delivers versus what vendors claim, from the people who have deployed it, not the people selling it.",
    output:
      "Reliability AI Benchmarking Report. Peer-sourced data on AI deployment in maintenance operations, actual ROI figures, failure modes, and lessons learned.",
  },
  {
    badge: "operations-track",
    heading:
      "Operations & Production Track. For the leaders responsible for what comes out of the ground.",
    attends:
      "VPs of Operations, Production Managers, Operations Directors, Production Superintendents.",
    face: "They are the most pragmatic leaders in the building. They have survived the Big Data hype cycle, the digitalization hype cycle, and now the AI hype cycle. They want ruthless functional utility: AI that makes operations measurably better, not AI that looks good in a board presentation. Existing industry forums default to IT or executive strategy. No one is talking specifically about AI in day-to-day operational workflows.",
    gives:
      "The only forum where operations leaders talk to each other about AI workflows, not IT infrastructure, not data science, not board strategy, with no vendor agenda and no theory. Just what is working on the floor.",
    valueProp:
      "The only room where operations leaders talk to each other about AI workflows without a vendor in the room or a sales pitch on the agenda.",
    output:
      "Operational AI ROI Report. Peer-sourced data on AI in production and operations workflows, actual efficiency metrics, implementation realities, and what the board conversation should actually look like.",
  },
];

export default function TracksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tracks"
        title="Three functional communities, one operating model."
        lead="Each track is a distinct professional community organized around a shared domain, not a shared employer. They share the same operating model - invitation-only, closed-door, Chatham House rules, no vendors - but each serves a different functional community and produces different published output."
      />

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.stack}>
            {TRACKS.map((t) => (
              <div key={t.badge} className={styles.blk}>
                <FadeUp>
                  <Badge badge={t.badge} />
                </FadeUp>
                <RevealText as="h2" split="lines" stagger={0.08}>
                  {t.heading}
                </RevealText>

                <div className={styles.cols2}>
                  <div>
                    <FadeUp as="h4" className={styles.colHead} start="top 92%">
                      Who attends
                    </FadeUp>
                    <FadeUp
                      as="p"
                      className="muted"
                      start="top 92%"
                      style={{ marginBottom: 20 }}
                    >
                      {t.attends}
                    </FadeUp>
                    <FadeUp as="h4" className={styles.colHead} start="top 92%">
                      What they face
                    </FadeUp>
                    <FadeUp as="p" className="muted" start="top 92%">
                      {t.face}
                    </FadeUp>
                  </div>
                  <div>
                    <FadeUp as="h4" className={styles.colHead} start="top 92%">
                      What the AiEC gives them
                    </FadeUp>
                    <FadeUp
                      as="p"
                      className="muted"
                      start="top 92%"
                      style={{ marginBottom: 20 }}
                    >
                      {t.gives}
                    </FadeUp>
                    <FadeUp as="p" className={styles.valueProp} start="top 92%">
                      {t.valueProp}
                    </FadeUp>
                  </div>
                </div>

                <FadeUp as="p" className={`muted ${styles.output}`} start="top 94%">
                  <strong>Quarterly output:</strong> {t.output}
                </FadeUp>
              </div>
            ))}
          </div>

          <FadeUp className={styles.calloutTint} style={{ marginTop: 46 }}>
            <span className={styles.ptxt}>
              Cross-functional sessions and the Annual Summit bring the tracks
              together.
            </span>
            <span
              className="muted"
              style={{ fontSize: 14.5, maxWidth: "46ch" }}
            >
              Once individual tracks are established, quarterly cross-functional
              sessions put IT, Maintenance, and Operations leaders from different
              companies in the same room. The most valuable connections are
              between people who do not see each other every day.
            </span>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
