import React from 'react';
import { CASE_STUDIES } from '../data/cases';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface CaseDetailProps {
  slug: string;
  currentLang: Language;
  onNavigateHome: () => void;
  onSelectCase: (slug: string) => void;
}

export const CaseDetail: React.FC<CaseDetailProps> = ({
  slug,
  currentLang,
  onNavigateHome,
  onSelectCase,
}) => {
  const currentCaseIndex = CASE_STUDIES.findIndex((c) => c.slug === slug);
  const caseItem = CASE_STUDIES[currentCaseIndex] || CASE_STUDIES[0];
  const t = TRANSLATIONS[currentLang].caseDetail;

  const prevCase = CASE_STUDIES[(currentCaseIndex - 1 + CASE_STUDIES.length) % CASE_STUDIES.length];
  const nextCase = CASE_STUDIES[(currentCaseIndex + 1) % CASE_STUDIES.length];

  const challenge = caseItem.challenge[currentLang];
  const solution = caseItem.solution[currentLang];
  const results = caseItem.results[currentLang];
  const futureVision = caseItem.futureVision[currentLang];

  return (
    <article className="pt-28 pb-32 min-h-screen bg-[var(--bg-canvas)] transition-colors duration-300">
      
      {/* Case Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6 text-xs font-semibold uppercase tracking-widest text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]">
            <span>{caseItem.client}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-color)]" />
            <span className="text-[var(--color-text-muted)]">{caseItem.category}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-color)]" />
            <span className="text-[var(--color-text-muted)]">{caseItem.year}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-[var(--color-text-heading)] tracking-tight leading-[1.02]">
            {caseItem.title[currentLang]}
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-[var(--color-text-muted)] leading-relaxed font-normal">
            {caseItem.subtitle[currentLang]}
          </p>

          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-[var(--border-subtle)]">
            {caseItem.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1 bg-[var(--bg-surface)] text-[var(--color-text-muted)] border border-[var(--border-subtle)] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </header>

      {/* Cover Image Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-color)]"
        >
          <img
            src={caseItem.coverImage}
            alt={caseItem.client}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* Metric Highlight Summary Container */}
        <div className="mt-6 rounded-2xl p-6 sm:p-8 bg-[var(--color-vibrant-green)] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-widest text-white/80 block mb-1">
              Destaque de Impacto
            </span>
            <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {caseItem.metricsHighlight}
            </span>
          </div>
          <p className="text-sm sm:text-base font-medium text-white/90 max-w-lg leading-relaxed">
            {caseItem.metricLabel}
          </p>
        </div>
      </div>

      {/* Narrative Section Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
        
        {/* Section 1: Desafio (Challenge) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-12 border-t border-[var(--border-subtle)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text-muted)] block mb-2">
                01 / O Desafio
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-[var(--color-text-heading)] tracking-tight">
                {challenge.title}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed whitespace-pre-line">
                {challenge.description}
              </p>

              {/* Numbered key points without nested cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[var(--border-subtle)]">
                {challenge.keyPoints.map((point, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-xs font-semibold tracking-widest text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] block">
                      0{idx + 1}
                    </span>
                    <p className="text-sm text-[var(--color-text-main)] font-normal leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Pull Quote Callout */}
        {caseItem.pullQuote && (
          <motion.blockquote 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-16 border-t border-[var(--border-subtle)] my-20 relative"
          >
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Quote className="w-8 h-8 mx-auto text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] opacity-40" />
              <p className="text-2xl sm:text-4xl font-medium italic text-[var(--color-text-heading)] leading-snug tracking-tight">
                "{caseItem.pullQuote[currentLang]}"
              </p>
            </div>
          </motion.blockquote>
        )}

        {/* Section 2: Solução (Solution) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-12 border-t border-[var(--border-subtle)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text-muted)] block mb-2">
                02 / A Solução
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-[var(--color-text-heading)] tracking-tight">
                {solution.title}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed">
                {solution.description}
              </p>

              {/* Minimal highlights grid without outer/inner card boundaries */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-[var(--border-subtle)]">
                {solution.highlights.map((h, idx) => (
                  <div key={idx} className="space-y-2">
                    <h3 className="text-base font-medium text-[var(--color-text-heading)]">
                      {h.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 3: Resultados (Results) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-12 border-t border-[var(--border-subtle)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text-muted)] block mb-2">
                03 / Resultados & Impacto
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-[var(--color-text-heading)] tracking-tight">
                {results.title}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {/* Sleek stat counters without rounded cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {results.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-4xl sm:text-5xl font-medium text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-[var(--color-text-heading)] pt-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-base text-[var(--color-text-muted)] leading-relaxed pt-6 border-t border-[var(--border-subtle)]">
                {results.summary}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section 4: Visão de Futuro (Future Vision) */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-12 border-t border-[var(--border-subtle)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text-muted)] block mb-2">
                04 / Evolução & Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-medium text-[var(--color-text-heading)] tracking-tight">
                {futureVision.title}
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mt-2">
                {futureVision.subtitle}
              </p>
            </div>

            <div className="lg:col-span-8">
              {/* Minimal 2-column list without nested cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
                {futureVision.topics.map((topic) => (
                  <div key={topic.id} className="bg-[var(--bg-canvas)] p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]">
                          {topic.tag}
                        </span>
                        <span className="text-xs text-[var(--color-text-muted)] font-mono">
                          0{topic.id}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium text-[var(--color-text-heading)] mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Case Switcher Footer */}
        <div className="pt-16 border-t border-[var(--border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-8">
          <button
            onClick={() => onSelectCase(prevCase.slug)}
            className="group py-6 flex items-center justify-start gap-4 text-left transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[var(--color-text-muted)] group-hover:-translate-x-1 group-hover:text-[var(--color-text-heading)] transition-all" />
            <div>
              <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest block mb-1">
                Anterior
              </span>
              <span className="text-xl font-medium text-[var(--color-text-heading)] group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)] transition-colors">
                {prevCase.client}
              </span>
            </div>
          </button>

          <button
            onClick={() => onSelectCase(nextCase.slug)}
            className="group py-6 flex items-center justify-end gap-4 text-right transition-colors"
          >
            <div>
              <span className="text-[10px] font-bold text-[var(--color-text-muted)] uppercase tracking-widest block mb-1">
                Próximo
              </span>
              <span className="text-xl font-medium text-[var(--color-text-heading)] group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)] transition-colors">
                {nextCase.client}
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-[var(--color-text-muted)] group-hover:translate-x-1 group-hover:text-[var(--color-text-heading)] transition-all" />
          </button>
        </div>

      </div>
    </article>
  );
};
