import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Page } from '../GamesWrapper';

interface Props {
    onNavigate: (page: Page) => void;
}

export const VRFrontier: React.FC<Props> = ({ onNavigate }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.5]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div ref={containerRef} className="bg-[#102222] text-white font-display min-h-screen relative overflow-x-hidden selection:bg-[#0df2f2] selection:text-[#102222] vr-scroll">
            
            {/* Standardized Navigation - REMOVED redundant local nav */}

            {/* Side Progress Rail */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 items-end pointer-events-none mix-blend-screen">
                <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-[#0df2f2]">SCROLL_Y</span>
                    <div className="w-1 h-32 bg-white/10 rounded-full relative overflow-hidden">
                        <motion.div style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }} className="w-full bg-[#0df2f2] absolute top-0 left-0" />
                    </div>
                </div>
            </div>

            {/* HERO: INFINITE TUNNEL */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 bg-[#000]">
                    {/* Layer 1: Moving Tunnel */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 3],
                            opacity: [0, 1, 0],
                            zIndex: [1, 2, 1]
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "linear",
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                         <img alt="Tunnel Layer 1" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBscarJZ8vB1Of9-zQhPVSAqk3Sv1UNp7i6keT9Hmbu3-tE2150EpaYFr791yfvLydXOItnb-UqdQ-W3FbL9IG0isqeXWQBtzrwPZRn7DUtBOcOjcL0Y9Um2AeAGcRFPJVA1Y0d4mRfFdPEq5bKvNN6QvmhW9zhnuqwlZytkx8pNPSKQA9PIYx3I92LRfYQyWYlzJ2R-XNNv_DMlWdkoSO17PGTxa1fo15QOPvf-tKf2A63u_o6p0cw42KHSIniEGk4-s0tVHhZKA0h"/>
                    </motion.div>

                    {/* Layer 2: Offset Moving Tunnel */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 3],
                            opacity: [0, 1, 0],
                            zIndex: [1, 2, 1]
                        }}
                        transition={{ 
                            duration: 4, 
                            repeat: Infinity, 
                            ease: "linear",
                            delay: 2
                        }}
                        className="absolute inset-0 w-full h-full"
                    >
                         <img alt="Tunnel Layer 2" className="w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBscarJZ8vB1Of9-zQhPVSAqk3Sv1UNp7i6keT9Hmbu3-tE2150EpaYFr791yfvLydXOItnb-UqdQ-W3FbL9IG0isqeXWQBtzrwPZRn7DUtBOcOjcL0Y9Um2AeAGcRFPJVA1Y0d4mRfFdPEq5bKvNN6QvmhW9zhnuqwlZytkx8pNPSKQA9PIYx3I92LRfYQyWYlzJ2R-XNNv_DMlWdkoSO17PGTxa1fo15QOPvf-tKf2A63u_o6p0cw42KHSIniEGk4-s0tVHhZKA0h"/>
                    </motion.div>

                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#102222_80%)] z-10"></div>
                </div>

                <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="relative z-20 text-center max-w-5xl px-4">
                    <motion.div 
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded border border-[#0df2f2]/30 bg-[#0df2f2]/10 backdrop-blur-sm"
                    >
                        <span className="material-icons text-[#0df2f2] text-sm animate-spin-slow">public</span>
                        <span className="text-[#0df2f2] text-xs tracking-[0.3em] font-bold">IMMERSIVE REALITY V.2.0</span>
                    </motion.div>
                    
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white mb-6 uppercase tracking-tighter leading-none mix-blend-overlay opacity-90 relative">
                        <span className="absolute -left-1 -top-1 text-[#ff00ff] opacity-40 animate-pulse">THE FRONTIER</span>
                        <span className="absolute -right-1 -bottom-1 text-[#0df2f2] opacity-40 animate-pulse">THE FRONTIER</span>
                        THE FRONTIER
                    </h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                    >
                        Step beyond the physical realm. Orient Games Arena invites you to the bleeding edge of virtual entertainment. 
                        <span className="text-[#0df2f2] animate-pulse"> Prepare for initialization.</span>
                    </motion.p>
                    
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="flex flex-col md:flex-row gap-6 justify-center items-center"
                    >
                        <button className="group relative px-12 py-5 bg-[#0df2f2] text-[#102222] font-black text-lg rounded-sm overflow-hidden skew-x-[-10deg] hover:skew-x-0 transition-transform duration-300">
                            <span className="relative z-10 group-hover:tracking-[0.2em] transition-all duration-300">ENTER PORTAL</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity"></div>
                        </button>
                    </motion.div>
                </motion.div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
                    <motion.div 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-[10px] text-[#0df2f2] tracking-[0.5em] uppercase"
                    >
                        Scroll to Dive
                    </motion.div>
                    <span className="material-icons text-[#0df2f2]/50 animate-bounce">keyboard_arrow_down</span>
                </div>
            </section>

            {/* Game 1: Rhythm Action */}
            <section id="games" className="relative min-h-screen w-full flex items-center border-t border-[#0df2f2]/20 overflow-hidden group">
                <div className="absolute inset-0 z-0">
                    <img alt="Background Neon" className="w-full h-full object-cover opacity-20 scale-105 group-hover:scale-110 transition-transform duration-[20s] ease-linear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo53PigyESN8SP1zrX90WU596t61CI6vbhEz6TFdTGbDD2r77350avs0BcE3NUAUT0H3ON3bWwLpB0LEcKkaIYMPg85Yam5Y6lHzXoDF8iARmDyOrWrWgjdgtjv3p9W7Q6r6P0MZHv87FbJnCzXl4AKCVOPu7DC8uw1jgVliRCO4RvgNdVAX-NW8u6uZXPRjQf5QjEX-CNdKl0PUgg2AUIa13oUg8yEKKIjj1jmt-h2USyu3PqKczUbPthgC1pCogWMfR9OJat33m-"/>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#102222] via-[#102222]/90 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-8xl font-bold text-[#0df2f2]/10 absolute -left-10 -top-20 select-none pointer-events-none font-tech">01</span>
                            <div className="h-[1px] w-12 bg-[#0df2f2]"></div>
                            <span className="text-[#0df2f2] tracking-widest text-sm font-bold uppercase">Rhythm Action</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white uppercase leading-tight font-tech">
                            Lagos <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0df2f2] to-white">Saber</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md font-mono">
                            Slice through the beats in a futuristic world. Experience the adrenaline of music manifesting as physical objects.
                        </p>
                        {/* HUD Stats */}
                        <div className="grid grid-cols-2 gap-4 max-w-md">
                            <div className="bg-white/5 border border-white/10 p-4 rounded backdrop-blur-sm hover:border-[#0df2f2]/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Intensity</span>
                                    <span className="material-icons text-[#0df2f2] text-sm">bolt</span>
                                </div>
                                <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="bg-[#0df2f2] h-full shadow-[0_0_10px_#0df2f2]"
                                    ></motion.div>
                                </div>
                                <span className="text-xl font-bold text-white mt-1 block">HIGH</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded backdrop-blur-sm hover:border-[#0df2f2]/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Comfort</span>
                                    <span className="material-icons text-green-400 text-sm">sentiment_satisfied</span>
                                </div>
                                <div className="text-xl font-bold text-white mt-1 block">STABLE</div>
                                <span className="text-[10px] text-gray-500">Minimal Motion Sickness</span>
                            </div>
                        </div>
                        <button className="mt-4 px-8 py-4 border border-[#0df2f2] text-[#0df2f2] hover:bg-[#0df2f2] hover:text-[#102222] transition-all rounded-sm uppercase text-sm font-bold tracking-widest hover:shadow-[0_0_20px_rgba(13,242,242,0.4)]">
                            Launch Simulation
                        </button>
                    </motion.div>
                    
                    {/* Game Visual */}
                    <motion.div 
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video rounded-xl overflow-hidden border border-white/20 shadow-2xl group-hover:shadow-[0_0_50px_rgba(13,242,242,0.2)] transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-[#0df2f2]/20 mix-blend-overlay z-10 pointer-events-none"></div>
                        <img alt="Saber Game" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoCjiYS6IdAhEPA7bgRgiHJbFEuY5O34utIcdITPs5OGgnVyV0-TH4ro3s6dZnVCi6GuIcIu8Nm_-AhE3GfZe2pRPzXFJWLefjJ4_54qvYt8atlI4hrpHppfapltnxi7LxT1Nl-wuML43S_4NcAuS7l4kzV2m6aE7G8PrElOoYn8BRlpsXSbakncw7aH1AraXSd8oRoh8LMUJfQKwgAJxMM7rSXpjbjYlKy1-T8nHVamOCLZSqdX0ti4DvfRM9TycDtbDwnlhGvYRM"/>
                        <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                            <span className="px-2 py-1 bg-[#050505]/80 text-[#0df2f2] text-[10px] font-mono border border-[#0df2f2]/30 rounded animate-pulse">REC ●</span>
                            <span className="px-2 py-1 bg-[#050505]/80 text-white text-[10px] font-mono border border-white/20 rounded">FOV: 110°</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Game 2: Zombie Survival */}
            <section className="relative min-h-screen w-full flex items-center border-t border-white/5 overflow-hidden group bg-[#102222]">
                <div className="absolute inset-0 z-0">
                    <img alt="Background Zombie" className="w-full h-full object-cover opacity-10 saturate-0 group-hover:saturate-50 transition-all duration-[5s]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxwwDmrdzG1cqxirrtfi1Lrw5HoEhqHOm6ypblXinrT76idkQ5Fr0-FWm9U0Noowx9YAVT9yaziTYYUV4v3Ykd6GJ6mY5khMySuhIu3Ph4tVXAVbBEZHdHWFMdXBRAaf6M-AnwLielS7fdXD0dlXxQdNSWRXV988C4zLf9XZjETttluInCxcSFe3g9-SI7fpHhiSSVxsd4D3tdqUsYQKDHjlUM4qcP423fMyCe_yAGZab8K2tNi515NeelGuSuB83FVxR4rgR2mM2v"/>
                    <div className="absolute inset-0 bg-gradient-to-l from-[#102222] via-[#102222]/90 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Left */}
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 relative aspect-square lg:aspect-video rounded-xl overflow-hidden border border-red-900/40 shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-4 z-20">
                            <span className="animate-pulse text-red-500 font-mono text-xs border border-red-500/50 px-2 py-1 rounded bg-[#050505]/50">WARNING: GRAPHIC CONTENT</span>
                        </div>
                        <img alt="Zombie Game" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo6SbAy_quBrJUcl6xaDeIEHSeW8Bz_YyxbqixFrL7BM0LP18qmGr19HnAO5iulAlwRCCvmQn-L2SHTk7yeLC0orayoyc_ol1lGNU4S59Ipmh-feBd29Wk9GsrEY4lpMbxe_UnCga8bvpw7C-ks_8yMYeXXpSX3AaQ2HkV8wT4KfckIiDrSGLIJ9UoCOT476xuHhwew0D7FxCpkJOM2uldah2K9qg2T9U09iAwljsoOJoGw_CM5HRa3hnd4svTLhzR4XwKd1XriHp1"/>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 space-y-8 text-right lg:text-left"
                    >
                        <div className="flex items-center justify-end lg:justify-start gap-4">
                            <span className="text-[#0df2f2] tracking-widest text-sm font-bold uppercase">Survival Horror</span>
                            <div className="h-[1px] w-12 bg-[#0df2f2]"></div>
                            <span className="text-8xl font-bold text-[#0df2f2]/10 absolute -right-4 lg:left-auto lg:right-10 -top-20 select-none pointer-events-none font-tech">02</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white uppercase leading-tight font-tech">
                            Sahara <br/><span className="text-transparent bg-clip-text bg-gradient-to-l from-red-500 to-orange-400">Heat</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-mono ml-auto lg:ml-0 max-w-md">
                            Survive the apocalypse under the scorching sun. Every bullet counts. Immersive haptic feedback makes every shot feel real.
                        </p>
                        {/* HUD Stats */}
                        <div className="grid grid-cols-2 gap-4 max-w-md ml-auto lg:ml-0">
                            <div className="bg-white/5 border border-white/10 p-4 rounded backdrop-blur-sm text-left hover:border-red-500/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Fear Factor</span>
                                    <span className="material-icons text-red-500 text-sm">priority_high</span>
                                </div>
                                <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "95%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="bg-red-500 h-full shadow-[0_0_10px_red]"
                                    ></motion.div>
                                </div>
                                <span className="text-xl font-bold text-white mt-1 block">EXTREME</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded backdrop-blur-sm text-left hover:border-red-500/50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Comfort</span>
                                    <span className="material-icons text-yellow-500 text-sm">warning</span>
                                </div>
                                <div className="text-xl font-bold text-white mt-1 block">MODERATE</div>
                                <span className="text-[10px] text-gray-500">Locomotion Movement</span>
                            </div>
                        </div>
                        <div className="flex justify-end lg:justify-start">
                            <button className="mt-4 px-8 py-4 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500 transition-all rounded-sm uppercase text-sm font-bold tracking-widest hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                                Enter War Zone
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Game 3: Tactical Time */}
            <section className="relative min-h-screen w-full flex items-center border-t border-[#0df2f2]/20 overflow-hidden bg-[#102222]">
                {/* Abstract background */}
                <div className="absolute inset-0 z-0 bg-white/5"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0df2f2]/5 to-transparent skew-x-12 transform origin-bottom"></div>
                
                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-8xl font-bold text-white/5 absolute -left-10 -top-20 select-none pointer-events-none font-tech">03</span>
                            <div className="h-[1px] w-12 bg-white"></div>
                            <span className="text-white tracking-widest text-sm font-bold uppercase">Tactical Puzzle</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white uppercase leading-tight tracking-tighter font-tech">
                            SUPER <br/><span className="text-[#0df2f2] italic">HOT</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md font-mono border-l-2 border-[#0df2f2] pl-4">
                            Time moves only when you move. Blur the lines between strategy and mayhem in this stylized shooter.
                        </p>
                        {/* HUD Stats */}
                        <div className="grid grid-cols-2 gap-4 max-w-md">
                            <div className="bg-white/5 border border-white/10 p-4 rounded backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Focus</span>
                                    <span className="material-icons text-white text-sm">visibility</span>
                                </div>
                                <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "60%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="bg-white h-full"
                                    ></motion.div>
                                </div>
                                <span className="text-xl font-bold text-white mt-1 block">TACTICAL</span>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-4 rounded backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">Comfort</span>
                                    <span className="material-icons text-green-400 text-sm">sentiment_satisfied_alt</span>
                                </div>
                                <div className="text-xl font-bold text-white mt-1 block">PERFECT</div>
                                <span className="text-[10px] text-gray-500">Stationary Experience</span>
                            </div>
                        </div>
                        <button className="mt-4 px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all rounded-sm uppercase text-sm font-bold tracking-widest hover:scale-105 transform">
                            Start System
                        </button>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, rotate: -5 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video rounded-xl overflow-hidden border-2 border-white bg-[#050505] group"
                    >
                        {/* Simulation of low poly art style */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 border-4 border-[#0df2f2] rotate-45 animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute w-32 h-32 border border-white/30 rotate-12"></div>
                        </div>
                        <img alt="Superhot Game" className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60 grayscale contrast-150 group-hover:opacity-100 transition-opacity duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQO3haxzauLNwSEpt1bqCLFHeSJPKAdCdBjtpJtAj1IY494HnF1cF9UcL3o7KVemu3fme9OvO23-OUABIWDWLVUFUNLV63L84j1osxI-btkFt_sTbL75eWuJXj92HQXmMZn7ImOwlj3FIjDaeGASGTZQELWxMuf2zjxS2JdePQfCMVopqrTG7xGm7vKm2Pf-bu6elcD5hvS2in6_vqne055T0noEFTsMoZzfjb89WgrawLkXlIxyGlEatN-brN_2Xu_b2-iIfkMw-C"/>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <h3 className="text-9xl font-black text-transparent opacity-20 bg-clip-text bg-gradient-to-b from-white to-transparent transform -rotate-12 group-hover:scale-110 transition-transform duration-700">TIME</h3>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hardware Section */}
            <section id="hardware" className="relative py-32 w-full bg-[#0a1616] border-t border-[#0df2f2]/30">
                <div className="absolute inset-0 tech-grid bg-[#0df2f2]/5 w-full h-full opacity-20 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                         initial={{ y: 30, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         transition={{ duration: 0.6 }}
                         className="text-center mb-16"
                    >
                        <span className="text-[#0df2f2] tracking-[0.5em] text-xs font-bold uppercase mb-2 block">Specifications</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white uppercase font-tech">Hardware Architecture</h2>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Left Specs */}
                        <div className="lg:col-span-3 space-y-12">
                            {['Dual 4K Panels', '120Hz Refresh'].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ x: -30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="group text-right"
                                >
                                    <h4 className="text-[#0df2f2] font-bold text-xl mb-2 group-hover:translate-x-[-10px] transition-transform">{item}</h4>
                                    <p className="text-gray-400 text-sm font-mono">{i === 0 ? '2160x2160 per eye resolution delivering crystal clear visuals.' : 'Ultra-fluid motion processing for the most responsive gameplay.'}</p>
                                    <div className="w-full h-[1px] bg-gradient-to-l from-[#0df2f2] to-transparent mt-4 opacity-30"></div>
                                </motion.div>
                            ))}
                        </div>
                        {/* Center Image */}
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-6 relative flex justify-center items-center py-10"
                        >
                            <div className="absolute w-64 h-64 bg-[#0df2f2]/20 rounded-full blur-[100px] animate-pulse"></div>
                            <img alt="VR Headset" className="relative z-10 w-full max-w-md drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ27q6uD1KvHZYG9Lyy-dmVCntdyUC8JvklwuJ7NMOv8v0DvRkInIulr_W0IdX2L4E-dEGD6Gkg7MGa71npDExoKMEe-Nkxq9pB1f9OI4_y0SwVIDzue_bxi-cC4Ffz2oFV3_NEy4NrzwnqtNHTjfqcDcGrsm-RLARQ7gFSP6ByHgrITUhBO1e643G3ERoGdc4rBOybMmIMI4eKqPez9-ZQiXvBrhfiKAR86lenVMLFQfKhFWkXPHA0G5pXlEjhMzVRWLjcKClsLOB"/>
                        </motion.div>
                        {/* Right Specs */}
                        <div className="lg:col-span-3 space-y-12">
                            {['3D Spatial Audio', '6DOF Tracking'].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ x: 30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="group text-left"
                                >
                                    <h4 className="text-[#0df2f2] font-bold text-xl mb-2 group-hover:translate-x-[10px] transition-transform">{item}</h4>
                                    <p className="text-gray-400 text-sm font-mono">{i === 0 ? 'Off-ear immersive speakers providing directional soundscapes.' : 'Inside-out tracking with 4 cameras captures every movement.'}</p>
                                    <div className="w-full h-[1px] bg-gradient-to-r from-[#0df2f2] to-transparent mt-4 opacity-30"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety Section */}
            <section id="safety" className="relative py-20 bg-[#102222] border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="text-[#0df2f2]/70 font-mono text-sm mb-2 block">// PROTOCOLS</span>
                            <h2 className="text-4xl font-bold text-white uppercase tracking-tight">Arena Safety <br/>Guidelines</h2>
                        </div>
                        <div className="bg-[#0df2f2]/5 px-6 py-4 border border-[#0df2f2]/20 rounded-lg max-w-sm">
                            <p className="text-xs text-[#0df2f2] font-mono leading-relaxed">
                                NOTICE: Failure to comply with safety protocols may result in immediate termination of simulation session.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { i: 'straighten', t: 'Play Area', d: 'Remain within the glowing boundary grid.' },
                            { i: 'sanitizer', t: 'Hygiene', d: 'All headsets are UV-sanitized.' },
                            { i: 'warning', t: 'Physical Limits', d: 'Take breaks if you feel dizzy.' },
                            { i: '12mp', t: 'Age Restriction', d: 'Participants must be 12+ years old.' }
                        ].map((card, i) => (
                            <motion.div 
                                key={i}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0df2f2]/50 p-8 rounded-xl transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-icons text-9xl text-[#0df2f2]">{card.i}</span>
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-[#0df2f2]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-icons text-[#0df2f2]">{card.i}</span>
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{card.t}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{card.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
