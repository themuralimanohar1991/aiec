import Image from "next/image";
import { RevealText } from "@/components/motion/RevealText";
import { FadeUp } from "@/components/motion/FadeUp";
import { StaggerGroup } from "@/components/motion/StaggerGroup";
import { MEMBERS } from "@/lib/members";
import styles from "./Faces.module.css";

/**
 * §10 FACES OF THE COUNCIL — Nixtio's "Founders" quatrefoil portrait row.
 * 4 lead Advisory members shown larger as clover-masked studio portraits with
 * their names below (offset arrangement per the reference).
 */
export function Faces() {
  const leads = MEMBERS.slice(0, 4);
  return (
    <section className={styles.section}>
      {/* clover / quatrefoil clip-path definition (shared by all portraits) */}
      <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
        <clipPath id="quatrefoil" clipPathUnits="objectBoundingBox">
          <path d="M0.5,0 C0.72,0 0.85,0.13 0.85,0.32 C1,0.32 1,0.5 1,0.5 C1,0.72 0.87,0.85 0.68,0.85 C0.68,1 0.5,1 0.5,1 C0.28,1 0.15,0.87 0.15,0.68 C0,0.68 0,0.5 0,0.5 C0,0.28 0.13,0.15 0.32,0.15 C0.32,0 0.5,0 0.5,0 Z" />
        </clipPath>
      </svg>

      <div className="wrap">
        <FadeUp as="span" className="eyebrow">
          Faces of the Council
        </FadeUp>
        <RevealText as="h2" split="lines" stagger={0.09} className={styles.head}>
          The founding members of the AI Energy Council.
        </RevealText>

        <StaggerGroup
          className={styles.row}
          itemSelector="[data-stagger-item]"
          y={36}
          scaleFrom={0.94}
          duration={0.8}
          stagger={0.1}
        >
          {leads.map((m, i) => (
            <figure
              key={m.id}
              className={`${styles.card} ${i % 2 === 1 ? styles.offset : ""}`}
              data-stagger-item
            >
              <div className={styles.portrait}>
                {m.headshot && (
                  <Image
                    src={`/img/members/${m.headshot}`}
                    alt={m.name}
                    fill
                    sizes="(max-width:768px) 44vw, 240px"
                    className={styles.photo}
                  />
                )}
              </div>
              <figcaption className={styles.cap}>
                <span className={styles.name}>{m.name}</span>
                <span className={styles.role}>
                  {m.title}, {m.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
