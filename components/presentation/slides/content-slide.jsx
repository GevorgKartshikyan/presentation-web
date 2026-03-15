"use client"

import { 
  Globe, Users, History, Zap, ThumbsUp, Monitor, Server, Layers, Palette, Cloud, CheckCircle,
  Clock, Smartphone, Lock, Type, Eye, Compass, Accessibility, Code, ExternalLink, Sparkles,
  AlertTriangle, Quote, TrendingUp, BookOpen, Terminal, Wrench, X, Check, Lightbulb, Info,
  AlertOctagon, ShieldAlert, MousePointer
} from "lucide-react"

const iconMap = {
  globe: Globe,
  users: Users,
  history: History,
  zap: Zap,
  thumbsUp: ThumbsUp,
  monitor: Monitor,
  server: Server,
  layers: Layers,
  palette: Palette,
  cloud: Cloud,
  checkCircle: CheckCircle,
  clock: Clock,
  smartphone: Smartphone,
  lock: Lock,
  type: Type,
  eye: Eye,
  compass: Compass,
  accessibility: Accessibility,
  code: Code,
}

export function ContentSlide({ slide, slideNumber }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-primary font-mono text-sm">{String(slideNumber).padStart(2, '0')}</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
          {slide.title}
        </h2>
      </div>

      {slide.subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground mb-6">{slide.subtitle}</p>
      )}

      {/* Agenda items */}
      {slide.items && (
        <div className="grid gap-4 md:gap-6">
          {slide.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Globe
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-lg md:text-xl text-foreground">{item.text}</span>
              </div>
            )
          })}
        </div>
      )}

      {/* Roles grid */}
      {slide.roles && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slide.roles.map((role, index) => {
            const Icon = iconMap[role.icon] || Users
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-5 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{role.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{role.desc}</p>
                <p className="text-xs text-primary font-mono">{role.tools}</p>
              </div>
            )
          })}
        </div>
      )}

      {/* AI Tools */}
      {slide.aiTools && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {slide.aiTools.map((tool, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-5 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{tool.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{tool.desc}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {tool.impact}
                </div>
              </div>
            ))}
          </div>
          {slide.quote && (
            <div className="flex items-start gap-4 bg-primary/5 border border-primary/20 rounded-lg p-6 mt-6">
              <Quote className="w-8 h-8 text-primary flex-shrink-0" />
              <p className="text-lg italic text-foreground">{slide.quote}</p>
            </div>
          )}
        </div>
      )}

      {/* Disasters */}
      {slide.disasters && (
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
          {slide.disasters.map((disaster, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-4 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                  <h3 className="font-semibold text-foreground">{disaster.name}</h3>
                  <span className="ml-auto text-destructive font-bold text-sm whitespace-nowrap">{disaster.cost}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{disaster.cause}</p>
                <div className="flex items-start gap-2 bg-primary/10 px-3 py-2 rounded-lg">
                  <Lightbulb className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground font-medium">{disaster.lesson}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DevTools with intro */}
      {slide.devtools && (
        <div className="space-y-4">
          {slide.devtoolsIntro && (
            <div className="bg-secondary/30 border border-border rounded-lg p-4 mb-4">
              <p className="text-foreground leading-relaxed">{slide.devtoolsIntro}</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {slide.devtools.map((tool, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-4 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{tool.tab}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{tool.desc}</p>
                <div className="bg-secondary/50 px-3 py-2 rounded text-xs text-foreground mb-2">
                  <span className="text-muted-foreground">Пример: </span>{tool.useCase}
                </div>
                {tool.demo && (
                  <div className="bg-primary/10 px-3 py-2 rounded text-xs text-primary">
                    {tool.demo}
                  </div>
                )}
              </div>
            ))}
          </div>
          {slide.howToOpen && (
            <div className="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-lg p-4">
              <Wrench className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <span className="text-sm text-muted-foreground">Как открыть: </span>
                <code className="text-primary font-mono font-bold">{slide.howToOpen}</code>
              </div>
            </div>
          )}
          {slide.funFact && (
            <div className="bg-secondary/30 border border-border rounded-lg p-4">
              <p className="text-sm text-foreground">{slide.funFact}</p>
            </div>
          )}
        </div>
      )}

      {/* Code Examples with languages */}
      {slide.codeExamples && (
        <div className="space-y-4 max-h-[62vh] overflow-y-auto pr-2">
          {slide.codeExamples.map((example, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-secondary/50 px-4 py-2 border-b border-border flex items-center gap-2">
                <Code className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-foreground text-sm">{example.title}</h3>
                {example.language && (
                  <span className="ml-auto text-xs bg-primary/20 text-primary px-2 py-0.5 rounded font-mono">
                    {example.language}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                {/* Bad example */}
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <X className="w-4 h-4 text-destructive" />
                    <span className="text-xs font-medium text-destructive">Плохо</span>
                  </div>
                  <pre className="bg-destructive/10 border border-destructive/20 rounded-lg p-2 overflow-x-auto text-xs">
                    <code className="text-foreground whitespace-pre">{example.bad}</code>
                  </pre>
                </div>
                {/* Good example */}
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-xs font-medium text-primary">Хорошо</span>
                  </div>
                  <pre className="bg-primary/10 border border-primary/20 rounded-lg p-2 overflow-x-auto text-xs">
                    <code className="text-foreground whitespace-pre">{example.good}</code>
                  </pre>
                </div>
              </div>
              <div className="bg-secondary/30 px-3 py-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <Lightbulb className="w-3 h-3 inline mr-1 text-primary" />
                  {example.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Dark Patterns with intro */}
      {slide.patterns && (
        <div className="space-y-4">
          {slide.darkPatternsIntro && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">{slide.darkPatternsIntro}</p>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto pr-2">
            {slide.patterns.map((pattern, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-4 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MousePointer className="w-4 h-4 text-destructive" />
                  <h3 className="font-semibold text-foreground text-sm">{pattern.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{pattern.desc}</p>
                <div className="bg-destructive/10 px-2 py-1.5 rounded text-xs text-foreground mb-2">
                  <span className="text-destructive font-medium">Пример: </span>{pattern.example}
                </div>
                {pattern.howToSpot && (
                  <div className="bg-primary/10 px-2 py-1.5 rounded text-xs text-foreground">
                    <span className="text-primary font-medium">Как заметить: </span>{pattern.howToSpot}
                  </div>
                )}
              </div>
            ))}
          </div>
          {slide.funFact && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <p className="text-sm text-foreground">{slide.funFact}</p>
            </div>
          )}
        </div>
      )}

      {/* Stats */}
      {slide.stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {slide.stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-6 text-center animate-in fade-in zoom-in-95"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.detail}</div>
            </div>
          ))}
        </div>
      )}

      {/* Checklist */}
      {slide.checklist && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.checklist.map((item, index) => {
            const Icon = iconMap[item.icon] || CheckCircle
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg animate-in fade-in slide-in-from-left-4"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">{item.item}</span>
              </div>
            )
          })}
        </div>
      )}

      {/* Resources */}
      {slide.resources && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {slide.resources.map((resource, index) => (
            <div 
              key={index}
              className="flex items-center justify-between p-4 bg-card border border-border rounded-lg animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium text-foreground">{resource.name}</h3>
                  <p className="text-sm text-muted-foreground">{resource.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-primary text-sm">
                <span className="font-mono">{resource.url}</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Takeaways */}
      {slide.takeaways && (
        <div className="space-y-4">
          {slide.takeaways.map((takeaway, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg animate-in fade-in slide-in-from-left-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <span className="text-lg text-foreground">{takeaway}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
