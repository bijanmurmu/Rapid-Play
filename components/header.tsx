"use client"

import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505] border-b-2 border-white/20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => { window.location.href = '/' }}
              className="text-xl font-black text-white hover:text-red-600 transition-colors uppercase tracking-widest text-left"
            >
              RAPID <span className="text-red-600">PLAY</span> //
            </button>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/bijanmurmu/Rapid-Play"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black hover:bg-red-600 hover:text-white font-bold uppercase tracking-widest transition-colors text-xs"
              aria-label="Star Rapid Play on GitHub"
            >
              <span className="hidden sm:inline">GITHUB</span> SYSTEM REPO
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
