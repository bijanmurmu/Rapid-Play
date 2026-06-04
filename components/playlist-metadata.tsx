"use client"

import type React from "react"
import type { PlaylistData } from "@/lib/youtube-api"

interface PlaylistMetadataProps {
  data: PlaylistData
}

function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  const parts = []
  if (hours > 0) parts.push(`${hours}h`)
  if (minutes > 0) parts.push(`${minutes}m`)
  if (remainingSeconds > 0 || parts.length === 0) parts.push(`${remainingSeconds}s`)

  return parts.join(" ")
}

export default function PlaylistMetadata({ data }: PlaylistMetadataProps) {
  const { title, channelTitle, videoCount, unavailableCount, totalDuration } = data
  const availableCount = videoCount - unavailableCount
  const averageDuration = availableCount > 0 ? Math.round(totalDuration / availableCount) : 0

  return (
    <div className="w-full border-2 border-white/20 bg-black animate-fadeIn">
      <div className="border-b-2 border-white/20 p-6 md:p-8">
        <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">{title}</h2>
        <p className="text-white/50 font-mono uppercase tracking-widest text-sm">SOURCE: {channelTitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/20">
        <div className="p-6 flex flex-col justify-center">
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-1">[01] Video Count</p>
          <p className="text-2xl font-bold text-white font-mono">{videoCount}</p>
        </div>

        <div className="p-6 flex flex-col justify-center">
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-1">[02] Total Duration</p>
          <p className="text-2xl font-bold text-white font-mono">{formatDuration(totalDuration)}</p>
        </div>

        <div className="p-6 flex flex-col justify-center">
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-1">[03] Avg Length</p>
          <p className="text-2xl font-bold text-white font-mono">{formatDuration(averageDuration)}</p>
        </div>

        <div className="p-6 flex flex-col justify-center bg-white/5">
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-1">[04] Unavailable</p>
          <p className={`text-2xl font-bold font-mono ${unavailableCount > 0 ? 'text-red-500' : 'text-white'}`}>
            {unavailableCount}
          </p>
        </div>
      </div>
    </div>
  )
}
