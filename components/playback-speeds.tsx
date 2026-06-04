"use client"

import type React from "react"
import { useState } from "react"

interface PlaybackSpeedsProps {
  totalDuration: number
  selectedDuration?: number
}

function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = Math.floor(seconds % 60)

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  } else {
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }
}

export default function PlaybackSpeeds({ totalDuration, selectedDuration }: PlaybackSpeedsProps) {
  const [customSpeed, setCustomSpeed] = useState<string>("2.5")
  const duration = selectedDuration !== undefined ? selectedDuration : totalDuration

  const speeds = [1.25, 1.5, 1.75, 2.0]
  const parsedCustomSpeed = Number.parseFloat(customSpeed)
  const isValidCustomSpeed = !isNaN(parsedCustomSpeed) && parsedCustomSpeed > 0

  return (
    <div className="w-full border-2 border-white/20 bg-black animate-fadeIn">
      <div className="bg-white text-black p-2">
        <h3 className="font-black uppercase tracking-widest text-center text-xs">Time Projection</h3>
      </div>

      <div className="flex flex-col divide-y-2 divide-white/20">
        {speeds.map((speed) => {
          const newDuration = Math.round(duration / speed)
          const savedTime = duration - newDuration

          return (
            <div key={speed} className="group flex items-center justify-between p-4 bg-black hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <span className="w-12 text-lg font-bold text-white text-center font-mono">{speed}x</span>
                <span className="text-white/30 hidden sm:inline font-mono">--{">"}</span>
                <span className="text-lg font-bold text-white font-mono">{formatTime(newDuration)}</span>
              </div>
              <div className="text-red-500 text-xs font-mono font-bold">
                SAVED: {formatTime(savedTime)}
              </div>
            </div>
          )
        })}

        {/* Custom Speed */}
        <div className="group flex items-center justify-between p-4 bg-black hover:bg-white/10 transition-colors focus-within:bg-white/5 border-t-2 border-white/20">
          <div className="flex items-center gap-4">
            <div className="flex items-center w-12 border-b-2 border-white/20 focus-within:border-red-600 transition-colors">
              <input
                type="text"
                value={customSpeed}
                onChange={(e) => setCustomSpeed(e.target.value)}
                className="w-full bg-transparent border-none text-lg font-bold text-white font-mono text-center focus:outline-none focus:ring-0 p-0"
                aria-label="Custom playback speed"
              />
              <span className="text-white/50 font-bold font-mono">x</span>
            </div>
            <span className="text-white/30 hidden sm:inline font-mono">--{">"}</span>
            <span className="text-lg font-bold text-white font-mono">
              {isValidCustomSpeed ? formatTime(Math.round(duration / parsedCustomSpeed)) : "--:--:--"}
            </span>
          </div>
          {isValidCustomSpeed && (
            <div className="text-red-500 text-xs font-mono font-bold">
              SAVED: {formatTime(duration - Math.round(duration / parsedCustomSpeed))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
