import React, { useState } from 'react';
import { SKILLS_LIST } from '../data/skills';
import { SkillItem, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { Figma, Layers, Sparkles, Code, Workflow, Box, Users, Globe, GraduationCap, Info, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface StackSectionProps {
  currentLang: Language;
}

export const StackSection: React.FC<StackSectionProps> = ({ currentLang }) => {
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);
  const t = TRANSLATIONS[currentLang].stackSection;

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

  return (
    <section id="stack" className="py-24 bg-[var(--bg-canvas)] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-8 border-b border-[var(--border-subtle)]">
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

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border-subtle)] border border-[var(--border-subtle)]">
          {SKILLS_LIST.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedSkill(skill)}
              className="group cursor-pointer bg-[var(--bg-canvas)] p-8 flex flex-col justify-between hover:bg-[var(--bg-surface)] transition-colors duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] group-hover:scale-110 transition-transform duration-500">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-text-muted)]">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-[var(--color-text-heading)] mb-3 group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)] transition-colors">
                  {skill.name}
                </h3>

                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {skill.description[currentLang]}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold tracking-wide uppercase text-[var(--color-text-heading)]">
                  {t.clickPrompt}
                </span>
                <Info className="w-4 h-4 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--bg-canvas)]/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-[var(--bg-card)] border border-[var(--border-subtle)] p-8 sm:p-12 max-w-2xl w-full relative"
            >
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--color-text-main)] hover:bg-[var(--bg-surface)] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 flex items-center justify-center bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]">
                  {getIcon(selectedSkill.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-text-muted)] mb-1 block">
                    {selectedSkill.level}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-medium text-[var(--color-text-heading)] tracking-tight">
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-10 max-w-xl">
                {selectedSkill.description[currentLang]}
              </p>

              <div className="border-t border-[var(--border-subtle)] pt-8 mb-8 space-y-4">
                <div className="text-[11px] font-bold text-[var(--color-text-heading)] uppercase tracking-[0.15em]">
                  Aplicação Prática em Cases
                </div>
                <div className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] shrink-0" />
                  <span>Utilizado na governança de projetos para Hilton, AB InBev, Nissan e Julius Baer.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] shrink-0" />
                  <span>Padrão de entrega alinhado às diretrizes internacionais de DesignOps.</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
