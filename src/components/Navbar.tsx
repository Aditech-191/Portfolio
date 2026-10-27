import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Terminal, Globe, ChevronDown, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, availableLanguages } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-panel shadow-glass border-slate-700/60 py-2.5 px-4 sm:px-6'
            : 'bg-dark-900/60 backdrop-blur-md border border-white/5 py-3 px-4 sm:px-6'
        } flex items-center justify-between`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
          aria-label="Aditech - Jjuuko Adinan Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 via-primary-500 to-cyan-500 shadow-glow-primary p-0.5 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-cyan-400 group-hover:text-primary-400 transition-colors" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Aditech
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-primary-500/15 text-primary-400 border border-primary-500/30 font-semibold hidden xs:inline-block">
                v2.6
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400 tracking-wider">
              Jjuuko Adinan
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Language Switcher & Hire Me CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-dark-800/80 border border-slate-700/70 hover:border-primary-500/50 text-slate-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-expanded={langDropdownOpen}
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-primary-400" />
              <span className="text-base leading-none">{availableLanguages[language].flag}</span>
              <span className="hidden sm:inline font-mono uppercase">{language}</span>
              <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-44 rounded-xl glass-panel shadow-glass p-1.5 z-50 border border-slate-700/80 animate-in fade-in zoom-in-95 duration-150"
                role="menu"
              >
                {(Object.keys(availableLanguages) as Language[]).map((langKey) => (
                  <button
                    key={langKey}
                    onClick={() => {
                      setLanguage(langKey);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors ${
                      language === langKey
                        ? 'bg-primary-600/30 text-cyan-300 font-semibold border border-primary-500/30'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                    role="menuitem"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{availableLanguages[langKey].flag}</span>
                      <span>{availableLanguages[langKey].nativeName}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">{langKey}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hire Me CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary-600 to-cyan-600 hover:from-primary-500 hover:to-cyan-500 text-white shadow-glow-primary transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary-400"
          >
            <span>{t.nav.hireMe}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl glass-panel shadow-glass border border-slate-700/80 p-5 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t.nav.statusBadge}
            </span>
            <span className="text-xs text-cyan-400 font-mono">Kampala, UG</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-glow-primary"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.nav.hireMe}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
