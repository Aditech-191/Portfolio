import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Terminal,
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  MapPin,
  Clock,
  Shield
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
    <footer className="relative bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative top border gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand, Navigation, Local Time & Connect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/60">
          
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-cyan-500 shadow-glow-primary p-0.5">
                <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  Aditech
                </span>
                <span className="block text-xs font-mono text-slate-400">
                  Jjuuko Adinan • Digital Engineering
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              "{t.hero.tagline}"
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono text-emerald-400">
                All Systems Operational • 100% Uptime
              </span>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  {t.nav.services} (OS & Web Architecture)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  {t.nav.projects} (Code & Blueprints)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  {t.nav.about} (Philosophy & Skills)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  {t.nav.contact} (Inquire / Get Quote)
                </a>
              </li>
            </ul>
          </div>

          {/* Live Node Time & Direct Channels */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold">
              Engineering Station
            </h4>

            <div className="p-4 rounded-2xl bg-dark-900 border border-slate-800 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  Kampala, Uganda:
                </span>
                <span className="text-slate-300">EAT (UTC+3)</span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary-400" />
                  Station Time:
                </span>
                <span className="text-emerald-400 font-bold font-mono">
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
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/jjuuko-adinan-a407a2384"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-[#0a66c2] hover:text-white hover:border-[#0a66c2] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href="mailto:aditechuganda@gmail.com"
                className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Jjuuko Adinan (Aditech). {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px]">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>TLS 1.3 Hardened</span>
            </span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-dark-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
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
