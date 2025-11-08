"use client"

import { useState, useCallback } from "react"
import PlaylistForm from "./playlist-form"
import PlaylistMetadata from "./playlist-metadata"
import PlaybackSpeeds from "./playback-speeds"
import ApiKeyNotice from "./api-key-notice"
import type { PlaylistData } from "@/lib/youtube-api"

interface PlaylistAnalyzerProps {
  onAnalysisStarted?: () => void
  onShowInfo?: () => void
}

export default function PlaylistAnalyzer({ onAnalysisStarted, onShowInfo }: PlaylistAnalyzerProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [playlistData, setPlaylistData] = useState<PlaylistData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [apiKeyMissing, setApiKeyMissing] = useState(false)

  const handleAnalyzePlaylist = useCallback(
    async (url: string) => {
      setIsLoading(true)
      setError(null)
      setApiKeyMissing(false)

      // Notify parent component that analysis has started
      if (onAnalysisStarted) {
        onAnalysisStarted()
      }

      try {
        console.log("Starting playlist analysis for:", url)

        const response = await fetch("/api/youtube", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url }),
        })

        const data = await response.json()

        if (!response.ok) {
          console.error("API response error:", response.status, data)

          if (
            data.error === "YouTube API key is not configured" ||
            data.error?.includes("YouTube API key is not configured")
          ) {
            setApiKeyMissing(true)
          }

          throw new Error(data.error || `Server error (${response.status})`)
        }

        console.log("Analysis completed successfully")
        setPlaylistData(data)

        // Ensure smooth scrolling to results
        setTimeout(() => {
          if (window.scrollY === 0) {
            window.scrollTo({ top: 1, behavior: "smooth" })
          }
        }, 100)
      } catch (err) {
        console.error("Error analyzing playlist:", err)
        const errorMessage = err instanceof Error ? err.message : "Failed to analyze playlist"
        setError(errorMessage)
      } finally {
        setIsLoading(false)
      }
    },
    [onAnalysisStarted],
  )

  const getErrorComponent = () => {
    if (apiKeyMissing) {
      return <ApiKeyNotice />
    }

    if (error) {
      let errorTitle = "Analysis Failed"
      let errorSuggestions: string[] = []

      if (error.includes("Invalid YouTube playlist URL")) {
        errorTitle = "Invalid Playlist URL"
        errorSuggestions = [
          "Make sure you're using a YouTube playlist URL",
          "The URL should contain 'list=' parameter",
          "Example: https://www.youtube.com/playlist?list=PLxxxxx",
        ]
      } else if (error.includes("not found") || error.includes("private")) {
        errorTitle = "Playlist Not Found"
        errorSuggestions = [
          "Check that the playlist URL is correct",
          "Ensure the playlist is set to 'Public' or 'Unlisted'",
          "Private playlists cannot be analyzed",
        ]
      } else if (error.includes("quota")) {
        errorTitle = "Service Temporarily Unavailable"
        errorSuggestions = [
          "YouTube API quota has been exceeded",
          "Please try again later",
          "Contact support if the issue persists",
        ]
      } else if (error.includes("empty")) {
        errorTitle = "Empty Playlist"
        errorSuggestions = [
          "This playlist doesn't contain any videos",
          "All videos might be private or deleted",
          "Try a different playlist",
        ]
      }

      return (
        <div className="mt-4 p-4 bg-red-900/30 border border-red-700 rounded-xl text-red-200" role="alert">
          <h3 className="font-semibold text-red-400 mb-2">{errorTitle}</h3>
          <p className="text-sm mb-3">{error}</p>
          {errorSuggestions.length > 0 && (
            <div className="text-xs text-red-300">
              <p className="font-medium mb-1">Suggestions:</p>
              <ul className="list-disc list-inside space-y-1">
                {errorSuggestions.map((suggestion, index) => (
                  <li key={index}>{suggestion}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }

    return null
  }

  return (
    <div className="w-full max-w-3xl">
      <PlaylistForm onSubmit={handleAnalyzePlaylist} isLoading={isLoading} />

      {getErrorComponent()}

      {playlistData && (
        <div className="mt-6 space-y-6 animate-fadeIn">
          <PlaylistMetadata data={playlistData} />
          <PlaybackSpeeds totalDuration={playlistData.totalDuration} />
        </div>
      )}
    </div>
  )
}
