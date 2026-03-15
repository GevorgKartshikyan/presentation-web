"use client"

import { ChevronLeft, ChevronRight, Maximize2, Minimize2, StickyNote, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { slidesData } from "@/lib/slides-data"

export function NavigationBar({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onGoToSlide,
  onToggleNotes,
  onToggleFullscreen,
  showNotes,
  isFullscreen,
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={onPrev}
            disabled={currentSlide === 0}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="min-w-[100px]">
                <Grid3X3 className="w-4 h-4 mr-2" />
                {currentSlide + 1} / {totalSlides}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="max-h-[400px] overflow-y-auto">
              {slidesData.map((slide, index) => (
                <DropdownMenuItem
                  key={index}
                  onClick={() => onGoToSlide(index)}
                  className={currentSlide === index ? "bg-accent" : ""}
                >
                  <span className="font-mono text-xs text-muted-foreground mr-2">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="truncate max-w-[200px]">{slide.title}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            size="icon"
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
          <kbd className="px-2 py-1 bg-secondary rounded text-xs">Space</kbd>
          <span>կամ</span>
          <kbd className="px-2 py-1 bg-secondary rounded text-xs">Arrow Keys</kbd>
          <span>նավիգացիայի համար</span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant={showNotes ? "default" : "outline"}
            size="icon"
            onClick={onToggleNotes}
            aria-label="Toggle speaker notes"
            title="Խոսնակի նշումներ (N)"
          >
            <StickyNote className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={onToggleFullscreen}
            aria-label="Toggle fullscreen"
            title="Լիաէկրան ռեժիմ (F11)"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
