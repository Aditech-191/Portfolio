import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  MapPin,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  GraduationCap,
  Sparkles,
  BookOpen,
  Code2,
  Terminal,
  CheckCircle2,
  Layers
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden bg-white">
      {/* Subtle background ambient shape */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -z-10 w-80 h-80 bg-slate-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability & Location Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs sm:text-sm font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span>{t.nav.openToRoles}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-secondary border border-brand-border text-brand-muted text-xs sm:text-sm font-medium">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                <span>{t.hero.location}</span>
              </div>
            </div>

            {/* Main Greeting & Name Heading */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-brand-blue font-bold">
                {t.hero.brandTitle}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-text leading-tight sm:leading-tight">
                {t.hero.headline}
              </h1>
            </div>

            {/* Tagline / Student Journey Description */}
            <p className="text-base sm:text-lg text-brand-muted max-w-2xl font-normal leading-relaxed">
              {t.hero.tagline}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>{t.hero.ctaSecondary}</span>
              </a>

              <a
                href="https://wa.me/256782010327?text=Hello%20Jjuuko%20Adinan,%20I%20am%20contacting%20you%20from%20your%20portfolio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors focus-ring"
                aria-label="Direct WhatsApp Chat"
              >
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>
            </div>

            {/* Social & Verification Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-brand-muted text-xs sm:text-sm">
              <span className="font-mono text-slate-400">Connect:</span>
              <a
                href="https://github.com/Aditech-191"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-text hover:text-brand-blue transition-colors focus-ring p-1 rounded"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono font-medium">@Aditech-191</span>
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="https://www.linkedin.com/in/jjuuko-adinan-a407a2384"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-text hover:text-brand-blue transition-colors focus-ring p-1 rounded"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span className="font-mono font-medium">Jjuuko Adinan</span>
              </a>

              <span className="text-slate-300">•</span>

              <a
                href="mailto:aditechsoftwaresolutions@gmail.com"
                className="inline-flex items-center gap-1.5 text-brand-text hover:text-brand-blue transition-colors focus-ring p-1 rounded"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4 text-brand-blue" />
                <span className="font-mono text-xs">aditechsoftwaresolutions@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Column: Honest Student Profile & Technical Focus Card */}
          <div className="lg:col-span-5">
            <div className="card-surface p-6 sm:p-7 space-y-5 border-brand-border shadow-card hover:shadow-card-hover transition-all">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-brand-text">Software Engineering Student</h3>
                    <p className="text-xs text-brand-muted">Practical Developer Profile</p>
                  </div>
                </div>
                <span className="badge-subtle">
                  Candidate
                </span>
              </div>

              {/* Learning Journey Overview */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-secondary border border-brand-border">
                  <BookOpen className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-text block">Academic Focus</span>
                    <span className="text-brand-muted text-xs">
                      Algorithms, Object-Oriented Software Design, Relational Databases, and Operating Systems.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-secondary border border-brand-border">
                  <Code2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-text block">Hands-on Web Stack</span>
                    <span className="text-brand-muted text-xs">
                      React 18, TypeScript, Tailwind CSS, Vite, Node.js, and accessible semantic UI components.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-secondary border border-brand-border">
                  <Terminal className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-brand-text block">Systems & Scripting</span>
                    <span className="text-brand-muted text-xs">
                      Linux workstation setup, Bash shell scripting, Git version control, and diagnostic workflows.
                    </span>
                  </div>
                </div>
              </div>

              {/* Goal & Aspirations Footer */}
              <div className="pt-3 border-t border-brand-border flex items-center justify-between text-xs text-brand-muted">
                <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Seeking Internships & Mentorship</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">Kampala, UG</span>
              </div>

            </div>
          </div>

        </div>

        {/* Core Principles / Pillars Row */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl card-surface border-brand-border flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-brand-blue">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-text">Rigorous Foundations</h4>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Prioritizing clean data structures, algorithms, and modular design patterns over shortcuts.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl card-surface border-brand-border flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-brand-blue">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-text">Hands-on Practice</h4>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Transforming academic theory into working software, responsive interfaces, and practical scripts.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl card-surface border-brand-border flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-brand-blue">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-text">Continuous Growth</h4>
              <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                Eager to learn from experienced developers, embrace code reviews, and build production skills.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
