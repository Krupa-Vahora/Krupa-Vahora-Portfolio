import { useState } from 'react';
import {
  Header,
  Hero,
  Projects,
  Skills,
  Experience,
  Contact,
  Footer,
} from './components';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 selection:bg-cyan-500 selection:text-white ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Background Decorative Mesh Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className={`absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[128px] opacity-25 ${
            darkMode ? 'bg-cyan-600' : 'bg-cyan-400'
          }`}
        />
        <div
          className={`absolute top-1/3 -right-32 w-96 h-96 rounded-full blur-[140px] opacity-20 ${
            darkMode ? 'bg-blue-600' : 'bg-blue-300'
          }`}
        />
        <div
          className={`absolute -bottom-32 left-1/3 w-[32rem] h-[32rem] rounded-full blur-[160px] opacity-15 ${
            darkMode ? 'bg-indigo-700' : 'bg-indigo-300'
          }`}
        />
      </div>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
        <Hero darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}