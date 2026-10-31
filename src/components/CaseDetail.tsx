import React from 'react';
import { CASE_STUDIES, PUBLIC_CASES, NDA_CASES, NDA_CASE_SLUGS } from '../data/cases';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { StatCountUp } from './CountUp';

interface CaseDetailProps {
  slug: string;
  currentLang: Language;
  onNavigateHome: () => void;
  onNavigateToNDA?: () => void;
  onSelectCase: (slug: string) => void;
}

export const CaseDetail: React.FC<CaseDetailProps> = ({
  slug,
  currentLang,
  onNavigateHome,
  onNavigateToNDA,
  onSelectCase,
}) => {
  const isNDA = NDA_CASE_SLUGS.includes(slug);
  const relevantCases = isNDA ? NDA_CASES : PUBLIC_CASES;

  const currentCaseIndex = relevantCases.findIndex((c) => c.slug === slug);
  const safeIndex = currentCaseIndex >= 0 ? currentCaseIndex : 0;
  const caseItem = relevantCases[safeIndex] || CASE_STUDIES.find((c) => c.slug === slug) || CASE_STUDIES[0];
  const t = TRANSLATIONS[currentLang].caseDetail;

  const prevCase = relevantCases[(safeIndex - 1 + relevantCases.length) % relevantCases.length];
  const nextCase = relevantCases[(safeIndex + 1) % relevantCases.length];

  const handleBack = () => {
    if (isNDA && onNavigateToNDA) {
      onNavigateToNDA();
    } else {
      onNavigateHome();
      setTimeout(() => {
        const el = document.getElementById('cases');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  // Stats never exceed two columns inside the 8-col narrative track —
  // three or four across produced ~30-character descriptions.
  const getStatsGridClass = (count: number) => {
    if (count === 1) return 'grid-cols-1';
    return 'grid-cols-1 sm:grid-cols-2';
  };

  const challenge = caseItem.challenge[currentLang];
  const solution = caseItem.solution[currentLang];
  const results = caseItem.results[currentLang];
  const futureVision = caseItem.futureVision[currentLang];

  return (
    <article className="pt-28 pb-32 min-h-screen bg-[var(--bg-canvas)] transition-colors duration-300">
      
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-sm font-semibold text-[var(--color-text-main)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isNDA ? t.backToNDACases : t.backToPublicCases}</span>
        </button>
      </div>

      {/* Case Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl"
        >
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="type-label text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]">{caseItem.client}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-color)]" />
            <span className="text-sm text-[var(--color-text-muted)]">{caseItem.category}</span>
            <span className="w-1 h-1 rounded-full bg-[var(--border-color)]" />
            <span className="type-num text-sm text-[var(--color-text-muted)]">{caseItem.year}</span>
          </div>

          <h1 className="type-h1 text-[var(--color-text-heading)]">
            {caseItem.title[currentLang]}
          </h1>

          <p className="mt-8 type-lead text-[var(--color-text-muted)] measure-lead">
            {caseItem.subtitle[currentLang]}
          </p>
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
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        
        {/* Metric Highlight Summary Container */}
        <div className="mt-6 rounded-2xl p-6 sm:p-8 bg-[var(--color-vibrant-green)] text-[var(--color-dark-green)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="type-label block mb-2">
              {t.impactHighlight}
            </span>
            <span className="type-num text-4xl sm:text-5xl font-semibold tracking-[-0.02em] inline-flex items-baseline">
              <StatCountUp value={caseItem.metricsHighlight[currentLang]} />
            </span>
          </div>
          <p className="text-base font-medium max-w-[34rem] leading-relaxed">
            {caseItem.metricLabel[currentLang]}
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
              <span className="type-label type-num text-[var(--color-text-muted)] block mb-3">
                01 / {t.challengeTitle}
              </span>
              <h2 className="type-h2 text-[var(--color-text-heading)]">
                {challenge.title}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <p className="type-body text-[var(--color-text-muted)] whitespace-pre-line">
                {challenge.description}
              </p>

              {/* Numbered key points as a ruled list — readable measure, no nested cards */}
              <div className="pt-2 border-t border-[var(--border-subtle)]">
                {challenge.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.5rem_1fr] gap-4 sm:gap-6 py-5 border-b border-[var(--border-subtle)] last:border-b-0 last:pb-0"
                  >
                    <span className="type-label type-num text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] pt-1.5">
                      0{idx + 1}
                    </span>
                    <p className="type-body text-[var(--color-text-main)]">
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
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Quote className="w-7 h-7 mx-auto text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] opacity-40" />
              <p className="type-quote text-[var(--color-text-heading)]">
                &ldquo;{caseItem.pullQuote[currentLang]}&rdquo;
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
              <span className="type-label type-num text-[var(--color-text-muted)] block mb-3">
                02 / {t.solutionTitle}
              </span>
              <h2 className="type-h2 text-[var(--color-text-heading)]">
                {solution.title}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-12">
              <p className="type-body text-[var(--color-text-muted)]">
                {solution.description}
              </p>

              {/* Numbered highlights as ruled rows — same reading measure as the challenge */}
              <div className="pt-2 border-t border-[var(--border-subtle)]">
                {solution.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3.5rem_1fr] gap-4 sm:gap-6 py-5 border-b border-[var(--border-subtle)] last:border-b-0 last:pb-0"
                  >
                    <span className="type-label type-num text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] pt-1.5">
                      0{idx + 1}
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="type-h4 text-[var(--color-text-heading)]">
                        {h.title}
                      </h3>
                      <p className="type-body text-[var(--color-text-muted)]">
                        {h.desc}
                      </p>
                    </div>
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
              <span className="type-label type-num text-[var(--color-text-muted)] block mb-3">
                03 / {t.resultsTitle}
              </span>
              <h2 className="type-h2 text-[var(--color-text-heading)]">
                {results.title}
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-12">
              {/* Sleek stat counters without rounded cards - max two columns for a readable measure */}
              <div className={`grid ${getStatsGridClass(results.stats.length)} gap-x-10 gap-y-10 w-full`}>
                {results.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-2 border-t border-[var(--border-subtle)] pt-5">
                    <div className="type-num text-4xl sm:text-5xl font-semibold text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] tracking-[-0.02em] inline-flex items-baseline">
                      <StatCountUp value={stat.value} delay={idx * 0.1} />
                    </div>
                    <div className="text-base font-semibold text-[var(--color-text-heading)] leading-snug">
                      {stat.label}
                    </div>
                    <div className="type-small text-[var(--color-text-muted)]">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>

              <p className="type-body text-[var(--color-text-muted)] pt-6 border-t border-[var(--border-subtle)]">
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
              <span className="type-label type-num text-[var(--color-text-muted)] block mb-3">
                04 / {t.futureVisionTitle}
              </span>
              <h2 className="type-h2 text-[var(--color-text-heading)]">
                {futureVision.title}
              </h2>
              <p className="type-small text-[var(--color-text-muted)] mt-3">
                {futureVision.subtitle}
              </p>
            </div>

            <div className="lg:col-span-8">
              {/* Minimal 2-column list without nested cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
                {futureVision.topics.map((topic) => (
                  <div key={topic.id} className="bg-[var(--bg-canvas)] p-6 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="type-label text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]">
                          {topic.tag}
                        </span>
                        <span className="type-num text-xs text-[var(--color-text-muted)]">
                          0{topic.id}
                        </span>
                      </div>
                      <h3 className="type-h4 text-[var(--color-text-heading)] mb-2">
                        {topic.title}
                      </h3>
                      <p className="type-body text-[var(--color-text-muted)]">
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
              <span className="type-label text-[var(--color-text-muted)] block mb-1.5">
                {t.prevCase}
              </span>
              <span className="type-h4 block text-[var(--color-text-heading)] group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)] transition-colors">
                {prevCase.client}
              </span>
            </div>
          </button>

          <button
            onClick={() => onSelectCase(nextCase.slug)}
            className="group py-6 flex items-center justify-end gap-4 text-right transition-colors"
          >
            <div>
              <span className="type-label text-[var(--color-text-muted)] block mb-1.5">
                {t.nextCase}
              </span>
              <span className="type-h4 block text-[var(--color-text-heading)] group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)] transition-colors">
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
