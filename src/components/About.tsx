import React from 'react';
import { 
  GraduationCap, 
  Lightbulb, 
  Target, 
  BarChart2, 
  Sparkles, 
  CheckCircle,
  FileCheck,
  Compass,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Audience Psychology & Intent",
      description: "Marketing starts with deeply understanding who the customer is, what pains they feel, and what exact questions they type into search bars or social feeds."
    },
    {
      icon: Sparkles,
      title: "Compelling Copy & Creative Hooks",
      description: "My postgraduate foundation in English Literature gives me a strong command of persuasive writing, brand voice, and clear messaging that cuts through digital noise."
    },
    {
      icon: Target,
      title: "Precision Targeting & Funnels",
      description: "Structuring Meta Ads audience segments and Google search ad groups so every marketing dollar is focused on high-intent prospects."
    },
    {
      icon: BarChart2,
      title: "Data-Driven Continuous Iteration",
      description: "Analyzing search queries, CTRs, and engagement patterns to constantly refine campaigns, discard what fails, and scale what works."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-subtle text-brand-blue text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>About Aaryan Jangid</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 font-heading tracking-tight">
            Bridging Creative Storytelling With{' '}
            <span className="text-gradient">Data-Driven Growth</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Helping ambitious businesses build visibility, attract the right audiences, and drive sustainable growth.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Card & Quick Facts (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/80 shadow-lg p-2 sm:p-3">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-slate-200">
                <img
                  src={`${import.meta.env.BASE_URL}assets/workspace.jpeg`}
                  alt="Aaryan Jangid Marketing Workspace"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://static.wixstatic.com/media/61681f_4f75304338de4d98b04c63e78b80faf8~mv2.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest text-brand-accent font-semibold">
                      Hands-On Marketing Execution
                    </p>
                    <p className="text-base font-bold">
                      ARENA INFOSOLUTION | Client Trainee
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Profile Snapshot */}
              <div className="p-5 space-y-3 bg-white rounded-2xl mt-2 border border-slate-100">
                <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-100">
                  <span className="text-charcoal-500 font-medium">Role Target</span>
                  <span className="font-semibold text-navy-900">Digital Marketing Executive / Specialist</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-100">
                  <span className="text-charcoal-500 font-medium">Primary Hub</span>
                  <span className="font-semibold text-navy-900">{personalInfo.location}</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-100">
                  <span className="text-charcoal-500 font-medium">Education</span>
                  <span className="font-semibold text-navy-900">M.A. English Literature (Univ. of Rajasthan)</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm py-1.5">
                  <span className="text-charcoal-500 font-medium">Core Focus</span>
                  <span className="font-semibold text-brand-blue">SEO, Meta Ads & Content Strategy</span>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-navy-900 to-navy-950 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-blue/20 rounded-full blur-xl" />
              <p className="text-sm sm:text-base italic leading-relaxed text-slate-200">
                "Effective digital marketing isn't just about spending on ads or stuffing keywords—it's about understanding real human intent, building authentic authority, and measuring every step of the conversion journey."
              </p>
              <div className="mt-4 pt-4 border-t border-navy-800 flex items-center justify-between text-xs text-brand-accent font-semibold">
                <span>— Aaryan Jangid</span>
                <span>Growth Strategist</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story & Approach (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Story Paragraphs */}
            <div className="space-y-4 text-charcoal-700 leading-relaxed text-base sm:text-lg">
              <p>
                My journey into digital marketing began with a fascination for how words and ideas influence human behavior. Having completed my <strong className="text-navy-900 font-semibold">Master of Arts in English Literature</strong> at the University of Rajasthan, I developed sharp critical thinking, analytical structuring, and persuasive communication skills.
              </p>
              <p>
                Recognizing the rapid shift of commerce and attention to digital ecosystems, I channeled that passion for storytelling into the technical discipline of digital marketing. At <strong className="text-navy-900 font-semibold">ARENA INFOSOLUTION</strong>, I have engaged in real-world client assignments across diverse sectors including FMCG, spices, dental healthcare, and fitness.
              </p>
              <p>
                Whether conducting granular keyword research for <strong className="text-navy-900">Laxmi Masale</strong>, formulating social community calendars for <strong className="text-navy-900">FMCG Basket</strong>, enhancing local search presence for <strong className="text-navy-900">Gupta Dentistree</strong>, or architecting paid Meta lead funnels for <strong className="text-navy-900">Titans Gym</strong>, my goal remains constant: delivering measurable growth through ethical, data-backed execution.
              </p>
            </div>

            {/* Approach Pillars */}
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-navy-900 font-heading">
                My 4-Pillar Marketing Framework
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-5 rounded-2xl bg-surface-light border border-slate-200/70 hover:border-brand-blue/40 hover:bg-white hover:shadow-card transition-all duration-300 space-y-2 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-brand-blue border border-slate-200 flex items-center justify-center shadow-xs group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-navy-900 group-hover:text-brand-blue transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-600 leading-normal">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Goals & CTA */}
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-bold text-navy-900">
                  Looking for a dedicated growth marketer?
                </h4>
                <p className="text-xs sm:text-sm text-charcoal-600">
                  Ready to contribute full-time to digital agency teams or corporate marketing departments.
                </p>
              </div>
              <a
                href="#contact"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-white text-xs sm:text-sm font-semibold hover:bg-brand-dark transition-all shadow-sm"
              >
                <span>Connect With Me</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
