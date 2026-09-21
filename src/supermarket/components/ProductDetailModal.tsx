import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface Props {
 product: Product;
 onClose: () => void;
}

const ProductDetailModal: React.FC<Props> = ({ product, onClose }) => {
 const { addToCart } = useCart();

 // Mock data for nutritional facts and ingredients if not present
 const nutritionalFacts = [
 { label: 'Calories', value: '120kcal' },
 { label: 'Total Fat', value: '2g' },
 { label: 'Sodium', value: '150mg' },
 { label: 'Total Carbohydrate', value: '22g' },
 { label: 'Protein', value: '4g' },
 ];

 const ingredients = product.tags?.join(', ') || 'Wheat Flour, Water, Sugar, Yeast, Salt, Vegetable Oil.';

 return (
 <AnimatePresence>
 <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 onClick={onClose}
 className="absolute inset-0 bg-foreground text-background/60 backdrop-blur-sm"
 />
 <motion.div 
 initial={{ opacity: 0, scale: 0.95, y: 20 }}
 animate={{ opacity: 1, scale: 1, y: 0 }}
 exit={{ opacity: 0, scale: 0.95, y: 20 }}
 transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
 className="relative w-full max-w-4xl bg-card rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
 >
 <button 
 onClick={onClose}
 className="absolute top-4 right-4 z-10 w-10 h-10 bg-card/80 backdrop-blur-md rounded-full flex items-center justify-center text-foreground hover:bg-background dark:hover:bg-foreground text-background transition-colors shadow-sm"
 >
 <span className="material-icons">close</span>
 </button>

 {/* Image Section */}
 <div className="w-full md:w-1/2 bg-background p-8 flex items-center justify-center relative min-h-[300px]">
 {product.tag && (
 <div className={`absolute top-6 left-6 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase shadow-sm ${product.tagColor || 'bg-orange-100 text-orange-800'}`}>
 {product.tag}
 </div>
 )}
 <img 
 src={product.image || 'https://picsum.photos/seed/placeholder/800/800'} 
 alt={product.name} 
 className="w-full h-full object-contain max-h-[400px] mix-blend-multiply dark:mix-blend-normal hover:scale-105 transition-transform duration-500"
 referrerPolicy="no-referrer"
 />
 </div>

 {/* Details Section */}
 <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
 <div className="mb-2">
 <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2 block">
 {product.category}
 </span>
 <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight mb-4">
 {product.name}
 </h2>
 
 <div className="flex items-end gap-3 mb-6">
 <span className="text-3xl font-bold text-foreground ">
 ₦{product.price.toLocaleString()}
 </span>
 {product.oldPrice && (
 <span className="text-lg text-muted-foreground line-through mb-1">
 ₦{product.oldPrice.toLocaleString()}
 </span>
 )}
 {product.unit && (
 <span className="text-sm text-muted-foreground mb-1">
 {product.unit}
 </span>
 )}
 </div>
 </div>

 <div className="space-y-6 flex-1">
 {/* Description */}
 <div>
 <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
 <span className="material-icons text-sm text-muted-foreground">info</span> Description
 </h3>
 <p className="text-sm text-foreground/80 leading-relaxed">
 Premium quality {product.name.toLowerCase()} sourced directly for the best taste and freshness. Perfect for your daily needs.
 </p>
 </div>

 {/* Ingredients */}
 <div>
 <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
 <span className="material-icons text-sm text-muted-foreground">science</span> Ingredients
 </h3>
 <p className="text-sm text-foreground/80 leading-relaxed capitalize">
 {ingredients}
 </p>
 </div>

 {/* Nutritional Facts */}
 <div className="bg-background rounded-2xl p-5 border border-border ">
 <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
 <span className="material-icons text-sm text-muted-foreground">monitor_weight</span> Nutritional Facts
 </h3>
 <div className="space-y-2">
 {nutritionalFacts.map((fact, idx) => (
 <div key={idx} className="flex justify-between items-center py-1 border-b border-border last:border-0">
 <span className="text-sm text-foreground/80 ">{fact.label}</span>
 <span className="text-sm font-bold text-foreground ">{fact.value}</span>
 </div>
 ))}
 </div>
 </div>
 </div>

 {/* Action Bar */}
 <div className="mt-8 pt-6 border-t border-border flex gap-4">
 <button 
 onClick={() => {
 addToCart(product, 1);
 onClose();
 }}
 className="flex-1 bg-orange-500 hover:bg-orange-600 text-white h-12 rounded-xl font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
 >
 <span className="material-icons text-sm">add_shopping_cart</span> Add to Cart
 </button>
 <button className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-red-500 hover:border-red-200 dark:hover:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">
 <span className="material-icons">favorite_border</span>
 </button>
 </div>
 </div>
 </motion.div>
 </div>
 </AnimatePresence>
 );
};

export default ProductDetailModal;
