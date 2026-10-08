import React, { useState } from 'react';
import { Sun, Moon, Mail, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/portfolio';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${darkMode ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-3 group">
          <div>
            <span className="font-bold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              {PERSONAL_INFO.name}
            </span>
            <p className={`text-xs font-mono flex items-center gap-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              {PERSONAL_INFO.role}
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className={`transition-colors ${darkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>About</a>
          <a href="#projects" className={`transition-colors ${darkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>Projects</a>
          <a href="#skills" className={`transition-colors ${darkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>Skills</a>
          <a href="#experience" className={`transition-colors ${darkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>Experience</a>
          <a href="#contact" className={`transition-colors ${darkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'}`}>Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className={`p-2.5 rounded-xl border transition-all ${darkMode ? 'bg-slate-900 border-slate-800 text-amber-300 hover:border-slate-700' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4" /> Get in Touch
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl border transition-colors ${darkMode ? 'border-slate-800 text-slate-400 hover:text-white' : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-6 py-4 border-b ${darkMode ? 'bg-slate-900/95 border-slate-800' : 'bg-white border-slate-200 shadow-md'}`}>
          <div className="flex flex-col gap-3 text-sm">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className={`py-2 transition-colors ${darkMode ? 'hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}>About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className={`py-2 transition-colors ${darkMode ? 'hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}>Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className={`py-2 transition-colors ${darkMode ? 'hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}>Skills</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className={`py-2 transition-colors ${darkMode ? 'hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}>Experience & Education</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className={`py-2 transition-colors ${darkMode ? 'hover:text-cyan-400' : 'text-slate-700 hover:text-cyan-600'}`}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};
