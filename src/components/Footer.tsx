import React from 'react';
import { MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/portfolio';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`border-t py-8 text-center text-xs transition-colors ${
        darkMode ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} {PERSONAL_INFO.name} • Mobile Application Developer (React Native & MERN)
        </p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3 h-3 text-rose-500" /> {PERSONAL_INFO.location}
          </span>
          <span>•</span>
          <span className={darkMode ? 'text-cyan-400 font-mono' : 'text-cyan-700 font-mono font-medium'}>
            {PERSONAL_INFO.email}
          </span>
        </div>
      </div>
    </footer>
  );
};
