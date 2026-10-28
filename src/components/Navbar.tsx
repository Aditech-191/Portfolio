import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Globe, ChevronDown, Menu, X, ArrowUpRight, Code, GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, availableLanguages } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('#language-selector-wrapper')) {
        setLangDropdownOpen(false);
      }
    };
    if (langDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [langDropdownOpen]);

  const navLinks = [
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.education, href: '#education' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-200">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card border border-brand-border py-2.5 px-4 sm:px-6'
            : 'bg-white/80 backdrop-blur-sm border border-brand-border/60 py-3 px-4 sm:px-6'
        } flex items-center justify-between`}
      >
        {/* Brand Identity */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1"
          aria-label="Adi Tech Software Solutions - Home"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-brand-blue group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
            <Code className="w-5 h-5 transition-transform group-hover:scale-105" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-brand-text group-hover:text-brand-blue transition-colors">
                <span className="hidden sm:inline">Adi Tech Software Solutions</span>
                <span className="sm:hidden">Adi Tech</span>
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-blue-50 text-brand-blue border border-blue-200 font-semibold hidden md:inline-flex items-center gap-1">
                <GraduationCap className="w-3 h-3" />
                Student
              </span>
            </div>
            <span className="text-xs text-brand-muted font-medium">
              Jjuuko Adinan • Software Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-slate-100 transition-colors focus-ring"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Section: Language Switcher & Contact CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Selector Dropdown */}
          <div className="relative" id="language-selector-wrapper">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-brand-secondary border border-brand-border hover:border-slate-400 text-brand-text transition-colors focus-ring"
              aria-expanded={langDropdownOpen}
              aria-label="Select Language"
              id="language-menu-button"
            >
              <Globe className="w-3.5 h-3.5 text-brand-blue" />
              <span className="text-sm leading-none">{availableLanguages[language].flag}</span>
              <span className="hidden sm:inline font-mono uppercase font-semibold">{language}</span>
              <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-44 rounded-xl bg-white shadow-card-hover p-1.5 z-50 border border-brand-border animate-in fade-in zoom-in-95 duration-100"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="language-menu-button"
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
                        ? 'bg-blue-50 text-brand-blue font-semibold border border-blue-200'
                        : 'text-brand-text hover:bg-slate-100'
                    }`}
                    role="menuitem"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{availableLanguages[langKey].flag}</span>
                      <span>{availableLanguages[langKey].nativeName}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-brand-muted">{langKey}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Contact CTA Button */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-brand-blue hover:bg-brand-blue-hover text-white shadow-subtle transition-all duration-200 hover:shadow focus-ring"
          >
            <span>{t.nav.contact}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-brand-text hover:bg-slate-100 focus-ring"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl rounded-2xl bg-white shadow-card-hover border border-brand-border p-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between pb-3 border-b border-brand-border">
            <span className="text-xs font-mono text-brand-blue font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              {t.nav.statusBadge}
            </span>
            <span className="text-xs text-brand-muted font-medium">Kampala, Uganda</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-brand-text hover:bg-slate-100 transition-colors focus-ring"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-brand-blue text-white shadow-subtle"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
