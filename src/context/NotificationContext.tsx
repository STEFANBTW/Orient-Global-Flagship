import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Notification {
 id: string;
 title: string;
 message: string;
 type: 'info' | 'success' | 'warning' | 'error';
 timestamp: string;
}

interface NotificationContextType {
 notifications: Notification[];
 addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
 removeNotification: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
 const [notifications, setNotifications] = useState<Notification[]>([]);

 const addNotification = (notification: Omit<Notification, 'id' | 'timestamp'>) => {
 const newNotification: Notification = {
 ...notification,
 id: Date.now().toString(),
 timestamp: new Date().toISOString(),
 };
 setNotifications((prev) => [...prev, newNotification]);
 // Auto-remove after 5 seconds
 setTimeout(() => removeNotification(newNotification.id), 5000);
 };

 const removeNotification = (id: string) => {
 setNotifications((prev) => prev.filter((n) => n.id !== id));
 };

 return (
 <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
 {children}
 <div className="fixed bottom-4 right-4 z-[100] space-y-2">
 {notifications.map((n) => (
 <div key={n.id} className={`p-4 rounded-lg shadow-lg border ${
 n.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' :
 n.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
 'bg-card border-border text-foreground'
 }`}>
 <h4 className="font-bold">{n.title}</h4>
 <p className="text-sm">{n.message}</p>
 </div>
 ))}
 </div>
 </NotificationContext.Provider>
 );
};

export const useNotifications = () => {
 const context = useContext(NotificationContext);
 if (!context) throw new Error('useNotifications must be used within NotificationProvider');
 return context;
};
