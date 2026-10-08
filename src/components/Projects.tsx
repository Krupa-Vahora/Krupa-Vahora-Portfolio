import React, { useState, useMemo } from 'react';
import { Code2, CheckCircle2, Play, Smartphone, Globe, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants/portfolio';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeProjectTab, setActiveProjectTab] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (activeProjectTab === "all") return PROJECTS;
    if (activeProjectTab === "mobile") return PROJECTS.filter(p => p.technologies.includes("React Native"));
    if (activeProjectTab === "fullstack") return PROJECTS.filter(p => p.technologies.includes("Node.js"));
    return PROJECTS;
  }, [activeProjectTab]);

  return (
    <section id="projects" className="py-10 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold'}`}>
            <Code2 className="w-3.5 h-3.5" /> Production Portfolio
          </div>
          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Featured Enterprise Projects</h2>
          <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            High-scale cross-platform mobile apps and CRM engines built for enterprise clients.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          {["all", "mobile", "fullstack"].map((f) => (
            <button
              key={f}
              onClick={() => setActiveProjectTab(f)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${activeProjectTab === f
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md shadow-cyan-500/20'
                : darkMode
                  ? 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300'
                }`}
            >
              {f === "all" ? "All Projects" : f === "mobile" ? "React Native" : "Full Stack Web"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group rounded-3xl border p-6 sm:p-8 flex flex-col justify-between transition-all hover:scale-[1.01] ${darkMode
              ? 'bg-slate-900/40 border-slate-800/90 hover:border-cyan-500/40 hover:bg-slate-900/70 shadow-lg'
              : 'bg-white border-slate-200 hover:border-cyan-500/40 shadow-sm hover:shadow-xl'
              }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold'}`}>
                  {project.badge}
                </span>
                <span className={`text-xs font-mono ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{project.timeline}</span>
              </div>

              <h3 className={`text-2xl font-bold tracking-tight transition-colors ${darkMode ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-cyan-600'}`}>
                {project.title}
              </h3>
              <p className={`text-xs font-medium mt-1 ${darkMode ? 'text-cyan-300' : 'text-cyan-700 font-semibold'}`}>{project.role}</p>

              <p className={`mt-4 text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {project.summary}
              </p>

              {/* Highlights list */}
              <div className="mt-5 space-y-2">
                {project.highlights.slice(0, 3).map((h, i) => (
                  <div key={i} className={`flex items-start gap-2 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className={`text-xs px-2.5 py-1 rounded-lg border font-mono ${darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className={`mt-8 pt-5 border-t flex flex-wrap items-center justify-between gap-3 ${darkMode ? 'border-slate-800/80' : 'border-slate-100'}`}>
              <div className="flex gap-4">
                {project.stats.map((st, i) => (
                  <div key={i} className="text-left">
                    <p className={`text-[10px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{st.label}</p>
                    <p className={`text-xs font-bold ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>{st.val}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {project.playStoreUrl && (
                  <a
                    href={project.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl transition-all hover:scale-105 ${darkMode ? 'text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25' : 'text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 font-semibold'}`}
                    title={`Open ${project.title} on Google Play Store`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Play Store</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
                {project.appStoreUrl && (
                  <a
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl transition-all hover:scale-105 ${darkMode ? 'text-cyan-400 hover:text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/25' : 'text-cyan-700 hover:text-cyan-800 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 font-semibold'}`}
                    title={`Open ${project.title} on Apple App Store`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>App Store</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl transition-all hover:scale-105 ${darkMode ? 'text-sky-400 hover:text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/25' : 'text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 font-semibold'}`}
                    title={`Visit ${project.title} Official Website`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
