"use client";

import { useEffect, useRef, useState } from "react";
import {
  Monitor, Globe, Briefcase, BookOpen, Layers, Code, Award, Grid,
  Heart, Zap, Cpu, Flag
} from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineData: (TimelineItem & { Icon?: any })[] = [
  { year: "2021", title: "First PC", description: "A 386 running DOS and Windows 3.1 - wrote my first programs in QBasic. The start of everything.", Icon: Monitor },
  { year: "2023", title: "HTML & Family", description: "First web experiments and learning the basics of HTML/CSS.", Icon: Globe },
  { year: "2024", title: "Freelance Path", description: "Started doing freelance projects and small client work.", Icon: Briefcase },
  { year: "2025", title: "First CRM & Teaching", description: "Built a simple CRM and gave programming lessons.", Icon: BookOpen },
];

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const autoplayInterval = 4500;

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return;
    const left = el.offsetLeft - container.clientWidth / 2 + el.clientWidth / 2;
    container.scrollTo({ left, behavior: "smooth" });
  };

  const goTo = (index: number) => {
    const idx = Math.max(0, Math.min(index, timelineData.length - 1));
    setActive(idx);
  };

  useEffect(() => {
    scrollToIndex(active);
  }, [active]);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setActive((prev) => {
        const next = prev + 1 >= timelineData.length ? 0 : prev + 1;
        return next;
      });
    }, autoplayInterval);
    return () => clearInterval(id);
  }, [playing]);

  useEffect(() => {
    itemRefs.current = Array(timelineData.length).fill(null);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-8 md:py-12 px-2 md:px-4 w-full" tabIndex={0} aria-label="Timeline">

      {/* Player */}
      <div className="flex flex-col items-center w-full max-w-6xl">
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => { 
              setPlaying(false); 
              const prevIndex = active - 1 < 0 ? timelineData.length - 1 : active - 1;
              goTo(prevIndex);
            }}
            className="p-2 rounded-full bg-[hsl(var(--surface)/0.6)] hover:bg-[hsl(var(--surface)/0.75)] transition-colors text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--primary))]"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          </button>

          <button
            type="button"
            aria-label="Play"
            aria-pressed={!playing}
            onClick={() => setPlaying((p) => !p)}
            className="p-2 rounded-full bg-[hsl(var(--surface)/0.6)] hover:bg-[hsl(var(--surface)/0.75)] transition-colors text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--primary))]"
          >
            {playing ? (
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h4v12H6zM14 6h4v12h-4z" /></svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7L8 5z" /></svg>
            )}
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() => { 
              setPlaying(false); 
              const nextIndex = active + 1 >= timelineData.length ? 0 : active + 1;
              goTo(nextIndex);
            }}
            className="p-2 rounded-full bg-[hsl(var(--surface)/0.6)] hover:bg-[hsl(var(--surface)/0.75)] transition-colors text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--primary))]"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
          </button>

          <span className="text-xs md:text-sm text-[hsl(var(--text-secondary))] font-mono ml-1 md:ml-2">{active + 1} / {timelineData.length}</span>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-[0.2rem] md:gap-[0.3rem] px-2 md:px-4 h-8 md:h-9 mb-4 md:mb-6" role="tablist" aria-label="Timeline progress">
          {timelineData.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Go to item ${i + 1}: ${timelineData[i].year}`}
              tabIndex={i === active ? 0 : -1}
              onClick={() => { setPlaying(false); goTo(i); }}
              className="w-[1.8rem] h-[1.8rem] md:w-[2.2rem] md:h-[2.2rem] rounded-full flex items-center justify-center bg-transparent border-none cursor-pointer"
            >
              <span
                className={`w-[0.65rem] h-[0.65rem] md:w-[0.8rem] md:h-[0.8rem] rounded-full transition-all duration-200 ${i === active ? "scale-110" : ""}`}
                style={{ background: i === active ? "hsl(var(--primary))" : "hsl(var(--surface))" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Timeline strip */}
      <div className="w-full max-w-6xl mx-auto relative flex justify-center">
        <div className="overflow-x-auto overflow-y-visible no-scrollbar w-full" ref={containerRef}>
          <div className="relative mb-8 flex items-start mx-auto" role="group" aria-label="Timeline navigation" style={{ width: timelineData.length * 100 + 600, paddingLeft: 300, paddingRight: 300, paddingBottom: 140 }}>

            {/* background fading line */}
            <div className="absolute h-0.5 left-0 right-0" style={{ top: 62, background: "linear-gradient( to right, transparent 0%, hsl(var(--primary) / 0.15) 5%, hsl(var(--primary) / 0.25) 15%, hsl(var(--primary) / 0.25) 85%, hsl(var(--primary) / 0.15) 95%, transparent 100% )" }} />

            {timelineData.map((item, i) => {
              const IconComponent = item.Icon;
              return (
                <div 
                  key={i} 
                  ref={(el) => { itemRefs.current[i] = el; }}
                  className="flex flex-col items-center relative group" 
                  style={{ width: 100, flexShrink: 0, minHeight: 120 }}
                >
                  <button
                    type="button"
                    onClick={() => { setPlaying(false); goTo(i); }}
                    aria-label={`${item.year}: ${item.title}`}
                    aria-current={i === active}
                    className="flex flex-col items-center cursor-pointer px-2 bg-transparent border-none"
                  >
                    <div className="text-xs md:text-sm mb-3 md:mb-4 font-mono tracking-wider font-semibold" style={{ color: i === active ? 'hsl(var(--primary))' : 'hsl(var(--text-secondary))', opacity: i === active ? 1 : 0.6, transform: i === active ? 'scale(1.1)' : undefined }}>{item.year}</div>

                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center relative z-10 transition-transform" style={{ transform: i === active ? 'translateY(0)' : 'translateY(12px)' }}>
                      <div className="rounded-full p-1" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: i === active ? 'hsl(var(--primary) / 0.12)' : 'hsl(var(--surface))', border: `1px solid ${ i === active ? 'hsl(var(--primary))' : 'hsl(var(--surface))' }` }}>
                        {IconComponent && (
                          <IconComponent 
                            className="w-4 h-4 md:w-6 md:h-6" 
                            style={{ color: i === active ? 'hsl(var(--primary))' : 'hsl(var(--text-secondary))' }}
                            strokeWidth={1.5}
                          />
                        )}
                      </div>
                    </div>
                  </button>

                  <div className="absolute w-0.5 h-16 z-10 origin-top" style={{ top: 62, left: '50%', transform: 'translateX(-50%) scaleY(' + (i === active ? '1' : '0') + ')', opacity: i === active ? 1 : 0, background: `linear-gradient(${ i === active ? 'rgb(52, 211, 153)' : 'transparent' }, rgba(52,211,153,0.06))` }} />

                  <div className="absolute h-px" style={{ top: 62, left: 50, width: 50, backgroundColor: 'hsl(var(--surface) / 0.15)' }}>
                    <div className="absolute w-0.5 h-3 -translate-y-1/2" style={{ left: 20, backgroundColor: 'hsl(var(--surface) / 0.2)' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Description / Popover */}
      <div className="w-full max-w-6xl mx-auto flex justify-center pointer-events-none z-30 px-4" style={{ marginTop: -60 }}>
        <div className="z-20 backdrop-blur-sm rounded-lg shadow-2xl pointer-events-auto" style={{ backgroundColor: 'hsl(var(--surface) / 0.95)', borderColor: 'hsl(var(--border))', width: '100%', maxWidth: 500, padding: '12px 16px', minHeight: 90, overflow: 'hidden' }}>
          <div className="text-center">
            <h3 className="text-xs md:text-sm font-semibold mb-1 leading-tight" style={{ color: 'hsl(var(--primary))' }}>{timelineData[active].title}</h3>
            <p className="text-[0.65rem] md:text-xs leading-relaxed" style={{ color: 'hsl(var(--text-secondary))' }}>{timelineData[active].description}</p>
          </div>
        </div>
      </div>

    </section>
  );
}