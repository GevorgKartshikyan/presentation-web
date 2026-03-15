"use client"

import { MessageSquare, Clock } from "lucide-react"

export function SpeakerNotes({ notes, duration }) {
  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-card border border-border rounded-lg shadow-lg p-4 animate-in slide-in-from-bottom-4 duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-medium text-foreground">
          <MessageSquare className="w-4 h-4 text-primary" />
            Խոսնակի նշումներ
        </div>
        {duration && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            ~{duration} րոպե
          </div>
        )}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{notes}</p>
    </div>
  )
}
