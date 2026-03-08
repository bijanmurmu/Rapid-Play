"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

  const selectedAverage = selectedVideos.length > 0 ? Math.round(selectedDuration / selectedVideos.length) : 0

  return (
    <Card className="border-red-600/50 bg-zinc-900/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Selected Videos Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-zinc-400">Videos Selected</p>
            <p className="text-2xl font-bold text-red-500">{selectedVideos.length}</p>
            <p className="text-xs text-zinc-500">of {totalCount}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-400">Total Duration</p>
            <p className="text-lg font-semibold text-white">{formatTime(selectedDuration)}</p>
            <p className="text-xs text-zinc-500">-{formatTime(totalDuration - selectedDuration)}</p>
          </div>
          <div>
            <p className="text-xs text-zinc-400">Average Length</p>
            <p className="text-lg font-semibold text-white">{formatTime(selectedAverage)}</p>
            <p className="text-xs text-zinc-500">per video</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
