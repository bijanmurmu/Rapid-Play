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
      <div className="flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-300 mb-6">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Introduction</h2>
            <p className="text-zinc-300 mb-4">
              At Rapid Play, we respect your privacy and are committed to protecting your personal data. This Privacy
              Policy explains how we collect, use, and safeguard your information when you use our YouTube playlist
              analyzer tool.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Information We Collect</h2>
            <p className="text-zinc-300 mb-4">When you use Rapid Play, we collect minimal information:</p>
            <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-2">
              <li>YouTube playlist URLs that you submit for analysis</li>
              <li>Standard server logs including IP addresses and browser information</li>
              <li>Anonymous usage statistics to improve our service</li>
            </ul>
            <p className="text-zinc-300 mb-4">
              We do not store the playlist URLs or analysis results after your session ends.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-zinc-300 mb-4">We use the information we collect solely to:</p>
            <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-2">
              <li>Provide the playlist analysis service</li>
              <li>Improve and optimize our tool</li>
              <li>Monitor and prevent abuse of our service</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Data Security</h2>
            <p className="text-zinc-300 mb-4">
              We implement appropriate security measures to protect your information. All communication with our servers
              is encrypted using HTTPS, and we do not store sensitive data.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Third-Party Services</h2>
            <p className="text-zinc-300 mb-4">
              We use the YouTube Data API to fetch playlist information. Your use of our service is also subject to
              Google's Privacy Policy, which can be found at{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-red-400 hover:text-red-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-zinc-300 mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Contact Us</h2>
            <p className="text-zinc-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:bijanmurmu.projects@gmail.com" className="text-red-400 hover:text-red-300">
                bijanmurmu.projects@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
