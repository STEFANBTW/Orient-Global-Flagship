import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../GamesWrapper';

interface Props {
    onNavigate: (page: Page) => void;
}

interface SelectionOption {
    id: string;
    type: 'CONSOLE' | 'GAME';
    name: string;
    sub: string;
    color: string;
    icon: string;
    specs: string[];
    img: string;
}

const options: SelectionOption[] = [
    // --- Consoles ---
    {
        id: 'ps5',
        type: 'CONSOLE',
        name: 'STATION_V',
        sub: 'Haptic Immersion',
        color: '#2f54eb', // Blue
        icon: 'gamepad',
        specs: ['4K @ 120Hz', 'Adaptive Triggers', '3D Audio'],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRSSgWjLl7l4vAdFdVSK9IIELfDnuRHJSKN97JVfz1i0-nwSMcrW_sJj_NGSulQ_DKewww6PBX-x4RH1kLOf7jXWhtL1p_6g3-FwPUjPiVUnNOGGQzvcWgNNjSLTh5q9mdSc9b2d0PjKhbUYT9iQR0xW4MtS1Pk-a5jJN6bMC_zfsZXyXu1YdzifShBwPwiN58k-qaF6vfuhyEpiWkS1bBTH_eLbCYyZfYyatnQizkAWDAClQinarlYe2qTShum57fNZ2CiFW0NbRo'
    },
    {
        id: 'xbox',
        type: 'CONSOLE',
        name: 'X_SERIES',
        sub: 'Velocity Arch',
        color: '#10b981', // Green
        icon: 'token',
        specs: ['Quick Resume', 'Dolby Vision', '12 TFLOPS'],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQO3haxzauLNwSEpt1bqCLFHeSJPKAdCdBjtpJtAj1IY494HnF1cF9UcL3o7KVemu3fme9OvO23-OUABIWDWLVUFUNLV63L84j1osxI-btkFt_sTbL75eWuJXj92HQXmMZn7ImOwlj3FIjDaeGASGTZQELWxMuf2zjxS2JdePQfCMVopqrTG7xGm7vKm2Pf-bu6elcD5hvS2in6_vqne055T0noEFTsMoZzfjb89WgrawLkXlIxyGlEatN-brN_2Xu_b2-iIfkMw-C'
    },
    {
        id: 'pc',
        type: 'CONSOLE',
        name: 'TITAN_PC',
        sub: 'Ultimate Power',
        color: '#f2690d', // Orange
        icon: 'computer',
        specs: ['RTX 4090 Ti', 'i9 Extreme', '64GB DDR5'],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBclQ8Im1ImDIEwPdTuKMespLQVxjvhT9YhpStwrlbtEA30iZXG21L1xwpzYiRv6E_zHU5l90Fm1aBDLPdylYh1qhW7vwT19Eu8NCBFTW5wRWDaIER6DP5zgkMIsZnQ61w4tWfJ6s8Idxfq8tSnnGPFNn6fP8bt55oiL3CKiiGSiX0dlbaeNRHwh6wvULzayKqOgTjY0cUmXj6cqVghnWO_5dqfXQp0QS_OlB3-aehJxghk3ZfmNPe1q1rJJhrwb3OWaWBcRdFF9Ys2'
    },
    {
        id: 'retro',
        type: 'CONSOLE',
        name: 'LEGACY_BOX',
        sub: 'Arcade Classics',
        color: '#d946ef', // Pink
        icon: 'videogame_asset',
        specs: ['CRT Filter', '3000+ Games', 'Sanwa Sticks'],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBLzp4VE-lcqy0kNGx0lXaxgnt72LHWtr72QGbeDr0TUVlAXAIMrVOFm7luq-PtDUntTG-1AXPZ8KmK9H1Knv6VZFqztDDM0pNvmBbn1a-rDoOdCqn__jd-aMKiYA3mnGowGdt5rHaq5Rt7f7H-XYDfLedcgr3WN3qioN5wIoHgWcdNCOhjt3v_UTFSqZMF9XQQ_EDlTSbYmAYUNd8gpDMiweQq8zOHGJN57f-KLDx5wq54Vww6Hc_-qNxPRLdh0_Y1VWQ-E9sC-PD'
    },
    // --- Games ---
    {
        id: 'mk1',
        type: 'GAME',
        name: 'MORTAL KOMBAT 1',
        sub: 'It\'s In Our Blood',
        color: '#dc2626', // Blood Red
        icon: 'sports_mma',
        specs: ['Kameo Fighters', '4K HDR', 'Local PvP'],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo6SbAy_quBrJUcl6xaDeIEHSeW8Bz_YyxbqixFrL7BM0LP18qmGr19HnAO5iulAlwRCCvmQn-L2SHTk7yeLC0orayoyc_ol1lGNU4S59Ipmh-feBd29Wk9GsrEY4lpMbxe_UnCga8bvpw7C-ks_8yMYeXXpSX3AaQ2HkV8wT4KfckIiDrSGLIJ9UoCOT476xuHhwew0D7FxCpkJOM2uldah2K9qg2T9U09iAwljsoOJoGw_CM5HRa3hnd4svTLhzR4XwKd1XriHp1'
    },
    {
        id: 'fc24',
        type: 'GAME',
        name: 'FC 24',
        sub: 'The World\'s Game',
        color: '#00ff88', // Toxic Green
        icon: 'sports_soccer',
        specs: ['HyperMotionV', 'Ultimate Team', 'Pro Clubs'],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCE4WCbuoUrl9ihyygcdwLIFaiB4J2no4e-n4rpfiQJPK_g5VLVldHkbEggusCRxWFS1md0TP8IX7wH3mgvKWyD6lM67qFKF5KqYIsYPnheBbkh6Ft0Ag3NP6roGGajtiTqUp3KkjnajhVv050uRAp25TKnkR0I7Y6BaFcyhc-6bzs-mFTOvmo5SVtR2kZ25m0cbPH7Sc7GbhY8R6ceAA7bzUykRKBirqKHzYu8mEYjczz2iDAMLrY3IgsDYfzQzRHJDkdMEEgX-IFA'
    },
    {
        id: 'spiderman',
        type: 'GAME',
        name: 'SPIDER-MAN 2',
        sub: 'Be Greater Together',
        color: '#ef4444', // Spider Red
        icon: 'explore',
        specs: ['Ray Tracing', 'Instant Travel', 'Haptic Web'],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoCjiYS6IdAhEPA7bgRgiHJbFEuY5O34utIcdITPs5OGgnVyV0-TH4ro3s6dZnVCi6GuIcIu8Nm_-AhE3GfZe2pRPzXFJWLefjJ4_54qvYt8atlI4hrpHppfapltnxi7LxT1Nl-wuML43S_4NcAuS7l4kzV2m6aE7G8PrElOoYn8BRlpsXSbakncw7aH1AraXSd8oRoh8LMUJfQKwgAJxMM7rSXpjbjYlKy1-T8nHVamOCLZSqdX0ti4DvfRM9TycDtbDwnlhGvYRM'
    },
    {
        id: 'gow',
        type: 'GAME',
        name: 'RAGNARÖK',
        sub: 'Myths of Midgard',
        color: '#3b82f6', // Ice Blue
        icon: 'landscape',
        specs: ['Fimbulwinter', 'No Cut Cam', 'Realm Travel'],
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHvLnGRGg2C4l9qWzAbuTRBXcIvzlsjgNtbDpF1KiDg-ggH5Z4xFxn6bDfsPlJWI1L3Ih1Hh1nn1zv3QBOTznrjBu96wBoXcjis6NbnIU4SJ9tdwkyBDkELGqlZi4SrvRhv6iJrAKwp8PzP6vaAUWah5A5XGG4VcUMQJFZWDD9xCuTq5-R7UVAcfCDqRuWTVbGuFK43uhHXgbJKnGTZxFfNR0BtXpRDlnsw8vQiNsmkPsKwzE_TZ7A88V1mKPUds8QO4qYdqJFNP-M'
    }
];

export const ConsoleSelection: React.FC<Props> = ({ onNavigate }) => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="bg-[#050505] text-white min-h-screen relative overflow-hidden font-display">
            {/* Background Animations */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(242,105,13,0.05),transparent_70%)]"></div>
            </div>

            {/* Standardized Navigation - REMOVED redundant local nav */}

            <div className="container mx-auto px-4 pt-24 pb-32 relative z-10 flex flex-col min-h-screen">
                {/* Header */}
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 border border-[#f2690d]/30 bg-[#f2690d]/10 px-4 py-1 rounded-full mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#f2690d] animate-pulse"></span>
                        <span className="text-[#f2690d] text-xs font-mono uppercase tracking-widest">System Online // Awaiting Input</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold font-tech uppercase tracking-tighter mb-2">Select Platform <span className="text-[#f2690d] text-2xl align-top">+</span> Game</h1>
                    <p className="text-gray-400 font-mono text-sm max-w-md mx-auto">Choose your interface or quick-launch a featured title. Performance parameters will adjust automatically.</p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {options.map((c, i) => (
                        <motion.div
                            key={c.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => setSelected(c.id)}
                            className={`group relative h-[400px] rounded-xl cursor-pointer transition-all duration-300 transform perspective-1000 ${selected === c.id ? 'scale-105 z-20 ring-2 ring-offset-2 ring-offset-black' : 'hover:scale-105 hover:z-10'}`}
                            style={{ 
                                borderColor: selected === c.id ? c.color : 'rgba(255,255,255,0.1)',
                                borderWidth: '1px',
                                boxShadow: selected === c.id ? `0 0 30px ${c.color}40` : 'none',
                                ['--ring-color' as any]: c.color
                            }}
                        >
                            {/* Card Background & Image */}
                            <div className="absolute inset-0 rounded-xl overflow-hidden bg-[#101010]">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 z-10"></div>
                                <img src={c.img} alt={c.name} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" />
                                
                                {/* Selected Overlay */}
                                {selected === c.id && (
                                    <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                                {/* Top Badge */}
                                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                                    <div className="bg-[#050505]/50 backdrop-blur border border-white/10 p-2 rounded flex items-center gap-2">
                                        <span className="material-icons text-white text-sm">{c.icon}</span>
                                        {c.type === 'GAME' && <span className="text-[10px] font-bold text-gray-300 uppercase">Featured</span>}
                                    </div>
                                    {selected === c.id && (
                                        <motion.div 
                                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                                            className="bg-[#f2690d] text-black text-[10px] font-bold px-2 py-1 rounded uppercase"
                                        >
                                            Selected
                                        </motion.div>
                                    )}
                                </div>

                                <h3 className="text-2xl font-tech font-bold text-white mb-1 group-hover:tracking-widest transition-all duration-300 leading-none">{c.name}</h3>
                                <p className="text-sm font-mono mb-4" style={{ color: c.color }}>{c.sub}</p>
                                
                                <div className="space-y-2 border-t border-white/10 pt-4">
                                    {c.specs.map((spec, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                                            <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                                            {spec}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Scanning Effect on Hover */}
                            <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/50 shadow-[0_0_10px_white] animate-[scanline_2s_linear_infinite]"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Action Bar */}
                <AnimatePresence>
                    {selected && (
                        <motion.div 
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            className="fixed bottom-0 left-0 w-full bg-[#101010] border-t border-white/10 p-6 z-50 backdrop-blur-lg"
                        >
                            <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded border border-white/20 flex items-center justify-center bg-[#050505]">
                                        <span className="material-icons animate-spin-slow" style={{ color: options.find(c => c.id === selected)?.color }}>settings</span>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 uppercase tracking-widest">Configuration Locked</div>
                                        <div className="text-xl font-bold text-white">READY TO INITIALIZE</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-8">
                                    <div className="hidden md:block text-right">
                                        <div className="text-xs text-gray-500 font-mono">EST. LOAD TIME</div>
                                        <div className="text-[#f2690d] font-bold">0.4 SEC</div>
                                    </div>
                                    <button 
                                        className="relative group overflow-hidden px-10 py-4 bg-[#f2690d] text-white font-tech font-bold text-lg uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)' }}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            Initialize Link <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};