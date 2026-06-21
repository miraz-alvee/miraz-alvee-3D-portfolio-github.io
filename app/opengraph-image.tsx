import { ImageResponse } from "next/og";

import { links } from "@/config";

export const runtime = "edge";

export const alt = `${links.ownerName} | Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const Image = () => {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 25% 20%, #1b2735 0%, #000319 60%)",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#a78bfa",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          Dynamic Web Magic
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "white",
            marginTop: 24,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Transforming Concepts into Seamless User Experiences
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#cbacf9",
            marginTop: 40,
          }}
        >
          {links.ownerName} — Full Stack Developer
        </div>
      </div>
    ),
    { ...size }
  );
};

export default Image;
