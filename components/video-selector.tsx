"use client"

import React, { useState } from "react"
import type { VideoDetails } from "@/lib/youtube-api"
import { parseDuration } from "@/lib/youtube-api"
import { Search, ExternalLink } from "lucide-react"

interface VideoSelectorProps {
  videos: VideoDetails[]
  onSelectionChange: (selectedIds: string[]) => void
}

export function VideoSelector({ videos, onSelectionChange }: VideoSelectorProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState("")

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

  const filteredVideos = [...videos].filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    video.channelTitle.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="w-full border-2 border-white/20 bg-black flex flex-col">
      {/* Control Bar */}
      <div className="border-b-2 border-white/20 flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-white/20">
        
        <div className="flex-1 flex bg-black focus-within:bg-white/5 transition-colors relative group">
          <div className="absolute left-0 bottom-0 w-full h-[2px] bg-red-600 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left z-10"></div>
          <div className="flex items-center justify-center px-6 border-r-2 border-white/20">
            <Search className="h-5 w-5 text-white/50" />
          </div>
          <input
            type="text"
            placeholder="FILTER DATA //"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 h-14 bg-transparent border-none text-white px-6 font-mono placeholder:text-white/30 focus:outline-none focus:ring-0 uppercase"
          />
        </div>

        <div className="flex divide-x-2 divide-white/20">
          <button
            onClick={handleSelectAll}
            disabled={isAllSelected}
            className="h-14 px-8 bg-black hover:bg-white text-white hover:text-black font-bold uppercase tracking-widest transition-colors disabled:opacity-50 disabled:hover:bg-black disabled:hover:text-white"
          >
            Select All
          </button>
          <button
            onClick={handleDeselectAll}
            disabled={selectedIds.size === 0}
            className="h-14 px-8 bg-black hover:bg-red-600 text-white font-bold uppercase tracking-widest transition-colors disabled:opacity-50 disabled:hover:bg-black"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Header Row */}
      <div className="grid grid-cols-[50px_50px_80px_1fr_80px] md:grid-cols-[50px_50px_120px_1fr_100px] gap-0 border-b-2 border-white/20 bg-white/5">
        <div className="px-4 py-3 text-center border-r-2 border-white/20">
          <span className="text-[10px] text-red-500 font-mono uppercase tracking-widest font-bold">SEL</span>
        </div>
        <div className="px-2 py-3 text-center border-r-2 border-white/20">
          <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest font-bold">S.NO</span>
        </div>
        <div className="px-4 py-3 text-center border-r-2 border-white/20">
          <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest font-bold">IMG</span>
        </div>
        <div className="px-6 py-3 border-r-2 border-white/20">
          <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest font-bold">Data Subject</span>
        </div>
        <div className="px-4 py-3 text-right">
          <span className="text-[10px] text-white/50 font-mono uppercase tracking-widest font-bold">Len</span>
        </div>
      </div>

      {/* Data Rows */}
      <div className="flex flex-col divide-y-2 divide-white/20">
        {filteredVideos.map((video, index) => {
          const isDuplicate = videos.filter(v => v.id === video.id).length > 1;
          const isSelected = selectedIds.has(video.id);
          const thumbnailUrl = video.thumbnails?.default?.url || "";
          
          return (
            <label
              key={`${video.id}-${index}`}
              htmlFor={`video-${video.id}-${index}`}
              className={`grid grid-cols-[50px_50px_80px_1fr_80px] md:grid-cols-[50px_50px_120px_1fr_100px] gap-0 items-stretch cursor-pointer transition-colors ${
                video.unavailable ? 'opacity-30 bg-red-900/10' : ''
              } ${
                isSelected ? 'bg-red-600 text-black hover:bg-red-500' : 'bg-black hover:bg-white/10 text-white'
              }`}
            >
              <input
                type="checkbox"
                id={`video-${video.id}-${index}`}
                checked={isSelected}
                onChange={() => handleVideoToggle(video.id)}
                disabled={video.unavailable}
                className="sr-only"
              />

              <div className={`flex items-center justify-center border-r-2 ${isSelected ? 'border-black/20' : 'border-white/20'}`}>
                <div className={`w-4 h-4 border-2 flex items-center justify-center ${isSelected ? 'border-black bg-black' : 'border-white/30'}`}>
                  {isSelected && <div className="w-2 h-2 bg-red-600" />}
                </div>
              </div>

              <div className={`flex items-center justify-center border-r-2 ${isSelected ? 'border-black/20' : 'border-white/20'}`}>
                <span className={`text-xs font-mono font-bold ${isSelected ? 'text-black/70' : 'text-white/50'}`}>
                  {index + 1}
                </span>
              </div>

              <div className={`p-2 flex items-center justify-center border-r-2 ${isSelected ? 'border-black/20' : 'border-white/20'}`}>
                {thumbnailUrl ? (
                  <div 
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(`https://youtube.com/watch?v=${video.id}`, '_blank');
                    }}
                    className={`relative w-full aspect-video border-2 ${isSelected ? 'border-black/50' : 'border-white/20'} overflow-hidden grayscale contrast-125 transition-all duration-300 ${isSelected ? 'grayscale-0' : 'hover:grayscale-0'} cursor-pointer hover:opacity-90 group/thumb`}
                  >
                    <img src={thumbnailUrl} alt="" className="object-cover w-full h-full" loading="lazy" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ) : (
                  <div className={`w-full aspect-video border-2 flex items-center justify-center ${isSelected ? 'border-black/50 bg-black/10' : 'border-white/20 bg-white/5'}`}>
                    <span className="text-[8px] font-mono opacity-50">NO IMG</span>
                  </div>
                )}
              </div>

              <div className={`px-4 sm:px-6 py-4 min-w-0 border-r-2 ${isSelected ? 'border-black/20' : 'border-white/20'} flex flex-col justify-center`}>
                <h4 className={`text-sm md:text-base font-bold truncate uppercase tracking-wide ${isSelected ? 'text-black' : 'text-white'}`}>
                  {video.title}
                </h4>
                <div>
                  {video.unavailable && (
                    <span className="inline-block mt-1 text-[10px] font-mono border border-red-500 text-red-500 px-1 py-0.5 uppercase tracking-widest">
                      Unavailable
                    </span>
                  )}
                  {isDuplicate && !video.unavailable && (
                    <span className="inline-block mt-1 text-[10px] font-mono border border-yellow-500 text-yellow-500 px-1 py-0.5 uppercase tracking-widest ml-2">
                      Duplicate
                    </span>
                  )}
                </div>
              </div>



              <div className="px-4 py-4 text-right flex flex-col justify-center">
                <span className={`text-sm md:text-base font-mono font-bold ${isSelected ? 'text-black' : 'text-white'}`}>
                  {Math.ceil(parseDuration(video.duration) / 60)}<span className={isSelected ? 'text-black/50' : 'text-white/30'}>m</span>
                </span>
              </div>
            </label>
          );
        })}
      </div>

      {availableVideos.length === 0 && (
        <div className="p-16 flex flex-col items-center justify-center text-center">
          <div className="text-red-500 font-mono text-sm uppercase tracking-widest border border-red-500 p-4">
            NO DATA MATCHES FILTER PARAMETERS
          </div>
        </div>
      )}
    </div>
  )
}
