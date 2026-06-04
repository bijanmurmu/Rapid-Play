"use client"

import type React from "react"
import { useState } from "react"
import { extractPlaylistId, extractVideoId } from "@/lib/youtube-api"

interface PlaylistFormProps {
  onSubmit: (url: string) => void
  isLoading: boolean
}

export default function PlaylistForm({ onSubmit, isLoading }: PlaylistFormProps) {
  const [url, setUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim()) {
      onSubmit(url.trim())
    }
  }

  const isValidUrl = extractPlaylistId(url) !== null || extractVideoId(url) !== null;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-0 border-2 border-white/20 focus-within:border-red-600 transition-colors group bg-black relative">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
        <div className="flex flex-row w-full">
          <input
            type="text"
            placeholder="ENTER PLAYLIST URL //"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 h-14 sm:h-20 bg-transparent border-none text-white px-3 sm:px-8 text-sm sm:text-2xl font-mono placeholder:text-white/30 focus:outline-none focus:ring-0 min-w-0"
          />
          <button
            type="submit"
            disabled={isLoading || !url.trim()}
            className="h-14 sm:h-20 w-28 sm:w-48 shrink-0 bg-white hover:bg-red-600 text-black hover:text-white font-black text-sm sm:text-xl uppercase tracking-widest transition-colors disabled:opacity-50 disabled:bg-white/10 disabled:text-white/30 flex items-center justify-center border-l-2 border-white/20 sm:group-focus-within:border-red-600"
          >
            {isLoading ? (
              <span className="animate-pulse">LOAD_</span>
            ) : (
              "EXECUTE"
            )}
          </button>
        </div>
      </form>
      <div className="flex justify-between items-center mt-4 h-6">
        <span className="text-xs text-white/40 font-mono uppercase tracking-widest">Input Sequence [01]</span>
        {!isValidUrl && url.trim().length > 0 && (
          <span className="text-xs text-red-500 font-mono uppercase tracking-widest border border-red-500/30 px-2 py-1 bg-red-500/10">Invalid URL Format</span>
        )}
        {!isValidUrl && url.trim().length === 0 && (
          <span className="text-xs text-red-500 font-mono uppercase tracking-widest border border-red-500/30 px-2 py-1 bg-red-500/10">Awaiting Valid URL</span>
        )}
        {isValidUrl && (
          <span className="text-xs text-green-500 font-mono uppercase tracking-widest border border-green-500/30 px-2 py-1 bg-green-500/10">Target Acquired</span>
        )}
      </div>
    </div>
  )
}
