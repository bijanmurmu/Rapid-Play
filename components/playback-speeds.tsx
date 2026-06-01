"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { formatTime } from "@/lib/utils"

interface PlaybackSpeedsProps {
  totalDuration: number
  selectedDuration?: number
}

const PRESET_SPEEDS = [1.25, 1.5, 1.75, 2]

export default function PlaybackSpeeds({ totalDuration, selectedDuration }: PlaybackSpeedsProps) {
  const [customSpeed, setCustomSpeed] = useState("")
  const [calculatedCustomTime, setCalculatedCustomTime] = useState<number | null>(null)

  // Use selected duration if provided, otherwise use total duration
  const activeDuration = selectedDuration ?? totalDuration
  const isUsingSelection = selectedDuration !== undefined && selectedDuration !== totalDuration

  const handleCalculateCustom = () => {
    const speed = Number.parseFloat(customSpeed)
    if (!isNaN(speed) && speed > 0) {
      setCalculatedCustomTime(activeDuration / speed)
    }
  }

  return (
    <Card className="w-full bg-zinc-900/80 backdrop-blur-sm border-zinc-800 shadow-xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white">Watch Time at Different Speeds</h3>
          {isUsingSelection && (
            <span className="text-xs bg-red-600/20 text-red-400 px-2 py-1 rounded border border-red-600/50">
              Selected Videos
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {PRESET_SPEEDS.map((speed) => {
            const durationInSeconds = activeDuration / speed;
            return (
            <div
              key={speed}
              className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-700/50 rounded-lg p-3 text-center shadow-lg hover:shadow-red-500/20 transition-all duration-200"
            >
              <div className="text-zinc-300 text-sm mb-1">{speed}x Speed</div>
              <div className="text-white font-mono font-bold">{formatTime(durationInSeconds)}</div>
              <div className="text-zinc-500 text-[10px] mt-1">
                Finishes {new Date(Date.now() + durationInSeconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', weekday: 'short' })}
              </div>
            </div>
            );
          })}
        </div>

        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="number"
                placeholder="Custom Speed"
                value={customSpeed}
                onChange={(e) => setCustomSpeed(e.target.value)}
                min="0.1"
                step="0.1"
                className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500/20 text-white placeholder:text-zinc-500"
              />
            </div>
            <Button
              onClick={handleCalculateCustom}
              disabled={!customSpeed || isNaN(Number.parseFloat(customSpeed)) || Number.parseFloat(customSpeed) <= 0}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Calculate
            </Button>
          </div>

          {calculatedCustomTime !== null && (
            <div className="bg-gradient-to-br from-red-900/20 to-pink-900/20 border border-red-700/50 rounded-lg p-3 text-center animate-fadeIn">
              <div className="text-zinc-300 text-sm mb-1">At {Number.parseFloat(customSpeed).toFixed(2)}x Speed</div>
              <div className="text-white font-mono font-bold">{formatTime(calculatedCustomTime)}</div>
              <div className="text-zinc-500 text-[10px] mt-1">
                Finishes {new Date(Date.now() + calculatedCustomTime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', weekday: 'short' })}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
