import React, { useState } from 'react';
import { 
  FolderKanban, 
  ArrowUpRight, 
  Target, 
  Search, 
  Share2, 
  TrendingUp, 
  Layers, 
  Eye,
  CheckCircle2
} from 'lucide-react';
import { caseStudiesData } from '../data/portfolioData';
import { ProjectCaseStudy } from '../types/portfolio';
import { CaseStudyModal } from './CaseStudyModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const filters = ['All Projects', 'SEO', 'Social Media', 'Meta Ads', 'Google Ads'];

  const filteredProjects = activeFilter === 'All Projects'
    ? caseStudiesData
    : caseStudiesData.filter((p) => {
        if (activeFilter === 'Google Ads') {
          // Titans Gym and search campaigns involve PPC concepts
          return p.tags.includes('PPC') || p.category === 'Google Ads' || p.tags.includes('Funnel Strategy');
        }
        return p.category === activeFilter || p.tags.includes(activeFilter);
      });

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle text-brand-blue text-xs font-bold uppercase tracking-wider">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Featured Client Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            Real Client Projects & <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Practical marketing case studies demonstrating real-world execution across FMCG, Healthcare, Spices, and Fitness.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-slate-100 text-charcoal-700 hover:bg-slate-200/70 hover:text-navy-900'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-surface-light border border-slate-200/90 shadow-subtle hover:shadow-card transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Card Top Meta */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white border border-slate-200 text-brand-blue shadow-2xs">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-charcoal-500">
                    {project.industry}
                  </span>
                </div>

                {/* Project Title & Client */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy-900 font-heading leading-tight group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-blue uppercase tracking-wide">
                    Client: {project.clientName}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {project.summary}
                </p>

                {/* Deliverables Snippet */}
                <div className="pt-4 border-t border-slate-200/70 space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-charcoal-500">
                    Key Execution Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {project.deliverables.slice(0, 3).map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-charcoal-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-charcoal-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* View Case Study CTA Button */}
              <div className="pt-8 mt-6 border-t border-slate-200/60">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-white border border-slate-300 hover:border-brand-blue hover:bg-brand-blue hover:text-white text-navy-900 text-xs sm:text-sm font-bold transition-all shadow-2xs group/btn cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-brand-blue group-hover/btn:text-white" />
                  <span>View Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Transparent Policy Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-xs text-charcoal-600 leading-relaxed">
            <strong className="text-navy-900 font-semibold">Integrity Commitment:</strong> All project descriptions reflect actual trainee responsibilities and verified campaign architectures. As per professional ethics, performance data and client revenue numbers are not artificially fabricated.
          </p>
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
