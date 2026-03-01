import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Home from './components/Home';
import Process from './components/Process';
import Impact from './components/Impact';
import Logistics from './components/Logistics';

export type WaterPage = 'home' | 'process' | 'impact' | 'logistics';

export const WaterNav: React.FC<{ navHidden: boolean, currentPage: WaterPage, onNavigate: (p: WaterPage) => void, localTheme?: 'dark'|'light', toggleLocalTheme?: () => void }> = ({ navHidden, currentPage, onNavigate, localTheme, toggleLocalTheme }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 w-full z-40 bg-white/90 backdrop-blur-xl border-b border-slate-100 dark:bg-slate-900/90 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2 cursor-pointer group shrink-0" onClick={() => onNavigate('home')}>
            <span className="material-icons text-primary text-xl sm:text-2xl">water_drop</span>
            <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white uppercase">ORIENT<span className="text-primary">WATER</span></span>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-8 overflow-x-auto no-scrollbar px-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'process', label: 'Process' },
              { id: 'impact', label: 'Impact' },
              { id: 'logistics', label: 'Logistics' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => {
                  onNavigate(item.id as WaterPage);
                  window.scrollTo(0, 0);
                }} 
                className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-colors whitespace-nowrap ${
                  currentPage === item.id ? 'text-primary' : 'text-slate-500 hover:text-primary dark:text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
            {toggleLocalTheme && (
              <button onClick={toggleLocalTheme} className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300 shrink-0">
                <span className="material-icons text-sm">{localTheme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
              </button>
            )}
          </div>
          <div className="hidden sm:block">
            <button className="bg-primary text-secondary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export const WaterApp: React.FC<{ currentPage: WaterPage }> = ({ currentPage }) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'process': return <Process />;
      case 'impact': return <Impact />;
      case 'logistics': return <Logistics />;
      default: return <Home />;
    }
  };

  return (
    <div className="pt-36 min-h-screen bg-white dark:bg-slate-950">
      {renderPage()}
    </div>
  );
};
