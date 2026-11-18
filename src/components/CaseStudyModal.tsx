import React, { useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Target, 
  Lightbulb, 
  Briefcase, 
  Calendar, 
  FileCheck2, 
  AlertCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { ProjectCaseStudy } from '../types/portfolio';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-navy-950/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 border border-slate-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between z-20">
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-subtle text-brand-blue uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-charcoal-500 font-medium hidden sm:inline">
              {project.industry}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-charcoal-400 hover:text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 text-left">
          
          {/* Main Title & Role Header */}
          <div className="space-y-3">
            <h3 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-charcoal-600">
              <span className="flex items-center gap-1.5 font-semibold text-brand-blue">
                <Briefcase className="w-3.5 h-3.5" /> {project.role}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> {project.duration}
              </span>
            </div>
          </div>

          {/* Overview Callout */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal-500">
              <Target className="w-4 h-4 text-brand-blue" />
              <span>Project Objective</span>
            </div>
            <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed font-medium">
              {project.objective}
            </p>
          </div>

          {/* Strategy Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 font-heading">
                Marketing Strategy & Framework
              </h4>
            </div>

            <div className="space-y-2.5">
              {project.strategy.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-surface-light border border-slate-100 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Performed */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 font-heading">
                Practical Execution & Work Done
              </h4>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.workPerformed.map((item, idx) => (
                <li key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-2.5 text-xs text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold text-navy-900 font-heading">
                Key Strategic Deliverables
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs font-semibold text-charcoal-800 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-blue" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Verification Notice */}
          <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Performance Data Notice (Zero Invention Policy)</span>
            </div>
            <p className="text-xs text-amber-900/90 leading-relaxed">
              {project.placeholderNote || "Actual client analytics and lead conversions are held under client confidentiality or undergoing live seasonal tracking. Performance metrics will be updated upon client verification."}
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 text-charcoal-600">
                  #{tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-brand-blue text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
            >
              <span>Discuss Similar Campaign</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
