import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/PageHeader";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import styles from "@/components/layout/InnerPage.module.css";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Four categories of peer-sourced published intelligence each quarter, drawn from the AiEC's closed-door IT, Maintenance & Reliability, and Operations & Production sessions.",
};

const REPORTS = [
  {
    title: "Enterprise AI Governance Report",
    meta: "IT Track · Quarterly",
    icon: "/img/enterprise_ai_governance_report.svg",
    abstract:
      "Peer-sourced frameworks, deployment benchmarks, and AI governance models from energy IT leaders who have actually implemented them. Distributed to World Oil, Hart Energy, E&P Magazine, and the full AiEC member community.",
    first: "First edition: Q4 2027 / Q1 2028",
  },
  {
    title: "Reliability AI Benchmarking Report",
    meta: "Maintenance & Reliability · Quarterly",
    icon: "/img/reliability_ai_benchmarking_report.svg",
    abstract:
      "Peer-sourced data on AI deployment in maintenance operations: actual ROI figures, failure modes, and lessons learned from leaders who have deployed, failed, and tried again.",
    first: "First edition: Q4 2027 / Q1 2028",
  },
  {
    title: "Operational AI ROI Report",
    meta: "Operations & Production · Quarterly",
    icon: "/img/operational_ai_roi_report.svg",
    abstract:
      "Peer-sourced data on AI in production and operations workflows: actual efficiency metrics, implementation realities, and what the board conversation should actually look like.",
    first: "First edition: Q4 2027 / Q1 2028",
  },
  {
    title: "Annual State of AI in Energy Report",
    meta: "Full Council · Annual",
    icon: "/img/state_of_ai_in_energy_report.svg",
    abstract:
      "The AiEC's flagship publication. Synthesizes the year's track intelligence, advisory council insights, and ecosystem trends into a state-of-the-industry document on AI in energy operations.",
    first: "First edition: Annual Summit 2028",
  },
];

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Publications."
        lead="The AI Energy Council produces four categories of published intelligence each quarter, sourced from the closed-door sessions of its IT, Maintenance & Reliability, and Operations & Production tracks. The first quarterly reports will be published in Q4 2027 or Q1 2028, following the inaugural sessions beginning July 2027."
      />

      <section className={styles.section}>
        <div className="wrap">
          <StaggerGroup
            className={styles.reports}
            itemSelector="[data-stagger-item]"
            y={28}
            duration={0.6}
            stagger={0.09}
          >
            {REPORTS.map((r) => (
              <article key={r.title} className={styles.report} data-stagger-item>
                <span className={styles.reportIcon} aria-hidden="true">
                  <Image src={r.icon} alt="" width={30} height={30} />
                </span>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.abstract}</p>
                  <span className={styles.soon}>{r.first}</span>
                </div>
                <span className={styles.reportMeta}>{r.meta}</span>
              </article>
            ))}
          </StaggerGroup>

          <FadeUp as="p" className="muted" style={{ marginTop: 34, maxWidth: "68ch" }}>
            Reports are published under the members&rsquo; names, not under
            Kissflow&rsquo;s, and distributed through editorial relationships
            with World Oil, Hart Energy, and E&amp;P Magazine.
          </FadeUp>
        </div>
      </section>
    </>
  );
}
