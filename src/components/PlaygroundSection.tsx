import React from 'react';
import { PLAYGROUND_ITEMS } from '../data/playground';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';

interface PlaygroundSectionProps {
  currentLang: Language;
}

export const PlaygroundSection: React.FC<PlaygroundSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang].playgroundSection;

  // Duplicate items array to create seamless loop
  const duplicatedItems = [...PLAYGROUND_ITEMS, ...PLAYGROUND_ITEMS, ...PLAYGROUND_ITEMS, ...PLAYGROUND_ITEMS];

  return (
    <section id="playground" className="py-20 bg-[var(--bg-canvas)] transition-colors duration-300 relative border-t border-[var(--border-subtle)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text-muted)] mb-3">
              {t.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[var(--color-text-heading)] tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--color-text-muted)] max-w-md font-normal">
            {t.subtitle}
          </p>
        </div>

      </div>

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
              className="flex-shrink-0 relative overflow-hidden rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)]"
            >
              <div className="h-64 sm:h-80 aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[currentLang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

