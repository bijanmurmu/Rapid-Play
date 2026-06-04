import type { Metadata } from "next"
import Layout from "@/components/layout"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Rapid Play",
  description:
    "Privacy policy for Rapid Play, the YouTube playlist analyzer tool. Learn how we handle your data and protect your privacy.",
}

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="flex flex-col max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="border-b-4 border-red-600 pb-12 mb-16 pt-8">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">PRIVACY POLICY //</h1>
          <p className="text-white/40 font-mono uppercase tracking-widest text-sm md:text-base">
            LAST UPDATED: JUNE 4, 2026
          </p>
        </div>

        <div className="space-y-16">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">01. INTRODUCTION</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                At Rapid Play, we respect your privacy and are committed to protecting your personal data. This Privacy
                Policy explains how we collect, use, and safeguard your information when you use our YouTube playlist
                analyzer tool.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">02. INFORMATION WE COLLECT</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed mb-6">When you use Rapid Play, we collect minimal information:</p>
              <ul className="list-none text-white/70 font-mono text-base space-y-4 border-l-2 border-red-600 pl-6">
                <li><span className="text-white font-bold mr-3">{">"}</span>YouTube playlist URLs that you submit for analysis</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Standard server logs including IP addresses and browser information</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Anonymous usage statistics to improve our service</li>
              </ul>
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed mt-6">
                We do not store the playlist URLs or analysis results after your session ends.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">03. HOW WE USE YOUR INFORMATION</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed mb-6">We use the information we collect solely to:</p>
              <ul className="list-none text-white/70 font-mono text-base space-y-4 border-l-2 border-red-600 pl-6">
                <li><span className="text-white font-bold mr-3">{">"}</span>Provide the playlist analysis service</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Improve and optimize our tool</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Monitor and prevent abuse of our service</li>
                <li><span className="text-white font-bold mr-3">{">"}</span>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">04. DATA SECURITY</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                We implement appropriate security measures to protect your information. All communication with our servers
                is encrypted using HTTPS, and we do not store sensitive data.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">05. THIRD-PARTY SERVICES</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                We use the YouTube Data API to fetch playlist information. Your use of our service is also subject to
                Google's Privacy Policy, which can be found at{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-red-500 hover:text-white underline decoration-white/30 hover:decoration-red-500 underline-offset-4 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
                .
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t-2 border-white/10 pt-8">
            <h2 className="md:col-span-4 text-2xl font-black text-red-500 uppercase tracking-widest m-0">06. CONTACT US</h2>
            <div className="md:col-span-8">
              <p className="text-white/80 font-mono text-base md:text-lg leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:bijanmurmu.projects@gmail.com" className="text-red-500 hover:text-white underline decoration-white/30 hover:decoration-red-500 underline-offset-4 transition-colors">
                  bijanmurmu.projects@gmail.com
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
            SYSTEM RETURN
          </Link>
        </div>
      </div>
    </Layout>
  )
}
