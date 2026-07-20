import { ImageResponse } from "next/og";
import { MEMBERS, initials } from "@/lib/members";

export const alt = "AI Energy Council, Founding Member";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return MEMBERS.map((m) => ({ slug: m.id }));
}

/**
 * Branded per-member share card. Members have no headshots yet, so the card
 * uses the same initials treatment as the profile page rather than leaving
 * og:image empty (feedback #4).
 *
 * Note: this renders through Satori - flexbox only, no CSS grid, and every
 * multi-child element needs an explicit `display: flex`.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = MEMBERS.find((m) => m.id === slug);

  const name = member?.name ?? "AI Energy Council";
  const role = member ? `${member.title} · ${member.company}` : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #14163A 0%, #16277A 55%, #2447D9 100%)",
          padding: "68px 76px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top: wordmark */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.02em",
            }}
          >
            AI Energy Council
          </div>
        </div>

        {/* middle: initials + identity */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 148,
              height: 148,
              borderRadius: 74,
              background: "rgba(255,255,255,0.12)",
              border: "3px solid rgba(127,227,236,0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 58,
              fontWeight: 700,
              color: "#FFFFFF",
              marginRight: 40,
            }}
          >
            {member ? initials(member.name) : "AiEC"}
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 780 }}>
            <div
              style={{
                fontSize: 62,
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              {name}
            </div>
            {role && (
              <div
                style={{
                  fontSize: 29,
                  color: "#C3D0F0",
                  marginTop: 14,
                  lineHeight: 1.3,
                }}
              >
                {role}
              </div>
            )}
          </div>
        </div>

        {/* bottom: founding-member tag */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#7FE3EC",
            }}
          >
            Founding Member · Houston Chapter
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
