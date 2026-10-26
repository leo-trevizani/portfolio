import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Sun, 
  Moon, 
  ArrowLeft, 
  Menu, 
  X, 
  User, 
  Layers, 
  Briefcase, 
  FlaskConical, 
  Mail,
  ChevronDown,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('sobre');
  const langMenuRef = useRef<HTMLDivElement>(null);

  const t = TRANSLATIONS[currentLang].nav;

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const currentLanguageObj = useMemo(() => {
    return languages.find((l) => l.code === currentLang) || languages[0];
  }, [currentLang]);

  const navItems = useMemo(() => [
    {
      id: 'sobre',
      label: t.about,
      href: '#sobre',
      icon: <User className="w-4 h-4" />
    },
    {
      id: 'stack',
      label: t.stack,
      href: '#stack',
      icon: <Layers className="w-4 h-4" />
    },
    {
      id: 'cases',
      label: t.cases,
      href: '#cases',
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      id: 'playground',
      label: t.playground,
      href: '#playground',
      icon: <FlaskConical className="w-4 h-4" />
    },
    {
      id: 'contato',
      label: t.contact,
      href: '#contato',
      icon: <Mail className="w-4 h-4" />
    },
  ], [t]);

  // ScrollSpy: Automatically detect and highlight active section during scrolling
  useEffect(() => {
    if (currentRoute !== 'home') {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom reached: activate contact
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection('contato');
        return;
      }

      // If at top of the page
      if (scrollY < 120) {
        setActiveSection('sobre');
        return;
      }

      // Check section offsets
      const sectionElements = navItems
        .map(item => ({
          id: item.id,
          el: document.getElementById(item.id)
        }))
        .filter((item): item is { id: string; el: HTMLElement } => item.el !== null);

      let current = 'sobre';
      for (const { id, el } of sectionElements) {
        const top = el.offsetTop - 120; // 80px header height + 40px margin
        if (scrollY >= top) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [currentRoute, navItems]);

  // Handle escape key and scroll lock for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Auto-close mobile drawer when window resizes to desktop breakpoint (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close language dropdown on outside click or escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLangMenuOpen(false);
      }
    };

    if (langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [langMenuOpen]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    if (currentRoute !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-nav-bg)] border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt="Leo Trevizani Logo"
            className="w-10 h-10 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[var(--color-text-heading)] group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)] transition-colors font-sans">
              Leo Trevizani
            </span>
            <span className="text-xs text-[var(--color-text-muted)] font-medium -mt-1 hidden sm:inline-block">
              Full Stack Design Engineer
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop ScrollSpy Navigation) */}
        <nav className="hidden lg:flex items-center gap-1 bg-[var(--bg-surface)] p-1.5 rounded-full border border-[var(--border-subtle)] shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id && currentRoute === 'home';
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`px-4 py-1.5 rounded-full text-xs transition-all duration-200 relative ${
                  isActive
                    ? 'bg-[var(--bg-card)] text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] font-bold shadow-sm'
                    : 'text-[var(--color-text-main)] hover:bg-[var(--bg-card)]/60 hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] font-medium'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Back Button, Theme Switcher, Language Selector & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Back to Home Button if on Case/NDA Page */}
          {currentRoute !== 'home' && (
            <button
              onClick={() => onNavigate('home')}
              className="h-9 sm:h-10 px-3 sm:px-3.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--color-text-main)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] text-xs font-bold flex items-center gap-2 transition-all shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]" />
              <span className="hidden sm:inline">{t.backToHome}</span>
            </button>
          )}

          {/* Language Selector Dropdown (Visual clássico compacto com popover) */}
          <div className="relative shrink-0" ref={langMenuRef}>
            <button
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-label={`Idioma atual: ${currentLanguageObj.label}. Clique para alterar.`}
              aria-expanded={langMenuOpen}
              aria-haspopup="listbox"
              className="h-9 sm:h-10 px-3 sm:px-3.5 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--color-text-main)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] text-xs font-bold flex items-center gap-1.5 sm:gap-2 transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span className="text-sm leading-none" role="img" aria-hidden="true">
                {currentLanguageObj.flag}
              </span>
              <span className="uppercase tracking-wider font-bold text-[11px] sm:text-xs">
                {currentLanguageObj.code}
              </span>
              <ChevronDown 
                className={`w-3.5 h-3.5 text-[var(--color-text-muted)] transition-transform duration-200 ${
                  langMenuOpen ? 'rotate-180 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]' : ''
                }`} 
              />
            </button>

            {/* Dropdown Popover */}
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  role="listbox"
                  aria-label="Selecionar idioma"
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute right-0 top-full mt-2 w-44 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-xl z-50 focus:outline-none"
                >
                  {languages.map((lang) => {
                    const isActive = currentLang === lang.code;
                    return (
                      <button
                        key={lang.code}
                        role="option"
                        aria-selected={isActive}
                        onClick={() => {
                          onLanguageChange(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`w-full px-3 py-2 rounded-xl text-left text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[var(--bg-surface)] text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] font-bold'
                            : 'text-[var(--color-text-main)] hover:bg-[var(--bg-surface)]/70 hover:text-[var(--color-text-heading)]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base leading-none" role="img" aria-hidden="true">
                            {lang.flag}
                          </span>
                          <span>{lang.label}</span>
                        </div>
                        {isActive && (
                          <Check className="w-3.5 h-3.5 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Switcher Button */}
          <button
            onClick={onToggleDarkMode}
            aria-label="Toggle Theme"
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--color-text-main)] flex items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-sm shrink-0 cursor-pointer"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-[var(--color-lime-voltage)]" />
            ) : (
              <Moon className="w-4 h-4 text-[var(--color-forest-ink)]" />
            )}
          </button>

          {/* Hamburger Menu Toggle Button (Visible on screens < lg) */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            className="lg:hidden h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--color-text-main)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] flex items-center justify-center transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-sm shrink-0 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Menu Mobile com Animação Fluida via Motion) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-20 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Drawer Content */}
            <motion.div
              key="mobile-drawer"
              id="mobile-navigation-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de Navegação Mobile"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              className="fixed top-20 left-0 right-0 max-h-[calc(100vh-5rem)] overflow-y-auto bg-[var(--bg-canvas)]/98 backdrop-blur-xl border-b border-[var(--border-subtle)] shadow-2xl z-40 lg:hidden px-6 py-6"
            >
              <div className="flex flex-col gap-1 max-w-md mx-auto">
                <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[var(--color-text-muted)] px-3 mb-2">
                  {currentLang === 'pt' ? 'Navegação' : currentLang === 'es' ? 'Navegación' : 'Navigation'}
                </div>

                {navItems.map((item) => {
                  const isActive = activeSection === item.id && currentRoute === 'home';
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 group ${
                        isActive
                          ? 'bg-[var(--bg-surface)] text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] font-semibold shadow-sm'
                          : 'text-[var(--color-text-main)] hover:bg-[var(--bg-surface)]/60 hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] font-medium'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                          isActive
                            ? 'bg-[var(--color-forest-ink)] text-white dark:bg-[var(--color-lime-voltage)] dark:text-[var(--color-forest-ink)]'
                            : 'bg-[var(--bg-surface)] text-[var(--color-text-muted)] group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)]'
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span className="text-sm tracking-tight font-medium">
                        {item.label}
                      </span>
                    </button>
                  );
                })}

                {/* Sub-actions and language selector inside drawer */}
                <div className="mt-5 pt-5 border-t border-[var(--border-subtle)] space-y-4">
                  {currentRoute !== 'home' && (
                    <button
                      onClick={() => {
                        onNavigate('home');
                        setMobileMenuOpen(false);
                      }}
                      className="w-full py-3 px-4 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--color-text-main)] font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      <ArrowLeft className="w-4 h-4 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]" />
                      <span>{t.backToHome}</span>
                    </button>
                  )}

                  {/* Language switch bar in drawer */}
                  <div className="flex items-center justify-between px-2 pt-1">
                    <span className="text-xs text-[var(--color-text-muted)] font-medium">
                      {currentLang === 'pt' ? 'Idioma' : currentLang === 'es' ? 'Idioma' : 'Language'}
                    </span>
                    <div className="flex items-center gap-1.5 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            onLanguageChange(lang.code);
                            setMobileMenuOpen(false);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                            currentLang === lang.code
                              ? 'bg-[var(--bg-card)] text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] shadow-sm'
                              : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-main)]'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span className="uppercase">{lang.code}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
