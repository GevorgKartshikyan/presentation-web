"use client"

import { Check, X, ThumbsUp, ThumbsDown } from "lucide-react"

export function ComparisonSlide({ slide, slideNumber }) {
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

      {/* Three pillars comparison (HTML, CSS, JS) */}
      {slide.items && slide.items[0]?.analogy && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slide.items.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {item.name}
              </div>
              <div className="text-xl text-foreground mb-2">{item.analogy}</div>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <code className="text-sm bg-secondary px-3 py-2 rounded-md font-mono text-primary">
                {item.example}
              </code>
            </div>
          ))}
        </div>
      )}

      {/* Myths vs Reality */}
      {slide.myths && (
        <div className="space-y-4">
          {slide.myths.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <X className="w-6 h-6 text-destructive flex-shrink-0" />
                <span className="text-foreground">{item.myth}</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="text-foreground">{item.reality}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Good vs Bad UX examples */}
      {slide.examples && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsUp className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Լավ UX</h3>
            </div>
            {slide.examples.good.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-primary/10 border border-primary/20 rounded-lg animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-medium text-foreground">{item.company}</div>
                <div className="text-sm text-muted-foreground">{item.reason}</div>
                <div className="text-sm text-muted-foreground">{item.details}</div>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <ThumbsDown className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-semibold text-foreground">Վատ UX</h3>
            </div>
            {slide.examples.bad.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg animate-in fade-in slide-in-from-right-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-medium text-foreground">{item.company}</div>
                <div className="text-sm text-muted-foreground">{item.reason}</div>
                <div className="text-sm text-muted-foreground">{item.details}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical practices */}
      {slide.practices && (
        <div className="space-y-4">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b border-border">
            <div className="col-span-4 flex items-center gap-2">
              <X className="w-4 h-4 text-destructive" />
                Վատ է
            </div>
            <div className="col-span-4 flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
                Լավ է
            </div>
            <div className="col-span-4">Ինչո՞ւ է դա կարևոր։</div>
          </div>
          {slide.practices.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-4 items-center py-4 border-b border-border/50 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="col-span-4 text-destructive/80 decoration-destructive/40">
                {item.bad}
              </div>
              <div className="col-span-4 text-primary font-medium">
                {item.good}
              </div>
              <div className="col-span-4 text-muted-foreground text-sm">
                {item.why}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
