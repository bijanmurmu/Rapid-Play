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
      <div className="flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">Terms of Service</h1>

          <div className="prose prose-invert max-w-none">
            <p className="text-zinc-300 mb-6">
              Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-300 mb-4">
              By accessing and using Rapid Play ("the Service"), you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Description of Service</h2>
            <p className="text-zinc-300 mb-4">
              Rapid Play is a free web-based tool that analyzes YouTube playlists to provide statistics including total
              duration, video count, and calculated watch times at different playback speeds. The service uses the
              YouTube Data API to fetch publicly available playlist information.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Use License</h2>
            <p className="text-zinc-300 mb-4">
              Permission is granted to temporarily use Rapid Play for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. User Responsibilities</h2>
            <p className="text-zinc-300 mb-4">
              You agree to use the Service responsibly and in accordance with these terms:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-2">
              <li>Only analyze public YouTube playlists that you have permission to access</li>
              <li>Not attempt to overwhelm our servers with excessive requests</li>
              <li>Not use the Service for any illegal or unauthorized purpose</li>
              <li>Respect YouTube's Terms of Service when using playlists</li>
              <li>Not attempt to circumvent any limitations or restrictions we may implement</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. API Usage and Limitations</h2>
            <p className="text-zinc-300 mb-4">
              Our service relies on the YouTube Data API, which has usage quotas and limitations. We reserve the right
              to:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-2">
              <li>Implement rate limiting to ensure fair usage</li>
              <li>Temporarily restrict access during high usage periods</li>
              <li>Modify or discontinue features based on API availability</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Disclaimer</h2>
            <p className="text-zinc-300 mb-4">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law,
              this Company:
            </p>
            <ul className="list-disc pl-6 text-zinc-300 mb-6 space-y-2">
              <li>Excludes all representations and warranties relating to this website and its contents</li>
              <li>Does not guarantee the accuracy of playlist analysis results</li>
              <li>Is not responsible for any errors in YouTube's API data</li>
              <li>Does not warrant that the service will be uninterrupted or error-free</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Limitations</h2>
            <p className="text-zinc-300 mb-4">
              In no event shall Rapid Play or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on Rapid Play's website, even if Rapid Play or a Rapid Play authorized representative
              has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do
              not allow limitations on implied warranties, or limitations of liability for consequential or incidental
              damages, these limitations may not apply to you.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Privacy Policy</h2>
            <p className="text-zinc-300 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the
              Service, to understand our practices.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Modifications</h2>
            <p className="text-zinc-300 mb-4">
              Rapid Play may revise these terms of service for its website at any time without notice. By using this
              website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Termination</h2>
            <p className="text-zinc-300 mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason
              whatsoever, including without limitation if you breach the Terms.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Governing Law</h2>
            <p className="text-zinc-300 mb-4">
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
              submit to the exclusive jurisdiction of the courts in that state or location.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Contact Information</h2>
            <p className="text-zinc-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at{" "}
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
