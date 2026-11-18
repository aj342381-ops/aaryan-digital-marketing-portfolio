import React, { useState } from 'react';
import { 
  Share2, 
  Search, 
  Target, 
  TrendingUp, 
  FileText, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles,
  Layers
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Share2':
        return <Share2 className="w-6 h-6" />;
      case 'Search':
        return <Search className="w-6 h-6" />;
      case 'Target':
        return <Target className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      default:
        return <Layers className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-surface-light relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-light/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-brand-blue text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Services & Practical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            Comprehensive Growth Solutions For{' '}
            <span className="text-gradient">Modern Brands</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Tailored digital marketing campaigns designed to capture high-intent customers, elevate brand authority, and maximize ROI.
          </p>
        </div>

        {/* Services Grid (5 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service, index) => {
            const isHighlighted = index === 0 || index === 1; // Social Media & SEO
            return (
              <div
                key={service.id}
                className={`relative flex flex-col justify-between rounded-3xl bg-white border transition-all duration-300 p-7 sm:p-8 hover:-translate-y-1.5 ${
                  isHighlighted 
                    ? 'border-brand-blue/30 shadow-card hover:shadow-card-hover' 
                    : 'border-slate-200/80 shadow-subtle hover:shadow-card'
                }`}
              >
                {/* Top Badge */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-brand-subtle text-brand-blue flex items-center justify-center shadow-xs">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-charcoal-600">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5 pt-2">
                    <h3 className="text-xl font-extrabold text-navy-900 font-heading">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-brand-blue">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-charcoal-600 leading-relaxed pt-1">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
                      Key Deliverables
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-charcoal-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Benefit & CTA */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 mb-4">
                    <p className="text-[11px] font-semibold text-charcoal-700 leading-snug">
                      <strong className="text-navy-900">Impact:</strong> {service.keyBenefit}
                    </p>
                  </div>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-brand-blue hover:text-white text-navy-900 text-xs font-bold transition-colors group"
                  >
                    <span>Request Strategy Session</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-blue group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Custom Consultation / Full-Funnel Advisory */}
          <div className="relative flex flex-col justify-between rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 text-white p-7 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 border border-navy-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-brand-accent flex items-center justify-center backdrop-blur-xs">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-brand-accent">
                  Full Funnel
                </span>
              </div>

              <div className="space-y-1.5 pt-2">
                <h3 className="text-xl font-extrabold text-white font-heading">
                  Integrated Digital Strategy
                </h3>
                <p className="text-xs font-medium text-blue-200">
                  Combining Organic SEO + Paid Acquisition
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                Need a comprehensive strategy combining organic keyword authority, social brand presence, and high-converting paid ad campaigns? I build unified growth architectures.
              </p>

              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Strategic Scope
                </p>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>Cross-channel growth roadmap & budgeting</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>Audience intent alignment across Google & Meta</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>Competitor gap analysis & growth opportunities</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    <span>Weekly performance tracking & KPI reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-blue hover:bg-brand-light text-white text-xs font-bold transition-all shadow-md group"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
