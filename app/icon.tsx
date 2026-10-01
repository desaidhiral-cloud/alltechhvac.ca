import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "64px",
          height: "64px",
          background: "#071833",
          borderRadius: "14px",
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
            gap: "3px",
            marginBottom: "12px",
          }}
        >
          <div style={{ width: "10px", height: "20px", background: "#7EB6EA", borderRadius: "2px" }} />
          <div style={{ width: "13px", height: "34px", background: "#ffffff", borderRadius: "2px" }} />
          <div style={{ width: "10px", height: "24px", background: "#1AA3E8", borderRadius: "2px" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "12px",
            width: "8px",
            height: "8px",
            borderRadius: "99px",
            background: "#49C4F3",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
