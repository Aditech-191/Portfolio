import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { skillsCategories } from '../data/skillsData';
import {
  Code2,
  Layout,
  Database,
  Terminal,
  Cpu,
  Sparkles,
  CheckCircle2,
  Wrench
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTabKey, setActiveTabKey] = useState<string>('all');

  const iconMap: Record<string, React.ElementType> = {
    Code2,
    Layout,
    Database,
    Terminal,
  };

  const getProficiencyStyle = (prof: string) => {
    switch (prof) {
      case 'Core / Practical':
        return 'bg-blue-50 text-brand-blue border-blue-200';
      case 'Working Knowledge':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'Exploring':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  const displayedCategories = activeTabKey === 'all'
    ? skillsCategories
    : skillsCategories.filter((c) => c.key === activeTabKey);

  return (
    <section id="skills" className="py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="badge-subtle">
            <Wrench className="w-3.5 h-3.5" />
            <span>{t.skills.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            {t.skills.title}
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveTabKey('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 focus-ring ${
              activeTabKey === 'all'
                ? 'bg-brand-blue text-white shadow-subtle'
                : 'bg-brand-secondary text-brand-muted hover:text-brand-text border border-brand-border'
            }`}
          >
            All Categories
          </button>

          {skillsCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Cpu;
            const isActive = activeTabKey === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTabKey(cat.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 focus-ring ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-subtle'
                    : 'bg-brand-secondary text-brand-muted hover:text-brand-text border border-brand-border'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayedCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Cpu;
            return (
              <div
                key={cat.key}
                className="card-surface p-6 sm:p-7 border-brand-border space-y-5 hover:border-slate-300 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-start gap-3.5 pb-4 border-b border-brand-border">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-text">{cat.title}</h3>
                    <p className="text-xs text-brand-muted mt-0.5 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-brand-secondary border border-brand-border flex items-center justify-between gap-3 hover:bg-slate-100/80 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-brand-text">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono uppercase text-brand-muted hidden sm:inline">
                          {skill.tag}
                        </span>
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${getProficiencyStyle(skill.proficiency)}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Honest Proficiency Note */}
        <div className="mt-12 text-center p-4 rounded-xl bg-brand-secondary border border-brand-border max-w-2xl mx-auto text-xs text-brand-muted flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-brand-blue shrink-0" />
          <span>
            Proficiencies reflect practical coursework and project implementation rather than inflated percentages.
          </span>
        </div>

      </div>
    </section>
  );
};
