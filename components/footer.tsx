import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-zinc-400 text-sm">© {new Date().getFullYear()} Rapid Play. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/privacy"
              className="text-zinc-400 hover:text-white text-sm transition-colors"
              title="Our privacy practices"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-400 hover:text-white text-sm transition-colors"
              title="Terms of using our service"
            >
              Terms
            </Link>
            <Link
              href="/about"
              className="text-zinc-400 hover:text-white text-sm transition-colors"
              title="Learn about Rapid Play"
            >
              About
            </Link>
            <Link
              href="mailto:bijanmurmu.projects@gmail.com"
              className="text-zinc-400 hover:text-white text-sm transition-colors"
              title="Get help with Rapid Play"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
