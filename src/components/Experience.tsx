import React from 'react';
import { 
  Briefcase, 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  ShoppingBag, 
  Smile, 
  UtensilsCrossed 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getClientIcon = (clientName: string) => {
    if (clientName.includes('LAXMI')) return <UtensilsCrossed className="w-5 h-5 text-amber-600" />;
    if (clientName.includes('FMCG')) return <ShoppingBag className="w-5 h-5 text-emerald-600" />;
    return <Smile className="w-5 h-5 text-blue-600" />;
  };

  return (
    <section id="experience" className="py-24 bg-surface-light relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-brand-blue text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            Practical Work Experience &{' '}
            <span className="text-gradient">Client Accounts</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Real-world agency trainee tenure managing live client campaigns, on-page optimization, and audience retention.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <div 
              key={exp.id} 
              className="relative rounded-3xl bg-white border border-slate-200/90 shadow-card p-6 sm:p-10 space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-xs font-bold">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-900 font-heading">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-charcoal-500 pt-0.5">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                      {exp.location}
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-emerald-600">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-brand-blue hover:text-white text-charcoal-800 text-xs font-semibold transition-all group"
                  >
                    <span>Request Reference</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-blue group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>

              {/* General Responsibilities Description */}
              <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
                {exp.description}
              </p>

              {/* Client Projects Spotlight Grid */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-charcoal-500">
                  Client Account Engagements
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {exp.clientHighlights.map((clientItem, cIdx) => (
                    <div 
                      key={cIdx}
                      className="p-5 rounded-2xl bg-surface-light border border-slate-200/70 hover:border-brand-blue/30 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                            {getClientIcon(clientItem.client)}
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200/70 text-charcoal-600">
                            {clientItem.industry}
                          </span>
                        </div>

                        <div>
                          <h5 className="text-base font-extrabold text-navy-900 font-heading">
                            {clientItem.client}
                          </h5>
                        </div>

                        <ul className="space-y-2 text-xs text-charcoal-600 leading-relaxed">
                          {clientItem.activities.map((act, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-3 border-t border-slate-200/60">
                        <a
                          href="#projects"
                          className="text-xs font-bold text-brand-blue hover:text-brand-dark flex items-center gap-1 group"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
