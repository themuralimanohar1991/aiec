import { ImageResponse } from "next/og";

export const alt =
  "AI Energy Council - Houston's peer-governed executive community for AI in energy operations";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Site-wide share card, inherited by every route that does not define its own
 * (member profiles do). Satori: flexbox only, explicit display on containers.
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #14163A 0%, #16277A 55%, #2447D9 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontSize: 27,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.02em",
            }}
          >
            AI Energy Council
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1000 }}>
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.12,
            }}
          >
            Houston&apos;s peer-governed executive community for AI in energy
            operations.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#C3D0F0",
              marginTop: 22,
            }}
          >
            Invitation-only · Closed-door · Chatham House rules
          </div>
        </div>

        <div style={{ display: "flex" }}>
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
            Founding Chapter · Houston
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
