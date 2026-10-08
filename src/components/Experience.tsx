import React from 'react';
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Award,
  ShieldCheck,
} from 'lucide-react';
import { EXPERIENCES, EDUCATION } from '../constants/portfolio';

interface ExperienceProps {
  darkMode: boolean;
}

const CORE_COMPETENCIES = [
  "React Native",
  "TypeScript",
  "MERN Stack",
  "TanStack Query",
  "Redux Toolkit",
  "Google Maps SDK",
  "Play Store Console",
  "App Store Connect",
];

export const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <section id="experience" className="py-10 scroll-mt-20">
      <div className="mb-10 text-center sm:text-left">
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold'}`}>
          <Briefcase className="w-3.5 h-3.5" /> Career Journey
        </div>
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          Professional Experience & Education
        </h2>
        <p className={`mt-2 text-sm sm:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Enterprise cross-platform mobile delivery, engineering leadership, and academic foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Professional Experience Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
            <Briefcase className="w-4 h-4" /> Work Experience
          </div>

          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className={`rounded-3xl border p-6 sm:p-8 transition-all ${darkMode
                ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700 shadow-md'
                : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                }`}
            >
              {/* Company & Role Header */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md ${darkMode ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold'}`}>
                    {exp.company}
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mt-2.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {exp.role}
                  </h3>
                </div>
                <span className={`text-xs font-mono px-3 py-1.5 rounded-xl font-medium border ${darkMode ? 'bg-slate-950 border-slate-800 text-cyan-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
                  {exp.period}
                </span>
              </div>

              {/* Location & Employment Info */}
              <div className={`flex flex-wrap items-center gap-3 text-xs pb-4 mb-5 border-b ${darkMode ? 'text-slate-400 border-slate-800/80' : 'text-slate-500 border-slate-100'}`}>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" /> {exp.location}
                </span>
                <span>•</span>
                <span className={`px-2 py-0.5 rounded ${darkMode ? 'bg-slate-800/60 text-slate-300' : 'bg-slate-100 text-slate-700 border border-slate-200'}`}>{exp.type}</span>
                <span>•</span>
                <span className={`font-medium ${darkMode ? 'text-cyan-400' : 'text-cyan-700 font-semibold'}`}>4+ Years Active Tenure</span>
              </div>

              {/* Bullet Highlights */}
              <div className="space-y-3 mb-6">
                {exp.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {b}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech stack badge list */}
              <div className={`pt-4 border-t ${darkMode ? 'border-slate-800/60' : 'border-slate-100'}`}>
                <p className={`text-[11px] font-mono mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500 font-medium'}`}>Core Competencies In Role:</p>
                <div className="flex flex-wrap gap-1.5">
                  {CORE_COMPETENCIES.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`text-[11px] px-2.5 py-1 rounded-lg border font-mono ${darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Milestones Column (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Education Section */}
          <div className="space-y-6">
            <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
              <GraduationCap className="w-4 h-4" /> Academic Background
            </div>

            <div className="space-y-3.5">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition-all ${darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                    }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className={`text-sm sm:text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {edu.degree}
                    </h4>
                    <span className={`text-[11px] font-mono shrink-0 px-2 py-0.5 rounded border ${darkMode ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-200 text-cyan-700 font-semibold'}`}>
                      {edu.period}
                    </span>
                  </div>
                  <p className={`text-xs font-medium mt-1 ${darkMode ? 'text-cyan-300' : 'text-cyan-700 font-semibold'}`}>{edu.institution}</p>
                  <p className={`text-xs mt-2 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Production Impact */}
          <div className="space-y-4">
            <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
              <Award className="w-4 h-4" /> Quantifiable Impact
            </div>

            <div className={`p-5 rounded-2xl border space-y-3.5 ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex items-start gap-3">
                <ShieldCheck className={`w-4 h-4 shrink-0 mt-0.5 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Shipped <strong>30+ enterprise features</strong> across React Native & MERN stack for high-scale enterprise applications.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className={`w-4 h-4 shrink-0 mt-0.5 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Architected <strong>RoofLink Mobile App</strong> from inception through App Store & Google Play deployments with 99.8% crash-free stability.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className={`w-4 h-4 shrink-0 mt-0.5 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Direct collaboration with <strong>US stakeholders</strong>, adhering to strict TypeScript rigor and high quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
