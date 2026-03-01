import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Clock, Target, Shield, MapPin, Zap, Monitor, ShoppingBag, Star, Crown } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-surface-dark bg-aero-white relative pb-20 transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 dark:bg-grid-pattern bg-grid-pattern-light opacity-5 pointer-events-none"></div>

      {/* Hero Header */}
      <header className="relative w-full h-[50vh] min-h-[400px] flex items-end justify-center pb-12 overflow-hidden border-b dark:border-white/5 border-black/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHvLnGRGg2C4l9qWzAbuTRBXcIvzlsjgNtbDpF1KiDg-ggH5Z4xFxn6bDfsPlJWI1L3Ih1Hh1nn1zv3QBOTznrjBu96wBoXcjis6NbnIU4SJ9tdwkyBDkELGqlZi4SrvRhv6iJrAKwp8PzP6vaAUWah5A5XGG4VcUMQJFZWDD9xCuTq5-R7UVAcfCDqRuWTVbGuFK43uhHXgbJKnGTZxFfNR0BtXpRDlnsw8vQiNsmkPsKwzE_TZ7A88V1mKPUds8QO4qYdqJFNP-M" 
            alt="Setup" 
            className="w-full h-full object-cover opacity-40 dark:filter-none filter grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t dark:from-surface-dark from-aero-white via-aero-white/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 w-full max-w-6xl">
            <div className="flex flex-col md:flex-row items-end gap-8 mb-8">
                {/* Avatar with Enhanced Shadow/Backdrop */}
                <div className="relative group">
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary-blue/50 p-1 relative overflow-hidden bg-[#050505] shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl"
                    >
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4JUWwVLCwvkYyfjsjRK-Fbz3smiARVypYdwcSMugW2355J35oEf0_dXwe2nzXsF19FBxEkfs-IcZeTMjFMSV9YIq8oVsA4Uk-ajbbXCYakmKrPviykExS7d0VSgtxsup5jGAl4A1OQE6pMIFBK-dszp5pk5dlVJufI9s0CyFRpFXIxv5WhHnSQTH5Fn1DfjeI8u5vkYAFNaxmmp1ihxndFfSZFJhDID6HctgkXjsZgwZh9cxwMcO_M6zITLfAEbKnmN3hIy5Hu3IL" 
                            alt="Avatar" 
                            className="w-full h-full rounded-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                    </motion.div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 dark:bg-[#050505] bg-white border border-primary-blue text-primary-blue px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-lg">
                        Online
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 w-full pb-2">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-2">
                        <div>
                            <h2 className="text-primary-blue text-xs font-bold tracking-[0.2em] mb-1 uppercase">Orient Arena Member</h2>
                            <h1 className="text-4xl md:text-6xl font-display font-bold dark:text-white text-gray-900 mb-2 dark:drop-shadow-[0_0_10px_rgba(19,91,236,0.5)]">NEON_SAMURAI</h1>
                            <p className="text-gray-400 dark:text-gray-400 text-gray-600 text-sm flex items-center gap-2 font-mono">
                                <MapPin className="w-3 h-3 text-primary-blue" />
                                Tokyo Server
                                <span className="w-1 h-1 bg-gray-600 rounded-full mx-2"></span>
                                Rank: Diamond II
                            </p>
                        </div>
                        <div className="text-right hidden md:block">
                            <div className="text-6xl font-bold text-primary-blue opacity-10 select-none font-display">LVL 42</div>
                        </div>
                    </div>

                    {/* XP Bar */}
                    <div className="relative mt-6">
                        <div className="flex justify-between text-sm font-bold dark:text-gray-300 text-gray-600 mb-2 uppercase tracking-wide font-display">
                            <span>Level 42</span>
                            <span className="text-primary-blue">4,200 / 5,000 XP</span>
                        </div>
                        <div className="h-4 dark:bg-gray-800 bg-gray-300 rounded-full overflow-hidden border dark:border-white/10 border-black/5 relative">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: "84%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-primary-blue relative rounded-full dark:shadow-[0_0_10px_#135bec] shadow-sm"
                            >
                                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]"></div>
                            </motion.div>
                        </div>
                        <div className="mt-2 text-[10px] text-gray-500 font-mono text-right">Next Reward: Legendary Skin Box</div>
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 max-w-6xl mt-12 space-y-12">
        
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatBox label="Total Wins" value="1,248" />
            <StatBox label="Win Rate" value="68.4%" color="text-primary-blue" />
            <StatBox label="Time Played" value="482h" />
            <StatBox label="Global Rank" value="#4,092" />
        </div>

        {/* The Vault */}
        <section>
            <div className="flex items-center justify-between mb-6 border-b dark:border-white/10 border-black/10 pb-4">
                <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-primary-blue rounded-full"></div>
                    <h2 className="text-2xl font-display font-bold dark:text-white text-gray-900 tracking-wide">THE VAULT</h2>
                </div>
                <span className="text-xs text-gray-500 font-mono border dark:border-gray-700 border-gray-300 px-2 py-1 rounded">12/50 UNLOCKED</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <BadgeCard name="Flawless Victory" desc="Win without taking damage" icon={<Trophy size={24} />} rarity="RARE" />
                <BadgeCard name="Night Owl" desc="Play between 2AM - 5AM" icon={<Clock size={24} />} rarity="COMMON" />
                <BadgeCard name="Sniper Elite" desc="50 Headshots in one match" icon={<Target size={24} />} rarity="LEGENDARY" />
                <BadgeCard name="Marathon Runner" desc="Play for 6 hours continuously" icon={<Zap size={24} />} rarity="EPIC" />
            </div>
        </section>

        {/* Combat Log */}
        <section>
            <div className="flex items-center justify-between mb-6 border-b dark:border-white/10 border-black/10 pb-4">
                <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-primary-blue rounded-full"></div>
                    <h2 className="text-2xl font-display font-bold dark:text-white text-gray-900 tracking-wide">COMBAT LOG</h2>
                </div>
                <div className="flex gap-2">
                    <button className="text-[10px] bg-primary-blue text-white px-3 py-1 rounded font-bold uppercase">All</button>
                    <button className="text-[10px] dark:bg-white/5 bg-gray-200 dark:text-gray-400 text-gray-600 hover:text-black dark:hover:text-white px-3 py-1 rounded font-bold uppercase transition-colors">Ranked</button>
                </div>
            </div>

            <div className="dark:bg-panel-dark bg-white border dark:border-white/10 border-gray-200 rounded-xl overflow-hidden shadow-lg">
                {/* Table Header */}
                <div className="hidden md:grid grid-cols-6 gap-4 p-4 text-[10px] text-gray-500 font-bold uppercase tracking-wider border-b dark:border-white/5 border-gray-100 dark:bg-white/[0.02] bg-slate-50">
                    <div className="col-span-1">Status</div>
                    <div className="col-span-2">Game Title</div>
                    <div className="col-span-1">Date</div>
                    <div className="col-span-1">Duration</div>
                    <div className="col-span-1 text-right">XP Gained</div>
                </div>

                <MatchRow status="VICTORY" game="Apex Legends" date="Today, 14:30" duration="24m 12s" kda="4.2" xp="+1,250" color="text-green-500" />
                <MatchRow status="DEFEAT" game="League of Legends" date="Today, 12:15" duration="45m 02s" kda="1.8" xp="+120" color="text-red-500" />
                <MatchRow status="VICTORY" game="Valorant" date="Yesterday, 22:10" duration="38m 45s" kda="2.5" xp="+850" color="text-green-500" />
                <MatchRow status="DRAW" game="Overwatch 2" date="Yesterday, 20:00" duration="12m 30s" kda="3.0" xp="+400" color="text-gray-500" />
                <MatchRow status="VICTORY" game="Apex Legends" date="Yesterday, 18:45" duration="18m 22s" kda="5.1" xp="+1,100" color="text-green-500" />
                
                <div className="p-3 text-center border-t dark:border-white/5 border-gray-100">
                    <button className="text-xs text-primary-blue font-bold uppercase hover:dark:text-white hover:text-black transition-colors flex items-center justify-center gap-1 mx-auto">
                        View Full History <span>→</span>
                    </button>
                </div>
            </div>
        </section>

        {/* Loot Box Section */}
        <section>
             <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="w-1 h-8 bg-primary-blue rounded-full"></div>
                    <h2 className="text-2xl font-display font-bold dark:text-white text-gray-900 tracking-wide">THE LOOT BOX</h2>
                </div>
                <div className="dark:bg-white/5 bg-white shadow-md px-4 py-2 rounded border dark:border-primary-blue/30 border-gray-200 text-right">
                    <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Available Balance</span>
                    <span className="text-xl font-bold dark:text-white text-gray-900">14,250 XP</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <LootCard 
                    title="1 Hour Free Play" 
                    desc="Redeem for one hour of access to any standard PC station in the arena."
                    price="1,000"
                    tag="MOST POPULAR"
                    img="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
                />
                 <LootCard 
                    title="Energy Refuel" 
                    desc="Get any energy drink or snack from the Orient Supermarket kiosk."
                    price="500"
                    img="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800"
                />
                 <LootCard 
                    title="Reserved VIP Station" 
                    desc="Priority booking for the VIP room with RTX 4090 setup for 2 hours."
                    price="2,000"
                    tag="VIP"
                    tagColor="bg-purple-600"
                    img="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800"
                />
            </div>
        </section>
      </div>
    </div>
  );
};

const StatBox = ({ label, value, color = "dark:text-white text-gray-900" }: any) => (
    <div className="dark:bg-panel-dark bg-white border dark:border-white/10 border-gray-200 p-5 rounded-lg flex flex-col justify-center shadow-lg transition-colors">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">{label}</span>
        <span className={`text-2xl md:text-3xl font-display font-bold ${color}`}>{value}</span>
    </div>
);

const BadgeCard = ({ name, desc, icon, rarity }: any) => {
    let rarityColor = "text-gray-400 border-gray-500/30";
    if (rarity === "LEGENDARY") rarityColor = "text-yellow-500 border-yellow-500/50 bg-yellow-500/5";
    if (rarity === "EPIC") rarityColor = "text-purple-500 border-purple-500/50 bg-purple-500/5";
    if (rarity === "RARE") rarityColor = "text-blue-400 border-blue-400/50 bg-blue-400/5";

    return (
        <motion.div 
            whileHover={{ y: -5 }}
            className="dark:bg-panel-dark bg-white p-6 rounded-xl border dark:border-white/5 border-gray-200 flex flex-col items-center text-center hover:dark:bg-white/5 hover:bg-slate-50 transition-colors cursor-pointer group shadow-lg"
        >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 mb-4 ${rarityColor} group-hover:scale-110 transition-transform`}>
                {icon}
            </div>
            <div className="font-bold dark:text-white text-gray-900 mb-1">{name}</div>
            <div className="text-xs text-gray-500 mb-3">{desc}</div>
            <div className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded border ${rarityColor.replace('bg-', '')} bg-transparent`}>
                {rarity}
            </div>
        </motion.div>
    );
};

const MatchRow = ({ status, game, date, duration, kda, xp, color }: any) => (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-2 md:gap-4 p-4 border-b dark:border-white/5 border-gray-100 hover:dark:bg-white/5 hover:bg-slate-50 transition-colors items-center">
        <div className="col-span-1">
             <span className={`text-[10px] font-bold px-2 py-1 rounded bg-white/5 ${color} block w-fit border dark:border-transparent border-gray-200`}>
                 <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${color.replace('text-', 'bg-')}`}></span>
                 {status}
             </span>
        </div>
        <div className="col-span-2 flex items-center gap-2">
            <div className="w-6 h-6 dark:bg-white/10 bg-gray-200 rounded-full flex items-center justify-center">
                <Monitor size={12} className="text-gray-400"/>
            </div>
            <span className="dark:text-white text-gray-900 font-bold text-sm">{game}</span>
        </div>
        <div className="col-span-1 text-xs text-gray-400">{date}</div>
        <div className="col-span-1 text-xs text-gray-400 font-mono">{duration}</div>
        <div className="col-span-1 text-right">
             <div className="text-xs text-primary-blue font-bold">{xp} XP</div>
             <div className="text-[10px] text-gray-600 font-mono hidden md:block">{kda} KDA</div>
        </div>
    </div>
);

const LootCard = ({ title, desc, price, tag, tagColor = "bg-blue-600", img }: any) => (
    <div className="dark:bg-panel-dark bg-white border dark:border-white/10 border-gray-200 rounded-xl overflow-hidden group hover:border-primary-blue/50 transition-colors flex flex-col h-full shadow-lg">
        <div className="h-40 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t dark:from-panel-dark from-white to-transparent z-10"></div>
            <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            {tag && (
                <div className={`absolute top-3 left-3 z-20 ${tagColor} text-white text-[9px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-lg`}>
                    {tag}
                </div>
            )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-bold dark:text-white text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 text-xs mb-6 flex-1">{desc}</p>
            <div className="flex items-center justify-between mt-auto">
                <div className="text-primary-blue font-bold text-lg">{price} XP</div>
                <button className="px-4 py-2 border dark:border-white/20 border-gray-300 dark:text-white text-gray-700 hover:bg-primary-blue hover:border-primary-blue hover:text-white text-xs font-bold uppercase tracking-widest rounded transition-all">
                    Redeem
                </button>
            </div>
        </div>
    </div>
);

export default Profile;
