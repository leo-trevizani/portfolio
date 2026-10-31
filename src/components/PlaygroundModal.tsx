import React, { useEffect } from 'react';
import { PlaygroundItem, Language } from '../types';
import { X, Sparkles, Layers, Tag, ExternalLink } from 'lucide-react';

interface PlaygroundModalProps {
  item: PlaygroundItem;
  currentLang: Language;
  onClose: () => void;
}

export const PlaygroundModal: React.FC<PlaygroundModalProps> = ({ item, currentLang, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Preview Image */}
        <div className="relative w-full aspect-video bg-black overflow-hidden rounded-t-3xl">
          <img
            src={item.image}
            alt={item.title[currentLang]}
            referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold backdrop-blur-md">
            {item.category}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-linen-mist)] text-[var(--color-forest-ink)] dark:bg-[var(--bg-card-alt)] dark:text-[var(--color-lime-voltage)] border border-[var(--border-subtle)] flex items-center gap-1.5"
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          <h3 className="type-h3 text-[var(--color-text-heading)]">
            {item.title[currentLang]}
          </h3>

          <p className="type-body text-[var(--color-text-muted)]">
            {item.details[currentLang]}
          </p>

          <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between gap-4 text-[var(--color-text-muted)]">
            <span className="type-small flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]" />
              <span>Design System Craft Showcase</span>
            </span>
            <button
              onClick={onClose}
              className="type-label px-5 py-2.5 rounded-full bg-[var(--color-vibrant-green)] text-[var(--color-dark-green)] shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              Fechar Visualizador
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
