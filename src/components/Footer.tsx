import React, { useState } from 'react';
import { Copy, Check, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[currentLang].footerSection;
  const email = 'leonardort92@gmail.com';

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
    <footer id="contato" className="bg-[var(--color-vibrant-green)] text-white pt-24 pb-16 transition-colors duration-300 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main CTA Section */}
        <div className="mb-24 max-w-4xl">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-8">
            {t.title}
          </h2>

          <p className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed mb-12 font-medium">
            {t.subtitle}
          </p>

          {/* Email Copy & Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleCopyEmail}
              className="px-8 py-4 rounded-full bg-[var(--color-dark-green)] text-white font-medium text-sm tracking-wide transition-transform duration-300 flex items-center gap-3 hover:scale-105 active:scale-95 shadow-md hover:bg-[var(--color-pure-black)]"
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
              className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 text-white text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4 text-white" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${email}`}
              className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 text-white text-sm font-medium transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Enviar E-mail Direto</span>
            </a>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/20 flex items-center justify-between gap-4 text-xs text-white/90 font-medium">
          <div className="flex items-center gap-3">
            <img
              src="/icon-branco.svg"
              alt="Leo Trevizani Logo"
              className="w-7 h-7 object-contain shrink-0"
            />
            <span>{t.rights}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-white/30 hover:border-white hover:bg-white/10 text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
