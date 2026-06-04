import type { Metadata } from "next"
import Layout from "@/components/layout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Rapid Play",
  description:
    "Terms of service for Rapid Play, the YouTube playlist analyzer tool. Learn about the terms and conditions for using our service.",
}

export default function TermsPage() {
  return (
    <Layout>
      <div className="flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="border-b-4 border-red-600 pb-12 mb-16 pt-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">TERMS OF SERVICE //</h1>
          <p className="text-white/40 font-mono uppercase tracking-widest text-sm md:text-base">
            LAST UPDATED: JUNE 4, 2026
          </p>
        </div>

        <div className="space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">01. ACCEPTANCE OF TERMS</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                By accessing and using Rapid Play ("the Service"), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">02. DESCRIPTION OF SERVICE</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                Rapid Play is a free web-based tool that analyzes YouTube playlists to provide statistics including total
                duration, video count, and calculated watch times at different playback speeds. The service uses the
                YouTube Data API to fetch publicly available playlist information.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">03. USE LICENSE</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed mb-6">
                Permission is granted to temporarily use Rapid Play for personal, non-commercial transitory viewing only.
                This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-none text-white/70 font-mono text-base space-y-4 border-l-2 border-red-600 pl-6">
                <li><span className="text-white font-bold mr-3">{">"}</span>Modify or copy the materials</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Use the materials for any commercial purpose or for any public display</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Attempt to reverse engineer any software contained on the website</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">04. USER RESPONSIBILITIES</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed mb-6">
                You agree to use the Service responsibly and in accordance with these terms:
              </p>
              <ul className="list-none text-white/70 font-mono text-base space-y-4 border-l-2 border-red-600 pl-6">
                <li><span className="text-white font-bold mr-3">{">"}</span>Only analyze public YouTube playlists that you have permission to access</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Not attempt to overwhelm our servers with excessive requests</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Not use the Service for any illegal or unauthorized purpose</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Respect YouTube's Terms of Service when using playlists</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Not attempt to circumvent any limitations or restrictions we may implement</li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">05. API USAGE & LIMITS</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed mb-6">
                Our service relies on the YouTube Data API, which has usage quotas and limitations. We reserve the right
                to:
              </p>
              <ul className="list-none text-white/70 font-mono text-base space-y-4 border-l-2 border-red-600 pl-6">
                <li><span className="text-white font-bold mr-3">{">"}</span>Implement rate limiting to ensure fair usage</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Temporarily restrict access during high usage periods</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Modify or discontinue features based on API availability</li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">06. DISCLAIMER</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed mb-6">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law,
                this Company:
              </p>
              <ul className="list-none text-white/70 font-mono text-base space-y-4 border-l-2 border-red-600 pl-6">
                <li><span className="text-white font-bold mr-3">{">"}</span>Excludes all representations and warranties relating to this website and its contents</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Does not guarantee the accuracy of playlist analysis results</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Is not responsible for any errors in YouTube's API data</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Does not warrant that the service will be uninterrupted or error-free</li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">07. LIMITATIONS</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                In no event shall Rapid Play or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on Rapid Play's website, even if Rapid Play or a Rapid Play authorized representative
                has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do
                not allow limitations on implied warranties, or limitations of liability for consequential or incidental
                damages, these limitations may not apply to you.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">08. PRIVACY POLICY</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
                Service, to understand our practices.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">09. MODIFICATIONS</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                We may revise these terms of service for its website at any time without notice. By using this website you
                are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">10. GOVERNING LAW</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
                submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-24 pt-8 border-t-4 border-red-600 text-left">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-16 px-10 bg-white hover:bg-red-600 text-black hover:text-white font-black text-lg uppercase tracking-widest transition-colors"
          >
            SYSTEM RETURN
          </Link>
        </div>
      </div>
    </Layout>
  )
}
