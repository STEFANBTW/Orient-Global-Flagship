import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DashboardScreen from './components/DashboardScreen';
import MenuScreen from './components/MenuScreen';
import AboutScreen from './components/AboutScreen';
import SommelierScreen from './components/SommelierScreen';
import DeliveryScreen from './components/DeliveryScreen';
import ReservationsScreen from './components/ReservationsScreen';

export type DiningView = 'dashboard' | 'menu' | 'about' | 'sommelier' | 'delivery' | 'reservations';

export const DiningNav: React.FC<{ navHidden: boolean, currentView: DiningView, setView: (v: DiningView) => void, localTheme?: 'dark'|'light', toggleLocalTheme?: () => void }> = ({ navHidden, currentView, setView, localTheme, toggleLocalTheme }) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed w-full z-40 top-0 bg-black/80 backdrop-blur-xl border-b border-white/10 h-14 sm:h-16 px-2 sm:px-4"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex-1 hidden sm:block"></div>
        <div className="flex items-center justify-start sm:justify-center space-x-3 sm:space-x-6 overflow-x-auto no-scrollbar px-2 flex-grow">
          {(['menu', 'sommelier', 'reservations', 'delivery', 'about', 'dashboard'] as DiningView[]).map((view) => (
            <button
              key={view}
              onClick={() => {
                setView(view);
                window.scrollTo(0, 0);
              }}
              className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap px-3 py-1.5 rounded-full ${
                currentView === view 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {view}
            </button>
          ))}
        </div>
        <div className="flex-1 flex justify-end shrink-0">
          {toggleLocalTheme && (
            <button onClick={toggleLocalTheme} className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
              <span className="material-icons text-sm">{localTheme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const DiningApp: React.FC<{ currentView: DiningView }> = ({ currentView }) => {
  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <DashboardScreen />;
      case 'menu': return <MenuScreen />;
      case 'about': return <AboutScreen />;
      case 'sommelier': return <SommelierScreen />;
      case 'delivery': return <DeliveryScreen />;
      case 'reservations': return <ReservationsScreen />;
      default: return <MenuScreen />;
    }
  };

  return (
    <div className="pt-36 bg-black min-h-screen">
      {renderView()}
    </div>
  );
};
