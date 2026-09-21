'use client';

import { useNavigate, Link } from 'react-router-dom';
import { useRoles } from '@/context/role-context';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LogIn, ArrowLeft, Loader2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

export default function LoginPage({ onCancel }: { onCancel?: () => void }) {
 const { loginWithGoogle, loginWithEmail, currentUser, isAuthReady } = useRoles();
 const navigate = useNavigate();
 const [isLoggingIn, setIsLoggingIn] = useState(false);
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [isFirstVisit, setIsFirstVisit] = useState(true);

 useEffect(() => {
 const hasVisited = sessionStorage.getItem('hasVisitedLogin');
 if (hasVisited) {
 setIsFirstVisit(false);
 } else {
 sessionStorage.setItem('hasVisitedLogin', 'true');
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
    <div className="min-h-screen bg-background flex flex-col justify-between p-0 relative overflow-x-hidden font-sans">
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 relative">
        {onCancel && (
          <button 
            onClick={onCancel}
            className="absolute top-6 left-6 z-50 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
        )}

        <motion.div 
          initial={{ opacity: 0, y: isFirstVisit ? 20 : 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isFirstVisit ? 0.6 : 0.3 }}
          className="w-full max-w-md relative z-10 my-8"
        >
 <div className="text-center space-y-2 mb-8">
 <div className="mx-auto w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 mb-6">
 <span className="material-icons text-primary-foreground text-2xl">diamond</span>
 </div>
 <h1 className="text-3xl font-bold tracking-tight text-foreground">Welcome Back</h1>
 <p className="text-muted-foreground">Sign in to your Orient Global account</p>
 </div>

 <Card className="border-border shadow-sm bg-surface">
 <CardContent className="p-6 md:p-8 space-y-6">
 
 <div className="space-y-3">
 <button 
 onClick={handleGoogleLogin}
 disabled={isLoggingIn || !isAuthReady}
 className="w-full h-12 bg-surface border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-all flex items-center justify-center gap-3 disabled:opacity-50"
 >
 {isLoggingIn ? (
 <Loader2 className="w-5 h-5 animate-spin" />
 ) : (
 <>
 <svg className="w-5 h-5" viewBox="0 0 24 24">
 <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
 <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
 <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
 <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
 </svg>
 Continue with Google
 </>
 )}
 </button>

 <button 
 disabled={isLoggingIn || !isAuthReady}
 className="w-full h-12 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
 >
 <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
 <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.82 1.5-.06 2.59.45 3.37 1.22-2.95 1.6-2.43 5.32.31 6.65-1.03 2.67-2.27 5.12-2.34 5.12zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
 </svg>
 Continue with Apple
 </button>
 </div>

 <div className="relative">
 <div className="absolute inset-0 flex items-center">
 <div className="w-full border-t border-border"></div>
 </div>
 <div className="relative flex justify-center text-sm">
 <span className="px-2 bg-surface text-muted-foreground">Or continue with email</span>
 </div>
 </div>

 <form onSubmit={handleEmailLogin} className="space-y-4">
 <div className="space-y-2">
 <label className="text-sm font-medium text-muted-foreground">Email</label>
 <input 
 type="email" 
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="w-full h-11 px-3 rounded-lg border border-border bg-transparent text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
 placeholder="name@example.com"
 required
 />
 </div>
 <div className="space-y-2">
 <label className="text-sm font-medium text-muted-foreground">Password</label>
 <input 
 type="password" 
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 className="w-full h-11 px-3 rounded-lg border border-border bg-transparent text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
 placeholder="••••••••"
 required
 />
 </div>
 <button 
 type="submit"
 className="w-full h-11 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary-dark transition-colors"
 >
 Sign In
 </button>
 </form>

 <div className="text-center text-sm text-muted-foreground">
 Don't have an account?{' '}
 <Link to="/signup" className="text-primary hover:text-primary-dark font-medium">
 Sign up
 </Link>
 </div>
 </CardContent>
 </Card>
        </motion.div>
      </div>

      <div className="w-full mt-12 border-t border-border/30">
        <Footer />
      </div>
    </div>
  );
}
