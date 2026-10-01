import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "180px",
          height: "180px",
          background: "#071833",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "8px",
            marginBottom: "36px",
          }}
        >
          <div style={{ width: "28px", height: "58px", background: "#7EB6EA", borderRadius: "4px" }} />
          <div style={{ width: "36px", height: "96px", background: "#ffffff", borderRadius: "4px" }} />
          <div style={{ width: "28px", height: "70px", background: "#1AA3E8", borderRadius: "4px" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "28px",
            right: "36px",
            width: "18px",
            height: "18px",
            borderRadius: "99px",
            background: "#49C4F3",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
