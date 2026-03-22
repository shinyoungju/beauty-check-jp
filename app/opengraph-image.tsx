import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #C9A87C 0%, #E8D5B7 50%, #C9A87C 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: "bold", color: "#fff", letterSpacing: 8 }}>
          Lueur
        </div>
        <div style={{ fontSize: 28, color: "#fff", marginTop: 20, opacity: 0.9 }}>
          リュール | 韓国コスメ・美容診断サイト
        </div>
      </div>
    ),
    { ...size }
  );
}
