import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  User,
  Quote,
  Target,
  Sparkles,
  Heart,
  Compass,
  Code2,
  GraduationCap
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="badge-subtle">
            <User className="w-3.5 h-3.5" />
            <span>{t.about.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 space-y-5 text-brand-muted leading-relaxed text-sm sm:text-base font-normal">
            <p className="text-brand-text font-medium leading-relaxed">
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>

            {/* Philosophy Callout */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border-l-4 border-l-brand-blue border border-blue-200/60 my-6 space-y-2">
              <div className="flex items-center gap-2 text-brand-blue font-mono text-xs uppercase tracking-wider font-bold">
                <Quote className="w-4 h-4" />
                <span>Guiding Mindset</span>
              </div>
              <p className="text-brand-text font-semibold text-base sm:text-lg italic">
                "{t.about.philosophyQuote}"
              </p>
            </div>

            <p>
              {t.about.p3}
            </p>
          </div>

          {/* Right Highlights: Brand vs Student Profile */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Identity Distinction Card */}
            <div className="card-surface p-6 border-brand-border space-y-4 shadow-card">
              <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold">
                  Identity & Structure
                </span>
                <span className="text-xs font-mono text-brand-muted">
                  Kampala, Uganda
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-brand-secondary border border-brand-border space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-text">
                    <GraduationCap className="w-4 h-4 text-brand-blue" />
                    <span>Student Profile</span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Jjuuko Adinan — Software Engineering student focusing on core computer science foundations, algorithms, and web systems.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-brand-secondary border border-brand-border space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-text">
                    <Code2 className="w-4 h-4 text-brand-blue" />
                    <span>Brand Entity</span>
                  </div>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Adi Tech Software Solutions — The banner under which I design, build, and publish my software projects and digital solutions.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <Target className="w-4 h-4 text-emerald-600" />
                    <span>Primary Objective</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Attracting software engineering internships, entry-level opportunities, mentorship, and open-source collaborations.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Core Values 3-Column Grid */}
        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-bold text-brand-text flex items-center gap-2">
            <Compass className="w-5 h-5 text-brand-blue" />
            <span>{t.about.coreValuesTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-surface p-6 border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-brand-text">{t.about.val1Title}</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {t.about.val1Desc}
              </p>
            </div>

            <div className="card-surface p-6 border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-brand-text">{t.about.val2Title}</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {t.about.val2Desc}
              </p>
            </div>

            <div className="card-surface p-6 border-brand-border space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-brand-text">{t.about.val3Title}</h4>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {t.about.val3Desc}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
