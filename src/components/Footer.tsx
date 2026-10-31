import React, { useState } from 'react';
import { Copy, Check, Linkedin, ArrowUp, Github } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[currentLang].footerSection;
  const email = 'leonardort92@gmail.com';
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contato" className="bg-[var(--color-vibrant-green)] text-[var(--color-dark-green)] pt-24 pb-16 transition-colors duration-300 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main CTA Section */}
        <div className="mb-24 max-w-4xl">
          <h2 className="type-display text-[var(--color-dark-green)] mb-8">
            {t.title}
          </h2>

          <p className="type-lead text-[var(--color-dark-green)] max-w-xl mb-12">
            {t.subtitle}
          </p>

          {/* Email Copy & Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="px-8 py-4 rounded-full bg-[var(--color-dark-green)] text-white font-medium text-sm transition-transform duration-300 flex items-center gap-3 hover:scale-105 active:scale-95 shadow-md hover:bg-[var(--color-pure-black)]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[var(--color-vibrant-green)]" />
                  <span>{t.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[var(--color-vibrant-green)]" />
                  <span>{t.copyEmail}</span>
                </>
              )}
            </button>

            <a
              href="https://linkedin.com/in/leotrevizani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-[var(--color-dark-green)]/40 hover:bg-[var(--color-dark-green)]/10 text-[var(--color-dark-green)] text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>{t.linkedinLabel}</span>
            </a>

            <a
              href="https://github.com/leo-trevizani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-[var(--color-dark-green)]/40 hover:bg-[var(--color-dark-green)]/10 text-[var(--color-dark-green)] text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>{t.githubLabel}</span>
            </a>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-dark-green)]/25 flex items-center justify-between gap-4 text-[var(--color-dark-green)]">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}icon-branco.svg`}
              alt="Leo Trevizani Logo"
              loading="lazy"
              decoding="async"
              className="w-7 h-7 object-contain shrink-0 brightness-0"
            />
            <span className="type-small">{t.rights.replace('{year}', currentYear)}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="tap p-3 rounded-full border border-[var(--color-dark-green)]/40 hover:border-[var(--color-dark-green)] hover:bg-[var(--color-dark-green)]/10 text-[var(--color-dark-green)] transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
