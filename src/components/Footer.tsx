import React from 'react';
import { ArrowUp, Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white pt-16 pb-12 border-t border-navy-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-navy-800 text-left">
          
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold text-lg shadow-md">
                AJ
              </div>
              <div>
                <span className="font-heading font-extrabold text-white text-lg leading-tight tracking-tight block">
                  {personalInfo.name}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {personalInfo.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Passionate Digital Marketing Professional combining analytical SEO and paid advertising with persuasive copywriting to grow ambitious brands.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-brand-blue text-slate-300 hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-navy-900 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                aria-label="Instagram"
              >
                ig
              </a>
              <a
                href={personalInfo.socials.wixPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition-colors"
                aria-label="Original Portfolio"
              >
                Wix Archive
              </a>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#about" className="hover:text-brand-accent transition-colors">
                  About Aaryan
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-accent transition-colors">
                  Services & Deliverables
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-accent transition-colors">
                  Skills & Tools
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-brand-accent transition-colors">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-accent transition-colors">
                  Client Case Studies
                </a>
              </li>
              <li>
                <a href="#resume" className="hover:text-brand-accent transition-colors">
                  Curriculum Vitae
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Connect (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Contact & Inquiries
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-accent" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white">
                  {personalInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-accent" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {personalInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-accent" />
                <span>{personalInfo.location}</span>
              </p>
            </div>

            <div className="pt-2">
              <a
                href={personalInfo.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent hover:underline"
              >
                <span>View Google Drive Resume PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="flex items-center gap-1">
            <span>© {currentYear} Aaryan Jangid. All rights reserved. Crafted with dedication.</span>
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-brand-blue text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};
