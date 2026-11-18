import React from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin,
  Printer
} from 'lucide-react';
import { personalInfo, skillsCategories, experienceData, educationData } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 bg-surface-light relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-brand-blue text-xs font-bold uppercase tracking-wider shadow-2xs">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            Recruiter-Ready <span className="text-gradient">Professional Resume</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Consolidated overview of qualifications, client campaign experience, core technical skills, and academic history.
          </p>
          
          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={personalInfo.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-dark text-white font-semibold text-sm sm:text-base shadow-md hover:shadow-card-hover transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Full CV (Google Drive)</span>
            </a>

            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-charcoal-800 font-semibold text-sm sm:text-base shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print / Save View</span>
            </button>
          </div>
        </div>

        {/* Paper-like ATS Resume Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-card p-8 sm:p-12 space-y-10 text-left">
          
          {/* Resume Header */}
          <div className="border-b border-slate-200 pb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-3xl font-extrabold text-navy-900 font-heading tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-base font-bold text-brand-blue">
                  {personalInfo.title}
                </p>
              </div>

              <div className="space-y-1 text-xs text-charcoal-600 sm:text-right">
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-blue" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-blue font-medium">
                    {personalInfo.email}
                  </a>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-blue" />
                  <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-brand-blue font-medium">
                    {personalInfo.phone}
                  </a>
                </p>
                <p className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                  <span>{personalInfo.location}</span>
                </p>
              </div>
            </div>

            {/* Resume Summary */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-1.5">
                Executive Profile Summary
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>
          </div>

          {/* Core Skills Matrix */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900 font-heading border-b border-slate-100 pb-2">
              Core Competencies & Marketing Domains
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {skillsCategories.map((cat, idx) => (
                <div key={idx} className="space-y-2">
                  <h5 className="text-xs font-bold text-brand-blue uppercase tracking-wide">
                    {cat.title}
                  </h5>
                  <ul className="space-y-1 text-xs text-charcoal-700">
                    {cat.skills.map((s, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                        <span>{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900 font-heading border-b border-slate-100 pb-2 flex items-center justify-between">
              <span>Practical Work Experience</span>
              <span className="text-xs text-charcoal-500 font-normal">Agency Client Execution</span>
            </h4>

            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h5 className="text-base font-bold text-navy-900">
                      {exp.role}
                    </h5>
                    <p className="text-xs font-semibold text-brand-blue">
                      {exp.company} — {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-charcoal-500">
                    {exp.period}
                  </span>
                </div>

                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2 pt-1">
                  <p className="text-xs font-bold text-charcoal-700 uppercase tracking-wide">
                    Client Accounts Managed:
                  </p>
                  <ul className="space-y-2 text-xs text-charcoal-700">
                    {exp.clientHighlights.map((c, cIdx) => (
                      <li key={cIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                        <div className="font-bold text-navy-900 flex items-center justify-between">
                          <span>{c.client}</span>
                          <span className="text-[10px] text-charcoal-500 font-normal">{c.industry}</span>
                        </div>
                        <ul className="space-y-0.5 text-charcoal-600">
                          {c.activities.map((a, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <span className="text-brand-blue font-bold">•</span>
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-navy-900 font-heading border-b border-slate-100 pb-2">
              Education
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-bold text-navy-900">
                      {edu.degree}
                    </h5>
                    <span className="text-[11px] font-semibold text-brand-blue">{edu.period}</span>
                  </div>
                  {edu.field && (
                    <p className="text-xs text-charcoal-700 font-medium">
                      Major: {edu.field}
                    </p>
                  )}
                  <p className="text-xs text-charcoal-500">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-charcoal-500">
              * Official verifiable documents and client references available upon recruiter interview.
            </p>

            <a
              href={personalInfo.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-brand-dark"
            >
              <span>Open Original PDF on Google Drive</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
