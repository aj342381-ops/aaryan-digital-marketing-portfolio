import React, { useEffect } from 'react';
import { X, Tag, Download, ExternalLink } from 'lucide-react';
import { CreativeItem } from '../types/portfolio';

interface LightboxModalProps {
  item: CreativeItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/85 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden z-10 border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue">
              {item.category}
            </span>
            <h3 className="text-lg font-bold text-navy-900 font-heading">
              {item.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-charcoal-400 hover:text-navy-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Preview */}
        <div className="bg-slate-900 relative aspect-video flex items-center justify-center overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-xs text-[10px] text-white font-medium">
            Format: {item.aspectRatio}
          </div>
        </div>

        {/* Content details */}
        <div className="p-6 space-y-4 text-left">
          <p className="text-sm text-charcoal-700 leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {item.tags.map((tag, idx) => (
              <span key={idx} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-charcoal-600">
                #{tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-charcoal-500">
              Creative Sample Layout
            </span>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-dark"
            >
              <span>Inquire About Design Assets</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
