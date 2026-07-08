import { notFound } from "next/navigation";
import Link from "next/link";
import { MEMBERS, initials } from "@/lib/members";
import { BadgeRow } from "@/components/ui/Badge";

export function generateStaticParams() {
  return MEMBERS.map((m) => ({ slug: m.id }));
}

/**
 * PHASE 2 STUB — individual member profile in the "reserved" state, matching
 * the client mockup. The email-OTP claim + self-edit flow lands in a later
 * phase; this renders the pre-claim stub so Home/directory links resolve.
 */
export default async function MemberProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = MEMBERS.find((m) => m.id === slug);
  if (!member) notFound();

  return (
    <section style={{ paddingTop: "clamp(120px,15vw,180px)" }}>
      <div className="wrap" style={{ maxWidth: "720px" }}>
        <BadgeRow badges={member.badges} />
        <div
          aria-hidden="true"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg,var(--blue),var(--blue-soft))",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-serif)",
            fontSize: "2.4rem",
            fontWeight: 600,
            margin: "22px 0 26px",
          }}
        >
          {initials(member.name)}
        </div>
        <h1 style={{ marginBottom: 8 }}>{member.name}</h1>
        <div
          className="lead"
          style={{ marginBottom: 8 }}
        >{`${member.title}  |  ${member.company}`}</div>

        <div
          style={{
            background: "var(--mist)",
            border: "1px solid var(--line)",
            borderRadius: 14,
            padding: "28px 30px",
            margin: "28px 0",
          }}
        >
          <p className="muted" style={{ marginBottom: 8 }}>
            This profile page has been reserved for {member.name}.
          </p>
          <p className="muted" style={{ marginBottom: 8 }}>
            {member.name} is a founding member of the AI Energy Council, Houston
            Chapter.
          </p>
          <p className="muted">Profile details coming soon.</p>
        </div>

        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--blue-soft)",
            marginBottom: 24,
          }}
        >
          AI Energy Council, Founding Member · Houston Chapter
        </div>

        <Link className="btn btn-ghost" href="/members">
          ← Back to Members
        </Link>
      </div>
    </section>
  );
}
