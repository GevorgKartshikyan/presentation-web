"use client"

import { useState, useEffect, useCallback } from "react"
import { slidesData } from "@/lib/slides-data"
import { SlideRenderer } from "@/components/presentation/slide-renderer"
import { NavigationBar } from "@/components/presentation/navigation-bar"
import { ProgressBar } from "@/components/presentation/progress-bar"
import { SpeakerNotes } from "@/components/presentation/speaker-notes"

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNotes, setShowNotes] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const totalSlides = slidesData.length

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
    }
  }, [totalSlides])

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault()
        nextSlide()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prevSlide()
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen()
      } else if (e.key === "n" || e.key === "N") {
        setShowNotes(prev => !prev)
      } else if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide, toggleFullscreen, isFullscreen])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const slide = slidesData[currentSlide]
  const totalDuration = slidesData.reduce((acc, s) => acc + (s.duration || 0), 0)
  const elapsedDuration = slidesData.slice(0, currentSlide).reduce((acc, s) => acc + (s.duration || 0), 0)

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <ProgressBar 
        current={currentSlide} 
        total={totalSlides} 
        elapsedMinutes={elapsedDuration}
        totalMinutes={totalDuration}
      />
      
      <main className="flex-1 flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="w-full max-w-6xl">
          <SlideRenderer slide={slide} slideNumber={currentSlide + 1} />
        </div>
      </main>

      <NavigationBar
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onGoToSlide={goToSlide}
        onToggleNotes={() => setShowNotes(!showNotes)}
        onToggleFullscreen={toggleFullscreen}
        showNotes={showNotes}
        isFullscreen={isFullscreen}
      />

      {showNotes && slide.speakerNotes && (
        <SpeakerNotes notes={slide.speakerNotes} duration={slide.duration} />
      )}
    </div>
  )
}
