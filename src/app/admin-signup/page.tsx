"use client";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRoles } from "@/context/role-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Loader2, ShieldCheck, Info, ArrowLeft } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { DIVISIONS } from "@/app/lib/mock-data";
import Footer from "@/components/Footer";

export default function SignupPage() {
 const { signupWithEmail } = useRoles();
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [name, setName] = useState("");
 const [division, setDivision] = useState("bakery");
 const [role, setRole] = useState("staff");
 const [loading, setLoading] = useState(false);
 const [isFirstVisit, setIsFirstVisit] = useState(true);
 
 const navigate = useNavigate();

 useEffect(() => {
 const hasVisited = sessionStorage.getItem('hasVisitedAdminSignup');
 if (hasVisited) {
 setIsFirstVisit(false);
 } else {
 sessionStorage.setItem('hasVisitedAdminSignup', 'true');
 }
 }, []);

 const handleSignup = async (e: React.FormEvent) => {
 e.preventDefault();
 setLoading(true);
 navigate("/dashboard", { replace: true });
 };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between p-0 relative overflow-x-hidden font-display">
      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 relative">
        {/* Visual Accents */}
 <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
 <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-muted rounded-full blur-[100px] pointer-events-none" />
 
 <motion.div 
 initial={{ opacity: 0, y: isFirstVisit ? 10 : 5 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: isFirstVisit ? 0.6 : 0.3 }}
 className="w-full max-w-lg relative z-10 max-h-[90vh] flex flex-col"
 >
 <div className="mb-6 flex items-center justify-between">
 <Link to="/admin-login" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
 <ArrowLeft className="w-3.5 h-3.5" /> Back to Login
 </Link>
 <div className="flex items-center gap-2">
 <Badge variant="outline" className="text-[9px] uppercase border-primary/20 text-primary px-3 py-1">Admin Enrollment</Badge>
 </div>
 </div>

 <Card className="bg-card border-transparent professional-shadow overflow-hidden flex flex-col">
 <CardHeader className="space-y-2 text-center pb-6 border-b border-transparent bg-primary/5">
 <div className="mx-auto bg-primary w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
 <UserPlus className="w-6 h-6 text-primary-foreground" />
 </div>
 <div className="space-y-0.5">
 <CardTitle className="text-2xl font-bold tracking-tighter text-foreground uppercase italic font-headline">New Account</CardTitle>
 <CardDescription className="text-primary font-bold uppercase tracking-[0.2em] text-[9px]">
 Management Registration
 </CardDescription>
 </div>
 </CardHeader>
 <CardContent className="pt-6 pb-8 px-8 overflow-hidden">
 <form onSubmit={handleSignup} className="space-y-4">
 <div className="space-y-1">
 <Input 
 placeholder="Full Name" 
 value={name}
 onChange={(e) => setName(e.target.value)}
 className="bg-secondary border-primary/10 h-11 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-0 transition-all font-medium"
 required
 />
 </div>
 <div className="space-y-1">
 <Input 
 type="email" 
 placeholder="Email Address" 
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="bg-secondary border-primary/10 h-11 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-0 transition-all font-medium"
 required
 />
 </div>
 <div className="space-y-1">
 <Input 
 type="password" 
 placeholder="Password" 
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 className="bg-secondary border-primary/10 h-11 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:ring-0 transition-all font-medium"
 required
 />
 </div>
 <div className="grid grid-cols-2 gap-3">
 <div className="space-y-1">
 <Select value={role} onValueChange={setRole}>
 <SelectTrigger className="bg-secondary border-primary/10 h-11 text-sm text-foreground focus:border-primary focus:ring-0 transition-all font-medium">
 <SelectValue placeholder="Role" />
 </SelectTrigger>
 <SelectContent>
 <SelectItem value="boss">Boss (Tier 01)</SelectItem>
 <SelectItem value="hod">HOD (Tier 02)</SelectItem>
 <SelectItem value="staff">Staff (Tier 03)</SelectItem>
 </SelectContent>
 </Select>
 </div>
 <div className="space-y-1">
 <Select value={division} onValueChange={setDivision} disabled={role === 'boss'}>
 <SelectTrigger className="bg-secondary border-primary/10 h-11 text-sm text-foreground focus:border-primary focus:ring-0 transition-all font-medium">
 <SelectValue placeholder="Division" />
 </SelectTrigger>
 <SelectContent>
 {DIVISIONS.map((d) => (
 <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>
 </div>
 
 <div className="p-3 bg-secondary/50 border border-primary/5 rounded-xl flex gap-2">
 <Info className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
 <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider leading-tight italic">
 Boss accounts provision immediately. Others require executive approval.
 </p>
 </div>

 <Button type="submit" disabled={loading} className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-[0.2em] text-[9px] gap-2 transition-all orange-glow">
 {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
 <>
 <ShieldCheck className="w-5 h-5" />
 Create Account
 </>
 )}
 </Button>
 </form>
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
