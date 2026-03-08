import { Card, CardContent } from "@/components/ui/card"
import { formatTime } from "@/lib/utils"
import type { PlaylistData } from "@/lib/youtube-api"

interface PlaylistMetadataProps {
  data: PlaylistData
}

export default function PlaylistMetadata({ data }: PlaylistMetadataProps) {
  return (
    <Card className="w-full bg-zinc-900/80 backdrop-blur-sm border-zinc-800 shadow-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">{data.title}</h2>

          <div className="grid gap-3">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Channel</span>
              <span className="text-white font-medium">{data.channelName}</span>
            </div>

            <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Videos</span>
              <span className="text-white font-medium">
                {data.videoCount} videos
                {data.unavailableCount > 0 && (
                  <span className="text-zinc-500 ml-1">({data.unavailableCount} unavailable)</span>
                )}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
              <span className="text-zinc-400">Average Length</span>
              <span className="text-white font-medium font-mono">{data.averageLength}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Total Duration</span>
              <span className="text-white font-bold font-mono">{formatTime(data.totalDuration)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
