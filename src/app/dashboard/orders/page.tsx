'use client';

import React, { useState, useEffect } from 'react';
import { useRoles } from '@/context/role-context';
import { 
  ChefHat, Clock, AlertTriangle, CheckCircle2, Play, 
  ShoppingBag, Search, Filter, RefreshCw, Bell, Plus, 
  Store, Pizza, Gamepad2, Droplets, Wine, Sparkles, User, MapPin
} from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { orderService, CustomerOrder, AppNotification } from '@/services/orderService';
import { useNotifications } from '@/context/NotificationContext';
import { QuickOrderModal } from '@/components/QuickOrderModal';

export default function OrdersDashboardPage() {
  const { addNotification } = useNotifications();
  const [orders, setOrders] = useState<CustomerOrder[]>([]);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'awaiting_chef' | 'preparing' | 'ready'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isQuickOrderOpen, setIsQuickOrderOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);
  const [now, setNow] = useState(Date.now());

  // Real-time ticking clock for preparation timers
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Subscribe to real-time orders from Firestore
  useEffect(() => {
    const unsubOrders = orderService.subscribeToOrders((list) => {
      setOrders(list);
    });

    const unsubNotifs = orderService.subscribeToNotifications((list) => {
      setNotifications(list);
    });

    return () => {
      unsubOrders();
      unsubNotifs();
    };
  }, []);

  // Chef Confirm & Start Action
  const handleChefConfirm = async (orderId: string, prepMinutes: number = 25) => {
    setIsProcessing(orderId);
    try {
      await orderService.confirmAndStartOrder(orderId, prepMinutes);
      addNotification({
        title: "Order Confirmed & Started!",
        message: `Order #${orderId} is now preparing (${prepMinutes} min timer). Stock decremented!`,
        type: "success"
      });
    } catch (e: any) {
      addNotification({
        title: "Confirmation Error",
        message: e.message || "Failed to start order.",
        type: "error"
      });
    } finally {
      setIsProcessing(null);
    }
  };

  // Trigger 10-Minute Warning
  const handleTrigger10MinWarning = async (orderId: string) => {
    setIsProcessing(orderId);
    try {
      await orderService.sendTenMinuteWarning(orderId);
      addNotification({
        title: "10-Minute Warning Sent",
        message: `Customer notified: 10 minutes remaining for Order #${orderId}.`,
        type: "warning"
      });
    } catch (e: any) {
      addNotification({
        title: "Alert Error",
        message: e.message,
        type: "error"
      });
    } finally {
      setIsProcessing(null);
    }
  };

  // Mark Ready
  const handleMarkReady = async (orderId: string) => {
    setIsProcessing(orderId);
    try {
      await orderService.markOrderReady(orderId);
      addNotification({
        title: "Order Ready!",
        message: `Order #${orderId} marked as ready for pickup.`,
        type: "success"
      });
    } catch (e: any) {
      addNotification({
        title: "Error",
        message: e.message,
        type: "error"
      });
    } finally {
      setIsProcessing(null);
    }
  };

  // Formatting countdown
  const getRemainingTimeFormatted = (endsAt?: number | null) => {
    if (!endsAt) return null;
    const diff = endsAt - now;
    if (diff <= 0) return '00:00 (Ready)';
    const mins = Math.floor(diff / (60 * 1000));
    const secs = Math.floor((diff % (60 * 1000)) / 1000);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const filteredOrders = orders.filter(o => {
    const matchesFilter = 
      selectedFilter === 'all' ? true :
      selectedFilter === 'awaiting_chef' ? o.status === 'awaiting_chef' :
      selectedFilter === 'preparing' ? (o.status === 'preparing' || o.status === 'ten_min_warning') :
      o.status === 'ready' || o.status === 'completed';

    const matchesSearch = searchQuery.trim() === '' ? true :
      o.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      o.items.some(i => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesFilter && matchesSearch;
  });

  const awaitingChefCount = orders.filter(o => o.status === 'awaiting_chef').length;
  const preparingCount = orders.filter(o => o.status === 'preparing' || o.status === 'ten_min_warning').length;
  const readyCount = orders.filter(o => o.status === 'ready').length;

  return (
    <div className="space-y-6 max-w-[1700px] mx-auto pb-20">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500 font-mono">
              Live Kitchen & Order Dispatch Station • Role: BOSS
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight font-headline mt-1">
            Orders & Preparation Management
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Orders arrive here in real time. Chef confirms & starts prep to trigger fixed timer and auto-decrement stock.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            onClick={() => setIsQuickOrderOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs h-9 rounded-xl shadow-lg shadow-primary/20 gap-2"
          >
            <Plus className="w-4 h-4" /> Place Test Order (₦10)
          </Button>
        </div>
      </div>

      {/* Metric Stat Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div 
          onClick={() => setSelectedFilter('all')}
          className={`p-4 rounded-xl border cursor-pointer transition-all ${
            selectedFilter === 'all' 
              ? 'bg-card border-primary ring-1 ring-primary shadow-sm' 
              : 'bg-card/50 border-border/60 hover:border-border'
          }`}
        >
          <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground block">Total Orders</span>
          <span className="text-2xl font-black text-foreground">{orders.length}</span>
        </div>

        <div 
          onClick={() => setSelectedFilter('awaiting_chef')}
          className={`p-4 rounded-xl border cursor-pointer transition-all ${
            selectedFilter === 'awaiting_chef' 
              ? 'bg-amber-500/10 border-amber-500 ring-1 ring-amber-500 shadow-sm' 
              : 'bg-card/50 border-border/60 hover:border-border'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-mono tracking-wider text-amber-500 block">Awaiting Chef</span>
            {awaitingChefCount > 0 && (
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-ping" />
            )}
          </div>
          <span className="text-2xl font-black text-amber-500">{awaitingChefCount}</span>
          <span className="text-[10px] text-muted-foreground block mt-0.5">Needs Chef Confirmation</span>
        </div>

        <div 
          onClick={() => setSelectedFilter('preparing')}
          className={`p-4 rounded-xl border cursor-pointer transition-all ${
            selectedFilter === 'preparing' 
              ? 'bg-blue-500/10 border-blue-500 ring-1 ring-blue-500 shadow-sm' 
              : 'bg-card/50 border-border/60 hover:border-border'
          }`}
        >
          <span className="text-[10px] uppercase font-mono tracking-wider text-blue-500 block">In Preparation</span>
          <span className="text-2xl font-black text-blue-500">{preparingCount}</span>
          <span className="text-[10px] text-muted-foreground block mt-0.5">Timer Running</span>
        </div>

        <div 
          onClick={() => setSelectedFilter('ready')}
          className={`p-4 rounded-xl border cursor-pointer transition-all ${
            selectedFilter === 'ready' 
              ? 'bg-emerald-500/10 border-emerald-500 ring-1 ring-emerald-500 shadow-sm' 
              : 'bg-card/50 border-border/60 hover:border-border'
          }`}
        >
          <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-500 block">Ready / Served</span>
          <span className="text-2xl font-black text-emerald-500">{readyCount}</span>
          <span className="text-[10px] text-muted-foreground block mt-0.5">Customer Alerted</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-card/60 p-3 rounded-xl border border-border/60">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by Order ID, customer, item..."
            className="pl-9 h-9 text-xs bg-background"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: 'all', label: 'All' },
            { id: 'awaiting_chef', label: `Awaiting Chef (${awaitingChefCount})` },
            { id: 'preparing', label: `In Kitchen (${preparingCount})` },
            { id: 'ready', label: `Ready (${readyCount})` }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFilter === f.id
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-card/80 border border-border/60 rounded-xl overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-muted/40 text-[11px] uppercase font-mono tracking-wider">
            <TableRow>
              <TableHead className="w-[120px]">Order ID</TableHead>
              <TableHead>Customer & Destination</TableHead>
              <TableHead>Items (₦10/ea)</TableHead>
              <TableHead className="w-[110px]">Total</TableHead>
              <TableHead className="w-[150px]">Status</TableHead>
              <TableHead className="w-[150px]">Kitchen Timer</TableHead>
              <TableHead className="text-right w-[240px]">Chef Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="h-44 text-center text-muted-foreground">
                  <div className="space-y-2">
                    <ShoppingBag className="w-8 h-8 mx-auto text-muted-foreground/40" />
                    <p className="text-sm font-medium">No orders found matching this filter.</p>
                    <Button onClick={() => setIsQuickOrderOpen(true)} size="sm" variant="outline" className="text-xs">
                      Place a Test Order (₦10)
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredOrders.map(order => {
                const remainingFormatted = getRemainingTimeFormatted(order.timerEndsAt);
                const isUnder10Mins = order.timerEndsAt 
                  ? (order.timerEndsAt - now <= 10 * 60 * 1000 && order.timerEndsAt - now > 0)
                  : false;

                return (
                  <TableRow key={order.id} className="hover:bg-muted/20 border-border/40">
                    {/* Order ID */}
                    <TableCell className="font-mono text-xs font-bold text-foreground">
                      #{order.id}
                      <span className="text-[10px] text-muted-foreground block font-normal">
                        {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </TableCell>

                    {/* Customer Info */}
                    <TableCell>
                      <div className="text-xs">
                        <span className="font-bold text-foreground block">{order.customerName}</span>
                        <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] mt-0.5">
                          <MapPin className="w-3 h-3 text-primary" />
                          <span>{order.tableNumber || order.shippingAddress}</span>
                        </div>
                        {order.notes && (
                          <span className="text-[10px] text-amber-500/90 italic block mt-0.5">
                            "{order.notes}"
                          </span>
                        )}
                      </div>
                    </TableCell>

                    {/* Items */}
                    <TableCell>
                      <div className="space-y-1">
                        {order.items.map((it, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs">
                            <span className="font-semibold text-foreground">{it.name}</span>
                            <span className="font-mono text-primary text-[11px] font-bold">x{it.quantity}</span>
                            <span className="text-[10px] text-muted-foreground">(₦10)</span>
                          </div>
                        ))}
                      </div>
                    </TableCell>

                    {/* Total */}
                    <TableCell className="font-mono font-extrabold text-xs text-foreground">
                      ₦{order.totalAmount.toLocaleString()}
                    </TableCell>

                    {/* Status Badge */}
                    <TableCell>
                      {order.status === 'awaiting_chef' && (
                        <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/30 text-[11px] font-bold gap-1">
                          <Clock className="w-3 h-3" /> Awaiting Chef
                        </Badge>
                      )}
                      {order.status === 'preparing' && (
                        <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30 text-[11px] font-bold gap-1">
                          <ChefHat className="w-3 h-3" /> Preparing
                        </Badge>
                      )}
                      {order.status === 'ten_min_warning' && (
                        <Badge variant="outline" className="bg-amber-500/20 text-amber-400 border-amber-500/40 text-[11px] font-bold gap-1 animate-pulse">
                          <AlertTriangle className="w-3 h-3" /> 10-Min Alert
                        </Badge>
                      )}
                      {order.status === 'ready' && (
                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/30 text-[11px] font-bold gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Ready
                        </Badge>
                      )}
                    </TableCell>

                    {/* Kitchen Timer */}
                    <TableCell>
                      {order.timerEndsAt && order.status !== 'ready' ? (
                        <div className="space-y-0.5">
                          <div className={`font-mono text-xs font-extrabold ${isUnder10Mins ? 'text-amber-400 animate-pulse' : 'text-primary'}`}>
                            {remainingFormatted}
                          </div>
                          <span className="text-[10px] text-muted-foreground block">
                            {order.tenMinAlertSent ? '✓ 10m alert sent' : 'Waiting for 10m mark'}
                          </span>
                        </div>
                      ) : order.status === 'ready' ? (
                        <span className="text-[11px] font-bold text-emerald-500">Completed</span>
                      ) : (
                        <span className="text-[11px] text-muted-foreground italic">Not started yet</span>
                      )}
                    </TableCell>

                    {/* Chef Actions */}
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {order.status === 'awaiting_chef' && (
                          <Button
                            size="sm"
                            disabled={isProcessing === order.id}
                            onClick={() => handleChefConfirm(order.id, 25)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs h-8 rounded-lg shadow-sm gap-1"
                          >
                            <ChefHat className="w-3.5 h-3.5" />
                            Confirm & Start (25m)
                          </Button>
                        )}

                        {(order.status === 'preparing' || order.status === 'awaiting_chef') && (
                          <Button
                            size="sm"
                            variant="outline"
                            disabled={isProcessing === order.id}
                            onClick={() => handleTrigger10MinWarning(order.id)}
                            className="border-amber-500/60 text-amber-500 hover:bg-amber-500/10 text-xs h-8 rounded-lg"
                            title="Dispatches the 10-minute warning notification immediately"
                          >
                            <AlertTriangle className="w-3.5 h-3.5 mr-1" />
                            10-Min Alert
                          </Button>
                        )}

                        {order.status !== 'ready' && (
                          <Button
                            size="sm"
                            variant="secondary"
                            disabled={isProcessing === order.id}
                            onClick={() => handleMarkReady(order.id)}
                            className="text-xs h-8 rounded-lg hover:bg-emerald-500/20 hover:text-emerald-500"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Notifications Drawer Summary for BOSS */}
      <div className="bg-card/70 border border-border/60 rounded-xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-foreground">
              Universal Notifications Stream (BOSS Access)
            </h3>
          </div>
          <Badge variant="outline" className="text-[10px] font-mono text-muted-foreground">
            {notifications.length} Total Alerts
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[220px] overflow-y-auto pr-1">
          {notifications.slice(0, 9).map(n => (
            <div key={n.id} className="p-3 rounded-lg border border-border/40 bg-background/60 text-xs space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground truncate max-w-[180px]">{n.title}</span>
                <span className="text-[9px] text-muted-foreground font-mono">
                  {new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground line-clamp-2">{n.message}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Order Modal */}
      <QuickOrderModal 
        isOpen={isQuickOrderOpen}
        onClose={() => setIsQuickOrderOpen(false)}
      />
    </div>
  );
}
