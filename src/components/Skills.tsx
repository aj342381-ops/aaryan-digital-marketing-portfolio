import React, { useState } from 'react';
import { 
  Wrench, 
  Search, 
  Target, 
  Share2, 
  BarChart3, 
  Terminal, 
  Key, 
  Palette, 
  Globe, 
  CheckCircle2, 
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { skillsCategories, marketingTools } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [filterToolCat, setFilterToolCat] = useState<string>('All');

  const getToolIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-5 h-5 text-brand-blue" />;
      case 'Target':
        return <Target className="w-5 h-5 text-indigo-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-amber-600" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-emerald-600" />;
      case 'Key':
        return <Key className="w-5 h-5 text-blue-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-600" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-cyan-600" />;
      default:
        return <Wrench className="w-5 h-5 text-brand-blue" />;
    }
  };

  const toolCategories = ['All', 'PPC & Search', 'Paid Social', 'Web Analytics', 'SEO Diagnostics', 'Creative Design'];

  const filteredTools = filterToolCat === 'All' 
    ? marketingTools 
    : marketingTools.filter(t => t.category === filterToolCat);

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            Categorized Skills & <span className="text-gradient">Marketing Stack</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Practical, verified marketing competencies organized by execution domain—no arbitrary percentage meters.
          </p>
        </div>

        {/* 3 Skill Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-20">
          {skillsCategories.map((category, idx) => (
            <div 
              key={idx}
              className="rounded-3xl bg-surface-light border border-slate-200/80 p-6 sm:p-7 shadow-subtle hover:shadow-card transition-all duration-300 space-y-5"
            >
              {/* Pillar Header */}
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-white text-brand-blue border border-slate-200 flex items-center justify-center shadow-xs">
                  {idx === 0 && <Search className="w-5 h-5" />}
                  {idx === 1 && <Target className="w-5 h-5" />}
                  {idx === 2 && <Share2 className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-navy-900 font-heading">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className={`p-3 rounded-xl border flex items-center justify-between transition-colors ${
                      skill.highlight 
                        ? 'bg-white border-brand-blue/30 shadow-2xs' 
                        : 'bg-white/70 border-slate-200/60 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 ${skill.highlight ? 'text-brand-blue' : 'text-slate-400'}`} />
                      <span className="text-xs sm:text-sm font-semibold text-charcoal-800">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      skill.level === 'Core Expertise' 
                        ? 'bg-brand-subtle text-brand-blue' 
                        : 'bg-slate-100 text-charcoal-500'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-brand-blue" />
                <h3 className="text-2xl font-extrabold text-navy-900 font-heading">
                  Marketing Tools & Platforms
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-600">
                Industry-standard tool stack utilized for research, execution, creative asset generation, and analytics.
              </p>
            </div>

            {/* Verification Disclosure Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Confirmed Practical Exposure</span>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTools.map((tool, tIdx) => (
              <div
                key={tIdx}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-blue/40 hover:shadow-card transition-all duration-200 flex items-center gap-3.5 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                  {getToolIcon(tool.iconName)}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-navy-900 truncate">
                    {tool.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-charcoal-500 truncate">
                      {tool.category}
                    </span>
                  </div>
                  <div className="pt-0.5">
                    <span className={`inline-block text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      tool.proficiency === 'Advanced' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : tool.proficiency === 'Proficient'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {tool.proficiency}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
