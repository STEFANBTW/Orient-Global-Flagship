import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { MOCK_PRODUCTS } from '../data/mockDb';
import { Product } from '../types';

interface HomeProps {
  onNavigate: (page: any) => void;
  onOpenSmartPaste?: () => void;
}

const HERO_SLIDES = [
  {
    id: 1,
    tag: "SEASONAL",
    title: "Freshness\nRedefined.",
    desc: "Get the season's best produce delivered straight to your door. Back to School bundles now 20% off.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy-0oAZwao1WLSGC1VOrJQiwBj2NdVwZwk_gKQ4h0qNkUtaiLlYvlLil9HpoiZwlVYxQvQrPfv5-1T2QzdZGzCd7Cm6lM5g1Al6rY0AywjjIOSDxWuYyz-0ndrekG7hbkthiLq7vtP45MM7_Qruw26H5NiebjBTsMEKsemr6RsI3u64DiGKTEGl9IVvhrKExsG72Nbg-CafUrhMa7UY_DkkNwZktYjKJNlc-oezyiZxRkYH6WCgyRSTLMC4iFrZ50KgVI0RF5ZAwgm",
    bg: "from-black/70 to-transparent",
    btn: "Shop Bundles",
    navTarget: 'Deals'
  },
  {
    id: 2,
    tag: "WHOLESALE",
    title: "Bulk Savings\nBig Profits.",
    desc: "Exclusive wholesale pricing for registered partners. Stock up on rice, grains, and pantry staples.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6UWHxlzXZ1fZ6YGBbT37L0xAuHSyG5BhZ9bwse3VDii426hr7S1c-HfyAe8e3yQ8NcDRTOXKRjo2Ufc3wc29_OSrYxO_MyJnBz_QS_HpxZUhr0N7aVtOYPSu8UR1hbVvS8J0cHecXDYljfh3DPNefV4iskMSlS7IXlsjbtCi2JYOlqt8iy0T-eLiVLfpWjmZHuJEmLkOm-Yw_J_jXwPk_uDmK3oH1SNX-lFqxu5AS_FVr7ddDLdjxkcHQ-qQDtQQknzrvfpaDEBi0",
    bg: "from-blue-900/80 to-transparent",
    btn: "Go to Portal",
    navTarget: 'Wholesale'
  },
  {
    id: 3,
    tag: "BAKERY",
    title: "Oven Fresh\nDaily.",
    desc: "Our artisan breads and pastries are baked fresh every morning. Smell the difference.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnmhadoCVKHfYOfzPDp4J-6pCxjbZzTpGP75Vr_EksxMx5s-niabV7JQ0xEJAGhT6JS3uI5vilRbeFyK2EZzgvV2tCNaDGuY3AUvcd-1qmWdnf_UTBwWXlavafUaKatDnX2FVp60K_6UujA-_6AQVuHME2tSYnvfAGbqOh-74zdGtg6ddQmlBGHxLRQwJBGzO3cc0woi5qtRnAAH41xL31J5tx7UGTq9Adz2r-cl9V4BEIC4ZxsSZ_kPlJiju2gk4htfJnj3ppuzqM",
    bg: "from-yellow-900/70 to-transparent",
    btn: "View Bakery",
    navTarget: 'Bakery'
  },
  {
    id: 4,
    tag: "DRINKS",
    title: "Quench Your\nThirst.",
    desc: "From sparkling water to premium wines. Refreshment delivered in minutes.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6yO9YpD7WzXoPz8rWqU2tV9sQ4xR3yM6nO1lA2bC5dE8fG9hI0jK3mL4nP5oQ6rS7tU8vW9xY0zB1cD2eF3gH4iJ5kL6mN7oP8qR9sT0uV1wW2xY3zA4bC5dE6fG7hI8jK9lM0nO1pQ2r",
    bg: "from-purple-900/70 to-transparent",
    btn: "Shop Drinks",
    navTarget: 'Aisles'
  }
];

const DEAL_PRODUCT: Product = {
    id: 'deal-coffee',
    name: 'Premium Arabica Coffee Beans (1kg)',
    price: 12990,
    category: 'Beverages',
    context: 'RETAIL',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1wZpJFJka3FlypGKUsr0BoyDreoSK1yO0HNItuIXwL45jTS5sMWtJDX0xA05wzVKWEcdMe1SOjWb69PBje0fItEcORGH36VHdOesDWcLXtQBkh8La1nnsZScU27G8OcoTKxo7cd4zC8zzD1znfAXSzlVSQq57xNupl-rWunYkpDK1Y_BCzhN_AD2ML0NXdxUY6-hQUG9tyuCXWZ-Q-S4_Aqh-WhDlYgbDQE7EKXAWmmlxMZcK9DNUkIa8eQkEjH15ny70tqJDUwlo'
};

const Home: React.FC<HomeProps> = ({ onNavigate, onOpenSmartPaste }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(200000);
  const [sortOption, setSortOption] = useState('relevance');
  
  // States for interactive elements
  const [isMicListening, setIsMicListening] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{sender: 'user' | 'bot', text: string}[]>([
      {sender: 'bot', text: "Hi! I noticed you're buying pasta. Need tomato sauce?"}
  ]);

  const { addToCart, cart, updateQuantity } = useCart();
  
  const allCategories = Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)));

  // Slider Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    }).sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      return 0; 
    });
  }, [searchTerm, selectedCategories, maxPrice, sortOption]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  const getProductQtyInCart = (productId: string) => {
    const item = cart.items.find(i => i.id === productId && i.context === 'RETAIL');
    return item ? item.quantity : 0;
  };
  
  const getCartItem = (productId: string) => {
    return cart.items.find(i => i.id === productId && i.context === 'RETAIL');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories([]);
    setMaxPrice(200000);
    setSortOption('relevance');
  };

  const handleMicClick = () => {
    if (isMicListening) {
        setIsMicListening(false);
    } else {
        setIsMicListening(true);
        // Simulate speech recognition
        setTimeout(() => {
            setSearchTerm("Organic Apples");
            setIsMicListening(false);
        }, 2000);
    }
  };

  const handleSendChat = (e: React.FormEvent) => {
      e.preventDefault();
      if (!chatMessage.trim()) return;
      
      const newHistory = [...chatHistory, {sender: 'user' as const, text: chatMessage}];
      setChatHistory(newHistory);
      setChatMessage('');
      
      // Simulate bot response
      setTimeout(() => {
          setChatHistory(prev => [...prev, {sender: 'bot', text: "I can help you find that. Check aisle 4 or click below to add it to your cart."}]);
      }, 1000);
  };

  const isFiltering = searchTerm !== '' || selectedCategories.length > 0 || maxPrice < 200000;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.05 } }
  };

  const dealQty = getProductQtyInCart(DEAL_PRODUCT.id);

  return (
    <div className="font-sans text-gray-900 dark:text-gray-100 bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <main className="max-w-[1600px] mx-auto px-4 lg:px-6 py-6 space-y-8">
        {/* Search & Smart Paste */}
        <section className="relative z-30 px-8">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 p-2 flex items-center gap-2 max-w-4xl mx-auto transition-colors duration-300"
          >
            <div className="flex-1 flex items-center bg-slate-50 dark:bg-slate-900 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#ff6a00]/50 transition-all">
              <span className="material-icons text-gray-400 mr-3">search</span>
              <input 
                type="text" 
                placeholder={isMicListening ? "Listening..." : "Search products..."}
                className="bg-transparent border-none focus:ring-0 w-full placeholder-gray-400 text-lg text-gray-900 dark:text-gray-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm('')} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                   <span className="material-icons text-sm">close</span>
                </button>
              )}
              <div className="flex items-center gap-2 border-l border-gray-200 dark:border-slate-700 pl-3 ml-2">
                 <motion.button 
                   whileHover={{ scale: 1.1 }} 
                   whileTap={{ scale: 0.9 }} 
                   onClick={handleMicClick}
                   className={`p-2 rounded-full transition-colors ${isMicListening ? 'bg-red-100 text-red-600 animate-pulse' : 'hover:bg-gray-200 dark:hover:bg-slate-800 text-gray-500 dark:text-gray-400'}`}
                 >
                   <span className="material-icons">{isMicListening ? 'mic_off' : 'mic'}</span>
                 </motion.button>
              </div>
            </div>
            {/* Smart Paste trigger */}
            <motion.button 
              onClick={onOpenSmartPaste}
              whileHover={{ scale: 1.02, backgroundColor: "rgb(255, 237, 213)" }} 
              whileTap={{ scale: 0.95 }} 
              className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200 font-medium px-4 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
               <span className="material-icons text-[#ff6a00]">content_paste</span>
               <span>Smart Paste</span>
            </motion.button>
          </motion.div>
        </section>

        {/* Hero Section (Only show if not searching) */}
        {!searchTerm && !isFiltering && (
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* Main Hero Slider */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden shadow-md group h-[400px]">
             <AnimatePresence mode="wait">
                <motion.div 
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0 w-full h-full"
                >
                   <img src={HERO_SLIDES[currentSlide].img} className="w-full h-full object-cover" alt="Hero Slide" />
                   <div className={`absolute inset-0 bg-gradient-to-r ${HERO_SLIDES[currentSlide].bg} flex flex-col justify-center px-10 text-white`}>
                      <motion.span 
                        initial={{ opacity: 0, x: -20 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.3 }} 
                        className="inline-block px-3 py-1 bg-[#ff6a00] text-xs font-bold rounded-full w-fit mb-4"
                      >
                        {HERO_SLIDES[currentSlide].tag}
                      </motion.span>
                      <motion.h2 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.4 }} 
                        className="text-5xl font-bold mb-4 leading-tight whitespace-pre-line"
                      >
                        {HERO_SLIDES[currentSlide].title}
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        transition={{ delay: 0.5 }} 
                        className="text-gray-200 text-lg mb-8 max-w-md"
                      >
                        {HERO_SLIDES[currentSlide].desc}
                      </motion.p>
                      <motion.button 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 0.6 }} 
                        onClick={() => onNavigate(HERO_SLIDES[currentSlide].navTarget)} 
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }} 
                        className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 w-fit flex items-center gap-2"
                      >
                        {HERO_SLIDES[currentSlide].btn} <span className="material-icons text-sm">arrow_forward</span>
                      </motion.button>
                   </div>
                </motion.div>
             </AnimatePresence>
             
             {/* Slider Controls */}
             <div className="absolute bottom-6 left-10 flex gap-2 z-10">
                {HERO_SLIDES.map((_, idx) => (
                    <button 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentSlide ? 'bg-[#ff6a00] w-6' : 'bg-white/50 hover:bg-white'}`}
                    />
                ))}
             </div>
          </div>

          {/* Deal of Hour */}
          <div className="lg:col-span-1 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 relative flex flex-col h-[400px] overflow-hidden transition-colors duration-300">
             <div className="flex justify-between items-start z-10">
               <div>
                 <h3 className="font-bold text-lg text-gray-900 dark:text-white">Deal of the Hour</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">Limited quantity available</p>
               </div>
               <motion.span animate={{ opacity: [1, 0.7, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 px-2 py-1 rounded text-xs font-bold font-mono">-45%</motion.span>
             </div>
             <div className="flex-1 flex items-center justify-center relative z-10 my-4">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 dark:to-slate-800/50 z-0 pointer-events-none"></div>
               <motion.img 
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                    y: { repeat: Infinity, duration: 4, ease: "easeInOut" } 
                  }}
                  src={DEAL_PRODUCT.image} 
                  className="h-40 object-contain z-10 drop-shadow-xl" 
                  alt="Coffee" 
                />
             </div>
             <div className="z-10">
               <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-1 truncate">{DEAL_PRODUCT.name}</h4>
               <div className="flex items-baseline gap-2 mb-2">
                 <span className="text-2xl font-bold text-[#ff6a00] font-mono">₦{DEAL_PRODUCT.price.toLocaleString()}</span>
                 <span className="text-sm text-gray-400 line-through font-mono">₦24,000</span>
               </div>
               <div className="flex items-center justify-between gap-3">
                   {dealQty > 0 ? (
                       <div className="flex items-center bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
                           <motion.button whileTap={{ scale: 0.9 }} onClick={() => updateQuantity(getCartItem(DEAL_PRODUCT.id)!.cartId, dealQty - 1)} className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-white hover:text-[#ff6a00]"><span className="material-icons text-sm">remove</span></motion.button>
                           <span className="w-8 text-center font-bold text-gray-900 dark:text-white">{dealQty}</span>
                           <motion.button whileTap={{ scale: 0.9 }} onClick={() => addToCart(DEAL_PRODUCT, 1)} className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-white hover:text-[#ff6a00]"><span className="material-icons text-sm">add</span></motion.button>
                       </div>
                   ) : (
                       <motion.button 
                         whileHover={{ scale: 1.05 }} 
                         whileTap={{ scale: 0.95 }}
                         onClick={() => addToCart(DEAL_PRODUCT, 1)}
                         className="flex-1 bg-[#ff6a00] text-white py-2 rounded-lg font-bold shadow-md hover:bg-orange-600 transition-colors"
                       >
                         Add to Cart
                       </motion.button>
                   )}
                   <div className="bg-gray-100 dark:bg-slate-700 rounded-lg px-2 py-2 flex flex-col items-center min-w-[80px]">
                     <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase leading-none mb-1">Ends In</span>
                     <div className="flex gap-0.5 font-mono font-bold text-sm text-slate-800 dark:text-slate-200">
                       <span>01</span>:<span>24</span>:<span>59</span>
                     </div>
                   </div>
               </div>
             </div>
          </div>
        </motion.section>
        )}

        {/* Main Content */}
        <section className="flex flex-col lg:flex-row gap-8 pt-8">
           {/* Sidebar */}
           <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-24 h-fit">
              <div className="space-y-6 bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm">
                 <div className="flex items-center justify-between lg:hidden cursor-pointer" onClick={() => {
                   // Mobile toggle logic could go here
                 }}>
                    <span className="font-bold text-gray-900 dark:text-white">Filters</span>
                    <span className="material-icons">filter_list</span>
                 </div>
                 
                 {isFiltering && (
                    <motion.button 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      onClick={clearFilters}
                      className="w-full text-xs font-bold text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-2 rounded flex items-center justify-center gap-1 transition-colors"
                    >
                       <span className="material-icons text-sm">close</span> Clear All Filters
                    </motion.button>
                 )}

                 <div>
                    <h3 className="font-bold mb-4 flex justify-between cursor-pointer group text-gray-900 dark:text-white">Categories <span className="material-icons text-sm group-hover:rotate-180 transition-transform">expand_less</span></h3>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      {allCategories.map((cat, i) => (
                        <motion.label 
                          key={cat} 
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3 cursor-pointer hover:text-[#ff6a00] transition-colors"
                        >
                          <input 
                            type="checkbox" 
                            className="rounded text-[#ff6a00] focus:ring-[#ff6a00] border-gray-300 dark:border-slate-600 dark:bg-slate-800 cursor-pointer" 
                            checked={selectedCategories.includes(cat)}
                            onChange={() => toggleCategory(cat)}
                          />
                          {cat}
                        </motion.label>
                      ))}
                    </div>
                 </div>
                 <div>
                   <h3 className="font-bold mb-4 text-gray-900 dark:text-white">Max Price</h3>
                   <input 
                      type="range" 
                      min="0"
                      max="200000"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full accent-[#ff6a00] cursor-grab active:cursor-grabbing" 
                   />
                   <div className="flex gap-2 mt-2">
                     <div className="w-1/2 p-2 border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded text-sm text-gray-500">
                        Min: ₦0
                     </div>
                     <div className="w-1/2 p-2 border border-gray-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded text-sm font-bold text-gray-900 dark:text-white">
                        Max: ₦{maxPrice.toLocaleString()}
                     </div>
                   </div>
                 </div>
              </div>
           </aside>

           {/* Grid */}
           <div className="flex-1">
             <div className="flex justify-between items-center mb-6 bg-white dark:bg-slate-900 p-4 rounded-xl border border-gray-200 dark:border-slate-800 shadow-sm sticky top-16 lg:static z-20">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Provisions <span className="text-gray-400 font-normal text-base ml-2">({filteredProducts.length} items)</span></h2>
                <select 
                  className="border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-lg text-sm focus:ring-[#ff6a00] focus:border-[#ff6a00] cursor-pointer"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
             </div>

             {filteredProducts.length === 0 ? (
               <div className="flex flex-col items-center justify-center py-20 text-center">
                  <span className="material-icons text-6xl text-gray-200 dark:text-slate-700 mb-4">search_off</span>
                  <h3 className="text-xl font-bold text-gray-500 dark:text-gray-400">No products found</h3>
                  <p className="text-gray-400 text-sm mt-2">Try adjusting your price range or search terms.</p>
                  <button onClick={clearFilters} className="mt-4 text-[#ff6a00] font-bold hover:underline">Clear all filters</button>
               </div>
             ) : (
               <motion.div 
                 layout
                 initial="hidden"
                 animate="visible"
                 variants={stagger}
                 className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4"
               >
                  <AnimatePresence mode="popLayout">
                  {filteredProducts.map((product, idx) => {
                    const qty = getProductQtyInCart(product.id);
                    const cartItem = getCartItem(product.id);
                    
                    return (
                    <motion.div 
                      layout
                      key={product.id} 
                      variants={fadeInUp}
                      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                      className="bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 overflow-hidden shadow-sm transition-all relative group cursor-pointer"
                      onClick={(e) => handleAddToCart(e, product)}
                    >
                      <div className="absolute top-3 left-3 z-10 flex gap-1">
                        {product.context === 'WHOLESALE' ? (
                            <span className="bg-[#ff6a00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm">WHOLESALE</span>
                        ) : (
                            <span className={`${product.tagColor || 'bg-green-100 text-green-700'} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm`}>{product.tag || 'In Stock'}</span>
                        )}
                      </div>

                      {/* Cart Quantity Badge (Hidden if we show controls) */}
                      {qty > 0 && (
                        <motion.div 
                           initial={{ scale: 0 }} 
                           animate={{ scale: 1 }} 
                           className="absolute top-3 right-3 z-10 bg-[#ff6a00] text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md border-2 border-white dark:border-slate-800"
                        >
                           {qty}
                        </motion.div>
                      )}

                      <div className="relative h-48 p-4 flex items-center justify-center bg-slate-50 dark:bg-slate-700/50">
                         <motion.img 
                          src={product.image} 
                          className="h-32 object-contain" 
                          alt={product.name}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                         {qty === 0 && (
                         <div className="absolute bottom-0 left-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                            <motion.button 
                              whileTap={{ scale: 0.9 }}
                              className="w-full bg-[#ff6a00] hover:bg-[#e65e00] text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 shadow-lg"
                            >
                               <span className="material-icons text-sm">add_shopping_cart</span> Add
                            </motion.button>
                         </div>
                         )}
                      </div>
                      <div className="p-4">
                         <h3 className="font-bold text-gray-900 dark:text-white leading-tight mb-1 truncate">{product.name}</h3>
                         {product.unit && <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{product.unit}</div>}
                         <div className="flex items-end justify-between mt-2 h-8">
                            <div className="flex flex-col">
                               {product.oldPrice && <span className="text-xs text-gray-400 line-through font-mono">₦{product.oldPrice.toLocaleString()}</span>}
                               <span className={`text-lg font-bold font-mono ${product.oldPrice ? 'text-[#ff6a00]' : 'text-gray-900 dark:text-gray-100'}`}>₦{product.price.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
                            </div>
                            
                            {/* Quantity Controls */}
                            {qty > 0 && cartItem ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center bg-gray-100 dark:bg-slate-700 rounded-full p-1"
                                >
                                    <motion.button 
                                        whileTap={{ scale: 0.8 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            updateQuantity(cartItem.cartId, qty - 1);
                                        }}
                                        className="w-7 h-7 rounded-full bg-white dark:bg-slate-600 flex items-center justify-center text-gray-600 dark:text-gray-200 shadow-sm hover:text-[#ff6a00]"
                                    >
                                        <span className="material-icons text-sm">remove</span>
                                    </motion.button>
                                    <span className="w-8 text-center font-bold text-sm text-gray-900 dark:text-white font-mono">{qty}</span>
                                    <motion.button 
                                        whileTap={{ scale: 0.8 }}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            addToCart(product, 1);
                                        }}
                                        className="w-7 h-7 rounded-full bg-white dark:bg-slate-600 flex items-center justify-center text-gray-600 dark:text-gray-200 shadow-sm hover:text-[#ff6a00]"
                                    >
                                        <span className="material-icons text-sm">add</span>
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.button 
                                  whileTap={{ scale: 0.8 }}
                                  onClick={(e) => handleAddToCart(e, product)}
                                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-slate-700 flex items-center justify-center hover:bg-[#ff6a00] hover:text-white transition-colors"
                                >
                                   <span className="material-icons text-sm">add</span>
                                </motion.button>
                            )}
                         </div>
                      </div>
                    </motion.div>
                  )})}
                  </AnimatePresence>
               </motion.div>
             )}
             
             {/* Loader removed as requested */}
           </div>
        </section>
      </main>

      {/* Floating AI Chat Assistant */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 w-80 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 overflow-hidden flex flex-col pointer-events-auto"
            style={{ maxHeight: '500px' }}
          >
             <div className="bg-[#ff6a00] p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                   <span className="material-icons">smart_toy</span>
                   <h3 className="font-bold">AI Assistant</h3>
                </div>
                <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/20 rounded-full p-1"><span className="material-icons text-sm">close</span></button>
             </div>
             <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-950 h-64">
                {chatHistory.map((msg, i) => (
                   <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-3 rounded-xl text-sm ${msg.sender === 'user' ? 'bg-[#ff6a00] text-white rounded-br-none' : 'bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm'}`}>
                         {msg.text}
                      </div>
                   </div>
                ))}
             </div>
             <form onSubmit={handleSendChat} className="p-3 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex gap-2">
                <input 
                   type="text" 
                   value={chatMessage}
                   onChange={(e) => setChatMessage(e.target.value)}
                   className="flex-1 border-gray-300 dark:border-slate-700 bg-gray-100 dark:bg-slate-800 rounded-lg px-3 py-2 text-sm focus:ring-[#ff6a00] focus:border-[#ff6a00] dark:text-white"
                   placeholder="Type a message..."
                />
                <button type="submit" className="bg-[#ff6a00] text-white p-2 rounded-lg hover:bg-orange-600 transition-colors"><span className="material-icons text-sm">send</span></button>
             </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-2 pointer-events-none"
      >
        {!isChatOpen && (
        <motion.div 
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="bg-white dark:bg-slate-800 shadow-xl rounded-xl p-4 mb-2 max-w-xs border border-gray-100 dark:border-slate-700 relative pointer-events-auto"
        >
           <p className="text-sm text-gray-700 dark:text-gray-200">Hi! I noticed you're buying pasta. Need <span className="font-bold text-[#ff6a00]">tomato sauce</span>?</p>
           <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white dark:bg-slate-800"></div>
           <button onClick={() => setIsChatOpen(false)} className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"><span className="material-icons text-xs">close</span></button>
        </motion.div>
        )}
        <motion.button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.9 }}
          className="bg-[#ff6a00] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center relative pointer-events-auto"
        >
           <span className="material-icons text-2xl">smart_toy</span>
           <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-ping"></span>
           <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;