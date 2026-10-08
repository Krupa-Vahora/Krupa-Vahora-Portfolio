import React, { useState } from 'react';
import { MapPin, Mail, ExternalLink, Check, Copy, Smartphone } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../constants/portfolio';
import { LinkedInIcon, GithubIcon } from './icons/BrandIcons';

interface HeroProps {
  darkMode: boolean;
}

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="py-12 lg:py-10 flex flex-col items-center text-center scroll-mt-24">
      <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight sm:leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
        Building High-Impact <br />
        <span className={`bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-cyan-400 via-sky-300 to-blue-500' : 'from-cyan-600 via-sky-600 to-blue-700'}`}>
          React Native & Web
        </span> Apps
      </h1>

      <p className={`mt-6 text-base sm:text-xl max-w-2xl leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
        Hi, I'm <strong className={darkMode ? 'text-slate-200' : 'text-slate-900'}>{PERSONAL_INFO.name}</strong>. {PERSONAL_INFO.tagline}
      </p>

      {/* Quick contact & profile pills */}
      <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm">
        <span className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border transition-colors ${darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'}`}>
          <MapPin className="w-3.5 h-3.5 text-rose-500" /> {PERSONAL_INFO.location}
        </span>
        <button
          onClick={handleCopyEmail}
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border transition-all ${darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300' : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-500/50 hover:text-cyan-600 shadow-sm'}`}
          title="Copy email to clipboard"
        >
          <Mail className={`w-3.5 h-3.5 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
          <span>{PERSONAL_INFO.email}</span>
          {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
        </button>
        <a
          href={PERSONAL_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border transition-all hover:scale-105 ${darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-[#0A66C2]/60 hover:text-[#0A66C2]' : 'bg-white border-slate-200 text-slate-700 hover:border-[#0A66C2]/60 hover:text-[#0A66C2] shadow-sm'}`}
          title="LinkedIn Profile"
        >
          <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
          <span>LinkedIn Profile</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
        <a
          href={PERSONAL_INFO.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl border transition-all hover:scale-105 ${darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300' : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-500/50 hover:text-cyan-600 shadow-sm'}`}
          title="GitHub Profile"
        >
          <GithubIcon className={`w-3.5 h-3.5 ${darkMode ? 'text-cyan-400' : 'text-slate-800'}`} />
          <span>GitHub Profile</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>

      {/* Hero CTAs */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 transition-all hover:-translate-y-0.5 flex items-center gap-2"
        >
          <Smartphone className="w-4 h-4" /> Explore Featured Projects
        </a>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-16 text-left">
        {STATS.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all hover:scale-[1.02] ${darkMode ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r bg-clip-text text-transparent ${darkMode ? 'from-cyan-400 to-blue-400' : 'from-cyan-600 to-blue-600'}`}>
                  {s.value}
                </span>
                <div className={`p-2 rounded-xl ${darkMode ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-50 text-cyan-600 border border-cyan-100'}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <h4 className={`font-semibold text-sm ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>{s.label}</h4>
              <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{s.detail}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
