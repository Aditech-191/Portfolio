import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  Cpu,
  Code2,
  ShieldCheck,
  Database,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  X,
  Gauge,
  Workflow
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeModalKey, setActiveModalKey] = useState<string | null>(null);

  const serviceList = [
    {
      key: 's1',
      data: t.services.s1,
      icon: Cpu,
      isCoreFeatured: true,
      color: 'from-blue-500 via-indigo-600 to-cyan-500',
      badgeBg: 'bg-primary-500/20 text-primary-300 border-primary-500/40',
      tag: 'Tier 1 Priority',
    },
    {
      key: 's2',
      data: t.services.s2,
      icon: Code2,
      isCoreFeatured: false,
      color: 'from-cyan-500 via-teal-600 to-blue-500',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      tag: 'Cloud & Modern Web',
    },
    {
      key: 's3',
      data: t.services.s3,
      icon: ShieldCheck,
      isCoreFeatured: false,
      color: 'from-indigo-500 via-purple-600 to-slate-700',
      badgeBg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      tag: 'Defense & Zero Trust',
    },
    {
      key: 's4',
      data: t.services.s4,
      icon: Database,
      isCoreFeatured: false,
      color: 'from-emerald-500 via-teal-600 to-cyan-600',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
      tag: 'Field Data & ETL',
    },
  ];

  const activeModalService = serviceList.find((s) => s.key === activeModalKey);

  return (
    <section id="services" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary-600/10 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-cyan-600/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.services.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.services.title}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {serviceList.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.key}
                className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  srv.isCoreFeatured
                    ? 'glass-panel-glow border-primary-500/40 ring-1 ring-primary-500/20 shadow-glow-primary'
                    : 'glass-card border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Top Row: Icon & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${srv.color} p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-dark-900 rounded-[14px] flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {srv.isCoreFeatured && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500/20 to-primary-500/20 border border-amber-500/40 text-amber-300">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          {t.services.featuredBadge}
                        </span>
                      )}
                      <span className={`text-[11px] font-mono uppercase px-2.5 py-1 rounded-md border ${srv.badgeBg}`}>
                        {srv.data.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {srv.data.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {srv.data.shortDesc}
                  </p>

                  {/* Subskills Pills */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Sub-Skills & Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {srv.data.subskills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-lg bg-dark-950/60 border border-slate-800/80"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                          <span className="leading-snug">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom / Action Row */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-400 font-mono">
                      {srv.data.metricLabel}: <strong className="text-emerald-300">{srv.data.metricValue}</strong>
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveModalKey(srv.key)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-400 hover:text-cyan-300 transition-colors py-1.5 px-3 rounded-lg hover:bg-white/5"
                  >
                    <span>{t.services.exploreDeepDive}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Technical Scope Modal */}
      {activeModalService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel-glow border border-slate-700 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setActiveModalKey(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-mono uppercase px-2.5 py-1 rounded-md border ${activeModalService.badgeBg}`}>
                {activeModalService.data.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">Scope Blueprint</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              {activeModalService.data.title}
            </h3>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {activeModalService.data.fullDesc}
            </p>

            {/* Deliverables Checklist */}
            <div className="space-y-3 mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                Key Deliverables & Implementation Standards:
              </h4>
              <div className="space-y-2">
                {activeModalService.data.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 p-2.5 rounded-xl bg-dark-950/70 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="text-xs font-mono text-slate-400">
                Metric Standard: <span className="text-emerald-400 font-bold">{activeModalService.data.metricValue}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveModalKey(null)}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm text-slate-300 hover:text-white glass-button"
                >
                  {t.services.closeModal}
                </button>

                <a
                  href="#contact"
                  onClick={() => setActiveModalKey(null)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary-600 to-cyan-600 hover:from-primary-500 hover:to-cyan-500 text-white shadow-glow-primary"
                >
                  <span>Request This Service</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
