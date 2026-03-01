import React from 'react';
import { motion } from 'framer-motion';
import { Play, ChevronDown, Gamepad2, Layers, Cpu } from 'lucide-react';
import { AppView } from '../types';

interface LandingProps {
  onChangeView: (view: AppView) => void;
}

const Landing: React.FC<LandingProps> = ({ onChangeView }) => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden dark:bg-void-black bg-aero-white transition-colors duration-500">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-cyan/10 rounded-full blur-[100px]"></div>
        </div>

        {/* Floating Controller Graphic - Dark Mode: Screen Blend / Light Mode: Multiply Blend */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.img 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            alt="Futuristic Controller" 
            className="w-[800px] h-auto object-contain opacity-60 dark:mix-blend-screen dark:filter dark:hue-rotate-15 dark:contrast-125 mix-blend-multiply filter contrast-150 saturate-0" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZrD6i0FqloEUoOSiNUUybl8uwMnt1YRfyG-j7JQPdHCshNwcA6fQHd6hK501vMDiT6CfEw6i_uMLQn21ihB3YgNzWPl-nbMPfhWvtsdlMRZLbIe9XN_0qU8qZAxBGS_n6yaGkWBb_xaqYPaTAKpfge9KCsfe_jj2DgYzimezHXOTZ5bm_Qt936BEV0epBuyeSKxqd3kLeJkNeh4MrmlsL7vwGi6DX_K7BUn9KgWFcu3DtJuKlfTP59nasSivOlnSaD-7C_iJf6YZp"
          />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-display text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r dark:from-white dark:via-gray-200 dark:to-gray-400 from-gray-900 via-gray-700 to-gray-500 mb-6 dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] drop-shadow-sm"
          >
            LEVEL UP <br/>
            <span className="text-primary relative inline-block">YOUR REALITY</span>
          </motion.h1>
          
          <p className="text-cyber-cyan dark:text-cyber-cyan text-blue-600 font-body text-lg md:text-xl tracking-[0.2em] mb-12 uppercase opacity-80 font-bold">
            // System Ready // Initialize Sequence
          </p>

          <button 
            onClick={() => onChangeView(AppView.ODYSSEY)}
            className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-display font-bold dark:text-white text-gray-900 transition-all duration-300 bg-transparent border-2 border-primary rounded-none hover:bg-primary/10"
          >
            <span className="relative flex items-center gap-3 text-xl tracking-widest dark:group-hover:drop-shadow-[0_0_10px_rgba(255,106,0,0.8)] transition-all">
              <Play className="w-6 h-6 animate-pulse fill-current" />
              PRESS START
            </span>
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs uppercase tracking-widest text-cyber-cyan dark:text-cyber-cyan text-blue-600">Features</span>
            <ChevronDown className="animate-bounce text-primary" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 dark:bg-panel-dark bg-white relative border-t dark:border-primary/20 border-gray-200 transition-colors duration-500">
        <div className="absolute inset-0 dark:bg-grid-pattern bg-grid-pattern-light opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="VR IMMERSION"
              desc="Full-body haptics enabled. Step into the void."
              icon={<Layers className="w-8 h-8 text-cyber-cyan dark:text-cyber-cyan text-blue-500" />}
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuCE4WCbuoUrl9ihyygcdwLIFaiB4J2no4e-n4rpfiQJPK_g5VLVldHkbEggusCRxWFS1md0TP8IX7wH3mgvKWyD6lM67qFKF5KqYIsYPnheBbkh6Ft0Ag3NP6roGGajtiTqUp3KkjnajhVv050uRAp25TKnkR0I7Y6BaFcyhc-6bzs-mFTOvmo5SVtR2kZ25m0cbPH7Sc7GbhY8R6ceAA7bzUykRKBirqKHzYu8mEYjczz2iDAMLrY3IgsDYfzQzRHJDkdMEEgX-IFA"
              onClick={() => onChangeView(AppView.VR)}
            />
            <FeatureCard 
              title="CONSOLE BAY"
              desc="Next-gen consoles. 4K 120Hz Displays."
              icon={<Gamepad2 className="w-8 h-8 text-primary" />}
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuDBLzp4VE-lcqy0kNGx0lXaxgnt72LHWtr72QGbeDr0TUVlAXAIMrVOFm7luq-PtDUntTG-1AXPZ8KmK9H1Knv6VZFqztDDM0pNvmBbn1a-rDoOdCqn__jd-aMKiYA3mnGowGdt5rHaq5Rt7f7H-XYDfLedcgr3WN3qioN5wIoHgWcdNCOhjt3v_UTFSqZMF9XQQ_EDlTSbYmAYUNd8gpDMiweQq8zOHGJN57f-KLDx5wq54Vww6Hc_-qNxPRLdh0_Y1VWQ-E9sC-PD"
              onClick={() => onChangeView(AppView.ARENA)}
            />
             <FeatureCard 
              title="HARDWARE LAB"
              desc="RTX 4090 Rigs. Zero Latency."
              icon={<Cpu className="w-8 h-8 text-purple-500" />}
              img="https://lh3.googleusercontent.com/aida-public/AB6AXuBclQ8Im1ImDIEwPdTuKMespLQVxjvhT9YhpStwrlbtEA30iZXG21L1xwpzYiRv6E_zHU5l90Fm1aBDLPdylYh1qhW7vwT19Eu8NCBFTW5wRWDaIER6DP5zgkMIsZnQ61w4tWfJ6s8Idxfq8tSnnGPFNn6fP8bt55oiL3CKiiGSiX0dlbaeNRHwh6wvULzayKqOgTjY0cUmXj6cqVghnWO_5dqfXQp0QS_OlB3-aehJxghk3ZfmNPe1q1rJJhrwb3OWaWBcRdFF9Ys2"
              onClick={() => onChangeView(AppView.HARDWARE)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, desc, icon, img, onClick }: { title: string, desc: string, icon: React.ReactNode, img: string, onClick: () => void }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    onClick={onClick}
    className="group relative h-96 rounded-xl overflow-hidden cursor-pointer border dark:border-white/5 border-gray-200 hover:border-primary transition-colors duration-300 shadow-xl"
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
    <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 dark:filter-none filter grayscale contrast-125" />
    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
      <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
        {icon}
      </div>
      <h3 className="font-display text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-300 text-sm font-medium">{desc}</p>
    </div>
  </motion.div>
);

export default Landing;
