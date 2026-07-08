import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { TrackCard } from "@/components/ui/TrackCard";
import { Button } from "@/components/ui/Button";
import styles from "./TracksStat.module.css";

/**
 * §5 THREE TRACKS — mapped onto Nixtio's stat-statement + floating tiles.
 * A giant stat-statement headline with big inline numbers, then the three
 * track tiles drop in with a stagger (spec value-prop copy verbatim).
 */
export function TracksStat() {
  return (
    <section id="tracks" className={styles.section}>
      <div className="wrap">
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <FadeUp as="span" className="eyebrow">
              Three functional tracks
            </FadeUp>
            <RevealText
              as="h2"
              split="words"
              stagger={0.06}
              className={styles.stat}
            >
              3 functional tracks. 1 operating model.
            </RevealText>
          </div>
          <FadeUp as="p" className={`muted ${styles.clarifier}`} start="top 88%">
            Organized by professional domain, not by employer. Same operating
            model - invitation-only, closed-door, Chatham House rules, no
            vendors. Different community in each room.
          </FadeUp>
        </div>

        <StaggerGroup
          className={styles.grid}
          itemSelector="[data-stagger-item]"
          scatter
          y={40}
          scaleFrom={0.96}
          duration={0.8}
          stagger={0.12}
        >
          <TrackCard variant="it" tag="IT Track" heading="For energy technology leaders.">
            For CIOs, IT Directors, and Digital Transformation Leads. The only
            room in Houston where energy technology leaders govern the agenda,
            own the published output under their name, and are never sold to.
          </TrackCard>
          <TrackCard
            variant="mr"
            tag="Maintenance & Reliability"
            heading="For the leaders keeping operations running."
          >
            For VPs of Maintenance, Reliability Engineers, and Plant Managers.
            The only community where you find out what predictive maintenance AI
            actually delivers versus what vendors claim - from people
            who&rsquo;ve deployed it, not the people selling it.
          </TrackCard>
          <TrackCard
            variant="op"
            tag="Operations & Production"
            heading="For the leaders responsible for what comes out of the ground."
          >
            For VPs of Operations, Production Managers, and Operations
            Directors. The only room where operations leaders talk to each other
            about AI workflows without a vendor in the room or a sales pitch on
            the agenda.
          </TrackCard>
        </StaggerGroup>

        <FadeUp className={styles.cta}>
          <Button href="/tracks" variant="ghost" arrow>
            Explore the tracks
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
