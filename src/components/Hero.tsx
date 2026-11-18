import React from 'react';
import { 
  ArrowRight, 
  Download, 
  TrendingUp, 
  Target, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  BarChart3,
  MapPin,
  Mail
} from 'lucide-react';
import { personalInfo, heroStats } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background Decorative Mesh & Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-brand-light/10 blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-indigo-50/50 blur-2xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Status / Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-sm text-xs sm:text-sm font-semibold text-charcoal-700">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.badge}</span>
              <span className="text-slate-300">|</span>
              <span className="text-brand-blue flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5" /> Jaipur, India
              </span>
            </div>

            {/* Main Headlines */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-bold tracking-widest text-brand-blue uppercase font-heading">
                HELLO, I'M AARYAN JANGID
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-900 font-heading leading-[1.12]">
                Digital Marketing That Turns Strategy Into{' '}
                <span className="text-gradient">Growth.</span>
              </h1>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl font-normal">
              I specialize in <strong className="text-navy-900 font-semibold">Social Media Marketing</strong>,{' '}
              <strong className="text-navy-900 font-semibold">Search Engine Optimization (SEO)</strong>,{' '}
              <strong className="text-navy-900 font-semibold">Meta Ads</strong>, and{' '}
              <strong className="text-navy-900 font-semibold">Google Ads</strong>. Combining creative storytelling with analytical data to build online visibility, capture high-intent search demand, and generate qualified leads.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-navy-900 text-white font-semibold text-sm sm:text-base hover:bg-brand-blue transition-all duration-300 shadow-md hover:shadow-card-hover group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-brand-accent group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-charcoal-800 font-semibold text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-brand-blue" />
                <span>Download My Resume</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {heroStats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-heading">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-charcoal-800">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-charcoal-500 leading-tight">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual Portrait & Dashboard Cards (5 Cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md mx-auto">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-blue/20 to-navy-900/10 rounded-3xl blur-2xl -z-10" />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-2xl p-3 sm:p-4">
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 aspect-[4/5]">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/aaryan-cv.png`}
                    alt="Aaryan Jangid - Digital Marketer & Growth Strategist"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback if local asset is loading
                      const target = e.target as HTMLImageElement;
                      target.src = "https://static.wixstatic.com/media/61681f_51c093ed60394404b6cf84bef1cbd93e~mv2.png";
                    }}
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                  
                  {/* Bottom Portrait Tag */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-semibold tracking-wide text-brand-accent">
                      Aaryan Jangid
                    </p>
                    <p className="text-xs text-slate-200">
                      Growth Strategist & Campaign Execution
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Dashboard Card 1: SEO & Search Growth (Top-Right) */}
              <div className="absolute -top-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 animate-float max-w-[210px]">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-charcoal-500 uppercase tracking-wider">
                    Search Strategy
                  </div>
                  <div className="text-xs font-bold text-navy-900 leading-tight">
                    High-Intent SEO Ranking
                  </div>
                  <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Keyword Mapped
                  </div>
                </div>
              </div>

              {/* Floating Dashboard Card 2: Meta & Google Ads (Bottom-Left) */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 animate-float [animation-delay:2s] max-w-[230px]">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-brand-accent" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-semibold text-charcoal-500 uppercase tracking-wider">
                    Paid Campaigns
                  </div>
                  <div className="text-xs font-bold text-navy-900 leading-tight">
                    Meta Ads & PPC Leads
                  </div>
                  <div className="text-[10px] text-brand-blue font-semibold mt-0.5">
                    Audience & Conversion Focused
                  </div>
                </div>
              </div>

              {/* Floating Tool Badge (Top-Left) */}
              <div className="absolute top-1/3 -left-5 bg-white border border-slate-200 rounded-full py-1.5 px-3 shadow-md flex items-center gap-1.5 text-xs font-semibold text-charcoal-800">
                <Search className="w-3.5 h-3.5 text-brand-blue" />
                <span>On-Page SEO</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
