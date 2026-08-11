import React from 'react';
import { PlaygroundItem, Language } from '../types';
import { X, Sparkles, Layers, Tag, ExternalLink } from 'lucide-react';

interface PlaygroundModalProps {
  item: PlaygroundItem;
  currentLang: Language;
  onClose: () => void;
}

export const PlaygroundModal: React.FC<PlaygroundModalProps> = ({ item, currentLang, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col">
        
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
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-bold backdrop-blur-md">
            {item.category}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--color-linen-mist)] text-[var(--color-forest-ink)] dark:bg-[var(--bg-card-alt)] dark:text-[var(--color-lime-voltage)] border border-[var(--border-subtle)] flex items-center gap-1.5"
              >
                <Tag className="w-3 h-3" />
                <span>{tag}</span>
              </span>
            ))}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-heading)]">
            {item.title[currentLang]}
          </h3>

          <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
            {item.details[currentLang]}
          </p>

          <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--color-text-muted)]">
            <span className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--color-forest-ink)] dark:text-[var(--color-lime-voltage)]" />
              <span>Design System Craft Showcase</span>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[var(--color-vibrant-green)] text-white font-medium text-xs uppercase tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              Fechar Visualizador
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
