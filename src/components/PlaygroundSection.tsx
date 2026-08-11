import React from 'react';
import { PLAYGROUND_ITEMS } from '../data/playground';
import { Language } from '../types';
import { motion } from 'motion/react';

interface PlaygroundSectionProps {
  currentLang: Language;
}

export const PlaygroundSection: React.FC<PlaygroundSectionProps> = ({ currentLang }) => {
  // Duplicate items array to create seamless loop
  const duplicatedItems = [...PLAYGROUND_ITEMS, ...PLAYGROUND_ITEMS, ...PLAYGROUND_ITEMS, ...PLAYGROUND_ITEMS];

  return (
    <section id="playground" className="py-12 bg-[var(--bg-canvas)] transition-colors duration-300 relative overflow-hidden">
      {/* Infinite Horizontal Auto-Scroll Image Stream */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Subtle Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--bg-canvas)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--bg-canvas)] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 75,
            repeat: Infinity,
          }}
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
        </motion.div>
      </div>
    </section>
  );
};

