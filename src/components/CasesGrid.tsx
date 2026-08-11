import React from 'react';
import { CASE_STUDIES } from '../data/cases';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CasesGridProps {
  currentLang: Language;
  onSelectCase: (slug: string) => void;
}

export const CasesGrid: React.FC<CasesGridProps> = ({ currentLang, onSelectCase }) => {
  const t = TRANSLATIONS[currentLang].casesSection;

  return (
    <section id="cases" className="py-24 bg-[var(--bg-canvas)] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[var(--border-subtle)] pb-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text-muted)] mb-4">
              {t.badge}
            </div>
            <h2 className="text-4xl sm:text-5xl font-medium text-[var(--color-text-heading)] tracking-tight">
              {t.title}
            </h2>
          </div>
          <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-md font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CASE_STUDIES.map((caseItem, idx) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => onSelectCase(caseItem.slug)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Cover Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--bg-surface)] mb-6 rounded-2xl border border-[var(--border-color)]">
                  <img
                    src={caseItem.coverImage}
                    alt={caseItem.client}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Card Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]">
                      {caseItem.client}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border-color)]" />
                    <span className="text-xs text-[var(--color-text-muted)] truncate max-w-[200px]">
                      {caseItem.metricsHighlight}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium text-[var(--color-text-heading)] group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)] transition-colors leading-tight">
                    {caseItem.title[currentLang]}
                  </h3>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
                <span className="text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-heading)] transition-colors">
                  {t.viewFullCase}
                </span>
                <ArrowUpRight className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-text-heading)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
