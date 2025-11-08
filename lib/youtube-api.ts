export interface PlaylistDetails {
  id: string
  title: string
  channelId: string
  channelTitle: string
  description: string
  thumbnails: {
    default?: { url: string; width: number; height: number }
    medium?: { url: string; width: number; height: number }
    high?: { url: string; width: number; height: number }
    standard?: { url: string; width: number; height: number }
    maxres?: { url: string; width: number; height: number }
  }
  itemCount: number
}

export interface VideoDetails {
  id: string
  title: string
  description: string
  thumbnails: {
    default?: { url: string; width: number; height: number }
    medium?: { url: string; width: number; height: number }
    high?: { url: string; width: number; height: number }
    standard?: { url: string; width: number; height: number }
    maxres?: { url: string; width: number; height: number }
  }
  channelTitle: string
  duration: string // ISO 8601 duration format
  unavailable: boolean
}

export interface PlaylistData {
  title: string
  channelName: string
  videoCount: number
  unavailableCount: number
  averageLength: string
  totalDuration: number // in seconds
  videos: VideoDetails[]
}

// Extract playlist ID from URL with improved regex patterns
export function extractPlaylistId(url: string): string | null {
  try {
    // Remove any whitespace
    url = url.trim()

    // Handle different YouTube URL formats
    const patterns = [
      // Standard playlist URL
      /[?&]list=([a-zA-Z0-9_-]+)/,
      // YouTube Music playlist
      /music\.youtube\.com.*[?&]list=([a-zA-Z0-9_-]+)/,
      // Shortened YouTube URLs
      /youtu\.be.*[?&]list=([a-zA-Z0-9_-]+)/,
      // Direct playlist ID (if someone just pastes the ID)
      /^([a-zA-Z0-9_-]{34}|[a-zA-Z0-9_-]{18})$/,
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) {
        const playlistId = match[1] || match[0]
        // Validate playlist ID format
        if (playlistId && (playlistId.length === 34 || playlistId.length === 18)) {
          return playlistId
        }
      }
    }

    return null
  } catch (error) {
    console.error("Error extracting playlist ID:", error)
    return null
  }
}

// Parse ISO 8601 duration to seconds
export function parseDuration(duration: string): number {
  try {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
    if (!match) return 0

    const hours = Number.parseInt(match[1] || "0", 10)
    const minutes = Number.parseInt(match[2] || "0", 10)
    const seconds = Number.parseInt(match[3] || "0", 10)

    return hours * 3600 + minutes * 60 + seconds
  } catch (error) {
    console.error("Error parsing duration:", error)
    return 0
  }
}

// Fetch playlist details with improved error handling
export async function fetchPlaylistDetails(playlistId: string, apiKey: string): Promise<PlaylistDetails> {
  try {
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${playlistId}&key=${apiKey}`
    console.log("Fetching playlist details for ID:", playlistId)

    const response = await fetch(url)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("YouTube API response error:", response.status, errorText)

      if (response.status === 403) {
        throw new Error("API quota exceeded or invalid API key. Please check your YouTube API key.")
      } else if (response.status === 404) {
        throw new Error("Playlist not found. Please check the playlist URL and ensure it's public.")
      } else {
        throw new Error(`YouTube API error (${response.status}): ${errorText}`)
      }
    }

    const data = await response.json()
    console.log("Playlist API response:", data)

    if (!data.items || data.items.length === 0) {
      throw new Error("Playlist not found or is private. Please ensure the playlist exists and is set to public.")
    }

    const playlist = data.items[0]

    // Check if playlist has any videos
    if (playlist.contentDetails.itemCount === 0) {
      throw new Error("This playlist is empty or all videos are private/unavailable.")
    }

    return {
      id: playlist.id,
      title: playlist.snippet.title,
      channelId: playlist.snippet.channelId,
      channelTitle: playlist.snippet.channelTitle,
      description: playlist.snippet.description || "",
      thumbnails: playlist.snippet.thumbnails || {},
      itemCount: playlist.contentDetails.itemCount,
    }
  } catch (error) {
    console.error("Error in fetchPlaylistDetails:", error)
    throw error
  }
}

// Fetch all videos in a playlist with improved error handling
export async function fetchPlaylistVideos(playlistId: string, apiKey: string): Promise<VideoDetails[]> {
  let videos: VideoDetails[] = []
  let nextPageToken: string | undefined = undefined
  let pageCount = 0
  const maxPages = 20 // Prevent infinite loops

  try {
    do {
      pageCount++
      if (pageCount > maxPages) {
        console.warn("Reached maximum page limit, stopping fetch")
        break
      }

      const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${playlistId}${nextPageToken ? `&pageToken=${nextPageToken}` : ""}&key=${apiKey}`

      const response = await fetch(playlistUrl)

      if (!response.ok) {
        const errorText = await response.text()
        console.error("Playlist items API error:", response.status, errorText)

        if (response.status === 403) {
          throw new Error("API quota exceeded. Please try again later.")
        } else if (response.status === 404) {
          throw new Error("Playlist not found or is private.")
        } else {
          throw new Error(`Failed to fetch playlist videos: ${errorText}`)
        }
      }

      const data = await response.json()
      nextPageToken = data.nextPageToken

      if (!data.items || data.items.length === 0) {
        console.log("No more items found, breaking loop")
        break
      }

      // Get video IDs for content details request
      const videoIds = data.items
        .map((item: any) => item.snippet?.resourceId?.videoId)
        .filter((id: string) => id)
        .join(",")

      if (!videoIds) {
        console.log("No valid video IDs found in this batch")
        continue
      }

      // Fetch video details including duration
      const videoDetailsUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails,snippet,status&id=${videoIds}&key=${apiKey}`

      const videoDetailsResponse = await fetch(videoDetailsUrl)

      if (!videoDetailsResponse.ok) {
        const errorText = await videoDetailsResponse.text()
        console.error("Video details API error:", videoDetailsResponse.status, errorText)
        // Continue with next batch instead of failing completely
        continue
      }

      const videoDetailsData = await videoDetailsResponse.json()

      // Map video details
      const videoDetailsMap = new Map()
      if (videoDetailsData.items) {
        videoDetailsData.items.forEach((item: any) => {
          videoDetailsMap.set(item.id, {
            duration: item.contentDetails?.duration || "PT0S",
            status: item.status,
            snippet: item.snippet,
          })
        })
      }

      // Process each playlist item
      const playlistVideos = data.items
        .map((item: any) => {
          const videoId = item.snippet?.resourceId?.videoId
          if (!videoId) {
            return null
          }

          const videoDetails = videoDetailsMap.get(videoId)
          const unavailable =
            !videoDetails ||
            !item.snippet ||
            item.snippet.title === "Private video" ||
            item.snippet.title === "Deleted video" ||
            item.snippet.title === "[Private video]" ||
            item.snippet.title === "[Deleted video]" ||
            (videoDetails.status && videoDetails.status.privacyStatus === "private")

          return {
            id: videoId,
            title: item.snippet?.title || "Unknown Title",
            description: item.snippet?.description || "",
            thumbnails: item.snippet?.thumbnails || {},
            channelTitle: item.snippet?.channelTitle || "Unknown Channel",
            duration: videoDetails?.duration || "PT0S",
            unavailable: unavailable,
          }
        })
        .filter((video: any) => video !== null)

      videos = [...videos, ...playlistVideos]

      console.log(`Fetched ${playlistVideos.length} videos from page ${pageCount}, total: ${videos.length}`)
    } while (nextPageToken && pageCount < maxPages)

    console.log(`Finished fetching playlist videos. Total: ${videos.length}`)
    return videos
  } catch (error) {
    console.error("Error in fetchPlaylistVideos:", error)
    throw error
  }
}

// Calculate playlist statistics
export function calculatePlaylistStats(videos: VideoDetails[]): {
  videoCount: number
  unavailableCount: number
  averageLength: string
  totalDuration: number
} {
  try {
    const availableVideos = videos.filter((video) => !video.unavailable)
    const unavailableCount = videos.length - availableVideos.length

    // Calculate total duration in seconds
    const durations = availableVideos.map((video) => parseDuration(video.duration))
    const totalDuration = durations.reduce((sum, duration) => sum + duration, 0)

    // Calculate average duration
    const averageDuration = availableVideos.length > 0 ? Math.round(totalDuration / availableVideos.length) : 0

    return {
      videoCount: videos.length,
      unavailableCount,
      averageLength: formatTime(averageDuration),
      totalDuration,
    }
  } catch (error) {
    console.error("Error calculating playlist stats:", error)
    return {
      videoCount: 0,
      unavailableCount: 0,
      averageLength: "0:00",
      totalDuration: 0,
    }
  }
}

// Format time for display
function formatTime(seconds: number): string {
  try {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    } else {
      return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
    }
  } catch (error) {
    console.error("Error formatting time:", error)
    return "0:00"
  }
}
