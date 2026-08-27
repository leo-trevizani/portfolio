import React, { useState } from 'react';
import { NDA_CASES } from '../data/cases';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';
import {
  Lock,
  Unlock,
  ShieldCheck,
  ArrowLeft,
  KeyRound,
  Mail,
  CheckCircle2,
  AlertCircle,
  Layers,
  Copy,
  Check,
  ArrowUpRight
} from 'lucide-react';
import ndaLogosImage from '../assets/images/nda_logos_showcase_1787749521966.jpg';

interface NDAPageProps {
  currentLang: Language;
  onNavigateHome: () => void;
  onSelectCase: (slug: string) => void;
}

export const NDAPage: React.FC<NDAPageProps> = ({
  currentLang,
  onNavigateHome,
  onSelectCase,
}) => {
  const t = TRANSLATIONS[currentLang].ndaPage;
  const casesT = TRANSLATIONS[currentLang].casesSection;
  const [passwordInput, setPasswordInput] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Valid NDA key
  const validKeys = ['dsgn-amigo-92'];

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = passwordInput.trim().toLowerCase();
    
    if (validKeys.includes(cleanKey)) {
      setIsUnlocked(true);
      setErrorMessage('');
    } else {
      setErrorMessage(t.errorWrongPassword);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('leonardort92@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCardClick = (slug: string) => {
    if (isUnlocked) {
      onSelectCase(slug);
    } else {
      // If locked, automatically unlock or scroll to key input
      const gateEl = document.getElementById('nda-gate');
      if (gateEl) {
        gateEl.scrollIntoView({ behavior: 'smooth' });
      }
      setErrorMessage(
        currentLang === 'pt'
          ? 'Insira a senha acima para visualizar os dados confidenciais do case.'
          : currentLang === 'es'
          ? 'Ingrese la contraseña arriba para ver los datos confidenciales del caso.'
          : 'Enter the password above to access confidential case study details.'
      );
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-[var(--bg-canvas)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation button */}
        <div className="mb-8">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-subtle)] text-xs font-semibold text-[var(--color-text-main)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] transition-all duration-200 shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.backToHome}</span>
          </button>
        </div>

        {/* Page Header */}
        <div className="border-b border-[var(--border-subtle)] pb-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border-color)] w-fit mb-5">
                <Lock className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  {t.badge}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--color-text-heading)] mb-6">
                {t.title}
              </h1>

              <p className="text-lg sm:text-xl text-[var(--color-text-muted)] leading-relaxed mb-4">
                {t.subtitle}
              </p>

              <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] shrink-0" />
                <span>{t.disclaimer}</span>
              </p>
            </div>

            {/* Quick Request Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`mailto:leonardort92@gmail.com?subject=${encodeURIComponent(t.requestSubject)}&body=${encodeURIComponent(t.requestBody)}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-semibold text-[var(--color-text-main)] hover:text-[var(--color-forest-ink)] dark:hover:text-[var(--color-lime-voltage)] transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]" />
                <span>{t.requestAccess}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[var(--bg-surface)] hover:bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-all shadow-sm cursor-pointer"
                title={t.copyEmail}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Password Authentication Gate Card */}
        <div id="nda-gate" className="mb-16">
          <div className="bg-[var(--bg-surface)] rounded-3xl border border-[var(--border-subtle)] p-6 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)] shadow-sm">
                    {isUnlocked ? <Unlock className="w-5 h-5 text-emerald-500" /> : <KeyRound className="w-5 h-5" />}
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--color-text-heading)]">
                      {isUnlocked ? t.unlockedSuccess : (currentLang === 'pt' ? 'Desbloqueio com Senha de Acesso' : currentLang === 'es' ? 'Desbloqueo con Contraseña' : 'Password Authentication Gate')}
                    </h2>
                    <p className="text-xs text-[var(--color-text-muted)]">
                      {isUnlocked
                        ? (currentLang === 'pt' ? 'Acesso concedido aos cases confidenciais. Clique em qualquer projeto para abrir o case completo.' : currentLang === 'es' ? 'Acceso concedido a los casos confidenciales. Haga clic en cualquier proyecto para abrirlo.' : 'Access granted to confidential cases. Click on any project to view the full case study.')
                        : (currentLang === 'pt' ? 'Insira a chave fornecida por Leo Trevizani para desbloquear a documentação completa dos 4 cases.' : currentLang === 'es' ? 'Ingrese la clave provista por Leo Trevizani para desbloquear la documentación completa de los 4 casos.' : 'Enter the access key provided by Leo Trevizani to unlock full documentation for all 4 cases.')}
                    </p>
                  </div>
                </div>

                {!isUnlocked ? (
                  <form onSubmit={handleUnlock} className="mt-6 flex flex-col sm:flex-row items-stretch gap-3">
                    <div className="relative flex-1">
                      <input
                        type="password"
                        value={passwordInput}
                        onChange={(e) => {
                          setPasswordInput(e.target.value);
                          if (errorMessage) setErrorMessage('');
                        }}
                        placeholder={t.passwordPlaceholder}
                        className="w-full h-12 px-4 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-sm text-[var(--color-text-heading)] placeholder:text-[var(--color-text-muted)]/70 focus:outline-none focus:border-[var(--color-forest-ink)] dark:focus:border-[var(--color-lime-voltage)] transition-colors shadow-inner"
                      />
                    </div>
                    <button
                      type="submit"
                      className="h-12 px-6 rounded-2xl bg-[var(--color-vibrant-green)] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 shadow-sm cursor-pointer shrink-0"
                    >
                      <Unlock className="w-4 h-4" />
                      <span>{t.unlockButton}</span>
                    </button>
                  </form>
                ) : (
                  <div className="mt-4 flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{t.unlockedSuccess}</span>
                    <button
                      onClick={() => {
                        setIsUnlocked(false);
                        setPasswordInput('');
                      }}
                      className="ml-auto text-xs underline font-semibold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] cursor-pointer"
                    >
                      {currentLang === 'pt' ? 'Bloquear novamente' : currentLang === 'es' ? 'Bloquear de nuevo' : 'Lock again'}
                    </button>
                  </div>
                )}

                {errorMessage && (
                  <div className="mt-3 flex items-center gap-2 text-rose-500 text-xs font-medium animate-in fade-in">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>

              {/* Right side illustration / logos badge */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)]">
                  <img
                    src={ndaLogosImage}
                    alt="Confidential NDA Projects Logos"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[0.2]"
                  />
                  <div className="absolute inset-0 bg-white/85 dark:bg-black/80 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 text-center transition-colors">
                    <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/15 backdrop-blur-md border border-black/10 dark:border-white/20 flex items-center justify-center mb-2 shadow-sm">
                      {isUnlocked ? <Unlock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Lock className="w-6 h-6 text-amber-600 dark:text-amber-400" />}
                    </div>
                    <span className="text-sm font-bold tracking-wide uppercase text-neutral-900 dark:text-white">
                      {isUnlocked ? 'Verified Access Granted' : 'Confidential Work Safe'}
                    </span>
                    <span className="text-xs text-neutral-700 dark:text-neutral-200 font-semibold mt-1.5 max-w-xs">
                      Hilton • Renault • AB InBev • Nissan
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Projects Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 pb-4 border-b border-[var(--border-subtle)] gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-medium text-[var(--color-text-heading)]">
              {t.projectsHeading}
            </h2>
            <p className="text-sm text-[var(--color-text-muted)] mt-1">
              {isUnlocked
                ? (currentLang === 'pt' ? 'Clique em qualquer projeto abaixo para navegar até o case study completo.' : currentLang === 'es' ? 'Haga clic en cualquier proyecto a continuación para ver el caso completo.' : 'Click on any project below to navigate to the complete case study.')
                : (currentLang === 'pt' ? 'Projetos protegidos por confidencialidade institucional.' : currentLang === 'es' ? 'Proyectos protegidos por confidencialidad institucional.' : 'Projects protected by enterprise confidentiality agreements.')}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--color-text-muted)]">
            <Layers className="w-3.5 h-3.5 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]" />
            <span>4 {currentLang === 'pt' ? 'Cases Protegidos' : currentLang === 'es' ? 'Casos Protegidos' : 'Protected Cases'}</span>
          </div>
        </div>

        {/* 2x2 Grid of NDA Projects (Hilton, Renault, AB InBev, Nissan) matching Home disposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {NDA_CASES.map((caseItem, idx) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => handleCardClick(caseItem.slug)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Cover Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--bg-surface)] mb-6 rounded-2xl border border-[var(--border-color)]">
                  <img
                    src={caseItem.coverImage}
                    alt={caseItem.client}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover object-center transform transition-all duration-700 ${
                      isUnlocked
                        ? 'grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105'
                        : 'grayscale-[0.4] group-hover:scale-102 filter'
                    }`}
                  />
                  
                  {/* Subtle Lock overlay if not unlocked yet */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] flex items-center justify-center transition-all group-hover:bg-black/20">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-dark-green)]/90 border border-white/20 text-white text-xs font-semibold backdrop-blur-md shadow-lg">
                        <Lock className="w-3.5 h-3.5 text-[var(--color-vibrant-green)]" />
                        <span>{t.badge}</span>
                      </div>
                    </div>
                  )}

                  {isUnlocked && (
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  )}
                </div>

                {/* Card Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]">
                      {caseItem.client}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--border-color)]" />
                    <span className="text-xs text-[var(--color-text-muted)] truncate max-w-[200px]">
                      {caseItem.metricsHighlight[currentLang]}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-medium text-[var(--color-text-heading)] group-hover:text-[var(--color-forest-ink)] dark:group-hover:text-[var(--color-lime-voltage)] transition-colors leading-tight">
                    {caseItem.title[currentLang]}
                  </h3>
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-between border-t border-[var(--border-subtle)] pt-4">
                <span className="text-sm font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-heading)] transition-colors flex items-center gap-2">
                  {isUnlocked ? (
                    <span>{casesT.viewFullCase}</span>
                  ) : (
                    <>
                      <Lock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{currentLang === 'pt' ? 'Desbloquear para ver case' : currentLang === 'es' ? 'Desbloquear para ver caso' : 'Unlock to view case'}</span>
                    </>
                  )}
                </span>
                <ArrowUpRight className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-text-heading)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
