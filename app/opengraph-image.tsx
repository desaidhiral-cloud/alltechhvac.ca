import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Alltech Building Services. Smart solutions, comfort that lasts.";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#071833",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
          <div style={{ width: "22px", height: "46px", background: "#7EB6EA", borderRadius: "3px" }} />
          <div style={{ width: "28px", height: "72px", background: "#ffffff", borderRadius: "3px" }} />
          <div style={{ width: "22px", height: "54px", background: "#1AA3E8", borderRadius: "3px" }} />
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>
          Smart solutions. Comfort that lasts.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#7FD4FB", letterSpacing: 4 }}>
          ALLTECH BUILDING SERVICES · GTA · 289-233-7001
        </div>
      </div>
    ),
    { ...size },
  );
}
