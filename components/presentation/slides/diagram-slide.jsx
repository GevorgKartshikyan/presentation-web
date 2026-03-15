"use client"

import { ArrowRight, Monitor, Server, Eye, EyeOff, Info } from "lucide-react"

export function DiagramSlide({ slide, slideNumber }) {
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

      {/* Request journey diagram */}
      {slide.steps && (
        <div className="space-y-8">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
            {slide.steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 md:gap-4 animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card border border-border rounded-lg p-4 text-center min-w-[100px] md:min-w-[120px]">
                  <div className="text-lg md:text-xl font-bold text-primary mb-1">{step.label}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{step.description}</div>
                </div>
                {index < slide.steps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
          
          {slide.funFact && (
            <div className="flex items-center justify-center gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4 max-w-lg mx-auto">
              <Info className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-foreground text-center">{slide.funFact}</p>
            </div>
          )}
        </div>
      )}

      {/* Frontend vs Backend comparison */}
      {slide.comparison && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Frontend */}
          <div className="bg-card border border-border rounded-xl p-6 animate-in fade-in slide-in-from-left-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{slide.comparison.frontend.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Eye className="w-4 h-4" />
                  {slide.comparison.frontend.subtitle}
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {slide.comparison.frontend.items.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg animate-in fade-in slide-in-from-left-2"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-card border border-border rounded-xl p-6 animate-in fade-in slide-in-from-right-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Server className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">{slide.comparison.backend.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <EyeOff className="w-4 h-4" />
                  {slide.comparison.backend.subtitle}
                </div>
              </div>
            </div>
            <ul className="space-y-3">
              {slide.comparison.backend.items.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg animate-in fade-in slide-in-from-right-2"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
