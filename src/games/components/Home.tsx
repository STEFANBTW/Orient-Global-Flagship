import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../GamesWrapper';

interface HomeProps {
    onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#050505] text-white min-h-screen relative overflow-x-hidden">
        {/* Global Styles for this page */}
        <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20 scanlines h-screen w-full" style={{ backgroundSize: '100% 4px', backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))' }}></div>
        
        {/* Standardized Navigation - REMOVED redundant local nav */}

        {/* Hero Section */}
        <section id="base" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
            <div className="absolute inset-0 opacity-40">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6a00]/20 rounded-full blur-[100px]"
                ></motion.div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <motion.img 
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    alt="Controller" 
                    className="w-[800px] h-auto object-contain opacity-60 mix-blend-screen filter hue-rotate-15 contrast-125"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZrD6i0FqloEUoOSiNUUybl8uwMnt1YRfyG-j7JQPdHCshNwcA6fQHd6hK501vMDiT6CfEw6i_uMLQn21ihB3YgNzWPl-nbMPfhWvtsdlMRZLbIe9XN_0qU8qZAxBGS_n6yaGkWBb_xaqYPaTAKpfge9KCsfe_jj2DgYzimezHXOTZ5bm_Qt936BEV0epBuyeSKxqd3kLeJkNeh4MrmlsL7vwGi6DX_K7BUn9KgWFcu3DtJuKlfTP59nasSivOlnSaD-7C_iJf6YZp"
                />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
                <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-tech text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                >
                    LEVEL UP <br/>
                    <span className="text-[#ff6a00] relative inline-block animate-[glitch_1s_linear_infinite]">YOUR REALITY</span>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.5 }}
                    className="text-[#00F0FF] font-display text-lg md:text-xl tracking-[0.2em] mb-12 uppercase"
                >
                    // System Ready // Initialize Sequence
                </motion.p>
                <motion.button 
                    onClick={() => onNavigate(Page.VR)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-tech font-bold text-white transition-all duration-300 bg-transparent border-2 border-[#ff6a00] rounded-none hover:bg-[#ff6a00]/10 cursor-pointer"
                >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#ff6a00] rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
                    <span className="relative flex items-center gap-3 text-xl tracking-widest">
                        <span className="material-icons animate-pulse">play_arrow</span>
                        PRESS START
                    </span>
                </motion.button>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-xs uppercase tracking-widest text-[#00F0FF]">Scroll to Enter</span>
                <span className="material-icons text-[#ff6a00] animate-bounce">keyboard_double_arrow_down</span>
            </div>
        </section>

        {/* VR Zone */}
        <section id="vr-zone" className="py-24 bg-[#0a0a0a] relative border-t border-[#ff6a00]/20">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, rgba(255, 106, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 106, 0, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
                    <div>
                        <h2 className="font-tech text-4xl md:text-5xl font-bold text-white mb-2">VR <span className="text-[#00F0FF]">IMMERSION</span></h2>
                        <p className="text-gray-400 font-display">Select your dimension. Full-body haptics enabled.</p>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-[#00F0FF] font-tech text-xl">/// 02</span>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'LAGOS NIGHTS', desc: 'Survive the undercity in this high-speed cyber-parkour experience.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE4WCbuoUrl9ihyygcdwLIFaiB4J2no4e-n4rpfiQJPK_g5VLVldHkbEggusCRxWFS1md0TP8IX7wH3mgvKWyD6lM67qFKF5KqYIsYPnheBbkh6Ft0Ag3NP6roGGajtiTqUp3KkjnajhVv050uRAp25TKnkR0I7Y6BaFcyhc-6bzs-mFTOvmo5SVtR2kZ25m0cbPH7Sc7GbhY8R6ceAA7bzUykRKBirqKHzYu8mEYjczz2iDAMLrY3IgsDYfzQzRHJDkdMEEgX-IFA', tags: ['OPEN WORLD', 'RATED M'], color: 'text-[#00F0FF]', bg: 'bg-[#00F0FF]' },
                        { title: 'VOID WALKER', desc: "Face your fears in the deep void. Don't look back.", img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPENfCNBzaLIMmAK2r-p3wgMqRwvUWuGEJjSJx9QfORIyrbtq1Wf0lbi2WuZl-o8X9Uqif06vE_vFHKN8ThOXf2vPXg1u79XhZUC0BfsGUx9EQQTmU2guGAPHUwc0B0o24SJ1L3eGS_eEPCzyur80-fyIGZa4lb19LTw-I-r5jwm4d3TOzMQQvY59HWjXfQpqO125z0zhjOf9aH75YDi9EPF2rIgfRhUwwiuR82E_fuYfIBFaV6zS-FCxcGy8Jin66Wk-BXYIhY7Zi', tags: ['HORROR', 'MULTIPLAYER'], color: 'text-[#ff6a00]', bg: 'bg-[#ff6a00]' },
                        { title: 'PIXEL STORM', desc: 'Relive the classics in fully immersive 3D voxel environments.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBLzp4VE-lcqy0kNGx0lXaxgnt72LHWtr72QGbeDr0TUVlAXAIMrVOFm7luq-PtDUntTG-1AXPZ8KmK9H1Knv6VZFqztDDM0pNvmBbn1a-rDoOdCqn__jd-aMKiYA3mnGowGdt5rHaq5Rt7f7H-XYDfLedcgr3WN3qioN5wIoHgWcdNCOhjt3v_UTFSqZMF9XQQ_EDlTSbYmAYUNd8gpDMiweQq8zOHGJN57f-KLDx5wq54Vww6Hc_-qNxPRLdh0_Y1VWQ-E9sC-PD', tags: ['ARCADE', 'CLASSIC'], color: 'text-[#00F0FF]', bg: 'bg-[#00F0FF]' }
                    ].map((card, idx) => (
                        <motion.div 
                            key={idx}
                            whileHover={{ y: -10 }}
                            onClick={() => onNavigate(Page.VR)}
                            className="group relative h-96 rounded-xl overflow-hidden cursor-pointer border border-white/5 hover:border-[#ff6a00] transition-colors duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                            <img alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={card.img} />
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {card.tags.map(tag => (
                                        <span key={tag} className={`px-2 py-0.5 ${card.bg}/20 ${card.color} text-xs font-bold rounded border border-white/20`}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className={`font-tech text-2xl font-bold text-white mb-1 group-hover:${card.color} transition-colors`}>{card.title}</h3>
                                <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-200">{card.desc}</p>
                                <button className={`mt-4 w-full py-2 ${card.bg} text-black font-bold text-sm uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 hover:bg-white`} style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}>
                                    Jack In
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    </div>
  );
};
