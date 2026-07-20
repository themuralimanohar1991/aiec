import { MemberCard } from "@/components/ui/MemberCard";
import { MEMBERS } from "@/lib/members";

export const metadata = {
  title: "The Council",
  description:
    "The AiEC Advisory Council: founding members from Houston's largest energy operators who lend their name, credibility, and peer network to the institution. Membership is by invitation only.",
};

/**
 * PHASE 2 STUB — full member directory. Reuses MemberCard. Animations and the
 * reserved→claim flow land in a later phase; this exists so Home links resolve.
 */
export default function MembersPage() {
  return (
    <section id="members" style={{ paddingTop: "clamp(120px,15vw,180px)" }}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">The Council</span>
          <h1 style={{ margin: "14px 0 18px" }}>The Council.</h1>
          <p className="lead muted" style={{ maxWidth: "74ch" }}>
            Founding members who lend their name, their credibility, and their
            peer network to the institution. Membership is by invitation only.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))",
            gap: "18px",
          }}
        >
          {MEMBERS.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
