import React from 'react';
import { ArrowDownRight, Mail } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import profilePhoto from '../assets/images/profile_photo_1786018872374.png';

interface HeroProps {
  currentLang: Language;
  onNavigateToCases: () => void;
  onNavigateToContact: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
};

export const Hero: React.FC<HeroProps> = ({ currentLang, onNavigateToCases, onNavigateToContact }) => {
  const t = TRANSLATIONS[currentLang].hero;

  return (
    <section id="sobre" className="pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(52,168,83,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Left Column: Massive Editorial Copy */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-10">
            
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-[-0.03em] text-[var(--color-text-heading)] leading-[1.05]">
                {t.title}
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed max-w-xl font-normal">
                {t.subtitle}
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onNavigateToCases}
                className="px-8 py-4 rounded-full bg-[var(--color-vibrant-green)] text-white font-medium text-sm transition-transform duration-300 hover:scale-105 active:scale-95 flex items-center gap-3 group shadow-sm"
              >
                <span>{t.viewCases}</span>
                <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onNavigateToContact}
                className="px-8 py-4 rounded-full bg-transparent border border-[var(--color-dark-green)] dark:border-[var(--border-color)] text-[var(--color-dark-green)] dark:text-[var(--color-text-main)] hover:bg-[var(--bg-surface)] font-medium text-sm transition-colors duration-300 flex items-center gap-3"
              >
                <Mail className="w-4 h-4 text-[var(--color-dark-green)] dark:text-[var(--color-vibrant-green)]" />
                <span>{t.getInTouch}</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Clean Photographic Statement */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col justify-center">
            <div className="relative w-full aspect-[3/4] sm:aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-color)] mt-4 lg:mt-0">
              <img
                src={profilePhoto}
                alt="Leo Trevizani"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

        </motion.div>

        {/* Highlights Row underneath */}
        <motion.div 
          className="mt-24 lg:mt-32 pt-10 border-t border-[var(--border-subtle)] grid grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div>
            <div className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--color-text-heading)] mb-1">
              {t.highlight1Value}
            </div>
            <div className="text-xs text-[var(--color-text-muted)] font-medium tracking-wide uppercase">
              {t.highlight1Label}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--color-text-heading)] mb-1">
              {t.highlight2Value}
            </div>
            <div className="text-xs text-[var(--color-text-muted)] font-medium tracking-wide uppercase">
              {t.highlight2Label}
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-4xl font-medium tracking-tight text-[var(--color-text-heading)] mb-1">
              {t.highlight3Value}
            </div>
            <div className="text-xs text-[var(--color-text-muted)] font-medium tracking-wide uppercase">
              {t.highlight3Label}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
