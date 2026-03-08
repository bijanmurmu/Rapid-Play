"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import type { VideoDetails } from "@/lib/youtube-api"
import { parseDuration } from "@/lib/youtube-api"
import { Check, ChevronDown } from "lucide-react"

interface VideoSelectorProps {
  videos: VideoDetails[]
  onSelectionChange: (selectedIds: string[]) => void
}

export function VideoSelector({ videos, onSelectionChange }: VideoSelectorProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [isExpanded, setIsExpanded] = useState(false)

  const handleVideoToggle = (videoId: string) => {
    const newSelected = new Set(selectedIds)
    if (newSelected.has(videoId)) {
      newSelected.delete(videoId)
    } else {
      newSelected.add(videoId)
    }
    setSelectedIds(newSelected)
    onSelectionChange(Array.from(newSelected))
  }

  const handleSelectAll = () => {
    const availableVideos = videos.filter((v) => !v.unavailable)
    const newSelected = new Set(availableVideos.map((v) => v.id))
    setSelectedIds(newSelected)
    onSelectionChange(Array.from(newSelected))
  }

  const handleDeselectAll = () => {
    setSelectedIds(new Set())
    onSelectionChange([])
  }

  const availableVideos = videos.filter((v) => !v.unavailable)
  const isAllSelected = availableVideos.length > 0 && selectedIds.size === availableVideos.length

  return (
    <div className="space-y-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-semibold text-white">Select Videos</h3>
          <span className="text-sm text-zinc-400">({selectedIds.size} selected)</span>
        </div>
        <ChevronDown
          className={`h-5 w-5 transition-transform text-zinc-400 ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>

      {isExpanded && (
        <>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleSelectAll}
              disabled={isAllSelected}
            >
              Select All
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeselectAll}
              disabled={selectedIds.size === 0}
            >
              Deselect All
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group relative overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 transition-all hover:border-red-600"
          >
            <input
              type="checkbox"
              id={`video-${video.id}`}
              checked={selectedIds.has(video.id)}
              onChange={() => handleVideoToggle(video.id)}
              disabled={video.unavailable}
              className="sr-only"
            />
            <label
              htmlFor={`video-${video.id}`}
              className={`block cursor-pointer p-3 ${video.unavailable ? "opacity-50" : ""}`}
            >
              {/* Thumbnail */}
              <div className="relative mb-2 flex items-center justify-center overflow-hidden rounded bg-zinc-800">
                {video.thumbnails.medium?.url ? (
                  <img
                    src={video.thumbnails.medium.url}
                    alt={video.title}
                    className="aspect-video w-full object-cover"
                  />
                ) : (
                  <div className="aspect-video w-full bg-zinc-800" />
                )}
                {video.unavailable && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                    <span className="text-xs font-semibold text-zinc-300">Unavailable</span>
                  </div>
                )}
                {selectedIds.has(video.id) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-red-500 bg-red-600">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-red-500">
                    {selectedIds.has(video.id) && <Check className="h-4 w-4 text-red-500" />}
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="space-y-1">
                <h4 className="line-clamp-2 text-sm font-medium leading-tight text-white">
                  {video.title}
                </h4>
                <p className="text-xs text-zinc-400">{video.channelTitle}</p>
                <p className="text-xs font-medium text-red-500">
                  {Math.ceil(parseDuration(video.duration) / 60)} min
                </p>
              </div>
            </label>
          </div>
        ))}
      </div>

          {availableVideos.length === 0 && (
            <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-8 text-center">
              <p className="text-zinc-400">No available videos to select</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}
