import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EducationCertifications } from './components/EducationCertifications';
import { CreativeGallery } from './components/CreativeGallery';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'services',
      'skills',
      'experience',
      'projects',
      'education',
      'creative',
      'resume',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-charcoal-900 flex flex-col relative selection:bg-brand-blue selection:text-white">
      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Services / What I Do */}
        <Services />

        {/* Section 4: Skills & Tools */}
        <Skills />

        {/* Section 5: Experience */}
        <Experience />

        {/* Section 6: Featured Projects / Portfolio Case Studies */}
        <Projects />

        {/* Section 7: Education & Certifications */}
        <EducationCertifications />

        {/* Section 8: Creative Work Gallery */}
        <CreativeGallery />

        {/* Section 9: Resume / Download CV */}
        <ResumeSection />

        {/* Section 10: Contact Me */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default App;
