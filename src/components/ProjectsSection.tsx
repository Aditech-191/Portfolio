import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';
import { ProjectItem } from '../types';
import {
  FolderGit2,
  Github,
  ExternalLink,
  Layers,
  X,
  CheckCircle2,
  Cpu,
  Globe2,
  BookOpen,
  ArrowRight
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'web' | 'systems'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const filterTabs = [
    { id: 'all', label: t.projects.all, icon: Layers },
    { id: 'web', label: t.projects.web, icon: Globe2 },
    { id: 'systems', label: t.projects.systems, icon: Cpu },
  ] as const;

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'In Progress':
        return 'bg-blue-50 text-brand-blue border-blue-200';
      case 'Prototype':
        return 'bg-amber-50 text-amber-800 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-24 bg-brand-secondary scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="badge-subtle">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.projects.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight">
            {t.projects.title}
          </h2>

          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
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
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 focus-ring ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-subtle'
                    : 'bg-white text-brand-muted hover:text-brand-text border border-brand-border'
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
              className="card-surface p-6 flex flex-col justify-between hover:border-slate-300 transition-all duration-200"
            >
              <div>
                {/* Card Top: Category and Status Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-muted font-semibold">
                    {project.categoryLabel}
                  </span>

                  <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-brand-text mb-2.5 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-brand-muted text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Problem Addressed Snippet */}
                <div className="p-3 rounded-lg bg-brand-secondary border border-brand-border mb-4 text-xs">
                  <span className="font-semibold text-brand-text block mb-1">Problem Addressed:</span>
                  <span className="text-brand-muted leading-relaxed line-clamp-2">
                    {project.problemAddressed}
                  </span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Detail Modal Trigger & Repository Links */}
              <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-blue-hover focus-ring rounded py-1 px-1.5"
                >
                  <span>{t.projects.details}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-brand-muted hover:text-brand-text hover:bg-slate-100 transition-colors focus-ring"
                    title={t.projects.viewCode}
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-brand-blue hover:text-brand-blue-hover hover:bg-blue-50 transition-colors focus-ring"
                      title={t.projects.liveDemo}
                      aria-label={`Open live demonstration for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state or upcoming projects note */}
        <div className="mt-12 text-center p-6 rounded-xl card-surface border-brand-border max-w-2xl mx-auto">
          <BookOpen className="w-6 h-6 text-brand-blue mx-auto mb-2" />
          <p className="text-xs sm:text-sm text-brand-muted">
            {t.projects.emptyNotice}
          </p>
        </div>

      </div>

      {/* Accessible Project Breakdown Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-brand-border p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-card-hover">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-brand-muted hover:text-brand-text hover:bg-slate-100 transition-colors focus-ring"
              aria-label="Close project breakdown dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="badge-subtle">
                {selectedProject.categoryLabel}
              </span>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getStatusBadge(selectedProject.status)}`}>
                {selectedProject.status}
              </span>
            </div>

            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-brand-text mb-3">
              {selectedProject.title}
            </h3>

            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              {selectedProject.longDescription}
            </p>

            {/* Problem & Implementation Details */}
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-brand-secondary border border-brand-border space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text font-bold">
                  {t.projects.problemLabel}
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {selectedProject.problemAddressed}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-brand-secondary border border-brand-border space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-text font-bold">
                  {t.projects.implementationLabel}
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {selectedProject.myImplementation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-1">
                <h4 className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold">
                  {t.projects.learningsLabel}
                </h4>
                <p className="text-xs sm:text-sm text-brand-text leading-relaxed">
                  {selectedProject.learnings}
                </p>
              </div>
            </div>

            {/* Highlights Checklist */}
            <div className="space-y-2 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-brand-muted font-bold">
                {t.projects.highlightsLabel}:
              </h4>
              <div className="space-y-1.5">
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-text">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags in Modal */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedProject.tags.map((t, idx) => (
                <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                  #{t}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-brand-border">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="w-4 h-4" />
                <span>{t.projects.viewCode}</span>
              </a>

              {selectedProject.liveDemoUrl && (
                <a
                  href={selectedProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>{t.projects.liveDemo}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
