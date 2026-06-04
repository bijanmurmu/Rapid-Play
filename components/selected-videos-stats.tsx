"use client"

import React from "react"
import type { VideoDetails } from "@/lib/youtube-api"
import { parseDuration } from "@/lib/youtube-api"

interface SelectedVideosStatsProps {
  selectedVideos: VideoDetails[]
  totalDuration: number
  totalCount: number
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  } else {
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }
}

export function SelectedVideosStats({
  selectedVideos,
  totalDuration,
  totalCount,
}: SelectedVideosStatsProps) {
  if (selectedVideos.length === 0 || selectedVideos.length === totalCount) {
    return null
  }

  const selectedDuration = selectedVideos.reduce((sum, video) => {
    return sum + parseDuration(video.duration)
  }, 0)

  return (
    <div className="w-full border-2 border-red-600 bg-black animate-fadeIn">
      <div className="bg-red-600 p-2">
        <h3 className="text-black font-black uppercase tracking-widest text-center text-xs">Subset Selection Active</h3>
      </div>
      <div className="grid grid-cols-2 divide-x-2 divide-white/20">
        <div className="p-4 flex flex-col items-center justify-center text-center">
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-1">Target Count</p>
          <p className="text-xl font-bold text-white font-mono">
            {selectedVideos.length} <span className="text-sm text-red-500">/ {totalCount}</span>
          </p>
        </div>
        <div className="p-4 flex flex-col items-center justify-center text-center">
          <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest mb-1">Target Duration</p>
          <p className="text-xl font-bold text-white font-mono">{formatTime(selectedDuration)}</p>
        </div>
      </div>
      <div className="p-2 border-t-2 border-white/20 text-center">
        <p className="text-[10px] text-red-500 font-mono uppercase tracking-widest">
          Excluded: -{formatTime(totalDuration - selectedDuration)}
        </p>
      </div>
    </div>
  )
}
