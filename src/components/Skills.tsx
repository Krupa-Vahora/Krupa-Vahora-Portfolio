import React from 'react';
import { Layers } from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants/portfolio';

interface SkillsProps {
  darkMode: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <section id="skills" className="py-10 scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${darkMode ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' : 'bg-purple-50 text-purple-700 border border-purple-200 font-semibold'}`}>
          <Layers className="w-3.5 h-3.5" /> Comprehensive Skillset
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Core Technical Proficiencies</h2>
        <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Specialized in cross-platform mobile ecosystems, native bridge APIs, real-time sync, and scalable full-stack web engines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between ${darkMode
                ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-600 border border-cyan-100'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>{cat.title}</h3>
                </div>
                <p className={`text-xs mb-5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{cat.description}</p>

                <div className="space-y-3">
                  {cat.skills.map((s, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className={`font-semibold ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
                          {s.name}
                        </span>
                        <span className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500 font-medium'}`}>{s.level}%</span>
                      </div>
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-100 ring-1 ring-slate-200/60'}`}>
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          style={{ width: `${s.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
