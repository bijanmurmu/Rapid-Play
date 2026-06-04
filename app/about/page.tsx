import type { Metadata } from "next"
import Layout from "@/components/layout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Rapid Play | YouTube Playlist Analyzer",
  description:
    "Learn about Rapid Play, the free YouTube playlist analyzer tool that helps you calculate watch times at different playback speeds.",
}

export default function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="border-b-4 border-red-600 pb-12 mb-16 pt-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">ABOUT RAPID PLAY //</h1>
          <p className="text-white/40 font-mono uppercase tracking-widest text-sm md:text-base">
            SYSTEM INFORMATION & ORIGIN
          </p>
        </div>

        <div className="space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">01. MISSION PARAMETERS</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                Rapid Play is a free tool designed to help YouTube users analyze playlists and optimize their watching
                experience. Our mission is to help people save time and plan their learning more effectively.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">02. ORIGIN STORY</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed mb-6">
                Rapid Play was created by a team of developers who were frustrated with not knowing how long it would take
                to complete online courses and educational playlists on YouTube. We wanted a simple way to calculate the
                total duration and see how much time we could save by watching at different speeds.
              </p>
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                After searching for a solution and finding nothing that met our needs, we decided to build our own tool.
                Rapid Play was born as a simple, fast, and free way to analyze YouTube playlists.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">03. SYSTEM ARCHITECTURE</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed mb-6">
                Rapid Play uses the YouTube Data API to fetch information about playlists and videos. We calculate the
                total duration, average video length, and provide estimates for how long it would take to watch the entire
                playlist at different speeds.
              </p>
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                Our tool is designed to be simple and fast. Just paste a YouTube playlist URL, and we'll do the rest. No
                sign-up required, no data stored, and completely free to use.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">04. TARGET PROTOCOLS</h2>
            <div className="md:col-span-8">
              <ul className="list-none text-white/70 font-mono text-base space-y-4 border-l-2 border-red-600 pl-6">
                <li><span className="text-white font-bold mr-3">{">"}</span>Students planning their study schedule for online courses</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Professionals trying to fit educational content into their busy schedules</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Content creators analyzing their own playlists</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Anyone who wants to know how long a playlist will take to watch</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>People who watch videos at increased speeds to save time</li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">05. TECHNOLOGY STACK</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                Rapid Play is built with modern web technologies including Next.js, React, TypeScript, and Tailwind CSS.
                We use the YouTube Data API to fetch playlist data and perform calculations server-side for optimal
                performance.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">06. COMMUNICATION LINK</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                Have questions, suggestions, or feedback? We'd love to hear from you! You can reach us at{" "}
                <a href="mailto:bijanmurmu.projects@gmail.com" className="text-red-500 hover:text-white underline decoration-white/30 hover:decoration-red-500 underline-offset-4 transition-colors">
                  bijanmurmu.projects@gmail.com
                </a>{" "}
                or visit our{" "}
                <a href="https://github.com/bijanmurmu/Rapid-Play" className="text-red-500 hover:text-white underline decoration-white/30 hover:decoration-red-500 underline-offset-4 transition-colors">
                  GitHub repository
                </a>
                .
              </p>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-8 border-t-4 border-red-600 text-left">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-16 px-10 bg-white hover:bg-red-600 text-black hover:text-white font-black text-lg uppercase tracking-widest transition-colors"
          >
            INITIALIZE SCAN
          </Link>
        </div>
      </div>
    </Layout>
  )
}
