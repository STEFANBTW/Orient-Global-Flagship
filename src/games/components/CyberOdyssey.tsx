import React from 'react';

interface CyberOdysseyProps {
    onBack: () => void;
}

const CyberOdyssey: React.FC<CyberOdysseyProps> = ({ onBack }) => {
  return (
    <div className="bg-void-black text-white font-display overflow-x-hidden selection:bg-primary selection:text-white relative">
        <div className="fixed inset-0 z-50 pointer-events-none mix-blend-overlay opacity-15 scanlines animate-scanline h-screen w-full"></div>
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-cyber-cyan to-primary z-50 animate-pulse"></div>

        {/* Custom Navigation for this View */}
        <nav className="fixed top-0 w-full z-40 bg-void-black/90 backdrop-blur-xl border-b border-white/5">
            <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center gap-3 group cursor-pointer" onClick={onBack}>
                        <div className="relative w-10 h-10 flex items-center justify-center border border-primary group-hover:border-cyber-cyan transition-colors transform rotate-45">
                            <span className="material-icons text-primary group-hover:text-cyber-cyan text-xl transform -rotate-45 transition-colors">hub</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-display font-bold text-xl tracking-[0.2em] text-white">ORIENT<span className="text-primary group-hover:text-cyber-cyan transition-colors">GAMES</span></span>
                            <span className="text-[0.6rem] text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">Cyber Odyssey Division</span>
                        </div>
                    </div>
                    <div className="hidden xl:flex items-center gap-1">
                        <div className="h-[1px] w-12 bg-white/20"></div>
                        <div className="px-4 py-1 border border-white/10 bg-[#050505]/50 text-xs font-mono text-cyber-cyan">SYS.STATUS: ONLINE</div>
                        <div className="h-[1px] w-12 bg-white/20"></div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a className="relative px-4 py-2 text-sm uppercase tracking-wider font-bold text-gray-400 hover:text-white group overflow-hidden" href="#hero">
                            <span className="relative z-10">Start</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </a>
                        <a className="relative px-4 py-2 text-sm uppercase tracking-wider font-bold text-gray-400 hover:text-white group overflow-hidden" href="#vr-frontier">
                            <span className="relative z-10">The Frontier</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-cyber-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </a>
                        <a className="relative px-4 py-2 text-sm uppercase tracking-wider font-bold text-gray-400 hover:text-white group overflow-hidden" href="#arena-dash">
                            <span className="relative z-10">Arena Live</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </a>
                        <a className="relative px-4 py-2 text-sm uppercase tracking-wider font-bold text-gray-400 hover:text-white group overflow-hidden" href="#tournament-pro">
                            <span className="relative z-10">Brackets</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </a>
                        <a className="relative px-4 py-2 text-sm uppercase tracking-wider font-bold text-gray-400 hover:text-white group overflow-hidden" href="#hardware">
                            <span className="relative z-10">Tech</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        </a>
                    </div>
                    <button onClick={onBack} className="flex items-center gap-2 bg-white/5 hover:bg-primary border border-white/10 hover:border-primary px-5 py-2 clip-path-hex transition-all duration-300 group">
                        <span className="material-icons text-sm group-hover:text-black">login</span>
                        <span className="font-display text-xs font-bold uppercase group-hover:text-black">Exit_Port</span>
                    </button>
                </div>
            </div>
        </nav>

        {/* Hero */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-void-black" id="hero">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[2px] h-[2px] bg-white rounded-full top-1/4 left-1/4 shadow-[0_0_10px_#fff] animate-float"></div>
                <div className="absolute w-[3px] h-[3px] bg-primary rounded-full top-3/4 left-1/3 shadow-[0_0_15px_#ff6a00] animate-float-delayed"></div>
                <div className="absolute w-[4px] h-[4px] bg-cyber-cyan rounded-full top-1/2 right-1/4 shadow-[0_0_20px_#00F0FF] animate-pulse"></div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSI4MCIgcj0iMSIgZmlsbD0icmdiYSgwLDI0MCwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-50 animate-pan-bg"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-gradient-to-r from-primary/10 via-transparent to-cyber-cyan/10 blur-[120px] rounded-full animate-pulse-slow"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="mb-8 relative w-96 h-96 flex items-center justify-center">
                    <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow opacity-30"></div>
                    <div className="absolute inset-4 border border-primary/20 rounded-full animate-spin-slow opacity-30" style={{ animationDirection: 'reverse' }}></div>
                    <img alt="Futuristic Controller" className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(0,240,255,0.3)] animate-float filter hue-rotate-15 contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZrD6i0FqloEUoOSiNUUybl8uwMnt1YRfyG-j7JQPdHCshNwcA6fQHd6hK501vMDiT6CfEw6i_uMLQn21ihB3YgNzWPl-nbMPfhWvtsdlMRZLbIe9XN_0qU8qZAxBGS_n6yaGkWBb_xaqYPaTAKpfge9KCsfe_jj2DgYzimezHXOTZ5bm_Qt936BEV0epBuyeSKxqd3kLeJkNeh4MrmlsL7vwGi6DX_K7BUn9KgWFcu3DtJuKlfTP59nasSivOlnSaD-7C_iJf6YZp"/>
                </div>
                <div className="space-y-4 max-w-4xl mx-auto px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-sm mb-4">
                        <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                        <span className="text-xs font-mono text-primary tracking-widest">SYSTEM OVERRIDE DETECTED</span>
                    </div>
                    <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 tracking-tighter leading-none animate-glitch" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                        CYBER<br/><span className="text-stroke-white text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyber-cyan">ODYSSEY</span>
                    </h1>
                    <p className="text-gray-400 font-body text-xl tracking-[0.5em] uppercase opacity-80 mt-6">
                        [ Initialize 600vh Sequence ]
                    </p>
                    <div className="mt-12 group">
                        <a className="relative inline-flex items-center justify-center px-16 py-5 overflow-hidden font-display font-bold text-white transition-all duration-300 bg-void-black border border-white/20 hover:border-cyber-cyan clip-path-hex" href="#vr-frontier">
                            <span className="absolute inset-0 w-full h-full -mt-10 transition-all duration-700 opacity-0 bg-gradient-to-b from-transparent via-transparent to-cyber-cyan/20 group-hover:opacity-100 group-hover:mt-0"></span>
                            <span className="relative flex items-center gap-3 text-2xl tracking-widest neon-text-cyan group-hover:scale-110 transition-transform">
                                PRESS START
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-12 left-0 w-full flex justify-between px-12 items-end opacity-50 font-mono text-xs text-cyber-cyan">
                <div className="flex flex-col gap-1">
                    <span>COORD: 001.002</span>
                    <span>SEC: HERO_HUB</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <span className="uppercase tracking-widest">Dive Deep</span>
                    <div className="h-16 w-[1px] bg-gradient-to-b from-cyber-cyan to-transparent relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scanline"></div>
                    </div>
                </div>
                <div className="text-right">
                    <span>V.1.0.4</span>
                </div>
            </div>
        </section>

        <div className="relative w-full bg-panel-dark" id="vr-frontier">
            <div className="sticky top-20 z-30 bg-void-black/80 backdrop-blur border-b border-white/10 py-4 px-6 lg:px-12 flex justify-between items-center">
                <h2 className="font-display text-2xl text-white">THE VR <span className="text-cyber-cyan">FRONTIER</span></h2>
                <div className="flex gap-2">
                    <div className="w-2 h-2 bg-cyber-cyan rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                </div>
            </div>

            <section className="h-screen-40 relative group overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[#050505]">
                    <img alt="Neon Nights" className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE4WCbuoUrl9ihyygcdwLIFaiB4J2no4e-n4rpfiQJPK_g5VLVldHkbEggusCRxWFS1md0TP8IX7wH3mgvKWyD6lM67qFKF5KqYIsYPnheBbkh6Ft0Ag3NP6roGGajtiTqUp3KkjnajhVv050uRAp25TKnkR0I7Y6BaFcyhc-6bzs-mFTOvmo5SVtR2kZ25m0cbPH7Sc7GbhY8R6ceAA7bzUykRKBirqKHzYu8mEYjczz2iDAMLrY3IgsDYfzQzRHJDkdMEEgX-IFA"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-between px-12 lg:px-24">
                    <div className="max-w-xl z-10 translate-x-0 transition-transform duration-700">
                        <span className="text-cyber-cyan font-mono text-sm tracking-widest mb-2 block">/// GAME_ID: 01</span>
                        <h3 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 neon-text-cyan">NEON NIGHTS</h3>
                        <p className="text-gray-300 text-lg md:text-xl font-body max-w-md leading-relaxed">High-velocity cyber-parkour in a decaying metropolis. Feel the wind with haptic fan integration.</p>
                    </div>
                    <div className="hidden md:block z-10 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                        <span className="material-icons text-9xl text-white/10 group-hover:text-cyber-cyan/50 transition-colors">speed</span>
                    </div>
                </div>
            </section>

            <section className="h-screen-40 relative group overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[#050505]">
                    <img alt="Void Walker" className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 filter hue-rotate-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPENfCNBzaLIMmAK2r-p3wgMqRwvUWuGEJjSJx9QfORIyrbtq1Wf0lbi2WuZl-o8X9Uqif06vE_vFHKN8ThOXf2vPXg1u79XhZUC0BfsGUx9EQQTmU2guGAPHUwc0B0o24SJ1L3eGS_eEPCzyur80-fyIGZa4lb19LTw-I-r5jwm4d3TOzMQQvY59HWjXfQpqO125z0zhjOf9aH75YDi9EPF2rIgfRhUwwiuR82E_fuYfIBFaV6zS-FCxcGy8Jin66Wk-BXYIhY7Zi"/>
                    <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-black"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-between flex-row-reverse px-12 lg:px-24">
                    <div className="max-w-xl z-10 text-right">
                        <span className="text-primary font-mono text-sm tracking-widest mb-2 block">/// GAME_ID: 02</span>
                        <h3 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 neon-text-orange">VOID WALKER</h3>
                        <p className="text-gray-300 text-lg md:text-xl font-body leading-relaxed">Psychological horror in zero-g. Don't look behind you. Multiplayer enabled.</p>
                    </div>
                    <div className="hidden md:block z-10 transform -translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                        <span className="material-icons text-9xl text-white/10 group-hover:text-primary/50 transition-colors">visibility_off</span>
                    </div>
                </div>
            </section>

            <section className="h-screen-40 relative group overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[#050505]">
                    <img alt="Pixel Storm" className="w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 pixelated" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBLzp4VE-lcqy0kNGx0lXaxgnt72LHWtr72QGbeDr0TUVlAXAIMrVOFm7luq-PtDUntTG-1AXPZ8KmK9H1Knv6VZFqztDDM0pNvmBbn1a-rDoOdCqn__jd-aMKiYA3mnGowGdt5rHaq5Rt7f7H-XYDfLedcgr3WN3qioN5wIoHgWcdNCOhjt3v_UTFSqZMF9XQQ_EDlTSbYmAYUNd8gpDMiweQq8zOHGJN57f-KLDx5wq54Vww6Hc_-qNxPRLdh0_Y1VWQ-E9sC-PD"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-between px-12 lg:px-24">
                    <div className="max-w-xl z-10">
                        <span className="text-neon-purple font-mono text-sm tracking-widest mb-2 block">/// GAME_ID: 03</span>
                        <h3 className="font-display text-5xl md:text-7xl font-bold text-white mb-4" style={{ textShadow: '0 0 10px #bc13fe' }}>PIXEL STORM</h3>
                        <p className="text-gray-300 text-lg md:text-xl font-body leading-relaxed">Voxel-based destruction derby. 8-bit nostalgia meets 8K resolution.</p>
                    </div>
                    <div className="hidden md:block z-10 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-500">
                        <span className="material-icons text-9xl text-white/10 group-hover:text-neon-purple/50 transition-colors">grid_view</span>
                    </div>
                </div>
            </section>

            <section className="h-screen-40 relative group overflow-hidden">
                <div className="absolute inset-0 bg-[#050505]/90">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_0%,rgba(188,19,254,0.1)_50%,rgba(18,18,18,0)_100%)]"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-grid-perspective opacity-50"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div className="z-10 relative">
                        <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
                        <span className="text-white font-mono text-sm tracking-widest mb-2 block">/// GAME_ID: 04</span>
                        <h3 className="font-display text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 drop-shadow-lg">SYNTH WAVE</h3>
                        <button className="bg-transparent border border-white/30 hover:border-white text-white px-8 py-3 font-display uppercase tracking-widest hover:bg-white/10 transition-all clip-path-hex">
                            Enter The Grid
                        </button>
                    </div>
                </div>
            </section>
        </div>

        <section className="relative h-screen-130 bg-void-black border-t border-primary/30 flex flex-col" id="arena-dash">
            <div className="bg-panel-dark/80 backdrop-blur border-b border-white/10 p-6 lg:px-12 flex justify-between items-center z-20">
                <div>
                    <h2 className="font-display text-4xl text-white font-bold">LIVE ARENA <span className="text-primary">DASHBOARD</span></h2>
                    <p className="text-gray-400 font-mono text-sm mt-1">REAL-TIME TELEMETRY /// SECTOR 7G</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-xs text-green-500 font-bold uppercase">Network Stable</span>
                    </div>
                </div>
            </div>
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-12 h-full overflow-hidden">
                <div className="lg:col-span-3 border-r border-white/10 bg-[#050505]/40 p-6 overflow-y-auto custom-scrollbar relative">
                    <h3 className="font-display text-lg text-cyber-cyan mb-6 flex items-center gap-2">
                        <span className="material-icons text-sm">rss_feed</span> ACTIVITY FEED
                    </h3>
                    <div className="space-y-4">
                        <div className="p-3 border-l-2 border-primary bg-white/5 text-xs font-mono">
                            <span className="text-gray-500 block mb-1">00:04 AGO</span>
                            <p className="text-white"><span className="text-primary font-bold">Player_One</span> achieved High Score in <span className="text-gray-400">Neon Nights</span></p>
                        </div>
                        <div className="p-3 border-l-2 border-cyber-cyan bg-white/5 text-xs font-mono">
                            <span className="text-gray-500 block mb-1">00:12 AGO</span>
                            <p className="text-white">Station B4 reserved by <span className="text-cyber-cyan font-bold">Team_Liquid</span></p>
                        </div>
                        <div className="p-3 border-l-2 border-purple-500 bg-white/5 text-xs font-mono">
                            <span className="text-gray-500 block mb-1">01:30 AGO</span>
                            <p className="text-white">Tournament <span className="text-purple-400 font-bold">Tekken 8</span> Quarter-finals starting now.</p>
                        </div>
                        <div className="p-3 border-l-2 border-gray-600 bg-white/5 text-xs font-mono opacity-60">
                            <span className="text-gray-500 block mb-1">05:00 AGO</span>
                            <p className="text-white">System Maintenance scheduled for 03:00 AM.</p>
                        </div>
                        <div className="p-3 border-l-2 border-primary bg-white/5 text-xs font-mono">
                            <span className="text-gray-500 block mb-1">06:22 AGO</span>
                            <p className="text-white"><span className="text-primary font-bold">Ghost_Rider</span> logged in.</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-void-black to-transparent pointer-events-none"></div>
                </div>
                <div className="lg:col-span-6 p-8 relative flex flex-col">
                    <div className="flex-grow bg-grid-pattern rounded-xl border border-white/10 p-8 relative flex items-center justify-center bg-[#050505]/20">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[500px] h-[500px] border border-white/5 rounded-full animate-pulse-slow"></div>
                            <div className="w-[300px] h-[300px] border border-white/5 rounded-full animate-spin-slow"></div>
                        </div>
                        <div className="grid grid-cols-2 gap-24 relative z-10">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="w-16 h-16 bg-gray-800 border-2 border-primary rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,106,0,0.3)] cursor-help tooltip-trigger">
                                    <span className="material-icons text-primary">sports_esports</span>
                                </div>
                                <div className="w-16 h-16 bg-gray-800 border-2 border-primary rounded-lg flex items-center justify-center opacity-50">
                                    <span className="material-icons text-gray-500">sports_esports</span>
                                </div>
                                <div className="w-16 h-16 bg-green-900/20 border-2 border-green-500 rounded-lg flex items-center justify-center hover:bg-green-500/20 cursor-pointer transition-colors">
                                    <span className="material-icons text-green-500">add</span>
                                </div>
                                <div className="w-16 h-16 bg-gray-800 border-2 border-primary rounded-lg flex items-center justify-center">
                                    <span className="material-icons text-primary">sports_esports</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="w-16 h-16 bg-green-900/20 border-2 border-green-500 rounded-lg flex items-center justify-center hover:bg-green-500/20 cursor-pointer transition-colors">
                                    <span className="material-icons text-green-500">add</span>
                                </div>
                                <div className="w-16 h-16 bg-gray-800 border-2 border-primary rounded-lg flex items-center justify-center">
                                    <span className="material-icons text-primary">sports_esports</span>
                                </div>
                                <div className="w-16 h-16 bg-gray-800 border-2 border-primary rounded-lg flex items-center justify-center">
                                    <span className="material-icons text-primary">sports_esports</span>
                                </div>
                                <div className="w-16 h-16 bg-green-900/20 border-2 border-green-500 rounded-lg flex items-center justify-center hover:bg-green-500/20 cursor-pointer transition-colors">
                                    <span className="material-icons text-green-500">add</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="w-32 h-32 border-4 border-cyber-cyan/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-[#050505]/40">
                                <span className="font-display text-white font-bold tracking-widest text-xs">MAIN<br/>STAGE</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-3 border-l border-white/10 bg-panel-dark p-6">
                    <h3 className="font-display text-lg text-primary mb-6 flex items-center gap-2">
                        <span className="material-icons text-sm">emoji_events</span> GLOBAL RANKING
                    </h3>
                    <div className="overflow-hidden rounded-lg border border-white/10">
                        <table className="w-full text-left text-sm text-gray-400 font-mono">
                            <thead className="bg-white/5 text-xs uppercase text-gray-200">
                                <tr>
                                    <th className="px-4 py-3">#</th>
                                    <th className="px-4 py-3">User</th>
                                    <th className="px-4 py-3 text-right">Score</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="bg-primary/10">
                                    <td className="px-4 py-3 text-primary font-bold">01</td>
                                    <td className="px-4 py-3 text-white">Neon_Samurai</td>
                                    <td className="px-4 py-3 text-right font-bold">99,842</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-white">02</td>
                                    <td className="px-4 py-3">Cyber_Ninja</td>
                                    <td className="px-4 py-3 text-right">94,220</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-white">03</td>
                                    <td className="px-4 py-3">Viper_X</td>
                                    <td className="px-4 py-3 text-right">88,105</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-white">04</td>
                                    <td className="px-4 py-3">Glitch_00</td>
                                    <td className="px-4 py-3 text-right">82,400</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-white">05</td>
                                    <td className="px-4 py-3">Void_Runner</td>
                                    <td className="px-4 py-3 text-right">76,990</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 p-4 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/30 rounded-lg">
                        <h4 className="text-purple-400 font-bold text-xs uppercase mb-2">Current Challenge</h4>
                        <p className="text-white text-sm">"Beat the dev score on Pixel Storm"</p>
                        <div className="mt-2 w-full bg-gray-800 rounded-full h-1.5">
                            <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <span className="text-xs text-gray-500 mt-1 block text-right">3 Days Left</span>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative h-screen-130 bg-panel-dark border-t border-cyber-cyan/20 overflow-hidden" id="tournament-pro">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6bTEgMWgzOHYzOEgxVjF6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz48L3N2Zz4=')]"></div>
            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-24 relative z-10 h-full flex flex-col">
                <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-12 text-center neon-text-cyan">
                    TOURNAMENT <span className="text-stroke-cyan text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">ARC</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-grow">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="w-full aspect-video bg-[#050505] border border-cyber-cyan/30 rounded-xl relative overflow-hidden group">
                            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">LIVE</span>
                                <span className="text-white font-mono text-xs drop-shadow-md">FINALS: TEAM A VS TEAM B</span>
                            </div>
                            <img alt="Live Stream Placeholder" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYJiwcTdi1XT09L8qTtegA4CZ480ax3J9CCM4tnH5euCnuZpJg9QpLwgIjb6TGy4o2_7b0PDr-cIrkYfI3537VnlVrJz_A8-j0uYwULtXSqIOFEjZ_evUOcjlMg0S7xrkndk2bvxqdgKZTA3S7Lv3_RrieZMWNjzz_YIAjgN37CwCt2ls02mZi3KayCwGJ8gusF5WyYobhwL5SChprFXkdojuuzky8vgDAeEQenSkAggbUCdqV_pFcjEL0ZjI7qQYid0sJ3toAPynD"/>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="material-icons text-6xl text-white opacity-80 drop-shadow-lg cursor-pointer hover:scale-110 transition-transform">play_circle_filled</span>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full bg-[#050505]/80 backdrop-blur border-t border-white/10 py-2 overflow-hidden">
                                <div className="whitespace-nowrap animate-pan-bg flex gap-8 text-cyber-cyan font-mono text-sm uppercase tracking-wider">
                                    <span>$$ PRIZE POOL: ₦50,000,000</span>
                                    <span>///</span>
                                    <span>NEXT MATCH: 14:00 WAT</span>
                                    <span>///</span>
                                    <span>CURRENT CHAMPION: DRX_VAL</span>
                                    <span>///</span>
                                    <span>$$ PRIZE POOL: ₦50,000,000</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#050505]/30 p-6 rounded-xl border border-white/5 overflow-x-auto">
                            <h3 className="font-display text-xl text-white mb-4">Master Bracket</h3>
                            <div className="min-w-[600px] flex justify-between items-center text-xs font-mono">
                                <div className="flex flex-col gap-8">
                                    <div className="bg-gray-800 p-2 rounded w-32 border-l-2 border-green-500">Team Alpha</div>
                                    <div className="bg-gray-800 p-2 rounded w-32">Team Beta</div>
                                    <div className="bg-gray-800 p-2 rounded w-32 border-l-2 border-green-500">Team Gamma</div>
                                    <div className="bg-gray-800 p-2 rounded w-32">Team Delta</div>
                                </div>
                                <div className="flex flex-col gap-20">
                                    <div className="bg-gray-800 p-2 rounded w-32 border-l-2 border-green-500 translate-y-4">Team Alpha</div>
                                    <div className="bg-gray-800 p-2 rounded w-32 translate-y-[-1rem]">Team Gamma</div>
                                </div>
                                <div className="flex flex-col gap-8">
                                    <div className="bg-cyber-cyan/20 text-cyber-cyan p-3 rounded w-40 border border-cyber-cyan text-center font-bold shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                                        CHAMPION?
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-1 bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-8 relative flex flex-col justify-center">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/20 to-transparent rounded-tr-xl"></div>
                        <h3 className="font-display text-3xl text-white mb-2">JOIN THE <span className="text-primary italic">FIGHT</span></h3>
                        <p className="text-gray-400 text-sm mb-8">Register your team for the upcoming Cyber Winter Split.</p>
                        <form className="space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs uppercase text-primary mb-1 font-mono tracking-wider">Captain ID</label>
                                    <input className="w-full bg-white/5 border border-white/10 text-white rounded p-3 focus:border-primary focus:ring-1 focus:ring-primary font-body placeholder-white/20 transition-all" placeholder="GAMERTAG" type="text"/>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-primary mb-1 font-mono tracking-wider">Team Roster (CSV)</label>
                                    <textarea className="w-full bg-white/5 border border-white/10 text-white rounded p-3 focus:border-primary focus:ring-1 focus:ring-primary font-body placeholder-white/20 transition-all h-24" placeholder="Player2, Player3, Player4, Player5"></textarea>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase text-primary mb-1 font-mono tracking-wider">Region</label>
                                    <select className="w-full bg-white/5 border border-white/10 text-white rounded p-3 focus:border-primary focus:ring-1 focus:ring-primary font-body transition-all">
                                        <option>North America (East)</option>
                                        <option>Europe (West)</option>
                                        <option>Asia (Pacific)</option>
                                    </select>
                                </div>
                            </div>
                            <button className="w-full py-4 bg-primary text-white font-display font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 clip-path-slant shadow-[0_0_20px_rgba(255,106,0,0.4)]" type="button">
                                Initialize Registration
                            </button>
                            <div className="text-center">
                                <a className="text-xs text-gray-500 hover:text-white underline decoration-gray-700" href="#">Read Tournament Rules v4.2</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="relative h-[80vh] bg-void-black overflow-hidden flex items-center" id="hardware">
            <div className="absolute right-0 top-0 h-full w-1/3 border-l border-white/5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgydjJIMUMxeiIgZmlsbD0iIzMzMyIgZmlsbC1vcGFjaXR5PSIwLjUiLz48L3N2Zz4=')] opacity-20"></div>
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="relative w-full aspect-square bg-gradient-to-b from-gray-900 to-black rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                        <span className="material-icons text-9xl text-gray-700 group-hover:text-primary transition-colors duration-700 transform group-hover:scale-110">chair</span>
                        <div className="absolute top-1/4 left-1/4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                            <span className="text-[0.6rem] bg-[#050505]/80 text-primary px-2 py-1 border border-primary/30 rounded">HAPTIC ENGINE V2</span>
                        </div>
                        <div className="absolute bottom-1/3 right-1/4 flex items-center gap-2 flex-row-reverse">
                            <div className="w-2 h-2 bg-cyber-cyan rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                            <span className="text-[0.6rem] bg-[#050505]/80 text-cyber-cyan px-2 py-1 border border-cyber-cyan/30 rounded">COOLING MATRIX</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-primary font-mono tracking-widest text-sm mb-2 block">// HARDWARE SPECS</span>
                    <h2 className="font-display text-5xl text-white font-bold mb-6">IMMERSION <span className="text-white/30">RIG</span></h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Our custom-built battle stations feature 240Hz 8K displays, zero-latency fiber inputs, and the proprietary "Orient-X" haptic feedback chair that simulates every impact.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-12">
                        <div className="p-4 border border-white/10 bg-white/5 rounded">
                            <span className="block text-2xl font-display text-white">240<span className="text-sm text-gray-500 ml-1">Hz</span></span>
                            <span className="text-xs text-gray-500 uppercase">Refresh Rate</span>
                        </div>
                        <div className="p-4 border border-white/10 bg-white/5 rounded">
                            <span className="block text-2xl font-display text-white">1ms<span className="text-sm text-gray-500 ml-1">GtG</span></span>
                            <span className="text-xs text-gray-500 uppercase">Response Time</span>
                        </div>
                    </div>
                    <div className="border-t border-white/10 pt-8">
                        <h3 className="font-display text-lg text-white mb-4">HALL OF FAME</h3>
                        <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                            <div className="flex-shrink-0 w-32 h-40 bg-gray-900 rounded border border-white/10 overflow-hidden relative group cursor-pointer">
                                <img alt="Champ 1" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOehooJDN9Z2sWZ4aqL-TM2FKazpA9J_QbyYjci1m-dZyJ8JtzWTD-akFtgoxExp1paKxoQK-dWkdPNMEhjvAVphoMBFmIRi1jcWxLMnhTfz9Px5crtIfB-SiPmdkvmwyHhMfdMCA6UHJfSb6WXhlBLIoqmaQyPNRpw3q-GlaIk0kGHdfeUsao92A9iU6-lP7J9LaVgX5u_jT0uut2t5kyy0jSjhlLAlK4O4wqppk6iIGDCW4BcaiWq4dg7W94NT0d1QA8hqi1ztY7"/>
                                <div className="absolute bottom-0 left-0 w-full bg-[#050505]/80 p-2 text-center">
                                    <span className="text-xs font-bold text-white block">S2 WINNER</span>
                                </div>
                            </div>
                            <div className="flex-shrink-0 w-32 h-40 bg-gray-900 rounded border border-white/10 overflow-hidden relative group cursor-pointer">
                                <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="material-icons text-white/20">person</span>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-[#050505]/80 p-2 text-center">
                                    <span className="text-xs font-bold text-gray-400 block">S1 WINNER</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer className="bg-panel-dark border-t border-white/10 pt-20 pb-10 h-[40vh] flex flex-col justify-between">
            <div className="max-w-[1920px] mx-auto px-6 lg:px-12 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-1">
                        <span className="font-display font-bold text-2xl tracking-widest text-white block mb-6">ORIENT<span className="text-primary">GAMES</span></span>
                        <p className="text-gray-500 text-sm font-mono mb-4">
                            SYSTEM READY.<br/>
                            EST. 2042<br/>
                            NEON DISTRICT
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-400" href="#"><span className="material-icons text-sm">facebook</span></a>
                            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyber-cyan hover:text-black transition-all text-gray-400" href="#"><span className="material-icons text-sm">smart_display</span></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 text-cyber-cyan">Hub</h4>
                        <ul className="space-y-3 text-sm text-gray-500 font-body">
                            <li><a className="hover:text-white transition-colors" href="#">Start Game</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">VR Experiences</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Leaderboard</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 text-primary">Esports</h4>
                        <ul className="space-y-3 text-sm text-gray-500 font-body">
                            <li><a className="hover:text-white transition-colors" href="#">Tournaments</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Team Registration</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Prize Pools</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6 text-neon-purple">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-500 font-body">
                            <li><a className="hover:text-white transition-colors" href="#">Hardware Specs</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
                            <li><a className="hover:text-white transition-colors" href="#">Contact GM</a></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-1">
                        <div className="bg-[#050505] border border-white/10 rounded-xl p-1 h-full min-h-[150px] relative group overflow-hidden">
                            <img alt="Map Location" className="w-full h-full object-cover rounded-lg opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYJiwcTdi1XT09L8qTtegA4CZ480ax3J9CCM4tnH5euCnuZpJg9QpLwgIjb6TGy4o2_7b0PDr-cIrkYfI3537VnlVrJz_A8-j0uYwULtXSqIOFEjZ_evUOcjlMg0S7xrkndk2bvxqdgKZTA3S7Lv3_RrieZMWNjzz_YIAjgN37CwCt2ls02mZi3KayCwGJ8gusF5WyYobhwL5SChprFXkdojuuzky8vgDAeEQenSkAggbUCdqV_pFcjEL0ZjI7qQYid0sJ3toAPynD"/>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="material-icons text-primary text-4xl drop-shadow-lg animate-bounce">location_on</span>
                            </div>
                            <div className="absolute bottom-2 left-2 bg-[#050505]/80 px-2 py-1 rounded text-[0.6rem] text-cyber-cyan font-mono border border-cyber-cyan/20">
                                SECTOR 7G, JOS ARENA
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/5 pt-8 mt-8 max-w-[1920px] mx-auto px-6 lg:px-12 w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
                <p>© 2024 ORIENT GAMES DIVISION. ALL RIGHTS RESERVED.</p>
                    <div className="flex items-center gap-6 mt-4 md:mt-0">
                        <span className="hover:text-gray-400 cursor-pointer">PRIVACY PROTOCOL</span>
                        <span className="hover:text-gray-400 cursor-pointer">TERMS OF SERVICE</span>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-500">SERVERS ONLINE (99.9%)</span>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="fixed bottom-8 right-8 z-50">
                <div className="group relative">
                    <div className="absolute bottom-16 right-0 w-80 bg-panel-dark/95 backdrop-blur border border-cyber-cyan/50 rounded-lg p-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto origin-bottom-right transform scale-90 group-hover:scale-100 translate-y-4 group-hover:translate-y-0">
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 bg-cyber-cyan rounded-full overflow-hidden flex-shrink-0 border-2 border-white">
                                <img alt="Pixel art robot avatar face" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOehooJDN9Z2sWZ4aqL-TM2FKazpA9J_QbyYjci1m-dZyJ8JtzWTD-akFtgoxExp1paKxoQK-dWkdPNMEhjvAVphoMBFmIRi1jcWxLMnhTfz9Px5crtIfB-SiPmdkvmwyHhMfdMCA6UHJfSb6WXhlBLIoqmaQyPNRpw3q-GlaIk0kGHdfeUsao92A9iU6-lP7J9LaVgX5u_jT0uut2t5kyy0jSjhlLAlK4O4wqppk6iIGDCW4BcaiWq4dg7W94NT0d1QA8hqi1ztY7"/>
                            </div>
                            <div>
                                <span className="text-cyber-cyan text-xs font-bold uppercase block mb-1">Game Master AI</span>
                                <p className="text-white text-xs leading-snug">The 600vh dive is complete. Did you find the easter egg in the VR section?</p>
                            </div>
                        </div>
                        <input className="w-full bg-[#050505] border border-gray-700 rounded text-xs text-white p-2 focus:border-cyber-cyan focus:outline-none font-mono placeholder-gray-600" placeholder="Ask GM..." type="text"/>
                    </div>
                    <button className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black rounded-full border-2 border-cyber-cyan flex items-center justify-center shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-110 transition-transform duration-300 group">
                        <span className="material-icons text-cyber-cyan text-2xl group-hover:animate-spin">smart_toy</span>
                    </button>
                </div>
            </div>
    </div>
  );
};

export default CyberOdyssey;
