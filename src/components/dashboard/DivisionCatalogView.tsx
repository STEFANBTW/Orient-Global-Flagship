import React, { useState, useEffect, useMemo, useRef } from 'react';
import { cmsApi } from '@/services/cmsApi';
import { orderService, CustomerOrder, playAlertSound } from '@/services/orderService';
import { ProductItem } from '@/data/productsCatalog';
import { ProductEditorModal } from './ProductEditorModal';
import { ConsumerUserSwitcher } from '../ConsumerUserSwitcher';
import { sheetsSync } from '@/services/sheetsSync';
import { getActiveConsumerUser } from '@/services/mockUsers';
import { 
  ChefHat, 
  Search, 
  Plus, 
  Minus, 
  Edit3, 
  ShoppingBag, 
  Timer, 
  Bell, 
  CheckCircle2, 
  Clock, 
  Package, 
  FileSpreadsheet, 
  Upload, 
  Download,
  Trash2,
  RefreshCw,
  Box,
  Percent
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

interface DivisionConfig {
  id: 'bakery' | 'dining' | 'market' | 'games' | 'lounge' | 'water';
  name: string;
  subtitle: string;
  tagline: string;
  icon: string;
  categories: string[];
}

const DIVISION_CONFIGS: Record<string, DivisionConfig> = {
  bakery: {
    id: 'bakery',
    name: 'Bakery & Pastries',
    subtitle: 'Fresh Breads, Croissants, Artisan Cakes & Pastries',
    tagline: 'Artisan bakehouse offering daily oven-fresh breads, viennoiserie, and celebration cakes.',
    icon: '🥖',
    categories: ['All', 'Bread', 'Pastries', 'Cakes', 'Artisan Specials', 'Savory Bakes']
  },
  dining: {
    id: 'dining',
    name: 'Dining & Restaurant',
    subtitle: 'Fine Dining, Chef Specials, Starters & Cuisine',
    tagline: 'Gourmet kitchen serving signature culinary creations, small plates, and seasonal entrées.',
    icon: '🍽️',
    categories: ['All', 'Starters', 'Mains', 'Signature', 'Desserts', 'Beverages']
  },
  market: {
    id: 'market',
    name: 'Supermarket & Groceries',
    subtitle: 'Fresh Produce, Pantry Staples, Dairy & Household',
    tagline: 'Complete grocery market offering premium ingredients, staples, snacks, and chilled provisions.',
    icon: '🛒',
    categories: ['All', 'Pantry', 'Produce', 'Dairy & Eggs', 'Snacks', 'Beverages', 'Household']
  },
  games: {
    id: 'games',
    name: 'Arcade & Gaming Arena',
    subtitle: 'Hourly Passes, VR Experiences, Consoles & Table Games',
    tagline: 'Interactive entertainment center featuring virtual reality, console arenas, arcade coins, and billiards.',
    icon: '🎮',
    categories: ['All', 'Hourly Passes', 'VR Experiences', 'Console Gaming', 'Arcade Coins', 'Table Games']
  },
  lounge: {
    id: 'lounge',
    name: 'Lounge & Cocktail Bar',
    subtitle: 'Signature Cocktails, Fine Wines, Spirits & Tapas',
    tagline: 'Relaxed evening sanctuary with handcrafted cocktails, cellar wines, and curated light fare.',
    icon: '🍸',
    categories: ['All', 'Cocktails', 'Wine & Champagne', 'Spirits', 'Small Plates']
  },
  water: {
    id: 'water',
    name: 'Pure Table Water',
    subtitle: 'Spring Water Bottles, Refill Dispensers & Bulk Packs',
    tagline: 'Multi-stage reverse osmosis water in premium portable bottles and commercial dispensers.',
    icon: '💧',
    categories: ['All', 'Bottled Water', 'Water Dispensers', 'Bulk Packs', 'Accessories']
  }
};

export default function DivisionCatalogView({ divisionId }: { divisionId: 'bakery' | 'dining' | 'market' | 'games' | 'lounge' | 'water' }) {
  const config = DIVISION_CONFIGS[divisionId] || DIVISION_CONFIGS.bakery;

  const [products, setProducts] = useState<ProductItem[]>([]);
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Full Item Editor / Creator Modal State
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);

  // Quick Order Modal State
  const [orderingItem, setOrderingItem] = useState<ProductItem | null>(null);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderCustomerName, setOrderCustomerName] = useState(getActiveConsumerUser().name);
  const [orderPhone, setOrderPhone] = useState(getActiveConsumerUser().phone);
  const [orderTable, setOrderTable] = useState('Table 1');
  const [submittingOrder, setSubmittingOrder] = useState(false);

  // Excel / CSV File Input Ref
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load Products & Orders
  const loadData = async () => {
    try {
      setLoading(true);
      const [prodRes, ordersList] = await Promise.all([
        cmsApi.getProducts(),
        orderService.getOrders()
      ]);

      const divisionProducts = prodRes.products.filter(
        (p: any) => p.division?.toLowerCase() === divisionId.toLowerCase()
      );
      setProducts(divisionProducts);
      setOrders(ordersList);
    } catch (err) {
      console.error('Error loading division data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(async () => {
      try {
        const freshOrders = await orderService.getOrders();
        setOrders(freshOrders);
      } catch (e) {}
    }, 3000);
    return () => clearInterval(interval);
  }, [divisionId]);

  // Sync consumer details when user changes
  useEffect(() => {
    const handleUserChanged = (e: any) => {
      if (e.detail) {
        setOrderCustomerName(e.detail.name);
        setOrderPhone(e.detail.phone);
      }
    };
    window.addEventListener('orient_consumer_user_changed', handleUserChanged);
    return () => window.removeEventListener('orient_consumer_user_changed', handleUserChanged);
  }, []);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCat = selectedCategory === 'All' || p.category?.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch = !searchQuery.trim() || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category?.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  // Active Orders for chef display
  const activeOrders = useMemo(() => {
    return orders.filter(o => o.status !== 'completed' && o.status !== 'cancelled');
  }, [orders]);

  // Quick stock adjuster
  const handleQuickStockChange = async (item: ProductItem, delta: number) => {
    const newStock = Math.max(0, (item.stock || 0) + delta);
    setProducts(prev => prev.map(p => p.id === item.id ? { ...p, stock: newStock } : p));
    try {
      await cmsApi.updateStock(item.id, newStock);
      toast({
        title: 'Stock Updated',
        description: `${item.name} stock changed to ${newStock} units.`,
      });
    } catch (err) {
      loadData();
    }
  };

  // Open Full Editor for Create
  const handleOpenCreateModal = () => {
    setEditingProduct(null);
    setIsEditorOpen(true);
  };

  // Open Full Editor for Edit
  const handleOpenEditModal = (item: ProductItem) => {
    setEditingProduct(item);
    setIsEditorOpen(true);
  };

  // Callback when item saved
  const handleProductSaved = (saved: ProductItem) => {
    setProducts(prev => {
      const exists = prev.some(p => p.id === saved.id);
      if (exists) {
        return prev.map(p => p.id === saved.id ? saved : p);
      } else {
        return [saved, ...prev];
      }
    });
  };

  // Callback when item deleted
  const handleProductDeleted = (deletedId: string) => {
    setProducts(prev => prev.filter(p => p.id !== deletedId));
  };

  // 1-Click Export to Excel / CSV
  const handleExportCSV = () => {
    sheetsSync.exportToCSV(products, `orient_${divisionId}_catalog.csv`);
    toast({
      title: 'Catalog Exported! 📊',
      description: `Downloaded ${products.length} ${config.name} items formatted for Excel and Google Sheets.`,
    });
  };

  // Import from Excel / CSV
  const handleImportCSVFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = sheetsSync.parseCSV(text);
        if (parsed.length === 0) {
          toast({
            title: 'No Items Found',
            description: 'The CSV did not contain recognizable product rows.',
            variant: 'destructive'
          });
          return;
        }

        toast({
          title: 'Importing Items...',
          description: `Processing ${parsed.length} rows into Firestore database.`,
        });

        for (const item of parsed) {
          if (item.id) {
            await cmsApi.updateProduct(item.id, { ...item, division: divisionId });
          } else {
            await cmsApi.createProduct({ ...item, division: divisionId });
          }
        }

        toast({
          title: 'Import Complete! 🎉',
          description: `Successfully synchronized ${parsed.length} items from sheet.`,
        });
        loadData();
      } catch (err) {
        toast({
          title: 'Import Error',
          description: 'Failed to parse sheet file.',
          variant: 'destructive'
        });
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Place Quick Order
  const handlePlaceOrder = async () => {
    if (!orderingItem) return;
    setSubmittingOrder(true);
    try {
      const activeConsumer = getActiveConsumerUser();
      const prepDuration = orderingItem.prepTimeMinutes || 15;

      const placed = await orderService.placeOrder({
        customerId: activeConsumer.id,
        customerName: orderCustomerName.trim() || activeConsumer.name,
        customerPhone: orderPhone.trim() || activeConsumer.phone,
        shippingAddress: `${config.name} (${orderTable})`,
        tableNumber: orderTable,
        items: [
          {
            id: orderingItem.id,
            name: orderingItem.name,
            quantity: orderQuantity,
            price: 10,
            division: divisionId,
            category: orderingItem.category,
            image: orderingItem.image
          }
        ],
        prepDurationMinutes: prepDuration
      });

      toast({
        title: 'Order Placed! 🛒',
        description: `Order #${placed.id} placed for ${orderQuantity}x ${orderingItem.name} at ₦10 each (Total: ₦${placed.totalAmount}). Status: Waiting for Chef. Stock is NOT decremented yet.`,
      });

      setOrderingItem(null);
      const freshOrders = await orderService.getOrders();
      setOrders(freshOrders);
    } catch (err) {
      toast({
        title: 'Order Failed',
        description: 'Could not place order.',
        variant: 'destructive'
      });
    } finally {
      setSubmittingOrder(false);
    }
  };

  // Chef Confirm and Start
  const handleChefConfirm = async (orderId: string) => {
    try {
      await orderService.confirmAndStartOrder(orderId, 15);
      toast({
        title: '👨‍🍳 Chef Confirmed & Started!',
        description: `Order #${orderId} is now preparing! Countdown timer running. Stock has auto-decremented.`,
      });
      loadData();
    } catch (err) {
      toast({
        title: 'Confirmation Error',
        description: 'Could not confirm order.',
        variant: 'destructive'
      });
    }
  };

  // Chef: Test 10-Minute Warning (Call to attention)
  const handleTestWarning = async (orderId: string) => {
    try {
      await orderService.sendTenMinuteWarning(orderId);
      toast({
        title: '⚠️ 10-Minute Warning Dispatched!',
        description: `Sent alert to customer for Order #${orderId}: '10 minutes left until ready!'`,
      });
      const freshOrders = await orderService.getOrders();
      setOrders(freshOrders);
    } catch (e) {
      toast({
        title: 'Alert Failed',
        description: 'Could not send 10-min warning alert.',
        variant: 'destructive'
      });
    }
  };

  // Chef: Mark Ready (Positive outcome)
  const handleChefReady = async (orderId: string) => {
    try {
      await orderService.markOrderReady(orderId);
      toast({
        title: '🎉 Order Marked Ready!',
        description: `Order #${orderId} is ready for customer pickup!`,
      });
      const freshOrders = await orderService.getOrders();
      setOrders(freshOrders);
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Could not mark order ready.',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-16 px-2 sm:px-4">
      {/* 1. Header Section */}
      <div className="bg-card border border-orange-500/30 rounded-2xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl">{config.icon}</span>
            <Badge className="bg-orange-500/15 text-orange-700 dark:text-orange-300 border border-orange-500/30 text-xs uppercase tracking-wider font-bold px-3 py-1">
              {config.name}
            </Badge>
            {/* Green accent for positive price verification */}
            <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-2.5 py-0.5 shadow-2xs">
              ₦10 Flat Price
            </Badge>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            {config.name}
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            {config.tagline} Add or edit items, manage pictures and videos, adjust stock on ground, or synchronize with Excel / Google Sheets.
          </p>
        </div>

        {/* Action Controls & Consumer User Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          {/* Consumer User Switcher */}
          <ConsumerUserSwitcher />

          {/* Primary Add New Item Button */}
          <Button 
            id="btn-add-new-item"
            size="sm"
            onClick={handleOpenCreateModal}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs gap-1.5 shadow-xs"
          >
            <Plus className="w-3.5 h-3.5" />
            + Add New Item
          </Button>

          {/* Excel / Google Sheets Export & Import */}
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={handleExportCSV}
              title="Download Excel / CSV sheet"
              className="border-orange-500/30 text-orange-700 dark:text-orange-300 hover:bg-orange-500/10 text-xs gap-1 h-9 px-2.5"
            >
              <Download className="w-3.5 h-3.5 text-orange-600" />
              <span>Export</span>
            </Button>

            <label
              htmlFor="csv-upload-input"
              title="Import items from Excel or Google Sheets CSV"
              className="flex items-center gap-1 h-9 px-2.5 rounded-xl border border-orange-500/30 text-orange-700 dark:text-orange-300 hover:bg-orange-500/10 cursor-pointer text-xs font-semibold transition-colors"
            >
              <Upload className="w-3.5 h-3.5 text-orange-600" />
              <span>Import</span>
              <input
                id="csv-upload-input"
                ref={fileInputRef}
                type="file"
                accept=".csv,.txt"
                onChange={handleImportCSVFile}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* 2. Interactive Kitchen & Orders Station */}
      <div className="bg-card border-2 border-orange-500/40 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 pb-3 border-b border-orange-500/20">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white p-2 rounded-xl shadow-xs">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-foreground">Kitchen & Chef Station</h2>
                {activeOrders.length > 0 && (
                  <Badge className="bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5">
                    {activeOrders.length} In Queue
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Orders appear here instantly. Chef confirmation auto-decrements stock and starts the prep timer.
              </p>
            </div>
          </div>

          <span className="text-[11px] font-medium text-orange-800 dark:text-orange-200 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-lg">
            Flow: Place Order ➔ Chef Confirm (Stock Decrements) ➔ 10m Warning ➔ Ready
          </span>
        </div>

        {activeOrders.length === 0 ? (
          <div className="text-center py-6 bg-orange-500/5 rounded-xl border border-dashed border-orange-500/30 p-4">
            <ShoppingBag className="w-8 h-8 text-orange-500/50 mx-auto mb-2" />
            <p className="text-sm font-semibold text-foreground">No active orders in the queue</p>
            <p className="text-xs text-muted-foreground mt-1 max-w-md mx-auto">
              Click <span className="font-semibold text-orange-600">"Order (₦10)"</span> on any item below to test the chef workflow!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeOrders.map((order) => {
              const isAwaitingChef = order.status === 'awaiting_chef';
              const isPreparing = order.status === 'preparing' || order.status === 'ten_min_warning';
              const isReady = order.status === 'ready';
              const isWarning = order.status === 'ten_min_warning';

              let remainingText = '';
              if (order.timerEndsAt) {
                const msLeft = Math.max(0, order.timerEndsAt - Date.now());
                const mins = Math.floor(msLeft / 60000);
                const secs = Math.floor((msLeft % 60000) / 1000);
                remainingText = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;
              }

              return (
                <div 
                  key={order.id} 
                  className={`p-4 rounded-xl border bg-background shadow-2xs space-y-3 transition-all ${
                    isReady ? 'border-emerald-500 bg-emerald-50/20 dark:bg-emerald-950/10' :
                    isWarning ? 'border-red-500 bg-red-50/20 dark:bg-red-950/10 animate-pulse' :
                    isAwaitingChef ? 'border-orange-400 bg-orange-50/20 dark:bg-orange-950/10' :
                    'border-orange-500/40'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono font-bold text-foreground">#{order.id}</span>
                      <p className="text-xs font-semibold text-foreground mt-0.5">{order.customerName}</p>
                      <p className="text-[11px] text-muted-foreground">{order.customerPhone} • {order.shippingAddress || 'Store'}</p>
                    </div>

                    {/* Status Badge: Green for positive, Red for attention/warning, Orange for active queue */}
                    <Badge 
                      className={`text-[10px] font-bold uppercase tracking-wider ${
                        isReady ? 'bg-emerald-600 text-white' :
                        isWarning ? 'bg-red-600 text-white animate-bounce' :
                        isAwaitingChef ? 'bg-orange-500 text-white' :
                        'bg-orange-600 text-white'
                      }`}
                    >
                      {isReady ? '✅ Order Ready' :
                       isWarning ? '⚠️ 10m Warning' :
                       isAwaitingChef ? '⏳ Awaiting Chef' :
                       '🔥 Preparing'}
                    </Badge>
                  </div>

                  {/* Items in order */}
                  <div className="bg-muted/40 p-2.5 rounded-lg text-xs space-y-1">
                    {order.items.map((it, idx) => (
                      <div key={idx} className="flex justify-between items-center text-foreground font-medium">
                        <span>{it.quantity}x {it.name}</span>
                        <span className="text-muted-foreground font-mono">₦{it.price * it.quantity}</span>
                      </div>
                    ))}
                    <div className="border-t pt-1 mt-1 flex justify-between font-bold text-foreground">
                      <span>Total Amount</span>
                      <span className="text-emerald-600 font-mono">₦{order.totalAmount}</span>
                    </div>
                  </div>

                  {/* Live Timer Countdown */}
                  {isPreparing && (
                    <div className="bg-orange-500/10 p-2 rounded-lg border border-orange-500/20 text-xs flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-orange-700 dark:text-orange-300 font-semibold">
                        <Timer className="w-3.5 h-3.5 animate-spin text-orange-500" />
                        <span>Prep Timer:</span>
                      </div>
                      <span className="font-mono font-bold text-orange-900 dark:text-orange-100">
                        {remainingText || `${order.prepDurationMinutes || 15}m`}
                      </span>
                    </div>
                  )}

                  {/* Chef Action Buttons */}
                  <div className="pt-1 flex flex-col gap-1.5">
                    {isAwaitingChef && (
                      <Button
                        id={`btn-chef-confirm-${order.id}`}
                        size="sm"
                        onClick={() => handleChefConfirm(order.id)}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5 shadow-2xs"
                      >
                        <ChefHat className="w-3.5 h-3.5" />
                        Confirm & Start Cooking
                      </Button>
                    )}

                    {isPreparing && (
                      <div className="grid grid-cols-2 gap-1.5">
                        <Button
                          id={`btn-test-10m-${order.id}`}
                          variant="outline"
                          size="sm"
                          onClick={() => handleTestWarning(order.id)}
                          className="text-[11px] font-semibold text-red-600 border-red-300 hover:bg-red-50 dark:hover:bg-red-950/20 gap-1"
                        >
                          <Bell className="w-3 h-3" />
                          Test 10m Alert
                        </Button>
                        <Button
                          id={`btn-mark-ready-${order.id}`}
                          size="sm"
                          onClick={() => handleChefReady(order.id)}
                          className="text-[11px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          Mark Ready
                        </Button>
                      </div>
                    )}

                    {isReady && (
                      <Button
                        id={`btn-complete-${order.id}`}
                        variant="outline"
                        size="sm"
                        onClick={() => orderService.updateOrderStatus(order.id, 'completed').then(loadData)}
                        className="w-full text-xs font-semibold text-foreground hover:bg-muted"
                      >
                        Complete Order (Picked Up)
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 3. Category Filter Tabs & Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
          {/* Dynamic Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {config.categories.map(cat => {
              const count = cat === 'All' 
                ? products.length 
                : products.filter(p => p.category?.toLowerCase() === cat.toLowerCase()).length;

              const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();

              return (
                <button
                  key={cat}
                  id={`cat-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isSelected 
                      ? 'bg-orange-500 text-white shadow-xs font-bold' 
                      : 'bg-muted/70 hover:bg-orange-500/10 text-muted-foreground hover:text-orange-950 dark:hover:text-orange-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-background text-muted-foreground'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-orange-500/70" />
            <Input 
              id="input-search-division-products"
              placeholder={`Search ${config.name}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 text-xs h-9 bg-card border-orange-500/30 focus-visible:ring-orange-500"
            />
          </div>
        </div>

        {/* 4. Products Grid */}
        {loading ? (
          <div className="text-center py-16">
            <RefreshCw className="w-8 h-8 animate-spin text-orange-500 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Loading catalog items...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-card border border-orange-500/20 rounded-2xl p-8">
            <Package className="w-10 h-10 text-orange-500/40 mx-auto mb-2" />
            <h3 className="text-base font-semibold text-foreground">No items in this category</h3>
            <p className="text-xs text-muted-foreground mt-1">Add your first item using the button below or reset filters.</p>
            <div className="flex justify-center gap-2 mt-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="text-xs"
              >
                Reset Filters
              </Button>
              <Button 
                size="sm" 
                onClick={handleOpenCreateModal}
                className="bg-orange-500 hover:bg-orange-600 text-white text-xs gap-1"
              >
                <Plus className="w-3 h-3" /> Add Item
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((item) => {
              const isLowStock = (item.stock ?? 5) <= 2 && (item.stock ?? 5) > 0;
              const isOutOfStock = (item.stock ?? 5) === 0;

              return (
                <div 
                  key={item.id}
                  id={`item-card-${item.id}`}
                  className="group bg-card border border-orange-500/20 rounded-2xl overflow-hidden shadow-2xs hover:shadow-sm hover:border-orange-500/50 transition-all flex flex-col justify-between"
                >
                  {/* Image & Badges */}
                  <div>
                    <div className="relative h-44 w-full bg-muted overflow-hidden">
                      <img 
                        src={item.image || (item.images && item.images[0]) || "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80"}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                        <Badge className="bg-background/90 text-foreground backdrop-blur-md text-[10px] font-bold shadow-2xs border">
                          {item.category}
                        </Badge>
                      </div>

                      {/* Green Accent for Positive ₦10 Price */}
                      <div className="absolute top-2.5 right-2.5">
                        <Badge className="bg-emerald-600 text-white font-mono font-bold text-xs shadow-2xs">
                          ₦{item.price || 10}
                        </Badge>
                      </div>

                      {/* Stock badge: Green for healthy, Red for out of stock, Orange for low */}
                      <div className="absolute bottom-2.5 left-2.5">
                        <Badge className={`text-[10px] font-bold backdrop-blur-md ${
                          isOutOfStock ? 'bg-red-600/90 text-white' :
                          isLowStock ? 'bg-orange-500/90 text-white' :
                          'bg-emerald-700/90 text-white'
                        }`}>
                          {item.stock ?? 5} in stock
                        </Badge>
                      </div>

                      {/* Prep time badge if available */}
                      {item.prepTimeMinutes && (
                        <div className="absolute bottom-2.5 right-2.5">
                          <Badge className="bg-background/90 text-foreground text-[10px] font-bold backdrop-blur-md border flex items-center gap-1">
                            <Clock className="w-2.5 h-2.5 text-orange-500" />
                            {item.prepTimeMinutes}m prep
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-sm text-foreground leading-snug line-clamp-1">
                          {item.name}
                        </h3>
                        {/* Edit Button opens comprehensive modal */}
                        <button
                          id={`btn-edit-${item.id}`}
                          onClick={() => handleOpenEditModal(item)}
                          className="text-orange-600 hover:text-orange-700 p-1 rounded-md hover:bg-orange-500/10 transition-colors shrink-0"
                          title="Edit all item details, pictures & videos"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {item.description || 'Premium item crafted with care.'}
                      </p>

                      {/* Stock on ground with interactive [-] / [+] buttons */}
                      <div className="pt-2 flex items-center justify-between border-t text-xs">
                        <span className="text-muted-foreground font-medium text-[11px]">Stock on Ground:</span>
                        <div className="flex items-center gap-1 bg-muted/60 p-1 rounded-lg border border-orange-500/20">
                          <button
                            id={`btn-stock-dec-${item.id}`}
                            onClick={() => handleQuickStockChange(item, -1)}
                            disabled={isOutOfStock}
                            className="w-5 h-5 rounded flex items-center justify-center bg-card hover:bg-background text-foreground disabled:opacity-40 shadow-2xs"
                            title="Decrement stock"
                          >
                            <Minus className="w-3 h-3 text-orange-600" />
                          </button>
                          <span className="w-6 text-center font-bold text-foreground font-mono text-xs">
                            {item.stock ?? 5}
                          </span>
                          <button
                            id={`btn-stock-inc-${item.id}`}
                            onClick={() => handleQuickStockChange(item, 1)}
                            className="w-5 h-5 rounded flex items-center justify-center bg-card hover:bg-background text-foreground shadow-2xs"
                            title="Increment stock"
                          >
                            <Plus className="w-3 h-3 text-orange-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Order Button */}
                  <div className="p-4 pt-0">
                    <Button
                      id={`btn-order-${item.id}`}
                      onClick={() => {
                        setOrderingItem(item);
                        setOrderQuantity(1);
                      }}
                      disabled={isOutOfStock}
                      className={`w-full font-bold text-xs gap-1.5 shadow-2xs h-9 ${
                        isOutOfStock 
                          ? 'bg-muted text-muted-foreground cursor-not-allowed'
                          : 'bg-orange-500 hover:bg-orange-600 text-white'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      {isOutOfStock ? 'Out of Stock' : `Order Item (₦${item.price || 10})`}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Quick Order Dialog */}
      <Dialog open={!!orderingItem} onOpenChange={(open) => !open && setOrderingItem(null)}>
        <DialogContent className="sm:max-w-md border-orange-500/30">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base font-bold text-foreground">
              <ShoppingBag className="w-4 h-4 text-orange-500" />
              Place Order: {orderingItem?.name}
            </DialogTitle>
            <DialogDescription className="text-xs">
              Every item has a flat rate of ₦10. Placed in <span className="font-semibold text-foreground">Waiting for Chef</span> status. Stock will NOT decrement until the chef clicks Start!
            </DialogDescription>
          </DialogHeader>

          {orderingItem && (
            <div className="space-y-4 py-2">
              <div className="flex items-center gap-3 p-3 bg-muted/40 rounded-xl border border-orange-500/20">
                <img 
                  src={orderingItem.image || (orderingItem.images && orderingItem.images[0]) || "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=200&q=80"}
                  alt={orderingItem.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-bold text-sm text-foreground">{orderingItem.name}</h4>
                  <Badge variant="outline" className="text-[10px] mt-0.5">{orderingItem.category}</Badge>
                  <p className="text-xs font-semibold text-emerald-600 mt-1">₦{orderingItem.price || 10} each</p>
                </div>
              </div>

              {/* Customer Switcher Hint */}
              <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold block text-orange-950 dark:text-orange-200">Ordering as Customer:</span>
                  <span className="text-[11px] text-muted-foreground">{orderCustomerName} ({orderPhone})</span>
                </div>
                <Badge variant="outline" className="text-[10px] text-orange-600">Nigeria +234</Badge>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <Label htmlFor="order-customer" className="text-xs font-semibold">Customer Name</Label>
                  <Input 
                    id="order-customer"
                    value={orderCustomerName}
                    onChange={(e) => setOrderCustomerName(e.target.value)}
                    className="text-xs h-9 border-orange-500/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="order-table" className="text-xs font-semibold">Table / Room</Label>
                  <Input 
                    id="order-table"
                    value={orderTable}
                    onChange={(e) => setOrderTable(e.target.value)}
                    className="text-xs h-9 border-orange-500/30"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold">Quantity</Label>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setOrderQuantity(q => Math.max(1, q - 1))}
                    className="h-8 w-8 p-0 border-orange-500/30 text-orange-600"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </Button>
                  <span className="font-mono font-bold text-sm text-foreground w-8 text-center">{orderQuantity}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setOrderQuantity(q => Math.min(orderingItem.stock || 5, q + 1))}
                    className="h-8 w-8 p-0 border-orange-500/30 text-orange-600"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </Button>
                  <span className="text-xs text-muted-foreground ml-auto font-medium">
                    Total: <span className="font-bold text-emerald-600 font-mono text-sm">₦{orderQuantity * (orderingItem.price || 10)}</span>
                  </span>
                </div>
              </div>
            </div>
          )}

          <DialogFooter className="gap-2 sm:gap-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setOrderingItem(null)}
              className="text-xs"
            >
              Cancel
            </Button>
            {/* Green button for positive order placement */}
            <Button
              id="btn-confirm-place-order"
              size="sm"
              onClick={handlePlaceOrder}
              disabled={submittingOrder}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs gap-1.5"
            >
              {submittingOrder ? 'Placing Order...' : `Confirm Order (₦${orderQuantity * (orderingItem?.price || 10)})`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Comprehensive Item Creator & Editor Modal */}
      <ProductEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        productToEdit={editingProduct}
        defaultDivision={divisionId}
        onProductSaved={handleProductSaved}
        onProductDeleted={handleProductDeleted}
      />
    </div>
  );
}
