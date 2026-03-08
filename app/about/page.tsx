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
      <div className="flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">About Rapid Play</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-zinc-300 mb-6">
              Rapid Play is a free tool designed to help YouTube users analyze playlists and optimize their watching
              experience. Our mission is to help people save time and plan their learning more effectively.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Story</h2>
            <p className="text-zinc-300 mb-4">
              Rapid Play was created by a team of developers who were frustrated with not knowing how long it would take
              to complete online courses and educational playlists on YouTube. We wanted a simple way to calculate the
              total duration and see how much time we could save by watching at different speeds.
            </p>
            <p className="text-zinc-300 mb-4">
              After searching for a solution and finding nothing that met our needs, we decided to build our own tool.
              Rapid Play was born as a simple, fast, and free way to analyze YouTube playlists.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">How It Works</h2>
            <p className="text-zinc-300 mb-4">
              Rapid Play uses the YouTube Data API to fetch information about playlists and videos. We calculate the
              total duration, average video length, and provide estimates for how long it would take to watch the entire
              playlist at different speeds.
            </p>
            <p className="text-zinc-300 mb-4">
              Our tool is designed to be simple and fast. Just paste a YouTube playlist URL, and we'll do the rest. No
              sign-up required, no data stored, and completely free to use.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Use Cases</h2>
            <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-2">
              <li>Students planning their study schedule for online courses</li>
              <li>Professionals trying to fit educational content into their busy schedules</li>
              <li>Content creators analyzing their own playlists</li>
              <li>Anyone who wants to know how long a playlist will take to watch</li>
              <li>People who watch videos at increased speeds to save time</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Technology</h2>
            <p className="text-zinc-300 mb-4">
              Rapid Play is built with modern web technologies including Next.js, React, TypeScript, and Tailwind CSS.
              We use the YouTube Data API to fetch playlist data and perform calculations server-side for optimal
              performance.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-zinc-300 mb-4">
              Have questions, suggestions, or feedback? We'd love to hear from you! You can reach us at{" "}
              <a href="mailto:bijanmurmu.projects@gmail.com" className="text-red-400 hover:text-red-300">
                bijanmurmu.projects@gmail.com
              </a>{" "}
              or visit our{" "}
              <a href="https://github.com/bijanmurmu/Rapid-Play" className="text-red-400 hover:text-red-300">
                GitHub repository
              </a>
              .
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Try Rapid Play Now
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
