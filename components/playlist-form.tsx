"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

interface PlaylistFormProps {
  onSubmit: (url: string) => void
  isLoading: boolean
}

export default function PlaylistForm({ onSubmit, isLoading }: PlaylistFormProps) {
  const [url, setUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim()) {
      onSubmit(url.trim())
    }
  }

  return (
    <Card className="w-full bg-zinc-900/80 backdrop-blur-sm border-zinc-800 shadow-xl">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Paste YouTube Playlist URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500/20 text-white placeholder:text-zinc-500"
            />
            <p className="text-xs text-zinc-500">Supports public playlists only</p>
          </div>

          <Button
            type="submit"
            disabled={isLoading || !url.trim()}
            className="w-full bg-red-600 hover:bg-red-700 text-white hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] transition-all"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Playlist"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
