import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { AiAssistantWidget } from './components/AiAssistantWidget';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-dark-900 text-slate-100 flex flex-col relative selection:bg-primary-500 selection:text-white">
        {/* Subtle mesh background gradient */}
        <div className="fixed inset-0 bg-mesh-glow pointer-events-none -z-20 opacity-70" />
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <Hero />
          <ServicesSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>

        {/* Interactive Floating AI Assistant Widget */}
        <AiAssistantWidget />

        {/* Global Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
