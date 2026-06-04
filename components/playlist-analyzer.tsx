"use client"

import { useState, useCallback, useEffect } from "react"
import PlaylistForm from "./playlist-form"
import PlaylistMetadata from "./playlist-metadata"
import PlaybackSpeeds from "./playback-speeds"
import ApiKeyNotice from "./api-key-notice"
import { VideoSelector } from "./video-selector"
import { SelectedVideosStats } from "./selected-videos-stats"
import type { PlaylistData } from "@/lib/youtube-api"
import { parseDuration } from "@/lib/youtube-api"

interface PlaylistAnalyzerProps {
  onAnalysisStarted?: () => void
  onShowInfo?: () => void
}

export default function PlaylistAnalyzer({ onAnalysisStarted, onShowInfo }: PlaylistAnalyzerProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [apiKeyMissing, setApiKeyMissing] = useState(false)
  const [selectedVideoIds, setSelectedVideoIds] = useState<string[]>([])
  const [recentPlaylists, setRecentPlaylists] = useState<{url: string, title: string, data?: PlaylistData}[]>([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem("rapid_play_recent")
      if (saved) setRecentPlaylists(JSON.parse(saved))
    } catch (e) {}
  }, [])

  const handleAnalyzePlaylist = useCallback(
    async (url: string) => {
      setIsLoading(true)
      setError(null)
      setApiKeyMissing(false)
      
      // Check for cached data for instant loading
      const cached = recentPlaylists.find(p => p.url === url && p.data)
      if (cached && cached.data) {
        setPlaylistData(cached.data)
        setSelectedVideoIds([])
        if (onAnalysisStarted) onAnalysisStarted()
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
        setIsLoading(false)
        return
      }

      if (onAnalysisStarted) onAnalysisStarted()

      try {
        const response = await fetch("/api/youtube", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        })
        const data = await response.json()
        if (!response.ok) {
          if (data.error?.includes("YouTube API key is not configured")) setApiKeyMissing(true)
          throw new Error(data.error || `Server error (${response.status})`)
        }
        setPlaylistData(data)
        setSelectedVideoIds([])
        setRecentPlaylists(prev => {
          const newRecent = [{ url, title: data.title, data }, ...prev.filter(p => p.url !== url)].slice(0, 5)
          try { localStorage.setItem("rapid_play_recent", JSON.stringify(newRecent)) } catch(e) {}
          return newRecent
        })
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to analyze playlist")
      } finally {
        setIsLoading(false)
      }
    },
    [onAnalysisStarted, recentPlaylists],
  )

  const getErrorComponent = () => {
    if (apiKeyMissing) return <ApiKeyNotice />
    if (!error) return null
    return (
      <div className="mt-8 border-2 border-red-600 bg-red-600/10 p-6 flex flex-col items-center">
        <h3 className="font-bold text-red-500 uppercase tracking-widest mb-2">System Error</h3>
        <p className="text-red-400 font-mono text-sm text-center">{error}</p>
      </div>
    )
  }

  if (!playlistData) {
    return (
      <div className="w-full">
        <PlaylistForm onSubmit={handleAnalyzePlaylist} isLoading={isLoading} />
        {getErrorComponent()}
        
        {recentPlaylists.length > 0 && (
          <div className="mt-16 border-t border-white/10 pt-8">
            <h3 className="text-white/40 font-mono text-xs uppercase tracking-widest mb-6">Recent Queries</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {recentPlaylists.map((rp, i) => (
                <button 
                  key={i}
                  onClick={() => handleAnalyzePlaylist(rp.url)}
                  className="group flex flex-col text-left border border-white/10 p-4 hover:border-red-600 transition-colors bg-black"
                >
                  <span className="text-sm font-bold text-white uppercase tracking-wider truncate w-full mb-2">{rp.title}</span>
                  <span className="text-[10px] text-red-500 font-mono uppercase">Load Target //</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  const selectedVideos = playlistData.videos.filter((v) => selectedVideoIds.includes(v.id))
  const hasSelection = selectedVideoIds.length > 0

  return (
    <div className="w-full animate-fadeIn flex flex-col">
      {/* Header Form Context */}
      <div className="w-full border-b border-white/10 pb-8 mb-8">
        <PlaylistForm onSubmit={handleAnalyzePlaylist} isLoading={isLoading} />
        {getErrorComponent()}
      </div>

      <div className="w-full">
        <PlaylistMetadata data={playlistData} />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        <div className="lg:col-span-4 flex flex-col gap-8">
          <PlaybackSpeeds
            totalDuration={playlistData.totalDuration}
            selectedDuration={hasSelection ? selectedVideos.reduce((sum, v) => sum + parseDuration(v.duration), 0) : undefined}
          />
          {hasSelection && (
            <SelectedVideosStats
              selectedVideos={selectedVideos}
              totalDuration={playlistData.totalDuration}
              totalCount={playlistData.videoCount}
            />
          )}
        </div>
        <div className="lg:col-span-8">
          <VideoSelector
            videos={playlistData.videos}
            onSelectionChange={setSelectedVideoIds}
          />
        </div>
      </div>
    </div>
  )
}
