"use client"

import { Skull, Info } from "lucide-react"

export function TimelineSlide({ slide, slideNumber }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-primary font-mono text-sm">{String(slideNumber).padStart(2, '0')}</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          {slide.title}
        </h2>
      </div>

      {slide.subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground mb-8">{slide.subtitle}</p>
      )}

      {/* Browser wars timeline */}
      {slide.events && (
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-8">
            {slide.events.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-center gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                  <div className="bg-card border border-border rounded-lg p-4">
                    <div className="text-2xl font-bold text-primary mb-1">{event.year}</div>
                    <div className="font-medium text-foreground">{event.event}</div>
                    <div className="text-sm text-muted-foreground">{event.detail}</div>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1.5 z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dead technologies */}
      {slide.deadTech && (
        <div className="space-y-4">
          {slide.deadTech.map((tech, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                <Skull className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground text-lg">{tech.name}</h3>
                  <span className="text-xs bg-secondary px-2 py-1 rounded font-mono text-muted-foreground">
                    {tech.years}
                  </span>
                </div>
                <p className="text-muted-foreground">{tech.reason}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fun fact */}
      {slide.funFact && (
        <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4 mt-8 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: '600ms' }}>
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-foreground">{slide.funFact}</p>
        </div>
      )}
    </div>
  )
}
