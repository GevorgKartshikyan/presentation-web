"use client"

import { Clock } from "lucide-react"

export function ProgressBar({ current, total, elapsedMinutes, totalMinutes }) {
  const progress = ((current + 1) / total) * 100

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-secondary">
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-card/80 backdrop-blur-sm border-b border-border text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{elapsedMinutes} / {totalMinutes} րոպե</span>
        </div>
        <div className="text-muted-foreground">
            Վեբ ծրագրավորում
        </div>
        <div className="text-muted-foreground font-mono">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  )
}
