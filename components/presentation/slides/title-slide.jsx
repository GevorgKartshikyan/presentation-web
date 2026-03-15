"use client"

import { Globe, MessageCircleQuestion } from "lucide-react"

export function TitleSlide({ slide, slideNumber }) {
  const isQASlide = slide.title === "Вопросы?"

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        {isQASlide ? (
          <MessageCircleQuestion className="w-20 h-20 text-primary mx-auto" strokeWidth={1.5} />
        ) : (
          <Globe className="w-20 h-20 text-primary mx-auto" strokeWidth={1.5} />
        )}
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 text-balance">
        {slide.title}
      </h1>

      {slide.subtitle && (
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl text-pretty">
          {slide.subtitle}
        </p>
      )}

      {slide.discussionQuestions && (
        <div className="mt-12 space-y-4 max-w-2xl">
          {slide.discussionQuestions.map((question, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-4 text-left animate-in fade-in slide-in-from-bottom-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <p className="text-lg text-foreground">{question}</p>
            </div>
          ))}
        </div>
      )}

      {slideNumber === 1 && (
        <div className="mt-16 flex items-center gap-2 text-muted-foreground text-sm">
          <span>Օգտագործել</span>
          <kbd className="px-2 py-1 bg-secondary rounded text-xs font-mono">Space</kbd>
          <span>կամ</span>
          <kbd className="px-2 py-1 bg-secondary rounded text-xs font-mono">Arrow Keys</kbd>
          <span>նավիգացիայի համար</span>
        </div>
      )}
    </div>
  )
}
