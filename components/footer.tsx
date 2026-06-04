import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 border-t-2 border-white/20 mt-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-black uppercase tracking-widest text-lg">RAPID PLAY //</span>
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest mt-2">© 2026 DATA ANALYZER SYSTEM</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/privacy" className="text-white/60 hover:text-red-600 font-mono text-xs uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/60 hover:text-red-600 font-mono text-xs uppercase tracking-widest transition-colors">Terms</Link>
            <Link href="/about" className="text-white/60 hover:text-red-600 font-mono text-xs uppercase tracking-widest transition-colors">About</Link>
            <Link href="mailto:bijanmurmu.projects@gmail.com" className="text-white/60 hover:text-red-600 font-mono text-xs uppercase tracking-widest transition-colors">Help</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
