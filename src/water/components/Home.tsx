import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Product } from '../types';

const steps = [
  { id: '01', title: 'Sediment', desc: 'Removes large particles.', icon: 'filter_alt', note: '5-micron polypropylene filter catches rust, dust, and sand.' },
  { id: '02', title: 'Carbon', desc: 'Absorbs chlorine & odors.', icon: 'grain', note: 'Activated carbon block removes volatile organic compounds.' },
  { id: '03', title: 'RO', desc: 'Reverse Osmosis Core.', icon: 'blur_on', note: '0.0001 micron membrane rejects heavy metals and salts.' },
  { id: '04', title: 'UV Ray', desc: 'Biological sterilization.', icon: 'light_mode', note: '254nm UV light deactivates 99.9% of bacteria and viruses.' },
  { id: '05', title: 'Mineral', desc: 'Re-mineralization.', icon: 'science', note: 'Addition of Calcium and Magnesium for pH balance.' },
  { id: '06', title: 'Polish', desc: 'Taste enhancement.', icon: 'diamond', note: 'Final coconut shell carbon stage for crisp taste.' },
  { id: '07', title: 'Bottling', desc: 'Sealed for purity.', icon: 'inventory_2', note: 'ISO 9001 certified sterile bottling environment.' },
];

const products: Product[] = [
  { id: '1', name: '75cl Premium', description: 'Water Bottle', price: 150, image: 'https://images.unsplash.com/photo-1602143407151-01114195bc03?auto=format&fit=crop&w=400&q=80', volume: '75cl' },
  { id: '2', name: '50cl On-the-Go', description: 'Bottle', price: 100, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=400&q=80', volume: '50cl' },
  { id: '3', name: '19L Dispenser', description: 'Refill', price: 1200, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=400&q=80', volume: '19L' },
  { id: '4', name: 'Sachet Pack', description: '(20pcs)', price: 300, image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&w=400&q=80', volume: '20pcs' },
  { id: '5', name: '75cl Case', description: '12-Pack Case', price: 1800, image: 'https://images.unsplash.com/photo-1534068590799-09895a701e3e?auto=format&fit=crop&w=400&q=80', volume: '12x75cl' },
  { id: '6', name: '50cl Case', description: '24-Pack Case', price: 2400, image: 'https://images.unsplash.com/photo-1589365278144-96e36761d411?auto=format&fit=crop&w=400&q=80', volume: '24x50cl' },
];

const Home: React.FC = () => {
  const [guests, setGuests] = useState(50);
  const [hours, setHours] = useState(4);
  const [subscriptionType, setSubscriptionType] = useState<'weekly'|'monthly'>('weekly');
  const location = useLocation();

  const recommendedLiters = Math.round(guests * hours * 0.5);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="w-full">
      <style>{`
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave-slow {
          animation: waveMove 25s linear infinite;
        }
        .animate-wave-medium {
          animation: waveMove 18s linear infinite;
        }
        .animate-wave-fast {
          animation: waveMove 12s linear infinite;
        }
        
        @keyframes floatBubble {
          0% { transform: translateY(100vh) scale(0); opacity: 0; }
          30% { opacity: 0.6; }
          100% { transform: translateY(-20vh) scale(1.5); opacity: 0; }
        }
        .bubble {
          position: absolute;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          animation: floatBubble 10s linear infinite;
          bottom: -20px;
        }
        .dark .bubble {
          background: rgba(166, 243, 252, 0.15);
        }
        
        @keyframes rayRotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        .light-ray {
          animation: rayRotate 120s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-100 via-blue-200 to-primary/30 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 transition-colors duration-500">
        
        {/* Caustics / Light Rays */}
        <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-10 pointer-events-none">
           <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0deg,white_15deg,transparent_30deg,white_45deg,transparent_60deg)] light-ray blur-3xl"></div>
        </div>

        {/* Bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className={`bubble ${i % 3 === 0 ? 'w-2 h-2' : i % 3 === 1 ? 'w-4 h-4' : 'w-8 h-8'}`} 
              style={{ 
                left: `${Math.random() * 100}%`, 
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 12}s`
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center justify-center px-6 py-2 mb-8 border border-secondary/10 dark:border-primary/20 rounded-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-sm animate-slide-up opacity-0">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-primary mr-3 animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-secondary dark:text-primary">Medical Grade Purification</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-slate-900 dark:text-white mb-8 leading-tight drop-shadow-sm">
            <span className="block animate-slide-up opacity-0 delay-100">PURITY IN</span>
            <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-secondary to-blue-500 dark:from-primary dark:via-blue-300 dark:to-primary animate-slide-up opacity-0 delay-200">EVERY DROP.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed animate-slide-up opacity-0 delay-300">
            Experience water refined through <span className="font-semibold text-blue-700 dark:text-primary">seven stages</span> of molecular purification. 
            Traceable quality, delivered to your door.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up opacity-0 delay-500">
            <button 
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 bg-secondary text-white rounded-xl font-bold text-lg hover:bg-secondary/90 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg shadow-blue-200 dark:shadow-none"
            >
              Shop Collection
            </button>
            <Link to="/process" className="group flex items-center gap-3 px-10 py-5 bg-white/40 dark:bg-slate-800/40 backdrop-blur text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold text-lg hover:border-primary hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-lg">
              <span className="material-icons text-blue-500 dark:text-primary group-hover:rotate-180 transition-transform duration-500">science</span>
              Explore The Process
            </Link>
          </div>
        </div>

        {/* Refined Seamless Waves */}
        <div className="absolute bottom-0 left-0 w-full h-48 md:h-64 z-10 overflow-hidden pointer-events-none">
          {/* Layer 1 (Back) */}
          <div className="absolute bottom-[-2px] left-0 w-[400%] h-3/4 animate-wave-slow opacity-20 text-blue-400 dark:text-blue-900 fill-current">
            <svg viewBox="0 0 1000 100" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 50 C 150 20, 350 80, 500 50 C 650 20, 850 80, 1000 50 V 100 H 0 Z" />
            </svg>
          </div>
          
          {/* Layer 2 (Middle) */}
          <div className="absolute bottom-[-2px] left-0 w-[400%] h-2/3 animate-wave-medium opacity-40 text-blue-300 dark:text-blue-800 fill-current">
            <svg viewBox="0 0 1000 100" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 60 C 200 30, 300 90, 500 60 C 700 30, 800 90, 1000 60 V 100 H 0 Z" />
            </svg>
          </div>

          {/* Layer 3 (Front - Transitioning to next section color) */}
          <div className="absolute bottom-[-1px] left-0 w-[400%] h-1/2 animate-wave-fast text-white dark:text-slate-900 fill-current">
            <svg viewBox="0 0 1000 100" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0 70 C 250 40, 250 100, 500 70 C 750 40, 750 100, 1000 70 V 100 H 0 Z" />
            </svg>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <span className="material-icons text-slate-500 dark:text-slate-400 text-3xl opacity-40">keyboard_arrow_down</span>
        </div>
      </header>

      {/* 7 Steps Section */}
      <section className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">7 Steps to Purity</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg">Our proprietary filtration process removes 99.99% of impurities while retaining essential minerals for health and taste.</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-14 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent -translate-y-1/2 hidden md:block"></div>
            <div className="overflow-x-auto scrollbar-hide pb-16 pt-8 -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex md:grid md:grid-cols-7 gap-10 min-w-max md:min-w-0">
                {steps.map((step, idx) => (
                  <div key={step.id} className="relative group w-48 md:w-auto flex flex-col items-center">
                    <div className="w-16 h-16 bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 group-hover:border-primary rounded-full flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(166,243,252,0.6)] cursor-pointer shadow-sm">
                      <span className="material-icons text-slate-300 dark:text-slate-600 group-hover:text-primary text-2xl transition-colors duration-300">{step.icon}</span>
                    </div>
                    <div className="text-center mt-8 transition-transform duration-300 group-hover:-translate-y-2">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2 group-hover:text-secondary dark:group-hover:text-primary">{step.id}. {step.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed px-2">{step.desc}</p>
                    </div>
                    <div className="absolute top-16 left-1/2 w-0.5 h-8 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mini Catalog Teaser */}
      <section className="py-32 bg-background-light dark:bg-slate-950 relative transition-colors duration-500">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white dark:bg-slate-900 skew-x-12 opacity-50 pointer-events-none transition-colors duration-500"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Hydration Essentials</h2>
               <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    {name: "500ml Personal", price: "₦200", desc: "The daily essential.", img: "https://images.unsplash.com/photo-1559839914-17a5e963972a?auto=format&fit=crop&w=400&q=80"},
                    {name: "5 Gallon Home", price: "₦1,500", desc: "Family sized purity.", img: "https://images.unsplash.com/photo-1616124619847-7034b0d0c354?auto=format&fit=crop&w=400&q=80"},
                    {name: "Sparkling Glass", price: "₦500", desc: "Fine carbonation.", img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80"},
                ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-transparent hover:border-primary/20">
                        <div className="h-64 bg-gray-50 dark:bg-slate-700 rounded-xl mb-6 overflow-hidden relative">
                            <img src={item.img} className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt={item.name} />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <h3 className="font-bold text-xl text-slate-900 dark:text-white">{item.name}</h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{item.desc}</p>
                        <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-700 pt-4">
                            <span className="font-mono text-xl text-secondary dark:text-primary font-bold">{item.price}</span>
                            <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-primary text-slate-600 dark:text-slate-300 hover:text-secondary flex items-center justify-center transition-all duration-300 hover:rotate-90">
                                <span className="material-icons">add</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center">
                <button 
                  onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-secondary dark:text-primary font-bold text-lg hover:text-primary-dark dark:hover:text-white inline-flex items-center gap-2 group transition-all"
                >
                    Shop Full Catalog <span className="material-icons group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </button>
            </div>
        </div>
      </section>

      {/* Batch Verification Teaser */}
      <section className="py-32 bg-white dark:bg-slate-900 relative overflow-hidden group transition-colors duration-500">
        <div className="absolute inset-0 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-in-out z-0"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center transition-colors duration-500 group-hover:text-white">
            <span className="material-icons text-7xl text-primary/50 mb-6 group-hover:text-primary group-hover:animate-float">verified_user</span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-white transition-colors">Transparency Engine</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-12 text-xl group-hover:text-blue-100 transition-colors">Every bottle has a story. Enter your batch code to see the lab results.</p>
            
            <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-2 border border-slate-100 dark:border-slate-700 max-w-2xl mx-auto transform group-hover:scale-105 transition-transform duration-500">
                <div className="flex-grow w-full md:w-auto flex items-center px-4">
                    <span className="material-icons text-slate-400 mr-3">qr_code_scanner</span>
                    <input type="text" placeholder="Enter Batch ID (e.g., OW-2023-X)" className="w-full bg-transparent border-none focus:ring-0 text-slate-700 dark:text-slate-200 placeholder-slate-400 h-14 outline-none" />
                </div>
                <Link to="/process#verify" className="w-full md:w-auto bg-primary hover:bg-primary-dark text-secondary font-bold py-4 px-10 rounded-lg transition-colors flex items-center justify-center">
                    Verify
                </Link>
            </div>
        </div>
      </section>

      {/* CATALOG SECTION */}
      <section id="catalog" className="bg-background-light dark:bg-slate-950 py-32 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">Full Catalog & Subscriptions</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">Orient Water's professional division. Reliable hydration for home, office, and events.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-56 bg-slate-50 dark:bg-slate-700 rounded-xl mb-6 flex items-center justify-center overflow-hidden group">
                  <img src={product.image} alt={product.name} className="h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">{product.name}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-mono font-bold text-secondary dark:text-primary text-xl">₦{product.price}</span>
                  <button className="text-xs bg-slate-900 dark:bg-slate-700 text-white dark:text-white px-4 py-2.5 rounded-lg hover:bg-secondary dark:hover:bg-primary dark:hover:text-secondary transition-colors font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border-2 border-dashed border-primary flex flex-col items-center justify-center text-center cursor-pointer hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 group">
              <span className="material-icons text-5xl text-primary mb-4 group-hover:scale-110 transition-transform">assignment</span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">Custom Bulk Order</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Contact for Quote</p>
              <button className="mt-6 px-6 py-2 text-sm border border-slate-300 dark:border-slate-600 rounded-lg hover:border-slate-800 dark:hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300">Details</button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 p-10 rounded-3xl shadow-lg border border-blue-100 dark:border-slate-700 relative overflow-hidden transition-colors duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 relative z-10">Hydration Calculator</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-10 relative z-10">Ensure your team or guests stay perfectly hydrated.</p>
              
              <div className="space-y-8 relative z-10">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Number of Guests</label>
                  <input 
                    type="number" 
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
                    className="w-full p-4 bg-white dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Duration (Hours)</label>
                  <input 
                    type="number" 
                    value={hours}
                    onChange={(e) => setHours(parseInt(e.target.value) || 0)}
                    className="w-full p-4 bg-white dark:bg-slate-700 dark:text-white border border-slate-200 dark:border-slate-600 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                  />
                </div>
                
                <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition-all transform active:scale-95">
                  Get Recommendation
                </button>

                <div className="mt-8 p-6 bg-blue-600/5 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-900/50">
                  <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm mb-2 uppercase tracking-wider">Estimated Bundle</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-sm mb-4 leading-relaxed">We suggest <strong>{Math.ceil(recommendedLiters / 19)}x</strong> 19L Dispenser Refills and <strong>{Math.ceil(guests / 12)}x</strong> 50cl 12-Pack Cases.</p>
                  <div className="text-2xl font-bold text-blue-900 dark:text-blue-300">Total: ₦{((Math.ceil(recommendedLiters / 19) * 1200) + (Math.ceil(guests/12) * 1800)).toLocaleString()}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Subscription Plans</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Never run dry with our automated delivery service.</p>
                
                <div className="flex items-center justify-center gap-6 mt-8">
                  <span className={`text-base font-medium transition-colors ${subscriptionType === 'weekly' ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-400'}`}>Weekly</span>
                  <button 
                    onClick={() => setSubscriptionType(subscriptionType === 'weekly' ? 'monthly' : 'weekly')}
                    className="w-16 h-8 bg-slate-200 dark:bg-slate-700 rounded-full relative transition-colors focus:outline-none shadow-inner"
                  >
                    <div className={`absolute top-1 w-6 h-6 bg-white dark:bg-slate-300 rounded-full shadow-md transition-transform duration-300 ${subscriptionType === 'monthly' ? 'translate-x-9' : 'translate-x-1'}`}></div>
                  </button>
                  <span className={`text-base font-medium transition-colors ${subscriptionType === 'monthly' ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-400'}`}>Monthly</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-8 rounded-2xl border-2 transition-all duration-300 transform ${subscriptionType === 'weekly' ? 'border-blue-500 bg-blue-50 dark:bg-slate-800 scale-105 shadow-xl z-10' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 opacity-60 scale-95'}`}>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-xl">Pro Office</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">4 automated deliveries per month.</p>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-6">₦4,800 <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/ mo</span></div>
                  <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors shadow-lg shadow-blue-500/30">Select Weekly</button>
                </div>

                <div className={`p-8 rounded-2xl border-2 transition-all duration-300 transform ${subscriptionType === 'monthly' ? 'border-blue-500 bg-blue-50 dark:bg-slate-800 scale-105 shadow-xl z-10' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 opacity-60 scale-95'}`}>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-xl">Home Pure</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">1 automated delivery per month.</p>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-6">₦1,200 <span className="text-sm font-normal text-slate-500 dark:text-slate-400">/ mo</span></div>
                  <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors shadow-lg shadow-blue-500/30">Select Monthly</button>
                </div>
              </div>
              
              <div className="text-center mt-8">
                  <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium border-b border-blue-600 dark:border-blue-400 border-dotted">Manage Active Subscriptions</a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;