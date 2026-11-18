import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Preview image shown when the site link is shared (WhatsApp, LinkedIn, X, Slack…).
export const alt = "GenovaaTech Labs – Embedded Systems • IoT • Edge AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 64,
          padding: 80,
          background: "#0B1120",
          backgroundImage:
            "radial-gradient(circle at 25% 50%, rgba(0,191,255,0.25), transparent 55%), linear-gradient(90deg, rgba(0,191,255,0.08) 1px, transparent 1px), linear-gradient(rgba(0,191,255,0.08) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          color: "white",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={300} height={250} alt="" />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#00BFFF" }}>GenovaaTech Labs</div>
          <div style={{ fontSize: 40, marginTop: 16 }}>Powering Embedded Intelligence</div>
          <div style={{ fontSize: 28, marginTop: 32, color: "#9CA3AF" }}>
            Embedded Systems • IoT • Edge AI • RTOS • FPGA
          </div>
          <div style={{ fontSize: 28, marginTop: 8, color: "#9CA3AF" }}>
            Projects • Consulting • Training
          </div>
        </div>
      </div>
    ),
    size,
  );
}
