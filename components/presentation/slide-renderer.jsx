"use client"

import { TitleSlide } from "./slides/title-slide"
import { ContentSlide } from "./slides/content-slide"
import { ComparisonSlide } from "./slides/comparison-slide"
import { TimelineSlide } from "./slides/timeline-slide"
import { DiagramSlide } from "./slides/diagram-slide"

export function SlideRenderer({ slide, slideNumber }) {
  switch (slide.type) {
    case "title":
      return <TitleSlide slide={slide} slideNumber={slideNumber} />
    case "content":
      return <ContentSlide slide={slide} slideNumber={slideNumber} />
    case "comparison":
      return <ComparisonSlide slide={slide} slideNumber={slideNumber} />
    case "timeline":
      return <TimelineSlide slide={slide} slideNumber={slideNumber} />
    case "diagram":
      return <DiagramSlide slide={slide} slideNumber={slideNumber} />
    default:
      return <ContentSlide slide={slide} slideNumber={slideNumber} />
  }
}
