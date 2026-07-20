import { notFound } from "next/navigation";
import Link from "next/link";
import { MEMBERS, initials } from "@/lib/members";
import { SITE_URL } from "@/lib/site";
import { BadgeRow } from "@/components/ui/Badge";
import { ShareRow } from "@/components/ui/ShareRow";
import styles from "./profile.module.css";

export function generateStaticParams() {
  return MEMBERS.map((m) => ({ slug: m.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = MEMBERS.find((m) => m.id === slug);
  if (!member) return { title: "Member not found" };

  const url = `${SITE_URL}/members/${member.id}`;
  const title = `${member.name} - AI Energy Council, Founding Member`;
  const description = `${member.name}, ${member.title} at ${member.company}. Founding Member, AI Energy Council, Houston Chapter.`;

  return {
    // browser tab keeps the shorter form; OG carries the full title
    title: `${member.name} - Founding Member`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "profile" as const,
      siteName: "AI Energy Council",
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
    },
  };
}

/**
 * Individual member profile, "reserved" (unclaimed) state.
 *
 * The share row and claim prompt are the digital hook: the URL a member puts
 * in their LinkedIn bio, plus the path for them to take ownership of the page.
 * The email-OTP claim + self-edit flow lands in a later phase.
 */
export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = MEMBERS.find((m) => m.id === slug);
  if (!member) notFound();

  const profileUrl = `${SITE_URL}/members/${member.id}`;

  return (
    <section className={styles.section}>
      <div className={`wrap ${styles.inner}`}>
        <BadgeRow badges={member.badges} />

        <div aria-hidden="true" className={styles.mono}>
          {initials(member.name)}
        </div>

        <h1 className={styles.name}>{member.name}</h1>
        <div className={`lead ${styles.role}`}>
          {member.title}&nbsp; | &nbsp;{member.company}
        </div>

        <div className={styles.reserved}>
          <p>This profile page has been reserved for {member.name}.</p>
          <p>
            {member.name} is a founding member of the AI Energy Council, Houston
            Chapter.
          </p>
          <p>Profile details coming soon.</p>
        </div>

        <ShareRow url={profileUrl} name={member.name} />

        <div className={styles.foundtag}>
          AI Energy Council, Founding Member · Houston Chapter
        </div>

        <p className={styles.claimline}>
          Are you {member.name}?{" "}
          <Link href={`/contact?claim=${member.id}#claim`} className={styles.claimlink}>
            Claim this profile →
          </Link>
        </p>

        <div className={styles.back}>
          <Link className="btn btn-ghost" href="/members">
            ← Back to Members
          </Link>
        </div>
      </div>
    </section>
  );
}
