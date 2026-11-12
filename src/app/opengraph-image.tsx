import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Nensi Sakhiya — Senior Software Engineer";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f2ea",
          color: "#1b1412",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.22em" }}>
          SENIOR SOFTWARE ENGINEER
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: "-0.04em" }}>
            Nensi Sakhiya
          </div>
          <div style={{ marginTop: 16, fontSize: 30, color: "#4d433e" }}>
            Full Stack · React Native · AI · DevOps
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#c45c3e" }}>
          English & Deutsch · nensi-sakhiya.vercel.app
        </div>
      </div>
    ),
    size,
  );
}
