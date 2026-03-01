import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Arena: React.FC = () => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  return (
    <div className="min-h-screen dark:bg-[#050505] bg-[#f8f9fa] dark:text-gray-200 text-gray-800 font-body relative overflow-x-hidden selection:bg-[#f2690d] selection:text-white transition-colors duration-500">
        {/* HUD Header */}
        <div className="w-full z-30 dark:bg-[#050505]/50 bg-white/80 backdrop-blur-md border-b dark:border-[#f2690d]/20 border-orange-500/20 shadow-md">
            <div className="h-1 w-full dark:bg-gray-800 bg-gray-200">
                <div className="h-full bg-[#f2690d] w-[35%] shadow-[0_0_10px_#f2690d]"></div>
            </div>
        </div>

        {/* Scanline Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 dark:bg-scanlines bg-grid-pattern-light opacity-10"></div>

        {/* SECTION 1: HERO - ATTRACT MODE */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden dark:bg-[#050505] bg-gray-100">
            <div className="absolute inset-0 dark:bg-grid-pattern bg-grid-pattern-light bg-[length:40px_40px] opacity-10"></div>
            <div className="absolute inset-0 dark:bg-[radial-gradient(circle_at_center,rgba(242,105,13,0.1)_0%,rgba(34,23,16,1)_70%)] bg-[radial-gradient(circle_at_center,rgba(242,105,13,0.05)_0%,rgba(240,240,240,0)_70%)]"></div>
            
            <div className="relative z-10 container mx-auto px-6 text-center pt-20">
                <div className="mb-8">
                    <h2 className="text-cyber-cyan dark:text-cyber-cyan text-blue-600 text-sm sm:text-base tracking-[0.5em] uppercase mb-4 animate-pulse font-bold">Welcome to the Arena</h2>
                    <h1 className="text-5xl sm:text-8xl md:text-9xl font-bold dark:text-white text-gray-900 mb-2 tracking-tighter dark:mix-blend-overlay font-display break-words">ORIENT</h1>
                    <h1 className="text-5xl sm:text-8xl md:text-9xl font-bold text-[#f2690d] mb-8 tracking-tighter neon-text-orange font-display break-words">GAMES</h1>
                    <p className="dark:text-gray-400 text-gray-600 font-mono text-lg mb-12 max-w-2xl mx-auto border-l-2 border-[#f2690d] pl-4 text-left">
                        <span className="cursor-blink">Initializing secure connection... High-performance terminals ready. Book your station now.</span>
                    </p>
                </div>

                {/* 3D Console Representation */}
                <div className="relative w-64 h-64 mx-auto mb-16 perspective-1000 group cursor-pointer">
                    <div className="w-full h-full relative preserve-3d animate-spin-3d">
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br dark:from-gray-800 dark:to-black from-white to-gray-200 border dark:border-gray-700 border-gray-300 shadow-2xl flex items-center justify-center transform translate-z-10">
                            <span className="material-icons text-6xl text-[#f2690d] opacity-50">videogame_asset</span>
                        </div>
                        {/* Decorative glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#f2690d]/20 blur-3xl rounded-full -z-10"></div>
                    </div>
                </div>

                <a href="#map" className="group relative inline-flex items-center justify-center px-12 py-4 text-lg font-bold dark:text-white text-gray-900 uppercase tracking-widest transition-all duration-200 bg-transparent border-2 dark:border-white border-gray-900 hover:border-[#f2690d] hover:text-[#f2690d] focus:outline-none rounded-sm overflow-hidden font-display">
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent dark:to-gray-700 to-gray-200"></span>
                    <span className="relative animate-pulse">Press Start</span>
                </a>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[10px] uppercase tracking-widest dark:text-white text-gray-900">Scroll to Initialize</span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-[#f2690d] to-transparent"></div>
            </div>
        </section>

        {/* SECTION 2: LIVE SEAT MAP */}
        <section id="map" className="min-h-screen dark:bg-[#150f0b] bg-white relative py-20 border-t dark:border-gray-800 border-gray-200">
            <div className="container mx-auto px-4 h-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b dark:border-gray-800 border-gray-200 pb-6">
                    <div>
                        <h2 className="text-4xl font-bold dark:text-white text-gray-900 uppercase mb-2 font-display">Live Floor Plan</h2>
                        <p className="text-gray-400 font-mono text-sm">Select a terminal to view specs and availability.</p>
                    </div>
                    <div className="flex gap-6 mt-4 md:mt-0 font-mono text-xs">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-cyber-cyan shadow-[0_0_8px_#06b6d4]"></span>
                            <span className="text-gray-500">OPEN</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-[#f2690d] shadow-[0_0_8px_#f2690d]"></span>
                            <span className="text-gray-500">OCCUPIED</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-sm bg-tournament-yellow shadow-[0_0_8px_#facc15]"></span>
                            <span className="text-gray-500">TOURNAMENT</span>
                        </div>
                    </div>
                </div>

                <div className="flex-grow relative dark:bg-[#150f0b] bg-slate-50 rounded-lg border dark:border-gray-800 border-gray-200 shadow-inner overflow-hidden p-8 flex items-center justify-center">
                    {/* Decorative HUD corners */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 dark:border-gray-600 border-gray-300 rounded-tl-lg"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 dark:border-gray-600 border-gray-300 rounded-tr-lg"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 dark:border-gray-600 border-gray-300 rounded-bl-lg"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 dark:border-gray-600 border-gray-300 rounded-br-lg"></div>

                    {/* SVG Map */}
                    <div className="relative w-full h-full max-w-5xl aspect-video dark:bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-white rounded border dark:border-white/5 border-gray-200 shadow-lg">
                        <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 800 450">
                            <defs>
                                <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ccc" strokeWidth="0.5" className="dark:stroke-[#333]" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#smallGrid)" />
                            
                            {/* Zone A: General */}
                            <g className="group" transform="translate(50, 50)">
                                <text x="0" y="-15" fill="#555" fontFamily="monospace" fontSize="12" className="font-bold">ZONE A - STANDARD</text>
                                <rect onClick={() => setSelectedSeat('A1')} className="seat transition-all duration-300 cursor-pointer hover:stroke-2 hover:brightness-125" x="0" y="0" width="40" height="40" rx="4" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1" />
                                <rect onClick={() => setSelectedSeat('A2')} className="seat transition-all duration-300 cursor-pointer hover:stroke-2 hover:brightness-125" x="50" y="0" width="40" height="40" rx="4" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1" />
                                <rect onClick={() => setSelectedSeat('A3')} className="seat transition-all duration-300 cursor-pointer hover:stroke-2 hover:brightness-125" x="100" y="0" width="40" height="40" rx="4" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1" />
                                <rect className="seat transition-all duration-300 cursor-not-allowed" x="150" y="0" width="40" height="40" rx="4" fill="#f2690d" fillOpacity="0.2" stroke="#f2690d" strokeWidth="1" /> {/* Occupied */}
                                
                                <rect onClick={() => setSelectedSeat('A5')} className="seat transition-all duration-300 cursor-pointer hover:stroke-2 hover:brightness-125" x="0" y="60" width="40" height="40" rx="4" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1" />
                                <rect className="seat transition-all duration-300 cursor-not-allowed" x="50" y="60" width="40" height="40" rx="4" fill="#f2690d" fillOpacity="0.2" stroke="#f2690d" strokeWidth="1" />
                                <rect onClick={() => setSelectedSeat('A7')} className="seat transition-all duration-300 cursor-pointer hover:stroke-2 hover:brightness-125" x="100" y="60" width="40" height="40" rx="4" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1" />
                                <rect onClick={() => setSelectedSeat('A8')} className="seat transition-all duration-300 cursor-pointer hover:stroke-2 hover:brightness-125" x="150" y="60" width="40" height="40" rx="4" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1" />
                            </g>

                            {/* Zone B: Pro */}
                            <g className="group" transform="translate(50, 250)">
                                <text x="0" y="-15" fill="#555" fontFamily="monospace" fontSize="12" className="font-bold">ZONE B - PRO</text>
                                <path d="M0,20 L20,0 L180,0 L200,20 L200,80 L180,100 L20,100 L0,80 Z" fill="none" stroke="#444" strokeDasharray="5,5" strokeWidth="1" className="dark:stroke-[#444] stroke-gray-300" />
                                <rect onClick={() => setSelectedSeat('B1')} className="seat transition-all duration-300 cursor-pointer hover:stroke-2 hover:brightness-125" x="25" y="25" width="40" height="40" rx="4" fill="#facc15" fillOpacity="0.2" stroke="#facc15" strokeWidth="1" />
                                <rect onClick={() => setSelectedSeat('B2')} className="seat transition-all duration-300 cursor-pointer hover:stroke-2 hover:brightness-125" x="80" y="25" width="40" height="40" rx="4" fill="#facc15" fillOpacity="0.2" stroke="#facc15" strokeWidth="1" />
                                <rect onClick={() => setSelectedSeat('B3')} className="seat transition-all duration-300 cursor-pointer hover:stroke-2 hover:brightness-125" x="135" y="25" width="40" height="40" rx="4" fill="#facc15" fillOpacity="0.2" stroke="#facc15" strokeWidth="1" />
                            </g>

                            {/* Zone C: VR */}
                            <g className="group" transform="translate(500, 50)">
                                <text x="0" y="-15" fill="#555" fontFamily="monospace" fontSize="12" className="font-bold">ZONE C - VR & SIM</text>
                                <circle onClick={() => setSelectedSeat('VR1')} className="seat cursor-pointer hover:stroke-2 hover:brightness-125" cx="50" cy="50" r="30" fill="#06b6d4" fillOpacity="0.1" stroke="#06b6d4" strokeWidth="1" />
                                <circle className="seat cursor-not-allowed" cx="150" cy="50" r="30" fill="#f2690d" fillOpacity="0.1" stroke="#f2690d" strokeWidth="1" />
                                <rect className="seat" x="20" y="120" width="160" height="80" rx="8" fill="#f2690d" fillOpacity="0.1" stroke="#f2690d" strokeWidth="1" />
                                <text x="100" y="165" textAnchor="middle" fill="#f2690d" fontFamily="monospace" fontSize="10">MAIN STAGE</text>
                            </g>

                            {/* Walkways */}
                            <path d="M 300 0 L 300 450" stroke="#eee" strokeWidth="40" className="dark:stroke-[#222]" />
                            <path d="M 0 200 L 800 200" stroke="#eee" strokeWidth="40" className="dark:stroke-[#222]" />
                        </svg>

                        {/* Modal */}
                        <AnimatePresence>
                            {selectedSeat && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 100 }}
                                    className="fixed bottom-0 left-0 right-0 w-full rounded-t-xl md:rounded-lg md:absolute md:top-1/2 md:left-1/2 md:bottom-auto md:right-auto md:w-80 md:transform md:-translate-x-1/2 md:-translate-y-1/2 dark:bg-[#150f0b]/95 bg-white/95 border-t md:border dark:border-[#f2690d]/50 border-orange-500/30 backdrop-blur-xl shadow-2xl p-6 z-30"
                                >
                                    <button onClick={() => setSelectedSeat(null)} className="absolute top-2 right-2 text-gray-500 hover:text-black dark:hover:text-white"><X size={16}/></button>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="dark:text-white text-gray-900 font-bold text-lg font-display">STATION {selectedSeat}</h3>
                                            <span className="text-cyber-cyan text-xs font-mono">RTX 3080 • 240Hz</span>
                                        </div>
                                        <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_5px_#22c55e]"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-gray-400 text-xs font-mono mb-1">DURATION</label>
                                            <select className="w-full dark:bg-[#050505]/50 bg-gray-100 border dark:border-gray-700 border-gray-300 rounded dark:text-white text-gray-900 text-sm focus:border-[#f2690d] focus:ring-1 focus:ring-[#f2690d] p-2">
                                                <option>1 Hour (50 CR)</option>
                                                <option>2 Hours (90 CR)</option>
                                                <option>All Night (200 CR)</option>
                                            </select>
                                        </div>
                                        <div className="flex justify-between items-center text-sm border-t dark:border-gray-700 border-gray-200 pt-4">
                                            <span className="text-gray-400">Total</span>
                                            <span className="text-[#f2690d] font-bold text-lg">50 CR</span>
                                        </div>
                                        <button className="w-full bg-[#f2690d] hover:bg-[#d95a05] text-white font-bold py-2 px-4 rounded transition-colors uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(242,105,13,0.3)] font-display">
                                            Confirm Booking
                                        </button>
                                    </div>
                                    {/* Corners (Visual Only) */}
                                    <div className="hidden md:block absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#f2690d]"></div>
                                    <div className="hidden md:block absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#f2690d]"></div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 3: LIVE LEADERBOARD */}
        <section className="min-h-[60vh] dark:bg-gradient-to-b dark:from-[#221710] dark:to-[#0f0805] bg-gradient-to-b from-orange-50 to-white py-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f2690d]/5 -skew-x-12 transform origin-bottom"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-4xl font-bold dark:text-white text-gray-900 uppercase tracking-tight font-display">Today's MVPs</h2>
                        <div className="h-1 w-24 bg-[#f2690d] mt-2"></div>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-1 rounded-full bg-[#f2690d]/20 text-[#f2690d] border border-[#f2690d]/50 text-xs font-bold uppercase hover:bg-[#f2690d] hover:text-white transition-all">Global</button>
                        <button className="px-4 py-1 rounded-full dark:bg-gray-800 bg-white dark:text-gray-400 text-gray-600 border dark:border-gray-700 border-gray-300 text-xs font-bold uppercase hover:dark:text-white hover:text-black transition-all">Local</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Top Player Spotlight */}
                    <div className="relative dark:bg-gray-900/50 bg-white rounded-xl p-8 border dark:border-gray-700 border-gray-200 flex flex-col items-center justify-center text-center group hover:border-[#f2690d]/50 transition-colors shadow-lg">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f2690d] to-transparent opacity-50"></div>
                        <div className="relative mb-6">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f2690d] to-gray-800 p-1">
                                <img className="w-full h-full rounded-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" alt="Player" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGQsZcmc5M7fXh-vwRCm3suEekJQYVGf2wjmYTfNpkBSQgeSjCNRTzLMHuDBuFNPgnWE8Y3XoTB9PTMJEQoK2wRh1GO4kST4TnnoehVpX_wWhkVA2uYJf_d68PChTCKbYcCBmBw1HTHFQiK01DpKh14dZsSBOUTFLTmk-Xw3FSj11ntaQ6BWTjLYA8lr2EHgsbQREos1XnUvqbDalYcdZ5IuwNAnCJAFJNPVSoprHic_onyKLKcfeN9pk2EoCuDBOXc7UiDvfdneOS"/>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-tournament-yellow text-black text-xs font-bold px-2 py-1 rounded shadow-lg">#1</div>
                        </div>
                        <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-1 font-display">K3N_MAST3R</h3>
                        <p className="text-cyber-cyan dark:text-cyber-cyan text-blue-600 text-sm font-mono mb-6">TEKKEN 8 • 24 WINSTREAK</p>
                        <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                            <div className="dark:bg-[#050505]/40 bg-gray-100 rounded p-2">
                                <div className="text-xs text-gray-500">WINS</div>
                                <div className="text-lg font-bold dark:text-white text-gray-900">42</div>
                            </div>
                            <div className="dark:bg-[#050505]/40 bg-gray-100 rounded p-2">
                                <div className="text-xs text-gray-500">K/D</div>
                                <div className="text-lg font-bold dark:text-white text-gray-900">3.4</div>
                            </div>
                            <div className="dark:bg-[#050505]/40 bg-gray-100 rounded p-2">
                                <div className="text-xs text-gray-500">TIME</div>
                                <div className="text-lg font-bold dark:text-white text-gray-900">4h</div>
                            </div>
                        </div>
                    </div>
                    {/* List */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="text-xs text-gray-500 uppercase border-b dark:border-gray-800 border-gray-200">
                                    <th className="py-3 px-4 font-normal">Rank</th>
                                    <th className="py-3 px-4 font-normal">Player</th>
                                    <th className="py-3 px-4 font-normal">Game</th>
                                    <th className="py-3 px-4 font-normal text-right">Score</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono text-sm">
                                <tr className="border-b dark:border-gray-800/50 border-gray-100 hover:dark:bg-white/5 hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-4 text-tournament-yellow font-bold">02</td>
                                    <td className="py-4 px-4 dark:text-white text-gray-900">Viper_X</td>
                                    <td className="py-4 px-4 text-gray-400">COD: MW3</td>
                                    <td className="py-4 px-4 text-right text-[#f2690d] font-bold">15,400</td>
                                </tr>
                                <tr className="border-b dark:border-gray-800/50 border-gray-100 hover:dark:bg-white/5 hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-4 text-tournament-yellow font-bold">03</td>
                                    <td className="py-4 px-4 dark:text-white text-gray-900">NoobSlayer99</td>
                                    <td className="py-4 px-4 text-gray-400">FIFA 24</td>
                                    <td className="py-4 px-4 text-right text-[#f2690d] font-bold">12,250</td>
                                </tr>
                                <tr className="border-b dark:border-gray-800/50 border-gray-100 hover:dark:bg-white/5 hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-4 text-gray-500">04</td>
                                    <td className="py-4 px-4 dark:text-gray-300 text-gray-700">Ghost_Rider</td>
                                    <td className="py-4 px-4 text-gray-400">MK1</td>
                                    <td className="py-4 px-4 text-right text-[#f2690d]">9,800</td>
                                </tr>
                                <tr className="border-b dark:border-gray-800/50 border-gray-100 hover:dark:bg-white/5 hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-4 text-gray-500">05</td>
                                    <td className="py-4 px-4 dark:text-gray-300 text-gray-700">Jinxed_It</td>
                                    <td className="py-4 px-4 text-gray-400">Valorant</td>
                                    <td className="py-4 px-4 text-right text-[#f2690d]">8,450</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        {/* SECTION 4: STATION SPECS */}
        <section className="min-h-[50vh] dark:bg-gray-900 bg-white py-20 border-t dark:border-gray-800 border-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold dark:text-white text-gray-900 uppercase mb-10 text-center font-display"><span className="text-[#f2690d]">System</span> Loadouts</h2>
                {/* Enhanced Horizontal Scroll Padding */}
                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scroll-smooth hide-scrollbar px-8 lg:justify-center">
                    {/* Card 1 */}
                    <div className="snap-center shrink-0 w-80 dark:bg-gray-900 bg-slate-50 border dark:border-gray-800 border-gray-200 rounded-xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition-all group shadow-lg">
                        <div className="h-40 dark:bg-gray-800 bg-gray-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t dark:from-gray-900 from-gray-50 to-transparent z-10"></div>
                            <img className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOW2678j0J0JnnL7v38Fm8ErPkCJfOlNmNJez-Z--1fq4dF7wThmW8G_XuVcx6X9PNDtxh1akvDIJcxkgfaQa0PNiLSPMJZsle-6OPKJFDig-O-T6PlCoDlgLhhH3xbhV9PoBXBLPl_Mf5wGLZOIIQAQzDvYZheVJKSlO33JscOYlTZoB83XkjglP1OusEitvjEvk0sRvHPQUnIC0yZfEgBtEz7xqc9h9jpeig1T1FpQmzzi5SGY2yp_JKCa0ZeshUcJFpT2DaZoHw" alt="Setup"/>
                        </div>
                        <div className="p-6 relative">
                            <div className="absolute top-0 right-6 -mt-4 bg-gray-700 text-white text-xs px-3 py-1 rounded shadow">LVL 1</div>
                            <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-1 font-display">Standard Ops</h3>
                            <p className="text-gray-400 text-sm mb-4">Perfect for casual competitive gaming.</p>
                            <ul className="space-y-2 mb-6 text-sm font-mono text-gray-500 dark:text-gray-300">
                                <li className="flex items-center gap-2"><span className="text-[#f2690d] material-icons text-sm">memory</span> RTX 3060 12GB</li>
                                <li className="flex items-center gap-2"><span className="text-[#f2690d] material-icons text-sm">speed</span> 165Hz Monitor</li>
                                <li className="flex items-center gap-2"><span className="text-[#f2690d] material-icons text-sm">keyboard</span> Mechanical Keys</li>
                            </ul>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="dark:text-white text-gray-900 font-bold text-xl">₦5,000<span className="text-sm text-gray-500 font-normal">/hr</span></div>
                                <button className="px-4 py-2 bg-gray-800 hover:bg-[#f2690d] text-white text-sm rounded transition-colors uppercase font-bold tracking-wide">Select</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="snap-center shrink-0 w-80 dark:bg-gray-900 bg-white border border-[#f2690d] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(242,105,13,0.15)] relative transform scale-105 z-10">
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#f2690d]"></div>
                        <div className="h-40 dark:bg-gray-800 bg-gray-100 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t dark:from-gray-900 from-white to-transparent z-10"></div>
                            <img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR1hx8gubt143NginHFZ6kPWm-zBTTOc6pNYR7zwB1RYCP6pzcUK0lR62aX9VJa7SBQ7KbSsw7njZLim5jUc2zyqhS_YCWjqbFFPonKbxibGXpkUs8xNUbglD1HAVnL8cgrUKd17kfO3ekTHxnJALLO15WBPEbpIaM7i0HGCx80KbLdWeomMgu9jAKibLRObhQ3sX0tCPEr4bhfohea4mvaWnoi67u0prVSBG8aa5HCihExiL3HpgNf4fOhKGhnS3y49mfmW-J5Nd2" alt="Pro"/>
                        </div>
                        <div className="p-6 relative">
                            <div className="absolute top-0 right-6 -mt-4 bg-[#f2690d] text-white text-xs px-3 py-1 rounded shadow font-bold">POPULAR</div>
                            <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-1 font-display">Pro Elite</h3>
                            <p className="text-gray-400 text-sm mb-4">Esports grade performance for serious players.</p>
                            <ul className="space-y-2 mb-6 text-sm font-mono text-gray-500 dark:text-gray-300">
                                <li className="flex items-center gap-2"><span className="text-[#f2690d] material-icons text-sm">memory</span> RTX 4080 Super</li>
                                <li className="flex items-center gap-2"><span className="text-[#f2690d] material-icons text-sm">speed</span> 360Hz Zowie</li>
                                <li className="flex items-center gap-2"><span className="text-[#f2690d] material-icons text-sm">headset_mic</span> Noise Canceling</li>
                            </ul>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="dark:text-white text-gray-900 font-bold text-xl text-[#f2690d]">₦10,000<span className="text-sm text-gray-500 font-normal">/hr</span></div>
                                <button className="px-4 py-2 bg-[#f2690d] hover:bg-[#d95a05] text-white text-sm rounded transition-colors uppercase font-bold tracking-wide shadow-lg shadow-[#f2690d]/30">Select</button>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="snap-center shrink-0 w-80 dark:bg-gray-900 bg-slate-50 border dark:border-gray-800 border-gray-200 rounded-xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition-all group shadow-lg">
                        <div className="h-40 dark:bg-gray-800 bg-gray-200 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t dark:from-gray-900 from-gray-50 to-transparent z-10"></div>
                            <img className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYu-yXqgsILXPAopVpz1VvlZ7nFzpcb98g0xqcTdBouQmE_ekpiCxjY_VQIxaVBkeQVpSNiZmheldY3v3Z5YRzJpwRvyOBkbxr1uwJbyC_-BGtOCDtoRhHYKliHL-M--Lb5bCXDmvHYz7zt4orU8VVVFHgVIMtSdggIS0lxx1dUvh0aZuxgasDtqF1mIEjp8q7X_NUGFg-nxLShpSaCEQEQuLWYB3cfzBXd-Zq_OoMx1vooDnTlcFsIhUxbuU2tHBlj6AEZObr5axO" alt="VR"/>
                        </div>
                        <div className="p-6 relative">
                            <div className="absolute top-0 right-6 -mt-4 bg-cyber-cyan text-black font-bold text-xs px-3 py-1 rounded shadow">IMMERSIVE</div>
                            <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-1 font-display">Sim & VR</h3>
                            <p className="text-gray-400 text-sm mb-4">Full motion rigs and virtual reality bays.</p>
                            <ul className="space-y-2 mb-6 text-sm font-mono text-gray-500 dark:text-gray-300">
                                <li className="flex items-center gap-2"><span className="text-[#f2690d] material-icons text-sm">view_in_ar</span> Quest 3 / Varjo</li>
                                <li className="flex items-center gap-2"><span className="text-[#f2690d] material-icons text-sm">directions_car</span> Direct Drive Sim</li>
                                <li className="flex items-center gap-2"><span className="text-[#f2690d] material-icons text-sm">aspect_ratio</span> 10x10m Space</li>
                            </ul>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="dark:text-white text-gray-900 font-bold text-xl">₦15,000<span className="text-sm text-gray-500 font-normal">/hr</span></div>
                                <button className="px-4 py-2 bg-gray-800 hover:bg-[#f2690d] text-white text-sm rounded transition-colors uppercase font-bold tracking-wide">Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* AI NPC ASSISTANT */}
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 pointer-events-none md:pointer-events-auto">
            <div className="hidden md:block dark:bg-gray-900 bg-white border border-[#f2690d]/30 rounded-lg p-4 mb-4 max-w-xs shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                <p className="dark:text-white text-gray-800 text-sm font-mono leading-tight">
                    <span className="text-[#f2690d] font-bold">GM:</span> "Need a wingman? Seat A-04 is hot right now. Or try the VR rig for some Beat Saber!"
                </p>
                <div className="mt-2 flex gap-2">
                    <input className="w-full dark:bg-[#050505] bg-gray-100 border dark:border-gray-700 border-gray-300 rounded px-2 py-1 text-xs dark:text-white text-gray-900 focus:border-[#f2690d] focus:ring-0 outline-none" placeholder="Reply..." type="text"/>
                    <button className="bg-[#f2690d] hover:bg-[#d95a05] text-white rounded px-2 py-1 text-xs material-icons">send</button>
                </div>
                <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 dark:bg-gray-900 bg-white border-r border-b border-[#f2690d]/30"></div>
            </div>
            <div className="relative group cursor-pointer pointer-events-auto">
                <div className="absolute inset-0 bg-[#f2690d] rounded-full animate-ping opacity-20"></div>
                <div className="w-16 h-16 rounded-full dark:bg-gray-800 bg-white border-2 border-[#f2690d] overflow-hidden relative shadow-[0_0_15px_#f2690d] hover:scale-110 transition-transform flex items-center justify-center">
                    <span className="material-icons text-[#f2690d] text-3xl">smart_toy</span>
                </div>
                <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 dark:border-gray-900 border-white rounded-full"></div>
            </div>
        </div>
    </div>
  );
};

export default Arena;
