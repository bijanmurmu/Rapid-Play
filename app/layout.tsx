import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

// Using system fonts to avoid external font loading issues during build
const fontFamily = "system-ui, -apple-system, sans-serif"

export const metadata: Metadata = {
  title: "Rapid Play - YouTube Playlist Analyzer | Calculate Watch Times",
  description:
    "Analyze YouTube playlists to get detailed statistics including total duration, video count, and optimal playback times at different speeds. Save time with our free YouTube playlist calculator.",
  keywords: [
    "YouTube playlist analyzer",
    "playlist duration calculator",
    "YouTube watch time",
    "playback speed calculator",
    "video playlist statistics",
    "YouTube playlist length",
    "optimize YouTube watching",
  ],
  authors: [{ name: "Rapid Play" }],
  creator: "Rapid Play Team",
  publisher: "Rapid Play",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rapidplay.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rapid Play - YouTube Playlist Analyzer | Calculate Watch Times",
    description:
      "Analyze YouTube playlists to get detailed statistics including total duration, video count, and playback times at different speeds. Save time with our free YouTube playlist calculator.",
    type: "website",
    url: "https://rapidplay.vercel.app",
    siteName: "Rapid Play",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rapid Play - YouTube Playlist Analyzer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Play - YouTube Playlist Analyzer | Calculate Watch Times",
    description: "Analyze YouTube playlists and calculate optimal watch times at different speeds",
    images: ["/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Web Application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF0000'><path d='M8 5v14l11-7z'/><circle cx='4' cy='12' r='2' fill='%23FF4444'/><circle cx='4' cy='6' r='1.5' fill='%23FF6666'/><circle cx='4' cy='18' r='1.5' fill='%23FF6666'/></svg>"
        />
        <link rel="canonical" href="https://rapidplay.vercel.app" />
      </head>
      <body style={{ fontFamily }} className="overflow-y-auto overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
