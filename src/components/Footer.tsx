import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Code,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  MapPin,
  Clock,
  GraduationCap
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [ugandaTime, setUgandaTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in East Africa Time (Kampala is UTC+3)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Kampala',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setUgandaTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-brand-border pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand, Navigation, Local Time & Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-border">
          
          {/* Brand & Purpose Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-brand-blue">
                <Code className="w-5 h-5" />
              </div>

              <div>
                <span className="font-extrabold text-lg tracking-tight text-brand-text">
                  {t.footer.brand}
                </span>
                <span className="block text-xs text-brand-muted">
                  Jjuuko Adinan • Software Engineering
                </span>
              </div>
            </div>

            <p className="text-brand-muted text-xs sm:text-sm font-normal leading-relaxed max-w-sm">
              {t.footer.subtitle}
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-brand-muted">
              <GraduationCap className="w-4 h-4 text-brand-blue" />
              <span>{t.footer.studentNotice}</span>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-brand-muted">
              <li>
                <a href="#projects" className="hover:text-brand-blue transition-colors focus-ring rounded">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-brand-blue transition-colors focus-ring rounded">
                  {t.nav.skills}
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-brand-blue transition-colors focus-ring rounded">
                  {t.nav.education}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-blue transition-colors focus-ring rounded">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-blue transition-colors focus-ring rounded">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Local Time & Channels */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text font-bold">
              Station Time
            </h4>

            <div className="p-4 rounded-xl bg-brand-secondary border border-brand-border text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-brand-muted">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                  Kampala, Uganda:
                </span>
                <span className="text-brand-text font-medium">EAT (UTC+3)</span>
              </div>

              <div className="flex items-center justify-between text-brand-text">
                <span className="flex items-center gap-1.5 text-brand-muted">
                  <Clock className="w-3.5 h-3.5 text-brand-blue" />
                  Current Time:
                </span>
                <span className="text-brand-blue font-bold font-mono">
                  {ugandaTime || 'Loading...'}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com/Aditech-191"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-brand-secondary border border-brand-border text-brand-muted hover:text-brand-text hover:border-slate-400 transition-all focus-ring"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/jjuuko-adinan-a407a2384"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-brand-secondary border border-brand-border text-[#0a66c2] hover:text-[#0a66c2] hover:border-slate-400 transition-all focus-ring"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:aditechsoftwaresolutions@gmail.com"
                className="p-2.5 rounded-xl bg-brand-secondary border border-brand-border text-brand-muted hover:text-brand-blue hover:border-blue-300 transition-all focus-ring"
                aria-label="Send direct email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div>
            &copy; {new Date().getFullYear()} {t.footer.brand}. {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-brand-secondary hover:bg-slate-200 text-brand-text border border-brand-border transition-colors focus-ring"
              aria-label="Scroll back to top of the page"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
