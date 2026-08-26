"use client"

import { useState } from "react"
import PlaylistAnalyzer from "@/components/playlist-analyzer"
import Layout from "@/components/layout"
import Script from "next/script"
import { Clock, BookOpen, Zap, Shield } from "lucide-react"

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
      <div className="flex flex-col min-h-screen">
        {showInfoSections && (
          <header className="w-full border-b-2 border-white/10 pt-20 pb-12 mb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                RAPID PLAY <br />
                <span className="text-red-600">ANALYZER.</span>
              </h1>
              <p className="mt-8 text-xl font-mono text-white/50 max-w-2xl uppercase tracking-widest leading-relaxed">
                Calculate precise watch times. Optimize playback speed. Extract data instantly.
              </p>
            </div>
          </header>
        )}
        
        <section aria-labelledby="analyzer-section" className="w-full flex justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PlaylistAnalyzer onAnalysisStarted={handleAnalysisStarted} onShowInfo={handleShowInfo} />
        </section>

        {showInfoSections && (
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-32 border-t-2 border-white/10 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* How It Works Block */}
              <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">System Functions</h2>
                <div className="space-y-0 border-y border-white/10">
                  
                  <div className="group border-b border-white/10 py-6 flex items-start gap-6 hover:bg-white/5 transition-colors">
                    <div className="font-mono text-red-600 font-bold text-xl">01</div>
                    <div>
                      <h3 className="font-bold text-white text-lg uppercase tracking-wider mb-2">Playlist Statistics</h3>
                      <p className="text-white/60 text-sm font-mono leading-relaxed">
                        Total videos, unavailable videos, average length, and absolute total duration calculated in milliseconds.
                      </p>
                    </div>
                  </div>

                  <div className="group border-b border-white/10 py-6 flex items-start gap-6 hover:bg-white/5 transition-colors">
                    <div className="font-mono text-red-600 font-bold text-xl">02</div>
                    <div>
                      <h3 className="font-bold text-white text-lg uppercase tracking-wider mb-2">Time Calculator</h3>
                      <p className="text-white/60 text-sm font-mono leading-relaxed">
                        Algorithmic projection of time saved across standard and custom playback multipliers.
                      </p>
                    </div>
                  </div>

                  <div className="group py-6 flex items-start gap-6 hover:bg-white/5 transition-colors">
                    <div className="font-mono text-red-600 font-bold text-xl">03</div>
                    <div>
                      <h3 className="font-bold text-white text-lg uppercase tracking-wider mb-2">Data Selection</h3>
                      <p className="text-white/60 text-sm font-mono leading-relaxed">
                        Isolate specific tracks. Calculate targeted watch times for subsets of large playlists.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Why Use Block */}
              <div>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">Core Advantages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
                  
                  <div className="bg-black p-8 group hover:bg-white/5 transition-colors">
                    <Clock className="h-8 w-8 text-red-600 mb-6" strokeWidth={1.5} />
                    <h3 className="font-bold text-white text-lg uppercase tracking-wider mb-2">Save Time</h3>
                    <p className="text-white/60 text-sm font-mono leading-relaxed">Exact time-savings calculated instantly.</p>
                  </div>

                  <div className="bg-black p-8 group hover:bg-white/5 transition-colors">
                    <BookOpen className="h-8 w-8 text-red-600 mb-6" strokeWidth={1.5} />
                    <h3 className="font-bold text-white text-lg uppercase tracking-wider mb-2">Plan Learning</h3>
                    <p className="text-white/60 text-sm font-mono leading-relaxed">Structure educational content consumption.</p>
                  </div>

                  <div className="bg-black p-8 group hover:bg-white/5 transition-colors">
                    <Zap className="h-8 w-8 text-red-600 mb-6" strokeWidth={1.5} />
                    <h3 className="font-bold text-white text-lg uppercase tracking-wider mb-2">Zero Latency</h3>
                    <p className="text-white/60 text-sm font-mono leading-relaxed">No accounts. No databases. Immediate execution.</p>
                  </div>

                  <div className="bg-black p-8 group hover:bg-white/5 transition-colors">
                    <Shield className="h-8 w-8 text-red-600 mb-6" strokeWidth={1.5} />
                    <h3 className="font-bold text-white text-lg uppercase tracking-wider mb-2">Secure</h3>
                    <p className="text-white/60 text-sm font-mono leading-relaxed">Zero tracking. Pure client-side calculation.</p>
                  </div>

                </div>
              </div>

            </div>
          </section>
        )}

        {/* SEO Text Content Block */}
        {showInfoSections && (
          <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 border-t-2 border-white/10 pt-16">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8">Mastering Your Video Time</h2>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-red-600 uppercase tracking-wider mb-4">What is a YouTube Playlist Analyzer?</h3>
                  <p className="text-white/70 font-mono leading-relaxed text-sm">
                    A YouTube playlist analyzer is a specialized tool designed to calculate the exact duration of multiple videos grouped together. When you have a massive course, a tutorial series, or a music playlist, YouTube doesn't natively tell you the total runtime. Our calculator extracts the metadata from the playlist URL, excludes any hidden or deleted videos, and gives you the absolute total watch time down to the second. This takes the guesswork out of your viewing schedule.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-600 uppercase tracking-wider mb-4">How Does Playback Speed Affect Study Time?</h3>
                  <p className="text-white/70 font-mono leading-relaxed text-sm">
                    Many students and professionals use playback speed controllers to consume educational content faster. Watching a 10-hour course at 1.5x speed doesn't just save a few minutes; it reduces the total time to roughly 6 hours and 40 minutes. By calculating your youtube playlist duration at custom speeds (1.25x, 1.5x, 1.75x, and 2x), you can perfectly plan your study sessions, pomodoro timers, and learning marathons with mathematical precision.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-red-600 uppercase tracking-wider mb-4">Why Calculate Your YouTube Watch Time?</h3>
                  <p className="text-white/70 font-mono leading-relaxed text-sm">
                    Time management is critical for productivity. Whether you want to know how long is this youtube playlist to finish it over the weekend, or you need a course duration calculator to pace your semester, knowing the exact time commitment allows you to be an efficient video watcher. Instead of blindly starting a playlist and hoping you have enough time, you can now structure your learning time and save hours of your life watching youtube content effectively.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* JSON-LD Structured Data */}
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
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
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do I calculate the length of a YouTube playlist?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Simply paste the YouTube playlist URL into Rapid Play. The analyzer will instantly calculate the total duration, total video count, and show you exactly how much time it takes to watch at 1.25x, 1.5x, 1.75x, and 2x speeds."
                  }
                },
                {
                  "@type": "Question",
                  name: "Can I calculate the time for only specific videos in a playlist?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Rapid Play allows you to input a custom range (e.g., videos 1 to 10) so you only calculate the watch time for the specific sections you plan to watch."
                  }
                },
                {
                  "@type": "Question",
                  name: "Does it count unavailable or deleted videos?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No. The system automatically detects unavailable, hidden, or deleted videos and excludes them from the total watch time calculation to give you a 100% accurate duration."
                  }
                }
              ]
            }
          ]),
        }}
      />
    </Layout>
  )
}
