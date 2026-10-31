import React, { Suspense, useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StackSection } from './components/StackSection';
import { CasesGrid } from './components/CasesGrid';
import { NDASection } from './components/NDASection';
import { Footer } from './components/Footer';
import { CaseDetail } from './components/CaseDetail';
import { NDAPage } from './components/NDAPage';
import { PlaygroundSection } from './components/PlaygroundSection';

/* Rotas pesadas carregadas sob demanda para reduzir o bundle inicial */
const CaseDetailLazy = React.lazy(() => import('./components/CaseDetail'));
const NDAPageLazy = React.lazy(() => import('./components/NDAPage'));
const PlaygroundSectionLazy = React.lazy(() => import('./components/PlaygroundSection'));

function RouteFallback() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
      <p className="type-body text-[var(--color-text-muted)]">A carregar…</p>
    </div>
  );
}

export default function App() {
  // Language state (persisted in localStorage, default 'pt')
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('portfolio_lang') as Language;
      if (savedLang === 'pt' || savedLang === 'en' || savedLang === 'es') {
        return savedLang;
      }
    }
    return 'pt';
  });

  // Sync Language with document element & localStorage
  useEffect(() => {
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : currentLang;
    localStorage.setItem('portfolio_lang', currentLang);
  }, [currentLang]);

  // Dark Mode state (default Light Mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
    }
    return false;
  });

  // Current Route state ('home' or 'case/slug')
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      return hash || 'home';
    }
    return 'home';
  });

  // Sync Dark Mode with document element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Handle browser back/forward history hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setCurrentRoute(hash || 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (route: string) => {
    setCurrentRoute(route);
    window.location.hash = route === 'home' ? '' : route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  // Determine if viewing a case study
  const isCaseRoute = currentRoute.startsWith('case/');
  const caseSlug = isCaseRoute ? currentRoute.replace('case/', '') : '';

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--color-text-main)] transition-colors duration-300 font-sans selection:bg-[var(--color-lime-voltage)] selection:text-[var(--color-forest-ink)]">
      {/* Pula direto para o conteúdo principal sem tabular toda a navegação */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      {/* Sticky Top Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main id="main-content">
        {currentRoute === 'nda' ? (
          <Suspense fallback={<RouteFallback />}>
            <NDAPage
              currentLang={currentLang}
              onNavigateHome={() => handleNavigate('home')}
              onSelectCase={(slug) => handleNavigate(`case/${slug}`)}
            />
          </Suspense>
        ) : isCaseRoute && caseSlug ? (
          <Suspense fallback={<RouteFallback />}>
            <CaseDetail
              slug={caseSlug}
              currentLang={currentLang}
              onNavigateHome={() => handleNavigate('home')}
              onNavigateToNDA={() => handleNavigate('nda')}
              onSelectCase={(slug) => handleNavigate(`case/${slug}`)}
            />
          </Suspense>
        ) : (
          <>
            <Hero
              currentLang={currentLang}
              onNavigateToCases={() => {
                const el = document.getElementById('cases');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onNavigateToContact={() => {
                const el = document.getElementById('contato');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <StackSection currentLang={currentLang} />

            <CasesGrid
              currentLang={currentLang}
              onSelectCase={(slug) => handleNavigate(`case/${slug}`)}
            />

            <NDASection
              currentLang={currentLang}
              onNavigateToNDA={() => handleNavigate('nda')}
            />

            <Suspense fallback={<RouteFallback />}>
              <PlaygroundSection currentLang={currentLang} />
            </Suspense>
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer currentLang={currentLang} />

    </div>
  );
}
