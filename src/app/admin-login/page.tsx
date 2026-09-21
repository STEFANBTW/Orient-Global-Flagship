'use client';

import { useNavigate, Link } from 'react-router-dom';
import { useRoles } from '@/context/role-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, LogIn, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

export default function LoginPage({ onCancel }: { onCancel?: () => void }) {
 const { loginWithGoogle, loginWithEmail, currentUser, isAuthReady } = useRoles();
 const navigate = useNavigate();
 const [isLoggingIn, setIsLoggingIn] = useState(false);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [isFirstVisit, setIsFirstVisit] = useState(true);

 useEffect(() => {
 const hasVisited = sessionStorage.getItem('hasVisitedAdminLogin');
 if (hasVisited) {
 setIsFirstVisit(false);
 } else {
 sessionStorage.setItem('hasVisitedAdminLogin', 'true');
 }

 if (isAuthReady && currentUser) {
 navigate('/dashboard', { replace: true });
 }
 }, [currentUser, isAuthReady, navigate]);

 const handleGoogleLogin = async () => {
 setIsLoggingIn(true);
 navigate('/dashboard', { replace: true });
 };

 const handleEmailLogin = async (e: React.FormEvent) => {
 e.preventDefault();
 setIsLoggingIn(true);
 navigate('/dashboard', { replace: true });
 };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between p-0 relative overflow-x-hidden font-display">
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 relative">
        {/* Background Accents */}
 <div className="absolute top-0 left-1/4 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
 <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[600px] h-[250px] md:h-[600px] bg-muted rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

 {onCancel && (
 <button 
 onClick={onCancel}
 className="absolute top-6 left-6 z-50 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
 >
 <ArrowLeft className="w-3.5 h-3.5" /> Back to Store
 </button>
 )}

 <motion.div 
 initial={{ opacity: 0, scale: isFirstVisit ? 0.98 : 0.995 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: isFirstVisit ? 0.6 : 0.3 }}
 className="w-full max-w-3xl space-y-4 md:space-y-6 relative z-10 max-h-[95vh] flex flex-col justify-center"
 >
 <div className="text-center space-y-1">
 <div className="flex items-center justify-center gap-3 mb-1">
 <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
 <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
 </div>
 <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground uppercase italic font-headline">Admin Portal</h1>
 </div>
 <p className="text-muted-foreground font-bold uppercase tracking-[0.2em] text-[8px] md:text-[9px]">Management Access Control</p>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
 <div className="lg:col-span-2 order-2 lg:order-1">
 <Card className="border-transparent professional-shadow overflow-hidden flex flex-col h-auto max-h-[75vh] lg:max-h-none">
 <CardHeader className="border-b border-transparent bg-card/80 backdrop-blur-sm py-4 md:py-6">
 <CardTitle className="text-base md:text-xl lg:text-2xl font-bold tracking-tight">Sign In</CardTitle>
 <CardDescription className="text-[10px] md:text-xs font-medium text-muted-foreground">
 Enter your credentials to access the management dashboard.
 </CardDescription>
 </CardHeader>
 <CardContent className="p-6 md:p-10 flex-1 overflow-hidden">
 <div className="w-full max-w-md mx-auto space-y-6">
 <button 
 onClick={handleGoogleLogin}
 disabled={isLoggingIn || !isAuthReady}
 className="w-full h-11 bg-primary text-primary-foreground rounded-xl font-bold text-xs uppercase tracking-[0.1em] hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50"
 >
 {isLoggingIn ? (
 <Loader2 className="w-4 h-4 animate-spin" />
 ) : (
 <>
 <LogIn className="w-4 h-4" /> Sign in with Google
 </>
 )}
 </button>

 <div className="relative my-4">
 <div className="absolute inset-0 flex items-center">
 <div className="w-full border-t border-border"></div>
 </div>
 <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
 <span className="bg-card px-2 text-muted-foreground">Or use email</span>
 </div>
 </div>

 <form onSubmit={handleEmailLogin} className="space-y-4 text-left">
 <div className="space-y-1.5">
 <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
 <input 
 type="email" 
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="w-full h-10 px-4 rounded-xl bg-secondary border-primary/10 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-0 transition-all"
 placeholder="admin@example.com"
 required
 />
 </div>
 <div className="space-y-1.5">
 <label className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Password</label>
 <input 
 type="password" 
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 className="w-full h-10 px-4 rounded-xl bg-secondary border-primary/10 text-foreground text-sm focus:outline-none focus:border-primary focus:ring-0 transition-all"
 placeholder="••••••••"
 required
 />
 </div>
 <button 
 type="submit"
 disabled={isLoggingIn || !isAuthReady}
 className="w-full h-11 bg-foreground text-background rounded-xl font-bold text-xs uppercase tracking-[0.1em] hover:bg-foreground/90 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 mt-2"
 >
 {isLoggingIn ? (
 <Loader2 className="w-4 h-4 animate-spin" />
 ) : (
 <>
 <ShieldCheck className="w-4 h-4" /> Authenticate
 </>
 )}
 </button>
 </form>
 </div>
 </CardContent>
 </Card>
 </div>

 <div className="space-y-4 order-1 lg:order-2">
 <Card className="border-transparent professional-shadow bg-card/30">
 <CardHeader className="bg-primary/5 border-b border-transparent py-3">
 <CardTitle className="text-[10px] font-bold flex items-center gap-2 text-primary uppercase tracking-widest">
 <ShieldCheck className="w-3 h-3" /> Access Rules
 </CardTitle>
 </CardHeader>
 <CardContent className="p-4 space-y-4">
 <div className="space-y-3">
 <div className="group">
 <h4 className="text-[9px] md:text-[11px] font-bold text-foreground uppercase tracking-widest mb-1">Permissions</h4>
 <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed font-medium">
 Access is restricted based on your assigned division and tier.
 </p>
 </div>
 <div className="group">
 <h4 className="text-[9px] md:text-[11px] font-bold text-foreground uppercase tracking-widest mb-1">Approvals</h4>
 <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed font-medium">
 Staff updates require HOD or Boss authorization.
 </p>
 </div>
 </div>
 </CardContent>
 </Card>
 
 <div className="p-4 bg-card border border-transparent rounded-2xl flex flex-col items-center text-center gap-3 professional-shadow">
 <Link to="/admin-signup" className="w-full">
 <button className="w-full h-10 bg-foreground text-background rounded-xl font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 group">
 Create Account <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
 </button>
 </Link>
 </div>
 </div>
 </div>
        </motion.div>
      </div>

      <div className="w-full mt-12 border-t border-border/30">
        <Footer />
      </div>
    </div>
  );
}
