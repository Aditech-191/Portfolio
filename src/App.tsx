import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { AiAssistantWidget } from './components/AiAssistantWidget';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-brand-text flex flex-col relative selection:bg-blue-600 selection:text-white">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-blue text-white rounded-lg shadow-card-hover font-semibold focus-ring"
        >
          Skip to main content
        </a>

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main id="main-content" className="flex-grow">
          <Hero />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <AboutSection />
          <ContactSection />
        </main>

        {/* Interactive Floating Portfolio Guide Widget */}
        <AiAssistantWidget />

        {/* Global Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
