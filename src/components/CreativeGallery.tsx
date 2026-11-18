import React, { useState } from 'react';
import { Palette, Eye, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { creativeWorkData } from '../data/portfolioData';
import { CreativeItem } from '../types/portfolio';
import { LightboxModal } from './LightboxModal';

export const CreativeGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCreative, setSelectedCreative] = useState<CreativeItem | null>(null);

  const categories = ['All', 'Social Media', 'Ad Creatives', 'Infographics', 'Campaign Planning'];

  const filteredCreatives = activeCategory === 'All'
    ? creativeWorkData
    : creativeWorkData.filter(c => c.category === activeCategory);

  return (
    <section id="creative" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Palette className="w-3.5 h-3.5" />
            <span>Visual Marketing Assets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            Creative Portfolio & <span className="text-gradient">Content Designs</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            A visual showcase of social media posts, direct-response ad creatives, infographics, and strategic marketing roadmaps.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-charcoal-700 hover:bg-slate-200/70 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Creatives Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCreatives.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCreative(item)}
              className="group cursor-pointer rounded-3xl bg-surface-light border border-slate-200/80 overflow-hidden shadow-subtle hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-xs text-navy-900 text-xs font-bold flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4 text-brand-blue" />
                    <span>Expand Creative</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-xs text-[10px] font-bold text-navy-900 shadow-xs">
                  {item.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 space-y-2 text-left">
                <h3 className="text-base font-bold text-navy-900 font-heading group-hover:text-brand-blue transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-charcoal-500">
                  <span className="font-medium text-brand-blue">{item.aspectRatio}</span>
                  <span className="flex items-center gap-1 font-semibold group-hover:text-navy-900">
                    View Details <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-xs text-charcoal-500">
          * High-resolution design templates and editable source files available for recruitment review.
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedCreative}
        onClose={() => setSelectedCreative(null)}
      />
    </section>
  );
};
