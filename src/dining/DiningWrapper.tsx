import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import DashboardScreen from './components/DashboardScreen';
import MenuScreen from './components/MenuScreen';
import AboutScreen from './components/AboutScreen';
import SommelierScreen from './components/SommelierScreen';
import DeliveryScreen from './components/DeliveryScreen';
import ReservationsScreen from './components/ReservationsScreen';

export type DiningView = 'dashboard' | 'menu' | 'about' | 'sommelier' | 'delivery' | 'reservations';

export const DiningNav: React.FC<{ navHidden: boolean, currentView: DiningView, setView: (v: DiningView) => void }> = ({ navHidden, currentView, setView }) => {
 const { theme, toggleTheme } = useTheme();
 const [isMobile, setIsMobile] = useState(false);
 
 useEffect(() => {
 const checkMobile = () => setIsMobile(window.innerWidth < 1024);
 checkMobile();
 window.addEventListener('resize', checkMobile);
 return () => window.removeEventListener('resize', checkMobile);
 }, []);

 return (
 <div
 className={`fixed bottom-0 origin-bottom left-0 w-full z-30 lg:top-0 lg:bottom-auto bg-black/90 backdrop-blur-md border-t border-transparent h-13 lg:h-12 px-2 sm:px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
 (navHidden || !isMobile)
 ? 'translate-y-0 scale-100 opacity-100 blur-0' 
 : 'translate-y-[-50%] scale-50 opacity-0 blur-md pointer-events-none'
 }`}
 >
 <div className="max-w-7xl mx-auto h-full flex items-center justify-between gap-2">
 <div className="flex-1 hidden sm:block"></div>
 <div className="flex items-center justify-start md:justify-center space-x-3 sm:space-x-6 overflow-x-auto [&::-webkit-scrollbar]:h-0.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-card/20 [&::-webkit-scrollbar-thumb]:rounded-full [mask-image:linear-gradient(to_right,black_90%,transparent_100%)] px-2 flex-grow text-[10px] sm:text-[11px] after:content-[''] after:w-4 after:shrink-0">
 {(['menu', 'sommelier', 'reservations', 'delivery', 'about', 'dashboard'] as DiningView[]).map((view) => (
 <button
 key={view}
 onClick={() => {
 setView(view);
 document.getElementById('main-scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' });
 }}
 className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all whitespace-nowrap px-3 py-1.5 rounded-full ${
 currentView === view 
 ? 'bg-primary text-background shadow-lg shadow-primary/20' 
 : 'text-muted-foreground hover:text-background hover:bg-card/10'
 }`}
 >
 {view}
 </button>
 ))}
 </div>
 <div className="flex-1 flex justify-end shrink-0">
 <button onClick={toggleTheme} className="p-1.5 rounded-full bg-card/5 hover:bg-card/10 transition-colors text-muted-foreground hover:text-background">
 <span className="material-icons text-sm">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
 </button>
 </div>
 </div>
 </div>
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
 <div className="bg-black min-h-screen">
 {renderView()}
 </div>
 );
};
