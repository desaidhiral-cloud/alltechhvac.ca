import { ImageResponse } from "next/og";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "192px",
          height: "192px",
          background: "#071833",
          borderRadius: "42px",
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
            gap: "9px",
            marginBottom: "36px",
          }}
        >
          <div style={{ width: "30px", height: "60px", background: "#7EB6EA", borderRadius: "4px" }} />
          <div style={{ width: "39px", height: "102px", background: "#ffffff", borderRadius: "4px" }} />
          <div style={{ width: "30px", height: "72px", background: "#1AA3E8", borderRadius: "4px" }} />
        </div>
        <div
          style={{
            position: "absolute",
            top: "30px",
            right: "36px",
            width: "24px",
            height: "24px",
            borderRadius: "99px",
            background: "#49C4F3",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
