import { type NextRequest, NextResponse } from "next/server"
import {
  extractPlaylistId,
  fetchPlaylistDetails,
  fetchPlaylistVideos,
  calculatePlaylistStats,
  type PlaylistData,
} from "@/lib/youtube-api"

export async function POST(request: NextRequest) {
  try {
    // Get API key from environment variable
    const apiKey = process.env.YOUTUBE_API_KEY

    if (!apiKey) {
      console.error("YouTube API key is not configured")
      return NextResponse.json(
        {
          error: "YouTube API key is not configured. Please contact the administrator.",
        },
        { status: 500 },
      )
    }

    // Get playlist URL from request body
    const body = await request.json()
    const { url } = body

    if (!url) {
      return NextResponse.json({ error: "Playlist URL is required" }, { status: 400 })
    }

    console.log("Received playlist URL:", url)

    // Extract playlist ID
    const playlistId = extractPlaylistId(url)

    if (!playlistId) {
      return NextResponse.json(
        {
          error: "Invalid YouTube playlist URL. Please ensure you're using a valid YouTube playlist link.",
        },
        { status: 400 },
      )
    }

    console.log("Extracted playlist ID:", playlistId)

    // Validate playlist ID format
    if (!/^[a-zA-Z0-9_-]{18,34}$/.test(playlistId)) {
      return NextResponse.json(
        {
          error: "Invalid playlist ID format. Please check your playlist URL.",
        },
        { status: 400 },
      )
    }

    try {
      // Fetch playlist details
      console.log("Fetching playlist details...")
      const playlistDetails = await fetchPlaylistDetails(playlistId, apiKey)
      console.log("Playlist details fetched successfully:", playlistDetails.title)

      // Fetch all videos in the playlist
      console.log("Fetching playlist videos...")
      const videos = await fetchPlaylistVideos(playlistId, apiKey)
      console.log(`Fetched ${videos.length} videos`)

      if (videos.length === 0) {
        return NextResponse.json(
          {
            error: "This playlist appears to be empty or all videos are private/unavailable.",
          },
          { status: 400 },
        )
      }

      // Calculate playlist statistics
      console.log("Calculating playlist statistics...")
      const stats = calculatePlaylistStats(videos)

      // Combine data
      const playlistData: PlaylistData = {
        ...stats,
        title: playlistDetails.title,
        channelName: playlistDetails.channelTitle,
        videos,
      }

      console.log("Analysis completed successfully")
      return NextResponse.json(playlistData)
    } catch (apiError) {
      console.error("YouTube API specific error:", apiError)

      // Handle specific API errors
      if (apiError instanceof Error) {
        if (apiError.message.includes("quota")) {
          return NextResponse.json(
            {
              error: "YouTube API quota exceeded. Please try again later or contact the administrator.",
            },
            { status: 429 },
          )
        } else if (apiError.message.includes("not found") || apiError.message.includes("private")) {
          return NextResponse.json(
            {
              error: "Playlist not found or is private. Please ensure the playlist exists and is set to public.",
            },
            { status: 404 },
          )
        } else if (apiError.message.includes("API key")) {
          return NextResponse.json(
            {
              error: "Invalid API key. Please contact the administrator.",
            },
            { status: 401 },
          )
        }
      }

      return NextResponse.json(
        {
          error: apiError instanceof Error ? apiError.message : "Failed to fetch playlist data from YouTube",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("General API error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "An unexpected error occurred while analyzing the playlist",
      },
      { status: 500 },
    )
  }
}
