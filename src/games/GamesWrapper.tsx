import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout, User, Map, Trophy, Cpu, Glasses, Disc } from 'lucide-react';
import { AppView } from './types';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Arena from './components/Arena';
import Tournament from './components/Tournament';
import Hardware from './components/Hardware';
import VR from './components/VR';
import { VRFrontier } from './components/VRFrontier';
import CyberOdyssey from './components/CyberOdyssey';
import { Navbar as GamesSubNav } from './components/Navbar';

// --- Immersive Navigation Components ---

const GlitchLink = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState("BASE");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
  
  useEffect(() => {
    let interval: any;
    if (isHovered) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText(prev => 
          "BASE".split("").map((letter, index) => {
            if (index < iteration) return "BASE"[index];
            return letters[Math.floor(Math.random() * letters.length)];
          }).join("")
        );
        if (iteration >= 4) clearInterval(interval);
        iteration += 1 / 2; // slow down slightly
      }, 50);
    } else {
      setDisplayText("BASE");
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative h-12 flex items-center justify-center overflow-hidden border-2 transition-colors duration-200 rounded-lg
      ${isActive ? 'border-primary bg-primary/20 dark:bg-primary/20 bg-primary/10' : 'dark:border-gray-700 dark:bg-black/50 border-gray-300 bg-white/50'}
      ${isHovered ? 'border-primary text-primary' : 'dark:text-gray-400 text-gray-600'}`}
      animate={{ width: isHovered || isActive ? 120 : 50 }}
    >
        <div className="absolute inset-0 dark:bg-scanlines bg-grid-pattern-light opacity-20 pointer-events-none"></div>
        <AnimatePresence>
            {!isHovered && !isActive && (
                <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                     <Layout className="w-5 h-5" />
                </motion.div>
            )}
        </AnimatePresence>
        
        <div className="flex items-center justify-center whitespace-nowrap overflow-hidden">
             {(isHovered || isActive) && (
                 <motion.span 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="font-mono font-bold tracking-widest text-sm"
                 >
                     {displayText}
                 </motion.span>
             )}
        </div>
        
        {/* Decor */}
        {isHovered && (
             <motion.div 
                className="absolute top-0 left-0 w-1 h-full bg-primary"
                animate={{ opacity: [0, 1, 0, 1, 0] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
             />
        )}
    </motion.button>
  );
};

const ScanLink = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
          onClick={onClick}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className={`relative h-12 flex items-center justify-center overflow-hidden border border-l-4 transition-all rounded-lg
          ${isActive 
            ? 'border-cyan-500 border-l-cyan-500 bg-cyan-500/10' 
            : 'dark:border-gray-800 dark:border-l-gray-600 dark:bg-black/50 border-gray-300 border-l-gray-400 bg-white/50'}
          `}
          animate={{ width: isHovered || isActive ? 130 : 50 }}
        >
            <div className="z-10 relative flex items-center gap-3">
                 <User className={`w-5 h-5 ${isHovered || isActive ? 'text-cyan-500' : 'dark:text-gray-400 text-gray-600'}`} />
                 {(isHovered || isActive) && (
                     <motion.span 
                        initial={{ opacity: 0, filter: 'blur(4px)' }} 
                        animate={{ opacity: 1, filter: 'blur(0px)' }}
                        transition={{ delay: 0.2 }}
                        className="font-display text-xs dark:text-white text-gray-900 uppercase tracking-wider whitespace-nowrap"
                     >
                         PROFILE
                     </motion.span>
                 )}
            </div>

            {/* Scanner Line */}
            {(isHovered || isActive) && (
                <motion.div 
                    className="absolute top-0 bottom-0 w-[2px] bg-cyan-500 shadow-[0_0_15px_#06b6d4] z-20"
                    initial={{ left: 0 }}
                    animate={{ left: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
            )}
            
            {/* Background Grid */}
            <div className="absolute inset-0 dark:bg-grid-pattern bg-grid-pattern-light opacity-30"></div>
        </motion.button>
    );
};

const RadarLink = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative h-12 flex items-center justify-center dark:bg-black/80 bg-white/80 shadow-sm rounded-lg
            ${isActive ? 'text-red-500' : 'dark:text-gray-400 text-gray-600'}
            `}
            animate={{ width: isHovered || isActive ? 120 : 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div className="relative z-10 flex items-center gap-2">
                <Map className={`w-5 h-5 ${isHovered || isActive ? 'animate-pulse text-red-500' : ''}`} />
                {(isHovered || isActive) && (
                    <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0, 1] }}
                        transition={{ duration: 0.4, times: [0, 0.2, 0.8, 1] }}
                        className="font-mono text-xs font-bold text-red-500 tracking-widest whitespace-nowrap"
                    >
                        ARENA
                    </motion.span>
                )}
            </div>

            {/* Corner Brackets */}
            {(isHovered || isActive) && (
                <>
                    <motion.div layoutId="tl" className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-red-500" />
                    <motion.div layoutId="tr" className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-red-500" />
                    <motion.div layoutId="bl" className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-red-500" />
                    <motion.div layoutId="br" className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-red-500" />
                    {/* Crosshair Center */}
                    <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-red-500/20 transform -translate-x-1/2 -translate-y-1/2"></div>
                </>
            )}
        </motion.button>
    );
};

const GoldLink = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative h-12 flex items-center justify-center overflow-hidden rounded-lg border
            ${isActive ? 'border-yellow-500/50' : 'dark:border-gray-800 border-gray-300'}
            `}
            style={{ 
                background: isHovered || isActive 
                ? 'linear-gradient(135deg, rgba(250, 204, 21, 0.1) 0%, rgba(0,0,0,0.1) 100%)'
                : 'transparent'
            }}
            animate={{ width: isHovered || isActive ? 160 : 50 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
            {/* Shimmer Effect */}
            {(isHovered || isActive) && (
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            )}

            <div className="relative z-10 flex items-center gap-2">
                <Trophy className={`w-5 h-5 ${isHovered || isActive ? 'text-yellow-500' : 'dark:text-gray-400 text-gray-600'}`} />
                {(isHovered || isActive) && (
                    <motion.span 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-display text-xs font-bold text-yellow-500 tracking-widest uppercase whitespace-nowrap"
                    >
                        Tournaments
                    </motion.span>
                )}
            </div>
            
            {/* Sparkles */}
            {(isHovered || isActive) && (
                <>
                    <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }} className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]" />
                    <motion.div animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full shadow-[0_0_5px_#fff]" />
                </>
            )}
        </motion.button>
    );
};

const PistonLink = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative h-12 flex items-center justify-center dark:bg-[#1a1914] bg-gray-200 border-b-4 rounded-lg
            ${isActive ? 'border-gray-500' : 'dark:border-gray-800 border-gray-400'}
            `}
            animate={{ 
                width: isHovered || isActive ? 140 : 50,
                y: isHovered ? [0, 2, 0] : 0
            }}
            transition={{ width: { duration: 0.3, ease: "circOut" }, y: { duration: 0.2 } }}
        >
             <div className="relative z-10 flex items-center gap-2">
                <Cpu className={`w-5 h-5 ${isHovered || isActive ? 'dark:text-white text-gray-900' : 'text-gray-500'}`} />
                {(isHovered || isActive) && (
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="font-display text-xs font-bold dark:text-gray-300 text-gray-800 tracking-widest uppercase whitespace-nowrap"
                    >
                        HARDWARE
                    </motion.span>
                )}
            </div>
            
            {/* Steam Vent */}
            {(isHovered) && (
                 <motion.div 
                    initial={{ opacity: 0.8, y: 0, scaleX: 1 }}
                    animate={{ opacity: 0, y: 15, scaleX: 1.5 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-[-10px] left-0 w-full h-4 dark:bg-white/20 bg-black/10 blur-md pointer-events-none rounded-b-full"
                 />
            )}
            
            {/* Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </motion.button>
    );
};

const WarpLink = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative h-12 flex items-center justify-center overflow-hidden rounded-lg
            ${isActive ? 'bg-purple-900/20' : 'dark:bg-black/50 bg-white/50'}
            `}
            animate={{ 
                width: isHovered || isActive ? 130 : 50,
                skewX: isHovered ? [0, -10, 10, 0] : 0
            }}
            transition={{ duration: 0.4 }}
        >
             <div className="relative z-10 flex items-center gap-2">
                <Glasses className={`w-5 h-5 ${isHovered || isActive ? 'text-purple-500' : 'dark:text-gray-400 text-gray-600'}`} />
                {(isHovered || isActive) && (
                    <div className="relative">
                        {/* Chromatic Aberration Layers */}
                        <motion.span 
                             className="absolute inset-0 font-display text-xs font-bold text-red-500 tracking-widest uppercase whitespace-nowrap opacity-70"
                             animate={{ x: isHovered ? [-2, 2, -1, 0] : 0 }}
                        >FRONTIER</motion.span>
                        <motion.span 
                             className="absolute inset-0 font-display text-xs font-bold text-cyan-500 tracking-widest uppercase whitespace-nowrap opacity-70"
                             animate={{ x: isHovered ? [2, -2, 1, 0] : 0 }}
                        >FRONTIER</motion.span>
                        
                        <span className="relative font-display text-xs font-bold dark:text-white text-gray-900 tracking-widest uppercase whitespace-nowrap">
                            FRONTIER
                        </span>
                    </div>
                )}
            </div>
            
            {/* Warp Grid Background */}
             {(isHovered || isActive) && (
                <motion.div 
                    initial={{ scale: 1.5, rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-cyber-grid opacity-20 origin-center"
                />
             )}
        </motion.button>
    );
};

const OdysseyLink = ({ isActive, onClick }: { isActive: boolean, onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className={`relative h-12 flex items-center justify-center overflow-hidden rounded-lg
            ${isActive ? 'bg-primary/20' : 'dark:bg-black/50 bg-white/50'}
            `}
            animate={{ 
                width: isHovered || isActive ? 130 : 50
            }}
            transition={{ duration: 0.4 }}
        >
             <div className="relative z-10 flex items-center gap-2">
                <Disc className={`w-5 h-5 ${isHovered || isActive ? 'text-primary animate-spin-slow' : 'dark:text-gray-400 text-gray-600'}`} />
                {(isHovered || isActive) && (
                    <motion.span 
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-display text-xs font-bold dark:text-white text-gray-900 tracking-[0.2em] uppercase whitespace-nowrap"
                    >
                        ODYSSEY
                    </motion.span>
                )}
            </div>
            {isActive && (
                <motion.div 
                    layoutId="odyssey-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary via-white to-primary"
                />
            )}
        </motion.button>
    );
};

export const GamesNav: React.FC<{ navHidden: boolean, currentPage: AppView, onNavigate: (p: AppView) => void, localTheme?: 'dark'|'light', toggleLocalTheme?: () => void }> = ({ navHidden, currentPage, onNavigate, localTheme, toggleLocalTheme }) => {
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
      className="fixed top-0 w-full z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10 h-16 sm:h-20 px-2 sm:px-4 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-start sm:justify-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar px-2">
        <GlitchLink isActive={currentPage === AppView.LANDING} onClick={() => onNavigate(AppView.LANDING)} />
        <div className="w-[1px] h-4 bg-white/10 mx-0.5 sm:mx-1 shrink-0" />
        <ScanLink isActive={currentPage === AppView.PROFILE} onClick={() => onNavigate(AppView.PROFILE)} />
        <RadarLink isActive={currentPage === AppView.ARENA} onClick={() => onNavigate(AppView.ARENA)} />
        <GoldLink isActive={currentPage === AppView.TOURNAMENT} onClick={() => onNavigate(AppView.TOURNAMENT)} />
        <PistonLink isActive={currentPage === AppView.HARDWARE} onClick={() => onNavigate(AppView.HARDWARE)} />
        <WarpLink isActive={currentPage === AppView.VR} onClick={() => onNavigate(AppView.VR)} />
        <div className="w-[1px] h-4 bg-white/10 mx-0.5 sm:mx-1 shrink-0" />
        <OdysseyLink isActive={currentPage === AppView.ODYSSEY} onClick={() => onNavigate(AppView.ODYSSEY)} />
        {toggleLocalTheme && (
          <>
            <div className="w-[1px] h-4 bg-white/10 mx-0.5 sm:mx-1 shrink-0" />
            <button onClick={toggleLocalTheme} className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white shrink-0">
              <span className="material-icons text-sm">{localTheme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
            </button>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export const GamesApp: React.FC<{ currentPage: AppView, onNavigate: (p: AppView) => void }> = ({ currentPage, onNavigate }) => {
  const renderView = () => {
    switch (currentPage) {
      case AppView.LANDING:
        return <Landing onChangeView={onNavigate} />;
      case AppView.PROFILE:
        return <Profile />;
      case AppView.ARENA:
        return <Arena />;
      case AppView.TOURNAMENT:
        return <Tournament />;
      case AppView.HARDWARE:
        return <Hardware />;
      case AppView.VR:
        return <VRFrontier onNavigate={onNavigate} />;
      case AppView.ODYSSEY:
        return <CyberOdyssey onBack={() => onNavigate(AppView.LANDING)} />;
      default:
        return <Landing onChangeView={onNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black">
      <main className="pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

const GamesWrapper: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  return (
    <>
      <GamesSubNav onNavigate={setCurrentView} />
      <GamesApp currentPage={currentView} onNavigate={setCurrentView} />
    </>
  );
};

export { AppView as Page } from './types';
