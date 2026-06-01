"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import type { VideoDetails } from "@/lib/youtube-api"
import { parseDuration } from "@/lib/youtube-api"
import { Check, ChevronDown } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface VideoSelectorProps {
  videos: VideoDetails[]
  onSelectionChange: (selectedIds: string[]) => void
}

export function VideoSelector({ videos, onSelectionChange }: VideoSelectorProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [isExpanded, setIsExpanded] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")
  const [sortOrder, setSortOrder] = useState<"original" | "shortest" | "longest">("original")

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

  const filteredAndSortedVideos = [...videos]
    .filter(video => video.title.toLowerCase().includes(searchQuery.toLowerCase()) || video.channelTitle.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "shortest") return parseDuration(a.duration) - parseDuration(b.duration)
      if (sortOrder === "longest") return parseDuration(b.duration) - parseDuration(a.duration)
      return 0 // original
    })

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
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
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
            
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="text"
                placeholder="Search videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-48 rounded border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm text-white focus:border-red-500 focus:outline-none"
              />
              <Select
                value={sortOrder}
                onValueChange={(value: any) => setSortOrder(value)}
              >
                <SelectTrigger className="w-full sm:w-[160px] h-8 bg-zinc-800 border-zinc-700 text-white focus:ring-red-500">
                  <SelectValue placeholder="Sort order" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                  <SelectItem value="original">Original Order</SelectItem>
                  <SelectItem value="shortest">Shortest First</SelectItem>
                  <SelectItem value="longest">Longest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedVideos.map((video, index) => {
          const isDuplicate = videos.filter(v => v.id === video.id).length > 1;
          return (
          <div
            key={`${video.id}-${index}`}
            className="group relative overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 transition-all hover:border-red-600"
          >
            <input
              type="checkbox"
              id={`video-${video.id}-${index}`}
              checked={selectedIds.has(video.id)}
              onChange={() => handleVideoToggle(video.id)}
              disabled={video.unavailable}
              className="sr-only"
            />
            <label
              htmlFor={`video-${video.id}-${index}`}
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
                {isDuplicate && !video.unavailable && (
                  <div className="absolute top-1 right-1 bg-amber-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">
                    DUPLICATE
                  </div>
                )}
                {video.unavailable && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 gap-2 z-10">
                    <span className="text-xs font-semibold text-zinc-300">Unavailable</span>
                    <span
                      onClick={(e) => {
                        e.preventDefault()
                        window.open(`https://web.archive.org/web/2/https://www.youtube.com/watch?v=${video.id}`, '_blank')
                      }}
                      className="text-[10px] bg-zinc-800 hover:bg-zinc-700 text-white px-2 py-1 rounded cursor-pointer pointer-events-auto"
                    >
                      Find on Wayback
                    </span>
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
          );
        })}
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
