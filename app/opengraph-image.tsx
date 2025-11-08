import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Rapid Play - YouTube Playlist Analyzer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom, #181818, #000000)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 24 24" fill="#FF0000">
          <path d="M8 5v14l11-7z" />
          <circle cx="4" cy="12" r="2" fill="#FF4444" />
          <circle cx="4" cy="6" r="1.5" fill="#FF6666" />
          <circle cx="4" cy="18" r="1.5" fill="#FF6666" />
        </svg>
        <div
          style={{
            marginLeft: "20px",
            fontSize: "64px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #FFFFFF, #FFFFFF)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Rapid Play
        </div>
      </div>
      <div
        style={{
          fontSize: "32px",
          color: "#FFFFFF",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        YouTube Playlist Analyzer & Watch Time Calculator
      </div>
    </div>,
    {
      ...size,
    },
  )
}
