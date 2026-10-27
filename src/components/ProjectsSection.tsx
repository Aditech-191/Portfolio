import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Sparkles,
  Layers,
  X,
  CheckCircle2,
  Cpu,
  Database,
  Globe2
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'systems' | 'data'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs = [
    { id: 'all', label: t.projects.all, icon: Layers },
    { id: 'systems', label: t.projects.systems, icon: Cpu },
    { id: 'web', label: t.projects.web, icon: Globe2 },
    { id: 'data', label: t.projects.data, icon: Database },
  ] as const;

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.projects.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.projects.title}
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-glow-primary'
                    : 'glass-button text-slate-300 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl glass-card border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-primary-500/40 transition-all duration-300"
            >
              {/* Card Visual Header with Gradient Mesh */}
              <div className={`h-40 bg-gradient-to-br ${project.imageGradient} p-5 flex flex-col justify-between relative overflow-hidden border-b border-slate-800/80`}>
                <div className="flex items-center justify-between z-10">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-dark-950/80 text-cyan-300 border border-cyan-500/30">
                    {project.categoryLabel}
                  </span>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {t.projects.featuredBadge}
                    </span>
                  )}
                </div>

                {/* Subtle decorative grid in card preview */}
                <div className="absolute inset-0 tech-dots-pattern opacity-30 pointer-events-none"></div>

                <div className="z-10 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span className="bg-dark-950/60 px-2 py-1 rounded text-[11px] text-emerald-400 border border-emerald-500/30">
                    {project.metrics}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-primary-400 hover:text-cyan-300 transition-colors"
                  >
                    {t.projects.details} &rarr;
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                      title={t.projects.viewCode}
                      aria-label="View Source on GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                        title={t.projects.liveDemo}
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Blueprint Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-3xl glass-panel-glow border border-slate-700 p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {selectedProject.categoryLabel}
              </span>
              <span className="text-xs font-mono text-emerald-400">
                Metric: {selectedProject.metrics}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
              {selectedProject.longDescription}
            </p>

            {/* Highlights List */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary-400 font-semibold">
                Key Technical Highlights & Outcomes:
              </h4>
              <div className="space-y-2">
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 p-2.5 rounded-xl bg-dark-950/70 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags in modal */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedProject.tags.map((t, idx) => (
                <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded-md bg-dark-950 text-slate-300 border border-slate-800">
                  #{t}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold glass-button text-white hover:border-slate-500"
              >
                <Github className="w-4 h-4" />
                <span>{t.projects.viewCode}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary-600 to-cyan-600 text-white shadow-glow-primary"
              >
                <span>Inquire About Similar Architecture</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
