import React from 'react';
import { SKILLS_LIST } from '../data/skills';
import { SkillItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Figma, 
  Layers, 
  Sparkles, 
  Code, 
  Workflow, 
  Box, 
  Users, 
  Globe, 
  GraduationCap, 
  CheckCircle2 
} from 'lucide-react';
import { motion } from 'motion/react';

interface StackSectionProps {
  currentLang: Language;
}

export const StackSection: React.FC<StackSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang].stackSection;

  const categoryLabels: Record<string, Record<Language, string>> = {
    design: {
      pt: 'Design & Sistemas',
      en: 'Design & Systems',
      es: 'Diseño y Sistemas'
    },
    dev: {
      pt: 'Front-end & Código',
      en: 'Front-end & Code',
      es: 'Front-end y Código'
    },
    management: {
      pt: 'DesignOps & Liderança',
      en: 'DesignOps & Leadership',
      es: 'DesignOps y Liderazgo'
    },
    education: {
      pt: 'Educação & Comunidade',
      en: 'Education & Community',
      es: 'Educación y Comunidad'
    }
  };

  const UI_TEXT = {
    practicalHighlights: {
      pt: 'Destaques e Aplicações Reais',
      en: 'Highlights & Real-world Impact',
      es: 'Aspectos Destacados e Impacto Real'
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Figma': return <Figma className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Workflow': return <Workflow className="w-5 h-5" />;
      case 'Box': return <Box className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const totalCards = SKILLS_LIST.length;
  const totalPadded = String(totalCards).padStart(2, '0');

  return (
    <section id="stack" className="py-24 bg-[var(--bg-canvas)] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-text-muted)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-lime-voltage)]"></span>
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

        {/* STICKY CARD REVEAL STACK (Exact Overlap on Scroll) */}
        <div className="relative pb-24">
          {SKILLS_LIST.map((skill: SkillItem, idx: number) => {
            const cardIndexPadded = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={skill.id}
                className="sticky top-24 sm:top-28 transition-all duration-300 mb-16 sm:mb-20 last:mb-0"
                style={{
                  zIndex: 10 + idx,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4 }}
                  className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden transition-colors duration-300"
                >
                  {/* Top Status & Tab Header Strip */}
                  <div className="px-6 py-3.5 sm:px-8 bg-[var(--bg-surface)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] tracking-wider">
                        {cardIndexPadded} / {totalPadded}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)]"></span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                        {categoryLabels[skill.category]?.[currentLang] || skill.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--color-text-muted)]">
                        {skill.level[currentLang]}
                      </span>
                    </div>
                  </div>

                  {/* Main Card Content */}
                  <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left: Skill Identity & Description */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                      <div>
                        <div className="flex items-center gap-4 mb-5">
                          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] shrink-0">
                            {getIcon(skill.iconName)}
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[var(--color-text-heading)] tracking-tight">
                              {skill.name[currentLang]}
                            </h3>
                            <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider mt-0.5">
                              {skill.level[currentLang]}
                            </p>
                          </div>
                        </div>

                        <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed font-normal">
                          {skill.description[currentLang]}
                        </p>
                      </div>
                    </div>

                    {/* Right: Practical Application Highlights */}
                    <div className="lg:col-span-5 bg-[var(--bg-surface)]/70 border border-[var(--border-subtle)] rounded-xl p-5 sm:p-6 space-y-3.5">
                      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
                        <span className="text-[11px] font-bold text-[var(--color-text-heading)] uppercase tracking-wider flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-[var(--color-lime-voltage)]" />
                          {UI_TEXT.practicalHighlights[currentLang]}
                        </span>
                      </div>

                      <div className="space-y-3 pt-1">
                        {skill.practicalApplications[currentLang]?.map((item, bulletIdx) => (
                          <div key={bulletIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


