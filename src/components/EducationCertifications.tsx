import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  ShieldCheck 
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-surface-light relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-brand-blue text-xs font-bold uppercase tracking-wider shadow-2xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            Education & <span className="text-gradient">Professional Certifications</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Rigorous humanities and literature training providing the foundation for analytical strategy and high-impact communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education Timeline (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="w-9 h-9 rounded-xl bg-brand-subtle text-brand-blue flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900 font-heading">
                Formal Education
              </h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu) => (
                <div 
                  key={edu.id}
                  className="rounded-3xl bg-white border border-slate-200/90 shadow-subtle hover:shadow-card transition-all duration-300 p-6 sm:p-7 space-y-4 text-left"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-brand-blue">
                      {edu.period}
                    </span>
                    <span className="text-xs text-charcoal-500 flex items-center gap-1 font-medium">
                      <MapPin className="w-3.5 h-3.5" /> {edu.location}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-extrabold text-navy-900 font-heading">
                      {edu.degree} {edu.field && `– ${edu.field}`}
                    </h4>
                    <p className="text-sm font-semibold text-brand-blue">
                      {edu.institution}
                    </p>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-sm text-charcoal-600 pt-2 border-t border-slate-100">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5 pb-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy-900 font-heading">
                Certifications & Courses
              </h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className={`rounded-2xl p-5 border transition-all duration-200 flex items-start justify-between gap-4 text-left ${
                    cert.status === 'Verified'
                      ? 'bg-white border-brand-blue/30 shadow-subtle'
                      : 'bg-white/70 border-slate-200/70'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-navy-900">
                        {cert.title}
                      </h4>
                    </div>
                    <p className="text-xs text-charcoal-600 font-medium">
                      Issuer: <strong className="text-charcoal-800">{cert.issuer}</strong>
                    </p>
                    {cert.isPlaceholder && (
                      <p className="text-[11px] text-amber-600 font-medium italic pt-1">
                        * Credential module placeholder — certificate being updated.
                      </p>
                    )}
                  </div>

                  <div className="shrink-0">
                    {cert.status === 'Verified' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                        <ShieldCheck className="w-3.5 h-3.5" /> Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-charcoal-600 text-[11px] font-medium">
                        <Clock className="w-3 h-3 text-slate-400" /> {cert.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Note box */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-charcoal-600 leading-relaxed">
              <strong className="text-navy-900 font-semibold">Continuous Learning:</strong> Actively updating certifications across Google Skillshop, Meta Blueprint, and HubSpot Academy to maintain cutting-edge industry standards.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
