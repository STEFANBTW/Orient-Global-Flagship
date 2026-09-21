import { useEffect } from 'react';
import { orderService, CustomerOrder } from '../services/orderService';
import { useNotifications } from '../context/NotificationContext';

export function useOrderTimerManager() {
  const { addNotification } = useNotifications();

  useEffect(() => {
    // 1. Subscribe to custom notification events
    const handleCustomNotif = (e: any) => {
      const notif = e.detail;
      if (notif) {
        addNotification({
          title: notif.title,
          message: notif.message,
          type: notif.type === 'ten_min_warning' ? 'warning' :
                notif.type === 'order_ready' ? 'success' :
                notif.type === 'order_confirmed' ? 'success' : 'info'
        });
      }
    };

    window.addEventListener('orient_new_notification', handleCustomNotif);

    // 2. Periodic timer check interval for active kitchen orders
    const interval = setInterval(async () => {
      try {
        const orders = await orderService.getOrders();
        const now = Date.now();

        for (const order of orders) {
          if (order.status === 'preparing' && order.timerEndsAt) {
            const remainingMs = order.timerEndsAt - now;

            // 10 minutes warning condition (remaining <= 10 mins and alert not yet sent)
            if (remainingMs <= 10 * 60 * 1000 && remainingMs > 0 && !order.tenMinAlertSent) {
              console.log(`[TimerManager] 10 minutes remaining for order ${order.id}. Dispatching alert!`);
              await orderService.sendTenMinuteWarning(order.id);
            }

            // Timer complete condition
            if (remainingMs <= 0) {
              console.log(`[TimerManager] Timer ended for order ${order.id}. Marking as ready!`);
              await orderService.markOrderReady(order.id);
            }
          }
        }
      } catch (err) {
        // Suppress timer check errors
      }
    }, 3000);

    return () => {
      window.removeEventListener('orient_new_notification', handleCustomNotif);
      clearInterval(interval);
    };
  }, [addNotification]);
}
