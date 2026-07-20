import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { EOIForm } from "@/components/sections/EOIForm";
import { ClaimForm } from "@/components/sections/ClaimForm";
import { FadeUp } from "@/components/motion/FadeUp";
import { RevealText } from "@/components/motion/RevealText";
import styles from "@/components/layout/InnerPage.module.css";

export const metadata: Metadata = {
  title: "Express Interest",
  description:
    "The AiEC grows through peer invitation. Start a conversation with the AI Energy Council team, claim your member profile, or reach the communications team for media inquiries.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ claim?: string }>;
}) {
  const { claim } = await searchParams;

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Get in Touch."
        lead="The AiEC grows through peer invitation. If you have been directed here by a member, use the form below to start a conversation. If you have a media inquiry, use the media contact below."
      />

      {/* Expression of interest */}
      <EOIForm />

      {/* Profile claim + media contact */}
      <section className={styles.sectionTint} id="claim">
        <div className="wrap">
          <div className={styles.cols2} style={{ alignItems: "start" }}>
            <div>
              <FadeUp as="span" className="eyebrow">
                Member profile claim
              </FadeUp>
              <RevealText as="h2" split="lines" stagger={0.09}>
                Claim your profile.
              </RevealText>
              <FadeUp
                as="p"
                className="muted"
                style={{ margin: "14px 0 24px" }}
                start="top 92%"
              >
                For members listed in the directory. Submit your bio, headshot,
                LinkedIn, and a sentence you would like on your profile.
              </FadeUp>
              <ClaimForm claimSlug={claim} />
            </div>

            <div>
              <FadeUp as="span" className="eyebrow">
                Media contact
              </FadeUp>
              <RevealText as="h2" split="lines" stagger={0.09}>
                For journalists.
              </RevealText>
              <FadeUp
                as="p"
                className="muted"
                style={{ marginTop: 14 }}
                start="top 92%"
              >
                For editorial and media inquiries, contact the AiEC
                communications team.
              </FadeUp>

              <div className={styles.cells} style={{ marginTop: 24, borderTop: 0 }}>
                <div className={styles.cell} style={{ paddingRight: 0 }}>
                  <span className={styles.k}>Media</span>
                  <span className={styles.v}>media@aienergycouncil.com</span>
                </div>
                <div className={styles.cell} style={{ paddingRight: 0 }}>
                  <span className={styles.k}>Founding chapter</span>
                  <span className={styles.v}>Houston, Texas</span>
                </div>
              </div>

              <FadeUp
                as="p"
                className="muted"
                style={{ marginTop: 24, fontSize: 14.5 }}
                start="top 94%"
              >
                Sessions run under the Chatham House rule. The council offers
                reporters anonymized industry data, executive perspective under
                agreed terms, and coverage of the Annual Summit.
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
