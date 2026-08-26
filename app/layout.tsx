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
    // Core & Primary
    "YouTube playlist analyzer",
    "playlist duration calculator",
    "YouTube watch time",
    "playback speed calculator",
    "video playlist statistics",
    "YouTube playlist length",
    "optimize YouTube watching",
    "calculate youtube playlist duration",
    
    // Questions / Long-tail
    "how long is this youtube playlist",
    "how much time to finish youtube playlist",
    "what is the total time of youtube playlist",
    "can you see how long a youtube playlist is",
    
    // Misspellings & Variations (The "wrong" but searched ones)
    "youtub playlist calculator",
    "youtube playist time",
    "yt playlist length",
    "utube playlist analyzer",
    "youtube speed calc",
    "play list duration",
    "youtube time tracking",
    
    // Adjacent & Broad Use Cases
    "youtube study tracker",
    "youtube binge calculator",
    "youtube learning time",
    "course duration calculator",
    "tutorial length estimator",
    "study time calculator youtube",
    "youtube marathon",
    "video speed controller time",
    
    // Tools & Tech terms
    "free youtube tool",
    "youtube api calculator",
    "nextjs youtube app",
    "playlist data extractor",
    "youtube stats viewer",
    
    // Productivity & Time Management (Broad / Tangential)
    "productivity time calculator",
    "time management for video courses",
    "speed reading for videos",
    "pomodoro youtube tracker",
    "efficient video watching",
    "save time watching youtube",
    
    // Random / Niche
    "podcast length calculator",
    "audiobook speed calculator",
    "music playlist duration",
    "gaming walkthrough time",
    "youtube series length"
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
  openGraph: {
    title: "Rapid Play - YouTube Playlist Analyzer | Calculate Watch Times",
    description:
      "Analyze YouTube playlists to get detailed statistics including total duration, video count, and playback times at different speeds. Save time with our free YouTube playlist calculator.",
    type: "website",
    url: "https://rapidplay.vercel.app",
    siteName: "Rapid Play",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Play - YouTube Playlist Analyzer | Calculate Watch Times",
    description: "Analyze YouTube playlists and calculate optimal watch times at different speeds",
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
  generator: "v0.app",
}
export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
      </head>
      <body style={{ fontFamily }} className="overflow-y-auto overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
