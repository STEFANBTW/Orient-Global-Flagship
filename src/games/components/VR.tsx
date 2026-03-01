import React from 'react';
import { motion } from 'framer-motion';

const VR: React.FC = () => {
  return (
    <div className="min-h-screen bg-void-black overflow-x-hidden">
      
      {/* Game 1: Rhythm Action */}
      <section className="relative h-screen w-full flex items-center border-b border-primary/20 group">
         <div className="absolute inset-0 z-0">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo53PigyESN8SP1zrX90WU596t61CI6vbhEz6TFdTGbDD2r77350avs0BcE3NUAUT0H3ON3bWwLpB0LEcKkaIYMPg85Yam5Y6lHzXoDF8iARmDyOrWrWgjdgtjv3p9W7Q6r6P0MZHv87FbJnCzXl4AKCVOPu7DC8uw1jgVliRCO4RvgNdVAX-NW8u6uZXPRjQf5QjEX-CNdKl0PUgg2AUIa13oUg8yEKKIjj1jmt-h2USyu3PqKczUbPthgC1pCogWMfR9OJat33m-" alt="Background" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-void-black via-void-black/90 to-transparent"></div>
         </div>
         
         <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
             >
                 <div className="flex items-center gap-4 mb-6">
                     <span className="text-primary text-sm font-bold tracking-widest uppercase">Rhythm Action</span>
                     <div className="h-[1px] w-12 bg-primary"></div>
                 </div>
                 <h2 className="text-6xl md:text-8xl font-display font-bold text-white uppercase leading-none mb-6">
                     LAGOS<br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">SABER</span>
                 </h2>
                 <p className="text-gray-400 max-w-md mb-8">
                     Slice through the beats in a futuristic world. Experience the adrenaline of music manifesting as physical objects.
                 </p>
                 <div className="flex gap-4">
                     <StatBox label="Intensity" value="HIGH" color="bg-primary" />
                     <StatBox label="Comfort" value="STABLE" color="bg-green-500" />
                 </div>
                 <button className="mt-8 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-black font-bold tracking-widest uppercase transition-all">
                     Launch Simulation
                 </button>
             </motion.div>

             <motion.div 
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-xl overflow-hidden border border-white/20 shadow-[0_0_30px_rgba(0,240,255,0.1)]"
             >
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoCjiYS6IdAhEPA7bgRgiHJbFEuY5O34utIcdITPs5OGgnVyV0-TH4ro3s6dZnVCi6GuIcIu8Nm_-AhE3GfZe2pRPzXFJWLefjJ4_54qvYt8atlI4hrpHppfapltnxi7LxT1Nl-wuML43S_4NcAuS7l4kzV2m6aE7G8PrElOoYn8BRlpsXSbakncw7aH1AraXSd8oRoh8LMUJfQKwgAJxMM7rSXpjbjYlKy1-T8nHVamOCLZSqdX0ti4DvfRM9TycDtbDwnlhGvYRM" className="w-full h-full object-cover" alt="Gameplay" />
                 <div className="absolute bottom-4 left-4 flex gap-2">
                     <span className="px-2 py-1 bg-[#050505]/80 text-primary text-[10px] font-mono border border-primary/30 rounded">REC ●</span>
                 </div>
             </motion.div>
         </div>
      </section>

      {/* Game 2: Horror */}
      <section className="relative h-screen w-full flex items-center bg-[#1a0500] overflow-hidden">
         <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1 relative aspect-video rounded-xl overflow-hidden border border-red-900 shadow-2xl">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo6SbAy_quBrJUcl6xaDeIEHSeW8Bz_YyxbqixFrL7BM0LP18qmGr19HnAO5iulAlwRCCvmQn-L2SHTk7yeLC0orayoyc_ol1lGNU4S59Ipmh-feBd29Wk9GsrEY4lpMbxe_UnCga8bvpw7C-ks_8yMYeXXpSX3AaQ2HkV8wT4KfckIiDrSGLIJ9UoCOT476xuHhwew0D7FxCpkJOM2uldah2K9qg2T9U09iAwljsoOJoGw_CM5HRa3hnd4svTLhzR4XwKd1XriHp1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Horror" />
                 <div className="absolute top-4 right-4 animate-pulse text-red-500 font-mono text-xs border border-red-500 bg-[#050505]/50 px-2 py-1">WARNING: GRAPHIC</div>
             </div>
             
             <div className="order-1 lg:order-2 text-right">
                 <div className="flex items-center justify-end gap-4 mb-6">
                     <div className="h-[1px] w-12 bg-red-500"></div>
                     <span className="text-red-500 text-sm font-bold tracking-widest uppercase">Survival Horror</span>
                 </div>
                 <h2 className="text-6xl md:text-8xl font-display font-bold text-white uppercase leading-none mb-6">
                     SAHARA<br/>
                     <span className="text-red-600">HEAT</span>
                 </h2>
                 <p className="text-gray-400 max-w-md ml-auto mb-8">
                     Survive the apocalypse under the scorching sun. Every bullet counts. Immersive haptic feedback makes every shot feel real.
                 </p>
                  <div className="flex gap-4 justify-end">
                     <StatBox label="Fear Factor" value="EXTREME" color="bg-red-600" />
                 </div>
                 <button className="mt-8 px-8 py-4 bg-red-900/20 text-red-500 hover:bg-red-600 hover:text-white border border-red-600 font-bold tracking-widest uppercase transition-all">
                     Enter War Zone
                 </button>
             </div>
         </div>
      </section>

    </div>
  );
};

const StatBox = ({ label, value, color }: any) => (
    <div className="bg-white/5 border border-white/10 p-3 rounded w-32">
        <div className="text-[10px] text-gray-400 uppercase mb-1">{label}</div>
        <div className="h-1 w-full bg-gray-700 rounded-full mb-1">
            <div className={`h-full ${color} w-[80%]`}></div>
        </div>
        <div className="font-bold text-white">{value}</div>
    </div>
);

export default VR;
