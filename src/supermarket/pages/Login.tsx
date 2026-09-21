import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

interface Props {
 onNavigate: (page: any) => void;
}

const Login: React.FC<Props> = ({ onNavigate }) => {
 const { login } = useAuth();
 const [email, setEmail] = useState('');
 const [pass, setPass] = useState('');
 const [loading, setLoading] = useState(false);

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setLoading(true);
 await login({ email, pass });
 setLoading(false);
 onNavigate('Dashboard'); // Redirect after login
 };

 return (
 <div className="min-h-screen flex items-center justify-center bg-background p-4 font-sans transition-colors duration-300">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="bg-surface rounded-2xl shadow-xl w-full max-w-md overflow-hidden flex flex-col md:flex-row border border-border"
 >
 <div className="w-full p-8">
 <div className="flex items-center gap-2 mb-8 justify-center">
 <span className="material-icons text-primary text-3xl">shopping_basket</span>
 <h1 className="text-xl font-bold tracking-tight text-foreground">
 <span className="text-primary">ORIENT</span> SUITE
 </h1>
 </div>
 
 <h2 className="text-2xl font-bold mb-2 text-center text-foreground">Welcome Back</h2>
 <p className="text-muted-foreground text-center mb-6 text-sm">Sign in to access your wholesale dashboard.</p>

 <form onSubmit={handleSubmit} className="space-y-4">
 <div>
 <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">Email Address</label>
 <input 
 type="email" 
 required
 className="w-full rounded-lg border-border bg-background text-foreground focus:ring-primary focus:border-primary"
 placeholder="you@company.com"
 value={email}
 onChange={e => setEmail(e.target.value)}
 />
 </div>
 <div>
 <label className="block text-xs font-bold text-muted-foreground uppercase mb-1">Password</label>
 <input 
 type="password" 
 required
 className="w-full rounded-lg border-border bg-background text-foreground focus:ring-primary focus:border-primary"
 placeholder="••••••••"
 value={pass}
 onChange={e => setPass(e.target.value)}
 />
 </div>
 <button 
 type="submit" 
 disabled={loading}
 className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70"
 >
 {loading ? 'Signing In...' : 'Sign In'} <span className="material-icons text-sm">arrow_forward</span>
 </button>
 </form>
 
 <div className="mt-6 text-center text-sm text-muted-foreground">
 Don't have an account? <button onClick={() => onNavigate('Register')} className="text-primary font-bold hover:underline">Create one</button>
 </div>
 <div className="mt-4 text-center">
 <button onClick={() => onNavigate('Home')} className="text-muted-foreground hover:text-foreground text-xs transition-colors">Back to Storefront</button>
 </div>
 </div>
 </motion.div>
 </div>
 );
};
export default Login;
