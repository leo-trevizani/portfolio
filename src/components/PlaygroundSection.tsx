import React, { useEffect, useRef } from 'react';
import { PLAYGROUND_ITEMS } from '../data/playground';
import { Language } from '../types';

interface PlaygroundSectionProps {
  currentLang: Language;
}

export const PlaygroundSection: React.FC<PlaygroundSectionProps> = ({ currentLang }) => {
  // Duplicate items array 4 times for seamless infinite loop
  const duplicatedItems = [
    ...PLAYGROUND_ITEMS,
    ...PLAYGROUND_ITEMS,
    ...PLAYGROUND_ITEMS,
    ...PLAYGROUND_ITEMS,
  ];

  const trackRef = useRef<HTMLDivElement>(null);
  const xPosRef = useRef<number>(0);
  const velocityRef = useRef<number>(0.5); // Base subtle speed (px/frame)
  const baseSpeed = 0.5; // Gentle, subtle baseline auto-scroll
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const updatePosition = (now: number) => {
      const dt = Math.min((now - lastTime) / 16.666, 2); // Normalize frame time (~1 at 60fps)
      lastTime = now;

      // Smoothly decay velocity back towards base subtle speed
      velocityRef.current += (baseSpeed - velocityRef.current) * 0.05;

      // Update position based on current velocity
      xPosRef.current += velocityRef.current * dt;

      if (trackRef.current) {
        const fullWidth = trackRef.current.scrollWidth;
        // Half width corresponds to 2 copies of the items array
        const halfWidth = fullWidth / 2;

        if (halfWidth > 0) {
          // Seamless wrapping
          while (xPosRef.current >= halfWidth) {
            xPosRef.current -= halfWidth;
          }
          while (xPosRef.current < 0) {
            xPosRef.current += halfWidth;
          }

          trackRef.current.style.transform = `translate3d(-${xPosRef.current}px, 0, 0)`;
        }
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    // Mouse wheel / trackpad scroll listener for instant acceleration
    const handleWheel = (e: WheelEvent) => {
      // Calculate scroll intensity from vertical or horizontal wheel delta
      const delta = Math.abs(e.deltaY) + Math.abs(e.deltaX);
      const boost = Math.min(delta * 0.025, 4); // Capped boost per wheel event
      velocityRef.current = Math.min(velocityRef.current + boost, 10); // Max speed limit
    };

    // Page vertical scroll listener for scrolling the page up/down
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = Math.abs(currentScrollY - lastScrollYRef.current);
      lastScrollYRef.current = currentScrollY;

      if (deltaY > 0) {
        const boost = Math.min(deltaY * 0.06, 5);
        velocityRef.current = Math.min(velocityRef.current + boost, 12);
      }
    };

    lastScrollYRef.current = window.scrollY;

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="playground" className="py-12 bg-[var(--bg-canvas)] transition-colors duration-300 relative overflow-hidden">
      {/* Infinite Horizontal Auto-Scroll Image Stream */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Subtle Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--bg-canvas)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--bg-canvas)] to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-6 w-max will-change-transform"
          style={{ transform: 'translate3d(0, 0, 0)' }}
        >
          {duplicatedItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 relative overflow-hidden rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] group"
            >
              <div className="h-64 sm:h-80 aspect-[16/10] overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Floating Tags */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-black/60 backdrop-blur-md text-white/90 border border-white/10 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


