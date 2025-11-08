"use client"

import { useState } from "react"
import PlaylistAnalyzer from "@/components/playlist-analyzer"
import Layout from "@/components/layout"
import Script from "next/script"

export default function Home() {
  const [showInfoSections, setShowInfoSections] = useState(true)

  const handleAnalysisStarted = () => {
    setShowInfoSections(false)
  }

  const handleShowInfo = () => {
    setShowInfoSections(true)
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          YouTube Playlist Analyzer & Watch Time Calculator
        </h1>
        <p className="text-zinc-400 text-center mb-8 max-w-md">
          Get detailed insights about playlist duration, video count, and optimal playback speeds to save time
        </p>
        <section aria-labelledby="analyzer-section" className="w-full max-w-4xl flex justify-center">
          <PlaylistAnalyzer onAnalysisStarted={handleAnalysisStarted} onShowInfo={handleShowInfo} />
        </section>

        {showInfoSections && (
          <>
            <section className="mt-16 max-w-3xl text-center px-4 animate-fadeIn">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-zinc-300 mb-6">
                Simply paste any public YouTube playlist URL and our tool will analyze it to show you:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                  <h3 className="font-semibold text-white mb-2">Playlist Statistics</h3>
                  <p className="text-zinc-400 text-sm">
                    Total videos, unavailable videos, average length, and total duration
                  </p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                  <h3 className="font-semibold text-white mb-2">Watch Time Calculator</h3>
                  <p className="text-zinc-400 text-sm">See how much time you'll save by watching at different speeds</p>
                </div>
                <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800">
                  <h3 className="font-semibold text-white mb-2">Custom Speed Options</h3>
                  <p className="text-zinc-400 text-sm">Calculate watch time for any custom playback speed you prefer</p>
                </div>
              </div>
            </section>

            <section className="mt-16 max-w-3xl text-center px-4 animate-fadeIn">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Why Use Rapid Play?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="flex items-start">
                  <div className="bg-red-600/20 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Save Time</h3>
                    <p className="text-zinc-400 text-sm">
                      Quickly see how much time you'll save by watching at different speeds
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600/20 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Plan Your Learning</h3>
                    <p className="text-zinc-400 text-sm">
                      Know exactly how long a course or playlist will take to complete
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600/20 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Fast & Free</h3>
                    <p className="text-zinc-400 text-sm">
                      No sign-up required, instant results, completely free to use
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-600/20 p-2 rounded-full mr-3">
                    <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Privacy Focused</h3>
                    <p className="text-zinc-400 text-sm">We don't store your playlists or personal information</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>

      {/* JSON-LD Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Rapid Play - YouTube Playlist Analyzer",
            url: "https://rapidplay.vercel.app",
            description:
              "Analyze YouTube playlists to get detailed statistics including total duration, video count, and playback times at different speeds.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
            featureList: [
              "YouTube playlist analysis",
              "Video count statistics",
              "Total duration calculation",
              "Playback speed time calculation",
              "Custom speed options",
            ],
            screenshot: "https://rapidplay.vercel.app/og-image.png",
            creator: {
              "@type": "Organization",
              name: "Rapid Play Team",
            },
          }),
        }}
      />
    </Layout>
  )
}
