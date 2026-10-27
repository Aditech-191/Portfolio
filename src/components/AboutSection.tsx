import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsCategories } from '../data/skillsData';
import {
  User,
  MapPin,
  Cpu,
  Code2,
  ShieldCheck,
  Database,
  Quote,
  Activity,
  Award,
  Terminal,
  Server
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('systems');

  const iconMap: Record<string, React.ElementType> = {
    Cpu,
    Code2,
    ShieldCheck,
    Database,
  };

  const activeCategory = skillsCategories.find((c) => c.key === activeCategoryKey) || skillsCategories[0];

  return (
    <section id="about" className="py-20 lg:py-28 relative scroll-mt-20">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-primary-600/10 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-mono uppercase tracking-widest">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.about.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Bio & Philosophy Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Bio Card */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base font-light">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>

            {/* Core Philosophy Banner */}
            <div className="p-5 rounded-2xl glass-panel-glow border-l-4 border-l-cyan-400 my-6">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2 font-bold">
                <Quote className="w-4 h-4" />
                <span>{t.about.corePhilosophy}</span>
              </div>
              <p className="text-white font-medium text-base sm:text-lg italic">
                "{t.hero.tagline}"
              </p>
            </div>

            <p>{t.about.p3}</p>
          </div>

          {/* Right Highlights & Workstation Status */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="rounded-3xl glass-card p-6 border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase">Operational Hub</span>
                <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Kampala, Uganda
                </span>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-dark-950/70 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2.5">
                    <Server className="w-4 h-4 text-primary-400" />
                    <span className="text-slate-300">Bare-Metal Workstation Lab</span>
                  </div>
                  <span className="text-emerald-400 font-mono">Active</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-dark-950/70 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span className="text-slate-300">pfSense & WireGuard Mesh</span>
                  </div>
                  <span className="text-emerald-400 font-mono">Hardened</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-dark-950/70 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-indigo-400" />
                    <span className="text-slate-300">ODK / KoboToolbox Host</span>
                  </div>
                  <span className="text-emerald-400 font-mono">Synced</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-dark-950/70 border border-slate-800 text-xs">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span className="text-slate-300">Technical Uptime SLA</span>
                  </div>
                  <span className="text-amber-300 font-mono font-bold">100% Target</span>
                </div>
              </div>
            </div>

            {/* Quick Shell Insight Card */}
            <div className="p-4 rounded-2xl bg-dark-950/90 border border-slate-800 text-xs font-mono text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>adinan@aditech:~$ git log --oneline -n 3</span>
              </div>
              <div className="pl-4 text-[11px] text-slate-500 space-y-0.5">
                <p>9f8d12a feat(systems): optimize Linux kernel sysctl parameters</p>
                <p>4b7c89e chore(odk): automate PostgreSQL pipeline encryption</p>
                <p>1a2c34f feat(ui): finalize multilingual i18n & AI concierge</p>
              </div>
            </div>

          </div>

        </div>

        {/* Technical Arsenal Interactive Explorer */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.about.skillsHeadline}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                Click across disciplines to explore measured technical proficiencies.
              </p>
            </div>

            {/* Discipline Selectors */}
            <div className="flex flex-wrap gap-2">
              {skillsCategories.map((cat) => {
                const Icon = iconMap[cat.icon] || Cpu;
                const isSelected = activeCategoryKey === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategoryKey(cat.key)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-glow-primary'
                        : 'glass-button text-slate-300 hover:text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Skills Panel */}
          <div className="p-6 sm:p-8 rounded-3xl glass-card border border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  {activeCategory.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  {activeCategory.description}
                </p>
              </div>
            </div>

            {/* Proficiency Bars */}
            <div className="space-y-4">
              {activeCategory.skills.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    <span className="font-mono text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>

                  <div className="h-2 w-full bg-dark-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-400 transition-all duration-700 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
