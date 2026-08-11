import React, { useState } from 'react';
import { Sun, Moon, Globe, ChevronDown, Sparkles, ArrowLeft } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  isDarkMode,
  onToggleDarkMode,
  currentRoute,
  onNavigate,
}) => {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang].nav;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (currentRoute !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-nav-bg)] border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src="/favicon.svg"
            alt="Leo Trevizani Logo"
            className="w-10 h-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-[var(--color-text-heading)] group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)] transition-colors">
              Leo Trevizani
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-medium -mt-1 hidden sm:inline-block">
              Full Stack Design Engineer
            </span>
          </div>
        </a>

        {/* Center Nav Links (Visible only on Desktop) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[var(--bg-surface)] p-1.5 rounded-full border border-[var(--border-subtle)] shadow-inner">
          <a
            href="#sobre"
            onClick={(e) => handleNavClick(e, '#sobre')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-text-main)] hover:bg-[var(--bg-card)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] transition-all duration-200"
          >
            {t.about}
          </a>
          <a
            href="#stack"
            onClick={(e) => handleNavClick(e, '#stack')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-text-main)] hover:bg-[var(--bg-card)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] transition-all duration-200"
          >
            {t.stack}
          </a>
          <a
            href="#cases"
            onClick={(e) => handleNavClick(e, '#cases')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-text-main)] hover:bg-[var(--bg-card)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] transition-all duration-200"
          >
            {t.cases}
          </a>
          <a
            href="#playground"
            onClick={(e) => handleNavClick(e, '#playground')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-text-main)] hover:bg-[var(--bg-card)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] transition-all duration-200"
          >
            {t.playground}
          </a>
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, '#contato')}
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[var(--color-text-main)] hover:bg-[var(--bg-card)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] transition-all duration-200"
          >
            {t.contact}
          </a>
        </nav>

        {/* Right Controls: Back Button, Theme Switcher & Language Selector */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Back to Home Button if on Case Page */}
          {currentRoute !== 'home' && (
            <button
              onClick={() => onNavigate('home')}
              className="h-10 px-3.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--color-text-main)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] text-xs font-bold flex items-center gap-2 transition-all shadow-sm hover:scale-[1.02] active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]" />
              <span>{t.backToHome}</span>
            </button>
          )}

          {/* Theme Switcher Button */}
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme"
            className="h-10 w-10 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--color-text-main)] flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-sm shrink-0"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-[var(--color-lime-voltage)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--color-forest-ink)]" />
            )}
          </button>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="h-10 px-3.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--color-text-main)] text-xs font-bold flex items-center gap-2 transition-all shadow-sm hover:scale-[1.02] active:scale-95"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]" />
              <span className="uppercase tracking-wider">{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[var(--bg-card)] rounded-2xl shadow-xl border border-[var(--border-color)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-[var(--bg-surface)] transition-colors ${
                      currentLang === lang.code
                        ? 'text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] font-bold bg-[var(--bg-surface)]'
                        : 'text-[var(--color-text-main)]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                    {currentLang === lang.code }
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
