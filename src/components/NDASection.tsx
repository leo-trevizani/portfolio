import React from 'react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import { Lock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import ndaLogosImage from '../assets/images/nda_logos_showcase_1787749521966.jpg';

interface NDASectionProps {
  currentLang: Language;
  onNavigateToNDA: () => void;
}

export const NDASection: React.FC<NDASectionProps> = ({ currentLang, onNavigateToNDA }) => {
  const t = TRANSLATIONS[currentLang].ndaSection;

  return (
    <section id="nda-preview" className="py-16 sm:py-24 bg-[var(--bg-canvas)] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Mode Card container matching the site design tokens */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-[var(--color-dark-green)] text-white p-8 sm:p-10 lg:p-14 shadow-lg border border-[var(--color-dark-gray)]"
        >
          {/* Subtle brand ambient glow within the card */}
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-[var(--color-vibrant-green)]/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Multilingual Text & CTA (7 cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-dark-gray)] border border-white/10 w-fit mb-6">
                <Lock className="w-3.5 h-3.5 text-[var(--color-vibrant-green)]" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
                  {t.badge}
                </span>
              </div>

              {/* Main Multilingual Prompt Text */}
              <p className="text-2xl sm:text-3xl lg:text-[1.85rem] font-medium text-white leading-snug tracking-tight mb-8">
                {t.text}
              </p>

              {/* CTA Action */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <button
                  id="btn-nda-access"
                  onClick={onNavigateToNDA}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--color-vibrant-green)] text-white font-medium text-sm transition-transform duration-300 hover:scale-105 active:scale-95 shadow-sm group cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
                  <span>{t.cta}</span>
                  <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="flex items-center gap-2 text-xs text-white/70 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-vibrant-green)]" />
                  <span>{t.protectedLabel}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Logos Image / Showcase (5 cols on desktop) */}
            <div className="lg:col-span-5">
              <div
                onClick={onNavigateToNDA}
                className="group relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-[var(--color-dark-gray)] border border-white/10 cursor-pointer shadow-md transition-all duration-500 hover:border-[var(--color-vibrant-green)]/40"
              >
                <img
                  src={ndaLogosImage}
                  alt="Confidential NDA Projects Showcase"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

