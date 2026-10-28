import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  GraduationCap,
  BookOpen,
  Binary,
  Database,
  Layers,
  Terminal,
  Code2,
  CheckCircle2
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { t } = useLanguage();

  const focusAreas = [
    { title: t.education.focus1, icon: Binary, desc: 'Algorithmic efficiency, time/space complexity analysis (Big O), lists, trees, graphs, and sorting techniques.' },
    { title: t.education.focus2, icon: Layers, desc: 'Object-oriented programming principles (encapsulation, inheritance, polymorphism) and modular software patterns.' },
    { title: t.education.focus3, icon: Database, desc: 'Relational data modeling, schema normalization, SQL querying, constraints, and data integrity.' },
    { title: t.education.focus4, icon: Code2, desc: 'Client-server communications, asynchronous JavaScript/TypeScript, modern React patterns, and responsive UI design.' },
    { title: t.education.focus5, icon: Terminal, desc: 'Process execution, memory allocation, Linux filesystem architecture, and shell automation.' },
  ];

  return (
    <section id="education" className="py-20 lg:py-24 bg-brand-secondary scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="badge-subtle">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.education.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            {t.education.title}
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            {t.education.subtitle}
          </p>
        </div>

        {/* Education Hero Card */}
        <div className="card-surface p-6 sm:p-8 mb-10 border-brand-border shadow-card">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-brand-border">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue shrink-0">
                <BookOpen className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold">
                  Academic Degree Program
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-text">
                  {t.education.degree}
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted mt-0.5">
                  Kampala, Uganda • Current Academic Enrollment
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Active Student Status</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed pt-6">
            {t.education.institutionNotice}
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-brand-text flex items-center gap-2">
            <Binary className="w-5 h-5 text-brand-blue" />
            <span>{t.education.focusAreasTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {focusAreas.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card-surface p-5 border-brand-border space-y-2 hover:border-slate-300 transition-all">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-blue">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-brand-text">{item.title}</h4>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed pl-10">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
