import React from 'react';
import { Page } from '../GamesWrapper';

interface Props {
    onNavigate: (page: Page) => void;
}

export const ArenaHud: React.FC<Props> = ({ onNavigate }) => {
    return (
        <div className="bg-gray-900 text-gray-200 font-display min-h-screen relative overflow-hidden selection:bg-[#f2690d] selection:text-white">
            {/* Standardized Navigation - REMOVED redundant local nav */}

            {/* Hero */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,105,13,0.1)_0%,rgba(34,23,16,1)_70%)]"></div>
                 <div className="relative z-10 container mx-auto px-6 text-center pt-20">
                    <div className="mb-8">
                        <h2 className="text-[#06b6d4] text-sm sm:text-base tracking-[0.5em] uppercase mb-4 animate-pulse">Welcome to the Arena</h2>
                        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-white mb-2 tracking-tighter mix-blend-overlay">ORIENT</h1>
                        <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold text-[#f2690d] mb-8 tracking-tighter" style={{ textShadow: '0 0 5px rgba(242, 105, 13, 0.5)' }}>GAMES</h1>
                    </div>
                    
                    {/* 3D Console Illusion */}
                    <div className="relative w-64 h-64 mx-auto mb-16 perspective-1000 cursor-pointer group">
                        <div className="w-full h-full relative preserve-3d animate-[spin_20s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                             <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-gray-700 shadow-2xl flex items-center justify-center">
                                <span className="material-icons text-6xl text-[#f2690d] opacity-50">videogame_asset</span>
                             </div>
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#f2690d]/20 blur-3xl rounded-full -z-10"></div>
                        </div>
                    </div>

                    <button 
                        onClick={() => onNavigate(Page.ARENA)}
                        className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold text-white uppercase tracking-widest transition-all duration-200 bg-transparent border-2 border-white hover:border-[#f2690d] hover:text-[#f2690d] rounded-sm cursor-pointer"
                    >
                        <span className="relative animate-pulse">Press Start</span>
                    </button>
                 </div>
            </section>

            {/* Seat Map */}
            <section id="map" className="min-h-screen bg-gray-900 relative py-20 border-t border-gray-800">
                <div className="container mx-auto px-4 h-full flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-800 pb-6">
                        <div>
                            <h2 className="text-4xl font-bold text-white uppercase mb-2">Live Floor Plan</h2>
                            <p className="text-gray-400 font-mono text-sm">Select a terminal to view specs and availability.</p>
                        </div>
                    </div>
                    
                    <div className="flex-grow relative bg-[#150f0b] rounded-lg border border-gray-800 shadow-inner overflow-hidden p-8 flex items-center justify-center min-h-[500px]">
                        {/* Map HUD Corners */}
                        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-600 rounded-tl-lg"></div>
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-600 rounded-tr-lg"></div>
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-600 rounded-bl-lg"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-600 rounded-br-lg"></div>

                        {/* Interactive Map Visual */}
                        <div className="relative w-full h-full max-w-5xl aspect-video bg-neutral-900 rounded border border-white/5 relative">
                            {/* Grid bg */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                            
                            {/* Seats */}
                            <div className="absolute top-1/4 left-1/4 grid grid-cols-4 gap-4">
                                {[1,2,3,4,5,6,7,8].map(i => (
                                    <div key={i} className={`w-10 h-10 rounded border ${i === 4 ? 'border-[#f2690d] bg-[#f2690d]/20' : 'border-[#06b6d4] bg-[#06b6d4]/20'} hover:scale-110 transition-transform cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>
                                ))}
                            </div>

                             {/* Modal Overlay */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 bg-gray-900/95 border border-[#f2690d]/50 backdrop-blur-xl rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.8)] p-6 z-20">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-white font-bold text-lg">STATION A-04</h3>
                                        <span className="text-[#06b6d4] text-xs font-mono">RTX 3080 • 240Hz</span>
                                    </div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center text-sm border-t border-gray-700 pt-4">
                                        <span className="text-gray-400">Total</span>
                                        <span className="text-[#f2690d] font-bold text-lg">50 CR</span>
                                    </div>
                                    <button className="w-full bg-[#f2690d] hover:bg-[#d95a05] text-white font-bold py-2 px-4 rounded transition-colors uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(242,105,13,0.3)]">
                                        Confirm Booking
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};