import React from 'react';
import { motion } from 'framer-motion';

const Tournament: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-[#101622] to-surface-dark font-display text-slate-200">
      
      {/* Sticky Command Bar */}
      <nav className="fixed top-20 left-0 right-0 z-30 glass h-16 flex items-center justify-between px-6 lg:px-12 border-b border-[#135bec]/20">
        <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#135bec] rounded flex items-center justify-center shadow-lg shadow-[#135bec]/40">
                <span className="material-icons text-white text-sm">sports_esports</span>
            </div>
            <div>
                <h1 className="text-sm font-bold uppercase tracking-wider text-white">Orient Games</h1>
                <p className="text-[10px] text-[#135bec] font-medium tracking-widest">COMMAND CENTER // V.3.0</p>
            </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
            <a className="text-xs font-medium hover:text-[#135bec] transition-colors" href="#bracket">LIVE BRACKET</a>
            <a className="text-xs font-medium hover:text-[#135bec] transition-colors" href="#register">REGISTRATION</a>
            <a className="text-xs font-medium hover:text-[#135bec] transition-colors" href="#stream">STREAM</a>
            <a className="text-xs font-medium hover:text-[#135bec] transition-colors" href="#fame">HALL OF FAME</a>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full animate-pulse">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                <span className="text-[10px] font-bold text-red-500 uppercase">Live Now</span>
            </div>
        </div>
      </nav>

      {/* SECTION 1: LIVE BRACKET */}
      <section className="min-h-screen pt-20 pb-20 relative flex flex-col items-center justify-start overflow-hidden" id="bracket">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#135bec] rounded-full blur-[150px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col h-full">
            <div className="text-center mb-12">
                <span className="inline-block py-1 px-3 rounded bg-[#135bec]/20 text-[#135bec] border border-[#135bec]/30 text-sm font-bold uppercase tracking-widest mb-4">FIFA 24 League • Season 5</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-2">Elimination Protocol</h2>
                <p className="text-slate-400">Quarter Finals in Progress</p>
            </div>
            {/* SVG Bracket Container */}
            <div className="flex-grow w-full overflow-x-auto overflow-y-hidden custom-scrollbar bg-slate-900/40 rounded-xl border border-white/5 p-8 backdrop-blur-sm relative">
                {/* Mobile Swipe Cue */}
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/50 to-transparent pointer-events-none md:hidden flex items-center justify-end pr-4 z-20">
                    <span className="animate-pulse text-white text-xl">→</span>
                </div>
                
                <div className="min-w-[1000px] h-full flex justify-between items-center relative">
                    {/* Quarter Finals Column */}
                    <div className="flex flex-col justify-around h-full gap-16 w-64 z-10">
                        {/* Match 1 */}
                        <div className="bg-surface-dark border border-slate-700 hover:border-[#135bec] transition-all duration-300 rounded-lg p-0 overflow-hidden shadow-lg group cursor-pointer">
                            <div className="flex justify-between items-center p-3 bg-slate-800/50 border-b border-slate-700">
                                <span className="text-xs text-slate-400 font-mono">MATCH QF-01</span>
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <img className="w-8 h-8 rounded bg-slate-700 object-cover" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQFKaov3G_N_VuvIUe3hB4xqr7rjk4mI8qtbLZGbJWZyhxia47jSyRJxJ-z48CdsF6zFSm5U6_EmaaCzVBup3XQnkFzIyYnQO9bmAzDfoQO3hM8ko4cc4_f-BO_6FS33VLo9CLMFQ-TK1ZhDCrGCyqUlqN0jmyf_0B45BGtxLqkl2MIUBg5iCGM-SpDvXNx_uUr-NcMn_KW4dEda5nbNq-ZN3WNAlso1kUMd2xI8P9malbm5Uv7Rv3MKx80w2BUetBdfGGmMtk4ICt"/>
                                        <span className="font-bold text-white group-hover:text-[#135bec] transition-colors">Viper_X</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">3</span>
                                </div>
                                <div className="flex justify-between items-center opacity-50">
                                    <div className="flex items-center gap-3">
                                        <img className="w-8 h-8 rounded bg-slate-700 object-cover grayscale" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbv6abQq7dt3LuFdbuNcrgNO4zaqWV2goqXMy0gPrscszyIExkVP748-_zINZZBTV5G3txOBldxf1R4UGBfvxIJulPbAbnUSnGQDaoGxu3_0mRxu5ZcfYzYVd0vKVJniNrAugPTS02ji0hWf6dPSTsbpvPsjh8IgJTGm5uorgJ4otCd1JTRwmWdcsqn8Vc9AHvnfXylohzMpMaODziEXgdyoUCcNLWJnDAXjC_ehSdAbkFZuAk3YFEz9lIzNjZtmEt1-Ly35ui9Sjp"/>
                                        <span className="font-bold text-slate-300">NoobSlayer</span>
                                    </div>
                                    <span className="text-xl font-bold text-slate-300">1</span>
                                </div>
                            </div>
                        </div>
                        {/* Match 2 */}
                        <div className="bg-surface-dark border border-slate-700 hover:border-[#135bec] transition-all duration-300 rounded-lg p-0 overflow-hidden shadow-lg group cursor-pointer opacity-70 hover:opacity-100">
                            <div className="flex justify-between items-center p-3 bg-slate-800/50 border-b border-slate-700">
                                <span className="text-xs text-slate-400 font-mono">MATCH QF-02</span>
                                <span className="text-xs text-slate-500">ENDED</span>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-[#135bec]/20 flex items-center justify-center text-[#135bec] text-xs font-bold">DL</div>
                                        <span className="font-bold text-white group-hover:text-[#135bec] transition-colors">DriftLord</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">2</span>
                                </div>
                                <div className="flex justify-between items-center opacity-50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-slate-400 text-xs font-bold">K9</div>
                                        <span className="font-bold text-slate-300">K9Unit</span>
                                    </div>
                                    <span className="text-xl font-bold text-slate-300">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Connector Lines SVG */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
                        <path d="M 320,180 C 400,180 400,320 480,320" fill="none" stroke="#135bec" strokeWidth="2" style={{filter: 'drop-shadow(0 0 4px #135bec)'}} />
                        <path d="M 320,530 C 400,530 400,320 480,320" fill="none" stroke="#334155" strokeWidth="2" />
                        <path d="M 736,320 L 800,320" fill="none" stroke="#135bec" strokeWidth="2" strokeDasharray="5,5" style={{filter: 'drop-shadow(0 0 4px #135bec)'}} />
                    </svg>
                    {/* Semi Finals Column */}
                    <div className="flex flex-col justify-center h-full gap-32 w-64 z-10 pl-16">
                        <div className="bg-surface-dark border-2 border-[#135bec]/50 rounded-lg p-0 overflow-hidden shadow-[0_0_30px_rgba(19,91,236,0.15)] relative">
                            <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 rounded-full animate-pulse z-20 border-2 border-[#101622]"></div>
                            <div className="flex justify-between items-center p-3 bg-[#135bec]/10 border-b border-[#135bec]/30">
                                <span className="text-xs text-[#135bec] font-bold font-mono">SEMI-FINAL LIVE</span>
                                <span className="text-xs text-red-500 font-bold animate-pulse">● LIVE</span>
                            </div>
                            <div className="p-4 space-y-3">
                                <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                                    <div className="flex items-center gap-3">
                                        <img className="w-8 h-8 rounded bg-slate-700 object-cover ring-2 ring-[#135bec]" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_wV7jhsCprrzkBxxLZQCLtVUjU_ZSe8iDOX9jnsRVAx3-rj9Nry9QDdgGelOsgWRu_wRJUQCXtz71UprShA7kNIZq7_0IeibUwPDoPS5clzsB3XdGwIE1T5R13R0NcGcAdGrTIO0zkIt-0Tav0YBcxIWVl7YNa3SfOab8THJ3x1S-OpZ2wfX7I-cIBHl8HOgNTz_ZeLRZ5yOkCG-o9MJoRvnx9ue_CNFM14wpwt_Is4tAvH_mD6Qk8cL5lF-zjBfWfffPzxzfXBIs"/>
                                        <span className="font-bold text-white">Viper_X</span>
                                    </div>
                                    <span className="text-2xl font-bold text-[#135bec]">1</span>
                                </div>
                                <div className="flex justify-between items-center p-2 rounded">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-slate-400 text-xs font-bold">??</div>
                                        <span className="font-bold text-slate-300">TBD</span>
                                    </div>
                                    <span className="text-2xl font-bold text-slate-500">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Finals Column */}
                    <div className="flex flex-col justify-center h-full gap-16 w-64 z-10 pl-16 opacity-40">
                        <div className="border border-dashed border-slate-600 rounded-lg p-8 flex flex-col items-center justify-center gap-4 text-center h-48 bg-slate-900/50">
                            <span className="material-icons text-4xl text-slate-600">emoji_events</span>
                            <div>
                                <h4 className="text-sm font-bold text-slate-400 uppercase">Grand Final</h4>
                                <p className="text-xs text-slate-600 mt-1">Awaiting Challenger</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 2: REGISTRATION */}
      <section className="py-24 relative bg-surface-dark border-y border-white/5" id="register">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#135bec]/5 to-transparent skew-x-12 origin-top-right pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="w-full lg:w-1/2 space-y-10">
                    <div>
                        <h3 className="text-[#135bec] font-bold text-lg tracking-widest mb-2">UPCOMING EVENT</h3>
                        <h2 className="text-5xl lg:text-7xl font-bold text-white uppercase leading-none">Warzone<br/>Wednesdays</h2>
                    </div>
                    <div className="bg-[#101622] border border-[#135bec]/30 p-8 rounded-xl relative overflow-hidden group hover:border-[#135bec] transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-icons text-9xl text-[#135bec]">payments</span>
                        </div>
                        <h4 className="text-slate-400 font-mono text-sm uppercase tracking-wider mb-2">Total Prize Pool</h4>
                        <div className="text-5xl md:text-6xl font-bold text-white tracking-tighter tabular-nums flex items-baseline gap-2">
                            <span className="text-[#135bec]">₦</span>100,000
                            <span className="text-sm text-slate-500 font-normal tracking-normal ml-2">Guaranteed</span>
                        </div>
                        <div className="mt-6 flex gap-4 text-sm text-slate-300">
                            <div className="flex items-center gap-2"><span className="material-icons text-[#135bec] text-sm">groups</span> 32 Teams</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-[#135bec] text-sm">calendar_today</span> Oct 25th</div>
                            <div className="flex items-center gap-2"><span className="material-icons text-[#135bec] text-sm">schedule</span> 20:00 WAT</div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="bg-[#101622]/80 backdrop-blur-md border border-slate-700 p-8 md:p-10 rounded-2xl shadow-2xl relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#135bec] to-purple-600 rounded-2xl blur opacity-20"></div>
                        <form className="relative space-y-6">
                            <h3 className="text-2xl font-bold text-white mb-6 uppercase">Join the Fight</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Team Name</label>
                                    <input className="w-full bg-surface-dark border border-slate-700 rounded p-3 text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder-slate-600" placeholder="e.g. Delta Squad" type="text"/>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Captain Gamertag</label>
                                    <input className="w-full bg-surface-dark border border-slate-700 rounded p-3 text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder-slate-600" placeholder="e.g. Slayer_01" type="text"/>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                                <input className="w-full bg-surface-dark border border-slate-700 rounded p-3 text-white focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none transition-all placeholder-slate-600" placeholder="captain@example.com" type="email"/>
                            </div>
                            <div className="pt-4">
                                <button className="w-full bg-[#135bec] hover:bg-[#135bec]/90 text-white font-bold py-4 rounded uppercase tracking-widest text-lg transition-all hover:scale-[1.02] shadow-[0_0_20px_-5px_#135bec]" type="button">Deploy Squad</button>
                                <p className="text-center text-xs text-slate-500 mt-4">By registering, you agree to the Arena Rules & Regulations.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3: LIVE STREAM */}
      <section className="min-h-screen py-20 bg-[#101622] flex flex-col items-center justify-center relative overflow-hidden" id="stream">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#135bec]/5 blur-3xl pointer-events-none"></div>
        {/* Adjusted Height handling for mobile */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 w-full min-h-[50vh] md:h-[80vh] flex flex-col md:flex-row gap-4">
            <div className="flex-grow bg-[#050505] rounded-xl overflow-hidden shadow-2xl border border-slate-800 relative group aspect-video md:aspect-auto">
                <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                    <img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr2wVS3uNMEBKqkGxWX6a4hX_K37LDTBFSNDL1ZY3j0lIn5yZbaRbFzY-pFOWO7VIKnekF7XIzsdyrWRop97frzOUgBtGgA-CQYSUZlqVQwCcvkF7wmEXUSO1plO9XvnChQiAdyWvrGft-WL2aCPUuIjzNb5zYBY_yP3yERCsP4I6h0ApdpmgxoThv2lRTi7nvKxMm624cOflWJfS2r6Xb6H3WEKn1oGS6GeQt5i9vZzuvYDCcWgbqSVHa8cFb2cg8fmucilnVLsl6" alt="Stream"/>
                    <div className="relative z-10 text-center">
                        <button className="w-20 h-20 bg-[#135bec]/90 rounded-full flex items-center justify-center pl-2 hover:scale-110 transition-transform cursor-pointer shadow-[0_0_30px_rgba(19,91,236,0.6)] animate-pulse-glow">
                            <span className="material-icons text-5xl text-white">play_arrow</span>
                        </button>
                        <p className="mt-4 text-white font-bold tracking-widest uppercase text-sm">Live from Arena 1</p>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Live</span>
                        <span className="bg-[#050505]/60 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><span className="material-icons text-[10px]">visibility</span> 12.4k</span>
                    </div>
                </div>
            </div>
            {/* Chat Sidebar */}
            <div className="w-full md:w-80 lg:w-96 bg-surface-dark border-l border-slate-800 flex flex-col rounded-xl overflow-hidden h-64 md:h-full">
                <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
                    <h4 className="text-white font-bold text-sm uppercase">Arena Chat</h4>
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                </div>
                <div className="flex-grow overflow-y-auto p-4 space-y-3 text-sm scrollbar-thin scrollbar-thumb-[#135bec]/50 scrollbar-track-transparent">
                    <div className="flex gap-2"><span className="text-[#135bec] font-bold whitespace-nowrap">NeonRider:</span><span className="text-slate-300">That headshot was insane! 🔥</span></div>
                    <div className="flex gap-2"><span className="text-purple-400 font-bold whitespace-nowrap">Glitch_00:</span><span className="text-slate-300">Who is winning?</span></div>
                    <div className="flex gap-2"><span className="text-yellow-500 font-bold whitespace-nowrap">Mod_Bot:</span><span className="text-slate-400 italic">Welcome to the stream! Follow the rules.</span></div>
                    <div className="flex gap-2"><span className="text-blue-400 font-bold whitespace-nowrap">SniperElite:</span><span className="text-slate-300">Lets go Orient Games!</span></div>
                </div>
                <div className="p-4 bg-slate-900/80 border-t border-slate-800">
                    <div className="relative">
                        <input className="w-full bg-[#101622] border border-slate-700 rounded-full py-2 px-4 text-white text-sm focus:border-[#135bec] focus:ring-1 focus:ring-[#135bec] outline-none" placeholder="Send a message..." type="text"/>
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#135bec] hover:text-white transition-colors">
                            <span className="material-icons text-sm">send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 4: HALL OF FAME */}
      <section className="py-24 bg-gradient-to-t from-[#101622] via-surface-dark to-[#101622] border-t border-slate-800" id="fame">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white uppercase tracking-widest mb-4">Hall of Fame</h2>
                <div className="h-1 w-24 bg-[#135bec] mx-auto rounded-full"></div>
                <p className="text-slate-400 mt-4 max-w-2xl mx-auto">Honoring the champions who conquered the arena and claimed their glory.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card 1 */}
                <div className="group relative bg-[#101622] border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#135bec] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="h-48 bg-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#135bec]/20 mix-blend-overlay z-10"></div>
                        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNQM9yzJn0BvEjpcduVlARWuf3PqOAIinggwM1aXKp39OpKqs8Pi_0m0JnQCPat9zJqy5SH-TCPA0s6el56hLxAgXCHUTUcunjUOfJJvA3TMe-XzY_73rejDeupKI5kofIwqRkaFE7hw_2IHZOUVFoLtsFIOy5LcZISg1zGtVJzfMVtkeT0bQqQ_O4wGnKgbaZMi9h_UsJrdacP7qxWFoDZTr7O2ICWCFCvQkb1YqvSGwHBuRBzNRqsAUZ7FVumpdAqzcPJ_OCw1ne" alt="Winner"/>
                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-[#101622] text-[#101622]">
                                <span className="material-icons text-sm">emoji_events</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#135bec] transition-colors">Shadow_King</h3>
                        <p className="text-xs text-slate-500 font-mono uppercase mb-4">Season 4 Champion</p>
                        <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                            <div className="text-xs text-slate-400">Prize Won</div>
                            <div className="text-sm font-bold text-white">₦80,000</div>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="group relative bg-[#101622] border border-slate-800 rounded-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#135bec] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="h-48 bg-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#135bec]/20 mix-blend-overlay z-10"></div>
                        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY3GR9OuBcYRXB8E57-9BJPXNo6rfLAQx_BPK21Oe3xlcqoQNkkKCfUj-hqU0qQpuuFrzYFfLmENIkEUBJl6qTG2rG1VWEivkGKePezBEHL39MOAmDHY2NjeaqCVibfobKe06Ib--Aqo4BCgPl4N_rBXsPlrFHj1gs7MKhc0H_mEp7JduZlf_8YSbERCQbfqNdmUobuAu9UGNn7FMmcEJHj_qO62sVEwXp07q-kydrGkxBVO--ANMPG0QnFw1m_8MDZ_dEZkvbvN4J" alt="Winner"/>
                        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                            <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center shadow-lg border-2 border-[#101622] text-[#101622]">
                                <span className="material-icons text-sm">emoji_events</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#135bec] transition-colors">Pixel_Valkyrie</h3>
                        <p className="text-xs text-slate-500 font-mono uppercase mb-4">Season 4 Runner-up</p>
                        <div className="flex justify-between items-center border-t border-slate-800 pt-4">
                            <div className="text-xs text-slate-400">Prize Won</div>
                            <div className="text-sm font-bold text-white">₦40,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Tournament;
